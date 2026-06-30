---
title: Backup Procedures
description: Protect your work with a reliable backup strategy for Pro Tools sessions.
---

## The 3-2-1 Rule

- **3** copies of your data
- **2** different storage media types
- **1** copy offsite (or in the cloud)

## Pro Tools Auto Backup

Enable in **Setup > Preferences > Operation**:

- **Enable Session File Auto Backup**: ON
- **Keep most recent**: 10 backups
- **Backup every**: 5 minutes

Auto backups are saved in `[Session Folder]/Session File Backups/`. They are `.ptx` files only — **not** audio files.

## Save As — Version Snapshots

Use **File > Save As** before any major edit:

```
ProjectName_MIX_v1.ptx
ProjectName_MIX_v2.ptx
ProjectName_MIX_v3_APPROVED.ptx
```

This gives you a clear version history you can roll back to.

## Save Copy In — Full Session Backup

**File > Save Copy In** creates a new folder with:
- The session file
- All audio files (if you check "Copy All Audio Files")
- Video files (optional)
- Plug-in settings

Use this before handing off a session or archiving a completed project.

## Recommended Backup Workflow

### During a Session
1. **Cmd+S** constantly while working
2. Auto Backup running every 5 minutes
3. Save As at major milestones (before edits, before mix passes)

### After Every Session
1. Copy the entire session folder to a second drive
2. Upload the session file (`.ptx`) to cloud storage (Dropbox, Google Drive, iCloud)

### After Completing a Project
1. **Save Copy In** with all audio — creates a portable archive
2. Copy archive to a backup drive
3. Upload to cold storage (Backblaze, AWS S3 Glacier, or similar)
4. Keep the archive for **at least 3 years** (longer for film/TV)

## What to Back Up

| Item | Location | Include? |
|------|----------|---------|
| Session file (.ptx) | Session folder | ✅ Always |
| Audio files | Audio Files subfolder | ✅ Always |
| Fades folder | Session folder | ✅ |
| Video file | Usually external | ✅ |
| Plug-in presets | Varies by plug-in | If custom |
| MIDI files | Session folder | ✅ |

## Tips

- Never work directly from a thumb drive or network drive — always copy to a local fast drive first
- Test your backups — try opening a backup copy to confirm it works
- Use a dedicated recording drive separate from your system/OS drive
