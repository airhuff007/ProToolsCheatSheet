---
title: Film Delivery Standards
description: Technical specifications for delivering audio in film and broadcast post production.
---

## Common Loudness Standards

| Platform | Standard | Target | True Peak |
|----------|----------|--------|-----------|
| Theatrical film | SMPTE ST 2095 | −20 LKFS | −2 dBTP |
| US Broadcast (TV) | ATSC A/85 | −24 LKFS | −2 dBTP |
| European Broadcast | EBU R 128 | −23 LUFS | −1 dBTP |
| Netflix | Netflix spec | −27 LUFS (dialog) | −2 dBTP |
| Streaming (general) | AES Streaming | −14 LUFS | −1 dBTP |
| YouTube / Spotify | Platform normalized | −14 LUFS integrated | −1 dBTP |

**LKFS** and **LUFS** are equivalent units.

## Sample Rate & Bit Depth

| Use Case | Sample Rate | Bit Depth |
|----------|-------------|-----------|
| Theatrical | 48 kHz | 24-bit |
| Broadcast | 48 kHz | 24-bit |
| Music (streaming) | 44.1 kHz | 16 or 24-bit |
| Hi-res music | 88.2 / 96 kHz | 24 or 32-bit float |
| Production recording | 48 kHz | 24-bit |

## Required Deliverables (Typical Film)

1. **Full Mix** — Final stereo or 5.1/7.1 mix
2. **M&E (Music & Effects)** — No dialogue; for international dubbing
3. **Dialogue stem** — Isolated dialogue (premix)
4. **Music stem** — Score only
5. **Effects stem** — SFX and Foley only
6. **DME (Dialogue, Music, Effects)** — Three-stem split of the full mix
7. **Textless** — Full mix without any title/credit music that contains text logos

## Surround Formats

| Format | Channels | Use |
|--------|----------|-----|
| Stereo (LtRt or LoRo) | 2 | Broadcast, streaming |
| 5.1 | 6 | Theatrical, home video |
| 7.1 | 8 | Premium theatrical |
| Dolby Atmos | Up to 128 objects | Immersive theatrical/streaming |
| Auro-3D | Up to 13.1 | Specialty theatrical |

## Pro Tools Delivery Checklist

- [ ] Verify loudness with a metering plug-in (Nugen, Waves WLM, or iZotope Insight)
- [ ] Check True Peak levels — no overs
- [ ] Confirm sample rate and bit depth match the delivery spec
- [ ] Export stems with correct file naming convention
- [ ] Deliver a test file to the facility before the deadline and confirm receipt
- [ ] Include session backup and AAF/OMF if required
