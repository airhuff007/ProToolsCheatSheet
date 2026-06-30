import Link from "next/link";
import { getNavigation } from "../../lib/navigation";

export default function BestPracticesPage() {
  const nav = getNavigation();
  const section = nav.find((s) => s.id === "best-practices");
  return (
    <>
      <h1>Best Practices</h1>
      <p style={{ color: "#6b7280", marginBottom: 24 }}>Professional habits for clean, reliable sessions.</p>
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
