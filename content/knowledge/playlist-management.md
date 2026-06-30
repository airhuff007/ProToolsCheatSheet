---
title: Playlist Management
description: Use playlists to manage multiple takes and alternate edits non-destructively.
---

## What are Playlists?

A playlist is a lane on a track that holds a sequence of audio clips. Every track has one active playlist and can hold an unlimited number of alternate playlists. Playlists let you keep multiple takes or edit versions without duplicating tracks or audio files.

## Creating and Switching Playlists

Click the **Playlist selector** (the name field at the top of the track) to open the playlist menu:

- **New** — creates a blank new playlist.
- **Duplicate** — copies the current playlist to a new one (useful before destructive edits).
- **[Playlist name]** — switches to that playlist.

## Comp Editing with Playlists

Pro Tools has a dedicated **Playlist view** for comping takes:

1. Click the **Show/Hide Lanes** button (triangle icon) on the track to expand all playlists into lanes.
2. Use the **Selector** tool to highlight the best section of each take.
3. Click the **Up Arrow** (Promote) button to move that section to the main playlist.
4. Repeat across all takes to build a composite.

## Naming Conventions

Keep playlist names descriptive:
- `Lead_Vox_01`, `Lead_Vox_02`, `Lead_Vox_COMP`
- `Drums_RAW`, `Drums_EDITED`, `Drums_FINAL`

## Tips

- Always **Duplicate** the current playlist before destructive edits (Beat Detective, Strip Silence, etc.).
- Use **Match Tracks** when working with multi-mono or stereo tracks to keep playlists in sync across related tracks.
- Unused playlists are saved with the session and increase session file size minimally — but the audio files they reference still count toward disk usage.
- Press **Control+Up/Down Arrow** (Mac) to cycle between playlists on a track quickly.
