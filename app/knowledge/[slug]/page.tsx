import { getMarkdownFile, getMarkdownSlugs } from "../../../lib/content";
import { marked } from "marked";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getMarkdownSlugs("knowledge").map((slug) => ({ slug }));
}

export default async function KnowledgeArticlePage({ params }: { params: { slug: string } }) {
  const doc = getMarkdownFile("knowledge", params.slug);
  if (!doc) notFound();
  const html = await marked(doc.content);
  return (
    <article className="article">
      <h1>{doc.frontmatter.title ?? params.slug.replace(/-/g, " ")}</h1>
      {doc.frontmatter.description && <p className="article-desc">{doc.frontmatter.description}</p>}
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
