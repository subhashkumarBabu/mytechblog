// Learning system core — scheduling, grading, implicit-credit propagation.
// Design: D:\mind\learning\DESIGN.md (Math Academy principles).

export const TRACKS: Record<string, string> = {
	"agentic-ai": "Agentic AI",
	"agentic-engineering": "Agentic Engineering",
};
export const DEFAULT_TRACK = "agentic-ai";

export function resolveTrack(raw: string | null | undefined): string {
	return raw && raw in TRACKS ? raw : DEFAULT_TRACK;
}

export const INTERVALS = [1, 3, 7, 14, 30, 60, 120]; // days
export const MASTERY_GATE = 2; // ladder_idx that unlocks dependents
// P3b: the placement diagnostic can pre-grant deep mastery, so the unlock
// gate is back at the designed threshold (P3a temporarily ran it at 1).
export const UNLOCK_GATE = 2;
export const CREDIT_DEPTH = 3;
export const DAILY_NEW = 3;
export const SESSION_CAP = 15;

export type QuestionRow = {
	id: string; concept_id: string; kind: "mcq" | "short" | "free" | "card";
	prompt: string; answer: string; distractors: string | null; difficulty: number;
};

export type SessionQuestion = {
	id: string; kind: "mcq" | "short" | "free" | "card"; difficulty: number;
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
	if (q.kind === "free") out.rubric = q.answer; // AI-graded, rubric shown after
	if (q.kind === "card") out.rubric = q.answer; // flashcard back, shown on flip
	return out;
}

// Difficulty band by ladder position, adjusted by rolling success (~80% target):
// consistently >90% right → harder band; <65% → easier band.
const BANDS = [[1, 2], [2, 3], [3, 4]];

function bandFor(ladderIdx: number, successRate: number | null): number[] {
	let band = ladderIdx <= 1 ? 0 : ladderIdx <= 3 ? 1 : 2;
	if (successRate !== null) {
		if (successRate > 0.9) band = Math.min(band + 1, BANDS.length - 1);
		else if (successRate < 0.65) band = Math.max(band - 1, 0);
	}
	return BANDS[band];
}

function pickForReview(qs: QuestionRow[], ladderIdx: number, successRate: number | null): QuestionRow[] {
	const bands = bandFor(ladderIdx, successRate);
	const pool = qs.filter((q) => bands.includes(q.difficulty));
	const from = pool.length ? pool : qs;
	return [from[Math.floor(Math.random() * from.length)]];
}

