import type { APIContext } from "astro";

export const prerender = false;

// "Snooze": defer to tomorrow without advancing the spaced-repetition ladder.
// Deliberately no activity credit — snoozing everything shouldn't keep a streak alive.
export async function POST({ params, locals }: APIContext) {
	const { DB } = locals.runtime.env;
	const { id } = params;

	await DB.prepare(
		"UPDATE links SET next_review_at = date('now', '+1 day') WHERE id = ?",
	)
		.bind(id)
		.run();

	return Response.json({ next_review_at: "tomorrow" });
}
