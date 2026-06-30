import Link from "next/link";
import { getNavigation } from "../../lib/navigation";

export default function KnowledgePage() {
  const nav = getNavigation();
  const section = nav.find((s) => s.id === "knowledge");
  return (
    <>
      <h1>Knowledge Base</h1>
      <p style={{ color: "#6b7280", marginBottom: 24 }}>Deep dives on Pro Tools features and concepts.</p>
      <div className="section-grid">
        {section?.items?.map((item) => (
          <Link key={item.href} href={item.href ?? "#"} className="section-card">
            <div className="section-card-title">{item.label}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
