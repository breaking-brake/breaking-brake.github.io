# Workflow JSON Schema

Workflows are stored as JSON files under `.vscode/workflows/<name>.json`. The schema (`resources/workflow-schema.json` in the cc-wf-studio repository) is the source of truth for both the editor and external MCP clients.

## Top-level shape

```json
{
  "schemaVersion": "1.0.0",
  "name": "my-workflow",
  "nodes": [ ... ],
  "edges": [ ... ]
}
```

- **`schemaVersion`** — pinned to the schema version the workflow was written against
- **`name`** — display name; also used as the exported command/skill filename
- **`nodes`** — array of node objects (see below)
- **`edges`** — array of connections between node ports

## Supported node types

| Type | Purpose |
|------|---------|
| `start` | Entry point — exactly one per workflow |
| `end` | Exit point — at least one required |
| `prompt` | Instruction or message step |
| `subAgent` | Delegate a step to a sub-agent |
| `subAgentFlow` | Embed an entire workflow as a sub-agent |
| `codex` | Run a step with OpenAI Codex CLI |
| `skill` | Reference a `SKILL.md` Agent Skill |
| `mcp` | Call a tool on a registered MCP server |
| `askUserQuestion` | Pause and ask the user for input |
| `ifElse` | Binary branching |
| `switch` | Multi-way branching |
| `group` | Visual grouping of related nodes |

Each node has its own required / optional fields, length limits, and allowed enum values. See the schema file for the authoritative definitions.

## Node shape

```json
{
  "id": "node-1",
  "type": "prompt",
  "position": { "x": 120, "y": 80 },
  "data": {
    "label": "Summarize the input",
    "prompt": "Summarize the following text in 3 bullet points…"
  }
}
```

- **`id`** — unique within the workflow
- **`type`** — one of the types above
- **`position`** — canvas coordinates
- **`data`** — type-specific fields (enforced by the schema)

## Limits

- **Max nodes per workflow**: `100` by default, configurable via the `cc-wf-studio.workflow.maxNodes` VS Code setting
- **Field lengths**: most free-text fields are capped (e.g., `prompt` at 10,000 characters, `description` at 200)

## Two representations

The schema ships in two formats:

- **`resources/workflow-schema.json`** — the source of truth, edited by humans
- **`resources/workflow-schema.toon`** — a token-efficient format generated from the JSON schema at build time, used when sending the schema to AI agents. Never edit this file by hand

