# DOCX Skill Documentation

This comprehensive guide covers creating, reading, editing, and manipulating Word documents (.docx files) using the docx-js library and associated tools.

## Key Capabilities

**Document Creation**: Use JavaScript with the docx library to generate formatted Word documents with tables, images, headers, footers, and table of contents.

**Content Extraction**: Use `pandoc` or unpack for raw XML to read and analyze existing documents.

**Document Editing**: Unpack .docx files (which are ZIP archives containing XML), modify the XML directly, then repack into valid documents.

## Critical Technical Requirements

**Page Sizing**: The library defaults to A4, so you must explicitly set US Letter dimensions (12,240 × 15,840 DXA units).

**Table Construction**: Tables need dual widths — set both `columnWidths` on the table AND `width` on each cell.

**Lists**: Never use manual bullet characters; instead, implement proper numbering configuration with `LevelFormat.BULLET`.

**Tracked Changes**: Use proper XML structure with `<w:ins>` and `<w:del>` elements, maintaining author attribution and timestamps.

**Smart Typography**: When editing, use XML entities (`&#x2019;`, `&#x201C;`, etc.) for professional quotation marks and apostrophes.

## Workflow

Create documents programmatically → Validate output → Edit via XML unpacking → Repack with validation.
