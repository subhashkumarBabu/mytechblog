---
title: "Platform Engineering"
topic: "platform-engineering"
draft: false
generated: "2026-07-07"
sources: "207 tagged links, curated from the 183 most recent (2023\u20132026)"
---

**207 saved links** tracking the discipline from "hot new trend" (2023) through its hype-cycle hangover to its next mutation: platforms whose primary users are agents, not developers. This is the layer-thinking topic — platform engineering is "is this the right layer?" practiced at organizational scale.

**Related:** [DevOps](/wiki/devops/) · [SRE & Observability](/wiki/sre-and-observability/) · [Kubernetes](/wiki/kubernetes/) · [Infrastructure as Code](/wiki/infrastructure-as-code/)

---

## Start here

- [Platform Engineering 101 — Luca Galante's original explainer](https://www.infoq.com/articles/platform-engineering-primer/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Devops).
- [the InfoQ Platform Engineering Guide: principles and best practices](https://www.infoq.com/minibooks/ai-assisted-development-2025/) (free eMag).
- [Platform Engineering End-to-End](https://www.lucavallin.com/blog/platform-engineering-end-to-end) — the modern single-page tour.
- [Three pillars of platform engineering: a virtuous cycle](https://www.infoq.com/articles/platform-reliability-cycle/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Devops).
- [the CNCF Platform Engineering Maturity Model](https://tag-app-delivery.cncf.io/whitepapers/platform-eng-maturity-model/) — where are you on the curve?

## The identity question

- ["platform engineering is just DevOps with a product mindset"](https://stackoverflow.blog/2023/07/26/platform-engineering-is-just-devops-with-a-product-mindset/) — the most durable one-liner in the debate.
- [Wardley: the term got wrapped up with *building your own platform*](https://blog.gardeviance.org/2023/01/why-fuss-about-conversational.html) — the strategic caution.
- [platform engineering won't kill the DevOps star](https://thenewstack.io/platform-engineering-wont-kill-the-devops-star/) · ["platform engineering doesn't replace DevOps"](https://medium.com/defense-unicorns/5-minute-devops-platform-engineering-dosent-replace-devops-599f2d61b66).
- [PE brings structure to the chaos of DevOps](https://bravenewgeek.com/platform-engineering-as-a-service/) · [PE vs. CloudOps](https://www.stacksense.io/p/platform-engineering-vs-cloudops).

## Building the platform

- Golden paths: [self-service + reduced cognitive load, hand in hand](https://thenewstack.io/getting-developer-self-service-right/) · [an IDP with golden paths, lifecycle management, and secrets](https://www.hashicorp.com/blog/best-practices-for-avoiding-cloud-security-and-compliance-costs) · [McDonald's: self-serve templates and golden pathways](https://medium.com/mcdonalds-technical-blog/simplifying-and-standardizing-software-at-scale-6b60e451e772).
- Portals: [a guide to internal developer portals](https://www.port.io/guide) · [backstage.io](https://backstage.io/) · [Backstage walkthrough](https://www.youtube.com/watch?v=2-U-RBJwNQA) (video) · [building your developer portal with Backstage, part 1](https://medium.com/gitguardian/platform-engineering-building-your-developer-portal-with-backstage-pt-1-21d3f8de2033) · ["the market didn't outgrow the *idea* of Backstage — it outgrew the architecture"](https://newsletter.port.io/p/backstage-is-dead).
- Anatomy: [the 7 core components of an IDP](https://mia-platform.eu/blog/10-core-components-every-idp-should-include/) · [what an IDP actually is](https://faun.pub/what-is-an-internal-developer-platform-dc89e9e1edaa) · [creating a complete IDP](https://www.youtube.com/watch?v=Rg98GoEHBd4) (video).
- Case studies: [how Palo Alto built their IDP on Backstage](https://www.infoq.com/news/2024/03/tech-debt-software/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=culture-methods) · [planning and launching platform engineering at N26](https://blog.eriksen.com.br/en/platform-engineering-n26) · [Netflix: "we're just getting started"](https://netflixtechblog.com/neflix-platform-engineering-were-just-getting-started-267f65c4d1a7) · [platform engineering at Mercari](https://speakerdeck.com/tcnksm/platform-engineering-at-mercari).
- On Azure: [the AKS platform-engineering reference environment](https://github.com/Azure-Samples/modern-data-warehouse-dataops/blob/main/e2e_samples/fabric_dataops_sample/README.md) · [Microsoft's platform engineering guide](https://www.buchatech.com/2023/11/platform-engineering-at-microsoft/).
- [Platform Engineering on Kubernetes — the Manning book](https://www.salaboy.com/2023/10/25/milestone-achieved-book-published/).

## Measuring it: the DevEx thread

- [Fowler/Noda/Cochran: why measuring developer productivity is hard, and what to do](https://martinfowler.com/articles/structured-prompt-driven/).
- [a new productivity measure from the creators of DORA and SPACE](https://newsletter.pragmaticengineer.com/p/developer-productivity-a-new-framework) and [the response to McKinsey's attempt](https://newsletter.pragmaticengineer.com/p/steve-yegge-on-ai-agents-and-the) — the full controversy.
- [the DevEx framework: feedback loops, cognitive load, flow state](https://newsletter.getdx.com/p/applying-the-devex-framework) · [the DevEx white paper behind it](https://queue.acm.org/detail.cfm?id=3807961).
- [how Google measures developer productivity internally](https://ieeexplore.ieee.org/abstract/document/10372494) · [developer productivity engineering at Netflix](https://www.isaacl.dev/eqd).
- ["yes, you can measure it… but is that what you *want* to measure?"](https://jchyip.medium.com/yes-you-can-measure-software-developer-productivity-but-are-you-sure-thats-what-you-re-measuring-d6b081897840).
- [is a DevEx team just a platform team in disguise?](https://newsletter.getdx.com/p/platform-vs-devex-teams) · [what is a developer experience team?](https://leaddev.com/velocity/what-developer-experience-team).

## Failure modes

Saved in unusual density — you clearly collect the cautionary tales.

- [hard-won lessons: the failure modes of platform engineering](https://www.infoq.com/articles/platform-engineering-lessons-learned/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Devops).
- [how to fail at platform engineering](https://www.cncf.io/blog/2025/10/31/tool-descriptions-are-eating-up-all-your-ai-tokens-but-they-dont-have-to/) — over-complex designs, thin docs, and treating the platform as a project instead of a product.
- [the 9 steps to platform-engineering hell](https://www.youtube.com/watch?v=_4hYd_5-MtI&feature=youtu.be) (video) · [Charity Majors: perils, pitfalls, and pratfalls](https://www.infoq.com/presentations/lessons-building-engineering-team/?utm_source=twitter&utm_medium=link&utm_campaign=calendar).
- [the recurring traps: small teams, build-vs-buy, building the wrong thing](https://www.infoq.com/news/2026/04/junior-developer-pipeline-crisis/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=development).
- [lessons from the first hype cycle](https://www.thestack.technology/platform-engineering-hype-cycle-the-stack/) and [the 2024 state: "most, and not for long"](https://thenewstack.io/the-2024-state-of-platform-engineering-fledgling-at-best/).

## The agentic turn

- ["Developer experience is dead. Long live agent experience."](https://www.builder.io/blog/agent-experience) — design the platform for both audiences now.
- ["LLMs thrive where the data space is well-defined and structured — platform engineering is their ideal playground"](https://platformengineering.org/blog/ai-and-platform-engineering).
- [agentic AI and platform engineering, combined](https://thenewstack.io/agentic-ai-and-platform-engineering-how-they-can-combine/).
- [developer productivity in the age of generative AI — a psychological perspective](https://research.google/pubs/developer-productivity-in-the-age-of-generative-ai-a-psychological-perspective/).
- [AI will break the developer-productivity stagnation — if you do it right](https://cloud.google.com/blog/products/application-development/ai-assistance-kickstarts-developer-productivity-whitepaper/).
- [Kelsey Hightower on where platforms go next](https://www.youtube.com/live/BfeRupW-lBE?si=5jZTzDD5s7IdVWwy) (video).

---

## All links on this topic
