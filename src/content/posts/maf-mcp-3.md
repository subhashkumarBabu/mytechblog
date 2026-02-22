---
title: "Exposing an AI Agent as an MCP Server with MAF — Part 3: MAF vs Raw MCP"
published: 2026-02-22
description: "A deep dive into how agent.as_mcp_server() differs architecturally from a raw MCP SDK implementation — and why that difference matters."
tags: [MAF, MCP, Agentic AI, Multi-Agent, Microsoft, Python]
category: Agentic AI
draft: false
---

## Recap of the Series

In Part 1 we introduced MCP and walked through the Stdio approach — exposing a ServiceNow `ChatAgent` as an MCP server and consuming it via `MCPStdioTool`. In Part 2 we moved to the HTTP/SSE approach, running client and server as fully independent processes over the network.

Both parts used `agent.as_mcp_server()` as the single line that made it all work. But a fair question is: how is this different from building an MCP server directly using the official MCP Python SDK? The answer is more significant than just less boilerplate. It is a fundamental architectural difference in where the intelligence lives.

---

## A Raw MCP Implementation

Let's build the same ServiceNow server using the official `mcp` Python SDK directly, with no MAF involved. Everything must be done manually.

```python
"""
raw_mcp_server.py — Pure MCP SDK Implementation
=================================================
Exposes ServiceNow tools as an MCP server without MAF.
Every tool schema and routing decision is written by hand.
"""

import anyio
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent
from tools import create_incident, update_incident, search_incident

app = Server("ServiceNowAgent")


# Step 1: Manually declare every tool with its full JSON schema
@app.list_tools()
async def list_tools():
    return [
        Tool(
            name="create_incident",
            description="Creates a new incident in ServiceNow.",
            inputSchema={
                "type": "object",
                "properties": {
                    "short_description": {
                        "type": "string",
                        "description": "Brief summary of the issue (5–160 chars).",
                    },
                    "urgency": {
                        "type": "string",
                        "description": "Urgency: 1=High, 2=Medium, 3=Low.",
                        "default": "2",
                    },
                },
                "required": ["short_description"],
            },
        ),
        Tool(
            name="update_incident",
            description="Updates the state and notes of an existing ServiceNow incident.",
            inputSchema={
                "type": "object",
                "properties": {
                    "incident_number": {
                        "type": "string",
                        "description": "Incident ID e.g. INC0012345.",
                    },
                    "state": {
                        "type": "string",
                        "description": "New state: In Progress | Resolved | Closed.",
                    },
                    "notes": {
                        "type": "string",
                        "description": "Work notes to append (max 4000 chars).",
                        "default": "",
                    },
                },
                "required": ["incident_number", "state"],
            },
        ),
        Tool(
            name="search_incident",
            description="Searches ServiceNow incidents by keyword or number.",
            inputSchema={
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "Keyword, number, or phrase to search (1–200 chars).",
                    },
                },
                "required": ["query"],
            },
        ),
    ]


# Step 2: Manually route every tool call with if/elif dispatch
@app.call_tool()
async def call_tool(name: str, arguments: dict):
    if name == "create_incident":
        result = create_incident(**arguments)
        return [TextContent(type="text", text=result)]
    elif name == "update_incident":
        result = update_incident(**arguments)
        return [TextContent(type="text", text=result)]
    elif name == "search_incident":
        result = search_incident(**arguments)
        return [TextContent(type="text", text=result)]
    else:
        raise ValueError(f"Unknown tool: {name}")


# Step 3: Start the server
async def main():
    async with stdio_server() as (read_stream, write_stream):
        await app.run(
            read_stream,
            write_stream,
            app.create_initialization_options(),
        )

if __name__ == "__main__":
    anyio.run(main)
```

This works correctly. But notice what you had to write manually — a full JSON schema for every parameter of every tool, a `list_tools()` handler that enumerates all tools explicitly, a `call_tool()` handler with `if/elif` routing to dispatch each call to the right function, and no help with validation, default values, or error handling.

Now compare this to the MAF version.

---

## The MAF `as_mcp_server()` Implementation

```python
"""
server.py — MAF as_mcp_server() Implementation
===============================================
Exposes the same ServiceNow tools as an MCP server using MAF.
No schema definitions, no routing, no list_tools handler.
"""

import anyio
from agent_framework import ChatAgent
from mcp.server.stdio import stdio_server
from tools import create_incident, update_incident, search_incident

agent = ChatAgent(
    chat_client=make_client(),
    name="ServiceNowAgent",
    description="Manages ServiceNow incidents — create, update, search.",
    instructions="You are a ServiceNow assistant. Use your tools to manage incidents.",
    tools=[create_incident, update_incident, search_incident],
)

server = agent.as_mcp_server()

async def main():
    async with stdio_server() as (read_stream, write_stream):
        await server.run(
            read_stream,
            write_stream,
            server.create_initialization_options(),
        )

if __name__ == "__main__":
    anyio.run(main)
```

