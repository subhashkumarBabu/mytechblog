---
title: "Infrastructure as Code"
topic: "iac"
draft: false
generated: "2026-07-07"
sources: "625 tagged links, curated from the 220 most recent (2023\u20132026)"
---

**625 saved links** — infrastructure written down instead of clicked into existence. This is the tooling of your 2014–2023 chapter (Terraform and Bicep, heavily Azure-flavoured), and the corpus now documents the next shift: agents writing and operating the infrastructure code themselves.

**Related:** [DevOps](/wiki/devops/) · [Azure](/wiki/azure/) · [GitOps](/wiki/gitops/) · [Platform Engineering](/wiki/platform-engineering/)

---

## Start here

- [Gruntwork's Terraform crash course](https://www.gruntwork.io/blog/a-crash-course-on-terraform) — learn by doing, in minutes.
- [terraform-best-practices.com](https://www.terraform-best-practices.com/) and [Awesome Terraform — the largest curated collection](https://github.com/shuaibiyy/awesome-tf).
- [Nathan Peck: rethinking infrastructure as code from scratch](https://nathanpeck.com/rethinking-infrastructure-as-code-from-scratch/?utm_source=devopsbulletin&utm_id=newsletter) — the best zoom-out.
- ["Infrastructure as Code is dead — long live Infrastructure *from* Code"](https://thenewstack.io/infrastructure-as-code-is-dead-long-live-infrastructure-from-code/) and [Hohpe's IxC: as code, from code, with code](https://architectelevator.com/cloud/iac-ifc-trends/) — where the abstraction is heading.
- [the IaC landscape overview](https://itnext.io/infrastructure-as-code-landscape-overview-2024-a066124e5989).

## Terraform craft

- Structure: [the environment + application design pattern](https://apparently.me.uk/terraform-environment-application-pattern/overview.html) · [components of a modern Terraform stack](https://itnext.io/components-of-a-modern-terraform-stack-19f8797e8c4c) · [managing multiple environments with environment-specific directories](https://medium.com/@b0ld8/terraform-manage-multiple-environments-63939f41c454) · [Terragrunt for multi-environment management](https://medium.com/@chidubemchinwuba01/terragrunt-how-to-manage-multiple-environments-in-terraform-and-aws-cc0e83e8f732).
- State: [mastering state management and the state tree](https://medium.com/devoops-discourse/terraform-patterns-observed-part-4-state-management-dccec970f554) · [best practices for state files in CI/CD](https://aws.amazon.com/blogs/opensource/introducing-strands-agent-sops-natural-language-workflows-for-ai-agents/) · [handling .terraform.lock.hcl without pain](https://grem1.in/post/terraform-lockfiles-maxymvlasov/).
- Modules: [module best practices](https://medium.com/@vinoji2005/day-22-terraform-modules-best-practices-30eb4cee2d30) · [a practical module guide](https://dev.to/jdxlabs/terraform-modules-a-practical-guide-5l9) · [auto-releasing modules in a mono-repo](https://tjtharrison.medium.com/automatic-releasing-of-terraform-modules-mono-repo-e9c913af25e6).
- Importing what already exists: [Terraform import](https://build5nines.com/terraform-import-existing-infrastructure/) · [import blocks for Azure resources](https://thomasthornton.cloud/terraform-import-blocks-to-import-azure-resources-into-terraform/).
- At scale on Azure: [recommended configs for Terraform + GitHub Actions at scale](https://thomasthornton.cloud/configurations-i-recommend-you-setup-to-deploy-your-terraform-into-azure-at-scale-using-github-actions/) · [multi-environment projects without losing your mind](https://blog.arkahna.io/building-multi-environment-terraform-projects-in-azure?utm_content=294633577&utm_medium=social&utm_source=twitter&hss_channel=tw-1376771719818436613) · [Azure Verified Modules with Terraform](https://dev.to/pwd9000/github-copilot-cli-a-devops-engineers-practical-guide-to-ai-powered-terminal-automation-1jh0) · [not blocking Terraform with Azure resource locks](https://www.danielstechblog.io/how-to-not-block-terraform-with-azure-resource-locks/) · [the full Azure course](https://www.youtube.com/watch?v=HdMB2YCtVr4&feature=youtu.be) (video).

## Testing & cost control

The two disciplines that separate IaC from IaC-that-you-trust.

- [Terraform 1.6's native testing framework](https://www.hashicorp.com/blog/terraform-1-6-adds-a-test-framework-for-enhanced-code-validation) ([InfoQ's take](https://www.infoq.com/news/2026/04/anthropic-managed-agents/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=architecture-design)) · [the walkthrough](https://www.youtube.com/watch?v=N73chhccmo8) (video) · [meaningful tests with Terratest](https://medium.com/@danielaaronw/unlocking-the-power-of-terratest-part-1-4ea71f2f27c2).
- [scanning the Terraform *plan* with Trivy](http://trivy.dev/v0.41/docs/scanner/misconfiguration/custom/examples/#terraform-plan) — catch misconfigurations before apply; also [IaC vulnerability scanning](https://spacelift.io/blog/cloud-computing-statistics).
- [Infracost — cloud cost breakdowns in every pull request](https://github.com/infracost/infracost) with [the Azure DevOps integration](https://medium.com/microsoftazure/evaluate-rag-qna-apps-with-azure-ml-promptflow-9931356f13ea?source=rss----8bec1183ada9---4).
- [Atlantis — Terraform pull-request automation](https://github.com/runatlantis/atlantis).

## The Bicep corner

Your Azure-native second language — one of the deepest personal clusters in the vault.

- [John Lokerse's Azure Bicep cheat sheet](https://github.com/johnlokerse/azure-bicep-cheat-sheet?utm_content=buffer740c2&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer) — the quick reference; plus [7 practical Bicep tips](https://johnlokerse.dev/2023/09/11/azure-bicep-tips-tricks/).
- Language depth: [user-defined types changed Bicep best practice](https://andrewilson.co.uk/post/2024/02/bicep-user-defined-types/) · [reusability with user-defined data types](https://johnlokerse.dev/2024/01/08/reusability-with-export-and-import-in-azure-bicep/) · [what actually happens when a Bicep template deploys](https://johnlokerse.dev/2024/07/15/from-azure-bicep-template-to-azure-resource/).
- Quality gates: [the Bicep lint command, scripted into the pipeline](https://johnlokerse.dev/2024/02/05/lint-azure-bicep-templates-in-azure-devops/) · [testing and approving Bicep with GitHub Actions](https://www.youtube.com/watch?si=Fma2y_W5XIeZuJgp&v=xrAMuXK6xJ8&feature=youtu.be) (video).
- Deployment stacks: [automating Bicep with Deployment Stacks](https://luke.geek.nz/azure/mcp-vscode-microsoft-learn/) · [deploying a landing zone with stacks + Bicep](https://dev.to/omiossec/azure-deployment-stacks-deploy-and-manage-a-landing-zone-with-bicep-120b) · [Bicep For Real on stacks](https://www.youtube.com/watch?v=6Cmz5ESdkCM&feature=youtu.be) (video, from [bicepforreal.com](https://bicepforreal.com/)).
- Ecosystem: [Azure/ResourceModules — mature curated Bicep modules with a CI platform](https://github.com/azure/resourcemodules) · [the awesome-Bicep community repo](https://github.com/ElYusubov/AWESOME-Azure-Bicep) · [Fabric 101: deploy capacity with ARM, Bicep, and Terraform](https://github.com/murggu/fabric-capacity-iac).
- The frontier: [Agent Skills for automating repeatable Bicep workflows with Copilot](https://johnlokerse.dev/2026/02/02/agent-skills-for-azure-bicep-with-github-copilot-from-manual-work-to-automated-workflows/) — your two worlds meeting.

## Beyond Terraform

- [Pulumi vs. Terraform, compared properly](https://spacelift.io/blog/pulumi-vs-terraform) · [what Pulumi ESC actually is](https://samcogan.com/wth-is-pulumi-esc/) · ["the real AI challenge is cloud, not code"](https://www.pulumi.com/blog/the-guide-platform-engineering-idp-steps-best-practices/?utm_campaign=Platform-Engineering-Theme&utm_content=315383891&utm_medium=social&utm_source=twitter&hss_channel=tw-837770064870817792).
- [Crossplane 101 for Terraform people](https://isar-nasimov.medium.com/crossplane-101-a-terraform-enthusiasts-first-encounter-part-1-4e1637221639) and [migrating Terraform state to Crossplane](https://medium.com/@arniesaha/reusing-existing-terraform-state-while-migrating-to-crossplane-ea50a492bb61).
- [Awesome Ansible](https://github.com/ansible-community/awesome-ansible) · [using Terraform and Ansible together](https://spacelift.io/blog/ci-cd-metrics).
- [Winglang — a potential game-changer?](https://dev.to/sarony11/rethinking-infrastructure-as-code-the-second-wave-of-devops-and-iac-by-winglang-dnj?utm_content=169268417&utm_medium=social&utm_source=twitter&hss_channel=tw-1555735789870678016) · [Radius: cloud-agnostic app definitions in Bicep, deployable to AWS and Azure](https://docs.radapp.io/tutorials/recipes/).
- [when to use Terraform — and when not to](https://medium.com/@arton.demaku/infrastructure-as-code-when-to-use-terraform-and-when-not-to-96f8084e9b92).

## IaC meets AI

- [GenAI for generating, interpreting, and debugging IaC](https://thenewstack.io/generative-ai-tools-for-infrastructure-as-code/) and [evaluating LLM-generated IaC](https://towardsdatascience.com/mastering-the-future-evaluating-llm-generated-data-architectures-leveraging-iac-technologies-dee75302a355) — trust, but verify.
- [the Terraform MCP server (announced as the Azure provider crossed 1B downloads)](https://www.hashicorp.com/en/partners/cloud/google-cloud).
- [Pulumi Neo — an AI agent for infra engineers, not devs](https://www.pulumi.com/blog/pulumi-neo/).
- [CAIRA: a composable IaC baseline for secure, observable AI infrastructure](https://github.com/microsoft/agentrc) · [running Claude on Microsoft Foundry with your existing IaC](https://github.com/Azure-Samples/claude#readme).
- [GitHub Copilot for Terraform, hands-on](https://link.medium.com/GsSlfC6pbMb) · [AI-assisted IaC for beginners](https://www.freecodecamp.org/news/how-to-configure-visual-studio-code-for-python-development/).

---

## All links on this topic
