import type { APIContext } from "astro";

export const prerender = false;

export async function GET({ request, locals }: APIContext) {
	const { DB } = locals.runtime.env;
	const url = new URL(request.url);

	const TYPE_MAP: Record<string, string> = {
		article: "Article", repository: "Repository", youtubevideo: "YouTubeVideo",
		webpage: "WebPage", document: "Document", note: "Note", xpost: "XPost",
	};
	const typeRaw = url.searchParams.get("type");
	const type = typeRaw ? (TYPE_MAP[typeRaw.toLowerCase()] ?? typeRaw) : null;
	const tag = url.searchParams.get("tag");
	const q = url.searchParams.get("q")?.trim();
	const unread = url.searchParams.get("unread") === "1";
	const limit = Math.min(Number(url.searchParams.get("limit") ?? 50), 200);
	const offset = Number(url.searchParams.get("offset") ?? 0);

	const conditions: string[] = [];
	const params: (string | number)[] = [];

	const VALID_TYPES = new Set(Object.values(TYPE_MAP));
	if (type && VALID_TYPES.has(type)) {
		conditions.push("type = ?");
		params.push(type);
	}
	if (tag) {
		conditions.push('tags LIKE ?');
		params.push(`%"${tag}"%`);
	}
	if (q) {
		conditions.push("(title LIKE ? OR content LIKE ? OR tags LIKE ?)");
		params.push(`%${q}%`, `%${q}%`, `%${q}%`);
	}
	if (unread) {
		conditions.push("is_read = 0");
	}

	const where = conditions.length ? ` WHERE ${conditions.join(" AND ")}` : "";
	const query = `SELECT id, type, title, url, summary, tags, created_at, is_read FROM links${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`;
	params.push(limit, offset);

	const { results } = await DB.prepare(query).bind(...params).all();

	const total = await DB.prepare(`SELECT COUNT(*) as count FROM links${where}`)
		.bind(...params.slice(0, -2))
		.first<{ count: number }>();

	return Response.json({ links: results, total: total?.count ?? 0 });
}

export async function POST({ request, locals }: APIContext) {
	const { DB, AI, VECTORIZE, SAVE_TOKEN } = locals.runtime.env;

	const auth = request.headers.get("Authorization");
	if (!SAVE_TOKEN || auth !== `Bearer ${SAVE_TOKEN}`) {
		return Response.json({ error: "Unauthorized" }, { status: 401 });
	}

	let body: { url?: string; title?: string; note?: string; type?: string; tags?: string[] };
	try {
		body = await request.json();
	} catch {
		return Response.json({ error: "Invalid JSON" }, { status: 400 });
	}

	if (!body.url) {
		return Response.json({ error: "url is required" }, { status: 400 });
	}

	const id = crypto.randomUUID().replace(/-/g, "").slice(0, 14);
	const now = new Date().toISOString();
	const type = body.type ?? "WebPage";
	const tags = JSON.stringify(body.tags ?? []);
	const title = body.title ?? new URL(body.url).hostname;

	// Persist to D1 immediately
	await DB.prepare(
		`INSERT INTO links (id, type, title, url, note, tags, created_at, saved_at, ai_enriched)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0)`
	)
		.bind(id, type, title, body.url, body.note ?? null, tags, now, now)
		.run();

	// AI enrichment inline — summary + embedding
	try {
		const textForAI = [title, body.url, body.note ?? ""].filter(Boolean).join("\n");

		// Generate summary
		const summaryRes = await (AI as any).run("@cf/meta/llama-3.1-8b-instruct", {
			messages: [
				{
					role: "system",
					content:
						"You are a concise summarizer. Given a URL and title, write a 1-2 sentence summary of what this resource is about. Be specific and factual. Output only the summary, nothing else.",
				},
				{ role: "user", content: textForAI },
			],
			max_tokens: 150,
		});
		const summary = summaryRes?.response ?? null;

		// Generate embedding for semantic search
		const embedRes = await (AI as any).run("@cf/baai/bge-base-en-v1.5", {
			text: [textForAI],
		});
		const embedding = embedRes?.data?.[0];

		if (embedding) {
			await VECTORIZE.upsert([{ id, values: embedding, metadata: { type, title } }]);
		}

		// Update D1 with summary
		await DB.prepare("UPDATE links SET summary = ?, ai_enriched = 1 WHERE id = ?")
			.bind(summary, id)
			.run();

		// Update activity streak
		const today = now.slice(0, 10);
		await DB.prepare(
			`INSERT INTO activity (date, links_saved) VALUES (?, 1)
			 ON CONFLICT(date) DO UPDATE SET links_saved = links_saved + 1`
		)
			.bind(today)
			.run();

		return Response.json({ id, title, url: body.url, summary, tags, created_at: now }, { status: 201 });
	} catch (err) {
		// AI failed — link is still saved, just not enriched
		console.error("AI enrichment failed:", err);
		return Response.json({ id, title, url: body.url, summary: null, tags, created_at: now }, { status: 201 });
	}
}
