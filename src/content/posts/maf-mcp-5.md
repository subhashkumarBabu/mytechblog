---
title: "Driving AI Agents from YAML: Config-First Agent Servers in MAF"
published: 2026-02-22
description: "How to externalise agent configuration into YAML files with Pydantic validation, and load multiple agents at startup without touching Python code."
tags: [MAF, MCP, REST, Agentic AI, Multi-Agent, Microsoft, Python, YAML]
category: Agentic AI
draft: false
---

## The Problem with Hardcoded Config

In Part 4 we built a server that gives a MAF `ChatAgent` three simultaneous interfaces — MCP, REST, and a service registry — all from a single `tools` list. But the agent's name, ports, instructions, and tool list were hardcoded as a Python dict inside `server.py`:

```python
AGENT_CONFIG = {
    "name":         "ServiceNowAgent",
    "display_name": "ServiceNow Incident Manager",
    "description":  "Manages ServiceNow incidents — create, update, search.",
    "version":      "1.0.0",
    "tags":         ["servicenow", "itsm"],
    "module":       "tools",
    "tools":        ["create_incident", "update_incident", "search_incident"],
    "instructions": "You are a ServiceNow assistant...",
}
```

This works for a single agent. But the moment you need a second agent — a Jira agent, a GitHub agent, a Slack agent — you have to edit `server.py` again. The file that should be infrastructure starts accumulating business logic. Deployments become fragile. Non-engineers can't configure agents without touching Python.

The fix is to externalise configuration into YAML files — one file per agent — and have `server.py` discover and load them at startup. No Python changes needed to add, remove, or reconfigure an agent.

---

## The YAML Schema

Each agent lives in its own file in an `agents/` directory. The schema is designed to be self-documenting and cover everything `server.py` previously hardcoded:

```yaml
# agents/servicenow_agent.yaml
# ──────────────────────────────────────────────────────────────────
# One file per agent. server.py discovers all *.yaml files in the
# agents/ directory on startup.
# ──────────────────────────────────────────────────────────────────

agent:
  # ── Identity ───────────────────────────────────────────────────
  name: ServiceNowAgent              # unique key — used in registry and MCP
  display_name: ServiceNow Incident Manager
  description: Manages ServiceNow incidents — create, update, search.
  version: "1.0.0"
  tags:
    - servicenow
    - itsm

  # ── Ports ──────────────────────────────────────────────────────
  ports:
    rest: 8000
    mcp: 8001

  # ── Tools ──────────────────────────────────────────────────────
  module: tools                      # Python module to import tools from
  tools:
    - create_incident
    - update_incident
    - search_incident

  # ── Behaviour ──────────────────────────────────────────────────
  instructions: |
    You are a ServiceNow assistant. Use your tools to manage incidents.
    Always confirm the incident number in your response.
    When urgency is not specified, default to Medium (2).
```

A few deliberate choices here. The `instructions` field uses YAML's block scalar (`|`) so multi-line system prompts stay readable without escaping. The `ports` block is its own section rather than flat fields, making it clear these are deployment concerns separate from identity. The `name` field is the unique key used in the registry and as the MCP server identifier — it cannot contain spaces.

Adding a second agent is just a new file:

```yaml
# agents/jira_agent.yaml
agent:
  name: JiraAgent
  display_name: Jira Issue Manager
  description: Creates and tracks Jira issues across projects.
  version: "1.0.0"
  tags:
    - jira
    - project-management
  ports:
    rest: 8010
    mcp: 8011
  module: jira_tools
  tools:
    - create_issue
    - update_issue
    - search_issues
  instructions: |
    You are a Jira assistant. Use your tools to manage issues.
    Always include the issue key in your response.
```

No changes to `server.py`. No Python at all.

---

## Validating the Config with Pydantic

Loading YAML is trivial — two lines of Python. The harder problem is catching errors early. A typo in a port number, a missing `name` field, or two agents sharing the same port should fail loudly at startup with a clear message, not silently misbehave at runtime.

Pydantic makes this straightforward. Two model classes mirror the YAML structure exactly:

```python
from pydantic import BaseModel, Field, ValidationError, field_validator

class PortsConfig(BaseModel):
    rest: int = Field(..., gt=1024, lt=65535, description="REST API port")
    mcp:  int = Field(..., gt=1024, lt=65535, description="MCP server port")

    @field_validator("mcp")
    @classmethod
    def ports_must_differ(cls, mcp, info):
        rest = info.data.get("rest")
        if rest and mcp == rest:
            raise ValueError("mcp port must differ from rest port")
        return mcp


class AgentConfig(BaseModel):
    name:         str         = Field(..., min_length=1, pattern=r"^[A-Za-z][A-Za-z0-9_-]*$")
    display_name: str         = Field(..., min_length=1)
    description:  str         = Field(..., min_length=1)
    version:      str         = Field("1.0.0")
    tags:         list[str]   = Field(default_factory=list)
    ports:        PortsConfig
    module:       str         = Field(..., min_length=1)
    tools:        list[str]   = Field(..., min_length=1)
    instructions: str         = Field(..., min_length=1)
```

The `name` field uses a regex pattern to enforce that it starts with a letter and contains only alphanumerics, hyphens, and underscores — no spaces, no special characters that would break URL paths or registry keys. The `PortsConfig` validator catches the case where `rest` and `mcp` are accidentally set to the same value, which would cause a silent port collision at startup.

Loading a file then becomes a single function:

```python
def load_config(yaml_path: str) -> AgentConfig:
    with open(yaml_path) as f:
        raw = yaml.safe_load(f)
    try:
        return AgentConfig(**raw["agent"])
    except (KeyError, ValidationError) as e:
        raise ValueError(f"Invalid config in '{yaml_path}': {e}") from e
```

If the `agent:` key is missing entirely, or if any field fails validation, the error message includes the file path and Pydantic's field-level explanation. No guessing about which file caused the problem.

---

## Discovering and Loading Multiple Agents

`discover_configs()` handles the multi-agent case. It either loads explicit paths passed as command-line arguments, or globs all `*.yaml` files from the `agents/` directory. After loading, it checks for port collisions across agents — catching the case where two YAML files both claim port 8000:

```python
def discover_configs(agents_dir: str, explicit: list[str]) -> list[AgentConfig]:
    paths = explicit if explicit else sorted(glob.glob(f"{agents_dir}/*.yaml"))
    if not paths:
        raise RuntimeError(f"No agent YAML files found in '{agents_dir}/'.")

    configs = [load_config(p) for p in paths]

    # Guard against port collisions across agents
    seen_ports: set[int] = set()
    for cfg in configs:
        for port in (cfg.ports.rest, cfg.ports.mcp):
            if port in seen_ports:
                raise ValueError(f"Port {port} is used by more than one agent.")
            seen_ports.add(port)

    return configs
```

The port collision check happens before any servers start, so you get a clean error at launch rather than a cryptic `address already in use` failure mid-startup.

---

## Running Multiple Agents Concurrently

With configs validated, `run_agent()` does the same work as before for each agent — loading tools, building the REST API and MCP app, starting uvicorn servers, and self-registering — but now it takes an `AgentConfig` instead of a raw dict, and ports come from `cfg.ports.rest` and `cfg.ports.mcp` rather than module-level constants:

```python
async def run_agent(cfg: AgentConfig, all_tasks: list):
    tools    = load_tools(cfg.module, cfg.tools)
    rest_app = build_rest_api(tools, cfg.display_name)
    agent    = ChatAgent(
        chat_client=make_client(),
        name=cfg.name,
        description=cfg.description,
        instructions=cfg.instructions,
        tools=tools,
    )
    mcp_app = build_mcp_app(agent)

    servers = {
        "rest": uvicorn.Server(uvicorn.Config(rest_app, host="0.0.0.0", port=cfg.ports.rest, log_level="warning")),
        "mcp":  uvicorn.Server(uvicorn.Config(mcp_app,  host="0.0.0.0", port=cfg.ports.mcp,  log_level="warning")),
    }
    tasks = {k: asyncio.create_task(s.serve()) for k, s in servers.items()}
    all_tasks.extend(tasks.values())

    await asyncio.sleep(0.3)

    async with httpx.AsyncClient() as client:
        await client.post(
            f"http://localhost:{REGISTRY_PORT}/registry/register",
            json=build_registration(cfg, tools),
        )

    print(f"  [{cfg.name}] REST → http://localhost:{cfg.ports.rest}/docs")
    print(f"  [{cfg.name}] MCP  → http://localhost:{cfg.ports.mcp}/sse")

    return servers
```

`main()` starts the registry first, then loops over all configs and calls `run_agent()` for each. Because each agent's servers are started with `asyncio.create_task()`, they all run concurrently in the same event loop — no threads, no subprocesses:

