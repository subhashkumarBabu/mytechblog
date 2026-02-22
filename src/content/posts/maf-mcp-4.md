---
title: "Building a Full-Stack AI Agent Server: Extending as_mcp_server() with agent_runner Principles"
published: 2026-02-22
description: "How to combine MAF's agent.as_mcp_server() with the agent_runner pattern to give a single agent three simultaneous interfaces — MCP, REST, and a service registry — all from one tools list."
tags: [MAF, MCP, REST, Agentic AI, Multi-Agent, Microsoft, Python]
category: Agentic AI
draft: false
---

## The Problem with Single-Interface Agents

Previous posts in this series showed how to expose a MAF `ChatAgent` as an MCP server using `agent.as_mcp_server()`. That works well for AI clients — another agent, VS Code Copilot, or Claude Desktop can connect and send natural language queries. But in a real enterprise environment, not every consumer of your agent is an AI client.

A traditional monitoring dashboard wants to call `search_incident` over HTTP. A CI pipeline wants to call `create_incident` via a REST POST. An orchestration layer wants to discover what agents exist and what they can do. None of these consumers speak MCP, and none of them want to reason through natural language — they want structured, predictable HTTP endpoints.

The `agent_runner.py` pattern in the MAF samples solves this by spinning up three things simultaneously: a `ChatAgent` for AI-to-AI orchestration, a REST API for direct HTTP access, and a registry for service discovery. But `agent_runner.py` uses `FastMCP` for its MCP surface, which exposes each tool individually rather than wrapping the agent as a single intelligent entity.

The question is: can you extend `agent.as_mcp_server()` with the `agent_runner` principles — getting REST, MCP, and registry all at once, while keeping the agent-as-single-tool MCP behaviour?

The answer is yes, and this post shows exactly how.

---

## The Architecture

The goal is a single `server.py` that, on startup, builds and runs three surfaces simultaneously from the same tools list:

```
python server.py
    │
    ├── Registry  (port 8002) — service catalogue, self-registers on boot
    ├── REST API  (port 8000) — each tool as its own HTTP endpoint
    └── MCP Server (port 8001) — agent as a single opaque tool via as_mcp_server()
```

All three are derived from the same `tools` list. The `ChatAgent` is created once and handed to `build_mcp_app()`. The REST API and registry payload are built directly from the tool function signatures using Python's `inspect` module and the `Annotated` type hints — the same approach as `agent_runner.py`.

---

## The Tools

The same `tools.py` from the rest of this series powers everything. The `@ai_function` decorator and `Annotated` type hints serve triple duty here — they define the REST request schemas, the registry tool entries, and the ChatAgent's internal tool set all at once:

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

---

## The Agent Config

Rather than hardcoding values, the agent is described in a single config dict that mirrors the structure of `agent_config.yaml`. This makes it easy to later drive the whole server from a YAML file if needed:

```python
AGENT_CONFIG = {
    "name":         "ServiceNowAgent",
    "display_name": "ServiceNow Incident Manager",
    "description":  "Manages ServiceNow incidents — create, update, search.",
    "version":      "1.0.0",
    "tags":         ["servicenow", "itsm"],
    "module":       "tools",
    "tools":        ["create_incident", "update_incident", "search_incident"],
    "instructions": "You are a ServiceNow assistant. Use your tools to manage incidents.",
}
```

---

## Building the Three Surfaces

### Surface 1: REST API

`build_rest_api()` is taken directly from `agent_runner.py`. It inspects each tool function's signature and type hints to auto-generate FastAPI routes. Write operations — anything with `create`, `update`, `delete`, or `set` in the name — become `POST` endpoints with an auto-generated Pydantic request body. Read operations become `GET` endpoints with query parameters. Swagger UI at `/docs` is free.

