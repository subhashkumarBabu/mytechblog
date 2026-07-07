import type { APIContext } from "astro";

export const prerender = false;

// Delete: remove a link for good. The URL is recorded in deleted_links first
// so pipeline/prune_vault.py can remove the matching Obsidian note locally.
export async function POST({ params, locals }: APIContext) {
	const { DB } = locals.runtime.env;
	const { id } = params;

	const row = await DB.prepare("SELECT id, url, title FROM links WHERE id = ?")
		.bind(id)
		.first<{ id: string; url: string | null; title: string | null }>();
	if (!row) return Response.json({ error: "Not found" }, { status: 404 });

	await DB.prepare(
		`INSERT INTO deleted_links (id, url, title, deleted_at) VALUES (?, ?, ?, ?)
		 ON CONFLICT(id) DO NOTHING`,
	).bind(row.id, row.url, row.title, new Date().toISOString()).run();
	await DB.prepare("DELETE FROM links WHERE id = ?").bind(id).run();

	return Response.json({ ok: true, deleted: true });
}
