---
title: "RAG"
topic: "rag"
draft: false
generated: "2026-07-05"
sources: "674 tagged links, curated from the 180 most recent (2024\u20132026)"
---

**674 saved links**, concentrated in 2024–2025 — the corpus captures RAG's arc from hot new pattern to mature engineering discipline, and the 2026 saves show the conversation shifting toward *context engineering* as the umbrella term. Worth noting: this wiki itself is a retrieval system over your knowledge — the techniques on this page apply directly to the thing you're building.

**Related:** [AI Agents](/wiki/ai-agents/) · [LLMs](/wiki/llms/) · Azure · Data Science

---

## Start here

- [A Complete Guide to RAG in 2026](https://interviewready.io/blog/a-complete-guide-to-retrieval-augmented-generation-in-2026) — the current-state overview.
- [By-hand lecture slides: RAG, vector databases, agents](https://www.byhand.ai/p/beginners-guide-to-rag-upcoming) — visual, beginner-friendly, downloadable.
- [Mastering RAG: ~200-page guide to enterprise-grade systems](https://galileo.ai/mastering-rag).
- [Weaviate's free RAG book](https://weaviate.io/ebooks/advanced-rag-techniques) — written by their DevRel team.
- [Jason Liu: building a terrible RAG system is easy](https://jxnl.co/writing/2024/01/07/inverted-thinking-rag/) — the anti-patterns; read this before building anything.
- [@bclavie's lecture — "best explanation of how to do RAG right"](https://parlance-labs.com/education/rag/ben.html) (your own note says so).

## Fundamentals: embeddings & vector search

- [LLM Embeddings Explained: visual and intuitive guide](https://huggingface.co/spaces/hesamation/primer-llm-embedding?section=word2vec) — you saved this twice, months apart; it's that good.
- [Embeddings are underrated](https://technicalwriting.dev/data/embeddings.html) — the case for embeddings beyond RAG.
- [6 embedding types and when to use them](https://docs.weaviate.io/weaviate/search/bm25) — sparse vs. dense vs. late-interaction.
- [The Hitchhiker's Guide to Vector Search](https://qdrant.tech/blog/hitchhikers-guide/) and [Vector Databases Explained in 3 Levels of Difficulty](https://machinelearningmastery.com/vector-databases-explained-in-3-levels-of-difficulty/).
- [Sinusoidal positional encoding and RoPE explainer](https://fleetwood.dev/posts/you-could-have-designed-SOTA-positional-encoding) — the layer below embeddings.
- [Qdrant Academy](https://qdrant.tech/blog/qdrant-academy-launch/) — interactive vector-search courses.

## Retrieval quality: the techniques that matter

The consistent message across your saves: **nail retrieval first, generation follows.**

- [Jason Liu: RAG isn't about better generation — nail retrieval](https://jxnl.co/writing/2024/08/19/rag-flywheel/) and [six low-hanging fruits RAG search leaves on the table](https://jxnl.co/writing/2024/05/11/low-hanging-fruit-for-rag-search/).
- **Chunking:** [Chunking Strategies for RAG](https://www.dailydoseofds.com/p/5-chunking-strategies-for-rag/) · [chunking mechanics: accuracy, context, speed](https://www.premai.io/blog/chunking-strategies-in-retrieval-augmented-generation-rag-systems/) · [the "lost context problem"](https://isaacflath.com/writing/how-i-built-my-website) — why naive chunking breaks multi-hop questions.
- **Reranking:** [Fowler/Subramaniam: the Reranker pattern](https://martinfowler.com/articles/gen-ai-patterns/#reranker) · [hybrid search + reranking with LanceDB](https://www.youtube.com/watch?si=-FFIwFuESRdRvgCz&v=aJ4xVx1zkaY&feature=youtu.be) · [LLM-labeler to fine-tune a fast reranker](https://python.useinstructor.com/blog/2024/10/23/building-an-llm-based-reranker-for-your-rag-pipeline/).
- **Advanced:** [hierarchical indices](https://medium.com/@nirdiamant21/hierarchical-indices-enhancing-rag-systems-43c06330c085) · [9 techniques to boost RAG](https://towardsdatascience.com/9-effective-techniques-to-boost-retrieval-augmented-generation-rag-systems-210ace375049) · [Hamel: late interaction models](https://hamel.dev/notes/llm/rag/p4_late_interaction.html) · [RAFT: retrieval-augmented fine-tuning](https://towardsdatascience.com/how-to-make-your-llm-more-accurate-with-rag-fine-tuning/) · [embedding fine-tuning guide with LangSmith + RAGAS](https://github.com/apatti/AIEBootcamp/blob/main/09_Finetuning_Embeddings/Fine_tuning_Embedding_Models_for_RAG_using_RAGAS.ipynb).

## GraphRAG & knowledge graphs

Your second-densest RAG sub-topic — retrieval over structure instead of similarity.

- [How GraphRAG Works Step-by-Step](https://medium.com/@mariana200196/how-microsofts-graphrag-works-step-by-step-b15cada5c209) — start here.
- [Graph RAG by Example](https://datastax.medium.com/graph-rag-by-example-b071bdab2aaa) and [building a Graph RAG system step by step](https://machinelearningmastery.com/building-graph-rag-system-step-by-step-approach/).
- [Building knowledge graphs with LLM Graph Transformer](https://towardsdatascience.com/building-knowledge-graphs-with-llm-graph-transformer-a91045c49b59) · [from unstructured text to interactive knowledge graphs](https://robert-mcdermott.medium.com/from-unstructured-text-to-interactive-knowledge-graphs-using-llms-dd02a1f71cd6).
- [The quest for production-quality Graph RAG](https://towardsdatascience.com/the-quest-for-production-quality-graph-rag-easy-to-start-hard-to-finish-46ca404cee3d) — the honest difficulty assessment.
- [Guido van Rossum's "structured RAG" package](https://github.com/microsoft/fara) — LLM-extracted entities at ingestion instead of embeddings-only.
- [PIKE-RAG (Microsoft): specialized knowledge & rationale augmentation](https://huggingface.co/papers/2501.11551).
- [AI agents with Google Gen AI Toolbox + Neo4j](https://medium.com/neo4j/building-ai-agents-with-the-google-gen-ai-toolbox-and-neo4j-knowledge-graphs-86526659b46a).

## Agentic RAG

Where your two biggest AI topics meet: retrieval as a tool the agent wields, iteratively.

- [Agentic RAG: the survey](https://arxiv.org/abs/2501.09136) — architectures and taxonomy.
- [Building Agentic RAG Systems](https://www.youtube.com/watch?si=HrpUhJ7LUxxUIZkj&v=AOSjiXP1jmQ&feature=youtu.be) (video) and [a full course on agentic RAG](https://github.com/decodingai-magazine/second-brain-ai-assistant-course/).
- [AUTO-RAG: autonomous iterative retrieval](https://arxiv.org/abs/2401.05566) — the LLM decides when to retrieve again.
- [Beyond RAG: agent search with LangGraph](https://blog.langchain.dev/beyond-rag-implementing-agent-search-with-langgraph-for-smarter-knowledge-retrieval/?s=09).
- [Agentic RAG + MCP servers: implementation guide](https://becomingahacker.org/integrating-agentic-rag-with-mcp-servers-technical-implementation-guide-1aba8fd4e442).
- ["Is context engineering the new RAG?"](https://www.youtube.com/watch?v=wGpJdn8frYE&list=PLLasX02E8BPBCP7KdYsjKKFFQUmNEUmE9&index=2) — the framing shift, from Microsoft's Foundry IQ team.

## Evaluation

- [Hamel: modern IR evals for RAG](https://hamel.dev/notes/llm/rag/p2-evals.html) — how to measure retrieval, not vibes.
- [Auto-creating a RAG eval dataset from your documents](https://towardsdatascience.com/how-to-create-a-rag-evaluation-dataset-from-documents-140daa3cbe71).
- [open-rag-eval](https://github.com/vectara/open-rag-eval) — scalable RAG evaluation, LangChain connector.
- [Hallucination detection techniques](https://machinelearningmastery.com/rag-hallucination-detection-techniques/) and [evaluating modular RAG with reasoning models](https://www.kapa.ai/blog/evaluating-modular-rag-with-reasoning-models).
- [RAG vs. Agent+RAG evaluation with TruLens](https://towardsdatascience.com/from-retrieval-to-intelligence-exploring-rag-agent-rag-and-evaluation-with-trulens-3c518af836ce).

## RAG on Azure

The biggest platform cluster in your RAG saves — your Azure depth applied.

- [Implementing agentic RAG on Azure](https://pub.towardsai.net/implementing-agentic-rag-on-azure-from-hand-coded-code-to-ready-to-use-solutions-e8aa3c3d6c17) and [agentic RAG with Semantic Kernel + Azure AI Search](https://medium.com/data-science-collective/step-by-step-guide-on-building-agentic-rag-with-microsoft-semantic-kernel-and-azure-ai-search-3dcee5bf38ba).
- [Build a RAG agent with Azure AI Agent Service SDK](https://thenewstack.io/tutorial-build-a-rag-agent-with-azure-ai-agent-service-sdk/) (Janakiram MSV).
- [Azure AI Search + Docling for document ingestion](https://ds4sd.github.io/docling/examples/rag_azuresearch/).
- [the official Azure AI Search RAG tutorial notebook](https://github.com/Azure-Samples/azure-search-python-samples/blob/main/Tutorial-RAG/Tutorial-rag.ipynb).
- Cosmos DB series: [movie chatbot with vector search + semantic cache](https://github.com/AzureCosmosDB/cosmosdb-agent-kit) · [NoSQL + vector search + Azure OpenAI in Python](https://github.com/AzureCosmosDB/Azure-OpenAI-Python-Developer-Guide/blob/main/diskann/00_Introduction/README.md) · [Cosmos embeddings generator](https://github.com/AzureCosmosDB/cosmos-embeddings-generator).
- [Simple RAG using SQL Server and OpenAI](https://jasonhaley.com/2024/02/07/simple-rag-sql-openai/) · [automating RAG indexing with Logic Apps](https://azure.github.io/logicapps-labs/docs/ai-workloads-on-logicapps/automate-rag-indexing).

## Case studies & patterns

- **Uber Genie** (your best real-world RAG story): [RAG copilot saved Uber 13,000 engineering hours](https://www.infoq.com/news/2026/02/evals-agent-interop/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=dotnet) · [Genie: the on-call copilot](https://www.infoq.com/news/2026/02/google-documentation-ai-agents/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) · [how it was built — LangGraph, Qdrant, Gemini, Ragas](https://github.com/lucifertrj/case-study-series).
- [Fowler/Subramaniam: GenAI patterns series](https://martinfowler.com/articles/gen-ai-patterns/#rag) — RAG as an architecture pattern, including [what lies beyond RAG](https://martinfowler.com/articles/structured-prompt-driven/).
- [Context-Augmented Generation: enterprise refinement of RAG](https://www.infoq.com/articles/beyond-rag-context-aware/?utm_source=twitter&utm_medium=link&utm_campaign=calendar).
- **Permissions** (the enterprise gotcha): [RAG without leaking sensitive data — OpenFGA + LangChain](https://auth0.com/blog/building-a-secure-rag-with-python-langchain-and-openfga/#Proposed-Solution--Secure-Retrieval-with-LangChain--OpenAI--and-OpenFGA) · [users should only see results from documents they can access](https://workos.com/blog/enterprise-ai-agent-playbook-what-anthropic-and-openai-reveal-about-building-production-ready-systems).

## The "RAG is dead?" debate

- [RAG isn't dead — but vectorstore-as-default might be](https://rlancemartin.github.io/2025/04/03/vibe-code/).
- [Why RAG is still relevant](https://towardsdatascience.com/why-retrieval-augmented-generation-is-still-relevant-in-the-era-of-long-context-language-models-e36f509abac5) — costs and hallucination control.
- ["RAG is not really a solution"](https://community.openai.com/t/rag-is-not-really-a-solution/599291) — the strongest counter-argument you saved.
- [Jason Liu: predictions for the future of RAG](https://jxnl.co/writing/2025/03/18/version-control-for-the-vibe-coder-part-1/).

---

## All links on this topic
