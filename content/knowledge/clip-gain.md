---
title: Clip Gain & Automation
description: Control levels at the clip level before the signal hits the channel fader.
---

## What is Clip Gain?

Clip Gain adjusts the level of an individual audio clip before it reaches the channel fader and any insert plug-ins. This makes it ideal for gain-staging and evening out performances without riding automation.

## Why Use Clip Gain?

- Gain-stage regions so plug-ins on the channel receive a consistent input level.
- Even out a vocal performance phrase-by-phrase before automating.
- Boost quiet regions without raising the channel fader.
- Reduce the level of a hot clip that is clipping a plug-in input.

## Adjusting Clip Gain

### With the Clip Gain Line
In the Edit window, each clip displays a thin horizontal **Clip Gain line**. Drag it up or down to change the gain (range: −∞ to +36 dBFS).

### With the Clip Gain Field
1. Select a clip.
2. Open **Clip > Clip Gain** or press **Option+Shift+3** (Mac) / **Alt+Shift+3** (Windows).
3. Type in a specific dB value.

### With the Scrubber / Trim Tool
Select the Trim tool in Clip Gain mode to interactively drag the level.

## Clip-Based Automation (Clip Gain Automation)

Clip Gain can have its own sub-automation drawn within the clip:

1. Right-click a clip gain line and choose **Add Point** to draw breakpoints.
2. Use the Pencil tool in Clip Gain view to draw ramps and curves.

## Clip Gain vs. Track Automation

| | Clip Gain | Track Automation |
|---|---|---|
| Processed before fader | ✅ | ❌ (fader is post-insert) |
| Non-destructive | ✅ | ✅ |
| Per-clip | ✅ | ❌ (lane-based) |
| Works offline | ✅ | Depends on mode |

## Tips

- Use Clip Gain to bring every clip to a consistent level (~−18 to −12 dBFS) before touching the fader — this is proper gain staging.
- Hold **Option** (Mac) / **Alt** (Windows) and click the Clip Gain line to reset it to 0 dB.
- Clip Gain is preserved when you export or bounce — it is baked into the resulting audio.
