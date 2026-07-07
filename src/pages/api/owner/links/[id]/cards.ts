import type { APIContext } from "astro";
import { fetchExtract } from "../../../../../lib/extract";

export const prerender = false;

const MAX_CARDS_PER_CONCEPT = 8;

// "Card this": mine a saved link's page text into flashcards, attached to the
// best-matching track concepts. Uses the stored extract; falls back to a live
// fetch; fails honestly if the content is gone.
export async function POST({ params, locals }: APIContext) {
	const { DB, AI } = locals.runtime.env;
	const { id } = params;

	const link = await DB.prepare(
		"SELECT id, title, url, extract FROM links WHERE id = ?",
	).bind(id).first<{ id: string; title: string | null; url: string | null; extract: string | null }>();
	if (!link) return Response.json({ error: "Not found" }, { status: 404 });

	let text = link.extract;
	if (!text && link.url) {
		text = await fetchExtract(link.url);
		if (text) await DB.prepare("UPDATE links SET extract = ? WHERE id = ?").bind(text, id).run();
	}
	if (!text) {
		return Response.json({ error: "No content available — the page may be gone. Consider letting it go." }, { status: 422 });
	}

	// concepts with room, plus their existing card fronts for dedupe
	const concepts = await DB.prepare(
		`SELECT c.id, c.name,
		        (SELECT COUNT(*) FROM questions q WHERE q.concept_id = c.id AND q.kind = 'card') AS cards
		 FROM concepts c WHERE c.track = 'agentic-ai'`,
	).all<{ id: string; name: string; cards: number }>();
	const open = (concepts.results ?? []).filter((c) => c.cards < MAX_CARDS_PER_CONCEPT);
	if (!open.length) return Response.json({ error: "All concepts have full card sets." }, { status: 409 });

	const existing = await DB.prepare(
		"SELECT concept_id, prompt FROM questions WHERE kind = 'card'",
	).all<{ concept_id: string; prompt: string }>();
	const fronts = (existing.results ?? []).map((r) => r.prompt).slice(0, 150);

	let cards: { concept_id: string; front: string; back: string }[] = [];
	try {
		const res = await (AI as any).run("@cf/meta/llama-3.1-8b-instruct", {
			messages: [
				{
					role: "system",
					content:
						"You extract flashcards from an article. Each card is ONE atomic, durable fact " +
						"(term→definition, mechanism→name, X-vs-Y distinction). Skip perishable facts " +
						"(versions, prices, dates). Skip facts already covered by the EXISTING CARDS list. " +
						"Attach each card to the most relevant concept_id from the CONCEPTS list; if nothing " +
						"in the article fits any concept, return []. Return 0-5 cards as ONLY minified JSON: " +
						'[{"concept_id":"...","front":"...","back":"..."}]',
				},
				{
					role: "user",
					content:
						`CONCEPTS: ${open.map((c) => c.id).join(", ")}\n\n` +
						`EXISTING CARDS (skip duplicates): ${fronts.join(" | ").slice(0, 3000)}\n\n` +
						`ARTICLE (${link.title ?? link.url}):\n${text.slice(0, 8000)}`,
				},
			],
			max_tokens: 900,
		});
		const m = String(res?.response ?? "").match(/\[[\s\S]*\]/);
		cards = JSON.parse(m![0]);
	} catch {
		return Response.json({ error: "Card extraction failed — try again." }, { status: 502 });
	}

	const openIds = new Set(open.map((c) => c.id));
	const valid = cards.filter(
		(c) => c && openIds.has(c.concept_id) && c.front?.trim() && c.back?.trim(),
	).slice(0, 5);

	for (const c of valid) {
		const qid = `card-${crypto.randomUUID().replace(/-/g, "").slice(0, 10)}`;
		await DB.prepare(
			`INSERT INTO questions (id, concept_id, kind, prompt, answer, distractors, difficulty)
			 VALUES (?, ?, 'card', ?, ?, NULL, 1)`,
		).bind(qid, c.concept_id, c.front.trim(), c.back.trim()).run();
	}

	return Response.json({ created: valid.length, concepts: [...new Set(valid.map((c) => c.concept_id))] });
}
