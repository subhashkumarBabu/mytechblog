import type { APIContext } from "astro";
import { buildDiagnostic, grantClosure } from "../../../../lib/learning";

export const prerender = false;

// GET: the placement plan — ordered probes, deep concepts first. The client
// walks the list, skipping probes already covered by earlier correct answers.
export async function GET({ locals }: APIContext) {
	const { DB } = locals.runtime.env;
	const probes = await buildDiagnostic(DB);
	const mastered = await DB.prepare(
		"SELECT concept_id FROM mastery WHERE ladder_idx >= 2",
	).all<{ concept_id: string }>();
	return Response.json({
		probes,
		already_mastered: (mastered.results ?? []).map((r) => r.concept_id),
	});
}

// POST: answer one probe. Correct grants provisional mastery to the closure;
// wrong just records the attempt — the concept gets learned normally later.
export async function POST({ request, locals }: APIContext) {
	const { DB } = locals.runtime.env;

	let body: { question_id?: string; response?: string; closure?: string[] };
	try {
		body = await request.json();
	} catch {
		return Response.json({ error: "Invalid JSON" }, { status: 400 });
	}
	if (!body.question_id || !Array.isArray(body.closure)) {
		return Response.json({ error: "question_id and closure are required" }, { status: 400 });
	}

	const q = await DB.prepare(
		"SELECT id, concept_id, answer FROM questions WHERE id = ?",
	).bind(body.question_id).first<{ id: string; concept_id: string; answer: string }>();
	if (!q) return Response.json({ error: "Not found" }, { status: 404 });

	const correct = (body.response ?? "") === q.answer;

	const now = new Date().toISOString();
	const attemptId = crypto.randomUUID().replace(/-/g, "").slice(0, 14);
	await DB.prepare(
		"INSERT INTO attempts (id, question_id, concept_id, at, correct, kind) VALUES (?, ?, ?, ?, ?, 'diag')",
	).bind(attemptId, q.id, q.concept_id, now, correct ? 1 : 0).run();

	let granted = 0;
	if (correct) {
		// trust the closure ids only if they exist as concepts (defense in depth)
		const inList = body.closure.map((c) => `'${String(c).replace(/'/g, "")}'`).join(",");
		const valid = await DB.prepare(
			`SELECT id FROM concepts WHERE id IN (${inList})`,
		).all<{ id: string }>();
		granted = await grantClosure(DB, (valid.results ?? []).map((r) => r.id));
	}

	return Response.json({ correct, answer: q.answer, granted });
}
