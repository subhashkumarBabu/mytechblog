---
title: "Exposing an AI Agent as an MCP Server with MAF — Part 6 : How to Add a New Agent to the MAF Multi-Agent Server"
published: 2026-02-22
description: "A step-by-step guide to adding a new agent — illustrated with a Jira agent — covering the two files you need to create and the one rule you must follow."
tags: [MAF, MCP, REST, Agentic AI, Multi-Agent, Microsoft, Python, YAML]
category: Agentic AI
draft: false
---

## The Short Answer

Adding a new agent requires creating exactly two files:

1. `jira_tools.py` — the tool functions
2. `agents/jira_agent.yaml` — the agent config

Nothing else changes. `server.py` discovers the new YAML file automatically on next startup.

---

## What You Are Not Changing

It is worth being explicit about this before anything else. You do **not** touch:

- `server.py` — it discovers all `*.yaml` files in `agents/` automatically
- `tools.py` — each agent has its own tools module, they do not share one
- Any existing agent files — the ServiceNow agent continues running unchanged
- `.env` — the Azure OpenAI credentials are shared across all agents

---

## Step 1: Write the Tools

Create `jira_tools.py` in the project root. Each function must use `@ai_function` and `Annotated` type hints — this is how `server.py` derives REST schemas, registry entries, and the ChatAgent tool set without any manual schema definition.

```python
# jira_tools.py
from typing import Annotated
from agent_framework import ai_function


@ai_function
def create_issue(
    project_key: Annotated[str, "Jira project key e.g. PLAT, ENG, OPS."],
    summary:     Annotated[str, "One-line summary of the issue (5–255 chars)."],
    issue_type:  Annotated[str, "Issue type: Bug | Story | Task | Epic."] = "Task",
    priority:    Annotated[str, "Priority: Highest | High | Medium | Low | Lowest."] = "Medium",
) -> Annotated[str, "Confirmation with issue key, summary, type, and priority."]:
    """Creates a new issue in Jira."""
    return (
        f"Issue created.\n"
        f"  Key:      {project_key}-1042\n"
        f"  Summary:  {summary}\n"
        f"  Type:     {issue_type}\n"
        f"  Priority: {priority}\n"
        f"  Status:   To Do"
    )


@ai_function
def update_issue(
    issue_key:  Annotated[str, "Jira issue key e.g. PLAT-1042."],
    status:     Annotated[str, "New status: In Progress | In Review | Done | Blocked."],
    comment:    Annotated[str, "Comment to add to the issue (max 5000 chars)."] = "",
) -> Annotated[str, "Confirmation with issue key, new status, and comment."]:
    """Updates the status and adds a comment to an existing Jira issue."""
    return (
        f"Issue updated.\n"
        f"  Key:     {issue_key}\n"
        f"  Status:  {status}\n"
        f"  Comment: {comment or 'None added'}"
    )


@ai_function
def search_issues(
    query: Annotated[str, "JQL query or keyword to search issues (1–500 chars)."],
) -> Annotated[str, "Matching issues with key, summary, status, and priority."]:
    """Searches Jira issues using JQL or plain keywords."""
    return (
        f"Results for '{query}':\n"
        f"  1. PLAT-1040 — API rate limiting      — In Progress — High\n"
        f"  2. PLAT-1041 — Login page broken      — In Review   — Highest\n"
        f"  3. PLAT-1042 — Update dependencies    — To Do       — Medium"
    )
```

### Rules for Tool Functions

Every tool function must follow these conventions or `server.py` will either fail to load it or generate incorrect REST routes and schemas:

The function must be decorated with `@ai_function`. Without this, `load_tools()` will still find the function by name, but the `ChatAgent` will not be able to use it.

Every parameter must have an `Annotated[type, "description"]` hint. The description string is used in the registry schema and in the Swagger UI. A parameter without an `Annotated` hint will default to `string` type and have an empty description.

The docstring becomes the endpoint summary in Swagger and the tool description in the registry. Keep it to one line and write it as a verb phrase — `Creates a new issue in Jira`, not `This function creates issues`.

Write operations must include one of `create`, `update`, `delete`, or `set` in the function name. `server.py` uses this convention to decide whether to generate a `POST` or `GET` endpoint. A function named `create_issue` becomes `POST /create_issue`. A function named `search_issues` becomes `GET /search_issues`.

---

## Step 2: Write the YAML Config

Create `agents/jira_agent.yaml`. Copy the structure from an existing agent file and change the values:

