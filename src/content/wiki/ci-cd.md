---
title: "CI-CD"
topic: "ci-cd"
draft: false
generated: "2026-07-07"
sources: "244 tagged links, curated from the 133 most recent (2023\u20132026)"
---

**244 saved links.** The corpus starts with the classics (Fowler, pipelines, Jenkins), gets deep into GitHub Actions and Azure DevOps practice, and ends where everything else in your vault ends: pipelines that build AI, and AI that runs pipelines.

**Related:** [DevOps](/wiki/devops/) · [GitOps](/wiki/gitops/) · [Infrastructure as Code](/wiki/infrastructure-as-code/) · [Git](/wiki/git/)

---

## Start here

- [Fowler's thoroughly revised Continuous Integration article](https://martinfowler.com/articles/reduce-friction-ai/encoding-team-standards.html) — the definition, from the source.
- [Clare Liguori: the CI/CD architecture Amazon actually uses](https://builder.aws.com/content/2gYsT6Vc7qaqEAmEH59RksvQRKd/genai-under-the-hood-part-6---temperature-is-not-creativity) — branch management, rollout waves, automated rollback.
- [what is CI/CD — the practical guide](https://codefresh.io/learn/ci-cd/) and [a gentle introduction to pipelines](https://semaphoreci.com/blog/cicd-pipeline).
- [the core continuous-deployment patterns](https://newsletter.techworld-with-milan.com/p/what-are-deployment-patterns) — canary, blue/green, and friends in one post.
- [15 CI/CD metrics worth actually tracking](https://spacelift.io/blog/ci-cd-metrics).

## GitHub Actions in practice

- [a guided introduction to GitHub Actions](https://github.com/padok-team/github-actions-tutorial) · [Awesome Actions](https://github.com/sdras/awesome-actions).
- Runners: [self-hosted runners, step by step](https://itnext.io/using-a-self-hosted-runner-with-github-actions-e8a0415c7530) · [self-hosting runners on cloud infra](https://github.com/mchmarny/grunner).
- Security: [workflow-authoring security best practices](https://github.blog/security/application-security/security-best-practices-for-authors-of-github-actions/) · [securing Actions with Azure workload identity federation](https://www.youtube.com/watch?WT.mc_id=modinfra-83467-apedward&v=0nNaU1PB4vc&feature=youtu.be) (video) · [adding an SBOM to your containers with Actions](https://actuated.com/blog/sbom-in-github-actions).
- Governance: [required workflows — confidence in the Friday deploy](https://github.blog/enterprise-software/ci-cd/enforcing-code-reliability-by-requiring-workflows-with-github-repository-rules/).
- Patterns: [Willison's minimal pattern: custom site built by Actions, deployed to Pages](https://til.simonwillison.net/github-actions/github-pages) — the exact pattern behind this site's deploys · [modular, centralized custom Actions](https://kymidd.medium.com/lets-do-devops-writing-modular-centralized-custom-terraform-github-actions-3f5558ff9667) · [David Fowler's GitHub↔Azure CI/CD glue utility](https://github.com/davidfowl/ImageFun).
- Testing in the pipeline: [Playwright on every commit](https://www.youtube.com/watch?v=yU2wtTsPF2A) (video) · [validating Terraform in Actions](https://www.youtube.com/watch?WT.mc_id=modinfra-83467-apedward&v=2Zwrtn-QPk0&feature=youtu.be) (video).

## Pipeline security

- [NSA/CISA: Defending CI/CD Environments](https://media.defense.gov/2023/Jun/28/2003249466/-1/-1/0/CSI_DEFENDING_CI_CD_ENVIRONMENTS.PDF) — the authoritative hardening sheet.
- [CI/CD security: risks and best practices](https://spacelift.io/blog/ci-cd-security) · [implementing DevSecOps in a CI/CD pipeline, step by step](https://www.infracloud.io/blogs/implement-devsecops-secure-ci-cd-pipeline/).
- [smarter pipelines with conditional rules](https://about.gitlab.com/blog/efficient-devsecops-workflows-with-rules-for-conditional-pipelines/?utm_campaign=blog&utm_source=twitter&utm_medium=social&utm_content=1688159151).

## Observability for pipelines

Pipelines are production systems too — the thread that connects this page to [SRE & Observability](/wiki/sre-and-observability/).

- [CI/CD observability: a rich new opportunity for OpenTelemetry](https://thenewstack.io/ci-cd-observability-a-rich-new-opportunity-for-opentelemetry/) and [Grafana's "what the heck is CI/CD observability?"](https://grafana.com/blog/the-loser-tree-data-structure-how-to-optimize-merges-and-make-your-programs-run-faster/?camp=blog&cnt=ever_heard_of_a_loser_tre&mdm=social&src=tw).
- [monitoring the right pipeline data and visualizing it](https://www.infoq.com/articles/large-language-models-prompt-injection-stealing/).
- [improving CI/CD with a focus on developer velocity](https://www.samsara.com/blog/improving-ci-cd-with-a-focus-on-developer-velocity).
- [the uncomfortable study: most teams still aren't doing CI/CD](https://cote.io/2024/04/24/you-should-automate.html).

## The AI-native pipeline

- [what an AI-native CI/CD experience looks like — goal-based pipelines from developer intent](https://semaphore.io/building-an-ai-native-ci-cd-experience-with-sem-ai).
- [enforcing quality checks on AI-generated code](https://semaphore.io/how-do-i-enforce-quality-checks-on-ai-generated-code-in-ci-cd) — "you don't need a special AI pipeline."
- [Gemini CLI GitHub Actions — an AI teammate inside the pipeline](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tooling-updates/) · [Willison on the new term for mixing AI into automations](https://simonwillison.net/2025/Jun/27/continuous-ai/).
- [Microsoft Foundry adds CI/CD for AI agents — what actually changes](https://dev.to/om_shree_0709/microsoft-foundry-just-added-cicd-for-ai-agents-heres-what-that-actually-changes-2k5p).
- Pipelines that ship models: [GitHub Actions for agent evaluations in LLMOps](https://medium.com/@AI-on-Databricks/incorporate-agent-evaluations-into-your-llmops-with-github-actions-0cbd0b3cb03f) · [LLMOps with Azure AI, PromptFlow, Bicep, and Actions](https://charotamine.medium.com/llmops-with-azure-ai-promptflow-bicep-github-actions-adafc131f83e) · [model retraining automation via Actions](https://towardsdatascience.com/simple-model-retraining-automation-via-github-actions-b0f61d5c869c) · [a continuous-delivery architecture for RAG apps](https://docs.cloud.google.com/architecture/partners/harness-cicd-pipeline-for-rag-app).

## Azure DevOps pipelines

- [using ADO pipelines as a serverless compute engine](https://build5nines.com/azure-devops-build-pipelines-serverless-compute-engine/) — the creative pattern.
- [ACR → Azure Container Apps via ADO pipeline](https://thomasthornton.cloud/deploy-to-azure-container-app-from-azure-container-registry-using-a-ci-cd-azure-devops-pipeline-and-azure-cli%EF%BF%BC/) · [APIM with developer portal, CI/CD'd through ADO](https://dev.to/markusmeyer13/how-to-create-an-azure-api-management-service-with-developer-portal-with-cicd-using-azure-devops-3360).
- [Enterprise Azure Policy as Code (EPAC) in CI/CD](https://azure.github.io/enterprise-azure-policy-as-code/).
- [Symphony — a multi-IaC CI/CD orchestrator with baked-in best practices](https://github.com/microsoft/dcp).

---

## All links on this topic
