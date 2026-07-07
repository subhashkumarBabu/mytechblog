import type { APIContext } from "astro";

export const prerender = false;

const COLS = "id, type, title, url, tags, created_at";

// Quality pool for serendipity: real titles, topic-tagged, saved within the last year.
export const RANDOM_SQL = `SELECT ${COLS} FROM links
  WHERE title IS NOT NULL AND length(title) > 25 AND tags != '[]'
    AND title NOT LIKE 'http%' AND created_at >= date('now', '-1 year')
    AND archived_at IS NULL
  ORDER BY RANDOM() LIMIT 5`;

// Same pool scoped to one topic.
const RANDOM_TAG_SQL = `SELECT ${COLS} FROM links
  WHERE title IS NOT NULL AND length(title) > 25
    AND title NOT LIKE 'http%' AND created_at >= date('now', '-1 year')
    AND tags LIKE ?1 AND archived_at IS NULL
  ORDER BY RANDOM() LIMIT 5`;

export async function GET({ request, locals }: APIContext) {
	const { DB } = locals.runtime.env;
	const url = new URL(request.url);
	const q = url.searchParams.get("q")?.trim();
	const tag = url.searchParams.get("tag")?.trim();
	const offset = Number(url.searchParams.get("offset") ?? 0) || 0;

	if (!q) {
		const { results } = tag
			? await DB.prepare(RANDOM_TAG_SQL).bind(`%"${tag}"%`).all()
			: await DB.prepare(RANDOM_SQL).all();
		return Response.json({ links: results, total: results.length, mode: "random" });
	}

	const like = `%${q}%`;
	const conditions = ["(title LIKE ?1 OR tags LIKE ?1 OR url LIKE ?1)", "archived_at IS NULL"];
	const params: (string | number)[] = [like];
	if (tag) {
		conditions.push(`tags LIKE ?${params.length + 1}`);
		params.push(`%"${tag}"%`);
	}
	const where = conditions.join(" AND ");
	const [list, count] = await Promise.all([
		DB.prepare(
			`SELECT ${COLS} FROM links WHERE ${where} ORDER BY created_at DESC LIMIT 10 OFFSET ?${params.length + 1}`,
		)
			.bind(...params, offset)
			.all(),
		DB.prepare(`SELECT COUNT(*) AS n FROM links WHERE ${where}`)
			.bind(...params)
			.first<{ n: number }>(),
	]);
	return Response.json({ links: list.results, total: count?.n ?? 0, mode: "search", offset });
}
