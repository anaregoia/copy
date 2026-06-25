# PPTX Skill Documentation

This skill manages PowerPoint presentations (.pptx files) for creation, editing, analysis, and modification tasks.

## Core Functions

**Reading Content:**
- Extract text via `python -m markitdown presentation.pptx`
- Generate visual thumbnails with `thumbnail.py`
- Access raw XML through unpacking scripts

**Editing & Creating:**
- Template-based editing (see [editing.md](./editing.md))
- Scratch creation using pptxgenjs (see [pptxgenjs.md](./pptxgenjs.md))

## Design Principles

Avoid "boring slides" through:
- **Color strategy**: Topic-specific palettes with 60-70% dominance from primary color, plus supporting and accent tones
- **Visual consistency**: Repeating distinctive design elements across all slides
- **Layout variety**: Mixing two-column, icon-text, grid, and half-bleed layouts
- **Typography**: Intentional font pairings beyond defaults (e.g., Georgia + Calibri)
- **Spacing standards**: 0.5" minimum margins with 0.3-0.5" gaps between blocks

## QA Requirements

- "Assume there are problems. Your job is to find them."
- Use subagents for visual inspection on converted slide images
- Verify content for placeholder text, typos, and proper ordering
- Check for overlaps, text overflow, contrast issues, and alignment problems
- Complete at least one fix-and-verify cycle before declaring completion

## Dependencies

Python packages (markitdown, Pillow), npm (pptxgenjs), LibreOffice, and Poppler utilities required.
