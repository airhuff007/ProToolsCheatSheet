// Fuse.js search initialization and query logic
// TODO: Install fuse.js — `npm install fuse.js`

import type { SearchIndexEntry } from "./types";

// Stub — implement after installing fuse.js
// import Fuse from "fuse.js";

const FUSE_OPTIONS = {
  keys: [
    { name: "title", weight: 2 },
    { name: "description", weight: 1 },
    { name: "tags", weight: 1 },
    { name: "shortcut", weight: 3 },
  ],
  threshold: 0.35,
  includeScore: true,
};

let index: SearchIndexEntry[] = [];

export function loadSearchIndex(entries: SearchIndexEntry[]) {
  index = entries;
}

export function search(query: string): SearchIndexEntry[] {
  if (!query || query.length < 2) return [];
  // TODO: Initialize Fuse instance and return results sorted by weight
  return index.filter((e) =>
    e.title.toLowerCase().includes(query.toLowerCase())
  );
}