// Rolling success per concept from the most recent attempts (up to 6 each).
async function successRates(DB: D1Database, conceptIds: string[]): Promise<Map<string, number>> {
	if (!conceptIds.length) return new Map();
	const inList = conceptIds.map((i) => `'${i}'`).join(",");
	const res = await DB.prepare(
		`SELECT concept_id, correct FROM attempts WHERE concept_id IN (${inList})
		 ORDER BY at DESC LIMIT 300`,
	).all<{ concept_id: string; correct: number }>();
	const grouped = new Map<string, number[]>();
	for (const r of res.results ?? []) {
		const arr = grouped.get(r.concept_id) ?? [];
		if (arr.length < 6) { arr.push(r.correct); grouped.set(r.concept_id, arr); }
	}
	const rates = new Map<string, number>();
	for (const [cid, arr] of grouped) {
		if (arr.length >= 3) rates.set(cid, arr.reduce((a, b) => a + b, 0) / arr.length);
	}
	return rates;
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

	const rates = await successRates(DB, dueRows.map((c) => c.id));
	const newIds = new Set(freshRows.map((c) => c.id));
	let budget = SESSION_CAP;
	const items: SessionItem[] = [];
	for (const c of all) {
		const qs = byConcept.get(c.id) ?? [];
		if (!qs.length) continue;
		const picked = newIds.has(c.id)
			? pickForIntro(qs)
			: pickForReview(qs, c.ladder_idx, rates.get(c.id) ?? null);
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

// ── placement diagnostic ────────────────────────────────────────────────────
// Probe ~12 concepts from deep to shallow; a correct answer grants provisional
// mastery to the concept's full prereq closure, so the learner never grinds
// through foundations they already know. See learning/DESIGN.md.

const DIAG_PER_BAND = 3;
const DIAG_BANDS = [[7, 99], [5, 6], [3, 4], [0, 2]]; // depth ranges, deep first

type Edge = { concept_id: string; prereq_id: string };

async function loadGraph(DB: D1Database, track: string) {
	const [concepts, edges] = await Promise.all([
		DB.prepare("SELECT id, name, module FROM concepts WHERE track = ?").bind(track)
			.all<{ id: string; name: string; module: string }>(),
		DB.prepare(
			`SELECT p.concept_id, p.prereq_id FROM concept_prereqs p
			 JOIN concepts c ON c.id = p.concept_id WHERE c.track = ?`,
		).bind(track).all<Edge>(),
	]);
	const prereqs = new Map<string, string[]>();
	for (const e of edges.results ?? []) {
		if (!prereqs.has(e.concept_id)) prereqs.set(e.concept_id, []);
		prereqs.get(e.concept_id)!.push(e.prereq_id);
	}
	return { concepts: concepts.results ?? [], prereqs };
}

function depthOf(id: string, prereqs: Map<string, string[]>, memo = new Map<string, number>()): number {
	if (memo.has(id)) return memo.get(id)!;
	const ps = prereqs.get(id) ?? [];
	const d = ps.length ? 1 + Math.max(...ps.map((p) => depthOf(p, prereqs, memo))) : 0;
	memo.set(id, d);
	return d;
}

export function closureOf(id: string, prereqs: Map<string, string[]>): string[] {
	const seen = new Set<string>([id]);
	const stack = [id];
	while (stack.length) {
		for (const p of prereqs.get(stack.pop()!) ?? []) {
			if (!seen.has(p)) { seen.add(p); stack.push(p); }
		}
	}
	return [...seen];
}

export type DiagProbe = {
	concept: { id: string; name: string; module: string };
	closure: string[]; // concept + all ancestors — granted on a correct answer
	question: SessionQuestion;
};

// The plan: per depth band (deep first) pick the concepts with the largest
// prereq closures — each correct answer clears the most ground. Client skips
// probes whose concept was already granted by an earlier correct answer.
export async function buildDiagnostic(DB: D1Database, track = "agentic-ai"): Promise<DiagProbe[]> {
	const { concepts, prereqs } = await loadGraph(DB, track);
	const memo = new Map<string, number>();
	const byBand: typeof concepts[] = DIAG_BANDS.map(() => []);
	for (const c of concepts) {
		const d = depthOf(c.id, prereqs, memo);
		const band = DIAG_BANDS.findIndex(([lo, hi]) => d >= lo && d <= hi);
		if (band >= 0) byBand[band].push(c);
	}
	const picked = byBand.flatMap((band) =>
		band
			.map((c) => ({ c, size: closureOf(c.id, prereqs).length }))
			.sort((a, b) => b.size - a.size)
			.slice(0, DIAG_PER_BAND)
			.map(({ c }) => c),
	);
	if (!picked.length) return [];

	const inList = picked.map((c) => `'${c.id}'`).join(",");
	const qres = await DB.prepare(
		`SELECT id, concept_id, kind, prompt, answer, distractors, difficulty
		 FROM questions WHERE concept_id IN (${inList}) AND kind = 'mcq' AND difficulty = 2`,
	).all<QuestionRow>();
	const qByConcept = new Map((qres.results ?? []).map((q) => [q.concept_id, q]));

	const probes: DiagProbe[] = [];
	for (const c of picked) {
		const q = qByConcept.get(c.id);
		if (!q) continue;
		let distractors: string[] = [];
		try { distractors = JSON.parse(q.distractors || "[]"); } catch {}
		probes.push({
			concept: c,
			closure: closureOf(c.id, prereqs),
			question: {
				id: q.id, kind: "mcq", difficulty: q.difficulty, prompt: q.prompt,
				options: [q.answer, ...distractors].sort(() => Math.random() - 0.5),
			},
		});
	}
	return probes;
}

// Grant provisional mastery (ladder 2, flagged provisional) to a closure —
// only where nothing equal or better exists. Converts to real mastery on the
// first successful due review (applyResult clears the flag).
export async function grantClosure(DB: D1Database, conceptIds: string[]): Promise<number> {
	const now = new Date().toISOString();
	const next = (() => { const d = new Date(); d.setDate(d.getDate() + INTERVALS[1]); return d.toISOString().slice(0, 10); })();
	let granted = 0;
	for (const cid of conceptIds) {
		const ins = await DB.prepare(
			`INSERT INTO mastery (concept_id, ladder_idx, implicit_credit, next_review_at, mastered_at, provisional)
			 VALUES (?, ?, 0, ?, ?, 1) ON CONFLICT(concept_id) DO NOTHING`,
		).bind(cid, MASTERY_GATE, next, now).run();
		if (ins.meta.changes > 0) { granted++; continue; }
		const upd = await DB.prepare(
			`UPDATE mastery SET ladder_idx = ?, provisional = 1, next_review_at = ?,
			   mastered_at = COALESCE(mastered_at, ?)
			 WHERE concept_id = ? AND ladder_idx < ?`,
		).bind(MASTERY_GATE, next, now, cid, MASTERY_GATE).run();
		granted += upd.meta.changes > 0 ? 1 : 0;
	}
	return granted;
}
