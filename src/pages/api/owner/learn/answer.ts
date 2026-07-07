import type { APIContext } from "astro";
import { applyResult, gradeShort } from "../../../../lib/learning";

export const prerender = false;

export async function POST({ request, locals }: APIContext) {
	const { DB } = locals.runtime.env;

	let body: { question_id?: string; response?: string; self_correct?: boolean };
	try {
		body = await request.json();
	} catch {
		return Response.json({ error: "Invalid JSON" }, { status: 400 });
	}
	if (!body.question_id) {
		return Response.json({ error: "question_id is required" }, { status: 400 });
	}

	const q = await DB.prepare(
		"SELECT id, concept_id, kind, answer FROM questions WHERE id = ?",
	).bind(body.question_id).first<{ id: string; concept_id: string; kind: string; answer: string }>();
	if (!q) return Response.json({ error: "Not found" }, { status: 404 });

	let correct: boolean;
	if (q.kind === "mcq") {
		correct = (body.response ?? "") === q.answer;
	} else if (q.kind === "short") {
		correct = gradeShort(body.response ?? "", q.answer);
	} else {
		// free: self-graded against the rubric in P3a (AI grading lands in P3b)
		if (typeof body.self_correct !== "boolean") {
			return Response.json({ error: "self_correct is required for free questions" }, { status: 400 });
		}
		correct = body.self_correct;
	}

	const result = await applyResult(DB, q.concept_id, correct);

	const now = new Date().toISOString();
	const attemptId = crypto.randomUUID().replace(/-/g, "").slice(0, 14);
	await DB.prepare(
		"INSERT INTO attempts (id, question_id, concept_id, at, correct, kind) VALUES (?, ?, ?, ?, ?, ?)",
	).bind(attemptId, q.id, q.concept_id, now, correct ? 1 : 0, q.kind).run();
	await DB.prepare(
		`INSERT INTO activity (date, questions_answered) VALUES (?, 1)
		 ON CONFLICT(date) DO UPDATE SET questions_answered = COALESCE(questions_answered, 0) + 1`,
	).bind(now.slice(0, 10)).run();

	return Response.json({
		correct,
		answer: q.kind === "mcq" ? q.answer : q.answer.split("|")[0],
		ladder_idx: result.ladder_idx,
		next_days: result.next_days,
		credited: result.credited,
		advanced: result.advanced,
	});
}
