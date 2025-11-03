---
title: "Welcome to Claude Code Workflow Studio"
description: "A VSCode extension that lets you design Claude Code workflows with a visual editor. Build complex AI agent flows intuitively with no-code drag & drop operations."
pubDate: 2025-11-04
author: "breaking-brake"
---

## Introduction

Welcome to Claude Code Workflow Studio! This extension is a VSCode tool that lets you **visually design** workflows for Anthropic's Claude Code. Build complex AI agent workflows with just drag-and-drop operations—no programming required.

## What is Claude Code Workflow Studio?

### Visual Workflow Editor

Claude Code Workflow Studio is a tool for visually designing Claude Code workflows. Inspired by [Dify](https://dify.ai/), its intuitive UI makes building even complex workflows simple.

Traditionally, Claude Code required manually creating markdown files in `.claude/agents/` or `.claude/commands/`. With this extension:

- **No-code**: No programming knowledge required
- **Visual**: Place nodes with drag & drop
- **Intuitive**: Design while visually understanding the flow
- **Instant execution**: Exported files can be used immediately in Claude Code

### Why Claude Code Workflow Studio?

1. **Reduced Learning Cost**: No need to memorize markdown syntax or frontmatter

2. **Design Visualization**: Grasp entire workflows at a glance and understand complex flows easily

3. **Rapid Iteration**: Easy changes in the GUI enable unlimited trial and error

4. **Team Sharing**: Workflows saved in JSON format are easily shared with team members

5. **Privacy Protection**: Fully offline operation with no network communication

## Key Features

### 🎯 Visual Editor

Design workflows visually on a sophisticated React Flow-based canvas:

- **Drag & Drop**: Place nodes from the left palette onto the canvas
- **Connections**: Drag from output port (right) to input port (left) to connect
- **Auto Layout**: Nodes automatically align to maintain a clear flow
- **Zoom & Pan**: Freely navigate the canvas with mouse wheel and drag

### 🤖 Sub-Agent Nodes

Configure Claude Code Sub-Agents:

- **Custom Prompts**: Define agent behavior in detail
- **Tool Permissions**: Select available tools like Read, Write, Bash
- **Model Selection**:
  - **Sonnet**: Balanced performance (default)
  - **Opus**: For complex tasks
  - **Haiku**: For fast processing

### ❓ AskUserQuestion Nodes

Present choices to users and create conditional branches:

- **2-4 Options**: Branch to different nodes from each choice
- **Multi-select Support**: Multiple answers possible with multiSelect option
- **Dynamic Generation**: AI generates options based on context

### 🔀 Branch Nodes

Branch processing based on conditions:

- **Conditional Mode**: Two-way True/False branching
- **Switch Mode**: Multi-way branching with 2-N options
- **Natural Language Conditions**: Describe conditions without programming

### 💬 Prompt Nodes

Define reusable prompt templates:

- **Variable Syntax**: Embed dynamic values with `{{variableName}}`
- **Variable Detection**: Automatically recognize and validate variables
- **Runtime Replacement**: Substitute values dynamically at execution

### 💾 Save & Load

Manage workflows in JSON format:

- **Save Location**: `.vscode/workflows/` directory
- **Version Control**: Manage history with Git
- **Reuse**: Load saved workflows for editing

### 📤 One-Click Export

Output designed workflows as `.claude` files:

- `.claude/agents/*.md` - Sub-Agent definition files
- `.claude/commands/*.md` - SlashCommand files

After export, use immediately in Claude Code.

### 🔒 Safe File Handling

Protection for existing files:

- **Collision Detection**: Warns if same-name file exists
- **Confirmation Dialog**: Always confirms before overwriting
- **Backup Recommended**: Back up important files beforehand

### 🌐 Multi-language Support

Automatically adapts to VSCode display language setting (`vscode.env.language`):

- **Supported Languages**: English, Japanese, Korean, Simplified Chinese, Traditional Chinese
- **UI**: Toolbar, node palette, property panel all translated
- **Export**: Generated `.claude` files are also automatically translated

## Technology Stack

### React Flow

An industry-standard React library providing core visual editor functionality. Enables advanced node manipulation and smooth user experience.

### VSCode Extension API

Seamlessly integrates with VSCode to provide a comfortable development experience within the editor. File system access and settings management are handled through the VSCode API.

### TypeScript

All code is written in TypeScript with emphasis on type safety. This enables early bug detection during development and provides a high-quality extension.

### Webview UI

Utilizes VSCode's Webview feature to realize a rich UI with modern web technologies. Leverages React, CSS-in-JS, and module bundlers.

## Architecture

Claude Code Workflow Studio consists of the following components:

### 1. Editor UI (Webview)

- **Canvas**: React Flow-based visual editor
- **Node Palette**: Displays available node types
- **Property Panel**: Edit settings for the selected node
- **Toolbar**: Save, load, and export functions

### 2. Extension Host (VSCode Side)

- **Command Registration**: Integration with VSCode command palette
- **File I/O**: Workflow save/load and export processing
- **Messaging**: Communication management between Webview and Extension Host

### 3. Workflow Definition

- **Internal Format**: Manage nodes and connections in JSON format
- **Export Format**: `.claude` files in Markdown frontmatter format

### 4. Internationalization (i18n)

- **Language Detection**: Retrieve display language from VSCode settings
- **Translation Mapping**: Translate UI strings and export templates
- **Dynamic Switching**: Automatically retranslate on language change

## Design Philosophy

### Offline First

All processing is completed locally. No network communication means:

- **Privacy Protection**: Code and settings are never sent externally
- **Speed**: Unaffected by network latency
- **Reliability**: No internet connection required

### No-Code Design

All operations complete in the GUI, usable without programming knowledge:

- **Intuitive Operation**: Complete with mouse only
- **Immediate Feedback**: Changes reflected in real-time
- **Visual Understanding**: Grasp entire flow at a glance

### Extensibility

Designed with future feature additions in mind:

- **Plugin Support**: Add custom node types
- **Templates**: Templatize frequently used flows
- **Import/Export**: Integration with other tools

## Use Cases

Claude Code Workflow Studio excels in scenarios like:

- **Complex Workflow Design**: Data analysis, code review, documentation generation, etc.
- **Prototyping**: Quickly shape ideas and iterate
- **Team Development**: Share workflows visually to promote common understanding
- **Learning**: Visually learn Claude Code features

## Future Plans

Claude Code Workflow Studio will continue to evolve:

- **New Node Types**: Support for more diverse workflow patterns
- **Template Library**: Share commonly used patterns
- **Version Control Integration**: Visualize workflow change history
- **Collaboration Features**: Real-time collaborative editing for teams
- **Performance Optimization**: Support for large-scale workflows

## Summary

Claude Code Workflow Studio is a VSCode extension for visually designing Claude Code workflows. Anyone can easily build complex AI agent workflows with no-code drag & drop operations.

Fully offline operation protects privacy while an intuitive UI enables efficient workflow design.

As a next step, learn how to use it in the [Quick Start Guide](/blog/002-quick-start-tutorial)!

We look forward to your feedback. Let's create a better workflow design experience together!
