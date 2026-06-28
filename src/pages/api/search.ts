import type { APIContext } from "astro";

export const prerender = false;

export async function GET({ request, locals }: APIContext) {
	const { DB, AI, VECTORIZE } = locals.runtime.env;
	const url = new URL(request.url);
	const q = url.searchParams.get("q")?.trim();

	if (!q) return Response.json({ links: [] });

	// Generate embedding for the query
	const embedRes = await (AI as any).run("@cf/baai/bge-base-en-v1.5", {
		text: [q],
	});
	const embedding = embedRes?.data?.[0];

	if (!embedding) return Response.json({ links: [] });

	// Query Vectorize for nearest neighbours
	const matches = await VECTORIZE.query(embedding, { topK: 10, returnMetadata: "all" });

	if (!matches.matches.length) return Response.json({ links: [] });

	const ids = matches.matches.map((m: any) => m.id);
	const placeholders = ids.map(() => "?").join(",");
	const { results } = await DB.prepare(
		`SELECT * FROM links WHERE id IN (${placeholders})`
	)
		.bind(...ids)
		.all();

	// Preserve Vectorize ranking order
	const byId = Object.fromEntries(results.map((r: any) => [r.id, r]));
	const ordered = ids.map((id: string) => byId[id]).filter(Boolean);

	return Response.json({ links: ordered, query: q });
}
