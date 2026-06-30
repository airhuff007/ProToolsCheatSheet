import Link from "next/link";

const sections = [
  { href: "/shortcuts", icon: "⌨️", title: "Shortcuts", desc: "Full keyboard reference for Mac & Windows" },
  { href: "/workflows", icon: "🎛️", title: "Workflows", desc: "Step-by-step music & post production guides" },
  { href: "/knowledge", icon: "📖", title: "Knowledge Base", desc: "Deep dives on Pro Tools features" },
  { href: "/templates", icon: "📁", title: "Session Templates", desc: "Ready-to-use session setups" },
  { href: "/how-do-i", icon: "❓", title: "How Do I?", desc: "Quick answers to common tasks" },
  { href: "/best-practices", icon: "✅", title: "Best Practices", desc: "Session hygiene & delivery standards" },
];

export default function HomePage() {
  return (
    <div className="home">
      <h1>Pro Tools Second Brain</h1>
      <p>Your task-oriented Pro Tools workflow companion for music and post production.</p>
      <div className="home-grid">
        {sections.map((s) => (
          <Link key={s.href} href={s.href} className="home-card">
            <div className="home-card-icon">{s.icon}</div>
            <div className="home-card-title">{s.title}</div>
            <div className="home-card-desc">{s.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
