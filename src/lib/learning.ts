// Learning system core — scheduling, grading, implicit-credit propagation.
// Design: D:\mind\learning\DESIGN.md (Math Academy principles).

export const INTERVALS = [1, 3, 7, 14, 30, 60, 120]; // days
export const MASTERY_GATE = 2; // ladder_idx that unlocks dependents (target)
// P3a bootstrap: unlock dependents at ladder_idx >= 1 so the single-root graph
// opens up without weeks of grind; tighten to MASTERY_GATE when the placement
// diagnostic ships (P3b) and can pre-grant deep mastery.
export const UNLOCK_GATE = 1;
export const CREDIT_DEPTH = 3;
export const DAILY_NEW = 3;
export const SESSION_CAP = 15;

export type QuestionRow = {
	id: string; concept_id: string; kind: "mcq" | "short" | "free";
	prompt: string; answer: string; distractors: string | null; difficulty: number;
};

export type SessionQuestion = {
	id: string; kind: "mcq" | "short" | "free"; difficulty: number;
	prompt: string; options?: string[]; rubric?: string;
};

export type SessionItem = {
	concept: { id: string; name: string; module: string; summary: string | null };
	is_new: boolean;
	ladder_idx: number;
	questions: SessionQuestion[];
};

export function intervalFor(ladderIdx: number): number {
	return INTERVALS[Math.min(Math.max(ladderIdx - 1, 0), INTERVALS.length - 1)];
}

export function normalize(s: string): string {
	return s
		.toLowerCase()
		.replace(/[_-]/g, " ")
		.replace(/[^\p{L}\p{N} ]/gu, "")
		.replace(/\b(the|a|an)\b/g, " ")
		.replace(/\s+/g, " ")
		.trim();
}

export function gradeShort(response: string, answer: string): boolean {
	const r = normalize(response);
	return r.length > 0 && answer.split("|").some((v) => normalize(v) === r);
}