```python
async def main():
    explicit = [a for a in sys.argv[1:] if a.endswith(".yaml")]
    configs  = discover_configs(AGENTS_DIR, explicit)

    # Start the shared registry first
    registry_server = uvicorn.Server(
        uvicorn.Config(registry_app, host="0.0.0.0", port=REGISTRY_PORT, log_level="warning")
    )
    registry_task = asyncio.create_task(registry_server.serve())
    await asyncio.sleep(0.3)
    print(f"  [Registry] http://localhost:{REGISTRY_PORT}/registry\n")

    # Start each agent
    all_agent_tasks: list = []
    all_servers: list = []
    for cfg in configs:
        servers = await run_agent(cfg, all_agent_tasks)
        all_servers.append(servers)

    try:
        await asyncio.gather(registry_task, *all_agent_tasks)
    finally:
        # Deregister all agents on shutdown
        async with httpx.AsyncClient() as client:
            for cfg in configs:
                await client.delete(
                    f"http://localhost:{REGISTRY_PORT}/registry/{cfg.name}"
                )
        for servers in all_servers:
            for s in servers.values():
                s.should_exit = True
        registry_server.should_exit = True
        await asyncio.gather(registry_task, *all_agent_tasks, return_exceptions=True)
        print("\n  All agents deregistered. Servers stopped.")
```

---

## Running It

With two YAML files in the `agents/` directory, a single command starts everything:

```bash
python server.py
```

```
  [Registry] http://localhost:8002/registry

  [ServiceNowAgent] REST → http://localhost:8000/docs
  [ServiceNowAgent] MCP  → http://localhost:8001/sse
  [JiraAgent] REST → http://localhost:8010/docs
  [JiraAgent] MCP  → http://localhost:8011/sse
```

To start only one specific agent without touching the others:

```bash
python server.py agents/servicenow_agent.yaml
```

---

## What the Registry Now Knows

With two agents running, `GET /registry` returns the full catalogue:

```json
{
  "total": 2,
  "agents": [
    {
      "name": "ServiceNowAgent",
      "display_name": "ServiceNow Incident Manager",
      "description": "Manages ServiceNow incidents — create, update, search.",
      "version": "1.0.0",
      "tags": ["servicenow", "itsm"],
      "interfaces": {
        "rest": "http://localhost:8000/docs",
        "mcp":  "http://localhost:8001/sse"
      },
      "tools": [ ... ],
      "registered_at": "2026-02-22T09:00:00Z"
    },
    {
      "name": "JiraAgent",
      ...
    }
  ]
}
```

An orchestrator agent could query this registry at startup to discover what agents are available and where they are, rather than having their URLs hardcoded. That is the next natural step — a registry-aware orchestrator that wires agents together dynamically.

---

## The Final Project Structure

```
project/
├── agents/
│   ├── servicenow_agent.yaml   ← one file per agent
│   └── jira_agent.yaml
├── tools.py                    ← @ai_function ServiceNow tools
├── jira_tools.py               ← @ai_function Jira tools
├── server.py                   ← discovers and runs everything
└── .env                        ← Azure OpenAI credentials
```

Adding a new agent is now entirely a YAML and tools file concern. `server.py` is infrastructure — it never needs to change.

---

## What Changed and Why It Matters

| | Part 4 (hardcoded) | Part 5 (YAML-driven) |
|---|---|---|
| **Agent config lives in** | Python dict in `server.py` | `agents/*.yaml` files |
| **Adding a new agent requires** | Editing `server.py` | Adding a new `.yaml` file |
| **Config validation** | None — errors at runtime | Pydantic at startup with clear messages |
| **Port collision detection** | None | Caught before any server starts |
| **Multi-agent support** | One agent only | Unlimited — one YAML per agent |
| **Selective startup** | Not supported | `python server.py agents/servicenow.yaml` |
| **Non-engineer friendly** | No | Yes — YAML only |

The core architecture from Part 4 is unchanged — the same three surfaces, the same `as_mcp_server()` call, the same registry design. YAML is just the configuration layer on top.

---

*This post is part of a series on building multi-agent systems with Microsoft Agent Framework.*

*[← Part 1: Stdio](./maf-mcp-server-part1) | [← Part 2: HTTP/SSE](./maf-mcp-server-part2) | [← Part 3: MAF vs Raw MCP](./maf-mcp-server-part3) | [← Part 4: Three Interfaces](./maf-mcp-server-part4)*

---

## References

- [Microsoft Agent Framework — GitHub Repository](https://github.com/microsoft/agent-framework)
- [Model Context Protocol — Official Docs](https://modelcontextprotocol.io/)
- [Pydantic — Official Docs](https://docs.pydantic.dev/)
- [PyYAML — Official Docs](https://pyyaml.org/wiki/PyYAMLDocumentation)
- [FastAPI — Official Docs](https://fastapi.tiangolo.com/)
