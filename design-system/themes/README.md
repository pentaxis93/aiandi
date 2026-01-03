# Theme Collection

This directory contains theme files for the AI and I design system. Each theme is a complete aesthetic direction with evocative names that capture their essence.

## Philosophy

Theme names should be **wild, unique, and eerily descriptive**. Not "Light" or "Dark" or "Minimal"—names that make you want to try the theme just to see what it means. Names that are themselves a tiny creative act.

The name should be evocative enough that you can almost guess the aesthetic, but surprising enough that you want to see it.

---

## Available Themes

### Afternoon Letter

**File:** `afternoon-letter.css`  
**Status:** Active (default)  
**Created:** January 2026

**The Name:**  
The feeling of reading a handwritten letter in warm afternoon light streaming through a window. Cream paper, warm brown ink, the occasional terracotta seal. Time slows down. There's nowhere else to be.

**Philosophy:**  
This theme invites lingering. It's for deep reading, for thinking, for the kind of attention that modern interfaces discourage. Every detail says: there is time here. Take it.

**Color Palette:**
- Background: Cream (#FAF7F2) - like aged paper in afternoon light
- Text: Warm brown (#2D2520) - ink that's lived on the page
- Accent: Terracotta (#D97757) - the wax seal, the underline
- Secondary: Ochre (#D4A574) - marginalia in a different pen
- Tertiary: Sage (#8FA888) - a pressed leaf between pages

**Typography:**  
Georgia serif - the font of correspondence

**Full Expression:**
- **Spacing:** GENEROUS - breathing room, extra padding (1.5rem base)
- **Shadows:** SOFT - diffuse blur, warm-tinted, gentle elevation
- **Radii:** ROUNDED - 0.625rem base, soft approachable corners
- **Transitions:** SLOW - 300ms standard, gentle ease-out
- **Rhythm:** RELAXED - 1.8 line-height, room to breathe
- **Character:** Everything invites lingering

**Intended Mood:**  
Contemplative. Unhurried. Human-scale. The opposite of optimization.

**Best For:**
- Long-form reading
- Sunday mornings
- When you want to linger
- Desktop/tablet reading

---

### First Snow

**File:** `first-snow.css`  
**Status:** Available  
**Created:** January 2026

**The Name:**  
That moment before dawn when fresh snow has fallen and everything is crisp, still, and impossibly clear. No tracks yet. Just pure surface and the kind of quiet that makes you want to whisper.

**Philosophy:**  
Clarity through reduction. Not cold—crystalline. Every element that doesn't serve the text has been removed. What remains is sharp, focused, and surprisingly warm in its honesty.

**Color Palette:**
- Background: Pure white (#FFFFFF) - no warmth, no noise
- Text: True black (#1A1A1A) - maximum contrast
- Accent: Blue (#0066CC) - focus, not decoration

**Typography:**  
System fonts - whatever your OS chose, we trust it

**Full Expression:**
- **Spacing:** EFFICIENT - tight, no waste (1rem base)
- **Shadows:** SHARP - minimal blur, crisp definition
- **Radii:** SMALL - 0.25rem base, subtle precision
- **Transitions:** FAST - 150ms standard, snappy response
- **Rhythm:** NORMAL - 1.5 line-height, information density
- **Character:** Everything serves clarity and speed

**Intended Mood:**  
Focused. Crisp. Respectful of your time. The opposite of cozy.

**Best For:**
- Scanning quickly
- Finding specific information
- Bright environments
- Mobile reading

---

### Lamp Oil

**File:** `lamp-oil.css`  
**Status:** Available  
**Created:** January 2026

**The Name:**  
Late night reading by a warm lamp in a dark room. The world has gone quiet. The only light is the pool of warmth on your desk. Everything else fades to rich darkness. This is the hour for deep work.

**Philosophy:**  
This theme is for night owls and deep workers. It's not the cold blue-gray of most dark modes—it's warm darkness, the kind you get from turned-off lights, not from screens. The text glows like it's lit by warm incandescent bulbs.

**Color Palette:**
- Background: Deep warm black (#1A1410) - room with lights off
- Text: Warm cream (#F5EFE7) - paper in lamplight
- Accent: Amber (#E8A87C) - warm lamp glow
- Secondary: Muted gold (#C9A36A) - edge of the light

**Typography:**  
Georgia serif - still bookish, now glowing

**Full Expression:**
- **Spacing:** COZY - comfortable but enclosed (1.25rem base)
- **Shadows:** DEEP - pronounced pools of light, warm amber glow
- **Radii:** MEDIUM - 0.5rem base, soft but not playful
- **Transitions:** MEDIUM-SLOW - 250ms, deliberate ease-in-out
- **Rhythm:** RELAXED - 1.75 line-height, night legibility
- **Character:** Intimate protection, focused warmth

**Intended Mood:**  
Intimate. Focused. Protected. The feeling of being awake when everyone else is asleep. The world has gotten small and that's exactly what you wanted.

**Best For:**
- Late night reading (10pm - 2am)
- Deep work sessions
- Dark environments
- Reducing eye strain

---

## Using Themes

### Current Implementation

The theme picker in the site header allows instant theme switching without page reload. Click the palette icon to browse available themes with their poetic descriptions.

**How It Works:**
1. All themes are loaded simultaneously via `design-system/all-themes.css`
2. Themes are scoped by `data-theme` attribute on `<html>` element
3. JavaScript in `ThemePicker.astro` switches the attribute instantly
4. Choice persists in localStorage across sessions

**Default Theme:** `afternoon-letter` (warm, bookish, generous)

**Technical Architecture:**
- `design-system/all-themes.css` defines all theme variables scoped by `[data-theme="..."]`
- `design-system/tokens.css` references theme variables with fallbacks
- Theme switching is instant via attribute change (no CSS file swap needed)

---

## Creating New Themes

### The Names

Invest real creative energy here. The names are half the experience.

**Examples of good directions:**
- A warm, bookish theme: "Old Library", "Hearthlight", "Sunday Paper"
- A minimal theme: "Empty Page", "Before Dawn", "Silent Keys"
- A dark theme: "After Hours", "Deep Work", "Midnight Brew"
- Something unexpected: "Rain on Glass", "Coffee Steam", "Worn Paperback"

The name should:
- Capture the essence poetically
- Make you want to try it
- Be surprising but fitting
- Work as a conversation piece

### The Process

1. **Copy an existing theme file** as a starting point
2. **Name it evocatively** - don't settle for the first idea
3. **Write the philosophy** before changing colors
   - What's the name mean?
   - What mood does it create?
   - When would someone choose it?
4. **Assign all required token values** (see `SCHEMA.md`)
5. **Test in different contexts** - reading, scanning, code blocks
6. **Refine until it feels intentional**, not accidental

### Required Elements

Each theme file must include:

**Header Comment:**
- Theme name and creation date
- Poetic description of the name
- Philosophy paragraph
- Design principles (3-5)
- Key characteristics
- Intended mood
- Best use cases

**Token Assignments:**
- All required tokens from schema
- Optional extensions if needed
- Dark mode variants
- Font, spacing, effects

---

## Theme Showcase

The theme picker in the header is the first interactive showcase piece visitors encounter. It demonstrates:

- **Craft over convenience:** Considered interaction design
- **Names that intrigue:** "Afternoon Letter" not "Light Mode"
- **Attention to detail:** Smooth transitions, good typography
- **Human-scale design:** Each theme suits a different reading mood

The picker itself is a statement about what this blog values.

---

## Design Principles (Meta)

### Themes Are Not Skins

Each theme should feel like entering a different room in the same house. The structure stays the same (semantic tokens), but the atmosphere changes completely.

### Names Do Work

"Afternoon Letter" communicates warmth, time, intimacy, handcraft. "Light Mode" communicates nothing. The name is part of the experience.

### Perfect The Small Things

The theme picker is small. It should be perfect. Every micro-interaction matters. Every name matters. Every color choice matters.

This is craft over convenience.

---

## Full Design Space Expression

**Version 1.1+**: Themes now express themselves across ALL design dimensions, not just color and typography.

### The Limitation We Fixed

Early themes only varied colors and fonts—perhaps 20% of Tailwind's design space. They LOOKED different but didn't FEEL as different as they could. "Afternoon Letter" and "First Snow" used the same spacing, shadows, radii, and transition speeds. Same room, different paint.

### The Full Dimensional Approach

Each theme now has a complete dimensional personality:

| Dimension | Afternoon Letter | First Snow | Lamp Oil |
|-----------|-----------------|------------|----------|
| **Spacing** | Generous (1.5rem) | Efficient (1rem) | Cozy (1.25rem) |
| **Shadows** | Soft diffuse | Sharp minimal | Deep glowing |
| **Radii** | Rounded (0.625rem) | Sharp (0.25rem) | Medium (0.5rem) |
| **Transitions** | Slow (300ms) | Fast (150ms) | Medium (250ms) |
| **Line Height** | Relaxed (1.8) | Normal (1.5) | Relaxed (1.75) |
| **Letter Spacing** | Normal to open | Tight | Slightly open |
| **Easing** | ease-out gentle | ease-out snappy | ease-in-out smooth |

### Why It Matters

Switching themes should feel like entering a different room, not just changing wall color.

- **Afternoon Letter** → Stepping into a warm library. Everything breathes. Time slows.
- **First Snow** → Entering a bright gallery. Everything is crisp. Focus sharpens.
- **Lamp Oil** → Settling into a midnight study. The world shrinks. Protection.

The difference is **visceral**, not just visual.

---

## Version History

- **v1.0** (2026-01-03): Initial collection with three evocatively named themes
  - Afternoon Letter (warm, bookish, generous)
  - First Snow (crisp, focused, efficient)
  - Lamp Oil (intimate, warm dark, night reading)
  - Instant theme switching via `data-theme` attribute
  - localStorage persistence across sessions
  - Interactive theme picker with descriptions

- **v1.1** (2026-01-03): Expanded to full design space
  - Added spacing tokens (xs through 2xl, semantic)
  - Added shadow tokens with theme-specific character
  - Added radius tokens from sharp to rounded
  - Added transition duration and easing per theme
  - Added typography rhythm (line-height, letter-spacing)
  - All themes now express complete dimensional personality
  - Themes feel dramatically different, not just visually different
