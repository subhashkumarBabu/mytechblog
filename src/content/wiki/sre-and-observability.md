---
title: "SRE & Observability"
topic: "sre-observability"
draft: false
generated: "2026-07-07"
sources: "373 tagged links, curated from the 220 most recent (2023\u20132026)"
---

**373 saved links — your professional home turf.** The corpus documents SRE's third age arriving in real time: from Google's canon, through the observability 2.0 debate, to agents holding the pager. Read alongside [AI Agents](/wiki/ai-agents/) — this page is effectively the R&D feed for your incident-management platform.

**Related:** [DevOps](/wiki/devops/) · [AI Agents](/wiki/ai-agents/) · [Kubernetes](/wiki/kubernetes/) · [Platform Engineering](/wiki/platform-engineering/)

---

## Start here

- [Google's free SRE books](https://sre.google/books/) — still the canon; plus [11 lessons learned from 20 years of SREing](https://sre.google/resources/practices-and-processes/twenty-years-of-sre-lessons-learned/?mc_cid=a54cf6366c&mc_eid=b377237126) and [the "prodverbs"](https://google.smh.re/3uqg).
- ["Hired an SRE. Renewed Datadog. Still having the same incidents."](https://www.shankuehn.io/post/hiring-an-sre-does-not-magically-fix-reliability) — SRE ≠ observability ≠ tools; the best short corrective in the tag.
- [the future of software engineering is SRE](https://swizec.com/blog/the-future-of-software-engineering-is-sre/) — when code gets cheap, operational excellence wins. The thesis behind your pivot.
- [SRE Roadmap 2026](https://medium.com/devops-ai-decoded/sre-site-reliability-engineer-roadmap-2026-complete-guide-to-skills-tools-career-path-f2181f3f2223) and [SRE vs. platform engineer](https://aws.plainenglish.io/sre-site-reliability-engineer-vs-platform-engineer-2d4bc10b8e97).
- [howtheysre — how top tech companies structure SRE teams](https://github.com/upgundecha/howtheysre?utm_content=buffer9c1c9&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer).

## The AI-SRE wave

The densest 2025–26 cluster — the market building what you're building.

- [where and how Google deploys agentic AI in SRE](https://cloud.google.com/blog/products/devops-sre/how-google-sre-is-using-agentic-ai-to-improve-operations/) · [Google's VP of SRE on how AI is changing SRE — and how it isn't](https://google.smh.re/5WXj) · [Gemini CLI for outage response: from paging to postmortem](https://www.infoq.com/news/2026/02/google-sre-gemini-cli-outage/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Devops).
- [Anthropic's cookbook: an incident-response agent with read-write MCP tools — diagnosis, remediation, postmortem](https://platform.claude.com/cookbook/claude-agent-sdk-03-the-site-reliability-agent) — the closest published blueprint to your platform.
- [Azure SRE Agent: end-to-end agentic operations](https://www.youtube.com/watch?v=06j-d0gsREw) (video) and [connecting the Azure SRE agent to Azure MCP](https://www.isaacl.dev/gz8).
- [OpenSRE — an open-source framework (and training environment) for AI SRE agents](https://github.com/Tracer-Cloud/opensre) · [60+ tools in the AI-SRE space, collected](https://github.com/pavangudiwada/awesome-ai-sre).
- [The Third Age of SRE: AI Reliability Engineering](https://medium.com/@den.vasyliev/ai-reliability-engineering-the-third-age-of-sre-1f4a71478cfa) · [agentic observability: AI on top of your existing tools](https://www.infoq.com/articles/agent-assisted-intelligent-observability/?utm_source=twitter&utm_medium=link&utm_campaign=calendar).
- Case studies: [Uber's Genie on-call copilot — 70k answers, 13k hours saved](https://www.infoq.com/news/2026/02/google-documentation-ai-agents/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) · [Intuit: GenAI on-call across 325+ clusters](https://medium.com/intuit-engineering/genai-experiments-monitoring-and-debugging-kubernetes-cluster-health-e8597454a85c) · [Google: GenAI cut incident-summary time 51%](https://google.smh.re/3-p6) · [accelerating incident response with GenAI](https://security.googleblog.com/2024/04/accelerating-incident-response-using.html).
- DIY: [building an AI SRE agent to analyze production](https://pub.towardsai.net/how-im-building-an-ai-sre-agent-to-analyze-production-4f61aab81174) · [intelligent alert handling with Prometheus + n8n + OpenAI](https://medium.com/@kopp0510/how-i-made-kubernetes-monitoring-smarter-with-ai-b16ff3888e41) · [an SRE extension for the Gemini CLI](https://github.com/gemini-cli-extensions/sre).

## The observability 2.0 debate

- [the 1.0 vs. 2.0 distinction — "it's not marketing speak"](https://www.honeycomb.io/blog/one-key-difference-observability1dot0-2dot0?utm_source=twitter&utm_medium=organic-social) and [Charity Majors explaining the shift](https://www.youtube.com/watch?si=ybGL6Hk6bQFjX0vT&v=IVpQeMDWysA&feature=youtu.be) (video).
- [the technical core: one source of truth, arbitrarily-wide structured log events](https://www.honeycomb.io/resources/whitepapers/bridge-from-observability1dot0-2dot0-logs-not-metrics).
- ["Is it time to version observability?"](https://www.honeycomb.io/blog/time-to-version-observability-signs-point-to-yes?utm_source=the+new+stack&utm_medium=twitter&utm_campaign=tns+platform) with [the companion essay](https://charity.wtf/2024/08/07/is-it-time-to-version-observability-signs-point-to-yes/).
- [the observability cost crisis, part one](https://www.honeycomb.io/blog/how-much-should-i-spend-on-observability-pt1) — whether your o11y should cost what it costs.
- [the Observability CAP theorem](https://phillipcarter.dev/2024/09/14/the-observability-cap-theorem) · [every SDLC stage is collapsing except monitoring — and monitoring must evolve into the feedback loop for agents](https://boristane.com/blog/the-software-development-lifecycle-is-dead/).
- [observability's past, present, and future](https://blog.sherwoodcallaway.com/observability-s-past-present-and-future/) · [the weekly tombstone industry, for perspective](https://last9.io/blog/everything-in-software-monitoring-is-dead-apparently/).

## OpenTelemetry in practice

- [the "Demystifying OpenTelemetry" guide](https://www.infoq.com/news/2026/02/opentelemetry-observability/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Devops) and [OTel Blueprints — cutting the deployment complexity](https://www.infoq.com/news/2026/06/opentelemetry-blueprints-launch/?utm_source=twitter&utm_medium=link&utm_campaign=calendar).
- [OpenTelemetry in 180 seconds](https://www.youtube.com/watch?si=FmGRM14pra5OgF4i&v=vnE_DfNB97w&feature=youtu.be) (video) · [a curated OTel resource list](https://github.com/magsther/awesome-opentelemetry).
- [OpenTelemetry tracing implemented in under 200 lines of code](https://jeremymorrell.dev/blog/minimal-js-tracing/) — the best way to actually understand it.
- [Prometheus & OTel, better together](https://adri-v.medium.com/prometheus-opentelemetry-better-together-41dc637f2292) · [OTel best practices: naming](https://www.honeycomb.io/blog/opentelemetry-best-practices-naming) · [Elastic Distributions of OpenTelemetry (EDOT)](https://www.elastic.co/observability-labs/blog/elastic-distributions-opentelemetry?ultron=product_marketing%2Belastic_observability_labs%2Binnovation_announcements&blade=twitter&hulk=social&utm_content=14387332135&linkId=549282131).
- [the Aspire dashboard — best local OTel visualizer](https://anthonysimmon.com/dotnet-aspire-dashboard-best-tool-visualize-opentelemetry-local-dev/).

## Observing agents and LLMs

Where your two worlds fuse — telemetry for systems that reason.

- [GenAI observability with OpenTelemetry and Aspire](https://opentelemetry.io/blog/2026/genai-observability/) · [tracing agent sessions](https://www.youtube.com/watch?v=JsZ3q8OKsMM) (video).
- [AI agent observability, explained](https://outcomeschool.com/blog/ai-agent-observability) · [top 5 agent-observability practices](https://azure.microsoft.com/en-us/blog/agent-factory-top-5-agent-observability-best-practices-for-reliable-ai/).
- [the LLM stack's new golden signals](https://thenewstack.io/large-language-model-observability-the-breakdown/) · [the complete LLM observability guide](https://portkey.ai/blog/claude-skills-definition-use-cases-and-limitations/).
- [OTel observability for AI agents](https://github.com/future-agi/traceAI) · [agentevals — evals computed from OTel traces](https://github.com/agentevals-dev/agentevals) — evals and observability as one discipline.
- [closing the verification loop: observability-driven harnesses for building with agents](https://www.datadoghq.com/blog/ai/harness-first-agents/).
- [LangSmith agent observability](https://www.youtube.com/watch?si=nFIV2X-oZS6OY3HP&v=gOK65vR0hIY&feature=youtu.be) (video) · [Galileo on multi-agent observability](https://galileo.ai/blog/benefits-of-multi-agent-systems) · [AI observability pricing compared — 8x to 100x spreads](https://pydantic.dev/articles/ai-observability-pricing-comparison).

## The Prometheus/Grafana stack

- [a Prometheus basic tutorial](https://github.com/yolossn/Prometheus-Basics) · [Grafana for Beginners](https://www.youtube.com/playlist?list=PLDGkOdUX1Ujo27m6qiTPPCpFHVfyKq9jT) and [the Grafana stack explained](https://www.youtube.com/watch?si=XL3oxhlr7CASC5AY&v=WSW1urIXsfA&feature=youtu.be) (videos).
- [modern Grafana dashboards for Kubernetes](https://github.com/dotdc/grafana-dashboards-kubernetes) · [distributed tracing with Tempo](https://blog.stackademic.com/distributed-tracing-with-grafana-tempo-031e07b5f027).
- Scaling war stories: [why TiDB moved from Prometheus to VictoriaMetrics](https://www.pingcap.com/blog/tidb-observability-migrating-prometheus-victoriametrics/) · [Zomato's journey from Thanos to VictoriaMetrics](https://www.zomato.com/blog/migrating-to-victoriametrics-a-complete-overhaul-for-enhanced-observability) · [a Prometheus core dev on why classic metrics collection still wins](https://promlabs.com/blog/2025/07/17/why-i-recommend-native-prometheus-instrumentation-over-opentelemetry/).
- eBPF frontier: [Coroot — eBPF-powered open-source APM](https://www.infoq.com/news/2026/06/azure-functions-serverless-agent/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Cloud) · [Netflix's bpftop](https://github.com/jfernandez/bpftop).
- [OneUptime — the open-source Datadog alternative](https://github.com/OneUptime/oneuptime).

## Incident craft

- [how Netflix empowers engineers with incident management](https://netflixtechblog.com/empowering-netflix-engineers-with-incident-management-ebb967871de4).
- [a complete open-source incident-response program pack](https://www.sectemplates.com/2024/06/announcing-the-incident-response-program-pack-10.html) — process, from the ground up.
- [Airbnb: your status page shouldn't depend on the system it monitors](https://medium.com/airbnb-engineering/monitoring-reliably-at-scale-ca6483040930) — circular dependencies in monitoring.
- [debugging event-driven systems: the five recurring problems](https://codeopinion.com/debugging-event-driven-systems-5-problems-teams-create/) — directly relevant to your Service Bus architecture.
- Culture: [Google SRE applying control theory (STPA/CAST) to complex systems](https://www.usenix.org/publications/loginonline/evolution-sre-google) · [the free systems-engineering syllabus](https://cloud.google.com/blog/topics/developers-practitioners/how-to-build-dynamic-web-experiences-with-conversational-agents) · [Ben Treynor Sloss on the evolution of SRE](https://google.smh.re/4MVg) · [the SRE deep dive into the Linux page cache](https://biriukov.dev/docs/page-cache/0-linux-page-cache-for-sre/) · [positive affirmations for SREs](https://www.youtube.com/watch?si=vBj8GJIWs6UroFcH&v=ia8Q51ouA_s&feature=youtu.be) — because the pager is heavy.

---

## All links on this topic
