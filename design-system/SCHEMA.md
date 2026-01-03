# Design System Token Schema

**Version:** 1.0  
**Last Updated:** 2026-01-03

## Purpose

This schema defines the **structural token space** of the AI and I design system. It is theme-agnostic—it defines what decisions exist, not what values they have.

A **theme** is a complete assignment of values to these tokens. Switching themes means changing values, not changing token names.

## Principles

1. **Semantic Naming:** Tokens named by function, not appearance
2. **Completeness:** Every visual decision has a token
3. **Orthogonality:** No redundant tokens, no gaps
4. **Composability:** Tokens combine predictably
5. **Theme Independence:** No aesthetic direction in token names

## Token Categories

### Color Tokens

#### Surfaces
| Token | Purpose | Constraints |
|-------|---------|-------------|
| `--color-background` | Page background | - |
| `--color-surface` | Elevated elements (cards, panels) | Must contrast with background |
| `--color-surface-alt` | Alternate surface (code blocks, asides) | Distinct from surface |
| `--color-border` | Default border color | Subtle, low contrast |

#### Text
| Token | Purpose | Constraints |
|-------|---------|-------------|
| `--color-text-primary` | Main content text | WCAG AA on background |
| `--color-text-secondary` | Supporting text, metadata | WCAG AA on background |
| `--color-text-muted` | De-emphasized content | WCAG AAA large text minimum |
| `--color-text-inverse` | Text on dark/inverted backgrounds | - |

#### Accent
| Token | Purpose | Constraints |
|-------|---------|-------------|
| `--color-accent` | Primary accent (links, focus, CTAs) | WCAG AA on background |
| `--color-accent-hover` | Interactive state of accent | Distinct from default |
| `--color-accent-subtle` | Accent at low opacity (backgrounds, borders) | - |

**Optional Extensions** (theme-specific):
- `--color-accent-secondary` — Second accent color
- `--color-accent-tertiary` — Third accent color

Themes MAY define additional accents. The base schema only REQUIRES one.

#### Semantic Colors
| Token | Purpose | Constraints |
|-------|---------|-------------|
| `--color-success` | Positive states, confirmations | - |
| `--color-warning` | Caution, attention needed | - |
| `--color-error` | Errors, destructive actions | - |
| `--color-info` | Informational messages | - |

**Note:** These are optional. Not all themes need semantic colors.

### Typography Tokens

#### Font Families
| Token | Purpose | Constraints |
|-------|---------|-------------|
| `--font-body` | Body text | Must be readable at small sizes |
| `--font-heading` | Headings (may equal body) | - |
| `--font-mono` | Code, technical content | Monospace |

#### Font Sizes
Standard scale (theme can extend):
- `--font-size-xs` through `--font-size-2xl`
- Each size SHOULD have a corresponding line-height

#### Line Heights (Vertical Rhythm)

Line height profoundly affects reading comfort and visual density.

| Token | Purpose | Theme Expression |
|-------|---------|------------------|
| `--leading-tight` | Headings, compact text (1.25-1.4) | Dense, efficient |
| `--leading-normal` | Default body text (1.5-1.6) | Balanced |
| `--leading-relaxed` | Reading-optimized text (1.7-1.8) | Generous, comfortable |
| `--leading-loose` | Maximum readability (1.9-2.0) | Luxurious, unhurried |

**Semantic Line Heights:**
| Token | Purpose |
|-------|---------|
| `--leading-body` | Default for body text |
| `--leading-heading` | Default for headings |

**Design Expression:**
- **Generous themes** (Afternoon Letter): Relaxed/loose body leading (1.8+)
- **Efficient themes** (First Snow): Normal body leading (1.5-1.6)
- **Night-reading themes** (Lamp Oil): Relaxed leading for low-contrast legibility

#### Letter Spacing (Horizontal Rhythm)

Letter spacing affects density, legibility, and character.

| Token | Purpose | Theme Expression |
|-------|---------|------------------|
| `--tracking-tight` | Large headings (-0.025em to 0) | Dense, efficient |
| `--tracking-normal` | Default (0) | Neutral |
| `--tracking-wide` | Small caps, labels (0.025-0.1em) | Open, legible |

**Semantic Letter Spacing:**
| Token | Purpose |
|-------|---------|
| `--tracking-body` | Default for body text |
| `--tracking-heading` | Default for headings |

**Design Expression:**
- **Open themes** (Afternoon Letter): Normal to slightly wide
- **Dense themes** (First Snow): Tight to normal
- **Legibility themes** (Lamp Oil): Slightly wide for low-contrast clarity

### Spacing Tokens

Spacing tokens control all padding, margin, gap, and layout rhythm. Each theme can express its spatial character across the full scale.

| Token | Purpose | Theme Expression |
|-------|---------|------------------|
| `--space-xs` | Minimal spacing (0.25-0.5rem) | Tighter themes compress, generous themes open up |
| `--space-sm` | Small spacing (0.5-0.75rem) | |
| `--space-md` | Medium spacing (1-1.5rem) | Base unit for most layouts |
| `--space-lg` | Large spacing (1.5-2.5rem) | Section padding, card spacing |
| `--space-xl` | Extra large (2.5-4rem) | Major section breaks |
| `--space-2xl` | Double extra large (4-6rem) | Hero spacing, dramatic separations |

**Semantic Spacing Tokens:**
| Token | Purpose |
|-------|---------|
| `--space-section` | Vertical rhythm between major sections |
| `--space-card-padding` | Default internal padding for cards |
| `--space-inline` | Horizontal spacing between inline elements |

