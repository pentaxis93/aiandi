# Design Vision: AI and I

The visual language of a blog about a 56-year-old learning to code through AI collaboration, exploring the recursive relationship between human and machine minds.

---

## The Essence

This is a site about **emergence through collaboration**. Not polish. Not performance. The work of figuring things out in public, finding ancient patterns in new technology, and the quiet joy when structure clicks into place.

The design should feel like:
- A workbench, not a gallery
- A lab notebook, not a highlight reel
- Contemplative depth with practical grounding
- Someone who's been thinking for decades, finally building

---

## Aesthetic Direction: Digital Lab Notebook

**Not brutalist** (too aggressive). **Not minimal startup** (too cold). **Not cozy craft blog** (too soft).

**Digital lab notebook**: Research documentation meets modern interface design. Structured metadata. Catalog thinking. The precision of scientific journals with the warmth of a working space.

Think: A museum specimen catalog redesigned for screens. Terminal aesthetics with editorial polish. Documentation that treats ideas as artifacts worth studying.

**The metadata is the magic.** Not decoration—actual structural information that frames the content as research, not content marketing.

---

## Core Qualities

### 1. Confident Restraint

The voice is confident in uncertainty. The design should match: clear convictions executed with restraint. Not tentative. Not loud. Assured.

- **Yes**: Bold typographic hierarchy, generous margins, decisive color choices
- **No**: Decorative flourishes, gradient washes, animated everything

### 2. Warmth Without Softness

The content is vulnerable (illness, shame, lost years). The design provides warmth without coddling. Amber tones, not pastels. Firm structure, not rounded everything.

- **Yes**: Warm accent colors, comfortable reading rhythm, inviting cards
- **No**: Soft shadows everywhere, bubble shapes, childlike friendliness

### 3. Depth Available, Not Announced

The voice has layers it doesn't enumerate. The design should too. Subtle details that reward attention. Structure that reveals itself on inspection.

**The metadata layer is key:** Status fields, catalog numbers, classification systems. Not blog post metadata (views, likes, shares) but research metadata (discipline, method, status). This transforms content from "posts" to "specimens."

- **Yes**: Considered spacing ratios, meaningful color relationships, typographic refinement, structured metadata
- **No**: Visible complexity, ornamentation that demands attention, marketing metrics

### 4. Foundation-First Solidity

The philosophy is foundation-first. The design should feel built on solid ground. Not fragile. Not trendy. Something that will hold weight.

- **Yes**: Clear grid, reliable patterns, consistent tokens
- **No**: Gimmicks, novelty interactions, design that might "date"

---

## The Metadata System

**The breakthrough insight:** Treat blog posts as **cataloged research specimens**, not content.

### Metadata Architecture

Every entry should have:

| Field | Purpose | Display |
|-------|---------|---------|
| **Catalog Number** | Unique identifier (001, 002, etc.) | Monospace, prominent |
| **Date** | Temporal marker | ISO format, uppercase |
| **Status** | Research state | Published, Draft, Archive |
| **Type** | Content classification | Essay, Note, Experiment |
| **Discipline** | Knowledge domain | Comp. Philosophy, Design, etc. |
| **Method** | Approach | Collaboration, Solo, Walk-and-talk |

### Metadata Placement

**Hero section sidebar:**
- Status, Discipline, Method
- Researcher bio note
- Framed in 2px border box
- Background: `surface-alt` for distinction

**Featured specimen card:**
- Header: Catalog number + date
- Footer: Status + type + read indicator
- All in monospace, clinical typography

**Archive list:**
- Leading catalog number column
- Trailing date column
- Center: entry title
- Hover: action arrow appears

### The Philosophy

**Metadata isn't decoration.** It's the **framing device that transforms the reading experience**:
- "SPECIMEN_001" ≠ "Latest post"
- "STATUS: Active Research" ≠ "Published 2 days ago"
- "METHOD: Collaboration" ≠ generic blog metadata

This reframes the entire site from personal blog → research archive.

---

## Typography

### The Hierarchy

Typography is the soul. The voice uses language with precision and playfulness. The type should carry that.

| Role | Character |
|------|-----------|
| **Display/Hero** | Commanding but not shouting. Tight tracking, significant size jumps. |
| **Body** | Comfortable for long reading. Generous line-height. The main event. |
| **Meta/Dates** | Monospace whisper. Uppercase. Recedes but anchors. |
| **Code** | Distinct but integrated. Not jarring. |

### The Rhythm

- Headlines tight, body relaxed
- Size jumps dramatic (not timid steps)
- Prose optimized for reading: 65-70 characters, 1.7+ line-height

---

## Color Philosophy

### The Palette Structure

The 60-30-10 ratio creates hierarchy:

| Role | Character |
|------|-----------|
| **Dominant (60%)** | Background canvas. Let it breathe. |
| **Secondary (30%)** | Elevated surfaces. Cards, code blocks. |
| **Accent (10%)** | Earned punctuation. Links, borders, emphasis. |

### The Mood

**Two viable directions** (choose one and commit):

1. **Dark mode**: Late-night research. Deep focus. Terminal glow. Warm amber accent.
2. **Light mode**: Lab notebook. Paper and ink. Clinical precision. Red accent for attention.

Both work if executed completely. **The key is metadata structure, not the color temperature.**

- **Monospace typography signals precision** (terminal/typewriter aesthetic)
- **Sharp corners, 2px borders** (clinical, not soft)
- **Grid visible in background** (structure made explicit)
- **Muted text hierarchy**: Let the content organize attention, not the colors.

### Accent Usage

Accents should feel earned:
- Links (interactive promise)
- Active navigation (you are here)
- Card borders (entry points)
- Key phrases in headlines (the memorable part)

Not scattered. Not decorative. Each accent appearance means something.

---

## Spatial Composition

### The Grid

- **Prose**: Centered, narrow (65-70ch). Reading is the point.
- **Cards/Lists**: Wider container, but content still constrained.
- **Full-bleed**: Reserved for rare emphasis. Most things have margins.

### Negative Space

Generous. The voice doesn't rush. The design shouldn't either.

- Hero sections breathe
- Paragraphs have room
- Cards don't crowd

This isn't empty space. It's thinking space.

### Asymmetry & Metadata Layout

Not everything centered. **Embrace the sidebar.**

**Hero layout pattern:**
- Main content: 8 columns (asymmetric left)
- Metadata sidebar: 4 columns (structured data)
- **The sidebar is structural, not decorative**: Status, discipline, method, researcher info

**List layout pattern:**
- Catalog number: Fixed width column
- Entry title: Flex grow
- Date: Fixed width column
- Action indicator: Minimal

**Grid structure visible:**
- Subtle background grid (32px × 32px)
- Makes the underlying structure explicit
- "Show your work" philosophy

---

## Motion

### The Principle

One well-orchestrated moment > scattered micro-interactions.

The voice flows between poles without announcing shifts. Motion should be the same: present but not performed.

### Where Motion Lives

- **Page load**: Subtle fade-in. Content arrives, doesn't slam.
- **Hover states**: Color shifts, not transformations. Acknowledgment, not spectacle.
- **Transitions**: Fast enough to feel responsive. Slow enough to feel intentional.

### Where Motion Doesn't

- Scroll-jacking
- Parallax effects
- Animated backgrounds
- Anything that draws attention to itself

---

## Component Character

### Cards as Specimens

The featured post card is the signature element. It should feel like a **cataloged specimen**, not a blog post preview:
- **Catalog metadata header**: Entry number, classification, date
- **Structured content**: Clear sections (header, body, footer)
- **Status indicators**: Published, draft, type, discipline
- **Border treatment**: Clinical precision (2px borders, sharp corners)
- **Typography**: Monospace for metadata, bold for classifications
- **Hover state**: Border color shift (subtle acknowledgment)

Think: Museum placard meets modern data table. Every piece of information has a purpose and a place.

### Navigation

Minimal. Clear. The content is the point.
- Logo as return home
- Few links
- Current page indicated simply

### Footer

Grounding. A quiet close. Icons for external links if needed. Not a second navigation.

### Code Blocks

Integrated, not alien. The same surface treatment as cards. Syntax highlighting that fits the palette.

---

## What This Is Not

| Avoid | Why |
|-------|-----|
| Startup SaaS aesthetic | Cold, transactional, forgettable |
| Personal brand vibes | This isn't about performance |
| Developer portfolio | The code is evidence, not showcase |
| Cozy/craft blog | Too soft for the vulnerability here |
| Brutalist rawness | Too aggressive for the warmth |
| Over-designed magazine | The work is the content, not the frame |

---

## The Test

Before any design decision, ask:

1. **Does this serve the reading?** (Typography, spacing, contrast)
2. **Does this match the voice?** (Confident restraint, warmth, depth)
3. **Does this feel built to last?** (Not trendy, not fragile)
4. **Would Robbie recognize this as his space?** (Workbench, not gallery)

---

## Summary

**Digital lab notebook. Monospace-forward. Metadata-rich. Clinical precision. Structure made visible.**

The design frames content as **research specimens**, not blog posts:
- Catalog numbers and classification systems
- Structured metadata sidebars
- Clinical typography (monospace, bold status indicators)
- Grid visible in background
- Sharp edges, 2px borders

This quietly communicates: *You're not reading a blog. You're examining research artifacts from an ongoing experiment in human-AI collaboration.*

---

*The voice teaches by demonstration. The design should too.*
