# aiandi

Astro blog project.

## Tech Stack

- Astro 5 with MDX support
- TypeScript
- Bun as package manager

## Project Structure

- `src/content/blog/` - Blog posts (Markdown/MDX)
- `src/pages/` - Astro pages
- `src/layouts/` - Page layouts
- `src/components/` - Reusable components
- `src/styles/` - Global styles
- `public/` - Static assets

## Commands

- `bun run dev --host 0.0.0.0` - Start dev server (accessible on VPS)
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run screenshot` - Take a full-page screenshot to `preview.png`

## Skills

- `screenshot-preview` - Capture a full-page homepage screenshot with Puppeteer using `bun run screenshot`. Uses `SCREENSHOT_PORT` (defaults to 4321) and falls back to the next available port if that is busy. Writes `preview.png` at the repo root and auto-starts/stops the dev server.
