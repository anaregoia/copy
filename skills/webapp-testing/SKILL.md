# Web Application Testing Toolkit

Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing browser screenshots, and viewing browser logs.

## Key Resources

- Helper script `with_server.py` manages server lifecycle for single or multiple instances
- `examples/` directory demonstrates common patterns like element discovery and console logging

## Workflow

1. Determine if content is static HTML (read directly) or dynamic (requiring server management)
2. For dynamic applications, either start the server manually or use the provided helper script
3. **CRITICAL**: Wait for `page.wait_for_load_state('networkidle')` before DOM inspection on dynamic applications

## Best Practices

- Scripts should be invoked as black-box tools via `--help` rather than inspected directly, to preserve context window efficiency
- Use `sync_playwright()` for synchronous operations
- Always close browsers properly
- The toolkit supports both single and multi-server scenarios

## Available Scripts

See `scripts/` directory for automation helpers and `examples/` for usage patterns.