```python
def build_rest_api(tools: list, display_name: str) -> FastAPI:
    app = FastAPI(title=f"{display_name} API", version="1.0")

    for tool in tools:
        fn       = _unwrap(tool)
        sig      = inspect.signature(fn)
        hints    = get_type_hints(fn, include_extras=True)
        is_write = any(k in fn.__name__ for k in ("create", "update", "delete", "set"))

        fields = {}
        for pname, param in sig.parameters.items():
            base_type, _ = _unwrap_annotated(hints.get(pname, str))
            default = ... if param.default is inspect.Parameter.empty else param.default
            fields[pname] = (base_type, default)

        if is_write:
            Model = create_model(f"{fn.__name__}_req", **fields)
            def make_post(f, M):
                def handler(body: M):
                    return {"result": f(**body.model_dump())}
                handler.__name__ = f.__name__
                return handler
            app.add_api_route(f"/{fn.__name__}", make_post(fn, Model), methods=["POST"],
                              summary=inspect.getdoc(fn) or fn.__name__)
        else:
            def make_get(f, qfields):
                def handler(**kwargs):
                    return {"result": f(**kwargs)}
                handler.__name__ = f.__name__
                handler.__signature__ = inspect.Signature([
                    inspect.Parameter(k, inspect.Parameter.KEYWORD_ONLY, default=d, annotation=t)
                    for k, (t, d) in qfields.items()
                ])
                return handler
            app.add_api_route(f"/{fn.__name__}", make_get(fn, fields), methods=["GET"],
                              summary=inspect.getdoc(fn) or fn.__name__)

    return app
```

The `_unwrap()` helper peels back the `@ai_function` decorator to get at the plain Python function underneath, since `inspect` needs the raw function to read its signature correctly.

### Surface 2: MCP Server

`build_mcp_app()` is where `as_mcp_server()` comes in. It wraps the `ChatAgent` in an HTTP/SSE Starlette application — the same transport pattern from Part 2 of this series. The key point is that this surface exposes the **agent as a single entity**, not the individual tool functions:

```python
def build_mcp_app(agent: ChatAgent) -> Starlette:
    mcp_server = agent.as_mcp_server()
    sse        = SseServerTransport("/messages")

    async def handle_sse(request):
        async with sse.connect_sse(request.scope, request.receive, request._send) as streams:
            await mcp_server.run(
                streams[0], streams[1],
                mcp_server.create_initialization_options(),
            )

    async def handle_messages(request):
        await sse.handle_post_message(request.scope, request.receive, request._send)

    return Starlette(routes=[
        Route("/sse",      handle_sse,      methods=["GET"]),
        Route("/messages", handle_messages, methods=["POST"]),
    ])
```

An AI client connecting to port 8001 and calling `list_tools()` will see exactly one entry:

```json
[
  {
    "name": "ServiceNowAgent",
    "description": "Manages ServiceNow incidents — create, update, search.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "query": { "type": "string" }
      }
    }
  }
]
```

The individual functions are invisible from this interface — they are internal implementation details of the agent.

### Surface 3: Registry

The registry is a lightweight FastAPI service that acts as a service catalogue. It supports registering, listing, looking up, and deregistering agents via simple HTTP endpoints:

```python
registry_app = FastAPI(title="Registry", version="1.0")
_registry: dict = {}

@registry_app.get("/registry")
def list_agents():
    return {"total": len(_registry), "agents": list(_registry.values())}

@registry_app.get("/registry/{name}")
def get_agent(name: str):
    if name not in _registry:
        raise HTTPException(404, f"Agent '{name}' not found.")
    return _registry[name]

@registry_app.get("/registry/{name}/tools")
def list_tools_endpoint(name: str):
    if name not in _registry:
        raise HTTPException(404, f"Agent '{name}' not found.")
    return {"agent": name, "tools": _registry[name]["tools"]}

@registry_app.post("/registry/register")
def register(payload: dict):
    _registry[payload["name"]] = {
        **payload,
        "registered_at": datetime.now(timezone.utc).isoformat(),
    }
    return {"registered": payload["name"]}

@registry_app.delete("/registry/{name}")
def deregister(name: str):
    _registry.pop(name, None)
    return {"deregistered": name}
```

---

## The Critical Design Decision: What Gets Registered

This is the most important subtlety in the whole approach. When the server self-registers, what tool schemas does it send to the registry?

It could register the single opaque `ServiceNowAgent(query)` entry — the same thing `list_tools()` on the MCP server returns. But that would make the registry useless for anyone trying to understand what the agent can actually do.

Instead, `build_registration()` registers the **individual tool schemas** derived from the `@ai_function` type hints:

```python
def build_registration(cfg: dict, tools: list) -> dict:
    return {
        "name":         cfg["name"],
        "display_name": cfg["display_name"],
        "description":  cfg["description"],
        "version":      cfg["version"],
        "tags":         cfg.get("tags", []),
        "interfaces": {
            "rest": f"http://localhost:{REST_PORT}/docs",
            "mcp":  f"http://localhost:{MCP_PORT}/sse",
        },
        "tools": [_tool_schema(t) for t in tools],  # individual schemas, not the agent wrapper
    }
```

This means `GET /registry/ServiceNowAgent/tools` returns the full, human-readable schema for `create_incident`, `update_incident`, and `search_incident` — complete with parameter types, descriptions, defaults, and required fields. The registry is for **discovery and documentation**. The MCP server's opaqueness is a runtime concern; the registry should reflect what the agent can actually do.

The two views of the same agent are intentionally different:

```
Registry  (port 8002) → individual tools, full schemas, for discovery
MCP Server (port 8001) → single agent entry, for AI client delegation
REST API  (port 8000) → individual endpoints, for direct HTTP calls
```

---

## Putting It All Together: main()

The `main()` function loads the tools once and passes them to all three builders. Three uvicorn servers are started concurrently with `asyncio.create_task()`, a brief sleep gives them time to initialise, and then the agent self-registers. On shutdown — whether from Ctrl+C or a crash — the `finally` block deregisters cleanly:

```python
async def main():
    cfg   = AGENT_CONFIG
    tools = load_tools(cfg["module"], cfg["tools"])

    rest_app = build_rest_api(tools, cfg["display_name"])
    agent    = ChatAgent(
        chat_client=make_client(),
        name=cfg["name"],
        description=cfg["description"],
        instructions=cfg["instructions"],
        tools=tools,
    )
    mcp_app = build_mcp_app(agent)

    servers = {
        "registry": uvicorn.Server(uvicorn.Config(registry_app, host="0.0.0.0", port=REGISTRY_PORT, log_level="warning")),
        "rest":     uvicorn.Server(uvicorn.Config(rest_app,     host="0.0.0.0", port=REST_PORT,     log_level="warning")),
        "mcp":      uvicorn.Server(uvicorn.Config(mcp_app,      host="0.0.0.0", port=MCP_PORT,      log_level="warning")),
    }

    tasks = {k: asyncio.create_task(s.serve()) for k, s in servers.items()}
    await asyncio.sleep(0.5)

    async with httpx.AsyncClient() as client:
        await client.post(
            f"http://localhost:{REGISTRY_PORT}/registry/register",
            json=build_registration(cfg, tools),
        )

    print(f"  [{cfg['name']}] Registry  → http://localhost:{REGISTRY_PORT}/registry")
    print(f"  [{cfg['name']}] REST API  → http://localhost:{REST_PORT}/docs")
    print(f"  [{cfg['name']}] MCP       → http://localhost:{MCP_PORT}/sse")

    try:
        await asyncio.gather(*tasks.values())
    finally:
        async with httpx.AsyncClient() as client:
            await client.delete(
                f"http://localhost:{REGISTRY_PORT}/registry/{cfg['name']}"
            )
        for s in servers.values():
            s.should_exit = True
        await asyncio.gather(*tasks.values(), return_exceptions=True)
```

---

## Running It

```bash
python server.py
```

```
  [ServiceNowAgent] Registry  → http://localhost:8002/registry
  [ServiceNowAgent] REST API  → http://localhost:8000/docs
  [ServiceNowAgent] MCP       → http://localhost:8001/sse
  [ServiceNowAgent] registered.
```

All three interfaces are now live from a single process.

### Using the REST API

```bash
# Create an incident
curl -X POST http://localhost:8000/create_incident \
  -H "Content-Type: application/json" \
  -d '{"short_description": "VPN not working", "urgency": "1"}'

# Search incidents
curl "http://localhost:8000/search_incident?query=VPN"
```

### Using the Registry

```bash
# List all registered agents
curl http://localhost:8002/registry

# Get tool schemas for ServiceNowAgent
curl http://localhost:8002/registry/ServiceNowAgent/tools
```

### Using the MCP Server

Any MCP client can connect to `http://localhost:8001/sse`. From a MAF client:

