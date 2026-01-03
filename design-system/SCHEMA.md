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

#### Line Heights
| Token | Purpose |
|-------|---------|
| `--leading-tight` | Headings, compact text |
| `--leading-normal` | Default body text |
| `--leading-relaxed` | Reading-optimized text |
| `--leading-loose` | Maximum readability |

#### Letter Spacing
| Token | Purpose |
|-------|---------|
| `--tracking-tight` | Large headings |
| `--tracking-normal` | Default |
| `--tracking-wide` | Small caps, labels |

### Spacing Tokens

**Base Scale:** Tailwind's default (0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64...)

**Theme Extensions:** Themes MAY add intermediate values (e.g., 18, 22) if needed.

**Semantic Spacing** (optional, theme-defined):
- `--spacing-section` — Vertical rhythm between major sections
- `--spacing-element` — Default element spacing

### Effect Tokens

#### Shadows
| Token | Purpose |
|-------|---------|
| `--shadow-sm` | Subtle elevation |
| `--shadow-md` | Standard elevation |
| `--shadow-lg` | Prominent elevation |

#### Border Radius
| Token | Purpose |
|-------|---------|
| `--radius-sm` | Subtle rounding |
| `--radius-md` | Standard rounding |
| `--radius-lg` | Prominent rounding |

#### Transitions
| Token | Purpose |
|-------|---------|
| `--transition-fast` | Quick interactions (hover) |
| `--transition-normal` | Standard animations |
| `--transition-slow` | Dramatic transitions |

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
- All color tokens (surfaces, text, accent)
- All typography tokens (families, base sizes)
- All effect tokens (shadows, radii, transitions)

A theme MAY:
- Add optional tokens (e.g., accent-secondary)
- Extend spacing scale
- Define semantic colors
- Add theme-specific utilities (documented as extensions)

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
