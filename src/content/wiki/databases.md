---
title: "Databases"
topic: "databases"
draft: false
generated: "2026-07-07"
sources: "390 tagged links, curated from the ~150 most recent (2024\u20132026)"
---

**390 saved links**, 2017–2026 (peak: 2024). Two collections wearing one tag: the timeless shelf — CMU lectures, B-tree explainers, Postgres-scaling war stories — and the AI-era overlay that exploded in 2024, when every database grew a vector column and every LLM learned SQL. Your 2026 saves mark the third act: agents as first-class database clients, and the question of what happens to a system designed for predictable queries when the queries stop being predictable.

**Related:** [Data Engineering](/wiki/data-engineering/) · [RAG](/wiki/rag/) · [Azure](/wiki/azure/) · [System Design & Architecture](/wiki/system-design-and-architecture/) · [SRE & Observability](/wiki/sre-and-observability/)

---

## How databases actually work — the canon

- [CMU 15-445: Intro to Database Systems](https://www.youtube.com/playlist?list=PLSE8ODhjZXjYDBpQnSymaectKjxCy6BYq) — "stop memorizing DB concepts, start understanding how databases actually work"; the save calls it pure gold, and it is.
- [CMU 15-721: Advanced Database Systems](https://15721.courses.cs.cmu.edu/spring2024/) — the sequel, for after 15-445.
- [MIT 6.824: Distributed Systems](https://pdos.csail.mit.edu/6.824/schedule.html) — the reading list and lectures, the natural next door for a backend/infra person.
- [Things I Wished More Developers Knew About Databases](https://rakyll.medium.com/things-i-wished-more-developers-knew-about-databases-2d0178464f78) (rakyll) — years old, still the best checklist of hard-won truths.
- [B-trees and database indexes](https://planetscale.com/blog/btrees-and-database-indexes) — "the best explainer on b-trees that you are going to get."
- [Phil Eaton: a write-ahead log is not a universal part of durability](https://notes.eatonphil.com/2024-07-01-a-write-ahead-log-is-not-a-universal-part-of-durability.html) — internals in a highly digestible format.
- [Asianometry: The Birth of SQL & the Relational Database](https://www.youtube.com/watch?si=JTx3n-RHTLCPGUZg&v=z8L202FlmD4&feature=youtu.be) — the history lesson, fish pun included.

## The agent era — when AI becomes the database client

The freshest thread in the tag, and the one closest to where you're heading.

- **The contract shift:** [Arpit Bhayani: defensive databases](https://arpitbhayani.me/blogs/defensive-databases) — "have agents broken the unspoken contract we had with our databases?" · [Databricks: how agentic software development will change databases](https://www.databricks.com/blog/how-agentic-software-development-will-change-databases) — every service will grow these capabilities.
- **Agent-ready guardrails:** [Supabase's postgres-best-practices](https://supabase.com/blog/postgres-best-practices-for-ai-agents) — Agent Skills for performance, security, and schema design, react-best-practices style · [Seroter: one prompt to design a multi-tenant SaaS billing schema](https://seroter.com/2026/01/20/beyond-web-apps-designing-database-with-google-antigravity/) — "so easy, it's almost embarrassing."
- **MCP plumbing:** [the Spanner MCP server codelab](https://codelabs.developers.google.com/spanner-mcp-server?linkId=60799823#0?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy26q1-googlecloudtech-blog-ai-in_feed-no-brand-global&utm_content=-&utm_term=-) · [MCP Toolbox for Databases](https://cloud.google.com/blog/topics/developers-practitioners/level-up-your-agents-announcing-googles-official-skills-repository?e=48754805?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy26q2-googlecloudtech-blog-ai-in_feed-no-brand-global&utm_content=-&utm_term=-&linkId=61562052&linkId=61630058) · [Gen AI Toolbox for Databases](https://cloud.google.com/blog/products/ai-machine-learning/announcing-gen-ai-toolbox-for-databases-get-started-today) — Google's open-source path from agent to production database.
- **NL2SQL, done carefully:** [a multi-agent SQL assistant with human-in-loop checkpoints and cost control](https://towardsdatascience.com/a-multi-agent-sql-assistant-you-can-trust-with-human-in-loop-checkpoint-llm-cost-control/) — trust as a design feature · [embedding trust into text-to-SQL agents](https://towardsdatascience.com/embedding-trust-into-text-to-sql-ai-agents-3f15d0ddaf1a) · [the LangGraph SQL agent tutorial](https://langchain-ai.github.io/langgraph/tutorials/sql-agent/).
- **NL2SQL, everywhere:** [plain-English queries over Cosmos DB with MCP + Semantic Kernel](https://medium.com/@sainitesh/natural-language-queries-for-azure-cosmos-db-with-mcp-semantic-kernel-azure-openai-4ae89607aee8) · [an analytics agent on LangChain + DuckDB, no SQL written](https://towardsdatascience.com/how-to-build-an-ai-agent-for-data-analytics-without-writing-sql-eba811115c1f) · [an LLM SQL agent for SAP HANA](https://medium.com/@purankhoeval/discover-the-power-of-llm-based-sql-agent-for-sap-hana-queries-4c97343f69e2) · [natural-language Postgres — try it yourself](https://natural-language-postgres.vercel.app/) · [SkyRL-SQL: RL-training a text-to-SQL model](https://novasky-ai.notion.site/skyrl-sql) · [LLMs are getting better at SQL](https://datamonkeysite.com/2025/03/07/llms-are-getting-better-at-sql/).

## Vector databases — the 2024 gold rush

The peak-year story: embeddings arrived and the database world reorganized around them.

- [Vector databases explained in 3 levels of difficulty](https://towardsdatascience.com/explaining-vector-databases-in-3-levels-of-difficulty-fc392e48ab78?sk=6453eeaebddb3587ed1f78ecc0dc474a) — Leonie Monigatti's classic; you saved [the 2026 remix](https://machinelearningmastery.com/vector-databases-explained-in-3-levels-of-difficulty/) too.
- [calculating a vector database by hand](https://www.byhand.ai/p/14-can-you-calculate-a-vector-database) — the author made it to show his son that high-school cosine "is what powers vector search"; part of [the by-hand RAG / vector DB / agents slide series](https://www.byhand.ai/p/beginners-guide-to-rag-upcoming).
- [Cassie Kozyrkov: embeddings, vector search, k-NN, ANN](https://kozyrkov.medium.com/what-are-embeddings-vector-databases-vector-search-k-nn-ann-9eb35f715c94) — the vocabulary in one pass.
- [Weaviate: what is a vector database?](https://weaviate.io/blog/what-are-agentic-workflows) · [the Getting Started with Vector Databases refcard](https://dzone.com/refcardz/getting-started-with-agentic-ai) · [vector databases in AI and LLM use cases](https://www.kdnuggets.com/vector-databases-in-ai-and-llm-use-cases).
- [Pinecone's RAG pipeline design questionnaire](https://www.pinecone.io/learn/retrieval-augmented-generation/) — storage, embedding models, chunking, personalized.
- [Information Retrieval flashcards](https://gist.github.com/intellectronica/53850c967307dad6bde0f058be3746be) — 37 things learned in two years at a vector database company, as spaced repetition.

## Postgres & the SQL workbench

- [lessons from 5 years of scaling PostgreSQL](https://onesignal.com/blog/lessons-learned-from-5-years-of-scaling-postgresql/#bloat) — bloat, upgrades, XID wraparound ("do you monitor this?").
- [a RAG app in Python with just Postgres and pgvector](https://www.enterprisedb.com/blog/rag-app-postgres-and-pgvector) · [even simpler with pg_vectorize](https://bonesmoses.org/2024/pg-phriday-brand-new-rag/) · [an autonomous agent on pgvector + LangChain](https://www.yugabyte.com/blog/build-autonomous-ai-agent-with-langchain-and-postgresql-pgvector/) — the "Postgres is your vector database" caucus.
- [postgres.new — in-browser Postgres with AI schema help](https://postgres.new/) and [postgres.ai — ask it to visualize your DB schema](https://postgres.ai/).
- [Datadog's free SQL execution-plan visualizer](https://explain.datadoghq.com/) — paste a plan, spot the missing index · [Database Monitoring index recommendations](https://www.datadoghq.com/blog/database-monitoring-index-recommendations/) — the observability angle you already speak.
- [drawDB](https://www.drawdb.app/) — diagram editor and SQL generator ([the repo](https://github.com/drawdb-io/drawdb)).
- [Advent of SQL](https://databaseschool.com/series/advent-of-sql/videos/308) — free challenges with in-browser playgrounds · [advanced SQL for data science](https://towardsdatascience.com/advanced-sql-for-data-science-43a045ae4143).
- The SQLite corner, via Simon Willison: [SQLite as a production Rails backend](https://simonwillison.net/2024/Oct/16/sqlite-rails/) and [Cloudflare's SQLite-backed Durable Objects](https://simonwillison.net/2024/Oct/13/zero-latency-sqlite-storage-in-every-durable-object/) — thousands of tiny databases as an architecture.

## The Azure cluster — Cosmos DB and Azure SQL go AI

Your platform depth, applied — the densest vendor thread in the tag.

- [building AI agents with vector search in Cosmos DB](https://medium.com/@sainitesh/building-ai-agents-with-vector-databases-in-azure-cosmos-db-fa952f9d883f) · [the Cosmos DB + Azure OpenAI Python developer guide (DiskANN)](https://github.com/AzureCosmosDB/Azure-OpenAI-Python-Developer-Guide/blob/main/diskann/00_Introduction/README.md) · [the RAG chatbot quickstart notebook](https://github.com/microsoft/AzureDataRetrievalAugmentedGenerationSamples/blob/main/Python/CosmosDB-NoSQL_VectorSearch/CosmosDB-NoSQL-Quickstart-RAG-Chatbot.ipynb) · [Cosmos DB Python getting-started](https://github.com/Azure-Samples/claude#readme).
- [native vector support in Azure SQL + Azure OpenAI](https://medium.com/@lawrenceteixeira/integrating-azure-openai-with-native-vector-support-in-azure-sql-databases-for-advanced-search-ff700b907b7a) · [the Azure SQL "cryptozoology" AI embeddings lab](https://github.com/AzureSQLDB/azure-sql-cryptozoology-ai-embeddings-lab) — vector search practice with monster data.
- [choosing the right Azure vector database](https://medium.com/@mjtpena/choosing-the-right-azure-vector-database-d62a64f30e68) — the decision guide for the overwhelming landscape.
- [Vectors, AI, Agents: how AI changes database interaction](https://www.youtube.com/watch?v=Uddhx8Bu2ZM&list=PLI7iePan8aH5QPlBVaaJ8mIbXYwfX7XL2&index=9) — agents generating T-SQL with reasoning and guardrails.
- [10 free Azure SQL databases per subscription](https://www.youtube.com/watch?v=oHH9onH8Lao) — the zero-cost lab bench.
- [the VS Code SQL Server extension](https://github.com/microsoft/AI-Engineering-Coach) · [Fabric database mirroring for Cosmos DB](https://www.sqlservercentral.com/articles/how-to-set-up-microsoft-fabric-database-mirroring-for-azure-cosmos-db).

## Graphs & ontologies — structure over similarity

- [Ontology and graph databases: the missing link in enterprise AI](https://nebula-graph.io/posts/ontology-and-graph-databases-the-missing-link-in-enterprise-ai) and [part 2: from theory to production reality](https://nebula-graph.io/posts/ontology-and-graph-databases-enterprise-ai-from-theory-to-production-reality) — your most recent saves in the tag, and squarely on the Enterprise AI Architect beat.
- [everything you need to know about graph databases (Neo4j)](https://towardsdatascience.com/everything-you-need-to-know-about-graph-databases-neo4j-b9154f57dad0) — the concepts primer.
- [turning a relational database into a graph database with LLMs](https://towardsdatascience.com/turning-your-relational-database-into-a-graph-database-c4cee3d5c6d2).
- [knowledge graph vs. vector database — which to choose](https://www.falkordb.com/blog/knowledge-graph-vs-vector-database/) — the fork in the retrieval road.
- [GQL is now an ISO standard](https://www.iso.org/standard/76120.html) — graph databases got their SQL moment, from the same committee.
- [building a huge graph database at Netflix](https://blog.dataexpert.io/p/how-i-built-a-huge-graph-database) — 40 vertex types, 50 edge types · [LIquid: LinkedIn's large-scale relational graph database](https://www.infoq.com/presentations/liquid-graph/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=ai-ml-data-eng).

## Production war stories

The section that keeps your DevOps instincts fed.

- [Uber upgrades its MySQL fleet to 8.0](https://www.uber.com/GB/en/blog/upgrading-ubers-mysql-fleet/) vs. [GitHub does the same, differently](https://github.blog/engineering/upgrading-github-com-to-mysql-8-0/) — you saved them as a pair; read them as one.
- [the Screener.in outage: a DELETE of 60M rows saturated disk I/O for 8+ hours](https://fully-faltoo.com/p/mysql-delete/) — the cheapest database lesson is someone else's.
- [Pinterest's new wide-column database on RocksDB](https://medium.com/pinterest-engineering/an-engineers-guide-to-better-ai-skills-implementing-a-testing-process-to-optimize-agent-a000c9c9abcd) — build-vs-buy at scale.
- [TigerBeetle: the fastest and safest database](https://www.youtube.com/watch?v=sC1B3d9C_sI) — the talk that "set a HUGE standard."
- [Garnet](https://github.com/microsoft/azure-skills/) — Microsoft's Redis alternative, saved the week Redis changed its license.
- [how the Spanner team does chaos testing](https://cloud.google.com/blog/products/databases/chaos-testing-spanner-improves-reiliability/) · [end-to-end tracing in Spanner](https://docs.cloud.google.com/spanner/docs/set-up-tracing#configure-end-to-end-tracing) — reliability engineering inside the database.
- [Novo Nordisk: 12 weeks to 10 minutes with a MongoDB + LangChain RAG system](https://www.mongodb.com/solutions/customer-case-studies/novo-nordisk) — the enterprise case study.

---

## All links on this topic
