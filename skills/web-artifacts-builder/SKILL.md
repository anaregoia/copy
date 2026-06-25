# Web Artifacts Builder

Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui).

## Core Workflow

1. Initialize a frontend repository
2. Develop the artifact through code editing
3. Bundle everything into a single HTML file
4. Display it to users
5. (Optional) Testing phase

## Technology Stack

React 18 + TypeScript + Vite + Parcel (bundling) + Tailwind CSS + shadcn/ui

## Design Guidance

Avoid common aesthetic pitfalls:
- Excessive centered layouts
- Purple gradients
- Uniform rounded corners
- Over-reliance on Inter font

## Project Initialization

The setup script generates a complete React environment with:
- TypeScript support
- Tailwind CSS 3.4.1
- shadcn/ui components (40+ pre-installed)
- Path aliases
- Parcel bundling configuration compatible with Node 18+

## Bundling Process

The bundling script creates a self-contained `bundle.html` file that inlines all JavaScript, CSS, and dependencies. The process handles:
- Dependency installation
- Configuration generation
- Parcel builds
- Asset inlining automatically

## Reference Resources

Documentation for shadcn/ui components: https://ui.shadcn.com/docs/components
