---
title: "Exposing an AI Agent as an MCP Server with MAF — Part 1: The Stdio Approach"
published: 2026-02-22
description: "How to use agent.as_mcp_server() in Microsoft Agent Framework to expose a ChatAgent over the Model Context Protocol using stdio transport."
tags: [MAF, MCP, Agentic AI, Multi-Agent, Microsoft, Python]
category: Agentic AI
draft: false
---

## What is MCP and Why Does It Matter?

The Model Context Protocol (MCP) is an open standard that defines how applications provide tools and contextual data to large language models. Think of it as a universal plug — once your agent speaks MCP, any MCP-compatible client can connect to it and use it as a tool. That includes VS Code GitHub Copilot, Claude Desktop, other agents, or your own custom client.

Before MCP, every AI framework had its own proprietary way of wiring tools to models. MCP standardises this so that an agent built in MAF can be used as a tool by a LangChain agent, a VS Code extension can call your custom ServiceNow agent, and multiple clients can share one agent server without any custom integration code.

The protocol has two sides. An **MCP Server** exposes tools and handles requests — this is what `agent.as_mcp_server()` creates. An **MCP Client** discovers those tools and calls them — this is `MCPStdioTool` or `MCPStreamableHTTPTool` in MAF.

This is a three-part series. Part 1 covers the **Stdio approach** for local development. Part 2 covers the **HTTP/SSE approach** for running client and server as fully independent processes. Part 3 compares `as_mcp_server()` against a raw MCP SDK implementation to explain the architectural difference.

---

## The Example: A ServiceNow Incident Agent

Throughout this series we use the same ServiceNow agent with three tools — create, update, and search incidents. The tools are defined using `@ai_function` with `Annotated` type hints that embed parameter descriptions directly in the code:

```python
# tools.py
from typing import Annotated
from agent_framework import ai_function

@ai_function
def create_incident(
    short_description: Annotated[str, "Brief summary of the issue (5–160 chars)."],
    urgency: Annotated[str, "Urgency: 1=High, 2=Medium, 3=Low."] = "2",
) -> Annotated[str, "Confirmation with incident number and details."]:
    """Creates a new incident in ServiceNow."""
    return (
        f"Incident created.\n"
        f"  Number:      INC0012345\n"
        f"  Description: {short_description}\n"
        f"  Urgency:     {urgency}\n"
        f"  Status:      New"
    )

@ai_function
def update_incident(
    incident_number: Annotated[str, "Incident ID e.g. INC0012345."],
    state: Annotated[str, "New state: In Progress | Resolved | Closed."],
    notes: Annotated[str, "Work notes to append (max 4000 chars)."] = "",
) -> Annotated[str, "Confirmation with incident number, new state, and notes."]:
    """Updates the state and notes of an existing ServiceNow incident."""
    return (
        f"Incident updated.\n"
        f"  Number: {incident_number}\n"
        f"  State:  {state}\n"
        f"  Notes:  {notes or 'None added'}"
    )

@ai_function
def search_incident(
    query: Annotated[str, "Keyword, number, or phrase to search (1–200 chars)."],
) -> Annotated[str, "Matching incidents with number, description, state, and urgency."]:
    """Searches ServiceNow incidents by keyword or number."""
    return (
        f"Results for '{query}':\n"
        f"  1. INC0012345 — Login issue       — New         — High\n"
        f"  2. INC0012346 — VPN not working   — In Progress — Medium\n"
        f"  3. INC0012347 — Printer offline   — Resolved    — Low"
    )
```

The shared Azure OpenAI client helper is used in every example across all three parts:

```python
import os
from openai import AsyncAzureOpenAI
from agent_framework.openai import OpenAIChatClient

def make_client() -> OpenAIChatClient:
    return OpenAIChatClient(
        model_id=os.environ.get("AZURE_OPENAI_DEPLOYMENT_NAME", "gpt-4o"),
        async_client=AsyncAzureOpenAI(
            azure_endpoint=os.environ["AZURE_OPENAI_ENDPOINT"],
            api_key=os.environ["AZURE_OPENAI_API_KEY"],
            api_version="2024-12-01-preview",
        ),
    )
```

---

## What `agent.as_mcp_server()` Actually Does

Before diving into the transport approaches, it is worth understanding what this method does under the hood.

When you call `agent.as_mcp_server()`, MAF wraps your `ChatAgent` in an MCP-compliant server object. That server advertises the agent's `name` and `description` as MCP metadata, and exposes a **single tool** that represents the entire agent. Clients call this tool with a natural language query. Internally, the agent's LLM receives that query, reasons about it, calls whichever of its underlying tools (`create_incident`, `search_incident`, etc.) are needed, and returns the result.

The key insight is that the entire agent becomes one MCP tool. From the outside, a client sees a single callable named `ServiceNowAgent`. Internally, that callable is a full LLM-powered reasoning loop. This is architecturally different from a standard MCP server — Part 3 goes deep on exactly how and why.

---

## Approach 1: Stdio Transport

Stdio (standard input/output) transport means the server and client communicate through stdin and stdout streams. The client spawns the server as a subprocess and pipes messages back and forth. They run on the same machine but as separate processes. This is the same pattern used by popular MCP servers like the GitHub MCP server and the filesystem MCP server.

Stdio is the right choice for local development and testing, for integrating with tools like VS Code Copilot Agents or Claude Desktop that manage MCP servers as subprocesses automatically, and for any scenario where you want a simple setup with no networking or open ports.

