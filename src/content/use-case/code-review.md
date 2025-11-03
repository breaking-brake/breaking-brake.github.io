---
title: "Use Case: AI Code Review Workflow Design"
description: "Learn how to design an effective code review workflow with Claude Code Workflow Studio. Achieve quality improvement and review efficiency."
pubDate: 2024-02-01
author: "breaking-brake"
---

## Introduction

Code review is a critical quality assurance process, but it's time-consuming and prone to oversights. With an AI review workflow designed in Claude Code Workflow Studio, you can conduct consistent, high-quality reviews efficiently.

## Challenges

Typical review challenges development teams face:

- **Review Delays**: Hard to secure reviewer time, delaying merges
- **Quality Variance**: Check items and strictness vary by reviewer
- **Missed Checks**: Overlooking security and performance issues
- **Knowledge Gaps**: No reviewers expert in specific domains

## Solution: Visual Review Workflow

Design review flow in Claude Code Workflow Studio to achieve:

- **Consistency**: Review from same perspectives every time
- **Speed**: AI provides immediate feedback
- **Comprehensiveness**: Covers security, performance, and quality
- **Flexibility**: Selectable review levels and targets

## Workflow Design Example

### Overall Structure

```
[Start]
   ↓
[Code Scanner] ← Get changed files
   ↓
[Choose Review Level] ← Select review strictness
   ↓
[Security Reviewer] ← Security check
   ↓
[Performance Reviewer] ← Performance check
   ↓
[Quality Reviewer] ← Code quality check
   ↓
[Summary Generator] ← Summarize review results
   ↓
[End]
```

### Step 1: Code Scanner

#### Node Configuration

**Node Type**: Sub-Agent

**Settings**:
- **Name**: `Code Scanner`
- **Prompt**:
```
Identify files changed in the recent commit:

1. Get changed files using git diff
2. Read the changes in each file
3. Classify change types:
   - New files
   - Modified existing files
   - Deleted files
4. Count changed lines of code

Clarify the scope of what to review.
```
- **Tools**: Bash, Read, Grep
- **Model**: Haiku (fast scanning)

#### Design Points

- **Use Haiku**: Simple file retrieval works fast with Haiku
- **Bash Permission**: Required to execute git commands
- **Scope Clarification**: Specify what to review in next step

### Step 2: Choose Review Level

#### Node Configuration

**Node Type**: AskUserQuestion

**Settings**:
- **Question**: `What review level?`
- **Header**: `Review Level`
- **Options**:
  - **Option 1**:
    - Label: `Quick`
    - Description: `Check only obvious issues (within 5 minutes)`
  - **Option 2**:
    - Label: `Standard`
    - Description: `Comprehensive security, performance, quality (about 15 minutes)`
  - **Option 3**:
    - Label: `Thorough`
    - Description: `Detailed analysis and improvement suggestions (30+ minutes)`

#### Design Points

- **Time Estimates**: Specify duration for each level
- **Use Cases**: Quick for emergencies, Thorough before production release
- **Gradual**: Adjust prompts according to level

### Step 3: Security Reviewer

#### Node Configuration

**Node Type**: Sub-Agent

**Settings**:
- **Name**: `Security Reviewer`
- **Prompt**:
```
Review code from a security perspective:

## Check Items

### 1. Injection Attacks
- SQL Injection
- Command Injection
- XSS (Cross-Site Scripting)

### 2. Authentication & Authorization
- Proper authentication checks
- Permission validation implementation
- Session management security

### 3. Sensitive Information
- Hardcoded API keys or passwords
- Proper handling of personal information
- Sensitive information in logs

### 4. Input Validation
- User input validation
- File upload restrictions
- Data type checking

## Output Format
For each issue:
- Severity (Critical/High/Medium/Low)
- Location (filename and line number)
- Issue description
- Suggested fix
```
- **Tools**: Read, Grep
- **Model**: Opus (advanced security analysis)

#### Design Points

- **Use Opus**: Security is critical, analyze carefully with Opus
- **Structured Output**: Specify severity and fix method
- **OWASP Compliant**: Cover common vulnerability patterns

### Step 4: Performance Reviewer

#### Node Configuration

**Node Type**: Sub-Agent

**Settings**:
- **Name**: `Performance Reviewer`
- **Prompt**:
```
Review code from a performance perspective:

## Check Items

### 1. Algorithm Efficiency
- Computational complexity (evaluate with Big-O notation)
- Unnecessary loops or recursion
- Appropriateness of data structures

### 2. Database Queries
- N+1 problem
- Index utilization
- Unnecessary data retrieval

### 3. Memory Usage
- Potential memory leaks
- Unnecessary object retention
- Bulk loading of large data

### 4. Asynchronous Processing
- Blocking operations
- Parallelization opportunities
- Cache utilization

## Output Format
- Issue location
- Current computational complexity
- Expected complexity after improvement
- Specific improvement code examples
```
- **Tools**: Read, Grep
- **Model**: Sonnet

