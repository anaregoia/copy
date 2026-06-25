# PptxGenJS Tutorial

Guide for creating PowerPoint presentations programmatically using PptxGenJS.

## Setup & Basic Structure

Initialize presentations with layout options (16x9, 16x10, 4x3, WIDE) and basic slide creation.

## Text & Formatting

Add text with styling (font, size, color, bold, italic), character spacing, rich text arrays, and multi-line formatting.

> **Tip:** Set `margin: 0` when you need text to align precisely with shapes.

## Lists & Bullets

Create bulleted and numbered lists using `bullet: true` with `breakLine: true` between items. Avoid unicode bullet symbols.

## Shapes

Add rectangles, ovals, lines with customization options including fill colors, transparency, rounded corners, and shadows.

## Images

Insert images from file paths, URLs, or base64 data with sizing modes (contain, cover, crop), rotation, and accessibility features.

## Icons

Generate SVG icons from react-icons library and convert to PNG using sharp for universal compatibility.

## Slide Backgrounds

Apply solid colors, transparent colors, or images as backgrounds.

## Tables

Create tables with borders, fills, and merged cells.

## Charts

Generate bar, line, pie, and other chart types with extensive styling options for modern appearance.

## Slide Masters

Define reusable slide templates with placeholders.

## Common Pitfalls

Eight critical warnings:
1. Avoid `#` in hex colors
2. Never encode opacity in color strings
3. Prevent object mutation issues
4. Always set explicit dimensions
5. Use `inch` units consistently
6. Validate font names before use
7. Check slide layout compatibility
8. Test with LibreOffice for compatibility
