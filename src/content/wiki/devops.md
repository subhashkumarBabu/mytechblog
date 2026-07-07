---
title: "DevOps"
topic: "devops"
draft: false
generated: "2026-07-07"
sources: "1192 tagged links, curated from the 220 most recent (2023\u20132026)"
---

**1,192 saved links**, 2017–2026 (peak: 2023). The corpus tells two stories at once: the long identity debate (DevOps vs. SRE vs. platform engineering, including several obituaries for the term itself) — and then, from 2025 onward, almost every save is about AI agents doing the operating. Your own pivot, in miniature.

**Related:** [Azure](/wiki/azure/) · [Infrastructure as Code](/wiki/infrastructure-as-code/) · [Kubernetes](/wiki/kubernetes/) · [Programming](/wiki/programming/)

---

## Start here

- [InfoQ Cloud and DevOps Trends Report 2025](https://www.infoq.com/articles/local-first-ai-inference-cloud/) — the current map of the territory.
- [DORA 2024: Accelerate State of DevOps results](https://cloud.google.com/resources/content/building-ai-agents?utm_source=google_start_up&utm_medium=et&utm_campaign=FY25-Q3-GLOBAL-SMB34129-website-dl-ai-agent-report-51052&utm_content=social&e=48754805&hl=en&linkId=18639070) and the full [2024 State of DevOps Report](https://cloud.google.com/resources/devops/state-of-devops).
- [DevOps vs. SRE vs. platform engineering — a differentiation that actually lands](https://www.syntasso.io/post/devops-vs-sre-vs-platform-engineering) ("besides the amount of marketing behind each").
- [SRE Roadmap 2026: skills, tools & career path](https://medium.com/devops-ai-decoded/sre-site-reliability-engineer-roadmap-2026-complete-guide-to-skills-tools-career-path-f2181f3f2223) — where the role is heading.
- [A Eulogy for DevOps](https://matduggan.com/a-eulogy-for-devops/) — the best-written version of the "it's over" argument; read it, then read everything below that disproves it.
- [DevOps and cloud key metrics](https://www.techopsexamples.com/subscribe) — the numbers that tell you whether any of this is working.

## The agentic turn

The dominant thread since 2025: operations as something agents do, humans supervise.

- [AI in SRE: where and how Google deploys agentic AI in operations](https://cloud.google.com/blog/products/devops-sre/how-google-sre-is-using-agentic-ai-to-improve-operations/) and [Google Cloud SREs using Gemini CLI for outage response — from paging to postmortem](https://www.infoq.com/news/2026/02/google-sre-gemini-cli-outage/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Devops).
- [The AI SRE agent revolution: why 2026 is the year of autonomous incident resolution](https://medium.com/devops-ai-decoded/the-ai-sre-agent-revolution-why-2026-is-the-year-of-autonomous-incident-resolution-073807b2209d) — the bull case for exactly what you're building.
- [Microsoft Foundry adds runtime, tooling, and governance for production agents](https://www.infoq.com/news/2026/06/microsoft-foundry-agents/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Devops) and [MS Build: reimagining software development and DevOps with agentic AI](https://msft.it/l/6011SjWdv).
- [Patrick Debois: four emerging AI-native dev patterns](https://devsummit.infoq.com/presentation/munich2025/4-patterns-ai-native-development?utm_source=x&utm_medium=social&utm_campaign=post1_0613_post_idsmunich25) — the person who named DevOps, renaming what comes next; also [Father of DevOps on the Future of AI and DevOps](https://www.youtube.com/watch?v=sTAyRfNMrsg) (video).
- [The agent framework container wars: pick protocols, not frameworks](https://thenewstack.io/agent-framework-container-wars/) — the architecture take.
- [Why most AI projects fail after the demo works](https://thenewstack.io/ai-demo-to-production/) — patterns for the demo-to-production gap.
- [Agent harnesses and the distributed-feedback problem](https://thenewstack.io/agent-harness-distributed-feedback-problem/) — agentic coding meets distributed systems.
- Tooling: [Claude Code agents and skills for DevOps](https://github.com/adamancini/devops-toolkit) · [an open-source DevOps copilot](https://github.com/jlewi/foyle) · [a local DevOps layer for coding agents](https://github.com/boshu2/agentops) · [Google ADK connected to dev tooling](https://devops.com/google-adk-opens-the-door-to-ai-agents-that-work-inside-your-devops-toolchain/).

## Azure DevOps in production

The deepest practical cluster — pipelines, agents, and governance at scale.

- The **Treasure Map for Azure DevOps at Scale** series: [Part 1 — managing environments](https://link.medium.com/zkZaKHbtCHb) · [Part 2 — managing libraries](https://link.medium.com/YADDORQhHHb) · [Part 3 — cross-repository policies](https://link.medium.com/jL8LtFPcmHb).
- Agents: [Managed DevOps Pools — ADO agents at scale without the hassle](https://johnlokerse.dev/2024/10/14/simplify-azure-devops-agent-management-with-managed-devops-pools/) · [self-hosted agents on Kubernetes](https://medium.com/@muppedaanvesh/azure-devops-self-hosted-agents-on-kubernetes-part-3-6658d741b369) · [private build agents on Container Instances with Terraform](https://azurewarriors.com/2024/02/25/azure-devops-private-build-agent-using-azure-container-instance-and-terraform/).
- Governance: [service connection approvals (use these, not environment approvals)](https://johnlokerse.dev/2024/03/11/use-service-connection-approvals-to-elevate-azure-devops-deployment-security/) · [soft validation of pull requests](https://www.blueboxes.co.uk/create-soft-validation-of-pull-requests-in-azure-devops) · [Bicep linting in the pipeline](https://johnlokerse.dev/2024/02/05/lint-azure-bicep-templates-in-azure-devops/).
- Security: [Poisoning pipelines: Azure DevOps edition](https://labs.jumpsec.com/poisoning-pipelines-azure-devops-edition/) — how attackers see your pipelines; and [container patching with Trivy and Copacetic](https://luke.geek.nz/azure/microsoft-learn-contributor-chatmode/).
- Terraform in ADO: [pipeline + Terraform deployment tutorial](https://medium.com/azure-architects/azure-devops-pipeline-terraform-deployment-tutorial-fb5298e1d6c7) · [debugging Terraform with a simple ADO switch](https://medium.com/@antoine.loizeau/add-a-switch-to-simplify-terraform-debugging-2d532eb889eb).
- The AI layer: [azure-devops-mcp](https://github.com/microsoft/azure-devops-mcp) and [Azure DevOps MCP Server — what it is and why it matters](https://dev.to/mehul_budasana/azure-devops-mcp-server-what-it-is-and-why-it-matters-42p1) · [nine rounds of AI-powered code review in ADO](https://www.viblo.se/posts/ai-code-reviews/).
- Perspective: [Is Azure DevOps "dead"?](https://www.bensampica.com/blog/isazdodead/) · [choosing between GitHub and Azure DevOps](https://dev.to/brainboard/choosing-between-github-and-azure-devops-a-comprehensive-guide-for-senior-cloud-architects-55hn) · [APIOps: APIM deployments with GitOps](https://www.youtube.com/watch?v=TsYWwXCBIgU) (video).

## Platform engineering & the turf wars

- [Three pillars of platform engineering: a virtuous cycle](https://www.infoq.com/articles/platform-reliability-cycle/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Devops).
- The boundary debate: [SRE vs. DevOps vs. platform engineering](https://www.splunk.com/en_us/pdfs/exploring-splunk.pdf) · [Platform engineering vs. DevOps](https://medium.com/spacelift/platform-engineering-vs-devops-ade389ce819e) · [platform engineering is NOT just another name for SRE or DevOps](https://www.infoq.com/presentations/devex-highlights/) · ["platform" — ask ten people, get eleven definitions](https://www.forrester.com/blogs/which-technology-service-providers-are-strategic-to-the-enterprise/).
- Evolution arguments: [how platform and site reliability engineering are evolving DevOps](https://www.infoq.com/articles/micro-metrics-llm-evaluation/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=ai-ml-data-eng) · [from "nice to have" to "must have" — evolving practices with SRE and PE](https://www.infoq.com/articles/beyond-rag-context-aware/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) · [Coté's rant: get DevOps back on track](https://cote.io/2024/09/06/how-devops-can.html).
- In practice: [platform engineering for a 10,000-dev workforce](https://thenewstack.io/how-platform-engineering-enables-the-10000-dev-workforce/) · [how Pfizer scaled DevEx to 1,000 engineers](https://thenewstack.io/devex-success-how-pfizer-scaled-to-1000-engineers/) · [the 2024 state of platform engineering](https://thenewstack.io/the-2024-state-of-platform-engineering-fledgling-at-best/).
- Career: [SysOps → DevOps → SRE → platform engineer](https://thenewstack.io/how-to-become-a-platform-engineer/).

## Observability & measurement

- [OpenTelemetry publishes the "Demystifying OpenTelemetry" guide](https://www.infoq.com/news/2026/02/opentelemetry-observability/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Devops) and [what's new with the second-biggest CNCF project](https://thenewstack.io/opentelemetry-whats-new-with-the-second-biggest-cncf-project/).
- [CI/CD observability — a rich new opportunity for OTel](https://thenewstack.io/ci-cd-observability-a-rich-new-opportunity-for-opentelemetry/) — pipelines are systems too.
- [Observability 2.0](https://thenewstack.io/beyond-monitoring-how-observability-2-0-is-revolutionizing-developer-experience/) — and [the weekly "X is dead" tombstone industry](https://last9.io/blog/everything-in-software-monitoring-is-dead-apparently/), for perspective.
- [How to do DORA metrics right](https://thenewstack.io/how-to-do-dora-metrics-right/) · [how do you measure developer experience?](https://thenewstack.io/how-do-you-measure-developer-experience/) · [DORA's underrated finding: documentation culture](https://cloud.google.com/resources/content/dora-impact-of-gen-ai-software-development).
- [Grafana's improved incident management](https://www.infoq.com/news/2026/05/dora-roi-ai-assisted-dev-report/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) · [LLM observability: the new golden signals](https://thenewstack.io/large-language-model-observability-the-breakdown/) — where this section meets your AI work.

## Hands-on practice

The corpus is unusually rich in do-it-yourself material — the perennial-learner receipts.

- **iximiuz Labs** (your most-saved practice source): ["AI is only helpful if you can evaluate its work"](https://labs.iximiuz.com/challenges) · [networking basics for DevOps and platform engineers](https://labs.iximiuz.com/courses/computer-networking-fundamentals/from-lan-to-vxlan?expand=all) · [container networking, explained interactively](https://labs.iximiuz.com/tutorials/container-networking-from-scratch) · [labctl — remote Linux/Docker/K8s playgrounds from the CLI](https://github.com/iximiuz/labctl).
- Labs & pathways: [KodeKloud free labs](https://kodekloud.com/studio/labs/devops) · [10 free DevOps labs](https://lnkd.in/g3G_vMNU) · [a 6-month cloud/DevOps pathway](https://www.madebygps.com/cloudcamp/) · [the learntocloud DevOps capstone](https://github.com/rishabkumar7/ltc-devops-project) · [DevOps the Hard Way — Azure/AKS edition](https://github.com/thomast1906/DevOps-The-Hard-Way-Azure).
- Collections: [curated DevOps learning materials](https://github.com/Lets-DevOps/awesome-learning) · [free DevOps books](https://github.com/rootusercop/Free-DevOps-Books-1) · [cloud DevOps notes: GCP, Azure, AWS, K8s](https://github.com/ahmedtariq01/Cloud-DevOps-Learning-Resources) · [hands-on end-to-end project scenarios](https://github.com/lloyd-theophilus/DevOps-Projects) · [DevOps AI guidelines & learning path](https://github.com/VersusControl/devops-ai-guidelines).
- Interviews: [a free DevOps/SRE Q&A hub](https://ewry.net/devops-sre-interview-questions/) · [SRE interview questions, beginner to senior](https://techyoutube.com/category/devops/sre-interview-q-a/).

## DevSecOps

- [DevSecOps University — books, tutorials, tools](https://www.practical-devsecops.com/devsecops-university/).
- [the ultimate DevSecOps library](https://github.com/sottlmarek/DevSecOps?utm_content=buffer00ed2&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer) — the reference repo you saved twice.
- [the vulnerability-management lifecycle in DevSecOps](https://blog.gitguardian.com/vulnerability-management-lifecycle-in-devsecops/) · [making security painless in the developer workflow](https://github.blog/enterprise-software/devsecops/5-ways-to-make-your-devsecops-strategy-developer-friendly/) · [a bookmark-worthy DevSecOps checklist](https://media.licdn.com/dms/document/media/D561FAQGhb5rmgeiSjg/feedshare-document-pdf-analyzed/0/1697646696980?e=1719446400&v=beta&t=oa9y9spvW5NXfN6mijTRLpZa-Tw8INpyB54hL-BVRMA).

---

## All links on this topic
