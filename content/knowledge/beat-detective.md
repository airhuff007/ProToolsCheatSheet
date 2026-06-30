---
title: Beat Detective
description: Automatically detect and conform rhythmic audio to a grid or reference groove.
---

## What is Beat Detective?

Beat Detective analyzes audio to detect transients and uses them to conform rhythmic performances to a tempo grid or groove template. It is essential for drum editing, conforming live performances, and extracting groove from audio.

## When to Use It

- Tightening a live drum performance to a click
- Extracting a groove from a drum loop to apply to other tracks
- Conforming dialogue or sound effects to hit points
- Separating multi-track drum recordings at transient points

## How to Use Beat Detective

### 1. Select Your Audio
Make a time-range selection across the region(s) you want to analyze. For drums, select all drum tracks simultaneously.

### 2. Open Beat Detective
Go to **Event > Beat Detective** (or press **⌘8** on Mac, **Ctrl+8** on Windows).

### 3. Set the Detection Mode
- **Bar|Beat Marker Generation** — places tempo markers
- **Groove Template Extraction** — captures the feel for use as a groove
- **Region Separation** — cuts regions at detected transients
- **Region Conform** — snaps separated regions to the grid
- **Edit Smoothing** — fills gaps left after conforming

### 4. Define the Bar Range
Set the Start Bar, End Bar, and Time Signature to match your selection.

### 5. Detect Transients
Click **Analyze**, then adjust **Sensitivity** until the markers land accurately on beats and sub-beats. Use **Resolution** to control whether you detect bars, beats, or sub-beats.

### 6. Separate
Switch to **Region Separation** mode, choose **Clip Separation** or **Clip Conform** and click **Separate**.

### 7. Conform and Smooth
Switch to **Region Conform**, set your Swing and Strength values, then click **Conform**. Finally, use **Edit Smoothing > Fill and Crossfade** to eliminate glitches between regions.

## Key Parameters

| Parameter | Function |
|-----------|----------|
| Sensitivity | Controls how many transients are detected |
| Resolution | Bar / Beat / Sub-Beat detection granularity |
| Swing % | Adds a swing feel during conform |
| Strength % | How aggressively regions snap to the grid (100% = fully quantized) |

## Tips

- Always work on a **duplicate playlist** before running Beat Detective — the edits are destructive.
- Use **Tab to Transient** to manually audit detected transients before separating.
- For multi-track drums, enable **Operate on All Related Takes** so all mics get cut at the same points.
