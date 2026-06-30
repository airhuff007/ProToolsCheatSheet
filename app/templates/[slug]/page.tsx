// Session template detail
// TODO: Build TechSpecsTable, TrackLayoutTable, BusRoutingTable, FolderStructureTree
export default function TemplateDetailPage({
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
