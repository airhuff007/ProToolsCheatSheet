// Workflow detail page
// TODO: Build WorkflowHeader, SessionSetupChecklist, StepList, ShortcutsTable,
//       MistakesAccordion, BestPracticesAccordion, RelatedWorkflowsRow
export default function WorkflowDetailPage({
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