**Design Expression:**
- **Generous themes** (Afternoon Letter): Larger values, breathing room, unhurried
- **Efficient themes** (First Snow): Tighter values, no waste, crisp
- **Cozy themes** (Lamp Oil): Moderate values, comfortable but enclosed

### Effect Tokens

#### Shadows

Shadows convey elevation and visual hierarchy. Themes can express depth, warmth, or flatness.

| Token | Purpose | Theme Expression |
|-------|---------|------------------|
| `--shadow-color` | Base shadow color | Warm themes use warm shadows, cool themes use cool |
| `--shadow-sm` | Subtle elevation (cards, dropdowns) | Can be soft/diffuse or sharp/defined |
| `--shadow-md` | Standard elevation (modals, popovers) | |
| `--shadow-lg` | Prominent elevation (dialogs, overlays) | |
| `--shadow-none` | Explicitly no shadow | Flat themes may reject elevation entirely |

**Shadow Values Include:** `x-offset`, `y-offset`, `blur-radius`, `spread`, `color`

**Design Expression:**
- **Soft themes** (Afternoon Letter): Diffuse blur, warm shadow color, gentle offset
- **Sharp themes** (First Snow): Minimal blur or none, neutral shadow, precise offset
- **Deep themes** (Lamp Oil): Pronounced shadows, dramatic depth, pools of light

#### Border Radius

Radii control the sharpness or softness of all corners.

| Token | Purpose | Theme Expression |
|-------|---------|------------------|
| `--radius-none` | Sharp corners (0) | Precise, technical themes |
| `--radius-sm` | Subtle rounding (0.125-0.25rem) | Gentle softening |
| `--radius-md` | Standard rounding (0.375-0.5rem) | Approachable, friendly |
| `--radius-lg` | Prominent rounding (0.75-1rem) | Warm, generous |
| `--radius-full` | Pill/circle (9999px) | For badges, avatars |

**Design Expression:**
- **Rounded themes** (Afternoon Letter): Generous curves, soft corners
- **Sharp themes** (First Snow): Zero or minimal radius, crisp precision
- **Balanced themes** (Lamp Oil): Medium radius, soft but not playful

#### Transitions

Transitions control the temporal character—how fast things move and feel.

| Token | Purpose | Theme Expression |
|-------|---------|------------------|
| `--duration-fast` | Quick interactions (100-150ms) | Snappy, responsive themes |
| `--duration-normal` | Standard transitions (200-250ms) | Balanced, natural |
| `--duration-slow` | Deliberate transitions (300-400ms) | Contemplative, unhurried |
| `--easing` | Timing function | ease-out, ease-in-out, cubic-bezier |

**Design Expression:**
- **Unhurried themes** (Afternoon Letter): Slow durations, gentle easing
- **Efficient themes** (First Snow): Fast durations, snappy easing
- **Contemplative themes** (Lamp Oil): Medium-slow, deliberate easing

#### Borders

| Token | Purpose | Theme Expression |
|-------|---------|------------------|
| `--border-width` | Default border thickness (1-2px) | Delicate vs. bold |
| `--border-width-thick` | Emphasized borders (2-4px) | For focus states, emphasis |

## Component Classes

### Prose Styling

**Class:** `.prose`

A single class for rich text content. Applies theme-defined prose styling.

**NOT:** `.prose-warmth`, `.prose-minimal`, etc.  
Themes define what `.prose` looks like.

### Utility Classes

Utility classes use semantic tokens:
- `bg-surface` → uses `--color-surface`
- `text-primary` → uses `--color-text-primary`
- `accent` → uses `--color-accent`

## Theme Requirements

A valid theme MUST provide values for:
- **All color tokens** (surfaces, text, accent)
- **All typography tokens** (families, base sizes, rhythm)
- **All spacing tokens** (xs through 2xl, semantic spacing)
- **All effect tokens** (shadows with color, radii, transitions with easing, borders)

A theme MAY:
- Add optional tokens (e.g., accent-secondary, accent-tertiary)
- Add intermediate spacing values
- Define semantic colors (success, warning, error, info)
- Add theme-specific utilities (documented as extensions)

**Complete Expression Requirement:**

Each theme should express itself across ALL design dimensions:
- Colors (what you see)
- Typography (what you read)
- Spacing (how it breathes)
- Shadows (how it floats)
- Radii (how sharp or soft)
- Transitions (how it moves)
- Rhythm (how dense or open)

A theme is not just a color scheme—it's a complete environment.

## Dark Mode

Themes should define dark mode variants for all color tokens.

Dark mode is activated via `.dark` class on `<html>`.

Tokens in dark mode: same names, different values.

## Verification

A properly structured design system:
- ✅ No token names reference aesthetics ("warm", "cool", "minimal")
- ✅ No component code references theme names
- ✅ Switching themes = swapping value file, nothing else
- ✅ All themes use identical token names
- ✅ New themes can be created by copying and modifying values

## Version History

- **1.0** (2026-01-03): Initial schema definition after warmth remediation
- **1.1** (2026-01-03): Expanded to full design space
  - Added detailed spacing tokens (xs through 2xl, semantic)
  - Expanded shadow tokens with color and expression guidance
  - Detailed radius tokens from none to full
  - Added transition duration and easing tokens
  - Expanded typography rhythm (leading, tracking, semantic)
  - Added border width tokens
  - Documented theme expression requirements across all dimensions