No schema definitions. No `list_tools()` handler. No `call_tool()` routing. MAF derives everything automatically from the `@ai_function` decorators and `Annotated` type hints already present in `tools.py`. Adding a new tool is a one-line change to the `tools=` list — no schema to write, no routing case to add.

But reduced boilerplate is the smaller of the two differences. The more important distinction is architectural.

---

## The Fundamental Architectural Difference

These are not two different ways to write the same thing. They expose fundamentally different things over the MCP protocol.

### Raw MCP: A Tool Server

In the raw MCP implementation, each Python function becomes its own discrete MCP tool. A connecting client sees three separate, independently callable tools:

```
Client connects to raw_mcp_server.py and sees:
    ├── create_incident(short_description, urgency)
    ├── update_incident(incident_number, state, notes)
    └── search_incident(query)
```

The client's LLM receives a natural language request from the user, looks at these three tools, decides which one to call, constructs the correct structured JSON arguments, and sends the call. All the reasoning happens on the client side. The server is a dumb executor — it receives a structured tool call and runs the corresponding function. No LLM is involved on the server side at all.

### MAF `as_mcp_server()`: An Agent Server

In the MAF implementation, the entire `ChatAgent` becomes a single MCP tool. A connecting client sees just one callable:

```
Client connects to server.py and sees:
    └── ServiceNowAgent(query: str)
```

The client passes a natural language string to `ServiceNowAgent`. On the server side, the agent's own LLM receives that query, reasons about it, decides which of the underlying functions to call, constructs the arguments, executes the function, and returns the result. The reasoning happens on the server side. The client is relatively thin — it delegates intelligence to the agent server.

### Visualising Where the Intelligence Lives

```
RAW MCP                                MAF as_mcp_server()
───────────────────────────────────    ───────────────────────────────────
User: "Create a high urgency           User: "Create a high urgency
       incident for login failure"            incident for login failure"
         │                                       │
         ▼                                       ▼
  Client LLM reasons:                    Client ChatAgent delegates:
  "Call create_incident with             "Call ServiceNowAgent
   short_description='login              with the full query"
   failure', urgency='1'"                        │
         │                                       ▼
         ▼                               ── MCP boundary ──
  ── MCP boundary ──                             │
         │                                       ▼
         ▼                               Server ChatAgent reasons:
  Server executes function               "Call create_incident with
  directly — no LLM on server            short_description='login
                                          failure', urgency='1'"
                                                 │
                                                 ▼
                                         Server executes function
```

---

## What a Client Actually Sees: `list_tools()`

This is a practical consequence of the architectural difference that is easy to overlook. When any MCP client connects to a server, the first thing it does is call `list_tools()` to discover what the server can do. The two approaches return very different things.

With the raw MCP server, the client sees all three functions as individual, inspectable tools with their full schemas:

```json
[
  {
    "name": "create_incident",
    "description": "Creates a new incident in ServiceNow.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "short_description": { "type": "string", "description": "Brief summary of the issue (5–160 chars)." },
        "urgency":           { "type": "string", "description": "Urgency: 1=High, 2=Medium, 3=Low.", "default": "2" }
      },
      "required": ["short_description"]
    }
  },
  {
    "name": "update_incident",
    "description": "Updates the state and notes of an existing ServiceNow incident.",
    "inputSchema": { ... }
  },
  {
    "name": "search_incident",
    "description": "Searches ServiceNow incidents by keyword or number.",
    "inputSchema": { ... }
  }
]
```

With the MAF agent server, the client sees exactly one entry — the agent itself:

```json
[
  {
    "name": "ServiceNowAgent",
    "description": "Manages ServiceNow incidents — create, update, search.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "query": { "type": "string" }
      },
      "required": ["query"]
    }
  }
]
```

The individual tools — `create_incident`, `update_incident`, `search_incident` — are **invisible to the client**. They are internal to the agent and never exposed over MCP at all. A client has no way to call them directly, inspect their schemas, or even know they exist. This is by design: the agent is the boundary, and everything inside it is an implementation detail.

This has a real consequence for client-side reasoning. When a raw MCP client's LLM sees `create_incident` with its `short_description` and `urgency` parameters, it knows exactly what to pass and can construct a precise, structured call. When an MAF client's LLM sees `ServiceNowAgent` with a single `query` parameter, it simply passes the user's natural language request verbatim and lets the server figure out the rest.

Neither is wrong — but it is important to understand this before choosing an approach. If you want clients to be able to discover, inspect, and call individual functions with full schema awareness, use the raw MCP SDK. If you want the server to encapsulate all of that and present a single high-level interface, use MAF's `as_mcp_server()`.

---

## Side-by-Side Comparison

