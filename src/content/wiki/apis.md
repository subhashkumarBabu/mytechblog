---
title: "APIs"
topic: "api"
draft: false
generated: "2026-07-07"
sources: "347 tagged links, curated from the ~150 most recent (2024\u20132026)"
---

**347 saved links**, 2017–2026 (peak: 2023). This tag's biography mirrors your own: it opens with REST endpoint design, Azure API Management, and serverless APIs from the DevOps years — then in 2023 the word "API" quietly changes meaning to *model endpoint*, and developers.openai.com becomes a top source. The newest saves complete the arc: you're no longer just designing APIs for humans, you're designing them for agents — MCP servers, function-calling schemas, and gateways that govern what a model is allowed to touch.

**Related:** [System Design & Architecture](/wiki/system-design-and-architecture/) · [AI Agents](/wiki/ai-agents/) · [LLMs](/wiki/llms/) · [Azure](/wiki/azure/) · [Security](/wiki/security/)

---

## API design — the classics

The pre-LLM canon. Everything here still applies; the consumers just got stranger.

- [How to (and how not to) design REST APIs](https://github.com/stickfigure/blog/wiki/How-to-(and-how-not-to)-design-REST-APIs) — your note: "overall a very reasonable set of guidelines," even if you weren't buying strings-for-all-IDs.
- [How Slack designs its APIs](https://slack.engineering/how-we-design-our-apis-at-slack/) — saved with the principle "I listen to API design guidance from those with good ecosystems."
- [Zalando's RESTful API guidelines](https://github.com/zalando/restful-api-guidelines) — the enterprise-grade rulebook, still worth saving in 2025.
- [Kelsey Hightower on producing elite API design](https://www.youtube.com/watch?v=-UqYC_vNfFM&feature=youtu.be) (video) — "loads of advice for design in general."
- [REST API best practices and endpoint design](https://www.freecodecamp.org/news/mac-control-keyboard-shortcuts-hotkeys-that-work-everywhere-in-macos/) · [The Art of Writing Amazing REST APIs](https://jkebertz.medium.com/the-art-of-writing-amazing-rest-apis-dc4c4100478d) · [the REST design cheat sheet](https://blog.devgenius.io/best-practice-and-cheat-sheet-for-rest-api-design-6a6e12dfa89f).
- [A complete guide to the API-first approach](https://itnext.io/a-complete-guide-to-the-api-first-approach-ecd796dd0f10?utm_content=bufferd6923&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer) and [API architectural styles](https://devaraj-durairaj.medium.com/api-architectural-styles-c16237d981ec) — the strategy layer.
- [Mastering API Architecture](https://www.oreilly.com/library/view/linux-and-open/9781098178284/) (O'Reilly) — saved the day the authors finished writing it.

## Beyond REST — GraphQL, gRPC, webhooks

- [How Netflix migrated to GraphQL safely](https://netflixtechblog.com/migrating-netflix-to-graphql-safely-8e1e4d4f1e72) — the migration case study.
- [Uber's chat architecture on GraphQL subscriptions](https://www.infoq.com/news/2024/03/uber-chat-graphql-subscriptions/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) — reliability and scale as the drivers.
- [the gRPC introduction](https://grpc.io/docs/what-is-grpc/introduction/) — "gRPC has one of the coolest documentation on their website."
- [State of Webhooks 2023](https://www.svix.com/blog/state-of-webhooks-2023/?utm_source=newsletter&utm_medium=sponsorship&utm_campaign=architecture_notes) — 83% of API providers ship webhooks; most skip the best practices.
- [paste an entire GraphQL schema into Claude and ask for queries](https://github.com/simonw/graphql-scraper/blob/main/flyctl/fly.graphql) — Simon Willison, 2024; the moment the two halves of this tag met.

## The LLM API era

Where the tag pivoted. The Responses API migration is your most-tracked storyline.

- [Simon Willison: Responses API vs Chat Completions](https://simonwillison.net/2025/Mar/11/responses-vs-chat-completions/) — the launch-day analysis, and [the Latent Space interview on OpenAI's Agents Platform](https://www.latent.space/p/openai-agents-platform) — the whole API suite refreshed "for the year of Agents."
- [new tools in the Responses API](https://openai.com/index/new-tools-and-features-in-the-responses-api/) — o3/o4-mini calling tools inside their chain-of-thought; [PDF file inputs](https://developers.openai.com/api/docs/guides/file-inputs) landed the same season.
- [the Chat Completions → Responses migration kit](https://github.com/Azure-Samples/azure-openai-to-responses) and [the ported azure-search-openai-demo](https://github.com/Azure-Samples/azure-search-openai-demo/releases/tag/2026-04-10) — when the samples repos migrated, you saved the receipts.
- [OpenAI's function-calling guide](https://developers.openai.com/api/docs/guides/function-calling) · [function calling crash course](https://www.youtube.com/watch?v=p0I-hwZSWMs&feature=youtu.be) (video) · [function calling with the Gemini API](https://ai.google.dev/gemini-api/docs/function-calling).
- [how streaming LLM APIs actually work](https://til.simonwillison.net/llms/streaming-llm-apis) — Willison dissects OpenAI, Anthropic, and Gemini streaming; [the Batch API's 50%-off deal](https://platform.openai.com/docs/api-reference/batch/requestInput) for anything that can wait 24 hours.
- Anthropic: [API fundamentals course](https://anthropic.skilljar.com/anthropic-api-fundamentals) · [the Claude API development guide](https://www.anthropic.com/learn/build-with-claude) · [notes on the Citations API](https://simonwillison.net/2025/Jan/24/anthropics-new-citations-api/) — interesting precisely because you build RAG.
- Gemini: [the Gemini API cookbook](https://github.com/google-gemini/cookbook) · [function calling plus built-in tools in a single call](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tooling-updates/) ("This simplifies a few of my own agents") · [Gemini Skills](https://github.com/google-gemini/gemini-skills).
- The honest counterweight: [FineTuneBench — commercial fine-tuning APIs mostly don't teach models new facts](https://arxiv.org/abs/2412.17149).

## MCP & agent-facing APIs

The current frontier: APIs whose primary consumer is a model. This is the layer your architect thinking lives in.

- [MCP vs APIs: when to use which for agent development](https://www.tinybird.co/blog/mcp-vs-apis-when-to-use-which-for-ai-agent-development) — saved with your own field report: "I'm using both techniques for an agent I've built, and see reasons to use APIs directly."
- [MCP vs APIs: the new standard for AI integration](https://medium.com/@tahirbalarabe2/model-context-protocol-mcp-vs-apis-the-new-standard-for-ai-integration-d6b9a7665ea7) — the framing piece; [OpenMCP — convert web APIs into MCP servers](https://github.com/boltmcp/boltmcp) for the conversion path.
- [building MCP servers for ChatGPT and API integrations](https://developers.openai.com/api/docs/guides/prompt-guidance) · [the Responses API MCP tool guide](https://developers.openai.com/cookbook/examples/mcp/mcp_tool_guide).
- [Vercel's agent-friendly APIs course](https://vercel.com/academy/agent-friendly-apis) — build an API, document it for agents; "finally, someone is reading the docs."
- [giving ADK an OpenAPI tool](https://medium.com/google-cloud/antigravity-managed-agents-tutorial-ship-production-ai-agents-b5917844932b) — "giving an AI an API as a 'tool' is a fairly powerful pattern. Heck, that's basically what MCP is."
- [Google's Developer Knowledge API + MCP server](https://www.infoq.com/news/2026/02/google-documentation-ai-agents/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) — a programmatic source of truth so LLMs stop citing stale docs.
- [Agents, APIs, and the Next Layer of the Internet](https://towardsdatascience.com/agents-apis-and-the-next-layer-of-the-internet/) — the big-picture essay.
- [9 tips for reducing API latency in agentic systems](https://nordicapis.com/9-tips-for-reducing-api-latency-in-agentic-ai-systems/) — ops discipline applied to agents.
- Two grounding shots: [multi-agent AI is the new microservices](https://www.infoworld.com/article/4154335/multi-agent-ai-is-the-new-microservices.html) — "not everything should be an agent. Write a script. Keep that API." — and [a coding agent is a while loop, an API call, and a few Python functions](https://realpython.com/social/link/5a22f453-bb33-415e-a093-c1bc4efd3d5b).

## Gateways, governance & security

The classic APIM thread evolving into AI-gateway architecture — arguably this tag's most career-relevant seam.

- [an enterprise AI gateway with Azure API Management + AI Foundry](https://medium.com/@17nagh/building-an-enterprise-ai-gateway-with-azure-api-management-and-azure-ai-foundry-504e1d5e6e97) and [a Foundry agent harness: tool governance on Azure API Gateway](https://levelup.gitconnected.com/designing-a-foundry-agent-harness-a-tool-governance-architecture-based-on-azure-api-gateway-ac86eb23acbd) — the 2026 pattern: the gateway as the agent's policy layer.
- [the busy platform engineer's guide to API gateways](https://speakerdeck.com/danielbryantuk/gotoams-the-busy-platform-engineers-guide-to-api-gateways) — treat the gateway as a product; [choosing an API gateway for microservices](https://www.atatus.com/blog/a-guide-for-choosing-the-best-api-gateway/#:~:text=Kong%20gateway%20is%20the%20perfect,SSL,%20or%20by%20using%20WebSockets).
- [load balancer vs reverse proxy vs API gateway](https://medium.com/geekculture/load-balancer-vs-reverse-proxy-vs-api-gateway-e9ec5809180c) — saved with a dissent: "(I don't agree with the definition of each)."
- [APIOps + IaC reshaped an API strategy](https://www.infoq.com/articles/agent-assisted-intelligent-observability/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) — taking developers out of the portal.
- [awesome-api-security](https://github.com/arainho/awesome-api-security) — the tools-and-resources list.
- [how Google AI Studio proxies Gemini API requests](https://glaforge.dev/posts/2026/02/09/decoded-how-google-ai-studio-securely-proxies-gemini-api-requests/) — so your key doesn't ship in client-side code; the API-key hygiene lesson.
- The Azure APIM heritage: [an APIM sinkhole with App Gateway + Terraform](https://luke.geek.nz/azure/mcp-acs-email-integration/) · [APIM with developer portal via Azure DevOps CI/CD](https://dev.to/markusmeyer13/how-to-create-an-azure-api-management-service-with-developer-portal-with-cicd-using-azure-devops-3360) · [MuleSoft Flex Gateway + LLMs for governed API intelligence](https://medium.com/@mhraza.tech2/unlocking-api-intelligence-exploring-mulesoft-flex-gateway-and-large-language-models-integration-dc6dc4d0a976).

## Tooling & the workbench

- [Yaak — open-source API client](https://github.com/mountain-loop/yaak) · [Hoppscotch](https://hoppscotch.io/) · [the VS Code REST Client extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-speech) — the Postman alternatives shelf.
- [awesome HTTP API development tools](https://github.com/yosriady/awesome-api-devtools?utm_content=buffer0245d&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer) and [public-apis — free APIs for any project](https://github.com/public-apis/public-apis) — the two big lists.
- [Postman's State of the API report](https://www.postman.com/state-of-api/2025/) — the industry pulse you keep re-saving.
- [FastAPI for MLOps: project structure and best practices](https://pyimagesearch.com/2026/04/13/fastapi-for-mlops-python-project-structure-and-api-best-practices/) · [the FastAPI quickstart handbook](https://www.freecodecamp.org/news/fastapi-quickstart/) — FastAPI as the ML-serving default.
- [reflections on working at OpenAI](https://calv.info/openai-reflections) — "pretty much everything operates around FastAPI and Pydantic"; validation for the stack above.
- [curl.md — web pages to Markdown for AI](https://curl.md/) — CLI, browser extension, or API; a token-budget tool for the agent era.

---

## All links on this topic
