---
title: "Use Case: Data Analysis Workflow Design"
description: "Learn how to visually design data analysis workflows with Claude Code Workflow Studio through practical examples. Master design principles and best practices."
pubDate: 2024-01-25
author: "breaking-brake"
---

## Introduction

Data analysis work is a complex process involving multiple steps: collection, transformation, analysis, and report generation. With Claude Code Workflow Studio, you can visually design such complex workflows and execute them repeatedly in Claude Code.

## Challenges

Typical challenges data analysts face:

- **Repeating the same steps**: Weekly analysis of project data, etc.
- **Multiple options**: Statistical analysis, visualization, machine learning - changing processes based on objectives
- **Error-prone**: Skipping steps or reading wrong files in manual operations
- **Undocumented**: Analysis procedures not shared across the team

## Solution: Visual Workflow Design

Design analysis workflows in Claude Code Workflow Studio to achieve:

- **Visual design**: Grasp the entire flow at a glance
- **Reusable**: Execute repeatedly once designed
- **Team sharing**: Easily share with JSON files
- **Flexible branching**: Switch processes based on objectives

## Workflow Design Example

### Overall Structure

A data analysis workflow consists of the following steps:

```
[Start]
   ↓
[Data Collector] ← Collect data files
   ↓
[Data Validator] ← Validate data
   ↓
[Choose Analysis Type] ← User selects
   ↓
[Statistical Analysis] or [Data Visualization]
   ↓
[Report Generator] ← Generate report from results
   ↓
[End]
```

### Step 1: Data Collector

#### Node Configuration

**Node Type**: Sub-Agent

**Settings**:
- **Name**: `Data Collector`
- **Prompt**:
```
Find and load the following files from the project's data directory:
- metrics.csv: Development metrics
- logs.json: Application logs
- performance.csv: Performance data

Check the content of each file and report the data format and count.
```
- **Tools**: Read, Glob
- **Model**: Sonnet

#### Design Points

- **Tools**: Only allow file search (Glob) and reading (Read)
- **Clear instructions**: Specify target files concretely
- **Validation**: Check data format and count to prevent errors in next steps

### Step 2: Data Validator

#### Node Configuration

**Node Type**: Sub-Agent

**Settings**:
- **Name**: `Data Validator`
- **Prompt**:
```
Validate the collected data:
1. Confirm required columns exist
2. Calculate missing value percentages
3. Verify data types are as expected
4. Detect outliers and anomalies

If problems exist, report details and auto-correct minor issues.
```
- **Tools**: Read
- **Model**: Sonnet

#### Design Points

- **Error detection**: Check beforehand to prevent issues in subsequent analysis
- **Auto-correction**: Automatically handle minor issues (type conversion, etc.)
- **Clear reporting**: Specifically report problem areas

### Step 3: Choose Analysis Type

#### Node Configuration

**Node Type**: AskUserQuestion

**Settings**:
- **Question**: `Which analysis do you want to run?`
- **Header**: `Analysis Type`
- **Options**:
  - **Option 1**:
    - Label: `Statistical Analysis`
    - Description: `Calculate statistical metrics like mean, median, correlation coefficients`
  - **Option 2**:
    - Label: `Data Visualization`
    - Description: `Generate time series graphs and histograms`
  - **Option 3**:
    - Label: `Run Both`
    - Description: `Execute both statistical analysis and visualization`

#### Design Points

- **Clear choices**: Explain each option's content in detail
- **Flexibility**: Switch processing based on user's objective
- **Multi-select support**: `multiSelect: false` (exclusive selection)

### Step 4: Statistical Analyzer

#### Node Configuration

**Node Type**: Sub-Agent

**Settings**:
- **Name**: `Statistical Analyzer`
- **Prompt**:
```
Execute statistical analysis on validated data:

1. Basic statistics
   - Mean, median, standard deviation
   - Minimum, maximum, quartiles

2. Correlation analysis
   - Correlation coefficients between variables
   - Identify strong correlations

3. Trend analysis
   - Trends in time series data
   - Detect periodicity and seasonality

4. Anomaly detection
   - Identify outliers
   - Detect abnormal patterns

Summarize results in Markdown format.
```
- **Tools**: Read
- **Model**: Opus (for complex analysis)

#### Design Points

