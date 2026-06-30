# Pro Tools Second Brain

A task-oriented Pro Tools workflow companion for audio engineers and students.

## Overview

Eliminates documentation friction during active recording, editing, mixing, and post-production sessions. Browse workflows by objective, find shortcuts instantly, and follow professional step-by-step procedures — all offline.

See [docs/PRD.md](./docs/PRD.md) for full product documentation including information architecture, user stories, data schemas, and roadmap.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Fuse.js** — client-side fuzzy search
- **gray-matter** — Markdown frontmatter parsing
- **Markdown (.md)** — primary content format

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All knowledge content lives in `content/` as Markdown files with YAML frontmatter. See `docs/PRD.md` Section 7 for frontmatter schemas.

```
content/
├── shortcuts/       # Shortcut categories
├── workflows/
│   ├── music/       # Vocal recording, drum editing, mastering, ...
│   └── post/        # ADR, dialogue, foley, film mix, ...
├── templates/
│   ├── music/
│   └── post/
├── knowledge/       # Feature reference articles
├── how-do-i/        # Q&A entries
└── best-practices/
```

## Offline Deployment

To build a fully static, offline-capable export:

1. Uncomment `output: "export"` in `next.config.ts`
2. Run `npm run build`
3. Serve the `out/` directory with any static file server

## Project Structure

See `docs/PRD.md` Section 8 for the complete folder structure reference.
