---
title: "AI Agents"
topic: "ai-agents"
draft: false
generated: "2026-07-05"
sources: "1891 tagged links, curated from the 250 most recent (2025\u20132026)"
---

Your single biggest AI topic: **1,891 saved links**, almost all from 2023 onward, with a sharp acceleration through 2025–2026. The corpus tracks the field's evolution from "chatbot with tools" to production agentic systems — and it leans heavily toward the practitioner side: harness engineering, Microsoft's agent stack, MCP, and running agents in production. That maps directly to your DevOps → AI/ML transition: the corpus says your angle on agents is *operating them*, not training them.

**Related:** [LLMs](/wiki/llms/) · [RAG](/wiki/rag/) · Prompt Engineering · MLOps

---

## Start here

The five links that give the best current mental model of the space:

- [Learn Harness Engineering](https://walkinglabs.github.io/learn-harness-engineering/en/) — "The better the harness, the better the agent." The free site you saved twice; the practitioner's frame for everything below.
- [Simon Willison: Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/) — evolving book of patterns, updated weekly since Feb 2026.
- [10 Lessons for Agentic Coding](https://www.dbreunig.com/2026/05/04/10-lessons-for-agentic-coding.html) — dense, experience-based rules of thumb.
- [Connecting LLMs to the Real World: Tool Use, Function Calling, and MCP](https://blog.bytebytego.com/p/connecting-llms-to-the-real-world) — the conceptual ladder from function calling to full agent connectivity.
- [Anthropic's guide to building productive agents](https://resources.anthropic.com/hubfs/Building%20Effective%20AI%20Agents-%20Architecture%20Patterns%20and%20Implementation%20Frameworks.pdf) — the vendor guide worth reading end-to-end.

## Harness engineering

The theme your 2026 saves circle obsessively: the model matters less than the scaffolding around it — feedback loops, sandboxes, permissions, context plumbing.

- [Agent Harness Engineering Explained Local vs Frontier LLMs](https://www.youtube.com/watch?v=sfxGqUhm8qg) — video overview of harness vs. model quality.
- [Practical guide to AI agent harness engineering](https://github.com/nexu-io/harness-engineering-guide) and the [awesome-harness-engineering](https://github.com/ai-boost/awesome-harness-engineering) list.
- [Building an agent harness](https://heeki.medium.com/building-an-agent-harness-31942331d605) — a from-scratch walkthrough.
- [VS Code: behind the scenes of harness optimization](https://code.visualstudio.com/blogs/2026/05/15/agent-harnesses-github-copilot-vscode) — how a major product team tunes theirs.
- [Kong: lessons from 34,000 tests — don't over-engineer your harness](https://konghq.com/blog/engineering/how-we-used-agentic-ai-to-fix-kong-gateways-flakiest-tests).
- [The agent harness distributed-feedback problem](https://thenewstack.io/agent-harness-distributed-feedback-problem/) — why multi-program systems are harder.
- [Birgitta Böckeler: sensors in an agent harness](https://martinfowler.com/articles/sensors-for-coding-agents.html) — static analysis as agent feedback.
- ["What feedback can the agent use without asking me?"](https://generativeprogrammer.com/p/stop-babysitting-your-coding-agent) — the right question to ask; types, tests, lints as the answer.
- [Guarding against disruptive actions in looped agents](https://hyperautomation.substack.com/p/building-a-secure-agentic-system) — safety rails for autonomous runs.

## MCP (Model Context Protocol)

The connectivity standard that dominates your 2026 saves.

- [Pamela Fox: MCP workshop slides + exercises](https://pamelafox.github.io/github-copilot-mcp-tutorial/) and her [PyCon "Build your first MCP server in Python"](https://github.com/pamelafox/pycon2026-mcp-tutorial) tutorial.
- [Phil Schmid: using MCP servers with agents](https://www.philschmid.de/use-mcp-servers) — practical advice amid the hype.
- [Agentic Workflows and MCP](https://www.inovex.de/de/blog/agentic-workflows-and-model-context-protocol-lessons-learned/) — how the pieces compose.
- Microsoft's MCP servers you saved: [Azure Resource Manager MCP](https://github.com/Azure/Azure-Resource-Manager-MCP), [Data Factory MCP](https://github.com/microsoft/DataFactory.MCP), [Fabric Ontology MCP](https://github.com/tmdaidevs/ontology-mcp-server).
- [GitHub cut agent token usage 62%](https://www.infoq.com/news/2026/05/github-agentic-token-savings/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) — partly by pruning unused MCP tools; the ops view of MCP sprawl.

## Agent Skills

The 2026 pattern for packaging reusable agent expertise.

- [Addy Osmani: Agent Skills](https://addyosmani.com/blog/agent-skills/) — specs, tests, reviews as enforceable workflows.
- [Anthropic's free Agent Skills course](https://www.deeplearning.ai/courses/agent-skills-with-anthropic) — skills vs. tools vs. MCP, from zero.
- [Google's official Agent Skills repository](https://cloud.google.com/blog/topics/developers-practitioners/level-up-your-agents-announcing-googles-official-skills-repository?e=48754805?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy26q2-googlecloudtech-blog-ai-in_feed-no-brand-global&utm_content=-&utm_term=-&linkId=61562052&linkId=61630058) and [the 13 launch skills](https://github.com/google/skills) (cross-agent standard: Claude Code, Gemini CLI, Copilot, Cursor).
- [Collection of verified Agent Skills for Claude Code](https://github.com/karanb192/awesome-claude-skills).
- [waza: Go CLI for agent skill evals](https://github.com/microsoft/waza) — A/B baselines, pairwise judging.
- [Structuring Agents, Skills, and MCPs: Best Practices from Anthropic](https://medium.com/intuitionmachine/structuring-agents-skills-and-mcps-best-practices-from-anthropic-9312849ccea6).

## Frameworks & platforms

Your corpus covers every major stack, with a strong Microsoft center of gravity.

**Microsoft** (your deepest coverage):
- [Microsoft Agent Framework documentation](https://mintlify.wiki/microsoft/agent-framework) and [Foundry Agent Service + Agent Framework](https://medium.com/@luisevalencia/microsoft-foundry-agent-service-and-agent-framework-b5611343727e) overview.
- [Foundry adds runtime, tooling, governance for production agents](https://www.infoq.com/news/2026/06/microsoft-foundry-agents/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Devops) and [CI/CD for AI agents in Foundry](https://dev.to/om_shree_0709/microsoft-foundry-just-added-cicd-for-ai-agents-heres-what-that-actually-changes-2k5p).
- [AgentLoop middleware](https://github.com/microsoft/agent-framework/pull/6174) — `.ralph()`, `.with_predicate()`, `.with_judge()`.
- [Building agentic systems with Agent Framework + Foundry IQ](https://vishgowda.medium.com/building-agentic-ai-systems-with-microsoft-agent-framework-and-foundry-iq-30acfa0549f5) and [on-prem agents with Azure Local + Foundry Local](https://holgerimbery.medium.com/building-on-prem-ai-agents-with-azure-local-foundry-local-and-microsoft-agent-framework-62c25696ad80).
- [Azure Functions serverless agents runtime](https://www.infoq.com/news/2026/06/azure-functions-serverless-agent/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Cloud) · [Logic Apps sandboxed code interpreters](https://www.infoq.com/news/2026/05/azure-logic-apps-agents/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Cloud) · [Azure Skills: 25 skills for coding agents in Azure](https://github.com/microsoft/azure-skills/).

**Google:** [Agent Development Kit codelab](https://codelabs.developers.google.com/next26/dev-keynote/building-agents-with-skills?linkId=62502198#0?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy26q2-googlecloudtech-blog-ai-in_feed-no-brand-global&utm_content=-&utm_term=-) · [How Gemini Managed Agents work](https://www.philschmid.de/how-managed-agents-work) · [Agent Executor open-sourced](https://www.developer-tech.com/news/google-agent-executor-ai-agents-production/) · [multi-tenant agentic reference architecture](https://docs.cloud.google.com/architecture/multi-tenant-agentic-ai-system?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy26q2-googlecloudtech-web-ai-in_feed-no-brand-global&utm_content=-&utm_term=-&linkId=62502914).

**Others:** [Vercel's eve — "Next.js for agents"](https://vercel.com/blog/introducing-eve) (filesystem conventions over config) · [Pydantic production-grade agents](https://github.com/pydantic/pydantic-ai-harness?utm_source=newsletter) · [Cloudflare Agents SDK](https://developers.cloudflare.com/agents/) · [CrewAI tutorial](https://amanxai.com/2026/04/28/how-to-build-ai-agents-using-crewai/).

**Build one from scratch** (the best way to actually understand them): [teaching-grade agent in TypeScript](https://github.com/cellinlab/how-pi-agent-works) · [multi-agent systems from scratch](https://github.com/victordibia/designing-multiagent-systems) · [why building from scratch teaches you the stack around the model](https://amplitude.com/blog/design-agent).

## Multi-agent systems & orchestration

- [Multi-Agent Interaction Patterns](https://github.com/leestott/agent_patterns_foundry_demo) (Microsoft repo).
- [Grab case study: multi-agent engineering support at scale](https://www.infoq.com/news/2026/05/grab-multi-agent-support-system/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=architecture-design) — the real-world benchmark you saved twice.
- [Shopify: from chatbot to specialized agent swarms](https://www.infoq.com/presentations/multi-agent-system-lessons/?utm_source=twitter&utm_medium=link&utm_campaign=calendar).
- [Git worktrees and why your agent should use them](https://medium.com/google-cloud/run-multiple-coding-agents-safely-with-git-worktrees-c2d237dbd6b2) — parallel agent isolation.
- Orchestration platforms to watch: [Alook (agents as a managed team)](https://github.com/alookai/alook) · [IM-style multi-agent workspace](https://github.com/JuneQQQ/polynoia) · [real-time node graph for Claude Code orchestration](https://github.com/patoles/agent-flow).

## Production: evals, observability, security

The DevOps-shaped section — where your existing expertise transfers directly.

- **Why agents fail:** [Why AI Agents Fail in Production](https://www.diagrid.io/blog/why-ai-agents-fail-in-production) · [Hidden Technical Debt in Agentic Systems](https://theneuralmaze.substack.com/p/hidden-technical-debt-in-agentic) · [Salesforce's lessons from enterprise agent deployments](https://blog.bytebytego.com/p/what-salesforce-learned-from-20000).
- **Evals:** [AI Agent Evaluation](https://outcomeschool.com/blog/ai-agent-evaluation) · [three working eval demos](https://github.com/AdminTurnedDevOps/agentic-demo-repo/blob/main/agentevals/demo.md) · [measuring agent hallucination](https://newsletter.karuparti.com/p/how-to-actually-measure-if-your-ai).
- **Observability:** [AI Agent Observability](https://outcomeschool.com/blog/ai-agent-observability) · [Tracing Agent Sessions with OpenTelemetry & Aspire](https://www.youtube.com/watch?v=JsZ3q8OKsMM) · [structured logging of agent decisions](https://www.dbreunig.com/2026/03/04/the-spec-driven-development-triangle.html).
- **Security & guardrails:** [OWASP Top 10 for Agents](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) · [AI security skills for agent-assisted testing](https://github.com/hardw00t/ai-security-arsenal) · [why guardrails aren't enough](https://www.okta.com/newsroom/articles/why-ai-guardrails-are-not-enough/) · [human-in-the-loop approval for custom agents](https://seroter.com/2026/05/06/how-to-force-your-custom-agent-to-stop-and-seek-human-approval/).
- **Memory:** [AI Agent Memory](https://outcomeschool.com/blog/ai-agent-memory) · [visual survey of agent memory](https://arxiv.org/abs/2606.24775) · [where to store agent memory: files, blocks, skills](https://timkellogg.me/blog/2026/04/27/memory-patterns).
- **AI for SRE** (your two worlds meeting): [Google: deploying agentic AI in SRE](https://cloud.google.com/blog/products/devops-sre/how-google-sre-is-using-agentic-ai-to-improve-operations/) · [building an AI SRE agent](https://pub.towardsai.net/how-im-building-an-ai-sre-agent-to-analyze-production-4f61aab81174) · [the AI SRE agent revolution](https://medium.com/devops-ai-decoded/the-ai-sre-agent-revolution-why-2026-is-the-year-of-autonomous-incident-resolution-073807b2209d).

## Agentic coding

- [Karpathy's "Idea File"](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) — hand it to your agent, it builds the tool.
- [Using agents is literally engineering management](https://jackdanger.com/using-agents-is-literally-engineering-management/) — the mental model shift.
- [The AI Coding Agent Manifesto](https://medium.com/wix-engineering/the-ai-coding-agent-manifesto-c8f61629d677) (Wix) — beyond vibe coding for production.
- [Spec-driven development with coding agents](https://www.deeplearning.ai/courses/spec-driven-development-with-coding-agents?utm_campaign=42497884-jetbrains-launch&utm_content=378173325&utm_medium=social&utm_source=twitter&hss_channel=tw-992153930095251456) (free course).
- ["How I Use AI to Code"](https://www.chrismdp.com/coding-with-ai/) — shaping the harness and feedback loops is the work that pays off.
- [Armin Ronacher: what I don't trust agents to ship](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/) — the sober counterpoint.
- [The 100x engineer: one senior + their agents](https://ajeygore.in/content/ai-ate-my-role-whats-next).

## Learning paths

- [Hugging Face AI Agents course](https://huggingface.co/learn/agents-course/unit0/introduction) (free) and [10 free tools to learn AI agents](https://www.deeplearning.ai/courses/ai-agents-in-langgraph).
- [22-chapter course: production-grade agent systems](https://github.com/bryanyzhu/agentic-ai-system-course) — designed to be studied *with* an AI assistant.
- [Microsoft Agent Academy](https://microsoft.github.io/agent-academy/events/live/) + hackathon.
- [GitHub Agentic AI Developer certification (GH-600)](https://learn.github.com/certification/AGENTIC) — a credential that fits your profile.
- [Roadmap to Become an Agentic AI Engineer in 2026](https://drive.google.com/file/d/1JkNUDOztGVX7LLbMgkiOr0vffBLg8PeU/view?usp=drivesdk).
- [Claude Cookbook](https://platform.claude.com/cookbook/) — 81 practical guides across agents, tools, RAG, evals.

---

## All links on this topic

Requires the Dataview plugin:
