import Link from "next/link";
import { getNavigation, NavItem } from "../../lib/navigation";

export default function WorkflowsPage() {
  const nav = getNavigation();
  const section = nav.find((s) => s.id === "workflows");
  return (
    <>
      <h1>Workflows</h1>
      <p style={{ color: "#6b7280", marginBottom: 32 }}>Step-by-step guides for common Pro Tools tasks.</p>
      {section?.items?.map((group) =>
        group.group ? (
          <div key={group.label} style={{ marginBottom: 32 }}>
            <h2 style={{ marginBottom: 12 }}>{group.label}</h2>
            <div className="section-grid">
              {group.items?.map((item: NavItem) => (
                <Link key={item.href} href={item.href ?? "#"} className="section-card">
                  <div className="section-card-title">{item.label}</div>
                </Link>
              ))}
            </div>
          </div>
        ) : null
      )}
    </>
  );
}
