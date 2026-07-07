---
title: "Kubernetes"
topic: "kubernetes"
draft: false
generated: "2026-07-07"
sources: "489 tagged links, curated from the 220 most recent (2023\u20132026)"
---

**489 saved links**, peaking in 2023 — the year of the great K8s learning wave in your saves. The recent corpus tells the next chapter: AI moving into the cluster, both as workload (LLMs on GKE/AKS) and as operator (K8sGPT, AI on-call). Per one of your saved reports, ML-on-Kubernetes job demand grew 180% while classic roles flattened.

**Related:** [Containers & Docker](/wiki/containers-and-docker/) · [DevOps](/wiki/devops/) · [Platform Engineering](/wiki/platform-engineering/) · [Azure](/wiki/azure/) · [GitOps](/wiki/gitops/)

---

## Start here: the right mental model

- ["Let's stop calling Kubernetes a container orchestrator"](https://home.robusta.dev/blog/kubernetes-is-a-cloud-operating-system) — the reframing that makes everything else click.
- [How Kubernetes reinvented virtual machines](https://labs.iximiuz.com/tutorials/kubernetes-vs-virtual-machines) — one of the most-shared K8s explainers ever, deservedly.
- [Kubernetes is great — if you know what 90% of it not to use](https://paulbutler.org/2024/the-haters-guide-to-kubernetes/).
- ["Kubernetes still feels weird" — what I wish I knew sooner](https://aws.plainenglish.io/kubernetes-still-feels-weird-what-i-wish-i-knew-sooner-dd61b90463db) ("wish I had it years ago" — your own note).
- [architecture explained: etcd, kubelet, container runtime, component by component](https://devopscube.com/kubernetes-architecture-explained/).
- [the Borg papers — where it all comes from, 20 years on](https://research.google/pubs/developer-productivity-in-the-age-of-generative-ai-a-psychological-perspective/).
- [Why does Kubernetes exist?](https://www.youtube.com/watch?v=228XgLK1I8A) (video).

## AI meets the cluster

- **AI as operator:** [K8sGPT — AI superpowers for Kubernetes SREs](https://github.com/k8sgpt-ai/k8sgpt) ([+ the Backstage integration](https://k8sgpt.ai/blog/post-5/)) · [a ChatGPT bot that answers your Prometheus alerts](https://github.com/robusta-dev/kubernetes-chatgpt-bot) · [the kubectl OpenAI plugin](https://collabnix.com/the-rise-of-kubernetes-and-ai-kubectl-openai-plugin/).
- [Intuit: GenAI for on-call across 325+ clusters and 7,000 services](https://medium.com/intuit-engineering/genai-experiments-monitoring-and-debugging-kubernetes-cluster-health-e8597454a85c) — the enterprise-scale case study closest to your incident-management platform.
- [an intelligent alert-handling system with Prometheus, n8n, and OpenAI](https://medium.com/@kopp0510/how-i-made-kubernetes-monitoring-smarter-with-ai-b16ff3888e41).
- **AI as workload:** [deploying an agentic AI app on GKE with ADK and a self-hosted LLM](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm?utm_campaign=cloud-ix-social-media-post_448997792utm_source%3Dtwitterutm_medium%3Dunpaidsoc&linkId=17573357) · [fine-tuning GenAI models on AKS with KAITO](http://blog.aks.azure.com/2024/08/23/fine-tuning-language-models-with-kaito) · [private LLMs with NVIDIA NIM on a GPU node](https://docs.nvidia.com/nim/large-language-models/latest/deploy-helm.html) · [one-checkbox Ray on GKE](https://cloud.google.com/blog/products/gaming/how-gen-ai-powers-up-multiplayer-games).
- [scalable AI workflows: LLMs, Kubernetes, and multi-agent coordination](https://www.infoq.com/news/2026/02/evals-agent-interop/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=dotnet) · [Kubernetes as the secret behind NVIDIA's AI factories](https://www.youtube.com/watch?si=uPaId5TvGhZEN9i9&v=KrmqURibQB8&feature=youtu.be) (video).
- [the jobs report: platform engineering up, ML-on-K8s up 180%](https://kube.careers/state-of-kubernetes-jobs-2025-q1).

## Running it in production

- [the production checklist: best practices for SREs](https://www.infoq.com/articles/checklist-kubernetes-production/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Devops) — the single most practical link in the tag.
- [building a reliability foundation: crawl, walk, run](https://www.fairwinds.com/blog/building-a-strong-reliability-foundation-in-kubernetes-from-crawl-to-run).
- Observability: [Prometheus + Grafana setup guide](https://blog.devgenius.io/ultimate-guide-setting-up-prometheus-and-grafana-for-kubernetes-monitoring-accd92a3fb70) · [a modern set of Grafana dashboards for K8s](https://github.com/dotdc/grafana-dashboards-kubernetes) · [K8s log monitoring with OpenTelemetry](https://signoz.io/blog/kubernetes-logging/) · [SLOs for cluster resource utilization](https://www.dynatrace.com/news/blog/optimize-resource-utilization-of-your-kubernetes-clusters-with-slos/) · [Retina — cloud-agnostic network observability](https://retina.sh/docs/intro/?WT.mc_id=modinfra-134234-pierrer).
- Deploy patterns: [deployment strategies: rolling, recreate, canary, blue/green](https://blog.devops.dev/kubernetes-deployment-strategies-part-1-f4a7b959c5e5) · [canary releases with Istio, Kiali, and the Gateway API](https://dev.to/danielepolencic/traffic-shaping-with-istio-and-kubernetes-4pcf) · [blue/green vs. canary, compared](https://hardeeppsinghh725.medium.com/blue-green-deployment-vs-canary-deployment-a7cd62ad608a).
- Networking: [how pod-to-pod communication actually works](https://dev.to/danielepolencic/tracing-pod-to-pod-network-traffic-in-kubernetes-434k) · [understanding K8s networking end to end](https://learncloudnative.com/blog/2023-05-31-kubeproxy-iptables).
- Security: [OWASP Kubernetes — prioritizing risks](https://www.sysdig.com/blog/top-owasp-kubernetes) · [Simulator: a K8s security-training platform that misconfigures clusters for you](https://github.com/controlplaneio/simulator).
- [the State of Kubernetes Cost Optimization report](https://cloud.google.com/blog/products/databases/build-rag-applications-with-langchain-and-google-cloud/) — tangible advice, per your note.

## Kubernetes on Azure

- [building a platform-engineering environment on AKS](https://github.com/Azure-Samples/modern-data-warehouse-dataops/blob/main/e2e_samples/fabric_dataops_sample/README.md) — the reference sample.
- [Kubernetes in Azure: the 7 service options, compared](https://www.netapp.com/learn/azure-anf-blg-kubernetes-in-azure-architecture-and-service-options/).
- [External Secrets + AKS integration](https://medium.com/@artem_lajko/unlocking-the-potential-external-secrets-and-azure-kubernetes-service-integration-f562c58d7472) · [Azure DevOps self-hosted agents on K8s](https://medium.com/@muppedaanvesh/azure-devops-self-hosted-agents-on-kubernetes-part-3-6658d741b369).
- [AKS networking essentials](https://www.youtube.com/watch?v=kLBLaCC_dNs&feature=youtu.be) and [microservices CI/CD with Azure DevOps + AKS](https://www.youtube.com/watch?v=0jzxRJkPJbA&feature=youtu.be) (videos).
- [deploying intelligent apps with OpenAI on AKS](https://www.youtube.com/live/g9MFhvdwQPU?si=LlxF9azwJ_-ceo7f) (video).

## Hands-on

- [the official Minikube hands-on tutorial](https://kubernetes.io/docs/tutorials/hello-minikube/) — still the canonical first cluster.
- [200+ Kubernetes labs and tutorials](https://collabnix.github.io/kubelabs/) · [free K8s labs](https://github.com/omerbsezer/Fast-Kubernetes) · [labs.play-with-k8s.com](https://labs.play-with-k8s.com/) · [helm-playground.com](https://helm-playground.com/) · [k8sgames.com](https://k8sgames.com/).
- [iximiuz: learning Kubernetes by fixing failing pods](https://labs.iximiuz.com/tutorials/container-networking-from-scratch) and [labctl — disposable K8s playgrounds from the CLI](https://github.com/iximiuz/labctl).
- [CKA exam prep — plus the concepts the exam skips](https://github.com/alifiroozi80/CKA).
- [the Kubernetes Resume Challenge](https://medium.com/@rogmer.bulaclac/the-kubernetes-resume-challenge-64658ee62c80) — prove it in public.
- Home-lab route: [Talos + K8s + Prometheus + Grafana on a Raspberry Pi 4](https://blog.devops.dev/talos-os-raspberry-fc5f327b7026) · [why David runs K8s for personal stuff](https://david.coffee/why-and-how-i-use-k8s-for-personal-stuff/).

## War stories & scale

- [k8s.af](https://k8s.af/) — Kubernetes failure stories; the best ops education per hour spent.
- [Kubernetes at Uber scale](https://www.youtube.com/watch?si=Paoa4gsFji6ow7na&v=JxNysEES308&feature=youtu.be) and [Uber's batch-compute resource story](https://www.youtube.com/watch?si=gqTt8wnLfBQpDBwH&v=mmLD5GcUcec&feature=youtu.be) (videos).
- [Agoda: moving 3 million CI jobs from VMs to Kubernetes](https://medium.com/agoda-engineering/governance-as-code-an-innovative-approach-to-software-architecture-verification-d93f95443662).
- [Monzo's architecture lessons — what worked and what didn't](https://www.infoq.com/articles/cassandra-kubernetes-microservices/?utm_source=twitter&utm_medium=link&utm_campaign=calendar).
- [Firefly: migrating from serverless *to* Kubernetes](https://www.infoq.com/articles/eclipse-lmos-ai-agents/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=ai-ml-data-eng) — the counter-current worth knowing.
- [how the Kubernetes project coordinates 3,000 contributors](https://www.cncf.io/blog/2023/06/14/version-after-version-how-the-open-source-project-kubernetes-releases-its-software/).

---

## All links on this topic
