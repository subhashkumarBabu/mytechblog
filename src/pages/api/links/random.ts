import type { APIContext } from "astro";

export const prerender = false;

export async function GET({ locals }: APIContext) {
	const { DB } = locals.runtime.env;

	const { results } = await DB.prepare(
		"SELECT * FROM links ORDER BY RANDOM() LIMIT 3"
	).all();

	return Response.json({ links: results });
}