- **Opus model**: Use Opus for advanced analysis
- **Systematic analysis**: Specify analysis items step by step
- **Structured output**: Readable in Markdown format

### Step 5: Data Visualizer

#### Node Configuration

**Node Type**: Sub-Agent

**Settings**:
- **Name**: `Data Visualizer`
- **Prompt**:
```
Visualize the validated data:

1. Time series graphs
   - Each metric's trend
   - Period: Past 30 days

2. Histograms
   - Distribution of each variable

3. Scatter plots
   - Relationships between variables

4. Heat maps
   - Visualize correlation matrices

Express using Mermaid or text-based graphs.
```
- **Tools**: Read
- **Model**: Sonnet

#### Design Points

- **Text-based**: Use text-representable diagrams like Mermaid
- **Multiple perspectives**: Analyze from multiple angles with different graph types
- **Clear period specification**: Explicitly state time series graph ranges

### Step 6: Report Generator

#### Node Configuration

**Node Type**: Sub-Agent

**Settings**:
- **Name**: `Report Generator`
- **Prompt**:
```
Integrate analysis results and create a final report:

## Data Analysis Report
### Execution Date: {{timestamp}}

### 1. Data Overview
- Summary of collected data
- Data quality assessment

### 2. Analysis Results
- Statistical analysis results (if executed)
- Visualization results (if executed)

### 3. Key Findings
- Important insights (3-5 items)
- Anomalies or trends to watch

### 4. Recommended Actions
- Specific recommendations based on analysis results

Save the report in the reports/ directory.
```
- **Tools**: Read, Write
- **Model**: Sonnet

#### Design Points

- **Write permission**: To save report files
- **Structured**: Easy-to-read report composition
- **Actionable**: Include recommendations

## Node Connections

### Basic Flow

```
Data Collector → Data Validator → Choose Analysis Type
```

### Branching Logic

**When "Statistical Analysis" is selected**:
```
Choose Analysis Type → Statistical Analyzer → Report Generator
```

**When "Data Visualization" is selected**:
```
Choose Analysis Type → Data Visualizer → Report Generator
```

**When "Run Both" is selected**:
Execute both nodes, then proceed to Report Generator (controlled by Branch node)

## Save and Export

### Save

1. Enter workflow name: `data-analysis-pipeline`
2. Click **Save** button
3. Saved to `.vscode/workflows/data-analysis-pipeline.json`

### Export

1. Click **Export** button
2. Generated files:
   - `.claude/agents/Data_Collector.md`
   - `.claude/agents/Data_Validator.md`
   - `.claude/agents/Statistical_Analyzer.md`
   - `.claude/agents/Data_Visualizer.md`
   - `.claude/agents/Report_Generator.md`
   - `.claude/commands/data-analysis-pipeline.md`

## How to Run

Execute the following command in Claude Code:

```
/data-analysis-pipeline
```

The workflow starts and each step executes in sequence.

## Best Practices

### 1. Error Handling Design

Consider handling when data is not found:

- Specify in Data Collector "report to user if files not found"
- Add Branch node for file existence check

### 2. Model Selection

- **Haiku**: Simple data collection and validation
- **Sonnet**: Standard analysis and report generation
- **Opus**: Complex statistical analysis and prediction

### 3. Clear Prompts

Good example:
```
Read all CSV files in the data directory,
and report the number of rows and column names for each file.
```

Bad example:
```
Read data and analyze it.
```

### 4. Minimize Tool Permissions

Grant only the minimum necessary tools to each node:
- Data Collector: Read, Glob only
- Report Generator: Read, Write only

## Application Examples

### Weekly Report Auto-Generation

Add "scheduled execution" to the designed workflow to enable automatic report generation every week (combined with Claude Code features).

### A/B Test Analysis

Replace "Choose Analysis Type" with "Choose Test Group" node and design group-specific analysis flows.

### Anomaly Detection Alerts

Add "Alert Checker" node after Report Generator to send notifications when specific thresholds are exceeded.

## Summary

Claude Code Workflow Studio lets you visually design complex data analysis workflows.

**Key Takeaways**:
- ✅ Divide into steps progressively
- ✅ Flexible branching with user selection
- ✅ Set clear prompts for each node
- ✅ Minimize tool permissions to necessary only

Next, see another use case in [Code Review Workflow Design](/use-case/code-review).
