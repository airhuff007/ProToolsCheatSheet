import shortcutsData from "../../data/shortcuts.json";

const CATEGORIES: Record<string, string> = {
  editing: "Editing",
  transport: "Transport & Playback",
  clips: "Clips & Regions",
  mixing: "Mixing & Routing",
  midi: "MIDI",
  windows: "Windows",
  automation: "Automation",
  universal: "Universal",
};

export default function ShortcutsPage() {
  const byCategory = shortcutsData.reduce<Record<string, typeof shortcutsData>>((acc, s) => {
    const cat = s.category ?? "universal";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(s);
    return acc;
  }, {});

  return (
    <>
      <h1>Shortcut Library</h1>
      <p style={{ marginBottom: 32 }}>Essential Pro Tools keyboard shortcuts for Mac and Windows.</p>
      {Object.entries(byCategory).map(([cat, shortcuts]) => (
        <section key={cat} style={{ marginBottom: 40 }}>
          <h2>{CATEGORIES[cat] ?? cat}</h2>
          <table className="shortcut-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Mac</th>
                <th>Windows</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {shortcuts.map((s) => (
                <tr key={s.id}>
                  <td>{s.action}</td>
                  <td><kbd>{s.mac}</kbd></td>
                  <td><kbd>{s.windows}</kbd></td>
                  <td style={{ color: "#9ca3af" }}>{s.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </>
  );
}
