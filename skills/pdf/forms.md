# PDF Form Filling Guide

This document provides a comprehensive workflow for filling PDF forms with two distinct paths based on form field type.

## Primary Decision Point

First, determine if your PDF has fillable form fields by running:
`python scripts/check_fillable_fields <file.pdf>`

## Path 1: Fillable Fields

For PDFs with native form fields:

1. **Extract field information** using `extract_form_field_info.py` to generate JSON metadata about each field (ID, location, type)
2. **Convert to images** for visual analysis of field purposes
3. **Create field_values.json** mapping each field ID to its intended value, respecting the field type (text, checkbox, radio group, or choice dropdown)
4. **Fill the form** using `fill_fillable_fields.py`

## Path 2: Non-Fillable Fields

For scanned or image-based PDFs without form structure:

**Approach A (Preferred):** Run `extract_form_structure.py` to extract text labels and coordinates. If successful, use these extracted coordinates to create `fields.json` with PDF-space dimensions.

**Approach B (Fallback):** Convert the PDF to images, then perform visual analysis with zoom refinement using ImageMagick to identify precise field locations in pixel coordinates.

**Hybrid:** Combine structure extraction for most fields with visual estimation for missing elements, converting all coordinates to a consistent system.

## Validation & Output

Before filling, validate bounding boxes using `check_bounding_boxes.py` to catch overlaps or sizing issues. After filling, convert the output back to images to verify text placement accuracy.
