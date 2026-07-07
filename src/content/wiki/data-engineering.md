---
title: "Data Engineering"
topic: "data-engineering"
draft: false
generated: "2026-07-07"
sources: "83 tagged links, curated in full (2017\u20132026)"
---

**83 saved links**, 2017–2026 (peak: 2024). One of the oldest threads in your vault, and one of the clearest arcs: it starts with Azure Data Lake retweets in 2017, runs through a long Kafka apprenticeship, settles into the Databricks/Snowflake lakehouse era — and then, from 2023 on, stops being about moving data and starts being about feeding it to AI. By 2026 nearly every new save here is really an [AI Agents](/wiki/ai-agents/) save wearing a data-engineering hat. That's not tag drift; that's the thesis of your Enterprise AI Architect arc — agents are only as good as the data platform underneath them.

**Related:** [Azure](/wiki/azure/) · [Databases](/wiki/databases/) · [Data Science](/wiki/data-science/) · [Machine Learning](/wiki/machine-learning/) · [MLOps](/wiki/mlops/)

---

## Where it started: the Azure data plumbing years (2017–2020)

The earliest layer — retweet-era saves from your Azure days, when "data engineering" meant Data Factory, Data Lake, and Databricks-on-Azure. Historical strata more than reading list, but they explain where your platform instincts come from.