function shuffle<T>(arr: T[]): T[] {
	const a = [...arr];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

function toSessionQuestion(q: QuestionRow): SessionQuestion {
	const out: SessionQuestion = {
		id: q.id, kind: q.kind, difficulty: q.difficulty, prompt: q.prompt,
	};
	if (q.kind === "mcq") {
		let distractors: string[] = [];
		try { distractors = JSON.parse(q.distractors || "[]"); } catch {}
		out.options = shuffle([q.answer, ...distractors]);
	}
	if (q.kind === "free") out.rubric = q.answer; // self-graded in P3a; AI-graded in P3b
	return out;
}

// Difficulty band by ladder position (~80% success targeting, static version).
function preferredDifficulties(ladderIdx: number): number[] {
	if (ladderIdx <= 1) return [1, 2];
	if (ladderIdx <= 3) return [2, 3];
	return [3, 4];
}

function pickForReview(qs: QuestionRow[], ladderIdx: number): QuestionRow[] {
	const bands = preferredDifficulties(ladderIdx);
	const pool = qs.filter((q) => bands.includes(q.difficulty));
	const from = pool.length ? pool : qs;
	return [from[Math.floor(Math.random() * from.length)]];
}

function pickForIntro(qs: QuestionRow[]): QuestionRow[] {
	// New concept: the two easiest questions, preferring distinct kinds.
	const sorted = [...qs].sort((a, b) => a.difficulty - b.difficulty);
	const first = sorted[0];
	const second = sorted.find((q) => q !== first && q.kind !== first.kind) ?? sorted[1];
	return [first, second].filter(Boolean);
}

// Round-robin across modules so practice interleaves.
function interleave(items: SessionItem[]): SessionItem[] {
	const byModule = new Map<string, SessionItem[]>();
	for (const it of items) {
		if (!byModule.has(it.concept.module)) byModule.set(it.concept.module, []);
		byModule.get(it.concept.module)!.push(it);
	}
	const buckets = [...byModule.values()];
	const out: SessionItem[] = [];
	let added = true;
	while (added) {
		added = false;
		for (const b of buckets) {
			const next = b.shift();
			if (next) { out.push(next); added = true; }
		}
	}
	return out;
}

type ConceptRow = { id: string; name: string; module: string; summary: string | null; ladder_idx: number };

export async function buildSession(DB: D1Database, track = "agentic-ai"): Promise<{
	items: SessionItem[]; due: number; fresh: number;
}> {
	const today = new Date().toISOString().slice(0, 10);

	const due = await DB.prepare(
		`SELECT c.id, c.name, c.module, c.summary, m.ladder_idx
		 FROM mastery m JOIN concepts c ON c.id = m.concept_id
		 WHERE c.track = ? AND m.next_review_at IS NOT NULL AND m.next_review_at <= ?
		 ORDER BY m.next_review_at ASC LIMIT ?`,
	).bind(track, today, SESSION_CAP - DAILY_NEW).all<ConceptRow>();

	const frontier = await DB.prepare(
		`SELECT c.id, c.name, c.module, c.summary, 0 AS ladder_idx
		 FROM concepts c
		 WHERE c.track = ?
		   AND c.id NOT IN (SELECT concept_id FROM mastery)
		   AND NOT EXISTS (
		     SELECT 1 FROM concept_prereqs p
		     LEFT JOIN mastery pm ON pm.concept_id = p.prereq_id
		     WHERE p.concept_id = c.id AND (pm.ladder_idx IS NULL OR pm.ladder_idx < ?)
		   )
		 ORDER BY c.rowid LIMIT ?`,
	).bind(track, UNLOCK_GATE, DAILY_NEW).all<ConceptRow>();

	const dueRows = due.results ?? [];
	const freshRows = frontier.results ?? [];
	const all = [...dueRows, ...freshRows];
	if (!all.length) return { items: [], due: 0, fresh: 0 };

	const ids = all.map((c) => `'${c.id}'`).join(","); // ids from our own rows
	const qres = await DB.prepare(
		`SELECT id, concept_id, kind, prompt, answer, distractors, difficulty
		 FROM questions WHERE concept_id IN (${ids})`,
	).all<QuestionRow>();
	const byConcept = new Map<string, QuestionRow[]>();
	for (const q of qres.results ?? []) {
		if (!byConcept.has(q.concept_id)) byConcept.set(q.concept_id, []);
		byConcept.get(q.concept_id)!.push(q);
	}

	const newIds = new Set(freshRows.map((c) => c.id));
	let budget = SESSION_CAP;
	const items: SessionItem[] = [];
	for (const c of all) {
		const qs = byConcept.get(c.id) ?? [];
		if (!qs.length) continue;
		const picked = newIds.has(c.id) ? pickForIntro(qs) : pickForReview(qs, c.ladder_idx);
		if (picked.length > budget) break;
		budget -= picked.length;
		items.push({
			concept: { id: c.id, name: c.name, module: c.module, summary: c.summary },
			is_new: newIds.has(c.id),
			ladder_idx: c.ladder_idx,
			questions: picked.map(toSessionQuestion),
		});
	}

	return { items: interleave(items), due: dueRows.length, fresh: freshRows.length };
}

// ── mastery update ──────────────────────────────────────────────────────────

function plusDays(days: number): string {
	const d = new Date();
	d.setDate(d.getDate() + days);
	return d.toISOString().slice(0, 10);
}

export async function applyResult(
	DB: D1Database, conceptId: string, correct: boolean,
): Promise<{ ladder_idx: number; next_days: number; credited: number; advanced: number }> {
	const now = new Date().toISOString();
	await DB.prepare(
		`INSERT INTO mastery (concept_id, ladder_idx, implicit_credit) VALUES (?, 0, 0)
		 ON CONFLICT(concept_id) DO NOTHING`,
	).bind(conceptId).run();

	const row = await DB.prepare("SELECT ladder_idx, mastered_at FROM mastery WHERE concept_id = ?")
		.bind(conceptId).first<{ ladder_idx: number; mastered_at: string | null }>();
	const idx = row?.ladder_idx ?? 0;

	let newIdx: number;
	let nextDays: number;
	if (correct) {
		newIdx = Math.min(idx + 1, INTERVALS.length);
		nextDays = intervalFor(newIdx);
	} else {
		newIdx = Math.max(idx - 2, 0);
		nextDays = 1;
	}
	const mastered = row?.mastered_at ?? (newIdx >= MASTERY_GATE ? now : null);
	await DB.prepare(
		`UPDATE mastery SET ladder_idx = ?, next_review_at = ?, mastered_at = ?, provisional = 0
		 WHERE concept_id = ?`,
	).bind(newIdx, plusDays(nextDays), mastered, conceptId).run();

	let credited = 0;
	let advanced = 0;
	if (correct) {
		// BFS up the prereq DAG: 0.5^depth credit, summed across paths.
		const credit = new Map<string, number>();
		let frontier = [conceptId];
		for (let depth = 1; depth <= CREDIT_DEPTH && frontier.length; depth++) {
			const inList = frontier.map((i) => `'${i}'`).join(",");
			const res = await DB.prepare(
				`SELECT concept_id, prereq_id FROM concept_prereqs WHERE concept_id IN (${inList})`,
			).all<{ concept_id: string; prereq_id: string }>();
			const next: string[] = [];
			for (const e of res.results ?? []) {
				credit.set(e.prereq_id, (credit.get(e.prereq_id) ?? 0) + 0.5 ** depth);
				next.push(e.prereq_id);
			}
			frontier = [...new Set(next)];
		}
		for (const [pid, amt] of credit) {
			// only concepts already learned accumulate implicit credit
			const upd = await DB.prepare(
				`UPDATE mastery SET implicit_credit = implicit_credit + ?
				 WHERE concept_id = ? AND ladder_idx >= 1`,
			).bind(amt, pid).run();
			if (upd.meta.changes > 0) credited++;
		}
		const ripe = await DB.prepare(
			`SELECT concept_id, ladder_idx FROM mastery WHERE implicit_credit >= 1.0`,
		).all<{ concept_id: string; ladder_idx: number }>();
		for (const r of ripe.results ?? []) {
			const rIdx = Math.min(r.ladder_idx + 1, INTERVALS.length);
			await DB.prepare(
				`UPDATE mastery SET ladder_idx = ?, implicit_credit = 0, next_review_at = ?,
				   mastered_at = COALESCE(mastered_at, ?)
				 WHERE concept_id = ?`,
			).bind(rIdx, plusDays(intervalFor(rIdx)), rIdx >= MASTERY_GATE ? now : null, r.concept_id).run();
			advanced++;
		}
	}

	return { ladder_idx: newIdx, next_days: nextDays, credited, advanced };
}
