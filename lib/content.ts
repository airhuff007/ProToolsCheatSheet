// Markdown content parsing utilities
// Uses gray-matter for frontmatter extraction
// TODO: Install gray-matter — `npm install gray-matter`

import fs from "fs";
import path from "path";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export function getContentDir(section: string): string {
  return path.join(CONTENT_ROOT, section);
}

export function getMarkdownSlugs(section: string): string[] {
  const dir = getContentDir(section);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

// Stub — implement after installing gray-matter
export function parseMarkdownFile(section: string, slug: string) {
  const filePath = path.join(getContentDir(section), `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  // const { data, content } = matter(raw);
  // return { frontmatter: data, content };
  return { raw };
}
