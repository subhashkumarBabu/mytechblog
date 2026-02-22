---
title: "Exposing an AI Agent as an MCP Server with MAF — Part 2: The HTTP/SSE Approach"
published: 2026-02-22
description: "How to run an MAF ChatAgent as a standalone HTTP/SSE MCP server and connect to it from a fully independent client process."
tags: [MAF, MCP, Agentic AI, Multi-Agent, Microsoft, Python]
category: Agentic AI
draft: false
---

## Recap of Part 1

In Part 1 we introduced MCP, explained what `agent.as_mcp_server()` does, and walked through the **Stdio approach** — where `MCPStdioTool` spawns the server as a subprocess and the two communicate over stdin/stdout. That approach is great for local tooling and IDE integrations.

But what if you need the server and client to run on different machines? Or you want a server that stays alive and serves multiple clients concurrently? Or you need to deploy the agent as part of a microservices architecture? The Stdio approach cannot do any of those things. That is where HTTP/SSE comes in.

---

## What is HTTP/SSE Transport?

Server-Sent Events (SSE) is a standard web technology where a client opens a persistent HTTP connection and the server pushes events to it over time. For MCP, this gives us a proper client/server architecture — the server is a real HTTP service with its own port, clients connect over the network using a URL, the server can handle many clients concurrently, and client and server have completely independent lifecycles.

The MCP protocol over SSE uses two HTTP routes. `GET /sse` is where the client opens a persistent connection to receive events. `POST /messages` is where the client sends requests such as tool calls.

HTTP/SSE is the right choice for production and staging deployments, for scenarios where client and server run on different machines or in different containers, for any situation where multiple clients need to share one server, and for microservice architectures where agents are deployed and scaled independently.

---

## The Server

The server is a standalone HTTP application built with Starlette and served by uvicorn. The `agent.as_mcp_server()` call is identical to Part 1 — only the transport layer changes.

```python
"""
server.py — ServiceNow Agent as MCP Server (HTTP/SSE)
=======================================================
A standalone MCP server over HTTP/SSE. Run this independently
in its own terminal before starting the client.

Run:
    python server.py

Available at:
    http://localhost:8080/sse
"""

import os
import uvicorn
from dotenv import load_dotenv
from mcp.server.sse import SseServerTransport
from starlette.applications import Starlette
from starlette.routing import Route
from agent_framework import ChatAgent
from agent_framework.openai import OpenAIChatClient
from openai import AsyncAzureOpenAI
from tools import create_incident, update_incident, search_incident

load_dotenv()

MCP_PORT = 8080


def make_client() -> OpenAIChatClient:
    return OpenAIChatClient(
        model_id=os.environ.get("AZURE_OPENAI_DEPLOYMENT_NAME", "gpt-4o"),
        async_client=AsyncAzureOpenAI(
            azure_endpoint=os.environ["AZURE_OPENAI_ENDPOINT"],
            api_key=os.environ["AZURE_OPENAI_API_KEY"],
            api_version="2024-12-01-preview",
        ),
    )


# Build the agent
agent = ChatAgent(
    chat_client=make_client(),
    name="ServiceNowAgent",
    description="Manages ServiceNow incidents — create, update, search.",
    instructions="You are a ServiceNow assistant. Use your tools to manage incidents.",
    tools=[create_incident, update_incident, search_incident],
)

# One line — identical to Part 1
mcp_server = agent.as_mcp_server()

# Wire up the HTTP/SSE transport
sse = SseServerTransport("/messages")


async def handle_sse(request):
    """Client opens a persistent SSE connection here to receive events."""
    async with sse.connect_sse(request.scope, request.receive, request._send) as streams:
        await mcp_server.run(
            streams[0],
            streams[1],
            mcp_server.create_initialization_options(),
        )


async def handle_messages(request):
    """Client sends tool call requests here via POST."""
    await sse.handle_post_message(request.scope, request.receive, request._send)


app = Starlette(routes=[
    Route("/sse",      handle_sse,      methods=["GET"]),
    Route("/messages", handle_messages, methods=["POST"]),
])


if __name__ == "__main__":
    print(f"ServiceNow MCP server → http://localhost:{MCP_PORT}/sse")
    uvicorn.run(app, host="0.0.0.0", port=MCP_PORT)
```

The `agent.as_mcp_server()` call is exactly the same as in Part 1. The only difference is that instead of wiring it to stdio streams, we wire it to an `SseServerTransport` backed by a Starlette HTTP application.

The `GET /sse` route upgrades the incoming connection to a persistent SSE stream. The MCP server runs the full session over this stream, pushing tool definitions and responses back to the client as events. The `POST /messages` route receives tool call requests from the client and `SseServerTransport` routes them to the correct active session internally.

---

## The Client

The client connects to the running server over HTTP using `MCPStreamableHTTPTool`. Critically, it does **not** spawn the server — it simply connects to the URL. The server must already be running independently before the client starts.

