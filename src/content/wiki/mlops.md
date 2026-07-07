---
title: "MLOps"
topic: "mlops"
draft: false
generated: "2026-07-07"
sources: "53 tagged links, curated in full (2018\u20132026)"
---

**53 saved links**, 2018–2026 (peak: 2024). This is the tag where your two careers shake hands: it starts in 2018 with MLflow tutorials and Microsoft "DevOps for ML" evangelism, and by 2024 more than half the saves say *LLMOps* instead. You never collected MLOps as a data scientist learning ops — you collected it as an ops person annexing ML, which is why the pipelines, IaC, and SRE angles dominate and the modeling barely appears.

**Related:** [DevOps](/wiki/devops/) · [Machine Learning](/wiki/machine-learning/) · [CI-CD](/wiki/ci-cd/) · [Infrastructure as Code](/wiki/infrastructure-as-code/) · [SRE & Observability](/wiki/sre-and-observability/) · [Azure](/wiki/azure/) · [Google Cloud](/wiki/google-cloud/) · [LLMs](/wiki/llms/)

---

## Start here — the learning shelf

Enough curated material to teach the whole discipline; the recurring pattern in your saves is "stop at the notebook is not enough."

- [awesome-mlops](https://github.com/visenger/awesome-mlops) — the canonical curated list, and [ml-ops.org](https://ml-ops.org/), the same author's site with ten MLOps books collected in one place.
- [MLOps Zoomcamp](https://www.youtube.com/watch?v=2jM7t-NTZxs) (video) and [its course page](https://datatalks.club/blog/mlops-zoomcamp.html) — DataTalks.Club's free nine-weeks-to-production course, the most course-shaped thing here.
- [10 GitHub repositories to master MLOps](https://www.kdnuggets.com/10-github-repositories-to-master-mlops) · [free courses across DS, DE, ML, MLOps and LLMOps](https://www.kdnuggets.com/collection-of-free-courses-to-learn-data-science-data-engineering-machine-learning-mlops-and-llmops) · [a free MLOps-basics ebook](https://www.kdnuggets.com/2023/08/learn-mlops-basics-free-ebook.html?utm_source=dlvr.it&utm_medium=twitter&utm_campaign=learn-mlops-basics-with-this-free-ebook) — the kdnuggets drip.
- [Pau Labarta Bajo: one real-world project to learn MLOps](https://www.realworldml.xyz/blog/one-project-to-learn-mlops) — "stop reading, get your hands dirty"; the advice you keep re-saving in different forms.
- [the 8-week ML, MLOps & Career Accelerator](https://www.mlacademy.ai/end-to-end-ml-accelerator?utm_source=x&utm_medium=cpa&utm_campaign=end_to_end_ml_accelerator_may2026&utm_content=david) — a 2026 save, notable because it bundles the career transition itself into the curriculum.
- [Oxford's AI, generative AI, cloud and MLOps course](https://lifelong-learning.ox.ac.uk/courses/artificial-intelligence-generative-ai-cloud-and-mlops-online) — saved with a raised eyebrow at the C# in their agent examples.
- [FastAPI for MLOps: project structure and API best practices](https://pyimagesearch.com/2026/04/13/fastapi-for-mlops-python-project-structure-and-api-best-practices/) — the serving layer, done properly.

## MLOps is DevOps you already know

The oldest thread in the tag, and the one that explains why you were early: this was DevOps people telling other DevOps people that ML was coming for them.

- [Damian Brady: MLOps or DevOps for machine learning?](https://damianbrady.com.au/2019/10/28/mlops-or-devops-for-machine-learning/) and the sequel [how does MLOps differ from DevOps?](https://damianbrady.com.au/2020/10/29/how-does-mlops-differ-from-devops/) — the cleanest framing of the skills transfer you eventually made.
- [Why should I care about MLOps?](https://www.youtube.com/watch?v=GrD9laALZJc) · [How can MLOps improve my predictive models?](https://www.youtube.com/watch?v=Y4P87VKHmMk) — Microsoft's One Dev Question shorts from 2020, when this still needed selling.
- [MLflow + TensorFlow + Keras with PyCharm](https://www.databricks.com/blog/how-agentic-software-development-will-change-databases) — your very first save under this tag, July 2018, barely a month after MLflow's launch.
- [Pulumi: the real AI challenge is cloud, not code](https://www.pulumi.com/blog/the-guide-platform-engineering-idp-steps-best-practices/?utm_campaign=Platform-Engineering-Theme&utm_content=315383891&utm_medium=social&utm_source=twitter&hss_channel=tw-837770064870817792) — the thesis of your entire transition, in one title.
- [Applying SRE principles to your MLOps pipelines](https://cloud.google.com/blog/products/devops-sre/applying-sre-principles-to-your-mlops-pipelines?e=0?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy25q1-googlecloudtech-blog-ai-in_feed-no-brand-global&utm_content=-&utm_term=-) — Google Cloud making explicit what you already suspected: error budgets and reliability thinking apply to model pipelines too.
- [data drift, concept drift, model drift, observability, explainability](https://abacus.ai/drift) — the monitoring vocabulary that separates ML in production from ML in a notebook.
- [Philips' MLOps platform on SageMaker](https://aws.amazon.com/blogs/industries/engineering-resilient-systems-bmw-groups-chaos-engineering-journey-and-insights/) — saved as "applying the DevOps mindset to Gen AI and ML"; a healthcare-scale proof it works.

## The Azure shelf

Thirteen links — the biggest cluster in the tag, tracking your Azure depth from AzureML infographics to full GenAIOps reference architecture.

- The early years: [five best practices for the MLOps lifecycle with AzureML](http://msft.it/6019TRoyc) (2019) · [MLOps: the path to building a competitive edge](https://azure.microsoft.com/en-us/blog/mlops-the-path-to-building-a-competitive-edge/) (2020) · [a tale of two Azure Pipelines](https://towardsdatascience.com/mlops-a-tale-of-two-azure-pipelines-4135b954997) — integrating ML pipelines into an existing DevOps process.
- Hands-on: [the Azure MLOps workshop from AzConf](https://www.youtube.com/watch?v=pqermZA_ZG8&feature=youtu.be) (video) and [part 8 of the Azure MLOps Challenge blog](https://arinco.com.au/blog/agentic-devops-safe-mode-a-practical-framework-for-secure-github-copilot-agents/).
- The charotamine pair — full IaC-flavored pipelines, your stack exactly: [end-to-end MLOps with TensorFlow, Azure ML, GitHub Actions and Bicep](https://charotamine.medium.com/end-to-end-mlops-pipeline-with-tensorflow-azure-machine-learning-github-actions-bicep-4febc83f9fc0) · [LLMOps with Azure AI, Prompt Flow, Bicep and GitHub Actions](https://charotamine.medium.com/llmops-with-azure-ai-promptflow-bicep-github-actions-adafc131f83e).
- Prompt Flow in anger: [LLMOps with Azure ML Prompt Flow on an NER task](https://shorturl.at/lpwPY) · [Operationalizing LLMs on Azure](https://www.coursera.org/learn/llmops-azure/) (Coursera).
- The reference material: [GenAIOps for organizations with existing MLOps investments](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/genaiops-for-mlops) — the Azure Architecture Center page that answers the exact question an Enterprise AI Architect gets asked.
- Microsoft's TechExcel LLMOps-automation workshop: [the intro](https://microsoft.github.io/TechExcel-Operationalize-LLMs-with-LLMOps-automation/) and [Exercise 05: Automate Everything](https://microsoft.github.io/TechExcel-Operationalize-LLMs-with-LLMOps-automation/docs/05_automating_everything/05_automating_everything.html) — plus [the "code-first LLMOps" AI Tour demo repo](https://github.com/microsoft/aitour-llmops-with-gen-ai-tools), saved when the session was standing room only.

## Google Cloud, Databricks & the platform stories

- [GenOps: the evolution of MLOps for gen AI](https://cloud.google.com/blog/topics/developers-practitioners/next-26-hands-on-10-codelabs-to-build-featured-tech?e=48754805?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy26q2-googlecloudtech-blog-ai-in_feed-no-brand-global&utm_content=-&utm_term=-) and [the GenAI MLOps blueprint for Vertex AI](https://docs.cloud.google.com/architecture/multi-tenant-agentic-ai-system) — Google's answer to the Azure Architecture Center pages above; you collect these in matched pairs.
- [how L'Oréal's Tech Accelerator built its end-to-end MLOps platform](https://cloud.google.com/blog/products/ai-machine-learning/how-loreals-tech-accelerator-built-its-end-to-end-mlops-platform?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy25q1-googlecloudtech-blog-ai-in_feed-no-brand-global&utm_content=-&utm_term=-&linkId=12651095) — the enterprise case study.
- [Databricks' Big Book of MLOps, updated for generative AI](https://www.databricks.com/blog/costar-how-we-ship-ai-agents-databricks-fast-without-breaking-things) — the free book that bridges both eras, and [Feature & Function Serving: real-time structured data for RAG apps](https://www.databricks.com/blog/how-agentic-software-development-will-change-databases).
- [Matt Turck's MAD landscape 2024](https://www.mattturck.com/mad2024/) — saved with your own periodization: "Gen 2 was MLOps"; AI developer platforms are Gen 3. Useful humility for a tag that peaked in 2024.

## The LLMOps turn

From late 2023 the tag pivots almost wholesale. Same discipline, new artifact: prompts and models-as-APIs instead of trained weights.

- [LLMOps deployment architecture patterns](https://medium.datadriveninvestor.com/generative-ai-llmops-deployment-architecture-patterns-6d45d1668aba) — the August 2023 save where the turn begins.
- [5 essential steps to building LLM apps](https://www.youtube.com/watch?si=ZhREMAFgzJgr34av&v=Nr3ckDhDfK8&feature=youtu.be) (video) · [open-source LLMs, fine-tunes and RAG-based vector store APIs](https://blog.abacus.ai/blog/category/ai-education/) — the early stack-assembly phase.
- [What Is LLMOps?](https://www.oreilly.com/library/view/what-is-llmops/9781098154301/) — the O'Reilly report, saved on launch day.
- [architecture & design principles for MLOps and LLMOps](https://shorturl.at/Zu0X6) — the two disciplines treated as one, which is where you landed too.
- [ZenML's LLMOps database](https://www.zenml.io/llmops-database) — hundreds of filterable industry case studies; you noted you'd been meaning to compile exactly this yourself.
- [The Full MLOps/LLMOps Blueprint](https://blog.dailydoseofds.com/p/the-full-mlopsllmops-blueprint) — the consolidated 2025 overview.
- [the free hands-on LLM course](https://www.realworldml.xyz/the-hands-on-llm-course) — real-world LLM apps with MLOps best practices baked in.
- [an end-to-end MLOps pipeline with open-source tools](https://medium.com/infer-qwak/building-an-end-to-end-mlops-pipeline-with-open-source-tools-d8bacbf4184f) — worth keeping around as the vendor-neutral counterweight to all the cloud-platform links above.

## Where it's heading: evals and agent ops

The newest saves suggest the discipline's next rename — and they point straight at your agentic-AI work.

- [eval-driven development in MLflow](https://mlflow.org/cookbook/eval-driven-development/) — find failures with evals, fix, rerun the same suite, ship with tracked deltas. CI/CD logic applied to model behavior; the most architecturally important link on this page.
- [agent evaluations in your LLMOps with GitHub Actions](https://medium.com/@AI-on-Databricks/incorporate-agent-evaluations-into-your-llmops-with-github-actions-0cbd0b3cb03f) — evals wired into the pipeline you already know how to run.
- ["the holy grail of MLOps was always continual learning"](https://luma.com/w7y0bqwr) — your saved note observes the same concepts resurfacing in agent building as "agent ops." That one sentence is the bridge between this tag and [AI Agents](/wiki/ai-agents/).
- [GraphRAG analysis part 2: graph vs. vector retrieval](https://home.mlops.community/public/blogs/graphrag-analysis-part-2-graph-creation-and-retrieval-vs-vector-database-retrieval) — the MLOps community turning its rigor on RAG architecture choices.
- [Chrome's built-in AI APIs — Gemini Nano in the browser](https://developer.chrome.com/docs/modern-web-guidance) — the contrarian save: sometimes the best model deployment is none at all.

---

## All links on this topic
