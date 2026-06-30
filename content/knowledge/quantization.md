---
title: Quantization
description: Snap MIDI notes or audio transients to a rhythmic grid.
---

## MIDI Quantization

MIDI quantization moves note start times (and optionally durations) to the nearest grid position.

### How to Quantize MIDI

1. Select the MIDI clips or notes you want to quantize.
2. Go to **Event > Event Operations > Quantize** (or press **Option+0** on Mac).
3. Set your parameters and click **Apply**.

### Quantize Parameters

| Parameter | Function |
|-----------|----------|
| Quantize Grid | The target rhythmic value (1/16, 1/8 triplet, etc.) |
| Strength | 100% = fully on the grid; lower = partial pull toward the grid |
| Swing | Delays every other subdivision to create a swing feel |
| Include Within | Only quantizes notes within X% of the grid (ignores gross timing errors) |
| Offset | Shifts all selected notes by a fixed amount before quantizing |
| Randomize | Adds a small random offset after quantizing to restore human feel |

### Groove Quantize

Use a **Groove Template** (extracted from audio via Beat Detective or imported from MIDI) to quantize notes to a human-played pattern rather than a mathematical grid.

## Audio Quantization (Elastic Audio)

For audio, quantization requires Elastic Audio:

1. Enable **Elastic Audio** on the track (Rhythmic algorithm for drums).
2. Select the clips.
3. **Event > Event Operations > Quantize** — same dialog, applied to audio transients.

## Tips

- Start with **Strength at 75–85%** to tighten timing while preserving feel.
- Use **Swing 50–65%** for hip-hop and R&B grooves.
- Always quantize to a **copy/duplicate playlist** first so you can A/B the result.
- For live drums, quantize the kick and snare first, then evaluate whether hi-hats and cymbals need it.