---

## The Server

```python
"""
server.py — ServiceNow Agent as MCP Server (Stdio)
====================================================
Exposes the ServiceNow ChatAgent as an MCP server over stdio.
The client spawns this as a subprocess automatically.
You do not need to run this file manually.

Usage:
    python client.py   ← this is all you need
"""

import anyio
from dotenv import load_dotenv
from mcp.server.stdio import stdio_server
from agent_framework import ChatAgent
from tools import create_incident, update_incident, search_incident

load_dotenv()


async def main():
    agent = ChatAgent(
        chat_client=make_client(),
        name="ServiceNowAgent",
        description="Manages ServiceNow incidents — create, update, search.",
        instructions="You are a ServiceNow assistant. Use your tools to manage incidents.",
        tools=[create_incident, update_incident, search_incident],
    )

    # One line to turn the agent into an MCP server
    server = agent.as_mcp_server()

    async with stdio_server() as (read_stream, write_stream):
        await server.run(
            read_stream,
            write_stream,
            server.create_initialization_options(),
        )


if __name__ == "__main__":
    anyio.run(main)
```

Three details are worth noting. First, `anyio.run()` is used instead of `asyncio.run()` because the MCP SDK uses `anyio` as its async backend and you must match that on the server side. Second, there is no `async with ChatAgent(...) as agent` context manager — the MCP server manages the agent's lifecycle through the stdio transport instead. Third, `server.create_initialization_options()` tells the MCP SDK what capabilities the server supports, derived automatically from the agent.

---

## The Client

```python
"""
client.py — ServiceNow MCP Client (Stdio)
==========================================
Spawns server.py as a subprocess via MCPStdioTool and routes
questions through a local ChatAgent.

Run:
    python client.py
"""

import asyncio
from dotenv import load_dotenv
from agent_framework import ChatAgent, MCPStdioTool

load_dotenv()


async def main():
    questions = [
        "Create a high urgency incident for a login failure affecting all users.",
        "Search for any VPN related incidents.",
        "Update incident INC0012346 to Resolved with note 'VPN config fixed'.",
    ]

    async with (
        MCPStdioTool(
            name="ServiceNowAgent",
            command="python",
            args=["server.py"],
        ) as servicenow_mcp,
        ChatAgent(
            chat_client=make_client(),
            name="Client",
            instructions="Use the ServiceNow agent tool to handle requests.",
            tools=servicenow_mcp,
        ) as agent,
    ):
        for question in questions:
            print(f"Q: {question}")
            result = await agent.run(question)
            print(f"A: {result}\n")


if __name__ == "__main__":
    asyncio.run(main())
```

`MCPStdioTool` is a **tool provider**, not a callable. A common mistake is trying to call it directly with something like `await servicenow_mcp.call("Create an incident...")` — this will fail with an `AttributeError` because `MCPStdioTool` has no `call` method. It must always be passed to a `ChatAgent` via the `tools` parameter. The `ChatAgent` is what reasons about the request and decides which MCP tool to invoke.

---

## How It All Fits Together

You only run one command:

```bash
python client.py
```

`MCPStdioTool` handles spawning `server.py` automatically. Here is the full request flow:

```
python client.py
    │
    ├── MCPStdioTool spawns: python server.py
    │       │
    │       └── server ChatAgent starts, listens on stdin/stdout
    │
    └── client ChatAgent receives question
            │
            └── decides to call "ServiceNowAgent" MCP tool
                    │
                    └── request sent to server.py via stdio
                            │
                            └── server ChatAgent reasons and calls tools
                                    │
                                    └── result flows back → printed
```

Note that there are two LLM calls per question — one on the client to decide to delegate, and one on the server to actually handle the request. This is the nature of the agent-as-tool pattern and is discussed further in Part 3.

---

## Expected Output

```
Q: Create a high urgency incident for a login failure affecting all users.
A: I've created a new high urgency incident. Incident INC0012345 has been
   raised with urgency set to High and status New.

Q: Search for any VPN related incidents.
A: I found a VPN-related incident: INC0012346 — VPN not working —
   In Progress — Medium urgency.

Q: Update incident INC0012346 to Resolved with note 'VPN config fixed'.
A: Incident INC0012346 has been updated to Resolved with the work note
   'VPN config fixed'.
```

---

## Pros and Cons of the Stdio Approach

| Pros | Cons |
|------|------|
| Simple — one command to run | Server tied to client's lifecycle |
| No networking or ports needed | Cannot serve multiple clients simultaneously |
| Works with VS Code Copilot and Claude Desktop out of the box | Not suitable for remote or cloud deployments |
| Client manages server lifecycle automatically | Server restarts fresh with every client run |

---

## What's Next

Part 2 covers the HTTP/SSE approach — running the server and client as completely independent processes over the network. This is the production-ready path that allows multiple clients to share one server, enables remote deployments, and gives you a persistent always-on MCP service.

➡️ **[Continue to Part 2: The HTTP/SSE Approach](./maf-mcp-server-part2)**

---

## References

- [Microsoft Agent Framework — MCP Tools](https://learn.microsoft.com/en-us/agent-framework/agents/tools/local-mcp-tools?pivots=programming-language-python)
- [Model Context Protocol — Official Docs](https://modelcontextprotocol.io/)
- [Microsoft Agent Framework — GitHub Repository](https://github.com/microsoft/agent-framework)
