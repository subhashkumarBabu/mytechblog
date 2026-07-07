---
title: "Programming"
topic: "programming"
draft: false
generated: "2026-07-07"
sources: "2,930 tagged links, curated from the ~200 most recent (2025\u20132026)"
---

**2,930 saved links**, 2015–2026 (peak: 2023). Your second-biggest tag and the vault's catch-all — anything about writing software that didn't have a more specific home landed here for a decade. Treat this page as a router: the language and tooling clusters live on their own pages, and what remains is the story the recent saves actually tell — a near-total tilt toward AI-assisted coding. The fact that simonwillison.net sits among your top sources for a tag this old is the tell: "programming" quietly became "agentic engineering" somewhere around 2025.

**Related:** [Python](/wiki/python/) · [Go](/wiki/go/) · [JavaScript & Web](/wiki/javascript-and-web/) · [Git](/wiki/git/) · [Linux & CLI](/wiki/linux-and-cli/) · [AI Agents](/wiki/ai-agents/)

---

## The tipping point — what happened to the job

The 2026 saves are one long argument about what a software engineer even is now.

- [Software engineering at the tipping point](https://www.youtube.com/watch?si=Z2R6oilj8_GktmgN&v=2n41YjR5QfU&feature=youtu.be) (video) — the note says: "if you have 40 minutes, watch this. Don't speed it up."
- [The AI-Native Developer (ACM Queue)](https://queue.acm.org/detail.cfm?id=3807961) — which parts of development are still worth doing yourself; the academic version of the question.
- [Addy Osmani on the "new SDLC"](https://addyosmani.com/blog/new-sdlc-vibe-coding/) — the phases, redrawn for the autocomplete-to-autonomous-agents progression; his [comprehension debt](https://addyosmani.com/blog/comprehension-debt/) piece is the necessary counterweight.
- [Anthropic's research on how agentic coding amplifies some skills and substitutes for others](https://www.anthropic.com/research/claude-code-expertise) — actual data instead of vibes.
- [Armin Ronacher: what I still don't let agents ship](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/) — code needing long-term maintenance stays human; the most credible line-drawing you've saved.
- [Vibe coder vs. software engineer](https://yusufaytas.com/vibe-coder-vs-software-engineer) and [Willison: vibe coding and agentic engineering are converging](https://simonw.substack.com/p/vibe-coding-and-agentic-engineering) — the definitional skirmish.
- [Rachel Thomas on the psychology of vibe coding](https://www.fast.ai/posts/2026-01-28-dark-flow/) — why it trips people up even while making them faster.
- [Pragmatic Engineer research: how GitHub fumbled its agentic-coding lead](https://newsletter.pragmaticengineer.com/p/ai-tooling-2026) · [Bloomberg on AI coding as an existential threat to the Indian tech sector](https://www.bloomberg.com/news/features/2026-04-16/the-ai-revolution-leaves-india-s-tech-graduates-unprepared-for-the-future) — the note admits: "I've been waiting for articles that point this out."
- [Building in the age of collaborative coding](https://www.builder.io/blog/building-in-the-age-of-collaborative-coding) — how mature teams work with agents; the note's plea: "More please!"

## Agentic engineering — the practice

The craft beneath the hype: harnesses, feedback loops, and supervision. This is layers-first thinking applied to coding — exactly your angle.

- [The better question: "what feedback can the agent use without asking me?"](https://generativeprogrammer.com/p/stop-babysitting-your-coding-agent) — types, tests, lint, traces; the whole discipline in one reframe. Same author on [the evolution from prompts to harnesses and supervised loops](https://generativeprogrammer.com/p/from-test-driven-to-loop-driven-development).
- [Harness engineering, the resource](https://walkinglabs.github.io/learn-harness-engineering/) — "a capable model is not enough"; and [the distinction that stuck](https://nlp.elvissaravia.com/p/autonomous-long-running-coding-agents): "one gives you a conversation, the other gives you a harness."
- [The harness design philosophies of Claude Code and Codex, compared](https://drive.google.com/file/d/1C3OwlmBKnOrwnPk5VhH66FJo18DPpkpa/view?usp=drivesdk) · [VS Code's behind-the-scenes look at its own harness optimization](https://code.visualstudio.com/blogs/2026/05/15/agent-harnesses-github-copilot-vscode).
- [Birgitta Böckeler: sensors in an agent harness](https://martinfowler.com/articles/sensors-for-coding-agents.html) — static analysis as the agent's nervous system; part of martinfowler.com's steady AI-coding series ([the running fragments](https://martinfowler.com/fragments/2026-04-29.html)).
- [10 lessons for agentic coding](https://www.dbreunig.com/2026/05/04/10-lessons-for-agentic-coding.html) · [kdy1: running 15+ agent sessions without cognitive overload](https://kdy1.dev/2026-1-31-ai-coding-tips-en) · [Steinberger's refactor loop](https://signals.forwardfuture.com/loop-library/loops/architecture-satisfaction-loop/) — "refactor, live-test, autoreview, commit, repeat."
- [Philipp Schmid: you wouldn't ship code without tests, so why ship skills without evals?](https://www.philschmid.de/testing-skills) and [Pinterest's testing process for agent skills](https://medium.com/pinterest-engineering/an-engineers-guide-to-better-ai-skills-implementing-a-testing-process-to-optimize-agent-a000c9c9abcd) — quality control for the new artifacts.
- [The Context Development Lifecycle (CDLC)](https://jedi.be/blog/2026/the-context-development-lifecycle-optimizing-context-for-ai-coding-agents/) — the DevOps parallels, drawn by someone who lived DevOps; and [tracking agent lineage in git](https://davenporter.substack.com/p/how-to-track-ai-agent-lineage-and) — "a commit doesn't carry enough info to piece everything together."
- Worktrees and parallel branches became agent infrastructure — [why git worktrees matter to modern developers](https://medium.com/google-cloud/run-multiple-coding-agents-safely-with-git-worktrees-c2d237dbd6b2); the deeper git material lives on [Git](/wiki/git/).

## The Claude Code shelf

Your densest 2026 cluster by far — courses, setups, and the skills ecosystem. The broader agent-building world is on [AI Agents](/wiki/ai-agents/); this is the daily-driver material.

- Courses: [Frontend Masters × Anthropic — the free Claude Code course](https://frontendmasters.com/courses/claude-code/?utm_campaign=claudecode&utm_source=x) (Lydia Hallie on the agentic loop, CLAUDE.md, skills, hooks, subagents) · [Claude Code 101](https://anthropic.skilljar.com/claude-code-101) and [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action) · [the Coursera version](https://www.coursera.org/learn/claude-code-in-action?irclickid=&irgwc=1&afsrc=1&utm_medium=partners&utm_source=impact&utm_campaign=2840738&utm_content=b2c&utm_campaignid=samuelwong&utm_term=14726_SI_1164545_).
- Setups worth stealing: ["I spent 6 months tuning Claude Code" — the exact setup](https://medium.com/data-science-collective/i-spent-6-months-tuning-claude-code-heres-the-exact-setup-that-finally-worked-b41c67628478) · [Marco Lancini's setup — guardrails, context/plan/code workflow, StarCraft-themed statusline](https://blog.marcolancini.it/2026/blog-my-claude-code-setup/) · [Beyond the prompt: stop prompting, start operating](https://arps18.github.io/posts/claude-code-mastery/).
- Reference repos: [claude-code-guide — the high-level manual](https://github.com/Cranot/claude-code-guide) · [awesome-claude-md — 104 CLAUDE.md examples from real projects](https://github.com/josix/awesome-claude-md) · [the 10-repos-instead-of-tutorials list](https://github.com/hesreallyhim/awesome-claude-code).
- Skills, the new package format: [Anthropic's official skill-creator skill](https://github.com/anthropics/skills/tree/main/skills/skill-creator) · [superpowers — the agentic skills framework that hit ~100k stars](https://github.com/obra/superpowers) · [Addy Osmani's production-grade engineering skills](https://github.com/addyosmani/agent-skills) · [180+ Claude Skills for software engineering](https://github.com/ArabelaTso/Skills-4-SE) · [rules distilled from classic programming books, for agents](https://github.com/ciembor/agent-rules-books) — the canon, compiled into CLAUDE.md form.
- [Claude Code at scale](https://claude.com/blog/how-claude-code-works-in-large-codebases-best-practices-and-where-to-start) — lessons from multi-million-line monorepos and decades-old legacy systems; directly relevant to your enterprise-architecture trajectory.

## Parallel agents & orchestration

The frontier of the tag: one engineer, many agents. The serious frameworks live on [AI Agents](/wiki/ai-agents/) — these are the coding-specific takes.

- [Adrian Cockcroft: AI swarms doing "days of work in 15 minutes"](https://www.infoq.com/presentations/coding-agents/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) — spend less time coding, more time orchestrating.
- [Running Claude Code agents in parallel](https://towardsdatascience.com/how-to-run-claude-code-agents-in-parallel/) — the practical how-to.
- [Superset — 10+ parallel coding agents on your machine](https://superset.sh/?utm_source=producthunt&utm_medium=social&utm_campaign=launch_2026&ref=producthunt) · [an IM-style workspace where Claude Code, Codex, and OpenCode collaborate](https://github.com/JuneQQQ/polynoia) · [a Telegram bot driving a five-role Claude Code dev team from planning to PR](https://github.com/duckbugio/flock).
- [LinkedIn engineering: managed Claude vs. Agent SDK](https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying) — the note relishes that it's "by the creator of Kafka, not LinkedIn slop."

## The craft that doesn't change

Agents or not, the fundamentals still decide whether the system survives.

- [How to write effective software design docs](https://refactoringenglish.com/excerpts/write-an-effective-design-doc/) — lessons from years of design docs at big shops; arguably *more* important now that specs drive agents.
- [Laws of Software Engineering](https://lawsofsoftwareengineering.com/) — the eponymous laws, collected; briefly #2 on Hacker News.
- [How branches influence the performance of your code](https://johnnysswlab.com/how-branches-influence-the-performance-of-your-code-and-what-can-you-do-about-it/) — "the writeup so good"; mechanical sympathy survives the agent era.
- [Debugging event-driven systems: the 5 problems teams create for themselves](https://codeopinion.com/debugging-event-driven-systems-5-problems-teams-create/) — dead-letter queues and eventual consistency, the unglamorous truth.
- [Design Patterns That Deliver](https://thecodeman.net/design-patterns-that-deliver-ebook?utm_source=x&utm_campaign=11062026) — patterns rebuilt as a written course with production examples.
- [LikeC4 — live architecture diagrams from code](https://github.com/likec4/likec4) — diagrams that can't drift.
- [Sierra's AI-native engineering interview process](https://sierra.ai/blog/the-ai-native-interview) — how hiring changes when coding agents are the default.

## CS foundations & learning resources

The evergreen shelf — see [Learning Resources](/wiki/learning-resources/) for the full library.

- [Knuth used Claude to solve an open problem in graph theory](https://cs.stanford.edu/~knuth/papers/claude-cycles.pdf) — the father of algorithm analysis, pair-programming with an LLM. If he's in, the debate's over.
- Visual DSA: [VisuAlgo](https://visualgo.net/en) · [Georgia Tech's CS visualization tool — every data structure animated](https://csvistool.com/) · [Algorithm Visualizer — live visualization from your own code](https://algorithm-visualizer.org/).
- By doing: [Coding Challenges — 80+ real-world build-it-yourself projects](https://codingchallenges.fyi/challenges/challenge-rtfm-agent/) (including "build your own AI agent") · [learn-by-playing games](https://codepip.com/) for Git, Linux, Python, and — your home turf — [Kubernetes](https://k8sgames.com/).
- [project-based tutorials, curated](https://github.com/practical-tutorials/project-based-learning) — the classic "build your own X" list.
- [The Valley of Code](https://thevalleyofcode.com/) — with the author's own advice that learning to code now means building alongside an agent and having it explain as it works.
- [Justin Math's free textbook](https://www.justinmath.com/books/#introduction-to-algorithms-and-machine-learning) — from "the most advanced high school math/CS sequence in the USA"; [University of Helsinki's Python MOOC](https://programming-25.mooc.fi/) is on [Python](/wiki/python/) where it belongs.

## Voices worth following

The bylines that keep recurring across 2,930 links — your de facto editorial board.

- **Simon Willison** — the tag's dominant voice. His [Agentic Engineering Patterns guide](https://simonwillison.net/2026/Feb/23/agentic-engineering-patterns/) is the spine: chapters on [using git with coding agents](https://simonwillison.net/guides/agentic-engineering-patterns/using-git-with-coding-agents/), [having agents build interactive explanations to fight cognitive debt](https://simonwillison.net/guides/agentic-engineering-patterns/interactive-explanations/), and ["hoard things you know how to do"](https://simonwillison.net/guides/agentic-engineering-patterns/hoard-things-you-know-how-to-do/) — career advice disguised as agent advice. Plus [his Pragmatic Summit fireside on agentic engineering](https://simonwillison.net/2026/Mar/14/pragmatic-summit/).
- **Drew Breunig** — the system-prompt archaeologist: [what the Claude Code source leak revealed about context assembly](https://www.dbreunig.com/2026/04/04/how-claude-code-builds-a-system-prompt.html) and [system prompts across 6 coding agents, compared](https://www.dbreunig.com/2026/02/10/system-prompts-define-the-agent-as-much-as-the-model.html).
- **Peter Steinberger** — ["I ship code I don't read"](https://www.youtube.com/watch?v=8lF7HmQ_RgY) — the note: "probably one of the best interviews I've ever seen. Top levels of mastery here."
- **Margaret-Anne Storey** — [the cognitive debt essay](https://margaretstorey.com/blog/2026/02/09/cognitive-debt/): "the humans involved may have simply lost the plot."
- [Mikayla at Zed: "your name is on the code — make sure you can stand behind it"](https://zed.dev/blog/on-programming-with-agents) · [Thorsten Ball's Register Spill](https://registerspill.thorstenball.com/p/joy-and-curiosity-77) · [Isaac Flath: "AI wrote every line, but I directed everything"](https://isaacflath.com/writing/how-i-built-my-website).
- [Mario Zechner's DIY coding-agent reading list](https://mariozechner.at/posts/2025-11-30-pi-coding-agent/) — if you ever build your own harness, start here.
- [Tim Dettmers on being productive and impactful with limited resources](https://timdettmers.com/2026/01/27/building-open-coding-agent-sera/#more-1248) — the note calls it a "wonderful website/journal."

---

## All links on this topic
