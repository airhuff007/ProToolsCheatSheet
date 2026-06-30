---
title: Session Hygiene
description: Keep your Pro Tools sessions clean, organized, and easy to hand off.
---

## Why Session Hygiene Matters

A well-organized session saves time, prevents errors, and makes handoffs seamless. Whether you're handing off to a mixer, returning to a project after months, or recovering from a crash, clean sessions protect your work.

## Track Organization

- **Color-code track groups** — all drums one color, vocals another, etc.
- **Name every track clearly** — "Vox Lead Dry", not "Audio 17"
- **Group related tracks** — use Mix Groups and Edit Groups for drums, backgrounds, etc.
- **Delete unused tracks** — remove empty or inactive tracks before delivery

## File Management

- Store all session files in a single folder: `Sessions/[ProjectName]/`
- Use **File > Save Copy In** to create a self-contained copy with all audio
- Name audio files with the track name at the time of recording
- Never rename audio files outside of Pro Tools

## Before Every Session

- [ ] Verify playback engine settings (buffer size, hardware)
- [ ] Confirm sample rate matches your project (48kHz for post, 44.1 for music)
- [ ] Check available disk space — Pro Tools needs at least 10% free
- [ ] Set your session to record to a dedicated audio drive, not the system drive

## Regular Save Habits

- **Cmd+S** constantly — Pro Tools does not auto-save during recording
- Use **File > Save As** to create version snapshots before major edits
- Enable **Auto Backup** in Preferences > Operation (set to every 5 minutes, keep 10 copies)

## Before Delivery

- [ ] Remove all unused clips (Clip > Select Unused > Delete)
- [ ] Consolidate edited regions to single files
- [ ] Flatten any edited playlists you want to preserve
- [ ] Confirm all track names match your stem labeling convention
- [ ] Run a **Save Copy In** with "Copy All Audio Files" checked
