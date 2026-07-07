---
title: "Prompt Engineering"
topic: "prompt-engineering"
draft: false
generated: "2026-07-07"
sources: "499 tagged links, curated from the 200 most recent (2024\u20132026)"
---

**499 saved links**, 2020–2026 (peak: 2023). A tag that documents its own obsolescence, gracefully: the early layer is magic-words folklore, the middle is rigorous technique (The Prompt Report, CoT, taxonomies), and the recent layer records the discipline dissolving into something bigger — context engineering, automated optimization (DSPy), and agents that write their own prompts. "Stop prompting and start operating it," as one 2026 save puts it.

**Related:** [LLMs](/wiki/llms/) · [AI Agents](/wiki/ai-agents/) · [Generative AI](/wiki/generative-ai/) · [RAG](/wiki/rag/)

---

## The canon

- [The Prompt Report](https://www.aihero.dev/the-prompt-report) — 200+ techniques, 1,500+ papers; "the single best thing you can read." The [survey site](https://trigaten.github.io/Prompt_Survey_Site/) is the interactive version.
- [the taxonomy of prompting techniques](https://arxiv.org/abs/2606.24937) — "best overview to date," per your save; and [the 150-study survey with 21 prompt-quality properties](https://arxiv.org/abs/2506.06950).
- [Lee Boonstra's prompt engineering whitepaper](https://www.kaggle.com/whitepaper-prompt-engineering) — "the best free book you can find. Concise & practical."
- [Anthropic's interactive prompt-engineering tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) + [the Claude docs overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) and [the prompt library](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices).
- [promptingguide.ai](https://www.promptingguide.ai/) · [DAIR.AI's free resource collection](https://github.com/dair-ai/Prompt-Engineering-Guide) · [the prompt-engineering techniques repo](https://github.com/NirDiamant/Prompt_Engineering).
- Model-specific, always worth rereading on release day: ["read the prompt guides front to back whenever a new model drops"](https://developers.openai.com/cookbook/examples/gpt-5-codex_prompting_guide) · [the GPT-5.5 prompting guide](https://developers.openai.com/api/docs/guides/prompt-guidance?model=gpt-5.5) · [Gemini 3 best practices](https://www.philschmid.de/gemini-3-prompt-practices) · [prompting reasoning models](https://www.latent.space/p/o1-skill-issue).

## From prompting to context engineering

The tag's big turn, mid-2025.

- ["The new skill is not prompting, it's context engineering"](https://www.philschmid.de/context-engineering) — the article that named it.
- [the Context Engineering Handbook](https://github.com/jasontang-ai/Context-Engineering) · [the hands-on tutorial for closing the prototype-to-production gap](https://towardsdatascience.com/context-engineering-a-comprehensive-hands-on-tutorial-with-dspy/).
- ["prompts are terrible for defining the behaviors of systems"](https://www.dbreunig.com/2026/06/22/the-problem-is-prompt-debt.html) and [how Claude Code assembles context](https://www.dbreunig.com/2026/04/04/how-claude-code-builds-a-system-prompt.html) — Drew Breunig's excellent thread of posts.
- [stop prompting, start operating: rules, tests, skills, reviewers](https://arps18.github.io/posts/claude-code-mastery/) — the operator's mindset.
- [agents.md](https://github.com/openai/agents.md) and [AGENTS.md in action](https://github.com/micahkepe/jsongrep) — prompts becoming repo-level configuration.
- [treating team standards as prompt material](https://martinfowler.com/articles/reduce-friction-ai/encoding-team-standards.html) · [prompts are code, .md files are state](https://mariozechner.at/posts/2025-06-02-prompts-are-code/).
- [compound engineering](https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents) — where this all ends up.

## Automated prompt optimization

Letting the model do the prompt engineering — the DSPy thread.

- [Drew Breunig's DSPy talk — "the clearest explanation I've seen yet"](https://simonwillison.net/2025/Oct/4/drew-on-dspy/) · [the talk itself](https://www.youtube.com/watch?si=TZZkNagteF_vyZ_M&v=I9ZtkgYZnOw&feature=youtu.be).
- [automating prompt creation with DSPy](https://towardsdatascience.com/automate-writing-your-llm-prompts/) · [the Hugging Face course on DSPy GEPA](https://huggingface.co/learn/llm-course/chapter3/1).
- [LLMs writing prompts for themselves — now trustworthy](https://simonwillison.net/2025/Sep/14/models-can-prompt/) · ["Let the Model Write the Prompt"](https://www.dbreunig.com/2025/06/10/let-the-model-write-the-prompt.html).
- [the definitive hands-on guide to automated prompt engineering](https://towardsdatascience.com/automated-prompt-engineering-the-definitive-hands-on-guide-1476c8cd3c50).
- [Vertex AI Prompt Optimizer](https://cloud.google.com/blog/products/ai-machine-learning/partner-built-agents-available-in-gemini-enterprise?e=48754805&linkId=61558824) · [Salesforce's prompt-optimization automation](https://github.com/SalesforceAIResearch/promptomatix/).
- [the prompt tuning playbook](https://github.com/varungodbole/prompt-tuning-playbook) · [Uber's prompt templating toolkit](https://www.uber.com/IN/en/blog/introducing-the-prompt-engineering-toolkit) — versioned, evaluated, industrial-scale prompting.

## System prompts in the wild

Reading other people's homework — a genuinely useful genre.

- [the system-prompts-of-everything repo](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/tree/main) — v0, Cursor, Manus, Lovable, Devin, Replit.
- [Cursor CLI's system prompt, annotated](https://gist.github.com/gregce/9b45c563affa191caa748f699eeb9d95) · [Cline's prompts, in the open source](https://github.com/cline/cline/tree/main/src/core/prompts).
- [system prompts across six coding agents, compared](https://www.dbreunig.com/2026/02/10/system-prompts-define-the-agent-as-much-as-the-model.html).
- [diffing Anthropic's published system prompts between Claude versions](https://simonwillison.net/2026/Apr/18/opus-system-prompt/).

## Testing, evals & injection

- Promptfoo: [with Vertex AI for evaluation and security](https://medium.com/google-cloud/the-agentic-web-is-here-how-webmcp-transforms-websites-into-ai-toolkits-be5453f4364e) · [local prompt testing with Docker Model Runner](https://docker.com/blog/evaluate-models-and-mcp-with-promptfoo-docker/).
- [detecting prompt regressions with the Evals API](https://cookbook.openai.com/examples/evaluation/use-cases/regression) · [LLM-Evalkit — metrics for prompt engineering](https://www.infoq.com/news/2025/10/llm-evalkit/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=ai-ml-data-eng).
- [why your prompts don't belong in Git](https://towardsdatascience.com/why-your-prompts-dont-belong-in-git) — the ops argument.
- [Hamel Husain's FAQ on synthetic data for evals](https://gist.github.com/hamelsmu/2dce18e6507b27cb36248a0ceae5c0ec).
- Injection: [design patterns for securing agents against prompt injection](https://arxiv.org/abs/2505.10831) ("a superb paper") · [prompt injection: the risk and mitigations](https://www.infoq.com/articles/large-language-models-prompt-injection-stealing/) · [OpenAI's CISO on Atlas injection mitigations](https://simonwillison.net/2025/Oct/22/openai-ciso-on-atlas/) · [Meta's PromptGuard](https://medium.com/google-cloud/building-a-memory-augmented-supply-chain-agent-with-adk-alloydb-and-memory-bank-de873511f678).

## Prompting for everyone

- [Google Prompting Essentials](https://grow.google/ai-professional/) — the course to recommend to non-engineer colleagues.
- [MIT's course on writing effective prompts](https://mitsloanedtech.mit.edu/ai/basics/effective-prompts/).
- [prompt engineering for Copilot Chat](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering?utm_campaign=image4&utm_source=twitter&utm_medium=social&utm_content=1752260703) · [smaller prompts, better results: custom instructions](https://code.visualstudio.com/blogs/2025/03/26/custom-instructions) · [the Copilot Chat cookbook](https://docs.github.com/en/copilot/tutorials/copilot-cookbook).
- [the chain-of-thought deep dive](https://towardsdatascience.com/advanced-prompt-engineering-chain-of-thought-cot-8d8b090bf699) — the technique that started the whole field.

---

## All links on this topic
