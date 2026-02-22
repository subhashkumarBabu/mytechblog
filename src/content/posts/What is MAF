---
title: "What is MAF? The Microsoft Agent Framework Explained"
published: 2026-02-22
description: "A technical introduction to the Microsoft Agent Framework — what it is, why it exists, and the core ideas behind building multi-agent AI systems."
tags: [MAF, Agentic AI, Multi-Agent, Microsoft, AI]
category: Agentic AI
draft: false
---

## The Problem: AI Systems in Isolation

Enterprise environments typically run dozens of software systems in parallel — ServiceNow for IT incidents, Jira for development tasks, Slack for communication, and many more. Traditionally, connecting these systems requires custom integrations for every pair of systems. Each integration is expensive to build, fragile to maintain, and has to be rebuilt whenever a system changes.

The question is: what if each system had its own intelligent AI agent, and those agents could talk to each other?

That is the premise behind the **Microsoft Agent Framework (MAF)**.

---

## What is MAF?

MAF stands for **Multi-Agent Framework**. It is Microsoft's open-source framework for building, orchestrating, and deploying AI agents — individually and in coordinated systems.

An agent built with MAF can:

- Understand natural language instructions
- Use tools (functions) to get work done
- Expose itself as a tool for other agents to use
- Collaborate in pipelines and workflows

MAF is the **direct successor to both Semantic Kernel and AutoGen**, created by the same teams at Microsoft. It combines AutoGen's simple agent abstractions with Semantic Kernel's enterprise features — session-based state management, type safety, middleware, and telemetry — and adds graph-based workflows for explicit multi-agent orchestration.

As of early 2026, MAF has reached **Release Candidate status** for both .NET and Python, meaning the API surface is stable and the framework is production-ready.

---

## The Core Idea: Agents That Compose

The central idea in MAF is not a single pattern — it is **composition**. Agents can be combined in different ways depending on the problem. MAF ships with five distinct orchestration patterns, each suited to a different class of problem.

---

### Pattern 1 — Agent-as-Tool

An orchestrator agent wraps each specialist agent as a callable tool. The orchestrator decides which specialist to call, when to call it, and what to pass. The specialists are completely unaware of each other.

**Example:** A user reports a login failure. An orchestrator calls a ServiceNow agent to create an incident, then calls a Jira agent to create a linked development task, then calls ServiceNow again to append the Jira key to the incident notes. Each specialist handles only its own system. The orchestrator connects the dots.

**Best for:** Workflows where a coordinator needs to direct multiple domain experts. Works well when steps depend on each other's outputs and the sequence may vary.

---

### Pattern 2 — Sequential (Pipeline)

Agents are chained in a fixed order. Each agent receives the output of the previous one and adds its own contribution. There is no orchestrator — the flow is defined in code.

**Example:** A content pipeline where a research agent gathers facts, a writing agent drafts an article from those facts, and an editing agent refines the draft. Each stage passes its output directly to the next.

**Best for:** Linear workflows where the steps are known in advance and each step builds on the previous. Simple to reason about and debug.

---

### Pattern 3 — Concurrent (Parallel)

Multiple agents run simultaneously using `asyncio.gather()`. Each agent receives the same input and produces an independent output. A synthesis agent combines the results at the end.

**Example:** A security review where a vulnerability scanner agent, a compliance checker agent, and a dependency audit agent all analyse the same codebase simultaneously. Their findings are merged into a single report.

**Best for:** Independent subtasks that do not depend on each other. Significantly faster than running agents sequentially when tasks can be parallelised.

---

### Pattern 4 — Handoff (Dynamic Routing)

Control transfers dynamically between agents based on conversation content. An agent decides mid-conversation that it cannot handle the request and passes control to a more appropriate agent.

**Example:** A user contacts a support agent. The support agent recognises the issue is a billing dispute and hands off to a billing specialist agent, which in turn identifies a fraud pattern and hands off to a fraud investigation agent.

**Best for:** Scenarios where the right specialist is not known upfront. Mimics how human teams route work — a front-line agent handles what it can and escalates what it cannot.

---

### Pattern 5 — Group Chat (Collaborative)

All agents participate in a shared conversation. A manager agent decides who speaks next each round. Agents can agree, disagree, build on each other's contributions, or challenge assumptions. The discussion continues until consensus or a stopping condition is reached.

**Example:** An architecture review where a security agent, a performance agent, and a cost optimisation agent all evaluate the same design proposal. Each raises concerns from their domain. The manager synthesises their inputs into a final recommendation.

