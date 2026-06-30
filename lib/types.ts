// Pro Tools Second Brain — Shared TypeScript Types

export type Domain = "music" | "post" | "both";

export type Difficulty = "foundational" | "intermediate" | "advanced";

export type ContentType =
  | "shortcut"
  | "workflow"
  | "template"
  | "reference"
  | "how-to"
  | "best-practice";

export type ShortcutCategory =
  | "universal"
  | "editing"
  | "transport"
  | "mixing"
  | "windows"
  | "midi"
  | "clips"
  | "elastic-audio"
  | "automation";

// ---------------------------------------------------------------------------
// Shortcut
// ---------------------------------------------------------------------------

export interface Shortcut {
  id: string;
  action: string;
  mac: string;
  windows?: string;
  description: string;
  category: ShortcutCategory;
  domain: Domain;
  relatedWorkflows?: string[];
  tags?: string[];
}

// ---------------------------------------------------------------------------
// Workflow
// ---------------------------------------------------------------------------

export interface WorkflowFrontmatter {
  id: string;
  title: string;
  slug: string;
  type: "workflow";
  domain: Domain;
  category: string;
  difficulty: Difficulty;
  overview: string;
  tags: string[];
  shortcuts?: Array<{ id: string }>;
  relatedWorkflows?: string[];
  lastReviewed?: string;
}

// ---------------------------------------------------------------------------
// Session Template
// ---------------------------------------------------------------------------

export interface TrackEntry {
  name: string;
  type: "Audio" | "Aux" | "Master" | "Instrument" | "MIDI" | "Folder" | "VCA";
  color?: string;
  purpose?: string;
}

export interface TrackGroup {
  name: string;
  type: "Folder";
  tracks: TrackEntry[];
}

export interface BusRoute {
  source: string;
  bus: string;
  destination: string;
}

export interface TechSpecs {
  sampleRate: number;
  bitDepth: number;
  bufferSize: number;
  frameRate?: string;
  timecodeFormat?: string;
}

export interface TemplateFrontmatter {
  id: string;
  title: string;
  slug: string;
  type: "template";
  domain: Domain;
  category: string;
  techSpecs: TechSpecs;
  trackLayout: Array<TrackGroup | TrackEntry>;
  busRouting: BusRoute[];
  tags: string[];
}

// ---------------------------------------------------------------------------
// Knowledge Base Article
// ---------------------------------------------------------------------------

export interface KnowledgeFrontmatter {
  id: string;
  title: string;
  slug: string;
  type: "reference";
  domain: Domain;
  category: string;
  difficulty: Difficulty;
  definition: string;
  whenToUse: string[];
  whenNotToUse: string[];
  tags: string[];
  relatedFeatures?: string[];
}

// ---------------------------------------------------------------------------
// How Do I?
// ---------------------------------------------------------------------------

export interface HowDoIEntry {
  id: string;
  question: string;
  slug: string;
  domain: Domain;
  answer: {
    summary: string;
    steps: string[];
  };
  relatedWorkflow?: string;
  relatedArticle?: string;
  shortcuts?: string[];
  tags: string[];
}

// ---------------------------------------------------------------------------
// Search Index
// ---------------------------------------------------------------------------

export interface SearchIndexEntry {
  id: string;
  type: ContentType;
  title: string;
  description: string;
  slug: string;
  url: string;
  tags: string[];
  domain: Domain;
  shortcut?: string;
  weight: number;
}
