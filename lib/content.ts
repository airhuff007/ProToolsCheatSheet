import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export function getMarkdownSlugs(section: string): string[] {
  const dir = path.join(CONTENT_ROOT, section);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}

export function getMarkdownFile(section: string, slug: string) {
  const filePath = path.join(CONTENT_ROOT, section, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as Record<string, string>, content };
}