**Best for:** Complex decisions that benefit from multiple perspectives. Useful when no single agent has the full picture and the quality of the output improves through debate.

---

## How MAF Fits in the Microsoft AI Ecosystem

MAF sits on top of `Microsoft.Extensions.AI`, which defines the base abstractions (primarily `IChatClient`) that allow AI model providers to be swapped without changing application code. MAF adds the agent-level primitives on top of this:

- Persistent conversation context (sessions)
- Tool and function calling
- System prompt management
- Streaming support
- Multi-agent orchestration patterns

Think of the relationship this way: `IChatClient` is to MAF what `HttpClient` is to a REST client library. The low-level primitive is there, but the framework provides structured patterns on top.

MAF supports multiple AI providers including **Azure OpenAI, OpenAI, GitHub Models, Anthropic Claude, AWS Bedrock, and Ollama**.

---

## Interoperability: MCP, A2A, and AG-UI

MAF is designed to be interoperable with open standards, not locked into a single ecosystem. Out of the box, MAF supports:

- **MCP (Model Context Protocol)** — the open standard created by Anthropic that defines how AI models communicate with external tools and data sources. Any MCP-compatible client (Claude Desktop, Cursor, and others) can connect to an MAF agent without additional integration work.
- **A2A (Agent-to-Agent)** — an emerging standard for agents from different frameworks and vendors to communicate with each other directly.
- **AG-UI** — a protocol for streaming agent outputs to user interfaces, enabling real-time interaction with running agents.

These standards mean MAF agents are not isolated. They can be called by external AI clients, discovered by other agents, and integrated into broader ecosystems without custom connectors for each.

---

## Why MAF, Not Just a Single Agent?

Single agents are powerful but limited. A single agent managing a complex enterprise workflow would need to understand every system it touches — ServiceNow, Jira, Slack, GitHub, and more. As complexity grows, the agent becomes a monolith: harder to maintain, harder to test, and harder to reason about.

MAF enables a different approach: **decompose the problem into specialist agents, each focused on one domain, and coordinate them through an orchestrator**.

This mirrors how teams work in practice. A senior engineer (the orchestrator) coordinates with a network specialist, a database administrator, and a security analyst (the specialists). Each expert handles their domain; the senior engineer connects the dots.

The same pattern, applied to AI agents, is what MAF enables at scale.

---



## Production Features

MAF is designed for production deployment, not just prototyping. Built-in capabilities include:

- **Observability** via OpenTelemetry — every tool invocation, orchestration step, and reasoning flow is traceable
- **Durability** — agent threads and workflows can pause, resume, and recover from failures
- **Human-in-the-loop** — workflows can be marked as requiring human approval before proceeding
- **Security** — role-based access, private data handling, and content safety when hosted on Azure AI Foundry
- **Interoperability** — supports A2A (Agent-to-Agent), AG-UI, and MCP standards

---

## What Comes Next

This post is the first in a series on building multi-agent systems with MAF. The series covers:

1. **What is MAF?** ← you are here
2. Core Concepts: Tools, ChatAgent, and Agent-as-Tool
3. MAF Architecture: How Agents Talk to Each Other
4. MCP Deep Dive: The Protocol That Connects Everything
5. The 5 Multi-Agent Patterns in MAF
6. Orchestration: Sequential, Parallel, and Handoff
7. Testing and Security for AI Agent Systems
8. Migrating from Mock to Real APIs

---

## References

- [Microsoft Agent Framework — Official Documentation](https://learn.microsoft.com/en-us/agent-framework/)
- [Microsoft Agent Framework — Overview](https://learn.microsoft.com/en-us/agent-framework/overview/)
- [Microsoft Agent Framework — Agent Types](https://learn.microsoft.com/en-us/agent-framework/agents/)
- [Microsoft Agent Framework — GitHub Repository](https://github.com/microsoft/agent-framework)
- [Agent Framework Samples — GitHub](https://github.com/microsoft/Agent-Framework-Samples)
- [Introducing Microsoft Agent Framework — Azure Blog](https://azure.microsoft.com/en-us/blog/introducing-microsoft-agent-framework/)
- [Microsoft Agent Framework Reaches Release Candidate — Microsoft Foundry Blog](https://devblogs.microsoft.com/foundry/microsoft-agent-framework-reaches-release-candidate/)
- [Exploring Microsoft Agent Framework — AI Agents for Beginners](https://microsoft.github.io/ai-agents-for-beginners/14-microsoft-agent-framework/)
