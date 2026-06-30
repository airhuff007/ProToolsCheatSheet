const questions = [
  { q: "How do I separate a clip at the playhead?", a: "Press Cmd+E (Mac) / Ctrl+E (Windows) with the Selector tool active." },
  { q: "How do I loop playback?", a: "Enable Loop Playback via Options > Loop Playback, then make a selection and press Play." },
  { q: "How do I consolidate a track?", a: "Select the region, then go to Clip > Consolidate Clip (Option+Shift+3 on Mac)." },
  { q: "How do I bounce to disk?", a: "File > Bounce to Disk (Cmd+Alt+B on Mac). Set format, bit depth, sample rate, and click Bounce." },
  { q: "How do I enable Elastic Audio?", a: "Right-click the track name and choose an Elastic Audio algorithm (e.g., Rhythmic for drums)." },
  { q: "How do I quantize MIDI?", a: "Select MIDI clips or notes, then go to Event > Event Operations > Quantize (Option+0 on Mac)." },
  { q: "How do I create a send to a reverb?", a: "Click an empty Send slot on your track, assign it to a bus. Create an Aux Input on that bus and insert a reverb." },
  { q: "How do I record multiple tracks at once?", a: "Arm all tracks you want to record by clicking their Record Enable button, then press Cmd+Spacebar (Mac)." },
  { q: "How do I create a submix?", a: "Assign output of multiple tracks to a shared bus, then create an Aux Input with that bus as its input." },
  { q: "How do I use Strip Silence?", a: "Select audio, press Cmd+U (Mac), adjust threshold and pad values, then click Strip." },
  { q: "How do I change the tempo of a session?", a: "Open the Tempo ruler (View > Rulers > Tempo), double-click a tempo marker, or use Event > Tempo Operations." },
  { q: "How do I print a stem?", a: "Create an audio track, assign its input to the stem bus, arm it, and record-roll from the top of the session." },
  { q: "How do I set a pre-roll?", a: "Enable pre-roll in the Transport window, or type a value in the Pre-Roll field in the toolbar." },
  { q: "How do I duplicate a track?", a: "Track > Duplicate, or right-click the track name. You can choose to include the playlist." },
  { q: "How do I restore a deleted clip?", a: "Cmd+Z (Mac) to undo. Or drag it from the Clip List (Window > Clip List) back to the timeline." },
];

export default function HowDoIPage() {
  return (
    <>
      <h1>How Do I?</h1>
      <p style={{ color: "#6b7280", marginBottom: 32 }}>Quick answers to common Pro Tools tasks.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {questions.map((item, i) => (
          <div key={i} style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: 8, padding: "16px 20px" }}>
            <div style={{ fontWeight: 600, color: "#f3f4f6", marginBottom: 6 }}>{item.q}</div>
            <div style={{ color: "#9ca3af", fontSize: 13 }}>{item.a}</div>
          </div>
        ))}
      </div>
    </>
  );
}
