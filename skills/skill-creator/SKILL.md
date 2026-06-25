# Skill Creator

Tool for building, evaluating, and publishing Claude skills.

## Overview

This skill helps you create new skills for Claude — structured, reusable instruction sets that guide Claude's behavior for specific tasks.

## Directory Structure

- `agents/` — Agent definitions and configurations
- `assets/` — Images, templates, and other static resources
- `eval-viewer/` — Tool for viewing evaluation results
- `references/` — Reference documentation
- `scripts/` — Automation scripts for skill creation and evaluation

## Process

1. **Define the skill** — Identify the task domain and write a SKILL.md with clear instructions
2. **Create evaluations** — Build test cases to measure skill effectiveness
3. **Run evaluations** — Use scripts to test the skill against benchmarks
4. **Review results** — Use eval-viewer to analyze performance
5. **Iterate** — Refine instructions based on evaluation results
6. **Publish** — Package and publish the skill for use

## SKILL.md Format

Every skill requires a `SKILL.md` file that:
- Describes what the skill does
- Provides step-by-step instructions
- Lists any dependencies or prerequisites
- Includes examples where helpful
