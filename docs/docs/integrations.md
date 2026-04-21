# Integrations

CC Workflow Studio exports the same workflow to eight different AI coding tools. Pick whichever one your team is using — the canvas stays the same.

| Tool | Output directory | Activation |
|------|------------------|------------|
| Claude Code | `.claude/agents/`, `.claude/commands/` | Enabled by default |
| GitHub Copilot Chat | `.github/prompts/` | Toolbar **More** menu |
| GitHub Copilot CLI | `.github/skills/` | Toolbar **More** menu |
| Codex CLI | `.codex/skills/` | Toolbar **More** menu |
| Cursor | `.cursor/agents/`, `.cursor/skills/` | Toolbar **More** menu |
| Roo Code | `.roo/skills/` | Toolbar **More** menu |
| Gemini CLI | `.gemini/skills/` | Toolbar **More** menu |
| Antigravity | `.agent/skills/` | Toolbar **More** menu |

## Claude Code

[Claude Code](https://github.com/anthropics/claude-code) is the primary export target. Workflows are written to two directories under your project root:

- `.claude/agents/` — full agent definitions
- `.claude/commands/` — slash commands you can invoke as `/<workflow-name>` inside Claude Code

No activation step is needed; the Claude Code exporter is enabled by default.

## GitHub Copilot

CC Workflow Studio targets both Copilot surfaces:

- **Copilot Chat** — exports prompts to `.github/prompts/` for use inside the chat panel
- **Copilot CLI** — exports skills to `.github/skills/` for use from the [`gh copilot`](https://github.com/github/copilot-cli) command line

Activate the Copilot exporters from the toolbar's **More** menu. Both targets share the same workflow source.

## Codex CLI

[OpenAI Codex CLI](https://github.com/openai/codex) skills are exported to `.codex/skills/`. If your workflow contains a Codex Agent node, that step will be executed by Codex regardless of which target you exported to.

## Cursor

[Cursor](https://github.com/cursor/cursor) gets two output directories, mirroring the Claude Code split:

- `.cursor/agents/` — full agent definitions
- `.cursor/skills/` — reusable skills

## Roo Code, Gemini CLI, Antigravity

These three targets share the same skill-export shape:

- **Roo Code** — [Roo Code](https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline) writes to `.roo/skills/`
- **Gemini CLI** — [Gemini CLI](https://github.com/google-gemini/gemini-cli) writes to `.gemini/skills/`
- **Antigravity** — [Antigravity](https://antigravity.google/) writes to `.agent/skills/`

