// Knowledge base article
// TODO: Build ArticleHeader, UseWhenCard, ProcedureList, ParameterTable
export default function KnowledgeArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-white capitalize">
        {params.slug.replace(/-/g, " ")}
      </h1>
    </main>
  );
}
