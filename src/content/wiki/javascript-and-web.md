---
title: "JavaScript & Web"
topic: "javascript-web"
draft: false
generated: "2026-07-07"
sources: "1,347 tagged links, curated from the ~180 most recent (2024\u20132026)"
---

**1,347 saved links**, 2015–2026 (peak: 2023). Your biggest tag and your loosest one — a decade of watching the web platform from the ops side of the fence, 701 web pages and 566 articles deep. The older strata are free-React-course listicles and certification roundups; the 2024–2026 layer tells a very different story: you stopped saving "learn JavaScript" and started saving "let the agent write the frontend." That turn — AI as the web developer, HTML as the agent's deliverable, spec-driven development as the new craft — is what this page curates.

**Related:** [Programming](/wiki/programming/) · [AI Agents](/wiki/ai-agents/) · [APIs](/wiki/apis/) · [UX Design](/wiki/ux-design/) · [Learning Resources](/wiki/learning-resources/)

---

## The turn: AI builds the frontend now

The clearest arc in your recent saves. In early 2024 it was a novelty; by 2026 it's how frontend work gets done.

- ["I have zero coding skills, but I coaxed ChatGPT to write a JavaScript blogging tool"](https://mitchwagner.com/2024/03/19/i-have-zero.html) — the 2024 marker of where this thread starts.
- [an AI-powered web app in 20 minutes, no frontend skills required](https://towardsdatascience.com/how-i-built-my-first-ai-powered-web-app-in-20-minutes-b8961e3f65b4) — the 2025 version.
- [David Bau teaches himself to vibe code](https://davidbau.com/archives/2025/12/16/vibe_coding.html) — watching Claude Code grow 780 lines to 13,600, with two rules for staying in control; [matklad's vibecoding notes](https://matklad.github.io/2026/01/20/vibecoding-2.html) — how a very conscientious developer chooses where to use LLMs and where not to.
- [a multi-agent harness for frontend design and long-running autonomous engineering](https://www.anthropic.com/engineering/harness-design-long-running-apps) and [designing delightful frontends with GPT-5.4](https://developers.openai.com/blog/designing-delightful-frontends-with-gpt-5-4) — both labs publishing frontend-generation playbooks.
- [Vercel's react-best-practices — a repo written for coding agents](https://vercel.com/blog/introducing-react-best-practices), with evals to catch accidental waterfalls and bundle bloat, plus [the Next.js evals](https://nextjs.org/evals) and [Google's Modern Web Guidance skills](https://developer.chrome.com/docs/modern-web-guidance) — you'd already built your own semantic-HTML skill when these landed.
- [AI-assisted coding: a practical guide](https://frontendmasters.com/blog/ai-assisted-coding-a-practical-guide-for-software-engineers/) — "that gap between code that works and code that is production-ready? It's you." And [the free Claude Code course with Anthropic](https://frontendmasters.com/courses/claude-code/?utm_campaign=claudecode&utm_source=x) — agentic loop, CLAUDE.md, skills, hooks, subagents.
- [teaching an LLM to review code like a senior engineer](https://www.youtube.com/watch?v=sPNUo9TEXpc) (video) — the future-of-frontend talk.

## HTML is the new deliverable

A distinctly 2026 pattern in your saves: self-contained HTML as the universal output format for agents — docs, slides, courses, diagrams.

- [effective-html — HTML skills for coding agents](https://github.com/plannotator/effective-html): architecture diagrams, plan pages, visual documents, all self-contained.
- [codebase-to-course](https://github.com/zarazhangrui/codebase-to-course) — one instruction turns any repo into an offline interactive HTML course; from the same author, [frontend-slides](https://github.com/zarazhangrui/frontend-slides) ("saved my life… I haven't manually made slides in weeks").
- [ht-ml.app — agent-native HTML artifact sharing](https://ht-ml.app/) with WebMCP support, and [html-docs.com](https://www.html-docs.com/) — your note: "holy shit, really well done."
- [AI-generated educational HTML5 animations](https://github.com/wwwzhouhui/in_animation/).

## The martinfowler.com subscription

The steadiest drip in the whole tag — Thoughtworks watching the same AI-eats-the-SDLC story you are, with more rigor.

- [harness engineering — Birgitta Böckeler's mental model](https://martinfowler.com/articles/harness-engineering.html) and [sensors for coding agents](https://martinfowler.com/articles/sensors-for-coding-agents.html) — static analysis as the agent's nervous system.
- ["What is code?"](https://martinfowler.com/articles/what-is-code.html) — your note: "if you think code no longer matters, read this."
- [encoding team standards as infrastructure](https://martinfowler.com/articles/reduce-friction-ai/encoding-team-standards.html) — versioned, reviewed prompt instructions instead of tribal knowledge.
- [the Interrogatory LLM](https://martinfowler.com/bliki/InterrogatoryLLM.html) — get the LLM to interview you for context rather than writing it yourself.
- [Fragments: future libraries may be specs](https://martinfowler.com/fragments/2026-02-04.html) — and LLMs as a GPS, not a destination.

## Spec-driven development & the craft of agentic coding

Drew Breunig's blog is your second firehose, and it's converging on one idea: prompts don't scale, specs do.

- [the problem is prompt debt](https://www.dbreunig.com/2026/06/22/the-problem-is-prompt-debt.html) — "prompts are great for one-off requests, terrible for defining the behaviors of systems."
- [the rise of spec-driven development](https://www.dbreunig.com/2026/02/06/the-rise-of-spec-driven-development.html) and [the spec-driven development triangle](https://www.dbreunig.com/2026/03/04/the-spec-driven-development-triangle.html) — logging decisions made by you *and* the agent, structured and tracked.
- [10 lessons for agentic coding](https://www.dbreunig.com/2026/05/04/10-lessons-for-agentic-coding.html) · [system prompts across six coding agents, compared](https://www.dbreunig.com/2026/02/10/system-prompts-define-the-agent-as-much-as-the-model.html) · [how Claude Code builds its system prompt](https://www.dbreunig.com/2026/04/04/how-claude-code-builds-a-system-prompt.html).
- The context trilogy: [How Long Contexts Fail](https://www.dbreunig.com/2025/06/22/how-contexts-fail-and-how-to-fix-them.html) · [How to Fix Your Context](https://www.dbreunig.com/2025/06/26/how-to-fix-your-context.html) · [Let the Model Write the Prompt](https://www.dbreunig.com/2025/06/10/let-the-model-write-the-prompt.html).
- [Armin Ronacher on "shitty types"](https://lucumr.pocoo.org/2025/8/4/shitty-types/) — why TypeScript can both help and harm agentic coding, and why Go doesn't suffer the same.
- [the new calculus of AI-based coding](https://blog.joemag.dev/2025/10/the-new-calculus-of-ai-based-coding.html) — productive at speed, but knowing what breaks at speed.

## Where JavaScript meets your AI stack

The practitioner corner — the saves where web tech plugs into the agent/MCP/Azure world you actually build in.

- [use-mcp — connect React apps to any MCP server in 3 lines](https://github.com/modelcontextprotocol/use-mcp), plus [Cloudflare's launch post](https://blog.cloudflare.com/connect-any-react-application-to-an-mcp-server-in-three-lines-of-code/?utm_campaign=cf_blog&utm_content=20250618&utm_medium=organic_social&utm_source=twitter) and their [JavaScript framework for building agents](https://blog.cloudflare.com/build-ai-agents-on-cloudflare/).
- [CoAgents — LangGraph agents inside React apps](https://www.copilotkit.ai/blog/coagents-v0-5-the-building-blocks-of-a-full-stack-agent) with generative UI and human-in-the-loop, and [streaming Google ADK agents into modern frontends via the AG-UI protocol](https://discuss.google.dev/t/integrating-google-adk-agents-with-modern-frontends-using-the-ag-ui-protocol/298415/2?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy26q1-googlecloudtech-web-ai-in_feed-no-brand-global&utm_content=-&utm_term=-&linkId=38229871).
- [generative-ai-with-javascript — learn AI while chatting with da Vinci and Ada Lovelace](https://github.com/microsoft/generative-ai-with-javascript/tree/main), and the companion [video series](https://www.youtube.com/playlist?list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&si=T-JBvzFC6TaWUIu7&wt.mc_id=twitter__organicsocial_reactor).
- The Azure/Node.js shelf: [Cosmos DB + Azure OpenAI Node.js developer guide — 13 modules](https://github.com/AzureCosmosDB/cosmosdb-agent-kit) · [DeepSeek with Azure AI in JavaScript/TypeScript](https://github.com/Azure-Samples/deepseek-azure-javascript) · [a travel AI agent: React + FastAPI + Cosmos vector store](https://github.com/jonathanscholtes/Travel-AI-Agent-React-FastAPI-and-Cosmos-DB-Vector-Store).
- [microblog-ai-nextjs](https://github.com/glaucia86/microblog-ai-nextjs) and its [zero-to-AI-hero Next.js workshop](https://dev.to/glaucia86/building-a-production-ready-microblog-ai-zero-to-ai-hero-with-nextjs-complete-workshop-29j3) — the fullest end-to-end build you've saved.
- [the Assistants API + Next.js quickstart](https://github.com/openai/skills/tree/main/skills/.curated) · [mcpservers.org — thousands of MCP servers and skills, front-end category included](https://mcpservers.org/).

## Fundamentals worth keeping

The evergreen minority in a newsy tag — the things that stay true whoever writes the code.

- [Eloquent JavaScript](https://eloquentjavascript.net/) — the free book; still the answer to "how do I actually learn this."
- [learn-nodejs-hard-way — build a backend framework from scratch](https://github.com/ishtms/learn-nodejs-hard-way) and [Learn TypeScript online course](https://learntypescript.online/).
- [learn React by building 25 projects](https://www.freecodecamp.org/news/master-react-by-building-25-projects/) · [from a plain HTML+CSS+JS Pomodoro timer to a full app](https://www.buildyourownapps.com/).
- [web-skills — a visual overview of everything a web developer touches](https://github.com/andreasbm/web-skills) — useful as a map even if you never walk the territory.
- [latency numbers every programmer should know](https://colin-scott.github.io/personal_website/research/interactive_latency.html) — the page you keep coming back to.
- [State of the Dev Ecosystem 2024](https://www.jetbrains.com/lp/devecosystem-2024/) — JavaScript still the most popular language; Go and Rust the most desired.
- [your customers don't care about JavaScript](https://codeopinion.com/your-customers-dont-care-about-javascript/) — the correct closing thought for an observer's tag.
- [layerd.cloud — layer-based interactive system design canvas](https://layerd.cloud/) and [react-flow-builder — visual workflow design](https://github.com/1Madgeek/react-flow-builder/) — web tools that serve your architecture thinking.

---

## All links on this topic
