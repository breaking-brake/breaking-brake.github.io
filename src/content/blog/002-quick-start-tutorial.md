---
title: "Quick Start Guide"
description: "Step-by-step guide from installing Claude Code Workflow Studio to basic usage, creating your first workflow, and exporting it."
pubDate: 2025-11-04
author: "breaking-brake"
---

## Introduction

This guide explains how to install Claude Code Workflow Studio, create your first workflow, and export it. You'll master the basics in about 10 minutes.

## Prerequisites

You'll need:

- **VSCode**: Visual Studio Code (latest version recommended)
- **Claude Code**: Anthropic's official CLI tool

For Claude Code installation instructions, see the [official documentation](https://docs.anthropic.com/claude/docs/claude-code).

## Installation Steps

### Method 1: From VSCode Marketplace (Recommended・Coming Soon)

1. Open VSCode
2. Open Extensions view (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for "Claude Code Workflow Studio"
4. Click **Install**

### Method 2: From Source

Currently unavailable as it's a private repository. Please wait for Marketplace publication.

## Basic Usage

### Step 1: Open the Editor

1. Open the VSCode Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type "Claude Code Workflow Studio: Open Editor"
3. Press Enter

The visual editor opens in a new tab.

### Step 2: Create Your First Workflow

Let's create a simple code review workflow.

#### 2-1. Add a Sub-Agent Node

1. Click **Sub-Agent** in the left node palette
2. The node is placed on the canvas
3. Click the node and configure in the right property panel:
   - **Name**: "Code Reviewer"
   - **Prompt**: "Review the code from quality, security, and performance perspectives"
   - **Tools**: Check Read, Grep
   - **Model**: Sonnet (default)

#### 2-2. Add an AskUserQuestion Node

1. Click **AskUserQuestion** in the node palette
2. Configure in the property panel:
   - **Question**: "What would you like to do with the review results?"
   - **Header**: "Next Action"
   - **Options**:
     - Option 1: Label "Fix Issues", Description "Fix the identified problems"
     - Option 2: Label "Save Only", Description "Save review results and exit"

#### 2-3. Connect Nodes

1. Click the right side (output port) of the "Code Reviewer" node
2. Drag to the left side (input port) of the "Next Action" node
3. Connection is created

### Step 3: Save the Workflow

1. Enter a workflow name in the text box at the top toolbar
   - Example: "code-review-workflow"
2. Click the **Save** button
3. Saved to `.vscode/workflows/code-review-workflow.json`

### Step 4: Export

1. Click the **Export** button
2. A confirmation dialog appears
3. Click **OK**

The following files are generated:

- `.claude/agents/Code_Reviewer.md` - Sub-Agent definition
- `.claude/commands/code-review-workflow.md` - SlashCommand

### Step 5: Run in Claude Code

Let's run the exported workflow:

1. Open VSCode terminal
2. Launch Claude Code
3. Enter the slash command:

```
/code-review-workflow
```

4. The workflow executes!

## Using Each Node Type

### Sub-Agent Node

Defines a Claude Code sub-agent.

**Configuration Items**:
- **Name**: Agent name (becomes the filename)
- **Prompt**: Describe the agent's behavior
- **Tools**: Available tools (Read, Write, Bash, etc.)
- **Model**: Model to use (Sonnet/Opus/Haiku)

**Usage Examples**:
- Dedicated code review agent
- Data analysis agent
- Documentation generation agent

### AskUserQuestion Node

Presents choices to the user and creates conditional branches.

**Configuration Items**:
- **Question**: Question for the user
- **Header**: Short label (within 12 characters)
- **Options**: 2-4 choices
- **Multi Select**: Allow multiple selections

**Usage Examples**:
- Selecting a processing method
- Setting priorities
- Choosing a format

### Prompt Node

Defines reusable prompt templates.

**Configuration Items**:
- **Name**: Prompt name
- **Template**: Template body (use variables with `{{variable}}`)

**Usage Examples**:
- Code review template
- Report generation template
- Question-answering template

### Branch Node

Branches processing based on conditions.

**Modes**:
- **Conditional**: Two-way True/False branching
- **Switch**: Multi-way branching with 2-N options

**Usage Examples**:
- File existence check
- Error handling
- Branching based on processing results

## Practical Example: Data Analysis Workflow

Let's create a data analysis workflow as a more practical example:

### Flow Composition

1. **Data Collector** (Sub-Agent)
   - Collect data files
   - Tools: Read, Glob

2. **Choose Analysis** (AskUserQuestion)
   - Select statistical analysis or visualization

3. **Statistical Analyzer** (Sub-Agent)
   - Execute statistical analysis (when statistical analysis is selected)

4. **Data Visualizer** (Sub-Agent)
   - Generate graphs (when visualization is selected)

5. **Report Generator** (Sub-Agent)
   - Create final report
   - Tools: Write

### Creation Steps

1. Place each Sub-Agent node
2. Place AskUserQuestion node
3. Connect nodes:
   - Data Collector → Choose Analysis
   - Choose Analysis → Statistical Analyzer (when statistical analysis selected)
   - Choose Analysis → Data Visualizer (when visualization selected)
   - Statistical Analyzer → Report Generator
   - Data Visualizer → Report Generator

4. Enter workflow name: `data-analysis`
5. Save → Export

Now you can run it with the `/data-analysis` command!

## Workflow Management

### Loading a Saved Workflow

1. Click the **Load** dropdown in the toolbar
2. A list of files in `.vscode/workflows/` is displayed
3. Select the workflow you want to load

### Updating a Workflow

1. Load the workflow
2. Edit nodes
3. Click **Save** with the same name
4. It will be overwritten

### Version Control for Workflows

`.vscode/workflows/*.json` files can be managed with Git:

```bash
git add .vscode/workflows/
git commit -m "Add code review workflow"
```

To share with team members, simply include these files in the repository.

## Troubleshooting

### Cannot Save Workflow

**Cause**: Workflow name contains invalid characters

**Solution**:
- Use only alphanumeric characters, hyphens, and underscores
- Avoid spaces and special characters

### Export Fails

**Cause**: Incomplete node configuration

**Solution**:
- Verify all nodes have names set
- Check that required fields are filled in
- Check error messages in VSCode notifications

### Workflow List Not Updating

**Solution**:
- Click the refresh button (↻) in the Load dropdown
- Close and reopen the editor

### Command Not Recognized in Claude Code

**Cause**: Claude Code not restarted after export

**Solution**:
- Exit Claude Code once
- Restart to recognize the new command

## Next Steps

Once you understand the basics, learn practical use cases:

1. [Data Analysis Workflow Design](/blog/003-usecase-data-analysis)
2. [Code Review Workflow Design](/blog/004-usecase-code-review)
3. [Frequently Asked Questions](/blog/005-faq)

## Summary

Claude Code Workflow Studio lets you visually design Claude Code workflows with no programming required.

**Key Takeaways**:
- ✅ Intuitive design with drag & drop
- ✅ Save in JSON format and manage with Git
- ✅ Export and run immediately in Claude Code
- ✅ Share workflows with your team

Try various workflows and find the optimal automation for your project!
