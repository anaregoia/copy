# Claude API Reference Document

This is a comprehensive guide for building LLM-powered applications with Claude.

## Core Surfaces

The document outlines three implementation tiers:
- **Single API calls** for classification, summarization, and extraction
- **Claude API with tool use** for multi-step workflows you orchestrate
- **Managed Agents** for server-managed stateful agents with Anthropic-hosted execution

## Current Models

- **Claude Fable 5** (`claude-fable-5`) — most capable, 1M context, $10–$50/M tokens
- **Claude Opus 4.8** (`claude-opus-4-8`) — recommended default, 1M context, $5–$25/M tokens
- **Claude Sonnet 4.6** (`claude-sonnet-4-6`) — 1M context, $3–$15/M tokens
- **Claude Haiku 4.5** (`claude-haiku-4-5`) — 200K context, $1–$5/M tokens

The guidance emphasizes: *Always use Opus 4.8 unless the user explicitly requests another model.*

## Key Technical Guidance

**Thinking & Effort:**
- Fable 5 and Opus 4.8/4.7 support adaptive thinking only (no fixed budgets)
- Effort parameter (`low` to `max`) controls depth via `output_config: {effort: "..."}`
- Fable 5 defaults effort to `high`; older models to `high` if specified

**Fable 5 Specifics:**
- Tokenizes ~30% more than Opus models; re-measure with `count_tokens`
- May decline requests with `stop_reason: "refusal"` (pre-output: unbilled)
- Requires 30-day data retention; longer single requests are normal

**No Deprecated Patterns:**
- Assistant prefills return 400 errors on Fable 5 and 4.6+ models
- `budget_tokens` is removed from Fable 5, Opus 4.7/4.8 (use adaptive thinking)

## Managed Agents & Deployment

Agents are persistent objects created once and referenced by ID across sessions. The guide covers scheduled deployments (cron-based autonomous runs), event streaming, and client-pattern best practices for reconnection and tool confirmation flows.

## Resource Selection

Read the language-specific folder (`{language}/claude-api/`) plus topical `shared/` files based on task type (caching, tool use, batches, files, migration, error handling).

## Language Support

See subdirectories for language-specific guides:
- `csharp/` — C# implementation
- `curl/` — cURL examples
- `go/` — Go implementation
- `java/` — Java implementation
- `php/` — PHP implementation
- `python/` — Python implementation
- `ruby/` — Ruby implementation
- `shared/` — Shared concepts
- `typescript/` — TypeScript implementation
