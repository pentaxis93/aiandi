---
name: screenshot-preview
description: Capture a full-page homepage screenshot using bun run screenshot.
---

# Screenshot Preview

## Overview

Use this skill to capture a fresh full-page screenshot of the local homepage.

## When to Invoke

- Before sharing design changes
- After layout or styling updates
- When you need a visual snapshot for review

## How It Works

- Starts the dev server on SCREENSHOT_PORT (or PORT or 4321), and falls back to the next available port if needed.
- Opens the homepage (`/`) in headless Chromium via Puppeteer.
- Saves a full-page screenshot to preview.png at the repo root.
- Stops the temporary dev server after capture.

## Navigation

- Default target is the homepage (`/`).
- If you need a different page, temporarily update the script to navigate to the specific route before running.

## Command

`bun run screenshot`

## Output

- `preview.png` at the repo root
