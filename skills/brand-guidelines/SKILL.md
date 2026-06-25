# Anthropic Brand Styling Documentation

This document outlines Anthropic's official brand identity system, including color specifications and typography standards.

## Key Brand Elements

**Color Palette:**
The system defines a "Dark: `#141413`" primary color alongside supporting neutrals and accent colors including orange, blue, and green options for visual variety.

**Typography Approach:**
The guidelines specify "Poppins (with Arial fallback)" for headings and "Lora (with Georgia fallback)" for body text, with automatic system-level fallbacks when custom fonts aren't available.

## Application Features

The styling system automatically applies appropriate fonts based on text hierarchy, with heading sizes of 24pt and larger receiving the Poppins typeface. Non-text visual elements cycle through the accent color options to maintain design consistency while preserving visual interest.

The implementation uses RGB color values and requires no additional font installation, as it works with commonly available system fonts and provides graceful degradation when preferred fonts aren't present.
