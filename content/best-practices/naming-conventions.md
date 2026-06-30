---
title: Naming Conventions
description: Consistent naming keeps sessions readable and deliverables organized.
---

## Track Naming

Use descriptive, consistent names from the start. Once named, Pro Tools uses the track name for recorded audio files.

### Music Production

| Track | Name Example |
|-------|-------------|
| Kick drum | `Kick_IN`, `Kick_OUT`, `Kick_Sub` |
| Snare | `Snare_Top`, `Snare_Bottom` |
| Lead vocal | `LeadVox`, `LeadVox_Dbl` |
| Background vocals | `BGVox_L`, `BGVox_R` |
| Electric guitar | `GTR_Elec_Rhythm`, `GTR_Elec_Lead` |
| Bass | `Bass_DI`, `Bass_Amp` |

### Post Production

| Track | Name Example |
|-------|-------------|
| Production dialogue | `DX_Sync`, `DX_ISO` |
| ADR | `ADR_[CharacterName]` |
| Room tone | `RT_[Location]` |
| Hard effects | `SFX_[Description]` |
| Foley footsteps | `Foley_Steps` |
| Score | `MX_Score_[Instrument]` |

## Playlist Naming

Append take number or edit stage:
- `LeadVox_01`, `LeadVox_02`, `LeadVox_COMP`, `LeadVox_FINAL`
- `Drums_RAW`, `Drums_BEATEDIT`, `Drums_FINAL`

## Session File Naming

```
[Artist/Project]_[Song/Reel]_[Version]_[Date].ptx
```

Examples:
- `JSmith_TrackName_MIX_v3_2024-03-15.ptx`
- `FilmTitle_R1_PREDUB_v2_2024-03-15.ptx`

## Deliverable File Naming

```
[ProjectName]_[Reel]_[Stem]_[SampleRate]_[BitDepth].wav
```

Examples:
- `FilmTitle_R1_FullMix_48k24b.wav`
- `FilmTitle_R1_MandE_48k24b.wav`
- `FilmTitle_R1_DX_48k24b.wav`

## Tips

- Never use spaces in file or track names — use underscores or CamelCase
- Avoid special characters: `/`, `\`, `:`, `*`, `?`, `"`, `<`, `>`
- Keep names under 32 characters for broad compatibility
- Be consistent — pick a convention and use it throughout the entire project
