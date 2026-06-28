import type { APIContext } from "astro";

export const prerender = false;

export async function GET({ locals }: APIContext) {
	const { DB } = locals.runtime.env;

	const [total, readCount, dueCount, streak] = await Promise.all([
		DB.prepare("SELECT COUNT(*) as n FROM links").first<{ n: number }>(),
		DB.prepare("SELECT COUNT(*) as n FROM links WHERE is_read = 1").first<{ n: number }>(),
		DB.prepare(
			"SELECT COUNT(*) as n FROM links WHERE next_review_at IS NOT NULL AND next_review_at <= date('now')"
		).first<{ n: number }>(),
		// Streak = consecutive days with activity ending today
		DB.prepare(`
			WITH RECURSIVE dates AS (
				SELECT date('now') as d
				UNION ALL
				SELECT date(d, '-1 day') FROM dates WHERE d > date('now', '-365 day')
			),
			streak_check AS (
				SELECT d, (SELECT 1 FROM activity WHERE date = d AND (links_saved + links_reviewed) > 0) as active
				FROM dates
			)
			SELECT COUNT(*) as streak FROM (
				SELECT d FROM streak_check
				WHERE active = 1
				AND d >= (
					SELECT MIN(d) FROM (
						SELECT d FROM streak_check WHERE active IS NULL ORDER BY d DESC LIMIT 1
					) missed
				)
			)
		`).first<{ streak: number }>(),
	]);

	return Response.json({
		total: total?.n ?? 0,
		read: readCount?.n ?? 0,
		due: dueCount?.n ?? 0,
		streak: streak?.streak ?? 0,
	});
}
