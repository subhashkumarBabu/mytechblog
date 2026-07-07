---
title: "Containers & Docker"
topic: "containers"
draft: false
generated: "2026-07-07"
sources: "446 tagged links, curated from the 200 most recent (2023\u20132026)"
---

**446 saved links.** The 2023 layer is the great containerization education (how images work, Docker-to-K8s migrations, Azure's container menu); the 2025–26 layer is something new: containers as the *habitat for AI agents* — sandboxes, model runners, and MCP toolkits.

**Related:** [Kubernetes](/wiki/kubernetes/) · [DevOps](/wiki/devops/) · [Azure](/wiki/azure/) · [Linux & CLI](/wiki/linux-and-cli/)

---

## Start here

- [Marc Brooker: the word "container" has at least four definitions — and why that matters](https://brooker.co.za/blog/2023/06/19/container.html).
- [the inner workings of Docker — the magic behind containerization](https://medium.com/javarevisited/top-7-educative-io-courses-to-learn-agentic-ai-in-2025-ce28acbb9639) and [Docker architecture, mechanism by mechanism](https://medium.com/@basecs101/understanding-docker-architecture-latest-c7a165571d89).
- [the OCI image format, broken down](https://ravichaganti.com/blog/2022-10-28-understanding-container-images-oci-image-specification/) — what an image really is.
- [the Docker roadmap](https://roadmap.sh/docker) · [docker-curriculum.com](https://docker-curriculum.com/) · [the full beginners video course](https://www.youtube.com/watch?v=fqMOX6JJhGo).
- [Docker vs. Kubernetes vs. Podman](https://medium.com/javarevisited/the-2024-ai-artificial-intelligence-developer-roadmap-3b81db65c22a) · [rootless containers, comprehensively](https://www.atatus.com/blog/rootless-containers-guide/).

## Containers meet agents

The 2025–26 story: containers as the safety boundary for autonomous code.

- ["Your container is not a sandbox"](https://emirb.github.io/blog/microvm-2026/) — the security caveat to read first.
- [Dagger's container-use: from babysitting one agent to running many safely](https://github.com/dagger/container-use).
- [VS Code's built-in agent sandbox](https://docs.docker.com/reference/cli/sbx/) · [a Claude + VS Code + Dev Containers setup](https://warski.org/blog/secure-dangerous-claude-code-vs-code-setup/) — the workflow you live in.
- Docker's AI stack: [Docker AI](https://www.docker.com/solutions/docker-ai/) · [the Docker MCP Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/) · [Agent Builder and Runtime from Docker engineering](https://github.com/docker/docker-agent) · [MCP servers in E2B sandboxes](https://www.youtube.com/watch?v=yzeag8mEEiw&feature=youtu.be) (video).
- ["unit tests" for agent skills — Docker-isolated benchmarks with LLM grading](https://blog.mgechev.com/2026/02/26/skill-eval/).
- [building a RAG app with Docker + Ollama — published in the official docs](https://docs.docker.com/guides/rag-ollama/) · [the self-hosted AI starter kit in one Docker Compose](https://github.com/n8n-io/self-hosted-ai-starter-kit) · ["GenAI in a box": Docker, Neo4j, LangChain, Ollama](https://www.devclass.com/ai-ml/2023/10/05/genai-in-a-box-docker-neo4j-langchain-and-ollama-offer-new-stack-to-developers/1625766).
- [dockerizing an AI agent from scratch](https://amanxai.com/2026/04/04/how-to-dockerize-an-ai-agent/) · [local LLMs in a container on Azure](https://www.freecodecamp.org/news/host-llms-locally-in-docker-on-azure/).

## Azure's container menu

- [Web App for Containers vs. Container Apps — the decision visuals](https://www.blueboxes.co.uk/app-service-web-app-for-containers-vs-azure-container-apps) and [running containers in Azure: the full analysis](https://dev.to/cloudraft/running-containers-in-azure-30ag).
- [AKS & Container Instances for beginners](https://k21academy.com/azure-cloud/azure-container-instances-and-kubernetes-service/) · [Azure Containers Explained — the book](https://amzn.eu/d/fWsgveL).
- Container Apps in practice: [ACA Jobs with Bicep and the CLI](https://www.isaacl.dev/d75) · [running Playwright in Container Apps](https://anthonychu.ca/post/serverless-playwright-azure-container-apps/) · [LLM apps on ACA](https://valentinaalto.medium.com/deploy-llms-apps-on-azure-container-apps-with-code-interpreter-dynamic-session-64359009ac54) · [an MCP server deployed to ACA over lunch](https://github.com/willvelida/mcp-afl-server) · [AI Foundry agents + ACA for an Agent2Agent solution](https://baeke.info/2025/07/16/deploying-ai-foundry-agents-and-azure-container-apps-to-support-an-agent2agent-solution/) · [Azure Functions on Container Apps](https://github.com/Azure/azure-functions-on-container-apps).
- [automated deployments for AKS](https://www.youtube.com/watch?v=PqhdX8-SZYw&feature=youtu.be) (video).

## Running containers well

- [container best practices — and why you should care](https://thenewstack.io/containers/container-best-practices-what-they-are-and-why-you-should-care/).
- [the container security checklist: from image to workload](https://github.com/krol3/container-security-checklist).
- [patching container images with Trivy and Copacetic in the pipeline](https://luke.geek.nz/azure/microsoft-learn-contributor-chatmode/).
- [a Docker monitoring stack: Prometheus, Grafana, cAdvisor, prebuilt dashboards](https://github.com/ruanbekker/docker-monitoring-stack-gpnc).
- [multi-arch containers and the "exec format error"](https://www.infracloud.io/blogs/multi-arch-containers-ci-cd-integration/).
- Migrations: [containers → Kubernetes: a migration roadmap](https://komodor.com/blog/from-containers-to-kubernetes-a-roadmap-for-migrating-your-applications-successfully/) · [VMs → containers planning guide](https://milind24365.medium.com/planning-guide-for-moving-from-vms-to-containers-f4d8d18389db) · [notes from a Swarm → K8s migration](https://keyholesoftware.medium.com/notes-from-my-swarm-to-kubernetes-migration-abf3802cf001).

## Hands-on

- [labs.play-with-docker.com](https://labs.play-with-docker.com/) and [the Docker networking hands-on lab](https://training.play-with-docker.com/docker-networking-hol/).
- [dockerlabs.collabnix.com](https://dockerlabs.collabnix.com/) — the big free lab collection.
- [how iximiuz built a Firecracker-powered course platform for Docker and K8s](https://iximiuz.com/en/posts/iximiuz-labs-story/) and [building a microVM from a container](https://actuated.com/blog/firecracker-container-lab) — the layer below.
- [dev containers in VS Code](https://www.youtube.com/watch?v=b1RavPr_878&ocid=AID3062137_TWITTER_oo_spl100004961496989) (video) · [Hanselman: each layer of abstraction indistinguishable from magic](https://www.youtube.com/watch?v=KqhhaMgbGhU) (video).
- ["Understanding Docker — as an 11-year-old"](https://rishabkumar.com/blog/terraform-lock-hcl-to-gitignore-or-commit/?ref=twitter-share) — the explain-it-simply test.

---

## All links on this topic
