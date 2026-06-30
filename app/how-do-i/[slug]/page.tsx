// How Do I? answer page
// TODO: Render answer steps, related workflow/article links, shortcuts
export default function HowDoIAnswerPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-white capitalize">
        How do I {params.slug.replace(/-/g, " ")}?
      </h1>
    </main>
  );
}
