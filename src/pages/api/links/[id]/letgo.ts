import type { APIContext } from "astro";

export const prerender = false;

// "Let go": retire a link from the review queue for good.
export async function POST({ params, locals }: APIContext) {
	const { DB } = locals.runtime.env;
	const { id } = params;

	await DB.prepare(
		"UPDATE links SET next_review_at = NULL, is_read = 1 WHERE id = ?",
	)
		.bind(id)
		.run();

	const today = new Date().toISOString().slice(0, 10);
	await DB.prepare(
		`INSERT INTO activity (date, links_reviewed) VALUES (?, 1)
		 ON CONFLICT(date) DO UPDATE SET links_reviewed = links_reviewed + 1`,
	)
		.bind(today)
		.run();

	return Response.json({ ok: true });
}
