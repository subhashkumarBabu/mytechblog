import type { APIContext } from "astro";

export const prerender = false;

// Spaced repetition intervals in days: 1 → 7 → 30 → 90
const INTERVALS = [1, 7, 30, 90];

export async function POST({ params, locals }: APIContext) {
	const { DB } = locals.runtime.env;
	const { id } = params;

	const link = await DB.prepare(
		"SELECT review_count FROM links WHERE id = ?"
	)
		.bind(id)
		.first<{ review_count: number }>();

	if (!link) return Response.json({ error: "Not found" }, { status: 404 });

	const nextCount = link.review_count + 1;
	const intervalDays = INTERVALS[Math.min(nextCount - 1, INTERVALS.length - 1)];
	const nextReview = new Date();
	nextReview.setDate(nextReview.getDate() + intervalDays);

	const now = new Date().toISOString();
	await DB.prepare(
		`UPDATE links SET
			review_count = ?,
			last_reviewed_at = ?,
			next_review_at = ?,
			is_read = 1
		 WHERE id = ?`
	)
		.bind(nextCount, now, nextReview.toISOString().slice(0, 10), id)
		.run();

	const today = now.slice(0, 10);
	await DB.prepare(
		`INSERT INTO activity (date, links_reviewed) VALUES (?, 1)
		 ON CONFLICT(date) DO UPDATE SET links_reviewed = links_reviewed + 1`
	)
		.bind(today)
		.run();

	return Response.json({ next_review_at: nextReview.toISOString().slice(0, 10), interval_days: intervalDays });
}
