---
title: Elastic Audio
description: Real-time, non-destructive time-stretching and pitch manipulation for audio clips.
---

## What is Elastic Audio?

Elastic Audio is Pro Tools' real-time time-stretching engine. It lets you quantize audio to a tempo grid, change a clip's length without affecting pitch, and warp audio at specific points — all non-destructively.

## Elastic Audio Algorithms

Choose the right algorithm for your material:

| Algorithm | Best For |
|-----------|----------|
| Polyphonic | Mixed or complex material (full mix, pads) |
| Rhythmic | Drums, percussion, loops with clear transients |
| Monophonic | Single-note instruments (bass, vocals, solo lines) |
| Varispeed | Simulates tape speed change — affects pitch and tempo together |
| X-Form | Highest quality; rendered offline only |

## Enabling Elastic Audio

Right-click the track name and choose the algorithm from **Elastic Audio**, or click the Elastic Audio plug-in selector in the Track Controls.

## Quantizing Audio with Elastic Audio

1. Enable Elastic Audio on the track.
2. Switch the track to **Warp** or **Analysis** view in the Edit window.
3. Select the clips or region you want to quantize.
4. Go to **Event > Elastic Properties** or use **Event > Event Operations > Quantize**.
5. Set your grid value and strength, then click **Apply**.

## Warp Markers

Warp markers let you manually pin a specific transient to a specific point in time.

- In **Warp view**, click on a transient to create a warp marker.
- Drag it left or right to shift that point in time without moving the audio outside the warp markers.
- Option-click (Mac) / Alt-click (Windows) a warp marker to delete it.

## Elastic Pitch

With Elastic Audio enabled, you can also adjust pitch per-clip:

Go to **Clip > Elastic Properties** and set the **Pitch Shift** value in semitones and cents.

## Tips

- Elastic Audio is **non-destructive** — the original audio file is never modified.
- Too much stretching introduces artifacts; keep time shifts under ±25% for best quality.
- Render to disk (**Clip > Render**) to commit elastic audio and reduce CPU load.
- Use **X-Form** for critical vocal pitch correction or extreme time-stretching — it sounds the best but requires a render.
