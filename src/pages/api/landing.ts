import type { APIContext } from "astro";

export const prerender = false;

const COLS = "id, type, title, url, tags, created_at";

// Quality pool for serendipity: real titles, topic-tagged, recent-ish.
export const RANDOM_SQL = `SELECT ${COLS} FROM links
  WHERE title IS NOT NULL AND length(title) > 25 AND tags != '[]'
    AND title NOT LIKE 'http%' AND created_at >= '2022'
  ORDER BY RANDOM() LIMIT 5`;

export async function GET({ request, locals }: APIContext) {
	const { DB } = locals.runtime.env;
	const url = new URL(request.url);
	const q = url.searchParams.get("q")?.trim();
	const offset = Number(url.searchParams.get("offset") ?? 0) || 0;

	if (!q) {
		const { results } = await DB.prepare(RANDOM_SQL).all();
		return Response.json({ links: results, total: results.length, mode: "random" });
	}

	const like = `%${q}%`;
	const where = "title LIKE ?1 OR tags LIKE ?1 OR url LIKE ?1";
	const [list, count] = await Promise.all([
		DB.prepare(
			`SELECT ${COLS} FROM links WHERE ${where} ORDER BY created_at DESC LIMIT 10 OFFSET ?2`,
		)
			.bind(like, offset)
			.all(),
		DB.prepare(`SELECT COUNT(*) AS n FROM links WHERE ${where}`)
			.bind(like)
			.first<{ n: number }>(),
	]);
	return Response.json({ links: list.results, total: count?.n ?? 0, mode: "search", offset });
}
