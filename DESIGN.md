# Design System — AI and I

*Semantic token architecture for aiandi.dev*

---

## Architecture

A design system has two layers:

| Layer | Contains | Changes When |
|-------|----------|--------------|
| **Schema** | Token names, semantic purposes, constraints | Rarely (structural evolution) |
| **Theme** | Values assigned to tokens | Per aesthetic direction |

The schema is **a priori**—defined by what decisions exist, not by any particular aesthetic. It has mathematical properties: completeness, orthogonality, composability.

Themes are **value assignments**—complete mappings from tokens to concrete values. "Warmth" is a theme. "Minimal" is a theme. "Dark" is a theme. None of them are the structure itself.

**The schema is silent about aesthetic direction.** It doesn't know about warm or cold, playful or serious. It only knows that decisions exist.

---

## Token Schema

### Color Tokens

#### Surfaces
| Token | Purpose |
|-------|---------|
| `background` | Page background |
| `surface` | Cards, elevated elements |
| `surface-alt` | Alternate surface (code blocks, asides) |
| `border` | Default border color |

#### Text
| Token | Purpose |
|-------|---------|
| `text-primary` | Main content |
| `text-secondary` | Supporting text, metadata |
| `text-muted` | De-emphasized content |
| `text-inverse` | Text on dark/accent backgrounds |

#### Accent
| Token | Purpose |
|-------|---------|
| `accent` | Primary accent (links, buttons, emphasis) |
| `accent-hover` | Accent interactive state |
| `accent-subtle` | Accent at low opacity (tinted backgrounds) |

#### Semantic
| Token | Purpose |
|-------|---------|
| `success` | Positive states |
| `warning` | Caution states |
| `error` | Negative states |
| `info` | Informational states |

#### Optional Extensions
Themes may define additional tokens:
- `accent-secondary` — second accent color
- `accent-tertiary` — third accent color

These are theme extensions, not schema requirements.

### Typography Tokens

| Token | Purpose |
|-------|---------|
| `font-body` | Body text family |
| `font-heading` | Heading family |
| `font-mono` | Code/monospace family |

Size scale: `text-xs` through `text-2xl`
Line-height: `leading-tight`, `leading-normal`, `leading-relaxed`, `leading-loose`
Letter-spacing: `tracking-tight`, `tracking-normal`, `tracking-wide`

### Spacing Tokens

Standard Tailwind scale. Themes may extend with additional values.

### Effect Tokens

| Token | Purpose |
|-------|---------|
| `shadow-sm/md/lg` | Elevation shadows |
| `radius-sm/md/lg` | Border radii |
| `transition-*` | Animation timing |

---

## Theme System

### Directory Structure

```
design-system/
├── SCHEMA.md           # Token schema documentation
├── tokens.css          # Semantic token declarations (references theme vars)
├── all-themes.css      # All themes with data-theme scoping
└── themes/
    ├── afternoon-letter.css   # Warm, bookish aesthetic
    ├── first-snow.css         # Crisp, minimal aesthetic
    ├── lamp-oil.css           # Warm dark aesthetic
    └── README.md              # Theme philosophy & creation guide
```

### Theme File Format

Each theme file contains:

```css
/*
 * Theme: [Name]
 * Description: [Aesthetic philosophy]
 * Created: [Date]
 */

:root {
  /* Surfaces */
  --color-background: [value];
  --color-surface: [value];
  /* ... complete token assignments ... */
  
  /* Typography */
  --font-body: [value];
  /* ... */
}

/* Optional: Theme extensions */
:root {
  --color-accent-secondary: [value];
}

/* Optional: Theme-specific utilities */
/* Document these clearly as extensions */
```

### Switching Themes

**Interactive (User):**
- Click the palette icon in the site header
- Choose from available themes with poetic descriptions
- Theme switches instantly without page reload
- Choice persists in localStorage across sessions

**Technical Implementation:**
- All themes loaded via `all-themes.css` with `[data-theme="..."]` scoping
- JavaScript sets `data-theme` attribute on `<html>` element
- Tokens reference theme variables: `--color-accent: var(--theme-color-accent, #fallback);`
- Instant switching via attribute change (no CSS file swap)

**No component changes. No class name changes. Only values change.**

If switching themes requires code changes, the schema is contaminated with theme-specific structure.

### Creating a New Theme

1. Copy an existing theme file
2. Assign new values to all required tokens
3. Add any optional extensions
4. Document the aesthetic philosophy
5. Test: does it look intentional, not broken?

---

## Constraints

### Contrast Requirements
- `text-primary` on `background`: minimum 7:1 (WCAG AAA)
- `text-secondary` on `background`: minimum 4.5:1 (WCAG AA)
- `accent` on `background`: minimum 4.5:1 for text use

### Consistency Requirements
- All themes must define all required tokens
- No partial themes (every decision must have a value)
- Extensions must be documented

### Naming Requirements
- Token names are semantic (by function, not appearance)
- No aesthetic direction in names (no "warm", "cold", "playful")
- No color names in tokens (no "terracotta", "cream")

---

## Anti-Patterns

| Anti-Pattern | Why It's Wrong |
|--------------|----------------|
| `prose-warmth` class | Theme name in structure |
| `--color-terracotta` | Appearance in token name |
| Theme values in schema docs | Conflates layers |
| Partial themes | Leaves decisions undefined |
| Switching themes requires code changes | Structure contaminated |

---

## Evaluation

When reviewing design system changes:

1. **Is this schema or theme?** (Structure belongs in schema; values belong in themes)
2. **Are names semantic?** (Function-based, not appearance-based)
3. **Is the schema complete?** (Every visual decision has a token)
4. **Can themes switch cleanly?** (No code changes, only value swaps)

---

## Current Themes

### Afternoon Letter (default)
- **Philosophy**: Reading a handwritten letter in warm afternoon light. Inviting lingering, contemplative, unhurried.
- **File**: `design-system/themes/afternoon-letter.css`
- **Palette**: Cream background, warm brown text, terracotta/ochre/sage accents, Georgia serif
- **Created**: 2026-01-03

### First Snow
- **Philosophy**: Fresh snow before dawn—crisp, clear, crystalline. Clarity through reduction. Focused, efficient.
- **File**: `design-system/themes/first-snow.css`
- **Palette**: Pure white/black, blue accent, system fonts
- **Created**: 2026-01-03

### Lamp Oil
- **Philosophy**: Late night reading by warm lamp in dark room. Intimate, focused, protected. Warm darkness for deep work.
- **File**: `design-system/themes/lamp-oil.css`
- **Palette**: Deep warm black, warm cream text, amber/gold accents, Georgia serif
- **Created**: 2026-01-03

---

*The schema defines what decisions exist. Themes decide how those decisions resolve. The schema is mathematics; themes are expression.*
