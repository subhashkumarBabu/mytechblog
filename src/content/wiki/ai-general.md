---
title: "AI (General)"
topic: "ai-general"
draft: false
generated: "2026-07-07"
sources: "4,112 tagged links, curated from the ~200 most recent (2025\u20132026)"
---

**4,112 saved links**, 2017–2026 (peak: 2025). This is your biggest tag by a wide margin — the catch-all that fires whenever a save is about AI but not about any *one* thing. At this size it isn't a topic, it's a firehose, and this page doesn't pretend otherwise: treat it as the hub that routes to the specialized pages, plus the handful of themes that genuinely live *between* them — how engineers work now, harness engineering, enterprise architecture, and the strategy takes that shape your Enterprise AI Architect pitch.

**Related:** [LLMs](/wiki/llms/) · [AI Agents](/wiki/ai-agents/) · [RAG](/wiki/rag/) · [Generative AI](/wiki/generative-ai/) · [Deep Learning](/wiki/deep-learning/) · [Prompt Engineering](/wiki/prompt-engineering/) · [AI Research](/wiki/ai-research/) · [NLP](/wiki/nlp/) · [Machine Learning](/wiki/machine-learning/) · [MLOps](/wiki/mlops/)

---

## Where things actually live

Most of what lands under this tag has a better home. Agent frameworks, memory, MCP, and multi-agent orchestration → [AI Agents](/wiki/ai-agents/). Model releases, context windows, and inference mechanics → [LLMs](/wiki/llms/). Retrieval and context engineering → [RAG](/wiki/rag/). Image/video/creative tooling → [Generative AI](/wiki/generative-ai/). Papers and benchmarks → [AI Research](/wiki/ai-research/). Prompting technique → [Prompt Engineering](/wiki/prompt-engineering/). Theory and courses → [Deep Learning](/wiki/deep-learning/) and [Machine Learning](/wiki/machine-learning/). Getting models served and monitored → [MLOps](/wiki/mlops/). What follows is the residue those pages *don't* cover — and it turns out the residue is where you spend most of your time.

## The current moment — how engineers actually work now

The 2026 saves converge on one shift: agents went from autocomplete to colleagues, and the interesting writing is about what that does to *you*.

