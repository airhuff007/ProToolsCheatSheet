---
title: Stem Organization
description: How to structure your Pro Tools session for clean stem routing and delivery.
---

## What is a Stem?

A stem is a discrete, submixed audio file that contains one category of sound from your mix — for example, all dialogue, all music, or all sound effects. Stems allow post-production houses, broadcasters, and streaming platforms to rebalance, dub, or re-version content without rebuilding the full mix.

## Standard Stem Categories

### Post Production
| Stem | Contents |
|------|----------|
| DX (Dialogue) | All production dialogue, ADR, walla |
| MX (Music) | Score, source music, stingers |
| SFX (Effects) | Hard effects, designed sound |
| BG (Background) | Ambience, room tone, atmosphere |
| Foley | Footsteps, cloth, props |
| M&E | Music + Effects combined (no DX) |

### Music Production
| Stem | Contents |
|------|----------|
| Drums | Kick, snare, cymbals, room mics |
| Bass | Bass guitar / synth bass |
| Keys | Piano, synth pads, organs |
| Guitars | Electric, acoustic, rhythm, lead |
| Vocals | Lead, doubles, harmonies, backgrounds |
| Brass/Strings | Orchestral elements |
| FX | Risers, impacts, transitions |

## Pro Tools Session Structure

```
[Tracks]
├── Dialogue Tracks → Dialogue Premix Bus → DX Stem Track
├── ADR Tracks      ↗
│
├── Music Tracks    → Music Premix Bus → MX Stem Track
│
├── SFX Tracks      → SFX Premix Bus → SFX Stem Track
├── BG Tracks       ↗
├── Foley Tracks    ↗
│
└── [DX + MX + SFX] → Full Mix Bus → Full Mix Output
```

## Printing Stems

1. Assign each stem's Aux bus output to a **Stereo Audio Track**.
2. Set that Audio Track's input to the stem bus.
3. Arm the track to record.
4. Record-roll from the start of the reel — all stems print simultaneously in real time.

Alternatively, use **File > Bounce to Disk** or **Track > Bounce** (Pro Tools Ultimate) to print offline.

## Naming Convention

Use a consistent naming convention for deliverables:
```
ProjectName_Reel1_DX_48k24b.wav
ProjectName_Reel1_MX_48k24b.wav
ProjectName_Reel1_SFX_48k24b.wav
ProjectName_Reel1_FullMix_48k24b.wav
```

## Tips

- Never route stems through the **Master Fader** — the master fader processes the summed full mix, not individual stems. Keep stems on their own buses.
- Print stems **before** applying limiting on the full mix bus — the stems should sum to the full mix when combined.
- Always **spot-check** your stems: play the DX stem alone and confirm you hear only dialogue with no music or effects bleed.
