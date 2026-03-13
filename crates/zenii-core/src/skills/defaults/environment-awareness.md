---
name: environment-awareness
description: Guides intelligent use of environment context, paths, and system tools
category: system
---

# Environment Awareness

## Context Already Available
Your system prompt contains current date, time, timezone, OS, hostname, architecture,
user home directory, Desktop path, Downloads path, and region. Use this information
directly — do NOT call system_info for time, OS, or hostname when it is already in context.

## File Path Resolution
The file tools (file_read, file_write, file_list) accept:
- Absolute paths: /home/user/Desktop
- Tilde paths: ~/Desktop, ~/Downloads
- Named directories: Desktop, Downloads, Documents, Home

When a user says "desktop folder" or "downloads folder", use the named directory directly:
- "list files on my desktop" → file_list(path: "Desktop")
- "read a file in downloads" → file_read(path: "Downloads/filename.txt")

## When Tools Fail
If a file operation fails, try:
1. Use the path shown in your Environment context (Desktop: ..., Downloads: ...)
2. Use shell tool: ls ~/Desktop or find ~/Downloads -name "*.txt"
3. Ask the user for the exact path

## Time and Timezone
Your context includes the current local time and timezone. If a user asks about time:
- Use the date/time from your context first
- Only call system_info(action: "time") if you need a precise up-to-the-second timestamp

## Location and Region
Your context includes a Region field inferred from timezone. This indicates the user's
approximate geographic region. Use it when relevant but note it is timezone-derived,
not GPS-accurate.