- [How I use LLMs as a staff engineer in 2026](https://www.seangoedecke.com/how-i-use-llms-in-2026/) — the workflow snapshot everyone else is reacting to.
- ["How I Use AI to Code"](https://www.chrismdp.com/coding-with-ai/) — the payoff is shaping the harness and feedback loops, not reviewing diffs one by one.
- [a raw list of how one person actually uses AI, hours a day](https://www.lesswrong.com/posts/bxdwSZYxKmPBres6w/10-non-boring-ways-i-ve-used-ai-in-the-last-month) — rare honesty about the *how*, not the hype.
- [why AI hasn't replaced software engineers](https://www.normaltech.ai/p/why-ai-hasnt-replaced-software-engineers) — the decide-execute-deliver sandwich: humans stay at both ends.
- [The AI-Native Developer (ACM Queue)](https://queue.acm.org/detail.cfm?id=3807961) — which parts of the job are still worth doing yourself.
- The cost side: [Addy Osmani on "cognitive surrender"](https://addyosmani.com/blog/cognitive-surrender/) · [the grief when AI writes most of the code](https://blog.pragmaticengineer.com/the-grief-when-ai-writes-most-of-the-code/) · [AI-assisted engineers are burning out — is this fine?](https://evilmartians.com/chronicles/ai-assisted-engineers-are-burning-out-is-this-fine) · [how to not feel constantly behind](https://news.theuncommonexecutive.com/p/how-to-not-feel-constantly-behind?r=57j98&utm_campaign=post-expanded-share&utm_medium=web&triedRedirect=true).
- ["Reality has a surprising amount of detail"](https://johnsalvatier.org/blog/2017/reality-has-a-surprising-amount-of-detail) — a 2017 essay resurfacing as advice to AI labs; still lands.

## Harness engineering — 2026's word

The vault watched a term get coined in real time. The model is table stakes; the scaffolding around it is the product.

- [Tejas Kumar: harnesses from first principles](https://www.youtube.com/watch?si=GPPr7z7xPRAfRMeV&v=C_GG5g38vLU&feature=youtu.be) — why, what, and how to build one; start here.
- [awesome-harness-engineering](https://github.com/ai-boost/awesome-harness-engineering) — tools, patterns, evals, memory, permissions, observability — the field's index.
- [a practical guide to AI agent harness engineering](https://github.com/nexu-io/harness-engineering-guide) and [Outcome School's harness engineering explainer](https://outcomeschool.com/blog/harness-engineering-in-ai).
- [the harness compatibility matrix](https://codylindley.github.io/ai-harness-engineering-compatibility-matrix/) — "so that I would not go insane."
- [don't over-engineer your harness — lessons from 34,000 tests](https://konghq.com/blog/engineering/how-we-used-agentic-ai-to-fix-kong-gateways-flakiest-tests) — the counterweight.
- [Deep Agents — a batteries-included harness](https://github.com/langchain-ai/deepagents) if you want to build your own Claude Code, and [the primitive behind Claude Code, Codex, and Gemini](https://agentfield.ai/blog/harness-as-membrane).
- The investor angle: [why the harness is the moat for model providers](https://www.uncoveralpha.com/p/the-harness-the-moat-for-ai-model) · [GitHub publishing Copilot's benchmark numbers against rival harnesses](https://github.blog/ai-and-ml/github-copilot/evaluating-performance-and-efficiency-of-the-github-copilot-agentic-harness-across-models-and-tasks/).
- [the evolution: tests → prompts → agents → harnesses → supervised loops](https://generativeprogrammer.com/p/from-test-driven-to-loop-driven-development) and [Fowler's fragments on AI coding and harness engineering](https://martinfowler.com/fragments/2026-04-29.html).

## Skills — the new packaging unit

Expertise is shipping as markdown folders now. Half your recent repo saves are skills for something.

- [Google's official Agent Skills repository](https://cloud.google.com/blog/topics/developers-practitioners/level-up-your-agents-announcing-googles-official-skills-repository?e=48754805?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy26q2-googlecloudtech-blog-ai-in_feed-no-brand-global&utm_content=-&utm_term=-&linkId=61562052&linkId=61630058) — when both major labs converge on the same primitive, pay attention.
- [Addy Osmani's production-grade engineering skills](https://github.com/addyosmani/agent-skills) — trending for a reason — and [Ryan Singer's shaping skills](https://github.com/rjs/shaping-skills) from a "my favorite skills" thread worth mining.
- [awesome Claude Skills](https://github.com/travisvn/awesome-claude-skills) — the curated list.
- [Pinterest: a testing process to optimize skill performance in any repo](https://medium.com/pinterest-engineering/an-engineers-guide-to-better-ai-skills-implementing-a-testing-process-to-optimize-agent-a000c9c9abcd) — skills as engineering artifacts, with evals.
- [a skill-quality validator](https://github.com/thedaviddias/skill-check) and [the hybrid pattern: routing hints in AGENTS.md, heavy logic in skills](https://elite-ai-assisted-coding.dev/p/does-using-instructions-in-a-context).
- [security skills for agent-assisted testing](https://github.com/hardw00t/ai-security-arsenal) — appsec, cloud, containers, threat modeling.

## Enterprise AI architecture — your lane

The cluster that maps directly onto where you're headed: reference architectures, gateways, context layers, and the patterns underneath them.

- [Google Cloud's multi-tenant agentic AI reference architecture](https://docs.cloud.google.com/architecture/multi-tenant-agentic-ai-system?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy26q2-googlecloudtech-web-ai-in_feed-no-brand-global&utm_content=-&utm_term=-&linkId=62502914) — centralized platform, autonomous business units; the layers-first shape you think in.
- [an enterprise AI gateway with API Management + AI Foundry](https://medium.com/@17nagh/building-an-enterprise-ai-gateway-with-azure-api-management-and-azure-ai-foundry-504e1d5e6e97) — the gateway pattern, concretely.
- [what an enterprise context layer actually is](https://contextandchaos.substack.com/?r=57j98&utm_campaign=post-expanded-share&utm_medium=web) and [agent memory: the missing layer in enterprise AI systems](https://www.dataiku.com/stories/blog/agent-memory) — two takes on the layer everyone's discovering they need.
- [the AI agents stack, 2026 edition](https://www.oreilly.com/radar/the-ai-agents-stack-2026-edition/) — default tools per layer and where the lock-in risk lives.
- [the Architect's V Impact Canvas](https://www.infoq.com/articles/oil-water-moment-ai-architecture/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) — designing for deterministic systems coexisting with non-deterministic AI.
- [local-first inference escalation with confidence gates](https://www.infoq.com/articles/local-first-ai-inference-cloud/) — a genuinely clever cost architecture.
- [Anthropic's "Building Effective AI Agents" architecture patterns PDF](https://resources.anthropic.com/hubfs/Building%20Effective%20AI%20Agents-%20Architecture%20Patterns%20and%20Implementation%20Frameworks.pdf) and [The Hitchhiker's Guide to Agentic AI](https://arxiv.org/abs/2606.24937) — the two comprehensive references.
- Codebase-level patterns: [reducing friction in AI-assisted development](https://martinfowler.com/articles/reduce-friction-ai/) · [designing codebases that are safer for AI](https://adamtornhill.substack.com/p/clear-software-design-principles) · [architecting for agentic AI development on AWS](https://aws.amazon.com/de/blogs/architecture/architecting-for-agentic-ai-development-on-aws/).
- The skeptic's corner: [multi-agent AI is the new microservices](https://www.infoworld.com/article/4154335/multi-agent-ai-is-the-new-microservices.html) — not everything should be an agent, and [security before agents](https://michaellevan.substack.com/p/a-week-in-ai-issue-1).

## AI meets the day job — SRE, ops, delivery

Your DevOps depth is the differentiator here, and the corpus knows it — this is also the research shelf for your agentic incident-management project.

- [AI in SRE: where Google deploys agentic AI in operations](https://cloud.google.com/blog/products/devops-sre/how-google-sre-is-using-agentic-ai-to-improve-operations/) and [a candid talk with Google's VP of SRE on how AI changes SRE — and how it doesn't](https://google.smh.re/5WXj).
- [OpenSRE — an open framework for AI SRE agents](https://github.com/Tracer-Cloud/opensre), plus training and eval environments; connects the 40+ tools you already run.
- ["the AI SRE agent revolution: 2026 as the year of autonomous incident resolution"](https://medium.com/devops-ai-decoded/the-ai-sre-agent-revolution-why-2026-is-the-year-of-autonomous-incident-resolution-073807b2209d) and [building an AI SRE agent to analyze production](https://pub.towardsai.net/how-im-building-an-ai-sre-agent-to-analyze-production-4f61aab81174) — the practitioner's version.
- [why AI agents fail in production](https://www.diagrid.io/blog/why-ai-agents-fail-in-production) — read before believing the previous two.
- Observability: [Datadog's Lapdog — trace what your agent is actually doing](https://lapdog.datadoghq.com/) · [GenAI observability with OpenTelemetry](https://opentelemetry.io/blog/2026/genai-observability/) · [AI agent observability, explained](https://outcomeschool.com/blog/ai-agent-observability).
- Delivery: [what an AI-native CI/CD experience looks like](https://semaphore.io/building-an-ai-native-ci-cd-experience-with-sem-ai) · [tracking agent lineage and state in repos](https://davenporter.substack.com/p/how-to-track-ai-agent-lineage-and) — a git commit doesn't carry enough info anymore.
- ["Software 2.0" for DevOps](https://www.youtube.com/watch?v=dlkDgeiP3eU) — planning loops, verification-first workflows, agents coding while you sleep.

## Strategy, economics & the org question

The takes you save for leadership conversations — what agents do to companies, careers, and the industry's economics.

- [Chesky on redesigning Airbnb for the AI era](https://www.youtube.com/watch?v=eURcW5_uS60) — your note calls it hall-of-fame material, and [Sidu Ponnappa on running an AI-native company](https://www.youtube.com/watch?v=0zt7iP03x0w&t=3893s).
- [AI-Native Leaders: the organizational playbook](https://blog.bytebytego.com/p/ai-native-leaders-the-organizational?r=57j98&utm_campaign=post-expanded-share&utm_medium=web&triedRedirect=true) and [DORA on measuring the ROI of AI in software development](https://www.infoq.com/news/2026/05/dora-roi-ai-assisted-dev-report/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) — J-curves, not miracles.
- [Hassabis: agents are a "practice run" for AGI](https://www.axios.com/2026/05/26/deepmind-ceo-demis-hassabis) and [what 81,000 people's economic hopes and worries about AI look like](https://www.anthropic.com/research/81k-economics).
- The sober counterweights: [half of gen-AI projects overrun and get abandoned — same as big IT ever was](https://cote.io/2026/05/29/failure-is-normal.html) · [Russinovich and Hanselman on AI hollowing out the junior pipeline](https://www.infoq.com/news/2026/04/junior-developer-pipeline-crisis/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=development) · [the era of free AI is ending](https://medium.com/enrique-dans/the-era-of-free-ai-is-ending-heres-how-you-ll-pay-for-it-2ae819d5e947).
- Business models: [AI labor is not SaaS](https://jeffreypaine.com/ai-labor-is-not-saas) · [Cognizant's AI generating $200M in new pipeline](https://www.moneycontrol.com/technology/cognizants-ai-analyses-employee-interactions-with-clients-generates-200-million-in-new-pipeline-article-13945704.html) · [labs buying dead startups' Slack threads as RL-gym feedstock](https://www.forbes.com/sites/annatong/2026/04/16/ais-new-training-data-your-old-work-slacks-and-emails/) — the strangest save in the tag.
- The India thread: [AI coding as an existential threat to the Indian tech sector](https://www.bloomberg.com/news/features/2026-04-16/the-ai-revolution-leaves-india-s-tech-graduates-unprepared-for-the-future) vs. [India's low-resource blueprint for sovereign AI](https://restofworld.org/2026/india-frugal-ai-sarvam-krutrim-sovereign/?utm_campaign=row-social&utm_source=twitter) — both sides of a question close to home.
- [Thoughtworks Tech Radar: 81 of 118 entries are AI](https://www.thoughtworks.com/content/dam/thoughtworks/documents/radar/2026/04/tr_technology_radar_vol_34_en.pdf) — the moment, quantified.

## Learning the craft

The full curriculum lives in [Learning Resources](/wiki/learning-resources/); these are the AI-engineering-specific standouts.

- [the free, open-source AI Engineer book](https://agents.siddhantkhare.com/) and [the "Agentic AI Engineer in 2026" roadmap](https://drive.google.com/file/d/1JkNUDOztGVX7LLbMgkiOr0vffBLg8PeU/view?usp=drivesdk) — the two maps of the territory.
- [the JAX scaling book](https://jax-ml.github.io/scaling-book/) — how LLMs interact with hardware at scale; the production-engineer's view.
- [Hamel's 11 links for learning AI evals](https://hamel.dev/blog/posts/llm-judge/) and [his case that evals are the hottest new skill](https://www.youtube.com/watch?v=BsWxPI9UM4c) — the skill your saves keep circling.
- [an AI primer: 11 topics every software engineer should know](https://newsletter.systemdesign.one/p/ai-concepts) — context, embeddings, tokens, evals, agent loops.
- [AI Hero's engineering course with an evals framework](https://github.com/ai-hero-dev/ai-hero) · [the open-sourced AI Engineer workshop](https://github.com/iusztinpaul/designing-real-world-ai-agents-workshop) · [GitHub's Agentic AI Developer certification (GH-600)](https://learn.github.com/certification/AGENTIC).
- And the meta-thread: [building Karpathy's "LLM Wiki" — AI-maintained knowledge bases](https://blog.starmorph.com/blog/karpathy-llm-wiki-knowledge-base-guide) and [an example LLM wiki built in Obsidian](https://notes.dsebastien.net/10+Meta/99+AI+Assistant/Wikis/PKM/AI+Wiki+-+PKM+-+Index) — you saved the blueprint for the very page you're reading.

---

## All links on this topic
