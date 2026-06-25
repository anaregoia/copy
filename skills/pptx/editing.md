# Editing Presentations

Comprehensive workflow for modifying PowerPoint presentations using a template-based approach.

## Key Workflow Steps

1. **Analysis** — Use `thumbnail.py` and `markitdown` to review existing layouts and placeholder content
2. **Planning** — Map content sections to appropriate template slides, emphasizing layout variety
3. **Unpacking** — Extract the PPTX file using `unpack.py`
4. **Structural Changes** — Modify slides (delete, duplicate, reorder) before content edits
5. **Content Editing** — Update text in individual slide XML files, with potential for parallel work
6. **Cleanup** — Run `clean.py` to remove orphaned files
7. **Repacking** — Reassemble using `pack.py` with validation

## Important Design Principle

Actively seek out multi-column layouts, image + text combinations, full-bleed images with text overlay, quote slides, section dividers, stat callouts, and icon grids. Avoid monotonous presentations.

## Available Scripts

- `unpack.py` — Extracts and formats PPTX content
- `add_slide.py` — Duplicates or creates slides from layouts
- `clean.py` — Removes unreferenced files
- `pack.py` — Reassembles with validation
- `thumbnail.py` — Creates visual slide grid for layout review

## Critical Technical Guidelines

**Formatting requirements:**
- Bold all headers using `b="1"` on text properties
- Use proper XML bullet formatting, never Unicode bullets
- Separate multi-item content into individual paragraph elements

**Common mistakes to avoid:**
- Concatenating multiple items into single text strings
- Manually copying slide files instead of using `add_slide.py`
- Mismatched template slots and source content counts
- Text overflow when replacing with longer content

## Smart Quotes Handling

Use XML entities for special quotation marks: `&#x201C;` for left double quotes, `&#x201D;` for right double quotes.
