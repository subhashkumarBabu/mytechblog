---
title: "System Design & Architecture"
topic: "system-design"
draft: false
generated: "2026-07-07"
sources: "804 tagged links, curated from the ~180 most recent (2024\u20132026)"
---

**804 saved links**, 2017–2026 (peak: 2023). Your biggest engineering tag, and the one that tells your career story most clearly: it starts in Azure reference architectures and microservices debates, peaks in the 2023 DevOps years, and by 2025–2026 almost every save is about architecting agentic AI systems. This page is the spine of the Enterprise AI Architect move — the old distributed-systems discipline and the new agent patterns are the same job now, and your saves figured that out before the industry finished saying it.

**Related:** [AI Agents](/wiki/ai-agents/) · [APIs](/wiki/apis/) · [Databases](/wiki/databases/) · [DevOps](/wiki/devops/) · [Platform Engineering](/wiki/platform-engineering/)

---

## Thinking like an architect

The mindset shelf — less "how to draw boxes," more "what the job actually is."

- [Fowler's Software Architecture Guide](https://martinfowler.com/architecture/) — the front door to the tag's most-saved source.
- [Thinking like an architect](https://thirstyexplorer.substack.com/p/thinking-like-an-architect) — "The architect's job isn't to be right. It's to reduce uncertainty. Treat architecture as a series of experiments."
- [Architecture is not a blueprint — it's a set of decisions](https://scottmillett.medium.com/architecture-is-not-a-blueprint-its-a-set-of-decisions-61c4692f5222) — pairs perfectly with [Fowler on Architecture Decision Records](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html), the log of that decision history.
- [The Expert Generalist](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html) (Fowler & Unmesh Joshi) — the strongest argument for your layers-first, cross-specialty trajectory.
- [Butler Lampson: Hints and Principles for Computer System Design](https://www.youtube.com/watch?v=TRLJ6XdmgnA&feature=youtu.be) — the talk you watched in one sitting ("watched this great talk last night").
- [Simon Brown: five things every developer should know about software architecture](https://static.simonbrown.je/vdb2024-five-things.pdf) — the keynote slides.
- [Rik Hepworth: Azure Architecture — Choosing Wisely](https://www.youtube.com/watch?v=JFGf9JeFt5U) — "architecture is a team sport."
- [Is High Quality Software Worth the Cost?](https://martinfowler.com/articles/sensors-for-coding-agents.html) and [Technical Debt](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html) — the two Fowler essays you keep re-saving for stakeholder conversations.
- [the Solution Architecture Document, with a lean template](https://medium.com/@alessandro.traversi/understanding-the-solution-architecture-document-sad-with-a-lean-template-050287994a88) — the enterprise-architect artifact, minus the ceremony.

## Architecting AI & agentic systems

The tag's new center of gravity, and the section that matters most for where you're headed. The recurring tension in your saves: deterministic systems now have to coexist with non-deterministic ones.

- [The oil-and-water moment](https://www.infoq.com/articles/oil-water-moment-ai-architecture/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) — the Architect's V Impact Canvas for mixing deterministic and non-deterministic components; the cleanest framing of the whole problem.
- [Agentic AI Architecture Framework for Enterprises](https://www.infoq.com/articles/agentic-ai-architecture-framework/) — InfoQ's three-tier (Foundation → Workflow → Autonomous) enterprise evolution path.
- [the definitive blueprint for enterprise agentic AI architecture](https://medium.com/codetodeploy/the-definitive-blueprint-for-enterprise-agentic-ai-architecture-a1b7b0c384b3) — the end-to-end reference.
- **Reference architectures from the clouds:** [Google Cloud's multi-tenant agentic AI system](https://docs.cloud.google.com/architecture/multi-tenant-agentic-ai-system?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy26q2-googlecloudtech-web-ai-in_feed-no-brand-global&utm_content=-&utm_term=-&linkId=62502914) · [choosing agentic AI architecture components](https://docs.cloud.google.com/architecture/multi-agent-private-networking-patterns) · [the multi-agent AI system reference](https://docs.cloud.google.com/architecture/multi-tenant-agentic-ai-system) · [architecting for agentic AI on AWS](https://aws.amazon.com/de/blogs/architecture/architecting-for-agentic-ai-development-on-aws/) — and the Google advocate's caution about single-agent-first: "Simmer down. One is probably fine."
- **Patterns:** [Agentic Design Patterns — the free Google ebook](https://docs.google.com/document/d/1rsaK53T3Lg5KoGwvf8ukOUvbELRtH-V0LnOIFDxBryE/mobilebasic?pli=1#heading=h.pxcur8v2qagu) · [awesome-agentic-patterns, the curated catalogue](https://github.com/nibzard/awesome-agentic-patterns) · [Guillaume Laforge's agentic design patterns slides](https://glaforge.dev/talks/2026/05/18/agentic-design-patterns/) · [8 multi-agent patterns in ADK](https://developers.googleblog.com/developers-guide-to-multi-agent-patterns-in-adk/?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy26q1-googlecloudtech-blog-ai-in_feed-no-brand-global&utm_content=-&utm_term=-&linkId=38230066) · [all-agentic-architectures — 17+ with runnable code](https://github.com/FareedKhan-dev/all-agentic-architectures).
- **Event-driven agents** (your Kafka-brain applied to agents): [Sean Falconer: the future of AI agents is event-driven](https://seanfalconer.medium.com/the-future-of-ai-agents-is-event-driven-9e25124060d6) · [Kai Waehner: Kafka + MCP + A2A](https://www.kai-waehner.de/blog/2025/05/26/agentic-ai-with-the-agent2agent-protocol-a2a-and-mcp-using-apache-kafka-as-event-broker/) · [event-driven multi-agents with Kafka, Flink, and LangChain](https://www.confluent.io/blog/ai-meal-planner/) · [Bindu: turn any agent into a living microservice](https://github.com/GetBindu/Bindu).
- **Production shape:** [the 7-layer production-grade agentic system](https://github.com/FareedKhan-dev/production-grade-agentic-system/) · [a Foundry agent harness: tool governance via Azure API gateway](https://levelup.gitconnected.com/designing-a-foundry-agent-harness-a-tool-governance-architecture-based-on-azure-api-gateway-ac86eb23acbd) · [architecting conversational observability for cloud apps](https://aws.amazon.com/de/blogs/architecture/architecting-conversational-observability-for-cloud-applications/) — the last two sit exactly on top of your agentic incident-management work.
- **Case studies:** [Grab's multi-agent engineering support system](https://www.infoq.com/news/2026/05/grab-multi-agent-support-system/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=architecture-design) · [Google's scaling principles for agentic architectures](https://www.infoq.com/news/2026/03/google-multi-agent/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=ai-ml-data-eng) · [how Perplexity built an AI Google](https://blog.bytebytego.com/p/what-salesforce-learned-from-20000) · [the architecture behind Lovable and Bolt](https://www.beam.cloud/blog/agentic-apps).
- The still-true 2024 foundations: [what is a cognitive architecture](https://www.langchain.com/blog/what-is-a-cognitive-architecture) and [own your cognitive architecture, outsource the agent infrastructure](https://www.langchain.com/blog/why-you-should-outsource-your-agentic-infrastructure-but-own-your-cognitive-architecture).
- The contrarian shelf: [multi-agent AI is the new microservices — and that's a warning](https://www.infoworld.com/article/4154335/multi-agent-ai-is-the-new-microservices.html) · ["agentic systems get the hype, but distributed systems are the future of AI"](https://www.youtube.com/watch?v=vRTcE19M-KE&t=13s) · [local-first inference escalation with confidence gates](https://www.infoq.com/articles/local-first-ai-inference-cloud/).
- The enterprise-architecture profession itself: [Gartner: heads of EA must rewire EA for AI](https://www.gartner.com/en/webinar/820752/1827491-heads-of-enterprise-architecture-must-rewire-ea-for-ai?utm_term=1779350419&utm_campaign=SM_GB_YOY_GTR_SOC_SF1_SM-WB-GTS-IT-OD&utm_source=facebook,twitter&utm_medium=social&utm_content=Gartner,Gartner_inc).

## The martinfowler.com subscription

Your steadiest source — and since 2025 it reads like a serialized book on GenAI-era architecture. The through-line: classic engineering discipline applied to non-deterministic systems.

- [the GenAI patterns series](https://martinfowler.com/articles/gen-ai-patterns/) (Fowler & Bharani Subramaniam) — starts with evals, for good reason.
- [agentic AI security — the primer](https://martinfowler.com/articles/harness-engineering.html) on what agents do to your threat model.
- [harness engineering — Birgitta Böckeler's mental model](https://martinfowler.com/articles/harness-engineering.html) and [sensors for coding agents](https://martinfowler.com/articles/sensors-for-coding-agents.html).
- [patterns for reducing friction in AI-assisted development](https://martinfowler.com/articles/reduce-friction-ai/) — "AI assistants are like junior developers with infinite energy but zero context."
- Legacy modernization with AI, a quiet superpower for an enterprise architect: [legacy modernization with GenAI](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html) and [black box to blueprint — reverse-engineering lost source code](https://martinfowler.com/articles/reduce-friction-ai/encoding-team-standards.html).

## Distributed systems — the fundamentals

The layer that doesn't expire. Everything in the agentic section eventually falls back on this shelf.

- [MIT 6.824](https://pdos.csail.mit.edu/6.824/schedule.html) — the distributed systems course; readings and lecture videos.
- [Gossip Glomers](https://fly.io/dist-sys/) — Kyle Kingsbury's distributed systems challenges; learning by breaking things.
- [Lindsey Kuper's CSE138 lectures](https://www.youtube.com/watch?v=uNQGP0yupn0&feature=youtu.be) — "the ideal blend of approachable introduction and academic rigor."
- [an illustrated proof of the CAP theorem](https://mwhittaker.github.io/blog/an_illustrated_proof_of_the_cap_theorem/) · [the distributed systems reading list](https://dancres.github.io/Pages/).
- [Designing Distributed Systems — Brendan Burns's hands-on labs](https://github.com/brendandburns/designing-distributed-systems-labs) — the 2019 save that started this thread.
- [the map of system topologies](https://itnext.io/the-map-of-system-topologies-e2d3d0b89618) — "I love this kind of stuff," you wrote. Whatever you're building probably fits one of these.
- [message queues explained with analogies](https://www.cloudamqp.com/blog/message-queues-exaplined-with-analogies.html) · [Bernd Ruecker on long-running processes in modern architectures](https://www.infoq.com/articles/agent-assisted-intelligent-observability/?utm_source=twitter&utm_medium=link&utm_campaign=calendar).
- [debugging event-driven systems — five self-inflicted problems](https://codeopinion.com/debugging-event-driven-systems-5-problems-teams-create/) — dead-letter queues, eventual consistency, and other 2 a.m. friends.
- ["I used to think distributed systems were hard; then I learned about billing systems"](https://meghangill.substack.com/p/when-every-team-wins-but-the-company) — the humbling counterpoint.

## Microservices, monoliths & the pattern shelf

The DevOps-era backbone of this tag — and notably, your saves aged into skepticism before the industry did.

- [Death by a Thousand Microservices](https://renegadeotter.com/2023/09/10/death-by-a-thousand-microservices.html) — the polemic.
- [Adrian Cockcroft on the Prime Video microservices-to-monolith story](https://adrianco.medium.com/so-many-bad-takes-what-is-there-to-learn-from-the-prime-video-microservices-to-monolith-story-4bd0970423d4) — the sober read on 2023's noisiest architecture debate.
- [microservices lessons from Netflix](https://medium.com/@mananshah3654/microservices-lessons-from-netflix-50cc66d8fd45) · [Airbnb's journey to post-microservices](https://medium.com/qe-unit/airbnbs-microservices-architecture-journey-to-quality-engineering-d5a490e6ba4f).
- [modular monolith with DDD](https://github.com/kgrzybek/modular-monolith-with-ddd) and [evolutionary architecture by example](https://github.com/evolutionary-architecture/evolutionary-architecture-by-example) — the two repos you'd actually build from.
- [DDD by examples — the library project](https://github.com/ddd-by-examples/library) — domain-driven design as working code, newly relevant as a shared language for coding agents.
- [the RIG model for designing sagas](https://www.infoq.com/articles/checklist-kubernetes-production/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Devops) — reversible, irreversible, guaranteed.
- [Design Patterns That Deliver](https://thecodeman.net/design-patterns-that-deliver-ebook?utm_source=x&utm_campaign=11062026) · [design patterns for humans](https://github.com/nilbuild/design-patterns-for-humans) — the patterns refresher, two speeds.
- [Adam Tornhill's clear software design principles](https://adamtornhill.substack.com/p/clear-software-design-principles) — recurring patterns from building both AI-native products and mature codebases.

## Scalability case studies

The InfoQ thread — real systems, real failure modes, saved steadily for a decade.

- [InfoQ's Architectures You've Always Wondered About](https://www.infoq.com/minibooks/architectures-2024/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) — Netflix, AWS, Pinterest, Cloudflare in one minibook.
- [Dropbox Chrono — scalable, consistent metadata caching](https://dropbox.tech/infrastructure/meet-chrono-our-scalable-consistent-metadata-caching-solution).
- [Uber's chat rebuild on GraphQL subscriptions](https://www.infoq.com/news/2024/03/uber-chat-graphql-subscriptions/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) · [Zalando's transformer-based search and ranking platform](https://arxiv.org/abs/2409.02856).
- [DoorDash Aperture — failure mitigation for microservices](https://careersatdoordash.com/blog/app-health-through-metric-aware-rollouts/) — retry storms, death spirals, metastable failures: the vocabulary of cascading failure.
- [Monzo's lessons from Cassandra at scale](https://www.infoq.com/articles/cassandra-kubernetes-microservices/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) · [London Stock Exchange Group's chaos engineering on AWS](https://aws.amazon.com/blogs/architecture/london-stock-exchange-group-uses-chaos-engineering-on-aws-to-improve-resilience/).
- [the InfoQ Architecture and Design Trends Report 2025](https://www.infoq.com/articles/platform-reliability-cycle/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) — where the industry thinks it's going.

## Diagrams & architecture-as-code

A surprisingly deep sub-thread — you collect diagramming tools the way some people collect fonts, and lately the tools draw themselves.

- The classics: [the C4 model, explained](https://www.freecodecamp.org/news/how-to-create-software-architecture-diagrams-using-the-c4-model/) · [Luca Mezzalira on documenting architecture — ADRs, RFCs, event storming, C4](https://lucamezzalira.medium.com/how-to-document-software-architecture-techniques-and-best-practices-2556b1915850) · [architecture-as-code with Structurizr](https://dzone.com/articles/ai-sdk-vs-genkit-middleware).
- Diagrams from code: [Diagrams — diagram-as-code in Python](https://github.com/mingrammer/diagrams) · [LikeC4 — live diagrams from code](https://github.com/likec4/likec4) · [Terravision — architecture diagrams straight from Terraform](https://github.com/patrickchugh/terravision).
- The AI wave: [archify — polished diagrams from plain English](https://github.com/tt-a1i/archify) · [Eraser's AI architecture diagram generator](https://www.eraser.io/ai/architecture-diagram-generator) · [codeflow — GitHub URLs into interactive architecture maps](https://github.com/braedonsaunders/codeflow) · [comparing LLMs for creating architecture diagrams](https://icepanel.io/blog/2025-08-18-comparison-llms-for-creating-software-architecture-diagrams/).
- Interactive design canvases: [paperdraw — design distributed systems in the browser](https://paperdraw.dev/) · [layerd — layer-based 2D system design](https://layerd.cloud/).
- [the architecture diagramming tools list](https://generativeprogrammer.com/p/from-test-driven-to-loop-driven-development?r=5x6nf&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true&triedRedirect=true) — your own "[bookmark for later]," now bookmarked here.

## The interview shelf

You're past the interview-grind stage, but this shelf doubles as a fundamentals curriculum — and the newest addition is aimed exactly at your next role.

- [The AI Engineer's System Design Interview Guide](https://drive.google.com/file/d/1OAmsAIuKNTnMvdz6Sx21InRkZwVT0QmY/view?usp=drivesdk) — where the classic interview meets the new job description.
- [the System Design Primer](https://github.com/donnemartin/system-design-primer) — the canonical repo, re-saved in 2026; still the starting point.
- [best-system-design-resources](https://github.com/javabuddy/best-system-design-resources) · [Complete System Design — 100+ case studies](https://github.com/Coder-World04/Best-Data-Science-and-ML-Courses) · [awesome-software-architecture](https://github.com/mehdihadeli/awesome-software-architecture).
- [30 blogs to learn 30 system design concepts](https://blog.algomaster.io/p/scalability) — scalability, availability, CAP, ACID, one blog each.
- Worked designs: [the URL shortener](https://systemdesign.one/url-shortening-system-design) · [scaling an app to 10 million users on AWS](https://newsletter.systemdesign.one/p/ai-concepts).
- The reading meta-layer: [75 engineering blogs worth reading for system design](https://github.com/JohnCrickett/SystemDesign/tree/main/engineering-blogs) · [the software architecture books list](https://github.com/mhadidg/software-architecture-books) · [top 10 of 40+ Udemy architecture courses, road-tested](https://www.sqlrevisited.com/2026/05/i-tried-40-software-architecture-system-design-courses-here-are-my-top-10.html).

---

## All links on this topic
