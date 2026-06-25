# Slack GIF Creator

Toolkit for creating animated GIFs optimized for Slack.

## Key Specifications

**Technical Requirements:**
- Emoji GIFs: 128x128 pixels
- Message GIFs: 480x480 pixels
- Frame rate: 10-30 FPS
- Color palette: 48-128 colors
- Duration: Under 3 seconds for emoji GIFs

## Core Implementation

The primary workflow:
1. Instantiate a GIFBuilder object
2. Generate frames using PIL Image and ImageDraw
3. Save with optimization parameters

## Graphics Creation Approaches

**User-Uploaded Images:**
Users may request direct animation of uploaded content or use images as stylistic references. PIL enables loading and manipulation.

**Scratch-Built Graphics:**
PIL ImageDraw primitives support circles, polygons, lines, and rectangles. Avoid emoji fonts and do not assume pre-packaged graphics availability.

**Visual Enhancement:**
Quality graphics employ thicker outlines, layered shapes, gradient backgrounds, vibrant color schemes, and detailed construction.

## Available Tools

- **GIFBuilder**: Assembles frames with optimization
- **Validators**: Confirms Slack compliance
- **Easing Functions**: Implements smooth motion curves
- **Frame Helpers**: Provides convenience utilities

## Animation Techniques

- Shake effects
- Pulsing
- Bounce physics
- Rotation
- Fade transitions
- Sliding motion
- Zoom effects
- Particle explosions

## File Size Reduction

When optimization is necessary: reduce FPS, decrease color count, lower dimensions, enable duplicate frame removal, or activate emoji mode.

## Dependencies

Pillow, imageio, numpy
