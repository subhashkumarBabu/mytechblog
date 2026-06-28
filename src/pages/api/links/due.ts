import type { APIContext } from "astro";

export const prerender = false;

export async function GET({ locals }: APIContext) {
	const { DB } = locals.runtime.env;
	const today = new Date().toISOString().slice(0, 10);

	const { results } = await DB.prepare(
		`SELECT * FROM links
		 WHERE next_review_at IS NOT NULL AND next_review_at <= ?
		 ORDER BY next_review_at ASC LIMIT 20`
	)
		.bind(today)
		.all();

	return Response.json({ links: results });
}