```yaml
# agents/jira_agent.yaml

agent:
  # ── Identity ───────────────────────────────────────────────────
  name: JiraAgent
  display_name: Jira Issue Manager
  description: Creates, updates, and searches Jira issues across projects.
  version: "1.0.0"
  tags:
    - jira
    - project-management

  # ── Ports ──────────────────────────────────────────────────────
  ports:
    rest: 8010
    mcp: 8011

  # ── Tools ──────────────────────────────────────────────────────
  module: jira_tools
  tools:
    - create_issue
    - update_issue
    - search_issues

  # ── Behaviour ──────────────────────────────────────────────────
  instructions: |
    You are a Jira assistant. Use your tools to manage issues across projects.
    Always include the issue key in your response.
    When issue type is not specified, default to Task.
    When priority is not specified, default to Medium.
```

### Rules for the YAML File

`name` must be unique across all agents and must start with a letter followed only by letters, numbers, hyphens, or underscores. It is used as the key in the registry, as the identifier in the MCP server, and in the deregistration call on shutdown. `JiraAgent` is fine. `Jira Agent` (with a space) is not — Pydantic will reject it at startup.

`ports.rest` and `ports.mcp` must both be unique across the entire `agents/` directory. `server.py` checks all YAML files for port collisions before starting any servers. If two agents share a port, the whole process exits with a clear error. Use ports above 1024.

`module` is the Python module name — the filename without `.py`. Since `jira_tools.py` is in the project root and `server.py` adds the project root to `sys.path`, the module name is simply `jira_tools`.

`tools` is the list of function names to import from that module. Each name must exactly match a function defined in `jira_tools.py`. A typo here will raise a `ValueError` at startup naming the missing function.

`instructions` is the system prompt for the ChatAgent. Use YAML's block scalar (`|`) for multi-line prompts — it preserves line breaks cleanly without escaping.

---

## Step 3: Start the Server

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

Both agents are running. The registry now knows about both:

```bash
curl http://localhost:8002/registry
```

```json
{
  "total": 2,
  "agents": [
    { "name": "ServiceNowAgent", ... },
    { "name": "JiraAgent", ... }
  ]
}
```

To verify the Jira agent's tool schemas registered correctly:

```bash
curl http://localhost:8002/registry/JiraAgent/tools
```

```json
{
  "agent": "JiraAgent",
  "tools": [
    {
      "name": "create_issue",
      "description": "Creates a new issue in Jira.",
      "category": "write",
      "input_schema": {
        "type": "object",
        "required": ["project_key", "summary"],
        "properties": {
          "project_key": { "type": "string", "description": "Jira project key e.g. PLAT, ENG, OPS." },
          "summary":     { "type": "string", "description": "One-line summary of the issue (5–255 chars)." },
          "issue_type":  { "type": "string", "description": "Issue type: Bug | Story | Task | Epic.", "default": "Task" },
          "priority":    { "type": "string", "description": "Priority: Highest | High | Medium | Low | Lowest.", "default": "Medium" }
        }
      }
    },
    ...
  ]
}
```

To start only the Jira agent in isolation — useful during development:

```bash
python server.py agents/jira_agent.yaml
```

---

## What Startup Validation Catches

Before any server starts, `server.py` validates every YAML file and raises a clear error if anything is wrong. Here is what each error looks like and how to fix it:

**Missing required field:**
```
ValueError: Invalid config in 'agents/jira_agent.yaml':
  1 validation error for AgentConfig
  name
    Field required [type=missing]
```
Fix: add the missing field to the YAML.

**Invalid `name` format (contains a space):**
```
ValueError: Invalid config in 'agents/jira_agent.yaml':
  1 validation error for AgentConfig
  name
    String should match pattern '^[A-Za-z][A-Za-z0-9_-]*$'
```
Fix: remove spaces and special characters from `name`. Use `JiraAgent` not `Jira Agent`.

**`rest` and `mcp` ports are the same:**
```
ValueError: Invalid config in 'agents/jira_agent.yaml':
  1 validation error for AgentConfig
  ports.mcp
    Value error, mcp port must differ from rest port
```
Fix: give `rest` and `mcp` different port numbers.

**Port collision between two agents:**
```
ValueError: Port 8000 is used by more than one agent.
```
Fix: change the port in one of the conflicting YAML files.

**Tool function not found in module:**
```
ValueError: Tool 'create_issue' not found in module 'jira_tools'.
```
Fix: check the spelling in both the YAML `tools` list and the function name in `jira_tools.py`.

---

## Complete File Checklist

When adding a new agent, create these two files and nothing else:

```
project/
├── agents/
│   ├── servicenow_agent.yaml   ← unchanged
│   └── jira_agent.yaml         ← NEW
├── jira_tools.py               ← NEW
├── tools.py                    ← unchanged
├── server.py                   ← unchanged
└── .env                        ← unchanged
```

---

*This guide is part of a series on building multi-agent systems with Microsoft Agent Framework.*

*[← Part 4: Three Interfaces](./maf-mcp-server-part4) | [← Part 5: YAML Config](./maf-mcp-server-part5)*
