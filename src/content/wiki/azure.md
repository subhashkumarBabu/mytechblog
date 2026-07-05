---
title: "Azure"
topic: "azure"
draft: false
generated: "2026-07-05"
sources: "2436 tagged links, curated from the 220 most recent (2025\u20132026)"
---

Your single biggest topic: **2,436 saved links** spanning 2016–2026 (peak: 2023). The corpus has two distinct eras — classic infrastructure (compute, networking, AZ-104 material) through 2024, and then a decisive pivot: nearly every 2025–2026 Azure save is **Azure × AI** — Foundry, the Azure MCP ecosystem, agent services, Cosmos DB as an AI backend. Your archive documents the exact bridge you're walking: from Azure administrator to AI engineer *on* Azure.

**Related:** [AI Agents](/wiki/ai-agents/) · [LLMs](/wiki/llms/) · [DevOps](/wiki/devops/) · [Kubernetes](/wiki/kubernetes/) · [Infrastructure as Code](/wiki/infrastructure-as-code/)

---

## Start here

- [Design AI workloads with the Azure Well-Architected Framework](https://www.thomasmaurer.ch/2025/07/design-ai-workloads-with-the-azure-well-architected-framework/) — Thomas Maurer; the frame everything else fits in.
- [Azure Skills: Microsoft's capability layer for coding agents](https://github.com/microsoft/azure-skills/) — 25 skills across deploy, diagnostics, cost, RBAC, AKS.
- [Azure AI Foundry anti-patterns](https://medium.com/@badrkacimi/azure-ai-foundry-anti-patterns-what-not-to-do-in-real-projects-7d0896cb0977) — learn from others' mistakes first.
- [Azure Agentic Engineering: code-to-cloud best practices](https://github.com/codetocloudorg/azure-agentic-engineering).
- [Azure AI app templates](https://azure.github.io/ai-app-templates/) + [Awesome-azd](https://azure.github.io/awesome-azd/) — the fastest path from idea to deployed.

## Azure AI Foundry

The dominant cluster in your recent saves — Microsoft's AI platform layer.

- [Foundry core concepts: hubs vs. projects](https://blog.gopenai.com/understanding-azure-ai-foundry-hubs-vs-projects-and-core-concepts-031eee593676) — start here.
- [Build your first agent](https://microsoft.github.io/build-your-first-agent-with-azure-ai-agent-service-workshop/) · [deploy your first Agent Service app](https://techcommunity.microsoft.com/blog/azure-ai-services-blog/deploy-your-first-azure-ai-agent-service-on-azure-app-service/4396173) · [Agent Service: what it is and how to build with it](https://blog.cubed.run/azure-ai-agent-service-what-it-is-and-how-to-build-your-own-ai-agent-9cc613b39c62).
- [Deep Research in Foundry Agent Service](https://azure.microsoft.com/en-us/blog/introducing-deep-research-in-azure-ai-foundry-agent-service/) and [building your own Deep Research agent](https://www.hubsite365.com/en-ww/pro-office-365/?id=24f9a1c9-4d5b-f011-bec2-6045bdf57e1e&topic=9f678e9a-8cd4-ec11-a7b5-6045bd92fe52&theater=true).
- [Migrating Azure OpenAI On Your Data to Foundry IQ](https://microsoft-foundry.github.io/forgebook/notebook/migrate-oyd-to-foundry-iq/) — the forgebook.
- [Running Claude on Foundry in your own tenant, with IaC](https://github.com/Azure-Samples/claude#readme).
- [Rolling Foundry out across an organization](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/planning) — the platform-admin view.
- [Enterprise AI gateway: Azure API Management + Foundry](https://medium.com/@17nagh/building-an-enterprise-ai-gateway-with-azure-api-management-and-azure-ai-foundry-504e1d5e6e97) and [Foundry agent harness with API-gateway tool governance](https://levelup.gitconnected.com/designing-a-foundry-agent-harness-a-tool-governance-architecture-based-on-azure-api-gateway-ac86eb23acbd).
- [The 4 agentic AI architecture patterns on Azure](https://medium.com/@1522aastha/the-4-agentic-ai-architecture-patterns-every-ai-engineer-should-know-on-azure-e0b714491c93).
- [Entra agent identity with Foundry](https://www.youtube.com/watch?v=JR3tlMUMfIs&t=9s) — identity for agents, very your-lane.

## The Azure MCP ecosystem

Azure's answer to "how do agents touch cloud resources" — you've tracked every piece.

- [Azure MCP Server goes stable](https://msft.it/l/6015tnGaz) — natural-language commands for Azure, VS Code integration.
- [The Azure MCP Server explained](https://cloudtips.nl/the-azure-mcp-server-5f45002e0cdf) and [the cloud-architect design tool inside it](https://github.com/microsoft/apm).
- Service-specific servers you saved: [azure-cli-mcp](https://github.com/jdubois/azure-cli-mcp) ([demo video](https://www.youtube.com/watch?v=NZxTr32A9lY)) · [Azure DevOps MCP](https://github.com/microsoft/azure-devops-mcp) ([why it matters](https://dev.to/mehul_budasana/azure-devops-mcp-server-what-it-is-and-why-it-matters-42p1)) · [KQL/Data Explorer MCP](https://github.com/4R9UN/mcp-kql-server) · [Fabric Ontology MCP](https://github.com/tmdaidevs/ontology-mcp-server).
- [Remote MCP servers on Azure Functions](https://github.com/Azure-Samples/remote-mcp-functions) · [implementation walkthrough with Copilot integration](https://muafzal.medium.com/implementing-mcp-remote-servers-with-azure-function-app-and-github-copilot-integration-96ffb674de1d) · [FastMCP + Entra ID with pre-authorized VS Code clients](https://blog.pamelafox.org/2026/04/building-mcp-servers-with-entra-id-and.html).
- [Building an MCP server for Microsoft Learn](https://techcommunity.microsoft.com/blog/azuredevcommunityblog/building-an-mcp-server-for-microsoft-learn/4423446) and [the beginner's MCP guide](https://techcommunity.microsoft.com/blog/azuredevcommunityblog/lets-learn---mcp-events-a-beginners-guide-to-the-model-context-protocol/4429023).
- [AI-Gateway](https://github.com/Azure-Samples/AI-Gateway) + [its workshop](https://azure-samples.github.io/AI-Gateway/) — APIM patterns for LLM traffic.

## Serverless & integration: Functions, Logic Apps

- [Azure Functions ships serverless agents runtime](https://www.infoq.com/news/2026/06/azure-functions-serverless-agent/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Cloud) (Build 2026).
- Logic Apps' agent era: [Agent Loop for enterprise workflows](https://www.infoq.com/news/2026/03/architect-certification-program/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=architecture-design) · [Logic Apps as MCP servers](https://www.infoq.com/news/2026/03/qcon-london-foxwell-dev-teams/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Devops) · [sandboxed code interpreters in agent workflows](https://www.infoq.com/news/2026/05/azure-logic-apps-agents/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Cloud) · [the Agent-in-a-Day labs](https://azure.github.io/logicapps-labs/docs/category/agent-in-a-day/) · [automating multi-step business processes](https://techcommunity.microsoft.com/blog/azure-ai-services-blog/automate-a-multi-step-business-process-using-turnkey-mcp-logic-app-integration-i/4430159).
- [Roslyn analyzer for Durable Functions](https://github.com/microsoft/waza) — the small quality-of-life save.
- [Replacing SendGrid with Azure Communication Services](https://www.blueboxes.co.uk/replacing-sendgrid-free-tier-with-azure-communication-services-for-emails-via-smtp).

## Cosmos DB as the AI database

A surprisingly deep sub-corpus — Cosmos DB is your most-saved data service.

- [The Cosmos DB Agent Kit: 45+ best-practice rules for coding agents](https://github.com/AzureCosmosDB/cosmosdb-agent-kit).
- [AI agents and solutions with Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/ai-agents?s=09) — the official pattern doc.
- [Banking multi-agent workshop](https://github.com/AzureCosmosDB/banking-multi-agent-workshop) (C#/Python + Cosmos + Azure OpenAI) and [the multi-agent AI sample](https://github.com/AzureCosmosDB/multi-agent-swarm).
- [Cosmos DB MCP server samples](https://github.com/AzureCosmosDB/azure-cosmos-mcp-server-samples) — manage database resources in natural language.
- [Plain-English querying with Cosmos DB](https://medium.com/@sainitesh/natural-language-queries-for-azure-cosmos-db-with-mcp-semantic-kernel-azure-openai-4ae89607aee8) · [troubleshooting Cosmos DB with diagnostic logs](https://savranweb.com/2026/05/27/troubleshooting-cosmos-db-with-diagnostic-logs/).

## Microsoft Fabric

- [Fabric interactive exercises](https://microsoftlearning.github.io/mslearn-fabric/) (Microsoft Learn hands-on).
- [Microsoft Fabric Skills repo](https://github.com/microsoft/skills-for-fabric).
- [Fabric Data Agent over structured and unstructured data](https://rossmcneely.com/2025/11/25/fabric-data-agent-structured-and-unstructured-data/) and [connecting Fabric and Foundry: agents that reason over enterprise data](https://medium.com/@badrvkacimi/connecting-microsoft-fabric-and-foundry-building-ai-agents-that-reason-over-enterprise-data-53dfe4702088).
- [Integrating Foundry with Fabric](https://jehayesms.github.io/jean-hayes-ai-analytics/azure%20ai/microsoft%20fabric/2025/10/21/integrating-azure-ai-with-fabric.html) · [designing analytics platforms on Fabric using agents](https://github.com/patrikborosch/AnalyticsPlatformAgents).

## AKS & operations

- [AKS gets an AI sidekick: the agentic CLI deep dive](https://itnext.io/aks-gets-an-ai-sidekick-a-deep-dive-into-the-agentic-cli-b4a9970a7ddd?source=rss----5b301f10ddcd---4).
- [Azure SRE Agent: agentic operations at enterprise scale](https://www.youtube.com/watch?v=06j-d0gsREw) — the future of your old job.
- [Connecting the Azure SRE agent to Azure MCP](https://www.isaacl.dev/gz8).
- [Microservices on AKS with Azure DevOps + GitOps](https://github.com/praduman8435/ZeroToHero-Azure-GitOps).
- [Azure Quick Review in the Azure Compliance skill](https://github.com/microsoft/azure-skills/tree/main/.github%2Fplugins%2Fazure-skills%2Fskills%2Fazure-compliance) — automated best-practice scanning.
- [Automating Azure cost calculations with Copilot CLI custom agents](https://cloudtips.nl/automating-azure-cost-calculations-with-github-copilot-cli-custom-agents-%EF%B8%8F-168eba966a54) — FinOps meets agents.
- [Resilience testing with Chaos Studio](https://techcommunity.microsoft.com/blog/azuretoolsblog/resilience-testing-with-azure-chaos-studio-compute-failures/4389664).
- [Observability for Azure AI agents with OpenTelemetry](https://www.willvelida.com/posts/ms-agent-framework-claude/).

## Developer workflow: azd & Azure DevOps

- [AZD for beginners](https://github.com/microsoft/agent-governance-toolkit) — the Azure Developer CLI guide.
- [azd-app: run your azd app locally](https://jongio.github.io/azd-app/).
- [Build once, deploy everywhere: Azure DevOps Pipelines + azd](https://msft.it/l/6016sdWbn).
- [azure.coding-agent: automating Azure access for Copilot's coding agent](https://luke.geek.nz/azure/azd-github-copilot-coding-agent-azure-mcp-server/).
- [Automating hundreds of test cases with Copilot + Azure DevOps MCP + Playwright](https://msft.it/l/6011sKJ8x).

## Learning & certification

- [AZ-104 ultimate study guide](https://www.refactored.pro/az-104-ultimate-study-guide) and [the full AZ-104 video course](https://www.youtube.com/playlist?list=PLahhVEj9XNTcj4dwEwRHozO3xcxI_UHYG&feature=shared).
- [Azure free learning resources roundup](https://www.mygreatlearning.com/academy/learn-for-free/courses/microsoft-azure-essentials) · [How to learn Azure for free](https://www.youtube.com/watch?v=bYOgjoX_px4).
- [Azure skilling challenges — 50% off a certification](https://azure.github.io/azure-skilling-challenges-2025/challenges.html).
- Microsoft Learn hands-on repos: [AI agents on Azure](https://microsoftlearning.github.io/mslearn-ai-agents/?ocid=AID3026125_TWITTER_oo_spl100008417747107) · [GenAI solutions on Azure](https://microsoftlearning.github.io/mslearn-ai-studio/?ocid=AIDN%2FA_TWITTER_oo_spl100008558857344) · [Windows Server on Azure lab](https://github.com/microsoft/windows-server-azure-lab).
- [Azure Network Security Workshop labs](https://github.com/Azure/Copilot-Studio-and-Azure/tree/main/accelerators/sharepoint-connector) — Microsoft's internal demos, free.
- [12 Azure hands-on labs](https://techyoutube.com/index.php/2024/01/26/12-azure-hands-on-labs-elevate-your-expertise-now/#aioseo-5-get-started-with-azure-functions-lab-duration-1-hour) · [Trainer-Demo-Deploy catalog](https://microsoftlearning.github.io/trainer-demo-deploy/).
- ["Designing AI-Ready Infrastructure in Microsoft Azure"](https://www.amazon.com/Designing-AI-Ready-Infrastructure-Microsoft-Azure-ebook/dp/B0F74Q8BYM) — the book that names your career direction.

---

## All links on this topic