| | Raw MCP SDK | MAF `as_mcp_server()` |
|---|---|---|
| **Tools exposed** | Each function = one MCP tool | Entire agent = one MCP tool |
| **What `list_tools()` returns** | All functions with full schemas | One entry — the agent itself |
| **Inner tools visible to client?** | Yes — fully inspectable | No — hidden inside the agent |
| **Who reasons about the request?** | The client's LLM | The server agent's LLM |
| **Input to the MCP tool** | Structured JSON arguments | Natural language string |
| **Schema definition** | Manual JSON schema per tool | Auto-derived from `Annotated` type hints |
| **Tool routing** | Manual `if/elif` dispatch | Automatic via `ChatAgent` |
| **LLM calls on server side** | Zero | One or more |
| **LLM calls on client side** | One (to pick the tool) | One (to delegate to agent) |
| **Total LLM calls per request** | One | Two |
| **Boilerplate** | High | Minimal |
| **Control over execution** | Fine-grained | Abstracted |
| **Adding a new tool** | New schema + new routing case | One line in `tools=[]` |

---

## The LLM Call Count Trade-off

The two LLM calls in the MAF approach have real cost and latency implications and are worth thinking about carefully.

With raw MCP there is one LLM call — the client's LLM decides which function to call and sends the structured request. The server just executes it. If your client's LLM is capable enough to pick the right low-level function directly, this is the more efficient path.

With MAF `as_mcp_server()` there are two LLM calls — one on the client to decide to delegate to the agent, and one on the server to decide which underlying function to call. The extra call costs more and adds latency. But it is also what enables the agent to handle ambiguous or compound requests that a simple tool call cannot manage in a single round trip:

```
User: "Find any open VPN incidents and if there are any, resolve them
       all with note 'Fixed by network team'."
```

A raw MCP server cannot fulfil this in a single call. The client would need to orchestrate two sequential calls — `search_incident` first, then `update_incident` for each result. The MAF agent server handles this in a single request because its internal LLM can reason across multiple tool calls in one turn before returning a final answer.

---

## When to Use Each Approach

**Use the raw MCP SDK when** you want to expose discrete, directly callable functions where each tool is self-contained and the client's LLM will handle all the reasoning. This is the right choice when latency and cost are critical, when you need fine-grained control over schemas and error responses, when you are building a tool server to be consumed by many heterogeneous clients, or when your tools are simple CRUD operations that do not require multi-step reasoning.

**Use MAF `as_mcp_server()` when** you want to expose a high-level capability rather than individual low-level functions, and the server should handle all the reasoning internally. This is the right choice when you need to handle compound or ambiguous natural language requests, when you are building agent-to-agent architectures where one agent delegates to another, when you want to iterate quickly without maintaining schemas, or when your agent already exists and you simply want to expose it over MCP with minimal additional code.

---

## They Are Not Mutually Exclusive

The raw MCP SDK gives you a **tool server** — a collection of individually callable functions exposed over the MCP protocol, with the intelligence on the client side.

MAF's `as_mcp_server()` gives you an **agent server** — a single callable that encapsulates an entire reasoning loop, with the intelligence on the server side.

Neither is strictly better. The right choice depends on where you want the intelligence to live, how many LLM calls you are willing to pay for, and how much control you need over individual tool execution.

What MAF makes clear is that the two are not mutually exclusive. You can expose some capabilities as MAF agent servers for high-level delegation, and other pure functions as raw MCP tool servers for direct, structured calls — mixing and matching based on the complexity and requirements of each part of your system.

---

## File Structure for the Full Series

Across all three parts, the complete project for the HTTP/SSE approach looks like this:

```
project/
├── tools.py             ← @ai_function tool definitions (shared)
├── server.py            ← agent.as_mcp_server() + HTTP transport
├── client.py            ← MCPStreamableHTTPTool + ChatAgent
├── raw_mcp_server.py    ← pure MCP SDK comparison (Part 3)
└── .env                 ← Azure OpenAI credentials
```

Start with the MAF approach when building and iterating quickly. Reach for the raw MCP SDK when you need precise control over what gets exposed and how it gets called.

---

*This is Part 3 of a series on building multi-agent systems with Microsoft Agent Framework.*

*[← Part 1: The Stdio Approach](./maf-mcp-server-part1) | [← Part 2: The HTTP/SSE Approach](./maf-mcp-server-part2)*

---

## References

- [Microsoft Agent Framework — MCP Tools](https://learn.microsoft.com/en-us/agent-framework/agents/tools/local-mcp-tools?pivots=programming-language-python)
- [Model Context Protocol — Official Docs](https://modelcontextprotocol.io/)
- [MCP Python SDK — GitHub](https://github.com/modelcontextprotocol/python-sdk)
- [Microsoft Agent Framework — GitHub Repository](https://github.com/microsoft/agent-framework)
