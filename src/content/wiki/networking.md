---
title: "Networking"
topic: "networking"
draft: false
generated: "2026-07-07"
sources: "96 tagged links, curated in full (2018\u20132026)"
---

**96 saved links**, 2018–2026 (peak: 2023) — the smallest of your infrastructure tags, but dense. One author anchors it (Ivan Velichko's iximiuz labs, saved again and again), one cloud dominates it (Azure, naturally), and the newest saves ask the 2026 question: what does networking look like when the clients are agents?

**Related:** [Azure](/wiki/azure/) · [Kubernetes](/wiki/kubernetes/) · [Linux & CLI](/wiki/linux-and-cli/) · [Security](/wiki/security/) · [System Design & Architecture](/wiki/system-design-and-architecture/)

---

## The iximiuz backbone

The single most-saved source on this topic — hands-on, illustrated, built for DevOps people rather than network gurus.

- [Networking Basics for Developers, DevOps, and Platform Engineers](https://labs.iximiuz.com/courses/computer-networking-fundamentals/from-lan-to-vxlan?expand=all) — the L2/L3 mini-course you saved at least three times across three years. Start here.
- [the port-forwarding challenge](https://labs.iximiuz.com/challenges/port-forwarding-using-socat) — practice, not reading.
- [container networking, explained interactively](https://labs.iximiuz.com/tutorials/container-networking-from-scratch) — the SRE/DevOps interview refresher.
- [sporadic HTTP 502s with clean server logs? it's the idle connection timeout](https://iximiuz.com/en/posts/reverse-proxy-http-keep-alive-and-502s/) — the debugging classic.

## Fundamentals & protocols

- [howdns.works](https://howdns.works/) — the comic-style DNS walkthrough (saved three times since 2019) · [Julia Evans' "How DNS Works" zine](https://wizardzines.com/zines/git/) · [the DNS 101 miniseries](https://www.youtube.com/playlist?list=PLTk5ZYSbd9MhMmOiPhfRJNW7bhxHo4q-K) (video) · [nslookup.io](https://www.nslookup.io/) for poking at records.
- [IP, TCP, and HTTP simplified](https://tigerabrodi.blog/simplifying-network-protocols-ip-tcp-and-http-explained?x-host=tigerabrodi.blog) · [how client and server actually make a connection](https://medium.com/@shivambhadani_/understanding-tcp-and-building-our-own-tcp-server-in-c-language-8de9d9de78ef).
- [the OSI model deep dive](https://www.youtube.com/watch?v=IPvYjXCsTg8&feature=youtu.be) and [the full Network+ prep course](https://www.youtube.com/watch?v=qiQR5rTSshw&feature=youtu.be) (videos).
- [CIDR notation, simplified](https://cloudbuild.co.uk/cidr-notation-simplified/) — the one everyone re-looks-up.
- [Cisco Networking Academy's free courses](https://www.netacad.com/courses/linux-essentials?courseLang=en-US) — the traditional on-ramp.

## Load balancers & proxies

- [proxy vs. reverse proxy](https://www.youtube.com/watch?v=4NB0NDtOwIQ&utm_source=twitter) (video) · [how a proxy server works, as a zine](https://securityzines.com/flyers/proxy.html) · [load balancer vs. reverse proxy vs. API gateway](https://medium.com/geekculture/load-balancer-vs-reverse-proxy-vs-api-gateway-e9ec5809180c) — with your own skeptical note attached.
- [fresh innovation in load balancing, from Google Research](https://research.google/blog/load-balancing-with-random-job-arrivals/) · [a truly global load balancer](https://cloud.google.com/blog/topics/developers-practitioners/introducing-the-builders-hub-from-the-google-developer-program).
- Azure's lineup: [picking the right load-balancing solution](https://www.youtube.com/watch?v=s1H2HpSJ-cg&feature=youtu.be) and [the Load Balancer deep dive](https://www.youtube.com/watch?v=wJvmXM81tEI&feature=youtu.be) (videos).
- The AI twist: [queue depth as the load-balancing metric for AI workloads](https://cloud.google.com/resources/networking) · [load balancing Azure OpenAI](https://journeyofthegeek.com/2023/05/31/load-balancing-in-azure-openai-service/) · [LangChain fallbacks as poor-man's load balancing](https://clemenssiebler.com/posts/azure_openai_load_balancing_langchain_with_fallbacks/).

## Azure networking — the day job

- [networking in Azure: the BIG picture](https://stanislas.io/2019/07/31/networking-in-azure-the-big-picture/) and the certification track: [the AZ-700 preparation guide](https://stanislas.io/2021/07/26/preparation-guide-for-az-700-designing-and-implementing-microsoft-azure-networking-solutions-certification/) · [the AZ-700 study super-guide](https://www.youtube.com/watch?app=desktop&v=nVZYDhB_M64) (video) · [AZ-104 networking, identity, storage & compute](https://www.refactored.pro/az-104-ultimate-study-guide).
- [traffic flows in common Azure networking patterns](https://github.com/mattfeltonma/azure-networking-patterns) — the must-view repo.
- [querying private DNS zones over point-to-site with DNS Private Resolver](https://azurealan.ie/2022/07/26/how-to-query-a-private-dns-zone-over-point-to-site-connection-with-azure-dns-private-resolver/) · [troubleshooting NSGs with Network Watcher](https://www.ciraltos.com/troubleshoot-network-security-groups-with-azure-network-watcher-nsg-diagnostics/).
- [Copilot in Azure — networking edition](https://wedoazure.wordpress.com/2024/09/01/copilot-for-azure-networking-edition/) — the first AI-shaped save in this section.
- [the Azure networking decision tree](https://learn.microsoft.com/en-us/azure/devops/boards/index?view=vsts&wt.mc_id=AID723316_QSG_SCL_312089).

## Kubernetes & container networking

- [understanding networking in Kubernetes](https://learncloudnative.com/blog/2023-05-31-kubeproxy-iptables) — container-to-container through pod-to-service, in one pass.
- [tracing pod-to-pod traffic via CNI](https://itnext.io/tracing-pod-to-pod-network-traffic-in-kubernetes-112523a325b2) (Daniele Polencic) · [networking between pods, from the Finnish MOOC](https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-3).
- [AKS networking essentials](https://www.youtube.com/watch?v=kLBLaCC_dNs&feature=youtu.be) (video) · [private AKS clusters](https://pixelrobots.co.uk/2023/07/accessing-your-private-aks-cluster-over-vpn-with-az-aks-get-credentials/).
- [EKS networking best practices](https://aws.github.io/aws-eks-best-practices/reliability/docs/networkmanagement) — the other cloud's answer.
- [Retina — Azure's cloud-native container networking observability platform](https://www.infoq.com/news/2026/04/junior-developer-pipeline-crisis/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=development).
- [the Docker networking hands-on lab](https://training.play-with-docker.com/docker-networking-hol/).

## Networking for the agent era

- [secure networking patterns for multi-agent systems](https://docs.cloud.google.com/architecture/multi-agent-private-networking-patterns) — Google Cloud's reference; the newest save on this page and the shape of things to come.
- [Cross-Cloud Network design](https://docs.cloud.google.com/architecture/multi-agent-private-networking-patterns) — same note family: distributed apps across clouds.
- [how Slack rebuilt its cloud network](https://slack.engineering/building-the-next-evolution-of-cloud-networks-at-slack/) — the case study worth rereading before designing anything multi-team.

---

## All links on this topic
