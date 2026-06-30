---
title: Delivery Standards
description: Technical requirements for delivering audio in professional contexts.
---

## Music Delivery

### Streaming Platforms

| Platform | Accepted Format | Recommended Spec |
|----------|----------------|-----------------|
| Spotify | WAV, FLAC, MP3 | 44.1kHz / 24-bit WAV |
| Apple Music | WAV, AIFF, FLAC | 44.1kHz / 24-bit WAV |
| YouTube | WAV, MP3 | 44.1kHz / 16 or 24-bit |
| Tidal (HiRes) | FLAC | 44.1–192kHz / 24-bit |

**Loudness target for music**: −14 LUFS integrated, −1 dBTP true peak limit.

### Label / Distribution Delivery
- Deliver **stereo interleaved WAV** at 44.1kHz / 24-bit
- Include **instrumental** and **a cappella** versions if required
- Include **stems** if requested (drums, bass, keys, guitars, vocals)
- Metadata: embed artist, title, ISRC, BPM, key

## Post Production / Film Delivery

See [Film Delivery Standards](/knowledge/film-delivery-standards) for detailed specs.

### Quick Reference

| Deliverable | Format | Spec |
|-------------|--------|------|
| Broadcast mix | BWF WAV | 48kHz / 24-bit, −23 LUFS (EBU R128) |
| Theatrical mix | BWF WAV | 48kHz / 24-bit, −20 LKFS (SMPTE) |
| Netflix | WAV | 48kHz / 24-bit, −27 LUFS dialog |
| M&E mix | BWF WAV | Same spec as full mix |

## File Naming and Labeling

Always include in the filename:
- Project name
- Reel number (if applicable)
- Stem name
- Sample rate and bit depth
- Version number

Example: `ProjectName_R1_FullMix_48k24b_v2.wav`

## Delivery Checklist

- [ ] Correct sample rate and bit depth
- [ ] Loudness measured and within spec
- [ ] True Peak at or below limit
- [ ] All stems sum to the full mix when combined
- [ ] File naming matches facility/platform requirements
- [ ] Session backup included with delivery (if required)
- [ ] Timecode clearly labeled (for post production)
- [ ] Test file sent and confirmed before deadline
