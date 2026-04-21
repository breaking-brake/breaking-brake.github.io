# Quick Start

## 1. Install

Install CC Workflow Studio from the VS Code Marketplace or OpenVSX. See [Installation](./installation) for details.

## 2. Open the editor

- Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`) → **CC Workflow Studio: Open Editor**
- Or click the CC Workflow Studio icon in the top-right corner of the editor

## 3. First-launch tour

The first time you open the editor, a sample GitHub issue planning workflow is loaded onto the canvas and a 7-step tour starts automatically:

1. **Welcome** — short intro to what you're looking at
2. **Canvas** — drag nodes to move, drag handles (⚪) to connect
3. **Property Panel** — click a node to edit its name, prompt, model, etc.
4. **Node Palette** — add Prompt, Sub-Agent, Skill, MCP Tool, If/Else, Switch, and more
5. **Toolbar Actions** — Save, Load, Convert, and Run workflows
6. **Edit with AI** — generate or refine workflows conversationally
7. **Finish** — you're ready to build

You can re-run the tour anytime from the **More** menu → **Help**.

## 4. Build your own workflow

1. Click **New** (or clear the sample) to start with a blank canvas
2. Drag a **Start** node, then a **Prompt** node, then an **End** node from the Node Palette
3. Connect them by dragging between the ⚪ handles
4. Click a node to configure it in the Property Panel
5. Click **Save** — the workflow is written to `.vscode/workflows/<name>.json`

## 5. Export and run

Two toolbar buttons turn your workflow into something your AI tool can use:

- **Export** — generates a Markdown file (slash command, agent skill, or prompt) for the selected AI tool
- **Run** — invokes the AI tool with the exported workflow attached

Each integration writes to a tool-specific directory. See [Integrations](./integrations) for the full list.

## Next steps

- [Nodes](./nodes) — full list of node types you can drop on the canvas
- [Edit with AI](./edit-with-ai) — let an AI agent modify the canvas through the built-in MCP server
- [Workflow JSON Schema](./workflow-schema) — shape of the workflow data
