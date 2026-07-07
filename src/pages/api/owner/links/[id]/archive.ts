import type { APIContext } from "astro";

export const prerender = false;

// Archive: hide a link from the library, search, shuffle, and review queue.
// Reversible — POST {"undo": true} to restore.
export async function POST({ params, request, locals }: APIContext) {
	const { DB } = locals.runtime.env;
	const { id } = params;

	let undo = false;
	try {
		const body = await request.json() as { undo?: boolean };
		undo = body.undo === true;
	} catch {}

	const res = undo
		? await DB.prepare("UPDATE links SET archived_at = NULL WHERE id = ?").bind(id).run()
		: await DB.prepare(
				"UPDATE links SET archived_at = ?, next_review_at = NULL WHERE id = ?",
			).bind(new Date().toISOString(), id).run();

	if (res.meta.changes === 0) return Response.json({ error: "Not found" }, { status: 404 });
	return Response.json({ ok: true, archived: !undo });
}
