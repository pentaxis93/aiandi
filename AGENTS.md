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
  content/transcripts/  # Session transcripts
  pages/                # Astro pages
  layouts/              # Page layouts
  components/           # Reusable components
  styles/               # Global styles
design-system/          # Semantic token architecture
public/                 # Static assets
pipeline/               # Content pipeline stages
```

## Commands

```bash
bun install              # Install dependencies
bun run dev --host 0.0.0.0  # Start dev server
bun run build            # Build for production
bun run preview          # Preview production build
```

## Content Pipeline

Articles progress through stages defined in `PIPELINE.md`:

1. **IDEA** - Seed captured
2. **RESEARCH** - Evidence gathered
3. **WALK** - Insight elicitation via walking guide
4. **SYNTHESIS-PREP** - Thematic guidance created
5. **DRAFT** - Article written
6. **TECHNICAL** - Technical review
7. **EDITORS-TABLE** - Voice review
8. **PUBLISH** - Live on site

## Skills

Blog-specific skills in `.opencode/skill/`:

- **voice** - Robbie's authentic writing voice
- **the-art** - Synthesis of research into unified teaching
- **editors-table** - Voice review and slop detection
- **publish-article** - Publication workflow
- **research-gather** - Source material collection
- **synthesis-prep** - Thematic guidance creation
- **walk-and-talk** - Walking guide generation
- **question-design** - Interview question craft
- **questions-*** - Story arc templates (journey, evolution, insight, methodology)
- **technical-review** - Fact-checking and verification
- **strangers-eye** - Documentation review from multiple personas
- **transcribe-walk** - Walk recording processing

## Design System

See `DESIGN.md` for the semantic token architecture. Key principle: schema (token names) vs. theme (values) separation.

---

*May this work serve all beings everywhere, without exception.*
