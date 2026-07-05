---
title: "LLMs"
topic: "llms"
draft: false
generated: "2026-07-05"
sources: "3267 tagged links, curated from the 260 most recent (2025\u20132026)"
---

Your second-biggest topic overall: **3,267 saved links**. The recent corpus tells a clear story about *your* relationship with LLMs — it's not model training or research, it's **operating LLMs as tools**: Claude Code above everything else, then Copilot and Codex, understanding how models work under the hood, evaluating their output, and running them on Azure/Foundry. The theory-heavy material (papers, benchmarks) lives under ai-research; the harness/orchestration material lives in [AI Agents](/wiki/ai-agents/).

**Related:** [AI Agents](/wiki/ai-agents/) · [RAG](/wiki/rag/) · Prompt Engineering · Azure

---

## Start here

- [How I use LLMs as a staff engineer in 2026](https://www.seangoedecke.com/how-i-use-llms-in-2026/) — the workflow-level mental model.
- [The Anatomy of an LLM](https://www.royvanrijn.com/anatomy-of-an-llm/) — interactive explainer: text → tokens → vectors → attention.
- [Hamel: the 11 links for learning AI evals](https://hamel.dev/blog/posts/llm-judge/) — the copy-paste answer to "how do I learn evals?"
- [Frontend Masters × Anthropic: free Claude Code course](https://frontendmasters.com/courses/claude-code/?utm_campaign=claudecode&utm_source=x) — no subscription required.
- [Building Karpathy's LLM Wiki: the complete guide](https://blog.starmorph.com/blog/karpathy-llm-wiki-knowledge-base-guide) — the idea this very vault is built on.

## How LLMs actually work

- [Transformer Explainer](https://github.com/poloclub/transformer-explainer) — interactive visualization of how GPT models work.
- [How LLMs actually work](https://www.0xkato.xyz/how-llms-actually-work/) — technical yet simple.
- [Inside the Transformer: the life of a token](https://www.aleksagordic.com/blog/transformer) — the deep-dive follow-up.
- [Stanford CS336: Language Modeling from Scratch](https://github.com/stanford-cs336/assignment1-basics/) — full lectures + assignments.
- [End-to-end LLM study material](https://mbrenndoerfer.com/books/language-ai-handbook) — components, quantization, pre-norm vs. post-norm, RL for LLMs.
- [Alisa's Book of LLMs](https://alisawuffles.notion.site/alisa-s-book-of-llms) + [her math notes](https://alisawuffles.notion.site/math-notes) — OpenAI interview prep, free.

## Claude Code

The single densest cluster in your entire corpus — this is your daily instrument, and your saves cover it from first steps to power use.

**Learn it:**
- [Claude 101](https://anthropic.skilljar.com/claude-101) → [Claude Code 101](https://anthropic.skilljar.com/claude-code-101) → [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action) — Anthropic's own course ladder.
- [Claude Code, clearly explained](https://taylaburrell.substack.com/p/claude-code-clearly-explained-and?r=57j98&utm_campaign=post-expanded-share&utm_medium=web&triedRedirect=true) — the 15-minute onboarding.
- [100+ Claude Code resources, courses, tools](https://www.lets-code.co.in/blogs/claude-code-100-best-resources-courses-and-tools-to-master-it-in-2026/) and [the claude-code-guide repo](https://github.com/Cranot/claude-code-guide).

**Master it:**
- ["I spent 6 months tuning Claude Code — the exact setup"](https://medium.com/data-science-collective/i-spent-6-months-tuning-claude-code-heres-the-exact-setup-that-finally-worked-b41c67628478) — CLAUDE.md, subagents, hooks, skills, worktrees.
- [My Claude Code setup](https://blog.marcolancini.it/2026/blog-my-claude-code-setup/) — guardrails and a context/plan/code workflow.
- [Stop prompting, start operating](https://arps18.github.io/posts/claude-code-mastery/) — rules, tests, skills, reviewers.
- [Running Claude Code at scale](https://claude.com/blog/how-claude-code-works-in-large-codebases-best-practices-and-where-to-start) — lessons from multi-million-line monorepos.
- [The personal AI stack](https://zeltser.com/personal-ai-stack) — teaching Claude your tools and conventions.
- [Context control to cut your Claude bill](https://github.com/rtk-ai/rtk).
- [Architectural analysis of Claude Code](https://github.com/alejandrobalderas/claude-code-from-source) and [the primitive behind Claude Code, Codex, and Gemini](https://agentfield.ai/blog/harness-as-membrane) — how these tools work inside.
- [Deep Agents: build your own Claude Code](https://github.com/langchain-ai/deepagents) — the batteries-included starting point.

**Skills** (the ecosystem your saves track obsessively):
- [Anthropic's complete guide to Claude Skills](https://www.kdnuggets.com/anthropics-complete-guide-to-claude-skills-building) · [14 patterns for authoring skills](https://generativeprogrammer.com/p/skill-authoring-patterns-from-anthropics?r=5x6nf&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true&triedRedirect=true) · [building a production-ready skill](https://towardsdatascience.com/how-to-build-a-production-ready-claude-code-skill/).
- Collections: [awesome Claude Skills](https://github.com/travisvn/awesome-claude-skills) · [180+ skills for software engineering](https://github.com/ArabelaTso/Skills-4-SE) · [awesome-claude-md: 104 real CLAUDE.md examples](https://github.com/josix/awesome-claude-md).

## The other coding assistants

- **Copilot:** [Copilot CLI cheat sheet](https://prasadhonrao.github.io/ghcp-cli-cheatsheet/) · [the Copilot app](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) · [deterministic workflows with Copilot Hooks](https://johnlokerse.dev/2026/05/18/generate-changelog-videos-with-github-copilot-hooks-and-microsoft-foundry-voice-models/) · [GitHub's own harness performance data](https://github.blog/ai-and-ml/github-copilot/evaluating-performance-and-efficiency-of-the-github-copilot-agentic-harness-across-models-and-tasks/).
- **Codex:** [getting started with Codex](https://openai.com/academy/codex-how-to-start/) (OpenAI Academy) · [the free "Codex Orange Book"](https://github.com/bozhouDev/codex-orange-book) · [maximizing Codex](https://towardsdatascience.com/how-to-maximize-openais-codex/) · [how OpenAI uses Codex internally](https://github.com/openai/codex).
- **Gemini:** [Managed Agents developer guide](https://www.philschmid.de/gemini-managed-agents-developer-guide) · [the SRE extension for Gemini CLI](https://github.com/gemini-cli-extensions/sre) — directly your lane.

## Local & open models

- [Run LLMs 100% free locally — the repo list](https://github.com/LostRuins/koboldcpp) (AnythingLLM, KoboldCpp & co).
- [Unsloth: open LLMs inside Claude Code and Codex](https://unsloth.ai/docs/basics/api) — Gemma 4 / Qwen3.6 GGUFs on 24GB RAM.
- [Agents on local small language models](https://machinelearningmastery.com/building-ai-agents-with-local-small-language-models/).
- [Hosting local LLMs in Docker on Azure](https://www.freecodecamp.org/news/host-llms-locally-in-docker-on-azure/) — your two worlds again.
- [Local-first inference with confidence-gate escalation to cloud](https://www.infoq.com/articles/local-first-ai-inference-cloud/) — clever cost architecture.

## Evaluation & quality

- [Hamel's 11-link evals curriculum](https://hamel.dev/blog/posts/llm-judge/) (also in Start here — it's the anchor).
- [LLM Evaluation](https://outcomeschool.com/blog/llm-evaluation) — the systematic overview.
- [Teaching an LLM to review code like a senior engineer](https://www.youtube.com/watch?v=sPNUo9TEXpc).
- [Which SDLC stage eats the most tokens? (it's code review)](https://rdel.substack.com/p/rdel-138-where-do-all-the-tokens).
- [Best practices to secure code written with Claude](https://claude.com/blog/using-llms-to-secure-source-code).

## LLMs on Azure & Microsoft Foundry

Your Azure depth meets your AI direction — the corpus is rich here.

- [Microsoft Foundry: end-to-end workshop](https://monuminu.github.io/foundry-workshop/).
- [Mastering Foundry IQ](https://microsoft-foundry.github.io/forgebook/notebook/mastering-foundry-iq/) and [migrating Azure OpenAI On Your Data to Foundry IQ](https://microsoft-foundry.github.io/forgebook/notebook/migrate-oyd-to-foundry-iq/).
- [Azure AI Foundry anti-patterns](https://medium.com/@badrkacimi/azure-ai-foundry-anti-patterns-what-not-to-do-in-real-projects-7d0896cb0977) — what not to do.
- [Running Claude on Microsoft Foundry in your own tenant, with IaC](https://github.com/Azure-Samples/claude#readme) — possibly the most you-shaped link in the corpus.
- [Building Microsoft IQ: Work IQ + Fabric IQ + Foundry IQ](https://balabala76.medium.com/microsoft-foundry-building-microsoft-iq-using-work-iq-fabric-iq-foundry-iq-a14e14051baa).

## LLM wikis & personal knowledge systems

The meta-section: links about the exact thing this vault is.

- [Why Karpathy's LLM Wiki is the future of personal knowledge](https://evoailabs.medium.com/why-andrej-karpathys-llm-wiki-is-the-future-of-personal-knowledge-7ac398383772).
- [Building Karpathy's LLM Wiki: the complete guide](https://blog.starmorph.com/blog/karpathy-llm-wiki-knowledge-base-guide).
- [Building a personal knowledge base with Claude Code](https://medium.com/@koriigami/build-a-personal-knowledge-base-with-claude-code-25d215b61822).
- [A visual graph layer for LLM wikis in Obsidian](https://www.dsebastien.net/i-built-a-graph-explorer-for-obsidian-bases-heres-why-llm-wikis-need-a-visual-layer/) — worth trying on this vault.
- [LLM Wiki + Graphify](https://medium.com/@jsong_49820/from-scattered-notes-to-a-living-knowledge-graph-building-llm-wiki-graphify-01b4f031471a).

## Industry & research signals

- [Anthropic: how agentic coding amplifies some skills and substitutes others](https://www.anthropic.com/research/claude-code-expertise).
- [What 81,000 people told Anthropic they want from AI](https://www.anthropic.com/research/81k-economics).
- [Diffing Claude's system prompts between versions](https://simonwillison.net/2026/Apr/18/opus-system-prompt/) — Simon Willison's forensic reading.
- ["If not LLMs, what should I work on?" — finding blue-ocean problems](https://kindxiaoming.github.io/blog/2026/everything-is-language/).
- [Fowler: let the LLM interview you for context](https://martinfowler.com/bliki/InterrogatoryLLM.html) — a technique, but a telling one.

---

## All links on this topic
