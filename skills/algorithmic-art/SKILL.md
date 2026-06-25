# Algorithmic Art Creation Framework

This is a comprehensive guide for building generative art using p5.js with seeded randomness and interactive parameter exploration.

## Core Process

The framework follows a two-phase approach:

1. **Algorithmic Philosophy** - Create a computational aesthetic manifesto (4-6 paragraphs) emphasizing emergent behavior, mathematical beauty, and controlled chaos
2. **p5.js Implementation** - Express that philosophy through code as a self-contained interactive HTML artifact

## Key Principles

**Philosophy Creation**: Name the movement, articulate how it manifests through computational processes, noise functions, particle behaviors, and temporal evolution. Emphasize repeatedly that the final algorithm should feel "meticulously crafted," refined through countless iterations, and representative of master-level expertise.

**Implementation Requirements**:
- Always use seeded randomness for reproducibility: `randomSeed(seed); noiseSeed(seed);`
- Design parameters that emerge from the philosophy itself, not from pattern menus
- Build a single self-contained HTML artifact with embedded p5.js
- Start from `templates/viewer.html` as the foundation—keep fixed UI structure and Anthropic branding

**Fixed Elements** (maintain exactly):
- Layout, sidebar organization, fonts (Poppins/Lora)
- Seed navigation (display, prev/next, random, jump)
- Action buttons (regenerate, reset, download)

**Variable Elements** (customize per artwork):
- The complete p5.js algorithm
- Parameter definitions and ranges
- UI controls for those parameters
- Optional color picker section

## Craftsmanship Standards

Every algorithm should demonstrate balance, color harmony, thoughtful composition, and smooth performance. The same seed must consistently produce identical output, enabling meaningful exploration through variation while maintaining artistic intentionality.
