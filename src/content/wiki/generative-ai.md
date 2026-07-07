---
title: "Generative AI"
topic: "generative-ai"
draft: false
generated: "2026-07-07"
sources: "405 tagged links, curated from the 200 most recent (2024\u20132026)"
---

**405 saved links**, 2021–2026 (peak: 2024). The umbrella tag — where [LLMs](/wiki/llms/) is about the models and [AI Agents](/wiki/ai-agents/) about the systems, this one tracks GenAI as an *engineering discipline*: production patterns, evaluation, GenAIOps, and the honest debate about whether any of it makes teams faster. Peak year 2024 marks the moment the tag shifted from "what is this?" to "how do we run this in production?"

**Related:** [LLMs](/wiki/llms/) · [AI Agents](/wiki/ai-agents/) · [RAG](/wiki/rag/) · [Prompt Engineering](/wiki/prompt-engineering/) · [Machine Learning](/wiki/machine-learning/) · [Azure](/wiki/azure/)

---

## Production patterns & architecture

- [Emerging Patterns in Building GenAI Products](https://martinfowler.com/articles/gen-ai-patterns/) — Fowler & Subramaniam's series, plus [the follow-up on giving models domain knowledge](https://martinfowler.com/articles/gen-ai-patterns/#rag). The closest thing to a canon.
- [Chip Huyen: building a platform for generative AI applications](https://huyenchip.com/2024/07/25/genai-platform.html) — the common architecture, distilled from studying real deployments.
- [how to choose the architecture for your GenAI application](https://towardsdatascience.com/how-to-choose-the-architecture-for-your-genai-application-6053e862c457) — flagged in your save as "need to re-read carefully."
- [why every software architect needs to learn GenAI](https://towardsdatascience.com/why-every-software-architect-needs-to-learn-genai-c575a669aec0) — the thesis of your whole career pivot, in one title.
- [Microsoft's azure-genai-design-patterns repo](https://github.com/microsoft/azure-genai-design-patterns/tree/main) · [beyond chatbots: domain-specific GenAI for operational decisions](https://www.infoq.com/articles/ai-developers-rewriting-software-process/?utm_source=twitter&utm_medium=link&utm_campaign=calendar).
- [foundation models as operating systems](https://datafloq.com/foundational-generative-ai-models-are-like-operating-systems/?utm_source=dlvr.it&utm_medium=twitter) — the framing that aged well.

## Evaluation — the hard part

- [LLM-as-judge, statistical scorers, and the evaluation toolbox](https://towardsdatascience.com/how-to-ensure-your-ai-solution-does-what-you-expect-it-to-do/) (Anna Via).
- [which metrics? computation-based vs. model-based evals](https://medium.com/google-cloud/run-multiple-coding-agents-safely-with-git-worktrees-c2d237dbd6b2) (Mete Atamel) · [the Gen AI Evaluation Service](https://cloud.google.com/blog/products/data-analytics/introducing-the-google-cloud-knowledge-catalog?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy26q2-googlecloud-blog-ai-in_feed-no-brand-global&utm_content=-&utm_term=-&linkId=61692440) · [hands-on labs for mastering AI evaluation](https://cloud.google.com/blog/topics/developers-practitioners/master-generative-ai-evaluation-from-single-prompts-to-complex-agents?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy26q1-googlecloudtech-blog-ai-in_feed-no-brand-global&utm_content=-&utm_term=-&linkId=41878953).
- [DeepEval — the LLM evaluation framework](https://github.com/confident-ai/deepeval).
- [why GenAI app quality often sucks, and what to do about it](https://towardsdatascience.com/why-generative-ai-apps-quality-often-sucks-and-what-to-do-about-it-f84407f263c3/) — the framework for cutting through hype.
- [evaluating GenAI responses with Microsoft.Extensions.AI.Evaluation](https://jamiemaguire.net/index.php/2025/03/08/evaluating-your-generative-ai-solution-responses-using-microsoft-extensions-ai-evaluation/) — the .NET angle.

## GenAIOps

- [GenAI ops for orgs with existing MLOps investments](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/genaiops-for-mlops) — the Azure Architecture Center guide; exactly your intersection.
- [GenAIOps in Azure AI Studio](https://www.youtube.com/watch?v=jxXyz86vwcU) (video) · [the GenAIOps repo](https://github.com/azure/genaiops).
- [GenOps: the evolution of MLOps for gen AI](https://cloud.google.com/blog/topics/developers-practitioners/next-26-hands-on-10-codelabs-to-build-featured-tech?e=48754805?utm_source=twitter&utm_medium=unpaidsoc&utm_campaign=fy26q2-googlecloudtech-blog-ai-in_feed-no-brand-global&utm_content=-&utm_term=-) · [the GenAI Ops keynote](https://www.youtube.com/watch?si=aGpq4Lu6jCQXEoPy&v=OMr6um-9q3I&feature=youtu.be).
- [GenAI observability with OpenTelemetry](https://opentelemetry.io/blog/2026/genai-observability/) · [a GenAI troubleshooting assistant for K8s workloads](https://aws.amazon.com/de/blogs/architecture/architecting-conversational-observability-for-cloud-applications/).
- [fine-tuning on AKS with KAITO](http://blog.aks.azure.com/2024/08/23/fine-tuning-language-models-with-kaito) — where GenAI meets your Kubernetes muscle.

## GenAI meets legacy code

The martinfowler.com sub-series that maps directly onto enterprise reality.

- [GenAI may be more useful for *understanding* code than generating it](https://martinfowler.com/articles/reduce-friction-ai/) (Birgitta Böckeler).
- [an agent that rewrites code to a new testing framework](https://martinfowler.com/articles/reduce-friction-ai/knowledge-priming.html) · [how GenAI helps legacy app modernization](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html) · [lessons from using GenAI with legacy systems](https://martinfowler.com/articles/reduce-friction-ai/context-anchoring.html).
- [4 in 5 developers expect GenAI to free them from legacy documentation debt](https://www.ciodive.com/news/tech-debt-modernization-hurdles-generative-ai-coding/747804/).

## The productivity debate

Both sides, well argued — worth keeping honest.

- [developer productivity in the age of GenAI: a psychological perspective](https://research.google/pubs/developer-productivity-in-the-age-of-generative-ai-a-psychological-perspective/).
- [the DORA paradox: better flow, less time on valuable work](https://cloud.google.com/resources/content/dora-impact-of-gen-ai-software-development) · [the Upwork study: GenAI increases workloads](https://www.infoq.com/news/2026/02/google-sre-gemini-cli-outage/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Devops).
- ["Why I'm not letting the juniors use GenAI for coding"](https://lukeplant.me.uk/blog/posts/why-im-not-letting-the-juniors-use-genai-for-coding/) and [the Stack Overflow piece on GenAI and junior engineers](https://stackoverflow.blog/2024/12/31/generative-ai-is-not-going-to-build-your-engineering-team-for-you/).
- [metacognitive laziness: GenAI's effect on learning motivation](https://bera-journals.onlinelibrary.wiley.com/doi/10.1111/bjet.13544) · ["a B student can produce A work while turning into a C student"](https://www.newcartographies.com/p/the-myth-of-automated-learning?r=ljyta&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false).
- [executor vs. thought partner — the two modes of GenAI use](https://hbr.org/2024/09/how-the-next-generation-of-managers-is-using-gen-ai?tpcc=orgsocial_edit&utm_campaign=hbr&utm_medium=social&utm_source=twitter).
- [half of GenAI projects overrun and get abandoned — same as all software, ever](https://cote.io/2026/05/29/failure-is-normal.html) — the deflationary footnote.
- [the BloombergNEF deep dive on GenAI energy usage](https://simonwillison.net/2025/Jan/12/generative-ai-the-power-and-the-glory/) — "absolutely worth spending time with."

## Learning it

- [Microsoft's Generative AI for Beginners](https://microsoft.github.io/generative-ai-for-beginners/#/) — the standard free course; siblings exist for [.NET](https://github.com/microsoft/Generative-AI-for-beginners-dotnet), [JavaScript](https://github.com/microsoft/generative-ai-with-javascript/tree/main), and [Java](https://github.com/microsoft/Build26-LAB532-from-data-to-context-agent-ready-knowledge-with-foundry-iq).
- [the Google + Kaggle 5-day GenAI course](https://rsvp.withgoogle.com/events/google-generative-ai-intensive_2025q1?_ga=2.243831680.463097493.1740554428-808607009.1740554428) · [the GenAI Handbook](https://genai-handbook.github.io/) · [the free GenAI-engineer GitHub resource guide](https://github.com/krishnaik06/Complete-RoadMap-To-Learn-AI).
- [Generative AI with Large Language Models](https://www.coursera.org/learn/generative-ai-with-llms?irclickid=&irgwc=1&afsrc=1&utm_medium=partners&utm_source=impact&utm_campaign=2840738&utm_content=b2c&utm_campaignid=samuelwong&utm_term=14726_SI_1164545_) — the DeepLearning.AI/AWS course you took on vacation.
- [Databricks' GenAI fundamentals videos](https://www.databricks.com/learn/training/generative-ai-fundamentals-accreditation) · [using GenAI as an engineer](https://lakshmanok.medium.com/how-to-use-genai-as-an-engineer-5d695751b870) / [as an analyst](https://lakshmanok.medium.com/how-to-use-genai-as-an-analyst-c74e9c8bf0e8).

---

## All links on this topic