```python
async with (
    MCPStreamableHTTPTool(
        name="ServiceNowAgent",
        url="http://localhost:8001/sse",
    ) as servicenow_mcp,
    ChatAgent(
        chat_client=make_client(),
        name="Client",
        instructions="Use the ServiceNow agent tool to handle requests.",
        tools=servicenow_mcp,
    ) as agent,
):
    result = await agent.run("Find any open VPN incidents and resolve them.")
    print(result)
```

---

## What Each Interface Is For

| Interface | Port | Consumer | Input | Who reasons? |
|---|---|---|---|---|
| Registry | 8002 | Any service doing discovery | — | — |
| REST API | 8000 | Dashboards, scripts, pipelines | Structured JSON | Nobody — direct execution |
| MCP Server | 8001 | AI clients, other MAF agents | Natural language | Server's ChatAgent |

---

## How This Compares to `agent_runner.py`

The original `agent_runner.py` already ran REST + MCP + registry simultaneously, so it's worth being precise about what this approach changes.

`agent_runner.py` uses `FastMCP` for its MCP surface, which registers each tool function individually. A client calling `list_tools()` sees `create_incident`, `update_incident`, and `search_incident` as separate callable tools. The client's LLM must reason about which to call.

This approach uses `agent.as_mcp_server()` instead, which exposes the whole `ChatAgent` as one tool. The client sees only `ServiceNowAgent(query)`. The agent's internal LLM handles all the reasoning, including multi-step and compound requests that would require client-side orchestration in the `agent_runner` model.

| | `agent_runner.py` (FastMCP) | This approach (as_mcp_server) |
|---|---|---|
| **MCP tools exposed** | Each function individually | Single agent entry |
| **Client `list_tools()` sees** | `create_incident`, `update_incident`, `search_incident` | `ServiceNowAgent` |
| **Reasoning for MCP** | Client's LLM | Server's ChatAgent |
| **Compound requests via MCP** | Client must orchestrate | Server handles |
| **LLM calls per MCP request** | One (client) | Two (client + server) |
| **REST API** | ✅ Same | ✅ Same |
| **Registry** | ✅ Same | ✅ Same |
| **Registry tool schemas** | Individual functions | Individual functions |

The registry tool schemas are identical in both approaches — both store the individual function schemas for discovery purposes. The difference is purely in what the MCP surface exposes at runtime.

---

## When to Use This Approach

This pattern is the right choice when your agent needs to serve a mixed audience — AI clients that want to delegate via natural language, traditional services that want predictable REST endpoints, and an operations team that needs service discovery. It gives you all three without running three separate processes or maintaining three separate codebases.

It is particularly well-suited to enterprise deployments where AI agents sit alongside existing HTTP-based infrastructure. The REST API means your agent can be called from a Jira webhook, a ServiceNow business rule, or a CI pipeline without any AI client on the calling side. The MCP server means it can also be called by other agents in a multi-agent MAF system. The registry means both types of consumers can find it automatically.

The trade-off compared to plain `agent_runner.py` is the extra LLM call on the server side for every MCP request. If your MCP clients are capable enough to pick the right tool directly, `agent_runner.py`'s `FastMCP` approach avoids that cost. If you want the server to handle compound and ambiguous requests autonomously, this approach is the better fit.

---

## Project Structure

The complete project is just four files:

```
project/
├── tools.py     ← @ai_function tool definitions
├── server.py    ← REST + MCP + Registry, all from one tools list
├── client.py    ← MCPStreamableHTTPTool + ChatAgent (optional)
└── .env         ← Azure OpenAI credentials
```

One file, one process, three interfaces, zero duplication.

---

*This post is part of a series on building multi-agent systems with Microsoft Agent Framework.*

*[← Part 1: The Stdio Approach](./maf-mcp-server-part1) | [← Part 2: The HTTP/SSE Approach](./maf-mcp-server-part2) | [← Part 3: MAF vs Raw MCP](./maf-mcp-server-part3)*

---

## References

- [Microsoft Agent Framework — MCP Tools](https://learn.microsoft.com/en-us/agent-framework/agents/tools/local-mcp-tools?pivots=programming-language-python)
- [Microsoft Agent Framework — GitHub Repository](https://github.com/microsoft/agent-framework)
- [Model Context Protocol — Official Docs](https://modelcontextprotocol.io/)
- [FastAPI — Official Docs](https://fastapi.tiangolo.com/)
- [Starlette — Official Docs](https://www.starlette.io/)
