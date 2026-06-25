# PDF Processing Skill

Comprehensive toolkit for working with PDF files — reading, editing, creating, and form-filling.

## Key Capabilities

- Extract text and structured data from PDFs
- Fill PDF forms (fillable and non-fillable)
- Merge, split, and reorder pages
- Create PDFs from scratch
- Handle encrypted and scanned PDFs

## Core Libraries

**Python:**
- `pypdf` — basic manipulation, encryption, page operations
- `pdfplumber` — text extraction with coordinates, table handling
- `pypdfium2` — high-fidelity rendering (Chromium's PDFium)
- `reportlab` — professional PDF creation with tables and styling

**JavaScript:**
- `pdf-lib` — create and modify PDF documents
- `pdfjs-dist` — browser-based PDF rendering

**Command-line:**
- `poppler-utils` — text/image extraction with bounding boxes
- `qpdf` — page manipulation, optimization, repair

## Reference Files

- [forms.md](./forms.md) — PDF form filling workflow
- [reference.md](./reference.md) — Advanced PDF manipulation reference

## Performance Tips

For large-scale operations: use streaming approaches, process pages individually, leverage command-line tools for speed, and manage memory through chunked processing.
