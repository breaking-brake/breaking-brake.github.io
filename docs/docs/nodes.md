# Nodes

The Node Palette groups nodes into four sections that mirror the sidebar in the editor. Every workflow also begins with a **Start** node, added automatically when you create a new workflow.

## Basic Nodes

### Prompt

Template with variables. The most common building block — a free-text instruction, optionally parameterized, that gets sent to the AI agent.

### Sub-Agent

Execute a specialized task. Delegate a single step to a separate agent context, isolating expensive context (large files, long histories) from the parent flow.

### Skill

Execute a Claude Code Skill. Reference an Agent Skill (`SKILL.md`) from `~/.claude/skills/` or the project-level `.claude/skills/`. Compose workflows from a curated skill library instead of copy-pasting prompts.

### MCP Tool

Execute an MCP tool. Call a tool exposed by any registered MCP server, with three configuration modes:

1. **Manual parameter config** — fill in tool parameters by hand
2. **AI parameter config** — let the agent decide parameter values at runtime
3. **AI tool selection** — let the agent pick which tool to call from a curated list

The node integrates with VS Code's MCP configuration (user, project, and enterprise scopes), so any server you've registered in Claude Code is available here.

## Special Nodes

### Codex Agent (Beta)

Execute OpenAI Codex CLI. Targets Codex specifically for the step, instead of the host agent. Requires enabling Codex Beta in settings.

## Layout

### Group

A visual container that bundles related nodes together. Groups don't change runtime behavior — they exist to keep large canvases readable.

## Control Flow

### If/Else

Binary conditional branch (True/False). Use this for simple yes/no decisions.

### Switch

Multi-way conditional branch (2–N cases). Define any number of labeled cases plus a default branch. Use this when the agent needs to choose between several distinct paths.

### Ask User Question

Pause the workflow and prompt the user for input before continuing — a confirmation, a target file path, or a free-text response to branch on.

### End

Workflow termination point. A workflow can have multiple End nodes — one per branch — to represent different outcomes.
