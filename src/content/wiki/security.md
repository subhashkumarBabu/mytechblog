---
title: "Security"
topic: "security"
draft: false
generated: "2026-07-07"
sources: "324 tagged links, curated from the 200 most recent (2023\u20132026)"
---

**324 saved links**, 2017–2026 (peak: 2023). The corpus tells a two-act story: act one is classic DevSecOps and cert-collecting (OWASP cheat sheets, Security+, zero trust, the great 2023 hashtag flood); act two, starting mid-2024, is almost entirely **AI security** — securing agents, and using agents to do security. Both directions of that arrow run straight through your current work.

**Related:** [AI Agents](/wiki/ai-agents/) · [LLMs](/wiki/llms/) · [DevOps](/wiki/devops/) · [Azure](/wiki/azure/) · [Kubernetes](/wiki/kubernetes/)

---

## Agent security — the new center of gravity

- [OWASP Top 10 for Agents](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) — the reference; your save warns "don't fall into the same trap."
- [the agentic AI security primer on martinfowler.com](https://martinfowler.com/articles/harness-engineering.html) — the best conceptual overview of the problem.
- [Agent Engineering 101: software, systems, and security in practice](https://www.ashpreetbedi.com/agent-engineering).
- [Agent Governance Toolkit — security middleware for autonomous agents](https://github.com/microsoft/agent-governance-toolkit) · [the security architecture of GitHub Agentic Workflows](https://github.blog/ai-and-ml/generative-ai/under-the-hood-security-architecture-of-github-agentic-workflows/).
- [a 7-layer multi-agent architecture with observability and security built in](https://github.com/FareedKhan-dev/production-grade-agentic-system/) · ["security before agents" — the architectural argument](https://michaellevan.substack.com/p/a-week-in-ai-issue-1).
- [10 tips to protect your agents](https://medium.com/google-cloud/getting-started-with-antigravity-2-0-updated-8a953f079f97) (Google Cloud) · [the Agent Factory podcast episode on agent security](https://www.youtube.com/watch?v=nxezufaezHw).
- Scanners and skills: [Agentic Radar — maps agent workflows and their vulnerabilities](https://github.com/splx-ai/agentic-radar) · [AI security skills for agent-assisted testing across appsec, cloud, and LLMs](https://github.com/hardw00t/ai-security-arsenal).
- ["it's *your* agent — don't put it in a group chat"](https://docs.openclaw.ai/gateway/security) — the primer with the memorable warning.

## LLM & MCP security

- [OWASP Top 10 for LLM applications](https://genai.owasp.org/llm-top-10/) · [how the list changed year over year](https://systemweakness.com/comparative-analysis-of-owasp-top-10-for-llm-applications-2023-vs-2025-2291da94b3dc) · [remediating each item with Promptfoo](https://www.promptfoo.dev/docs/red-team/owasp-llm-top-10/).
- [MCP security: prompt injection, tool poisoning, token theft](https://github.com/microsoft/aspire/wiki/13.3-Change-log) — the Microsoft guide for anyone wiring agents to tools.
- [indirect prompt injection could upend chatbots](https://techxplore.com/news/2023-03-indirect-prompt-upend-chatbots.html) and [the original indirect-prompt-injection research repo](https://github.com/greshake/llm-security).
- [Anthropic's Sleeper Agents paper](https://arxiv.org/abs/2401.05566) — "this is not a hypothetical attack vector."
- [open-source LLM security scanners, catalogued](https://github.com/psiinon/open-source-llm-scanners) · [the OWASP AI Exchange](https://github.com/OWASP/www-project-ai-security-and-privacy-guide?tab=readme-ov-file) + [owaspai.org](https://owaspai.org/).
- [managing AI security risks — the CISO workshop](https://www.databricks.com/blog/how-agentic-software-development-will-change-databases).

## DevSecOps — the practice

- [the Ultimate DevSecOps library](https://github.com/sottlmarek/DevSecOps?utm_content=buffer00ed2&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer) — the reference repo.
- [the DoD DevSecOps Fundamentals Guidebook](https://dodcio.defense.gov/Portals/0/Documents/Library/DevSecOps%20Fundamentals%20Guidebook-DevSecOps%20Tools%20and%20Activities_DoD-CIO_20211019.pdf) and [NSA/CISA: Defending CI/CD Environments](https://media.defense.gov/2023/Jun/28/2003249466/-1/-1/0/CSI_DEFENDING_CI_CD_ENVIRONMENTS.PDF) — surprisingly good government issue.
- [DevSecOps University — books, tutorials, tools](https://www.practical-devsecops.com/devsecops-university/).
- [the vulnerability-management lifecycle](https://blog.gitguardian.com/vulnerability-management-lifecycle-in-devsecops/) · [GitHub Actions workflow security best practices](https://github.blog/security/application-security/security-best-practices-for-authors-of-github-actions/) · [CI/CD security risks and best practices](https://spacelift.io/blog/ci-cd-security).
- ["DevSecOps Worst Practices"](https://wehackpurple.com/devsecops-worst-practices-the-series/) — learn from the anti-patterns, laughing.
- [intro to static analysis and CodeQL](https://github.blog/developer-skills/career-growth/hard-and-soft-skills-for-developers-coding-in-the-age-of-ai/) · [DefectDojo for vulnerability management](https://github.com/DefectDojo/django-DefectDojo).

## Cloud security & zero trust

- Zero trust: [Microsoft's free Zero Trust workshop](https://microsoft.github.io/zerotrustassessment/) ([video walkthrough](https://www.youtube.com/watch?v=xVWr1ml47_g&feature=youtu.be)) · [NIST's zero-trust model for cloud-native apps](https://www.nist.gov/news-events/news/2023/04/zero-trust-architecture-model-access-control-cloud-native-applications) · [applying zero trust to Azure IaaS workloads](https://dev.to/miketysonofthecloud/applying-zero-trust-principles-to-workloads-in-azure-iaas-153h).
- [the OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/cheatsheets/Secure_Cloud_Architecture_Cheat_Sheet.html) — the perennial reference, here via cloud architecture security.
- Azure: [the Azure Network Security workshop labs](https://github.com/Azure/Copilot-Studio-and-Azure/tree/main/accelerators/sharepoint-connector) · [a cloud-administration tiering model for Entra](https://github.com/workoho/Entra-Tiering-Security-Model?tab=readme-ov-file&utm_content=buffer3a7bc&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer) · [the AZ-500 study guide](https://www.thomasmaurer.ch/2020/05/az-500-study-guide-microsoft-azure-security-technologies-2021/) · [identity as a core skill](https://paulsanders.co.uk/brain-dump-identity-is-a-core-skill/).
- Kubernetes & containers: [OWASP Kubernetes Top 10](https://www.sysdig.com/blog/top-owasp-kubernetes) · [the container security checklist](https://github.com/krol3/container-security-checklist) · [Simulator — break a real cluster, legally](https://github.com/controlplaneio/simulator).
- [awesome cloud security labs — CTFs and guided vulnerability labs](https://github.com/iknowjason/Awesome-CloudSec-Labs) · [the AWS KMS threat model](https://airwalkreply.com/aws-kms-threat-model) · [threat-modeling libraries](https://github.com/michenriksen/drawio-threatmodeling).
- ["firewall rules protect resources, not perimeters"](https://cloud.google.com/blog/products/identity-security/how-to-easily-migrate-your-on-premises-firewall-rules-to-google-cloud/) — the one-line mental-model shift.

## Identity & OAuth

- [the illustrated guide to OAuth and OpenID Connect](https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc) — still the best first read.
- [OAuth explained (for the Matt Levine readers)](https://leaflet.pub/p/did:plc:3vdrgzr2zybocs45yfhcr6ur/3mfd2oxx5v22b) · [Flow Analyzer for testing OAuth 2.0 flows](https://meterpreter.org/flow-analyzer-help-in-testing-and-analyzing-oauth-2-0-flows/).

## AI *for* security operations

The reverse direction: agents as defenders — the future of your old on-call life.

- [Google: accelerating incident response with generative AI](https://security.googleblog.com/2024/04/accelerating-incident-response-using.html) · [AI and incident response](https://blog.barracuda.com/2024/07/01/5-ways-ai-is-being-used-to-improve-security--automated-and-augme).
- Security Copilot: [what it is and how it works](https://www.youtube.com/watch?v=0lg_derTkaM&feature=youtu.be) (video) · [dynamic prompt suggestions in investigations](https://techcommunity.microsoft.com/blog/securitycopilotblog/smarter-prompts-for-smarter-investigations-dynamic-prompt-suggestions-in-securit/4432135) · [the Security Copilot book repo — prompts, promptbooks, plugins](https://github.com/PacktPublishing/Microsoft-Copilot-for-Security).
- [Azure OpenAI KQL query packs](https://github.com/rod-trent/OpenAISecurity/tree/main/Security/Sentinel/KQL/QueryPacks) — Rod Trent's Sentinel toolkit.
- [Reaper — open-source AppSec testing built for AI](https://www.youtube.com/watch?si=CwRMb9pPPI5mNV1k&v=TUHoVDDn3cU&feature=youtu.be) · [agentic workflow automation for AppSec and fuzzing](https://github.com/FuzzingLabs/secpipe) · [GPT-4o vision for threat-intel time series](https://blog.securitybreak.io/time-series-analysis-by-leveraging-gpt-4o-vision-for-threat-intel-d0b3225a40c9).

## Certs & foundations

- [Microsoft's free Security-101 curriculum](https://microsoft.github.io/Security-101/) · [Microsoft Security Academy](https://microsoft.github.io/PartnerResources/skilling/microsoft-security-academy?s=09) · [the security course foundation list](https://github.com/TalEliyahu/Awesome-AI-Security).
- Security+: [the SY0-701 guide, cheat sheets, and objectives](https://github.com/MaheshShukla1/CompTIA-Security-Plus-SY0-701-Notes-CheatSheet-Exam-Prep/wiki/CompTia-Security--cheat-sheet-guide) · [free SY0-701 study material with a 90-day plan](https://ablative.gumroad.com/l/ajkck).
- [CompTIA SecAI+ — the free-while-in-beta AI security cert](https://lecbyo.files.cmp.optimizely.com/download/4ac9eb6a529711f0b35e3e002873e549) — the cert that matches where the field went.
- [Project Security — free hands-on homelab training](https://projectsecurity.teachable.com/p/build-a-cybersecurity-homelab-a-practical-guide-to-offense-defense-enterprise-101) · [the SANS free cyber academy](https://www.sans.org/cyber-academy?utm_content=buffer4d2f9&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer) · [Stanford's web security course, labs and all](https://web.stanford.edu/class/cs253/).
- [security interview questions across AppSec, pentest, cloud, and DevSecOps](https://github.com/jassics/security-interview-questions).

---

## All links on this topic