#### Design Points

- **Quantitative Evaluation**: Specify efficiency with Big-O notation
- **Improvement Code**: Present specific Before/After
- **Practical**: Suggest implementable improvements

### Step 5: Quality Reviewer

#### Node Configuration

**Node Type**: Sub-Agent

**Settings**:
- **Name**: `Quality Reviewer`
- **Prompt**:
```
Review code from a quality perspective:

## Check Items

### 1. Readability
- Consistent naming conventions
- Appropriate comments
- Eliminate magic numbers

### 2. Maintainability
- Function length (recommended within 20 lines)
- Cyclomatic complexity
- Duplicate code detection

### 3. Testability
- Dependency injection usage
- Pure function usage
- Test-friendly structure

### 4. Best Practices
- Language/framework conventions
- Appropriate design pattern application
- Error handling

## Output Format
- Priority (Must/Should/Nice-to-have)
- Improvement suggestions
- References (if any)
```
- **Tools**: Read, Grep
- **Model**: Sonnet

#### Design Points

- **Prioritization**: Classify as Must/Should/Nice-to-have
- **Educational**: Explain why improvements are needed
- **Practical**: Conform to team coding standards

### Step 6: Summary Generator

#### Node Configuration

**Node Type**: Sub-Agent

**Settings**:
- **Name**: `Summary Generator`
- **Prompt**:
```
Integrate review results and create a summary:

## Review Summary

### 📊 Overall Rating
- Score: X/100
- Review Level: {{review_level}}
- Changed Files: X
- Changed Lines: X

### 🔴 Critical (Must Fix Immediately)
- Issue 1
- Issue 2

### 🟡 Important (Fix Recommended)
- Issue 1
- Issue 2

### 🟢 Minor (Address If Time Allows)
- Suggestion 1
- Suggestion 2

### ✅ Positives
- Good implementations
- Improved areas

### 📝 Next Actions
1. Fix critical issues
2. Consider addressing important issues
3. Check test coverage

Save review results in reviews/ directory.
```
- **Tools**: Read, Write
- **Model**: Sonnet

#### Design Points

- **Visual**: Express priorities with emojis
- **Actionable**: Specify what to do next
- **Positive**: Point out good aspects to maintain motivation

## Node Connections

All review nodes execute in sequence:

```
Code Scanner
   ↓
Choose Review Level
   ↓
Security Reviewer
   ↓
Performance Reviewer
   ↓
Quality Reviewer
   ↓
Summary Generator
```

To adjust prompt detail level by review level, you can add Branch nodes for branching.

## Save and Export

### Save

1. Workflow name: `ai-code-review`
2. Click Save button
3. Saved to `.vscode/workflows/ai-code-review.json`

### Export

Generated files:
- `.claude/agents/Code_Scanner.md`
- `.claude/agents/Security_Reviewer.md`
- `.claude/agents/Performance_Reviewer.md`
- `.claude/agents/Quality_Reviewer.md`
- `.claude/agents/Summary_Generator.md`
- `.claude/commands/ai-code-review.md`

## How to Run

### Normal Execution

```
/ai-code-review
```

### Integration with Git Hook

Incorporate into `pre-push` hook for automatic review before push:

```bash
#!/bin/bash
# .git/hooks/pre-push

echo "Running AI code review..."
claude-code /ai-code-review
```

## Best Practices

### 1. Using Review Levels

- **Quick**: Hotfixes, urgent response
- **Standard**: Regular feature additions/fixes
- **Thorough**: Before release, important refactoring

### 2. Customizing Prompts

Add team-specific rules:

```
## Our Coding Standards
- 2-space indentation
- Comments must be in English
- Functions have single responsibility
```

### 3. Handling False Positives

When AI misdetects, specify exceptions in prompt:

```
These are not issues:
- Hardcoded values in test code
- Sample API keys in config files ("your-api-key-here")
```

### 4. Continuous Improvement

Save review results to files and review periodically:

```bash
# Analyze past review results
/analyze-review-trends
```

## Team Adoption Tips

### Step 1: Trial Run

First try individually to verify accuracy and usefulness

### Step 2: Adjust Rules

Adjust prompts to match team coding standards

### Step 3: Gradual Introduction

Initially use as "reference opinion", make mandatory when reliability increases

### Step 4: Combine with Human Review

AI review catches basic issues, humans focus on design and business logic

## Measuring Effectiveness

Measure changes after workflow introduction:

- Reduced review time
- Improved bug detection rate
- Post-release issue count
- Team code quality score

## Summary

AI review workflows designed in Claude Code Workflow Studio achieve both code quality improvement and efficiency.

**Key Takeaways**:
- ✅ Covers security, performance, and quality
- ✅ Flexibly respond with review levels
- ✅ Can incorporate team-specific rules
- ✅ Maximum effectiveness combined with human review

Next, resolve questions in [Frequently Asked Questions](/blog/005-faq).
