# MCP Server Development Guide

Create MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. The quality of an MCP server is measured by how well it enables LLMs to accomplish real-world tasks.

---

## Process

### Phase 1: Deep Research and Planning

#### 1.1 Understand Modern MCP Design

**API Coverage vs. Workflow Tools:**
Balance comprehensive API endpoint coverage with specialized workflow tools. When uncertain, prioritize comprehensive API coverage.

**Tool Naming and Discoverability:**
Use consistent prefixes (e.g., `github_create_issue`, `github_list_repos`) and action-oriented naming.

**Context Management:**
Design tools that return focused, relevant data. Support filtering and pagination.

**Actionable Error Messages:**
Error messages should guide agents toward solutions with specific suggestions and next steps.

#### 1.2 Study MCP Protocol Documentation

Start with the sitemap: `https://modelcontextprotocol.io/sitemap.xml`

Then fetch specific pages with `.md` suffix for markdown format.

#### 1.3 Study Framework Documentation

**Recommended stack:**
- **Language**: TypeScript
- **Transport**: Streamable HTTP for remote servers, stdio for local servers

Reference guides:
- [📋 MCP Best Practices](./reference/mcp_best_practices.md)
- [⚡ TypeScript Guide](./reference/node_mcp_server.md)
- [🐍 Python Guide](./reference/python_mcp_server.md)

#### 1.4 Plan Your Implementation

Review the API documentation to identify key endpoints, authentication requirements, and data models.

---

### Phase 2: Implementation

#### 2.1 Set Up Project Structure

See language-specific guides in `reference/` for project setup.

#### 2.2 Implement Core Infrastructure

- API client with authentication
- Error handling helpers
- Response formatting (JSON/Markdown)
- Pagination support

#### 2.3 Implement Tools

For each tool, define:
- Input Schema (Zod for TypeScript, Pydantic for Python)
- Output Schema with `structuredContent`
- Tool Description
- Annotations (`readOnlyHint`, `destructiveHint`, `idempotentHint`, `openWorldHint`)

---

### Phase 3: Review and Test

- No duplicated code (DRY principle)
- Consistent error handling
- Full type coverage
- Test with MCP Inspector: `npx @modelcontextprotocol/inspector`

---

### Phase 4: Create Evaluations

Create 10 evaluation questions that are:
- **Independent**: Not dependent on other questions
- **Read-only**: Only non-destructive operations required
- **Complex**: Requiring multiple tool calls
- **Realistic**: Based on real use cases
- **Verifiable**: Single, clear answer
- **Stable**: Answer won't change over time

Output format:
```xml
<evaluation>
  <qa_pair>
    <question>Your question here</question>
    <answer>The answer</answer>
  </qa_pair>
</evaluation>
```

---

## Reference Files

- [📋 MCP Best Practices](./reference/mcp_best_practices.md)
- [🐍 Python Implementation Guide](./reference/python_mcp_server.md)
- [⚡ TypeScript Implementation Guide](./reference/node_mcp_server.md)
- [✅ Evaluation Guide](./reference/evaluation.md)
