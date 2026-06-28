import type { APIContext } from "astro";

export const prerender = false;

export async function POST({ params, locals }: APIContext) {
	const { DB } = locals.runtime.env;
	const { id } = params;

	await DB.prepare(
		"UPDATE links SET is_read = 1, read_at = ? WHERE id = ?"
	)
		.bind(new Date().toISOString(), id)
		.run();

	const today = new Date().toISOString().slice(0, 10);
	await DB.prepare(
		`INSERT INTO activity (date, links_reviewed) VALUES (?, 1)
		 ON CONFLICT(date) DO UPDATE SET links_reviewed = links_reviewed + 1`
	)
		.bind(today)
		.run();

	return Response.json({ ok: true });
}