```python
"""
client.py — ServiceNow MCP Client (HTTP/SSE)
=============================================
Connects to the independently running server.py over HTTP/SSE.

Start the server first:
    python server.py

Then run the client:
    python client.py
"""

import asyncio
import os
from dotenv import load_dotenv
from openai import AsyncAzureOpenAI
from agent_framework import ChatAgent, MCPStreamableHTTPTool
from agent_framework.openai import OpenAIChatClient

load_dotenv()

MCP_SERVER_URL = "http://localhost:8080/sse"


def make_client() -> OpenAIChatClient:
    return OpenAIChatClient(
        model_id=os.environ.get("AZURE_OPENAI_DEPLOYMENT_NAME", "gpt-4o"),
        async_client=AsyncAzureOpenAI(
            azure_endpoint=os.environ["AZURE_OPENAI_ENDPOINT"],
            api_key=os.environ["AZURE_OPENAI_API_KEY"],
            api_version="2024-12-01-preview",
        ),
    )


async def main():
    questions = [
        "Create a high urgency incident for a login failure affecting all users.",
        "Search for any VPN related incidents.",
        "Update incident INC0012346 to Resolved with note 'VPN config fixed'.",
    ]

    async with (
        MCPStreamableHTTPTool(
            name="ServiceNowAgent",
            url=MCP_SERVER_URL,
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

The switch from `MCPStdioTool` to `MCPStreamableHTTPTool` is the only meaningful change in the client. The table below captures the difference:

| | `MCPStdioTool` | `MCPStreamableHTTPTool` |
|---|---|---|
| **Spawns server?** | Yes — as a subprocess | No — connects to existing server |
| **Transport** | stdin/stdout | HTTP/SSE |
| **Server location** | Same machine only | Any reachable URL |
| **Server lifecycle** | Tied to client | Fully independent |
| **Config** | `command` + `args` | `url` |

---

## Running the HTTP/SSE Approach

Unlike Part 1 where you run a single command, here you run two in separate terminals.

**Terminal 1 — Start the server:**

```bash
python server.py
```

```
ServiceNow MCP server → http://localhost:8080/sse
INFO:     Uvicorn running on http://0.0.0.0:8080
INFO:     Application startup complete.
```

Leave this terminal open. The server is now waiting for connections.

**Terminal 2 — Run the client:**

```bash
python client.py
```

```
Q: Create a high urgency incident for a login failure affecting all users.
A: Incident INC0012345 has been created with High urgency and status New.

Q: Search for any VPN related incidents.
A: Found INC0012346 — VPN not working — In Progress — Medium urgency.

Q: Update incident INC0012346 to Resolved with note 'VPN config fixed'.
A: Incident INC0012346 updated to Resolved. Notes: VPN config fixed.
```

The full flow across both processes looks like this:

```
Terminal 1: python server.py
    │
    └── Starlette HTTP app starts on port 8080
            │
            └── mcp_server waits for SSE connections at /sse

Terminal 2: python client.py
    │
    └── MCPStreamableHTTPTool connects to http://localhost:8080/sse
            │
            └── client ChatAgent receives question
                    │
                    └── sends tool call via HTTP POST to /messages
                            │
                            └── server ChatAgent reasons and calls tools
                                    │
                                    └── result pushed back via SSE → printed
```

---

## Adding Authentication

In production you will want to secure the server. `MCPStreamableHTTPTool` accepts custom headers, making Bearer token authentication straightforward to add:

```python
# server.py — validate the token before accepting the SSE connection
async def handle_sse(request):
    token = request.headers.get("Authorization", "")
    if token != f"Bearer {os.environ['MCP_SECRET_TOKEN']}":
        from starlette.responses import Response
        return Response("Unauthorized", status_code=401)
    async with sse.connect_sse(request.scope, request.receive, request._send) as streams:
        await mcp_server.run(streams[0], streams[1], mcp_server.create_initialization_options())

# client.py — pass the token in request headers
async with MCPStreamableHTTPTool(
    name="ServiceNowAgent",
    url=MCP_SERVER_URL,
    headers={"Authorization": f"Bearer {os.environ['MCP_SECRET_TOKEN']}"},
) as servicenow_mcp:
    ...
```

---

## Deploying to the Cloud

Because the server is a standard HTTP application served by uvicorn, it deploys anywhere that runs Python. A minimal Dockerfile:

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8080
CMD ["python", "server.py"]
```

This works without modification on Azure Container Apps, AWS ECS, and Google Cloud Run. Once deployed, update the client to point at the remote URL:

```python
MCP_SERVER_URL = "https://servicenow-agent.yourcompany.com/sse"
```

---

## Stdio vs HTTP/SSE: The Full Comparison

| | Stdio (Part 1) | HTTP/SSE (Part 2) |
|---|---|---|
| **How to run** | `python client.py` only | `python server.py` then `python client.py` |
| **Transport** | stdin/stdout | HTTP over the network |
| **Server spawned by** | `MCPStdioTool` automatically | You, independently |
| **MAF tool class** | `MCPStdioTool` | `MCPStreamableHTTPTool` |
| **Multiple clients** | No | Yes |
| **Remote server** | No | Yes |
| **Authentication** | Not applicable | Headers / Bearer tokens |
| **Best for** | Local dev, IDE plugins | Production, microservices |
| **`as_mcp_server()` call** | Identical | Identical |

The last row is the most important one. `agent.as_mcp_server()` is exactly the same in both approaches. The only thing that changes is how you wire the transport. MAF decouples the agent completely from the delivery mechanism.

---

## What's Next

Part 3 asks a deeper question: how is `agent.as_mcp_server()` different from just implementing an MCP server directly with the official Python MCP SDK? The answer is more significant than just reduced boilerplate — it is a fundamental architectural difference in where the intelligence lives.

➡️ **[Continue to Part 3: MAF vs Raw MCP](./maf-mcp-server-part3)**

---

## References

- [Microsoft Agent Framework — MCP Tools](https://learn.microsoft.com/en-us/agent-framework/agents/tools/local-mcp-tools?pivots=programming-language-python)
- [Model Context Protocol — Official Docs](https://modelcontextprotocol.io/)
- [Microsoft Agent Framework — GitHub Repository](https://github.com/microsoft/agent-framework)
