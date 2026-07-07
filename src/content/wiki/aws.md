---
title: "AWS"
topic: "aws"
draft: false
generated: "2026-07-07"
sources: "278 tagged links, curated from the 200 most recent (2021\u20132026)"
---

**278 saved links**, 2017–2026 (peak: 2023) — the other cloud. Where your [Azure](/wiki/azure/) tag is a career, the AWS tag is a curriculum: Well-Architected, serverless-first thinking, EKS-with-Terraform plumbing, and an unusually strong architecture-writing tradition (Let's Architect, the whitepapers, re:Invent talks). Then the same pivot as everywhere else: from 2025 the saves are Strands, AgentCore, and agent SOPs — Amazon's answer to the agentic moment.

**Related:** [Azure](/wiki/azure/) · [Google Cloud](/wiki/google-cloud/) · [Infrastructure as Code](/wiki/infrastructure-as-code/) · [Kubernetes](/wiki/kubernetes/) · [AI Agents](/wiki/ai-agents/)

---

## Agents on AWS

- [Marc Brooker breaks down the core components of agentic systems and Bedrock AgentCore](https://www.amazon.science/blog/building-commonsense-knowledge-graphs-to-aid-product-recommendation) — start here.
- [Agent SOPs — the structured agent-prompt format used heavily inside Amazon](https://aws.amazon.com/blogs/opensource/introducing-strands-agent-sops-natural-language-workflows-for-ai-agents/), open-sourced.
- Strands: [Strands Labs — AWS's experimental agent-development GitHub org](https://www.infoq.com/news/2026/03/aws-strands-agents/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) · [building Strands agents: custom tools and MCP integration](https://dev.to/aws/building-strands-agents-with-a-few-lines-of-code-custom-tools-and-mcp-integration-3c1c) · [Strands & MCP in the open-protocols series](https://aws.amazon.com/de/blogs/opensource/open-protocols-for-agent-interoperability-part-3-strands-agents-mcp/) · ["Still Not Durable Agents" — the sharp critique of Strands and Agent Framework](https://www.diagrid.io/blog/still-not-durable-how-microsoft-agent-framework-and-strands-agents-repeat-the-same-mistake).
- [architecting for agentic AI development on AWS](https://aws.amazon.com/de/blogs/architecture/architecting-for-agentic-ai-development-on-aws/) · [evaluating AI agents: real-world lessons from Amazon](https://aws.amazon.com/de/blogs/machine-learning/evaluating-ai-agents-real-world-lessons-from-building-agentic-systems-at-amazon/) · [a conversational troubleshooting assistant for K8s workloads](https://aws.amazon.com/de/blogs/architecture/architecting-conversational-observability-for-cloud-applications/).
- [AWS MCP servers, put to work as a solutions architect](https://pub.towardsai.net/getting-started-with-aws-mcps-and-putting-them-to-work-as-a-solutions-architect-ebeaa8678b74?source=rss----98111c9905da---4).
- Earlier gen-AI plumbing: [serverless prompt chaining with Bedrock and Step Functions](https://github.com/aws-samples/amazon-bedrock-serverless-prompt-chaining/) · [few-shot prompting and fine-tuning in Bedrock](https://aws.amazon.com/de/blogs/architecture/architecting-for-agentic-ai-development-on-aws/).

## Well-Architected & the architecture tradition

- [the Well-Architected Framework as a map](https://wa.aws.amazon.com/wat.map.en.html) — "also usable for other cloud providers," per your save. There's even [a coloring book](https://jenlooper.gumroad.com/l/wa-color).
- [Let's Architect!](https://aws.amazon.com/blogs/machine-learning/improving-air-quality-with-generative-ai/) — the series you kept saving: [multi-tenancy](https://aws.amazon.com/blogs/architecture/lets-architect-multi-tenant-saas-architectures/) · [serverless solutions](https://aws.amazon.com/blogs/architecture/lets-architect-designing-serverless-solutions/) · [resiliency patterns and trade-offs](https://aws.amazon.com/blogs/architecture/understand-resiliency-patterns-and-trade-offs-to-architect-efficiently-in-the-cloud/) · [DevOps best practices](https://aws.amazon.com/blogs/architecture/lets-architect-devops-best-practices-on-aws/).
- [the AWS Fault Isolation Boundaries whitepaper](https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/abstract-and-introduction.html) — "don't let the boring title fool you."
- [The Architect Elevator — connecting IT and the boardroom](https://www.youtube.com/watch?v=nNbnXTl2VFQ) (Gregor Hohpe, re:Invent) and [what top-tier software architects do differently](https://www.youtube.com/watch?v=F8X9_Dp3ZUk&feature=youtu.be).
- [the decision guides — "which service do I actually need?"](https://docs.aws.amazon.com/decision-guides/latest/containers-on-aws-how-to-choose/choosing-aws-container-service.html) · [the Architecture Center as a hands-on gym](https://aws.amazon.com/architecture/).
- [20 questions asked in every AWS Solutions Architect interview](https://towardsaws.com/top-20-technical-questions-i-ask-in-all-aws-solutions-architect-interviews-b59c902df5c0) · [the solution-architect mindset](https://dev.to/aws-builders/how-to-become-a-solution-architect-2-mindset-150p).

## Serverless-first

- ["the only code you will have to write is business logic" — becoming a serverless-first engineer](https://link.medium.com/cH5PsFgaJpb) · [the serverless-first mindset as a delivery advantage](https://dev.to/serverlessedge/adrian-cockcroft-aws-on-the-project-to-product-podcast-3cij).
- [Yan Cui's serverless school](https://school.theburningmonk.com/) · [Serverless Picks of the Week](https://www.readysetcloud.io/newsletter/66/) — the two subscriptions.
- [the pragmatic serverless Python developer](https://www.youtube.com/watch?v=52W3Qyg242Y) and [refactoring to serverless](https://www.youtube.com/watch?v=RfeVmXNRqDc) (videos).
- [structuring a real-life serverless application](https://articles.merapar.com/serverless-project-structure-beyond-monorepo) — beyond the hello-world Lambda.
- [advanced integration patterns for loosely coupled systems](https://www.youtube.com/watch?v=FGKGdUiZKto) · [event-driven architecture on AWS](https://aws.amazon.com/blogs/industries/engineering-resilient-systems-bmw-groups-chaos-engineering-journey-and-insights/) · [GoDaddy's multi-region event-driven platform](https://aws.amazon.com/blogs/aws/how-godaddy-implemented-a-multi-region-event-driven-platform-at-scale/).
- [states-language.net](https://states-language.net/) — the Step Functions state-language spec, bookmarked like the standard it is.

## EKS & Kubernetes

- [EKS Blueprints](https://github.com/aws-ia/terraform-aws-eks-blueprints/tree/main/examples) — the production-ideas repo, plus [the walkthrough](https://itnext.io/efficient-kubernetes-cluster-deployment-accelerating-setup-with-eks-blueprints-68324b582ec9).
- [scaling an EKS cluster to 1,000 pods — lessons learned](https://devopslearning.medium.com/lesson-learned-while-scaling-kubernetes-cluster-to-1000-pods-in-aws-eks-d2d399152bc2) · [what a production EKS cluster actually looks like](https://jeewansooriyaarachchi.medium.com/what-does-kubernetes-eks-production-cluster-look-like-efb82d145c36).
- The comparison shelf: [EKS vs. AKS vs. GKE](https://medium.com/@bijit211987/eks-vs-aks-vs-gke-which-is-the-right-kubernetes-platform-for-you-62a5501cb66f) and [McKinsey deploys the same app to all three and measures](https://medium.com/digital-mckinsey/platform-as-code-reference-architectures-to-simplify-developer-platforms-f2fb48e0c874).
- [halving EKS costs in 15 minutes](https://aws.plainenglish.io/how-to-reduce-your-amazon-eks-costs-by-half-in-15-minutes-cast-ai-1172b794a388) — the FinOps quick win.

## Terraform on AWS

- [Clare Liguori: how Amazon does CI/CD](https://builder.aws.com/content/2gYsT6Vc7qaqEAmEH59RksvQRKd/genai-under-the-hood-part-6---temperature-is-not-creativity) — the essential read; branch management, deployments, and all.
- [best practices for Terraform state in CI/CD pipelines](https://aws.amazon.com/blogs/opensource/introducing-strands-agent-sops-natural-language-workflows-for-ai-agents/) · [Terraform state management, explained](https://build5nines.com/terraform-state-management-explained/).
- [Terragrunt for multi-environment management](https://medium.com/@chidubemchinwuba01/terragrunt-how-to-manage-multiple-environments-in-terraform-and-aws-cc0e83e8f732) · [terragrunt run-all in CI/CD](https://levelup.gitconnected.com/using-terragrunt-run-all-in-aws-ci-cd-df2877bad198).
- [how Slack uses Terraform](https://slack.engineering/how-we-use-terraform-at-slack/) — across AWS, DigitalOcean, NS1, and GCP.
- [scaling IaC pipelines with Terraform, GitHub Actions, and Proton](https://aws.amazon.com/blogs/containers/scaling-iac-and-ci-cd-pipelines-with-terraform-github-actions-and-aws-proton/).

## Resilience & chaos

- [how Amazon uses chaos engineering to handle 84K requests per second](https://builder.aws.com/content/2tm12rQPFomu2bKOP1rIWWtsAAx/opportunity-to-earn-free-aws-certification-vouchers).
- [BMW's chaos-engineering journey](https://aws.amazon.com/blogs/industries/engineering-resilient-systems-bmw-groups-chaos-engineering-journey-and-insights/) · [London Stock Exchange Group's chaos practice](https://aws.amazon.com/blogs/architecture/london-stock-exchange-group-uses-chaos-engineering-on-aws-to-improve-resilience/) · [chaos engineering in incident response](https://aws.amazon.com/blogs/machine-learning/improving-air-quality-with-generative-ai/).
- The counterweight: [DHH's cloud exit — $1M/year saved leaving AWS](https://world.hey.com/dhh/commit-to-competence-in-this-coming-year-feb7d7c5) · [a multi-cloud FinOps CLI claiming 60–75% cost cuts](https://github.com/nutcas3/the-engine).

## Learning & certs

- [Skill Builder's free training and cert prep](https://skillbuilder.aws/learn) · [the free-certification rounds](https://builder.aws.com/content/2tm12rQPFomu2bKOP1rIWWtsAAx/opportunity-to-earn-free-aws-certification-vouchers) · [CloudQuest — learn the fundamentals as a game](https://aws.amazon.com/training/digital/?trk=04f07ce8-5bab-40dc-b57b-0ddc76de7277&sc_channel=el).
- [Adrian Cantrill's courses](https://learn.cantrill.io/l/products?courseCategory=bundle) + [the paid-community mini-projects repo](https://github.com/acantril/learn-cantrill-io-labs/blob/master/get-paid-to-create-projects.md).
- [The Big IAM Challenge — an IAM CTF](https://bigiamchallenge.com/challenge/1) — learn the scariest service by attacking it.
- [the official workshop catalog](https://catalog.us-east-1.prod.workshops.aws/workshops/9586a55a-1f61-456c-ace9-b24f505d44a4/en-US) · [AWS re/Start — the free 12-week program](https://opportunitydesk.org/2026/03/05/aws-re-start-programme-2026/).

---

## All links on this topic
