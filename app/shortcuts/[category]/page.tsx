// Shortcut category detail
// TODO: Build ShortcutTable filtered by category
export default function ShortcutCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-white capitalize">
        {params.category.replace(/-/g, " ")} Shortcuts
      </h1>
    </main>
  );
}
