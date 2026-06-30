# Pro Tools Second Brain — Product Documentation

---

## Table of Contents

1. [Product Requirements Document (PRD)](#1-product-requirements-document)
2. [Information Architecture](#2-information-architecture)
3. [User Stories](#3-user-stories)
4. [Acceptance Criteria](#4-acceptance-criteria)
5. [Wireframe Descriptions](#5-wireframe-descriptions)
6. [Component Hierarchy](#6-component-hierarchy)
7. [Data Schema Recommendations](#7-data-schema-recommendations)
8. [Folder Structure Recommendations](#8-folder-structure-recommendations)
9. [MVP Roadmap](#9-mvp-roadmap)
10. [Future Roadmap](#10-future-roadmap)

---

## 1. Product Requirements Document

### 1.1 Product Overview

**Product Name:** Pro Tools Second Brain
**Version:** 1.0 (MVP)
**Type:** Local-first, offline-capable knowledge base and workflow assistant
**Primary Platform:** Desktop web application (Electron-compatible)

**One-Line Description:**
A task-oriented Pro Tools workflow companion that eliminates documentation friction during active recording, editing, mixing, and post-production sessions.

---

### 1.2 Problem Statement

Professional audio engineers and students lose significant time during active sessions searching for:

- Keyboard shortcuts buried in menus
- Step-by-step workflows across scattered documentation
- Signal routing decisions and session setup guidance
- Industry best practices for specific tasks

This context-switching breaks creative flow, slows production, and introduces errors in time-sensitive professional environments.

---

### 1.3 Goals and Success Metrics

**Primary Goals**

| Goal | Metric |
|------|--------|
| Reduce time-to-answer during sessions | User finds answer in under 10 seconds |
| Consolidate scattered knowledge | 100% of core workflows available in-app |
| Support professional-grade accuracy | Content reviewed against Avid documentation and industry practice |
| Enable offline operation | App fully functional without internet connection |

**Success Indicators (MVP)**

- User can locate a shortcut within 2 keystrokes of opening the app
- User can navigate to a workflow within 2 clicks
- Search returns relevant results in under 500ms
- App renders correctly on 1440px+ desktop displays

---

### 1.4 Target Users

**Primary User: The Audio Engineering Student**
- Enrolled in a formal audio engineering program (SAE Institute or equivalent)
- Learning Pro Tools as primary DAW
- Simultaneously managing classroom theory and hands-on session work
- Needs rapid reinforcement of procedures during lab sessions

**Primary User: The Independent Music Producer / Recording Engineer**
- Running sessions for clients in a professional or project studio
- Cannot pause sessions to search documentation without disrupting client confidence
- Needs instant recall of shortcuts, routing, and procedures

**Primary User: The Post-Production Editor**
- Working on dialogue, ADR, Foley, or film mix deliverables
- Operates under tight deadlines with specific delivery standards
- Needs procedural accuracy, not general information

**Secondary Users**
- Home studio musicians learning Pro Tools independently
- Assistant engineers supporting senior engineers in professional sessions
- Beginning Pro Tools users building foundational knowledge
- Content creators working with dialogue-based media

---

### 1.5 Core Principles

1. **Task-first, feature-second.** Organize by what the user is trying to accomplish, not by where it lives in the software.
2. **Minimum clicks, maximum clarity.** Every answer should be reachable within two interactions.
3. **Keyboard-first navigation.** Power users should never need a mouse.
4. **Offline by default.** The app must work in a studio without internet access.
5. **Professional accuracy over accessibility.** Content is written for working engineers, not beginners reading a blog.
6. **Surface everything, bury nothing.** Shortcuts, tips, and related content appear contextually throughout the UI.

---

### 1.6 Constraints

| Constraint | Rationale |
|-----------|-----------|
| No user authentication (v1) | Reduces complexity; single-user local application |
| No cloud synchronization (v1) | Offline-first requirement; privacy in studio environments |
| No social features | Out of scope; not a community product |
| No audio playback engine | Out of scope; companion app only |
| No plugin hosting | Out of scope |
| No project management tools | Out of scope |
| Markdown as primary content format | Enables Git-based content management, editor accessibility, and future portability |

---

### 1.7 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Content | Markdown (.md) + MDX |
| Search | Fuse.js (client-side fuzzy search) |
| State | React Context + useReducer |
| Rendering | Static site generation (SSG) via Next.js |
| Deployment (local) | `next build` + `next start` or static export |
| Future: Search | Orama or FlexSearch for indexed full-text search |
| Future: AI | Ollama (local LLM) via REST API |

---

## 2. Information Architecture

### 2.1 Primary Navigation Structure

```
Pro Tools Second Brain
│
├── Search [Global — always visible]
│
├── Shortcuts
│   ├── Universal Shortcuts
│   ├── Edit Mode Shortcuts
│   ├── Clip / Region Shortcuts
│   ├── Transport & Playback
│   ├── Mixing & Routing
│   ├── MIDI Shortcuts
│   └── Window Management
│
├── Workflows
│   ├── Music Production
│   │   ├── Vocal Recording
│   │   ├── Vocal Mixing
│   │   ├── Beat Production
│   │   ├── Drum Editing
│   │   └── Mastering
│   │
│   └── Post Production
│       ├── ADR
│       ├── Dialogue Editing
│       ├── Foley
│       ├── Sound Design
│       ├── Music for Picture
│       ├── Film Mixing
│       └── Delivery & Stems
│
├── Session Templates
│   ├── Music Production
│   │   ├── Vocal Recording Template
│   │   ├── Beat Production Template
│   │   └── Full Mix Template
│   │
│   └── Post Production
│       ├── Dialogue Edit Template
│       ├── ADR Template
│       ├── Foley Template
│       └── Film Mix Template
│
├── Knowledge Base
│   ├── Beat Detective
│   ├── Elastic Audio
│   ├── Strip Silence
│   ├── Clip Gain & Automation
│   ├── Playlist Management
│   ├── Bus Routing
│   ├── Quantization
│   ├── Diegetic vs. Non-Diegetic Sound
│   ├── Film Delivery Standards
│   ├── Stem Organization
│   └── Music Supervision
│
├── How Do I?
│   └── [Searchable Q&A index]
│
└── Best Practices
    ├── Session Hygiene
    ├── Naming Conventions
    ├── Backup Procedures
    └── Delivery Standards
```

---

### 2.2 Content Taxonomy

Every piece of content is tagged with at minimum:

| Dimension | Values |
|-----------|--------|
| `type` | `shortcut` \| `workflow` \| `template` \| `reference` \| `how-to` \| `best-practice` |
| `domain` | `music` \| `post` \| `both` |
| `category` | e.g., `vocal-recording`, `drum-editing`, `adr`, `dialogue` |
| `difficulty` | `foundational` \| `intermediate` \| `advanced` |
| `tags` | freeform array: `["beat-detective", "elastic-audio", "quantization"]` |

---

### 2.3 URL Structure

```
/                               → Home / dashboard
/search?q=...                   → Search results
/shortcuts                      → Shortcut library index
/shortcuts/[category]           → Shortcut category detail
/workflows                      → Workflow index
/workflows/[slug]               → Workflow detail
/templates                      → Template index
/templates/[slug]               → Template detail
/knowledge/[slug]               → Knowledge base article
/how-do-i                       → How Do I index
/how-do-i/[slug]                → How Do I answer
/best-practices/[slug]          → Best practices article
```

---

## 3. User Stories

### Epic 1: Shortcut Discovery

**US-101**
As a recording engineer mid-session, I want to type a single keystroke to open search and type a partial shortcut description so that I can find the correct Pro Tools keyboard shortcut in under five seconds without leaving my workflow.

**US-102**
As an audio student, I want to browse shortcuts organized by category so that I can study and memorize them systematically between sessions.

**US-103**
As a mixer, I want to see related shortcuts on every workflow page so that I learn the shortcuts contextually while reading procedures.

**US-104**
As a keyboard-first user, I want every search result and navigation action to be accessible without using a mouse so that I can operate the app while keeping my hands on the keyboard.

---

### Epic 2: Workflow Guidance

**US-201**
As a post-production editor, I want to open a step-by-step ADR recording workflow so that I can follow a professional procedure without relying on memory during a client session.

**US-202**
As a music producer, I want to access a complete drum editing workflow including Beat Detective and Elastic Audio procedures so that I can process a drum performance efficiently.

**US-203**
As an audio student, I want each workflow to include common mistakes and professional best practices so that I can avoid errors I haven't encountered yet.

**US-204**
As an assistant engineer, I want to quickly look up signal routing for a specific workflow so that I can set up a session correctly before the engineer arrives.

---

### Epic 3: Session Templates

**US-301**
As a recording engineer, I want to view a recommended session template for vocal recording including track layout, bus routing, and color coding so that I can configure a new session correctly and quickly.

**US-302**
As a post-production editor, I want to access a film mix session template including folder structure, bus assignments, and stem organization so that my deliverables conform to industry standards.

**US-303**
As an audio student, I want to see signal flow diagrams for each template so that I understand why each element is placed where it is.

---

### Epic 4: Knowledge Base Access

**US-401**
As a user unfamiliar with Beat Detective, I want to find a complete reference article explaining what it does, when to use it, and how to operate it step by step so that I can use it correctly in my first session.

**US-402**
As a dialogue editor, I want to understand the difference between diegetic and non-diegetic sound so that I can make correct editorial decisions during a picture lock pass.

**US-403**
As a music editor, I want to access film delivery standards documentation so that I can prepare stems correctly for the re-recording mixer.

---

### Epic 5: "How Do I?" Queries

**US-501**
As a user, I want to type a natural language question like "how do I export stems" and receive a direct, step-by-step answer so that I do not have to know the exact terminology to find the procedure.

**US-502**
As a user, I want "How Do I?" answers to link to the full workflow or knowledge base article so that I can go deeper if needed.

**US-503**
As a user, I want the most common "How Do I?" questions to be listed on a quick-reference page so that I can find answers without searching.

---

### Epic 6: Search and Discovery

**US-601**
As any user, I want to search across all content types — shortcuts, workflows, templates, knowledge base, how-to — from a single search bar so that I do not need to know which section contains the answer.

**US-602**
As a user, I want search results to be ranked so that exact shortcut matches appear first, followed by workflow matches, then related concepts.

**US-603**
As a power user, I want to filter search results by content type (shortcut / workflow / template / reference) so that I can narrow results when I know what kind of answer I need.

---

### Epic 7: Navigation and UX

**US-701**
As a user, I want the application to operate fully offline so that it is available during sessions in studios without reliable internet access.

**US-702**
As a desktop user, I want the UI to be optimized for 1440px+ screens in dark mode so that it is easy to read in a professional studio environment with controlled lighting.

**US-703**
As a keyboard-first user, I want to press `/` or `Cmd+K` from anywhere in the app to open global search so that I can find any content without navigating menus.

**US-704**
As a user, I want a breadcrumb trail on every content page so that I always know where I am and can navigate back without using the browser back button.

---

## 4. Acceptance Criteria

### Feature 1: Global Search

```
GIVEN the user is on any page
WHEN the user presses `/` or `Cmd+K`
THEN the global search modal opens and receives keyboard focus

GIVEN the search modal is open
WHEN the user types a query of 2+ characters
THEN results appear within 500ms without a page reload

GIVEN search results are displayed
THEN results are grouped by type: Shortcuts → Workflows → Knowledge Base → How Do I?

GIVEN an exact shortcut match exists
THEN it appears as the first result regardless of section

GIVEN the user presses Escape
THEN the search modal closes and focus returns to the previous element

GIVEN the user presses ArrowDown/ArrowUp in results
THEN keyboard focus moves between results

GIVEN the user presses Enter on a result
THEN the app navigates to that content page and the modal closes
```

---

### Feature 2: Shortcut Library

```
GIVEN the user navigates to /shortcuts
THEN all shortcut categories are displayed as a filterable grid or list

GIVEN the user selects a category
THEN all shortcuts in that category are displayed in a table with columns:
  - Action
  - Mac Shortcut
  - Windows Shortcut (if different)
  - Description
  - Related Workflow (linked)

GIVEN the user searches within the shortcut library
THEN results filter in real time as the user types

GIVEN the user views a shortcut
THEN a "Copy" button allows the shortcut to be copied to clipboard
```

---

### Feature 3: Workflow Pages

```
GIVEN the user navigates to a workflow
THEN the page displays in order:
  1. Overview (2–3 sentences)
  2. Required session setup checklist
  3. Signal flow diagram (text-based ASCII or SVG)
  4. Step-by-step numbered procedure
  5. Keyboard shortcuts used in this workflow (table)
  6. Common mistakes (bulleted list)
  7. Industry best practices (bulleted list)
  8. Related workflows (linked cards)

GIVEN the workflow includes more than 10 steps
THEN an in-page table of contents is displayed at the top

GIVEN the user is on a workflow page
THEN a "Copy all shortcuts" button copies all workflow shortcuts to clipboard
```

---

### Feature 4: Session Templates

```
GIVEN the user navigates to a template
THEN the page displays:
  1. Template name and domain (music / post)
  2. Use case description
  3. Track layout (ordered list with track types and count)
  4. Bus routing table (Source → Bus → Destination)
  5. Folder structure (nested list or diagram)
  6. Color coding guide (track type → color)
  7. Signal flow diagram
  8. Setup checklist before recording/editing begins

GIVEN the user views a template
THEN all technical values (sample rate, bit depth, buffer size) are specified
```

---

### Feature 5: Knowledge Base Articles

```
GIVEN the user navigates to a knowledge base article
THEN the article includes:
  1. Definition
  2. When to use
  3. When not to use
  4. Step-by-step procedure
  5. Parameters and settings explained
  6. Common mistakes
  7. Related features (linked)

GIVEN the article covers a feature with a keyboard shortcut
THEN the shortcut is displayed inline in a styled shortcut badge
```

---

### Feature 6: How Do I? Index

```
GIVEN the user navigates to /how-do-i
THEN a list of 40+ common questions is displayed, grouped by domain

GIVEN the user clicks a question
THEN a concise answer is displayed with:
  1. Direct answer (1–3 steps)
  2. Link to full workflow or knowledge base article
  3. Relevant shortcuts

GIVEN the user searches the How Do I? page
THEN questions filter in real time
```

---

### Feature 7: Offline Operation

```
GIVEN the application has been built and served locally
THEN all content is accessible without an internet connection

GIVEN the user loads the app without internet access
THEN no error states appear and no content is missing

GIVEN search is performed without internet access
THEN Fuse.js client-side search operates normally
```

---

## 5. Wireframe Descriptions

### 5.1 Application Shell

**Layout:** Three-column layout at 1440px+
- **Column 1 (Sidebar, 240px fixed):** Primary navigation, logo, active state indicator
- **Column 2 (Content, fluid):** Main content area
- **Column 3 (Context panel, 280px, collapsible):** Related shortcuts, related content, quick reference

**Header (64px):**
- Logo / app name (left)
- Global search bar (center, always visible, activates modal on focus)
- Keyboard shortcut hint: `Cmd+K` (right of search bar)
- Keyboard navigation toggle (right)

**Footer (32px):**
- Current section breadcrumb
- Keyboard shortcut cheat strip (3–5 most relevant shortcuts for current page)

---

### 5.2 Home / Dashboard

**Purpose:** Fast orientation and quick access to recent or common content

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  [Logo]        [Search bar — Cmd+K]                     │
├──────────┬──────────────────────────────────┬───────────┤
│          │  Quick Access                    │           │
│  Nav     │  ┌──────────┐ ┌──────────┐      │  Context  │
│          │  │Shortcuts │ │Workflows │      │  Panel    │
│  • Short │  └──────────┘ └──────────┘      │           │
│  • Work  │  ┌──────────┐ ┌──────────┐      │  Most     │
│  • Templ │  │Templates │ │How Do I? │      │  Used     │
│  • KB    │  └──────────┘ └──────────┘      │  Shortcut │
│  • How?  │                                  │  Today    │
│  • Best  │  Common Workflows                │           │
│          │  [Vocal Recording]               │           │
│          │  [Drum Editing]                  │           │
│          │  [ADR]                           │           │
│          │  [Dialogue Editing]              │           │
│          │  [Film Mix]                      │           │
└──────────┴──────────────────────────────────┴───────────┘
```

---

### 5.3 Global Search Modal

**Trigger:** `Cmd+K`, `/`, or click on search bar

**Behavior:**
- Full-width centered modal with dark overlay
- Input auto-focused on open
- Results appear below input as user types (minimum 2 characters)
- Results grouped by type with section headers
- Keyboard navigable (Arrow keys + Enter)
- `Escape` closes modal

**Visual layout:**
```
┌─────────────────────────────────────┐
│  🔍  Search shortcuts, workflows... │
├─────────────────────────────────────┤
│  SHORTCUTS                          │
│  ▶  Cmd+E  —  Separate Clip         │
│  ▶  Cmd+D  —  Duplicate Clip        │
│                                     │
│  WORKFLOWS                          │
│  ▶  Drum Editing                    │
│  ▶  Vocal Recording                 │
│                                     │
│  KNOWLEDGE BASE                     │
│  ▶  Elastic Audio                   │
└─────────────────────────────────────┘
```

---

### 5.4 Shortcut Library Page

**Layout:** Two-panel
- Left: Category filter list (sticky)
- Right: Shortcut table with inline search

**Table columns:** Action | Shortcut | Description | Related Workflow

**Interaction:** Clicking any row expands an inline detail card with full description and related workflow links.

---

### 5.5 Workflow Detail Page

**Layout:** Two-column
- Main content column (fluid)
- Sticky right panel: in-page table of contents + shortcut quick list

**Content structure (top to bottom):**
1. Breadcrumb: Workflows › Post Production › ADR
2. Title + domain badge (Music / Post / Both)
3. Overview paragraph
4. Session setup checklist (interactive checkboxes, stateless)
5. Signal flow diagram
6. Step-by-step procedure (numbered, expandable steps)
7. Shortcuts table (with copy button)
8. Common mistakes accordion
9. Best practices accordion
10. Related workflow cards (horizontal scroll)

---

### 5.6 Session Template Page

**Layout:** Single column with full-width diagrams

**Content structure:**
1. Title + use case description
2. Technical specifications table (sample rate, bit depth, buffer, I/O)
3. Track layout table (track name, type, count, color, purpose)
4. Bus routing table
5. Signal flow diagram (text or SVG)
6. Folder structure tree
7. Pre-session setup checklist
8. Download template file reference (future: .ptx template link)

---

### 5.7 Knowledge Base Article

**Layout:** Reading-optimized single column with sticky right TOC

**Content structure:**
1. Breadcrumb + article type badge
2. Title + one-line definition
3. When to use / when not to use (two-column card)
4. Full procedure
5. Parameter reference table
6. Common mistakes
7. Related articles

---

### 5.8 How Do I? Page

**Layout:** Searchable accordion list

**Interaction:**
- Search bar at top filters questions in real time
- Questions grouped by domain: Music Production / Post Production / General
- Each question expands inline to show concise answer + "Full guide" link

---

## 6. Component Hierarchy

```
App
├── Layout
│   ├── AppShell
│   │   ├── Sidebar
│   │   │   ├── Logo
│   │   │   ├── NavSection (repeating)
│   │   │   │   ├── NavSectionHeader
│   │   │   │   └── NavItem (repeating)
│   │   │   └── KeyboardHint
│   │   ├── Header
│   │   │   ├── SearchTrigger
│   │   │   └── BreadcrumbBar
│   │   ├── MainContent (slot)
│   │   ├── ContextPanel
│   │   │   ├── RelatedShortcuts
│   │   │   ├── RelatedContent
│   │   │   └── QuickReference
│   │   └── Footer
│   │       └── ShortcutStrip
│   │
│   └── SearchModal
│       ├── SearchInput
│       ├── SearchResultGroup (repeating)
│       │   ├── GroupHeader
│       │   └── SearchResultItem (repeating)
│       └── SearchEmptyState
│
├── Pages
│   ├── HomePage
│   │   ├── QuickAccessGrid
│   │   ├── CommonWorkflowList
│   │   └── RecentlyViewed (future)
│   │
│   ├── ShortcutsPage
│   │   ├── CategoryFilter
│   │   ├── ShortcutTable
│   │   │   └── ShortcutRow
│   │   │       └── ShortcutDetailExpand
│   │   └── ShortcutSearchBar
│   │
│   ├── WorkflowIndexPage
│   │   ├── DomainTabs (Music / Post / All)
│   │   └── WorkflowCardGrid
│   │       └── WorkflowCard
│   │
│   ├── WorkflowDetailPage
│   │   ├── WorkflowHeader
│   │   ├── SessionSetupChecklist
│   │   ├── SignalFlowDiagram
│   │   ├── StepList
│   │   │   └── Step (expandable)
│   │   ├── ShortcutsTable
│   │   ├── MistakesAccordion
│   │   ├── BestPracticesAccordion
│   │   └── RelatedWorkflowsRow
│   │
│   ├── TemplateIndexPage
│   │   └── TemplateCardGrid
│   │       └── TemplateCard
│   │
│   ├── TemplateDetailPage
│   │   ├── TemplateHeader
│   │   ├── TechSpecsTable
│   │   ├── TrackLayoutTable
│   │   ├── BusRoutingTable
│   │   ├── SignalFlowDiagram
│   │   ├── FolderStructureTree
│   │   └── SetupChecklist
│   │
│   ├── KnowledgeArticlePage
│   │   ├── ArticleHeader
│   │   ├── UseWhenCard
│   │   ├── ProcedureList
│   │   ├── ParameterTable
│   │   ├── MistakesSection
│   │   └── RelatedArticles
│   │
│   └── HowDoIPage
│       ├── HowDoISearch
│       ├── DomainGroupHeader
│       └── HowDoIAccordionItem
│
└── Shared UI
    ├── ShortcutBadge
    ├── DomainBadge
    ├── DifficultyBadge
    ├── CopyButton
    ├── Breadcrumb
    ├── InPageTOC
    ├── SignalFlowDiagram (renderer)
    ├── Checklist (stateless interactive)
    ├── Accordion
    ├── ContentCard
    └── TagList
```

---

## 7. Data Schema Recommendations

### 7.1 Shortcut Entry

```typescript
// lib/types.ts
interface Shortcut {
  id: string;                    // "cmd-e-separate-clip"
  action: string;                // "Separate Clip at Playhead"
  mac: string;                   // "Cmd+E"
  windows?: string;              // "Ctrl+E"
  description: string;           // Full description of what the shortcut does
  category: ShortcutCategory;   // "editing" | "transport" | "mixing" | "windows" | "midi" | "clips"
  domain: Domain;                // "music" | "post" | "both"
  relatedWorkflows?: string[];   // ["drum-editing", "dialogue-editing"] — slugs
  tags?: string[];               // ["clip", "region", "separate"]
}

type ShortcutCategory =
  | "universal"
  | "editing"
  | "transport"
  | "mixing"
  | "windows"
  | "midi"
  | "clips"
  | "elastic-audio"
  | "automation";

type Domain = "music" | "post" | "both";
```

---

### 7.2 Workflow Frontmatter (Markdown)

```yaml
---
id: "adr-recording"
title: "ADR Recording"
slug: "adr-recording"
type: "workflow"
domain: "post"
category: "adr"
difficulty: "intermediate"
overview: "Automated Dialogue Replacement (ADR) is the process of re-recording actor dialogue in a controlled studio environment to replace unusable production sound."
tags: ["adr", "dialogue", "post-production", "vocal", "looping"]
shortcuts:
  - id: "cmd-space"
  - id: "cmd-period"
  - id: "cmd-e-separate-clip"
relatedWorkflows:
  - "dialogue-editing"
  - "foley-editing"
  - "film-mixing"
lastReviewed: "2025-01-01"
---
```

---

### 7.3 Template Frontmatter (Markdown)

```yaml
---
id: "film-mix-template"
title: "Film Mix Session Template"
slug: "film-mix-template"
type: "template"
domain: "post"
category: "film-mixing"
techSpecs:
  sampleRate: 48000
  bitDepth: 24
  bufferSize: 256
  frameRate: "23.976"
  timecodeFormat: "SMPTE"
trackLayout:
  - name: "Dialogue Group"
    type: "Folder"
    tracks:
      - { name: "DX L", type: "Audio", color: "blue" }
      - { name: "DX R", type: "Audio", color: "blue" }
  - name: "ADR Group"
    type: "Folder"
    tracks:
      - { name: "ADR L", type: "Audio", color: "cyan" }
busRouting:
  - source: "Dialogue tracks"
    bus: "Bus 1-2"
    destination: "DX Stem Master"
  - source: "DX Stem Master"
    bus: "Bus 3-4"
    destination: "Mix Bus"
tags: ["film", "mix", "post-production", "stems", "delivery"]
---
```

---

### 7.4 Knowledge Base Article Frontmatter

```yaml
---
id: "elastic-audio"
title: "Elastic Audio"
slug: "elastic-audio"
type: "reference"
domain: "both"
category: "time-manipulation"
difficulty: "intermediate"
definition: "Elastic Audio is Pro Tools' real-time pitch-independent time compression and expansion system."
whenToUse:
  - "Correcting timing issues in recorded performances"
  - "Time-stretching audio to fit a specific grid"
  - "Matching audio length to picture"
whenNotToUse:
  - "Transient-heavy material stretched beyond 15–20% without artifact consideration"
  - "Final mastering chain"
tags: ["elastic-audio", "time-stretch", "quantization", "editing"]
relatedFeatures:
  - "beat-detective"
  - "clip-gain"
  - "quantization"
---
```

---

### 7.5 How Do I? Entry

```typescript
// lib/types.ts
interface HowDoIEntry {
  id: string;                  // "export-stems"
  question: string;            // "How do I export stems?"
  slug: string;                // "export-stems"
  domain: Domain;
  answer: {
    summary: string;           // Direct 1–3 step answer
    steps: string[];           // Numbered steps
  };
  relatedWorkflow?: string;    // slug
  relatedArticle?: string;     // slug
  shortcuts?: string[];        // shortcut ids used in this answer
  tags: string[];
}
```

---

### 7.6 Fuse.js Search Index Structure

```typescript
// lib/search.ts
interface SearchIndexEntry {
  id: string;
  type: "shortcut" | "workflow" | "template" | "reference" | "how-to";
  title: string;
  description: string;
  slug: string;
  url: string;
  tags: string[];
  domain: Domain;
  shortcut?: string;           // Mac shortcut string if type === "shortcut"
  weight: number;              // 1 = shortcut, 2 = workflow, 3 = reference, 4 = how-to
}
```

Search priority is enforced via Fuse.js `weight` field and custom `sortFn` placing shortcut matches first.

---

## 8. Folder Structure

```
ProToolsCheatSheet/
│
├── docs/
│   └── PRD.md                             ← this file
│
├── app/                                   # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   ├── search/page.tsx
│   ├── shortcuts/
│   │   ├── page.tsx
│   │   └── [category]/page.tsx
│   ├── workflows/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── templates/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── knowledge/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── how-do-i/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── best-practices/
│       ├── page.tsx
│       └── [slug]/page.tsx
│
├── components/
│   ├── layout/        # AppShell, Sidebar, Header, ContextPanel, Footer
│   ├── search/        # SearchModal, SearchInput, SearchResults
│   ├── shortcuts/     # ShortcutTable, ShortcutRow, ShortcutBadge
│   ├── workflows/     # WorkflowCard, StepList, SignalFlowDiagram
│   ├── templates/     # TemplateCard, TrackLayoutTable, BusRoutingTable
│   ├── knowledge/     # ArticleHeader, ParameterTable, UseWhenCard
│   └── ui/            # Accordion, Badge, Breadcrumb, CopyButton, etc.
│
├── content/
│   ├── shortcuts/     # universal.md, editing.md, transport.md, ...
│   ├── workflows/
│   │   ├── music/     # vocal-recording.md, drum-editing.md, ...
│   │   └── post/      # adr.md, dialogue-editing.md, foley.md, ...
│   ├── templates/
│   │   ├── music/     # vocal-recording-template.md, ...
│   │   └── post/      # film-mix-template.md, adr-template.md, ...
│   ├── knowledge/     # beat-detective.md, elastic-audio.md, ...
│   ├── how-do-i/      # export-stems.md, use-beat-detective.md, ...
│   └── best-practices/
│
├── data/
│   ├── shortcuts.json          # All shortcuts — primary search source
│   ├── search-index.json       # Pre-built Fuse.js index
│   └── navigation.json         # Sidebar nav structure
│
├── lib/
│   ├── types.ts                # All shared TypeScript types
│   ├── content.ts              # Markdown parsing (gray-matter)
│   ├── search.ts               # Fuse.js initialization and search logic
│   └── navigation.ts           # Navigation tree builder
│
├── public/
│   └── diagrams/               # Static SVG signal flow diagrams
│
├── styles/
│   └── globals.css
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 9. MVP Roadmap

### Phase 0 — Foundation (Week 1)

**Goal:** Runnable application shell with navigation and content pipeline.

- [ ] Initialize Next.js 14+ project with TypeScript and Tailwind CSS
- [ ] Implement `AppShell` with sidebar, header, and main content slot
- [ ] Implement dark mode theme using Tailwind CSS variables
- [ ] Configure `gray-matter` for Markdown frontmatter parsing
- [ ] Define all TypeScript types (`Shortcut`, `Workflow`, `Template`, `HowDoI`)
- [ ] Create navigation JSON and sidebar component
- [ ] Create `Breadcrumb` component
- [ ] Deploy locally and confirm routing works across all planned URL paths

**Success Gate:** App runs locally. Navigation renders. Clicking a nav item changes the URL.

---

### Phase 1 — Shortcut Library (Week 2)

**Goal:** Complete, searchable shortcut library.

- [ ] Author all shortcut Markdown files (minimum 150 shortcuts across all categories)
- [ ] Build `ShortcutTable` and `ShortcutRow` components
- [ ] Build `ShortcutBadge` component (used throughout the app)
- [ ] Implement category filter on `/shortcuts` page
- [ ] Implement inline search on shortcut library page (Fuse.js)
- [ ] Add `CopyButton` component for copying shortcut text

**Success Gate:** User can find any shortcut by name or description within 3 keystrokes.

---

### Phase 2 — Global Search (Weeks 2–3)

**Goal:** Single-input search across all content types.

- [ ] Build `SearchModal` component with keyboard trigger (`Cmd+K`, `/`)
- [ ] Build pre-compiled search index (`data/search-index.json`) from all content
- [ ] Initialize Fuse.js with weighted search index
- [ ] Implement result grouping by content type with priority order
- [ ] Implement keyboard navigation within search modal (Arrow keys, Enter, Escape)
- [ ] Wire search modal to all content types

**Success Gate:** User opens search with `Cmd+K`, types 3 characters, receives ranked results in under 500ms.

---

### Phase 3 — Core Workflow Library (Weeks 3–4)

**Goal:** Complete workflow documentation for all 12 primary workflows.

- [ ] Author all 12 workflow Markdown files
- [ ] Build `WorkflowDetailPage` with all required sections
- [ ] Build `StepList` and `Step` components (expandable)
- [ ] Build `SignalFlowDiagram` renderer (ASCII initially)
- [ ] Build `SessionSetupChecklist` (interactive stateless checkboxes)
- [ ] Build `RelatedWorkflowsRow` with linked `WorkflowCard` components
- [ ] Build `WorkflowIndexPage` with domain tabs and card grid

**Success Gate:** User can navigate to any workflow and complete the procedure end-to-end.

---

### Phase 4 — Session Templates (Weeks 4–5)

**Goal:** Complete session template library for all 7 primary templates.

- [ ] Author all 7 template Markdown files
- [ ] Build `TemplateDetailPage` with all required sections
- [ ] Build `TrackLayoutTable`, `BusRoutingTable`, `FolderStructureTree` components
- [ ] Build `TemplateIndexPage` with domain filter

**Success Gate:** User can open a template and configure a new session without external documentation.

---

### Phase 5 — Knowledge Base and How Do I? (Weeks 5–6)

**Goal:** Complete reference library and Q&A index.

- [ ] Author all 11 knowledge base articles
- [ ] Build `KnowledgeArticlePage` with all required sections
- [ ] Author minimum 40 "How Do I?" entries
- [ ] Build `HowDoIPage` with searchable accordion
- [ ] Wire knowledge base and how-do-i into global search index

**Success Gate:** User types a natural language question and finds a direct answer.

---

### Phase 6 — Context Panel and UX Polish (Weeks 6–7)

**Goal:** Surface related information contextually and achieve keyboard-first UX.

- [ ] Build `ContextPanel` with `RelatedShortcuts` and `RelatedContent`
- [ ] Build `ShortcutStrip` in footer (page-contextual shortcuts)
- [ ] Implement `InPageTOC` for long pages
- [ ] Full keyboard navigation audit
- [ ] Responsive layout audit (1440px, 1280px, 1024px)
- [ ] Performance audit: search index size, Fuse.js load time, initial page load

**Success Gate:** App fully navigable by keyboard. All pages render at 1024px+. Search loads in under 100ms.

---

### Phase 7 — Content QA and Launch (Weeks 7–8)

**Goal:** Content accuracy review and production build.

- [ ] Content review against Avid documentation for technical accuracy
- [ ] Cross-link audit: all related workflows, articles, and shortcuts correctly linked
- [ ] 404 and empty state handling
- [ ] `README.md` with setup instructions
- [ ] Production build confirmed working
- [ ] Static export confirmed for fully offline deployment
- [ ] `CONTRIBUTING.md` content contribution guide

**Success Gate:** App builds cleanly, runs offline, all content verified accurate.

---

### MVP Feature Summary

| Feature | Status at MVP Launch |
|---------|---------------------|
| Global Search (`Cmd+K`) | Complete |
| Shortcut Library (150+ shortcuts) | Complete |
| Workflow Library (12 workflows) | Complete |
| Session Templates (7 templates) | Complete |
| Knowledge Base (11 articles) | Complete |
| How Do I? (40+ entries) | Complete |
| Best Practices | Complete |
| Offline operation | Complete |
| Dark mode | Complete |
| Keyboard-first navigation | Complete |
| Context panel | Complete |
| User authentication | Out of scope |
| Cloud sync | Out of scope |
| User bookmarks | Out of scope |

---

## 10. Future Roadmap

### Version 1.1 — Enhanced Search
- Replace Fuse.js with Orama or FlexSearch
- Search filters by content type, domain, difficulty
- Search history (local storage)
- Keyboard shortcut autocomplete in search

### Version 1.2 — User Annotations
- Inline note-taking on any content page (localStorage)
- Bookmark / favorite any shortcut, workflow, or article
- Personal "Quick Reference" panel surfacing bookmarks
- Export notes to Markdown

### Version 1.3 — Content Expansion
- Pro Tools MIDI workflows
- Avid VENUE integration workflows
- Synchronization workflows (Dolby Atmos, Timecode, LTC)
- Plugin reference cards (SSL, Waves, FabFilter, iZotope)
- 50+ additional "How Do I?" entries

### Version 2.0 — Local AI Integration
- Local LLM via Ollama (on-device, no API key required)
- Natural language Q&A grounded in knowledge base (RAG)
- Conversational workflow assistant
- Session setup advisor
- Shortcut learning / quiz mode

### Version 2.1 — Advanced UX
- Command palette with runnable actions
- Workflow progress tracker (persistent step state)
- Session day mode: stripped-down view with shortcuts + current workflow
- Print-to-PDF for any workflow or template
- Custom personal shortcut reference cards

### Version 3.0 — Ecosystem Expansion
- iOS / iPadOS companion app (read-only)
- Multiple DAW support (Logic Pro, Reaper, Nuendo)
- Community content via GitHub pull requests with editorial review
- Educator mode: custom curriculum paths through existing content
