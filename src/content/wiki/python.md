---
title: "Python"
topic: "python"
draft: false
generated: "2026-07-07"
sources: "492 tagged links, curated from the ~180 most recent (2024\u20132026)"
---

**492 saved links**, 2017–2026 (peak: 2024). This was never really a language tag — it's the tag where your AI transition happens in code. The early saves are DevOps-flavored (CI/CD for Python APIs, diagrams-as-code); from 2023 onward it's almost entirely Python-as-the-AI-language: agent frameworks, the Pydantic ecosystem, MCP servers, FastAPI backends. One saved note sums up your whole thesis: "In AgenticOps, Python is the glue that turns an AI 'thought' into real action."

**Related:** [AI Agents](/wiki/ai-agents/) · [LLMs](/wiki/llms/) · [Machine Learning](/wiki/machine-learning/) · [Deep Learning](/wiki/deep-learning/) · [Data Science](/wiki/data-science/) · [Programming](/wiki/programming/)

---

## The learning canon

The courses and books that keep getting re-saved — the permanent shelf.

- [Harvard CS50P — Introduction to Programming with Python](https://cs50.harvard.edu/python/) and [the full lecture playlist](https://www.youtube.com/playlist?list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V).
- [Python for Everybody — Dr. Chuck's full university course](https://www.youtube.com/watch?v=8DvywoWv6fI) · [MIT 6.100L on OCW](https://ocw.mit.edu/courses/6-0002-introduction-to-computational-thinking-and-data-science-fall-2016/video_galleries/lecture-videos/) · [University of Helsinki's Python MOOC](https://programming-25.mooc.fi/) — 14 parts, free certificate.
- The Al Sweigart thread: [Automate the Boring Stuff](https://automatetheboringstuff.com/), re-saved as [the 3rd edition](https://nostarch.com/automate-boring-stuff-python-3rd-edition) and [its practice workbook](https://nostarch.com/automate-workbook) — "the boring stuff is actually the USEFUL stuff," which is very much your automation-first worldview.
- [Think Python, 3rd edition](https://allendowney.github.io/ThinkPython/) (free online) · [The Hitchhiker's Guide to Python](https://docs.python-guide.org/) · [Anthony Shaw's "Learning Python from Scratch"](https://tonybaloney.github.io/posts/learning-python.html).
- [JPMorgan's internal Python training](https://github.com/jpmorganchase/python-training?utm_source=substack&utm_medium=email) — written for analysts and traders, works for any busy professional.
- A quiet pattern in this tag: you collect Python teaching in every language — [Tsukuba University's 300-page Japanese intro](https://mitani.cs.tsukuba.ac.jp/book_support/python/python_slides.pdf), Chinese visual-math repos, Spanish MOOC threads. Good pedagogy is good pedagogy.
- When you want structure and accountability: [Trey Hunner's 10-week jump start](https://treyhunner.com/2024/08/python-high-five/) — one exercise a day for 50 days.

## Python for AI — the transition shelf

How much Python does the AI work actually need? These answer that directly.

- [Python QuickStart for People Learning AI](https://towardsdatascience.com/python-quickstart-for-people-learning-ai-58a1b76df0f4) — the exact framing of your situation.
- ["How much Python is enough to start with AI?"](https://amanxai.com/2025/12/04/how-to-learn-python-for-ai-from-scratch/) — the honest scoping answer.
- [CS50's AI with Python — full course](https://www.youtube.com/watch?v=5NgNicANyqM&ab_channel=freeCodeCamp.org) — the canon course at the intersection.
- [Deep Learning with Python, 3rd edition (Chollet)](https://www.manning.com/books/deep-learning-with-python-third-edition) — free web edition too — and [his step-by-step notebooks](https://github.com/fchollet/deep-learning-with-python-notebooks?tab=readme-ov-file) ("highest quality I've seen anywhere," per the save).
- [Practical Python AI Programming](https://leanpub.com/read/pythonai/) — a free 4–5-hour read, good weekend material.
- [Siddhardhan's Python-libraries-for-ML module](https://www.youtube.com/playlist?list=PLfFghEzKVmjsgZPk2zxRRRLXCT0QyN495&si=cK1hclBT4Phqv_UA) — "the best Python tutor I've come across on YouTube," says the note.
- [Bernd Klein's ML-with-Python book (PDF)](https://python-course.eu/books/bernd_klein_python_and_machine_learning_a4.pdf) · [your collected LLM-Python resources doc](https://docs.google.com/document/d/1vY4pz8HCbXc_g8PR3n8zv0DYWRALCELytcFZ96BE4tQ/edit?ajs_uid=89549&tab=t.0).
- [Learn AI-Assisted Python Programming](https://www.manning.com/books/learn-ai-assisted-python-programming-second-edition?utm_source=clcoding&utm_medium=affiliate&utm_campaign=book_zingaro2&a_aid=clcoding&a_bid=77a0a5d7) — learning Python *with* Copilot/ChatGPT rather than despite them.
- [Cisco's Python Essentials for AgenticOps](https://www.netacad.com/learning-collections/python?courseLang=en-US&utm_source=netacad-social&utm_medium=x&utm_campaign=agenticops) — the save whose framing ("Python is the glue that turns an AI thought into real action") belongs in your architect talks.

## The Pydantic thread

Your densest single-vendor cluster — you tracked this ecosystem from validation library to full agent stack.

- ["Pydantic is still all you need"](https://tome.app/fivesixseven/pydantic-is-still-all-you-need-clxgxz2xp0b0498210u77pznh) — the talk that explains why structured outputs won.
- [Why (and how) I am a Pydantic user](https://www.clelia.dev/2025-07-11-why-and-how-i-am-a-pydantic-user) — the everyday case, pre-AI.
- The PydanticAI arc: [the launch — "an agent framework designed for production"](https://pydantic.dev/docs/ai/mcp/run-python/) → [InfoQ's coverage](https://www.infoq.com/news/2026/03/aws-strands-agents/?utm_source=twitter&utm_medium=link&utm_campaign=calendar) → [V1 and why they built it](https://pydantic.dev/articles/ai-observability-pricing-comparison) → [pydantic-ai-harness](https://github.com/pydantic/pydantic-ai-harness?utm_source=newsletter), one of the few projects that goes past prompt-plus-tools demos.
- [Building a research agent with PydanticAI](https://www.youtube.com/watch?v=MkqkiJgnDxk) (video) — "I actually learned something — about Tavily search API," you noted.
- [Guido's typeagent team using Pydantic AI + Logfire](https://github.com/microsoft/work-iq) — validation-by-adoption at the highest level.
- The monty tangent: [a durable code mode for agent-framework built on Pydantic's monty](https://github.com/anthonychu/maf-codeact-monty-python) · [Drew Breunig on spec-driven development](https://www.dbreunig.com/2026/02/06/the-rise-of-spec-driven-development.html), where monty shows up again.
- [Reflections on leaving OpenAI](https://calv.info/openai-reflections) — "pretty much everything operates around FastAPI to create APIs and Pydantic for validation." The stack you're learning is the stack they run.

## Building agents in Python

Where this tag and [AI Agents](/wiki/ai-agents/) overlap — the hands-on, framework-level saves.

- Pamela Fox's Python + Agents livestream series, saved session by session: [building your first agent](https://www.youtube.com/watch?v=I4vCp9cpsiI) · [adding context and memory](https://www.youtube.com/watch?v=BMzI9cEaGBM) · [monitoring, evals, and red-teaming](https://www.youtube.com/watch?v=3yS-G-NEBu8) — plus [the full series archive](https://github.com/orgs/microsoft-foundry/discussions/166) with slides and code.
- [The same agent across Microsoft Agent Framework, LangChain v1, and PydanticAI](https://github.com/Azure-Samples/interview-coach-agent-framework) — proof the frameworks are converging on "a prompt with a list of tools."
- [Google's Agent Development Kit](https://github.com/google/adk-python) and [the v1.18 visual agent builder](https://github.com/google/agents-cli) · [OpenAI's Agents SDK](https://github.com/openai/openai-agents-python) — the other two corners of the framework triangle.
- [Taking a deep agent to production](https://docs.langchain.com/oss/python/deepagents/going-to-production) — memory, execution environment, guardrails, durability; the checklist your agentic incident-management work needs.
- [Temporal's Python SDK running ADK agents in workflows](https://github.com/temporalio/sdk-python/releases) — durable execution meets agents; catnip for a platform engineer.
- [Multi-agent communication with the A2A Python SDK](https://towardsdatascience.com/multi-agent-communication-with-the-a2a-python-sdk/) · [Magentic-One, Microsoft's generalist multi-agent system](https://github.com/microsoft/autogen/tree/main/python/packages/autogen-magentic-one) · [smolagents + Browser Use — "OpenAI Operator, light"](https://github.com/gbaeke/smolagents).
- Demystifiers: [Build Your Own Coding Agent — "a while loop, an API call, and a few Python functions"](https://realpython.com/social/link/5a22f453-bb33-415e-a093-c1bc4efd3d5b) · [Build Your Own Openclaw, step by step](https://github.com/czl9707/build-your-own-openclaw) · [Build AI Agents with Python from Scratch](https://drive.google.com/drive/folders/1SiIqMAoNZy51EdUh1rLgPk3_QpVsXRA0).

## MCP servers & sandboxed Python

The 2025–2026 saves split into two practical questions: how do agents get tools, and where does their code run safely?

- ["Build your first MCP server in Python" — the PyCon US tutorial](https://github.com/pamelafox/pycon2026-mcp-tutorial) — packed house, slides and code included.
- [Microsoft's Let's Learn MCP Python tutorial](https://github.com/microsoft/Foundry-Local/releases/tag/cli-preview-0.10.0) · [demystifying MCP with Python — beginner's guide](https://mostafawael.medium.com/demystifying-the-model-context-protocol-mcp-with-python-a-beginners-guide-0b8cb3fa8ced).
- [Hosting a remote Python MCP server on Azure Functions](https://www.youtube.com/watch?v=PAxBlQ9mFv8) — your cloud muscle applied directly.
- [FastMCP's built-in OpenTelemetry support](https://github.com/Azure-Samples/python-mcp-demos/) — exporting to Aspire, App Insights, or Logfire; observability for MCP, which is exactly your SRE instinct asking the right question.
- Sandboxing: [Simon Willison finally finds his Python-in-a-sandbox solution (MicroPython in WASM)](https://simonwillison.net/2026/Jun/6/micropython-in-a-sandbox/) · [a Python agent executing coding tasks inside a Cloudflare Sandbox](https://developers.cloudflare.com/sandbox/tutorials/openai-agents/).

## FastAPI — the serving layer

Every AI thing you build eventually needs an API in front of it.

- [freeCodeCamp's FastAPI handbook](https://www.freecodecamp.org/news/fastapi-quickstart/) — the full develop-and-deploy walkthrough.
- [FastAPI for MLOps: project structure and API best practices](https://pyimagesearch.com/2026/04/13/fastapi-for-mlops-python-project-structure-and-api-best-practices/) — the bridge between your DevOps habits and ML serving.
- [FastAPI for AI Engineers](https://drive.google.com/file/d/17KEfSrfpGFe6vtknb7HPD5fbg8b9EPlQ/view?usp=drivesdk) · [server-sent events in FastAPI 0.135](https://fastapi.tiangolo.com/tutorial/server-sent-events/) — SSE being the transport for streaming agents.
- [a conversational-agent FastAPI backend](https://github.com/mfmezger/conversational-agent-langchain) (LangChain/LangGraph + Qdrant, deployment included) and [the Travel AI Agent — React + FastAPI + Cosmos DB vector store](https://github.com/jonathanscholtes/Travel-AI-Agent-React-FastAPI-and-Cosmos-DB-Vector-Store).
- [library-skills — teach your coding agents to use FastAPI properly](https://library-skills.io/) — run `uvx library-skills` in the repo; a very 2026 idea.

## Tooling & craft

The modern-Python hygiene shelf — uv, style, logging, and the internals worth understanding once.

- The uv moment: [Sebastian Raschka's uv + venv setup guide](https://github.com/rasbt/LLMs-from-scratch/tree/main/setup/01_optional-python-setup-preferences) ("finally updated from conda + pip") · [the uv risk/benefit debate, curated by Simon Willison](https://simonwillison.net/2024/Sep/8/uv-under-discussion-on-mastodon/) · [the uv-back-to-pip migration guide](https://pydevtools.com/handbook/how-to/how-to-translate-pip-commands-to-uv/) — "nobody's truly locked in."
- [how venv actually works, explained properly](https://speakerdeck.com/os1ma/pythonno-jia-xiang-huan-jing-wowan-quan-nili-jie-siyou) — worth it even in Japanese slides.
- [Typer hits "Adopt" on the Thoughtworks Radar](https://www.thoughtworks.com/radar/languages-and-frameworks/summary/typer) — CLIs are how agents and humans both drive your tools.
- [Modern Good Practices for Python Development](https://www.stuartellis.name/articles/python-modern-practices/) · [Google's Python style guide](https://google.github.io/styleguide/pyguide.html) · [Modern Python logging](https://www.youtube.com/watch?si=V-sIKe2czDhUAc_b&v=9L77QExPmI0&feature=youtu.be) (video) · [writing better unit tests](https://www.kdnuggets.com/tips-for-writing-better-unit-tests-for-your-python-code).
- Internals, once: [how async/await works in Python](https://tenthousandmeters.com/blog/python-behind-the-scenes-12-how-asyncawait-works-in-python/) · [Armin Ronacher on virtual threads](https://lucumr.pocoo.org/2025/7/26/virtual-threads/) — and [his agentic coding recommendations](https://lucumr.pocoo.org/2025/6/12/agentic-coding/), from Flask's creator.
- At scale: [how Kraken organizes a very large Python monolith](https://blog.europython.eu/kraken-technologies-how-we-organize-our-very-large-pythonmonolith/) — enterprise-architecture reading disguised as a Python post.
- The permanent repos: [David Beazley's Python Mastery course](https://github.com/dabeaz-course/python-mastery) · [awesome-python](https://github.com/vinta/awesome-python) · [TheAlgorithms/Python](https://github.com/TheAlgorithms/Python) · [memory_graph — draw your data structures](https://github.com/bterwijn/memory_graph/) · [10 ways fastcore makes Python more fun](https://carlo.ai/posts/fastcore-10).
- [skills.md](https://skills.md/) — a tiny contract that tells the model how your codebase works; where Python craft and AI-generated code meet.

---

## All links on this topic
