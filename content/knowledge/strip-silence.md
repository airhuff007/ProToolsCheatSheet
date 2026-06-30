---
title: Strip Silence
description: Automatically remove low-level noise from audio regions based on a threshold.
---

## What is Strip Silence?

Strip Silence scans a selection and removes (or separates) audio that falls below a defined threshold. It is most commonly used to clean up vocal, dialogue, and drum tracks by removing background noise between phrases.

## Opening Strip Silence

**Edit > Strip Silence** or **⌘U** (Mac) / **Ctrl+U** (Windows).

## Key Controls

| Parameter | Function |
|-----------|----------|
| Strip Threshold | Audio below this level (in dBFS) gets stripped |
| Min Strip Duration | Minimum length of silence to strip; prevents chopping short breaths |
| Clip Start Pad | Adds time before each kept region so attacks aren't cut |
| Clip End Pad | Adds time after each kept region to preserve natural tails and reverb |

## Typical Workflow

1. Select the region(s) you want to clean.
2. Open Strip Silence (**⌘U**).
3. Adjust **Strip Threshold** until only the true noise floor is highlighted in red.
4. Set **Clip Start Pad** (~5–10ms) and **Clip End Pad** (~50–100ms) to protect attacks and tails.
5. Set **Min Strip Duration** to avoid creating tiny gaps inside words or phrases.
6. Click **Strip** to separate, or **Extract** to remove and collapse.

## Strip vs. Extract

- **Strip** — Separates the audio at silence points, leaving gaps. The audio stays on the timeline.
- **Extract** — Removes the silent sections entirely and closes the gaps.

## Tips

- Always work on a **duplicate playlist** before stripping — the operation is difficult to undo cleanly across many clips.
- For dialogue, use generous pad values (10ms start, 100–200ms end) to preserve breath and room tone at the edges.
- After stripping, use **Clip Gain** or automation to further shape levels rather than relying entirely on strip silence.
- Strip Silence does **not** affect the underlying audio file — it just creates or removes clip boundaries.