- [Azure Data Lake online training](https://learn.microsoft.com/en-us/shows/ai-show/learnai-bootcamp-for-emerging-ai-developers-computer-vision-api-custom-vision-service-luis-part-12?wt.mc_id=aid627589_qsg_scl_254614) — saved in September 2017, then [again three weeks later](https://learn.microsoft.com/en-us/archive/blogs/mlserver/run-r-and-python-remotely-in-sql-server-from-jupyter-notebooks-or-any-ide). The tag's very first entries.
- [Application patterns using Azure SQL Data Warehouse](https://learn.microsoft.com/en-us/azure/devops/artifacts/get-started-nuget?view=azure-devops&wt.mc_id=AID723316_QSG_SCL_333166) — pre-Synapse warehouse thinking.
- The Azure Databricks onboarding run: [intro to ML for developers on Azure Databricks](https://www.databricks.com/), [accessing your data](http://msft.social/jlTqMI), [running your first code](http://msft.social/z9Phpo), and [the free-tier signup](https://azure.microsoft.com/en-us/free/services/databricks/?wt.mc_id=AID627570_QSG_SCL_233696) — plus early ML-on-Spark saves: [TensorFlowOnSpark on Databricks](https://tsmatz.wordpress.com/2018/05/09/databricks-tensorflowonspark-example/), [sentiment analysis on streaming data](https://learn.microsoft.com/en-us/azure/azure-databricks/databricks-sentiment-analysis-cognitive-services), [MLflow + TensorFlow + Keras with PyCharm](https://www.databricks.com/blog/how-agentic-software-development-will-change-databases).
- Architecture patterns of the era: [Azure Event Grid in a modern data warehouse](http://blogs.adatis.co.uk/josemendes/post/Azure-Event-Grid-in-a-Modern-Data-Warehouse-Architecture) · [Lambda architecture with Cosmos DB and Databricks](https://goo.gl/UKXM3j) · [the simplified Lambda take](https://learn.microsoft.com/en-us/archive/blogs/uktechnet/simplified-lambda-architecture-with-cosmos-db-and-databricks) · [massively scalable IoT pipelines on Cosmos DB](https://goo.gl/vRQbwB) · [a serverless big-data pipeline powered by a single Azure Function](http://msft.it/6012TJsW2).
- The DevOps crossover — your two worlds meeting early: [DevOps in Azure with Databricks and Data Factory](https://cloudarchitected.com/) and [CI pipelines for Azure Databricks](https://youtu.be/Bq19LFhM-dE) (video).
- Pipeline-builder milestones: [Cathrine Wilhelmsen's ADF blog series](https://www.cathrinewilhelmsen.net/) — saved off a tweet celebrating a *first ever* Data Factory pipeline built from it. Later: [Managed Airflow lands in ADF](https://lnkd.in/eQJyRZ3s) · [the ADF / Databricks / Synapse comprehensive guide](https://shorturl.at/mCDK8) · [Durable Functions vs. Apache Airflow](https://dev.to/cgillum/scheduling-tons-of-orchestrator-functions-concurrently-in-c-1ih7) — orchestration compared honestly, by the Durable Functions author.
- Late echoes: [the Azure Databricks training video series](https://vimeo.com/733689564) and [migrating an on-prem data pipeline to Azure](https://hackernoon.com/seamlessly-migrate-your-on-premise-data-pipeline-to-azure-with-these-key-steps?source=rss).

## The Kafka thread

The most persistent single technology in this tag — a decade-long apprenticeship that ends somewhere unexpected: Kafka as the event backbone for multi-agent systems.

- [Apache Kafka in 15 minutes, with Neha Narkhede](https://content.pivotal.io/intersect/apache-kafka-in-15-minutes) — the 2019 entry point.
- [exactly-once processing in Kafka](https://www.baeldung.com/kafka-exactly-once) — the semantics everyone gets wrong.
- [ByteByteGo: why is Kafka so fast?](https://blog.bytebytego.com/p/what-salesforce-learned-from-20000) — and their deep dive on Cloudflare's trillion-message Kafka infrastructure, saved a year later under the same source.
- Production war stories: [kafka-in-production — tech blogs from companies running Kafka at scale](https://github.com/dttung2905/kafka-in-production#coinbase) · [Allegro tackling Kafka tail latency](https://blog.allegro.tech/2024/03/kafka-performance-analysis.html) (the fix: migrate brokers from ext4 to XFS).
- [kafka-zero-to-production](https://github.com/StefanoFrusone/kafka-zero-to-production) — complete learning journey with Docker Compose cluster and production scripts; the DevOps-friendly on-ramp.
- Streaming meets AI: [real-time anomaly detection with Kafka and vectors](https://www.singlestore.com/resources/webinar-how-to-use-kafka-vectors-for-real-time-anomaly-detection/?utm_source=santiago-valdarrama&utm_medium=influencer&utm_campaign=How-to-Use-Kafka-and-Vectors-for-Real-Time-Anomaly-Detection&campaignid=7014X0000029Zi6QAE) · [Confluent on getting started with generative AI](https://www.confluent.io/blog/ai-meal-planner/) · [a real-time news search engine with serverless Kafka and a vector DB](https://medium.com/decodingml/an-end-to-end-framework-for-production-ready-llm-systems-by-building-your-llm-twin-2cc6bb01141f).
- The agent-era payoff: [why event-driven multi-agents with Kafka, Flink & LangChain](https://www.confluent.io/blog/ai-meal-planner/) and [Kai Waehner: agentic AI with A2A and MCP, Kafka as the event broker](https://www.kai-waehner.de/blog/2025/05/26/agentic-ai-with-the-agent2agent-protocol-a2a-and-mcp-using-apache-kafka-as-event-broker/) — "real foundations are forming," and they look like the streaming platforms you already know.

## Lakehouse & architecture war stories

The platform layer: Databricks and Snowflake as they matured, plus the reference architectures worth stealing.

- [Ali Ghodsi on the evolution of data architectures](https://future.com/podcasts/evolution-of-data-architectures/) — "one of the best conversations I've ever had on the future of data," says the save; business, architecture, and operations in one podcast.
- [Uber's real-time data infrastructure journey](https://arxiv.org/pdf/2109.05237) — the paper-length war story, "a fascinating read for all data engineers."
- [ML reference architectures from Google, Facebook, Uber, and Databricks](https://medium.com/dataseries/machine-learning-reference-architectures-from-google-facebook-uber-databricks-and-others-58191cf82b98) · [a guide to data-driven design and architecture](https://itnext.io/a-guide-to-data-driven-design-and-architecture-b4bcb188e31f?source=rss----5b301f10ddcd---4) · [TraditionalModernDW — a data warehouse architecture that "just works"](https://github.com/justBlindbaek/TraditionalModernDW) (KISS, delivered consistently).
- Databricks in daily practice: [lakehouse orchestration with Workflows](https://www.databricks.com/blog/mosaic-ai-build-and-deploy-production-quality-compound-ai-systems) · [applying software development and DevOps best practices to Delta Live Tables](https://www.databricks.com/blog/applying-software-development-devops-best-practices-delta-live-table-pipelines) — the save that treats pipelines as software, which is exactly your instinct.
- [Google on systems engineering as the foundation of SRE](https://google.smh.re/46S3) — reliable data pipelines and SLOs in the same breath; the bridge between this tag and your [DevOps](/wiki/devops/) life.
- Snowflake's arc in three saves: [the 2021 Summit](https://www.snowflake.com/en/blog/engineering/ontology-grounded-cortex-agents/) → [running Llama 2 in Snowpark Container Services](https://github.com/snowflake-labs/snowpark-containers-llama-2-sample) (the demo failed live — "had so much fun" anyway) → [Cortex LLM functions go GA](https://www.snowflake.com/en/blog/engineering/ontology-grounded-cortex-agents/) ("makes you feel like you got superpowers").
- [Databricks Assistant goes GA](https://www.databricks.com/blog/announcing-general-availability-databricks-assistant-and-ai-generated-comments?utm_source=bambu&utm_medium=social&utm_campaign=advocacy&blaid=6224545) — the first hint of where the next section goes.

## Data meets GenAI (2023–2024)

The pivot year is visible in the timestamps: from mid-2023, "data engineering" in your vault means engineering data *for* LLMs. This is the [RAG](/wiki/rag/) supply chain viewed from the platform side.

- [improving RAG response quality with real-time structured data](https://www.databricks.com/blog/how-agentic-software-development-will-change-databases) — Feature & Function Serving; unstructured retrieval plus fresh structured context.
- [long-context RAG performance](https://www.databricks.com/blog/long-context-rag-performance-llms) — Matei Zaharia and co. on why long context isn't a silver bullet, because LLM reasoning mimics human reasoning.
- [RAFT on top of Databricks fine-tuning to outperform RAG](https://celebaltech.com/blogs/enhancing-rag-systems-with-fine-tuned-language-models-on-databricks) — retrieval-aware fine-tuning, applied.
- [personalizing LLM apps with LangChain and Tecton](https://www.databricks.com/blog/costar-how-we-ship-ai-agents-databricks-fast-without-breaking-things) — the feature store meets the prompt.
- Platform mechanics: [LLM inference performance engineering best practices](https://www.databricks.com/blog/long-context-rag-performance-llms) · [Mosaic AI Gateway — governance and credential management in front of the LLM API](https://www.databricks.com/blog/announcing-general-availability-databricks-assistant-and-ai-generated-comments?utm_source=bambu&utm_medium=social&utm_campaign=advocacy&blaid=6224545) · [Mosaic AI's compound-AI launch: Agent Framework, Tool Catalog, Vector Search, evals](https://www.databricks.com/blog/mosaic-ai-build-and-deploy-production-quality-compound-ai-systems).
- Governance for the whole stack: [the Big Book of MLOps, updated for generative AI](https://www.databricks.com/blog/costar-how-we-ship-ai-agents-databricks-fast-without-breaking-things) and [managing AI security risks — the Databricks CISO workshop](https://www.databricks.com/blog/how-agentic-software-development-will-change-databases).

## Agentic data engineering (2025–2026)

The current chapter, and the densest overlap with your day job ambitions: every major data platform shipping agents that *do* data engineering, and data engineers learning to evaluate them.

- ["Why traditional ETL is dead — the rise of agentic data engineering"](https://medium.com/@seaflux/why-traditional-etl-is-dead-the-rise-of-agentic-data-engineering-34c4311f1d6c) — the manifesto version of the shift.
- The platform agents: [the BigQuery Data Engineering Agent](https://medium.com/google-cloud/i-built-an-agent-skill-for-googles-adk-here-s-why-your-coding-agent-needs-one-too-e5d3a56ef81b) ("easy-to-follow examples that even came with their own data") · [Google's open-source Data Agent Kit for your IDE or CLI](https://cloud.google.com/blog/products/data-analytics/data-agent-kit-brings-data-skills-and-tools-to-your-ide-or-cli?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy26q2-googlecloudtech-blog-ai-in_feed-no-brand-global&utm_content=-&utm_term=-&linkId=62282673) · [ontology-grounded reasoning with Snowflake Cortex Agents](https://www.snowflake.com/en/blog/engineering/ontology-grounded-cortex-agents/) · [Snowflake's practical guide to AI agents](https://www.snowflake.com/resource/a-practical-guide-to-ai-agents/?utm_source=kdnuggets&utm_medium=paidemail&utm_campaign=practical-guide-to-ai-agents&utm_content=ebook).
- How Databricks builds agents on itself — the AI-on-Databricks series: [Mosaic AI, tools, and function calling](https://medium.com/@AI-on-Databricks/agents-mosaic-ai-tools-and-function-calling-2530c841f80c) · [the agentic AI workload analyzer](https://medium.com/@AI-on-Databricks/automating-best-practices-with-agentic-ai-workload-analyzer-c133e8a5fed6) · [agent evaluations in LLMOps with GitHub Actions](https://medium.com/@AI-on-Databricks/incorporate-agent-evaluations-into-your-llmops-with-github-actions-0cbd0b3cb03f) · [generative AI for retail media optimization](https://medium.com/@AI-on-Databricks/customer-spotlight-implementing-generative-ai-for-retail-media-optimization-at-quartile-e1a4966bd684) — plus [the coSTAR pattern for shipping agents fast without breaking things](https://www.databricks.com/blog/costar-how-we-ship-ai-agents-databricks-fast-without-breaking-things).
- [how agentic software development will change databases](https://www.databricks.com/blog/how-agentic-software-development-will-change-databases) — agentic coding changes infrastructure requirements; "every service will have these capabilities over time." Read this next to your agentic-DMS notes.
- [Robin Moffatt: evaluating Claude's dbt skills — building an eval from scratch](https://rmoff.net/2026/03/13/evaluating-claudes-dbt-skills-building-an-eval-from-scratch/) — the craft of judging an AI data engineer; directly reusable for your own agent evals.
- Context: [InfoQ's 2025 AI, ML and data engineering trends report](https://www.infoq.com/articles/oil-water-moment-ai-architecture/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) · [Databricks' first student-fellow cohort for agentic AI](https://airtable.com/appasC90KmqZ5x1t5/pag6tvR9VUG4Kf1iM/form).

## Learning the craft

The credential-and-curriculum shelf — mostly pre-AI fundamentals, which is what makes it durable.

- [the data engineering handbook](https://github.com/DataExpert-io/data-engineer-handbook) — "super helpful": certifications, courses, communities, whitepapers, podcasts, all in one repo.
- [the official Databricks data engineer learning path](https://github.com/databricks-academy/data-engineer-learning-path).
- Zach Wilson's DataExpert material, three ways: [the LLM-driven data engineering lecture](https://www.dataexpert.io/course/large-language-models-day-1-lecture) with [its hands-on lab](https://www.dataexpert.io/course/large-language-models-day-1-lab) (free, ~2 hours), and the scale stories — [processing 2,000 TB/day at Netflix with Spark and Airflow](https://www.youtube.com/watch?v=g23GHqJje40) · [data lake modeling at Airbnb: 100 TB into 5 TB with Parquet and run-length encoding](https://www.youtube.com/watch?app=desktop&v=7JbCVXmJ1bs&feature=youtu.be).
- [Real Python on what a data engineer actually is](https://realpython.com/python-data-engineer/) — saved with an admission of "throwing around the term without fully grasping the domain." Honest starting points age well.
- [the Google Professional Data Engineer certification guide](https://www.whizlabs.com/blog/google-professional-data-engineer-a-complete-guide/?utm_source=dlvr.it&utm_medium=twitter) — the cert path from your cloud-credential era.
- The GenAI upgrade path: [Generative AI for Data Engineers (Coursera specialization)](https://www.coursera.org/specializations/generative-ai-for-data-engineers?irclickid=&irgwc=1&afsrc=1&utm_medium=partners&utm_source=impact&utm_campaign=2840738&utm_content=b2c&utm_campaignid=samuelwong&utm_term=14726_SI_1164545_) · [Databricks' Generative AI Fundamentals videos](https://www.databricks.com/learn/training/generative-ai-fundamentals-accreditation) · [free courses spanning data engineering to LLMOps](https://www.kdnuggets.com/collection-of-free-courses-to-learn-data-science-data-engineering-machine-learning-mlops-and-llmops).
- Small but useful: [a lightweight ETL pipeline with Airtable and Python](https://www.kdnuggets.com/how-to-build-a-lightweight-data-pipeline-with-airtable-and-python) (free tier only) · [the Databricks real-life ML examples ebook](https://www.kdnuggets.com/2018/11/databricks-ebook-machine-learning-use-cases.html) — the 2018 ancestor of everything above.

---

## All links on this topic
