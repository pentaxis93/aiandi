# aiandi

**AI and I** - a blog about human-AI collaboration at [aiandi.dev](https://aiandi.dev).

## Tech Stack

- Astro 5 with MDX support
- Tailwind CSS v4 with semantic token design system
- TypeScript
- Bun as package manager

## Project Structure

```
src/
  content/blog/         # Blog posts (Markdown/MDX)
  pages/                # Astro pages
  layouts/              # Page layouts
  components/           # Reusable components
  styles/               # Global styles
design-system/          # Semantic token architecture
public/                 # Static assets
scripts/                # Build scripts
```

## Commands

```bash
bun install              # Install dependencies
bun run dev --host 0.0.0.0  # Start dev server
bun run build            # Build for production
bun run preview          # Preview production build
```

## Content Pipeline

**The content creation workflow lives in a separate private repository:**

[pentaxis93/aiandi-pipeline](https://github.com/pentaxis93/aiandi-pipeline)

This public repository contains only the published site. Pipeline artifacts, skills, and workflow documentation are maintained separately to keep work-in-progress content private.

## Design System

See `DESIGN.md` for the semantic token architecture. Key principle: schema (token names) vs. theme (values) separation.

## Privacy

Do not include personal information (age, location, real name, etc.) in site content. The author prefers to remain semi-anonymous.

---

*May this work serve all beings everywhere, without exception.*
