import type { APIContext } from "astro";

export const prerender = false;

const COLS = "id, type, title, url, summary, tags, created_at, review_count, next_review_at";
const QUEUE_SIZE = 5;

export type QueueItem = {
	id: string; type: string; title: string | null; url: string | null;
	summary: string | null; tags: string; created_at: string;
	review_count: number; next_review_at: string | null;
	source: "due" | "fresh";
};

// Today's queue: spaced-repetition cards that are due, topped up to `size`
// with random unread quality picks — the resurfacing engine for old saves.
export async function getQueue(DB: D1Database, size = QUEUE_SIZE): Promise<QueueItem[]> {
	const today = new Date().toISOString().slice(0, 10);

	const due = await DB.prepare(
		`SELECT ${COLS} FROM links
		 WHERE next_review_at IS NOT NULL AND next_review_at <= ? AND archived_at IS NULL
		 ORDER BY next_review_at ASC LIMIT ?`,
	)
		.bind(today, size)
		.all();

	const dueLinks = due.results as Omit<QueueItem, "source">[];
	const remaining = size - dueLinks.length;
	let fresh: Omit<QueueItem, "source">[] = [];

	if (remaining > 0) {
		// ids come from our own rows, not user input
		const excluded = dueLinks.map((l) => `'${l.id}'`).join(",") || "''";
		const res = await DB.prepare(
			`SELECT ${COLS} FROM links
			 WHERE is_read = 0 AND next_review_at IS NULL AND archived_at IS NULL
			   AND title IS NOT NULL AND length(title) > 25 AND title NOT LIKE 'http%'
			   AND id NOT IN (${excluded})
			 ORDER BY RANDOM() LIMIT ?`,
		)
			.bind(remaining)
			.all();
		fresh = res.results as Omit<QueueItem, "source">[];
	}

	return [
		...dueLinks.map((l) => ({ ...l, source: "due" as const })),
		...fresh.map((l) => ({ ...l, source: "fresh" as const })),
	];
}

export async function GET({ request, locals }: APIContext) {
	const { DB } = locals.runtime.env;
	const url = new URL(request.url);
	const size = Math.min(Number(url.searchParams.get("size") ?? QUEUE_SIZE) || QUEUE_SIZE, 20);
	const queue = await getQueue(DB, size);
	return Response.json({ queue, due_total: queue.filter((l) => l.source === "due").length });
}
