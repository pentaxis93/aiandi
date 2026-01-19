---
name: web-design
description: "Design layouts for aiandi.dev using our semantic token system. Astro components, Tailwind v4, responsive patterns. Use when creating or modifying page layouts, components, or visual design."
---

# Web Design Skill

**Purpose:** Design and implement layouts for aiandi.dev that leverage our semantic token architecture, ensuring consistency, accessibility, and theme-flexibility.

---

## Core Principle: Schema vs. Theme

Our design system separates **structure** from **values**:

| Layer | Contains | File Location |
|-------|----------|---------------|
| **Schema** | Token names, semantic purposes | `design-system/tokens.css` |
| **Theme** | Values assigned to tokens | `design-system/all-themes.css` |

**Never hardcode colors, spacing, or typography values.** Always use tokens.

---

## Token Quick Reference

### Colors (use `--color-*` or Tailwind classes)

| Purpose | Token | Tailwind Class |
|---------|-------|----------------|
| Page background | `--color-background` | `bg-background` |
| Cards/elevated | `--color-surface` | `bg-surface` |
| Code blocks | `--color-surface-alt` | `bg-surface-alt` |
| Borders | `--color-border` | `border-border` |
| Body text | `--color-text-primary` | `text-text-primary` |
| Secondary text | `--color-text-secondary` | `text-text-secondary` |
| Muted text | `--color-text-muted` | `text-text-muted` |
| Links/accent | `--color-accent` | `text-accent` |
| Accent hover | `--color-accent-hover` | `hover:text-accent-hover` |

### Typography

| Purpose | Token | Tailwind Class |
|---------|-------|----------------|
| Body font | `--font-body` | `font-body` |
| Headings | `--font-heading` | `font-heading` |
| Code | `--font-mono` | `font-mono` |

### Spacing

| Size | Token | Usage |
|------|-------|-------|
| xs | `--space-xs` | Tight gaps, inline spacing |
| sm | `--space-sm` | Component internal padding |
| md | `--space-md` | Default padding |
| lg | `--space-lg` | Section padding |
| xl | `--space-xl` | Major section breaks |
| 2xl | `--space-2xl` | Hero/dramatic spacing |

### Container Widths

| Purpose | Token | Value |
|---------|-------|-------|
| Prose | `--container-prose` | 65ch |
| Narrow | `--container-narrow` | 42rem |
| Normal | `--container-normal` | 52rem |
| Wide | `--container-wide` | 64rem |
| Full | `--container-full` | 80rem |

### Effects

| Purpose | Token |
|---------|-------|
| Subtle shadow | `--shadow-sm` |
| Standard shadow | `--shadow-md` |
| Prominent shadow | `--shadow-lg` |
| Subtle radius | `--radius-sm` |
| Standard radius | `--radius-md` |
| Prominent radius | `--radius-lg` |
| Fast transition | `--duration-fast` |
| Normal transition | `--duration-normal` |
| Slow transition | `--duration-slow` |

---

## Layout Patterns

### Page Structure

```astro
<body class="min-h-screen flex flex-col bg-background text-text-primary font-body antialiased">
  <Header />
  <main class="flex-1 w-full">
    <!-- Page content -->
  </main>
  <Footer />
</body>
```

### Centered Content Container

```astro
<!-- For prose content (blog posts) -->
<div class="max-w-[68ch] mx-auto px-6">
  <div class="prose">
    <slot />
  </div>
</div>

<!-- For wider layouts -->
<div class="max-w-6xl mx-auto px-6">
  <!-- Grid/card layouts -->
</div>
```

### Responsive Navigation

```astro
<nav class="max-w-6xl mx-auto flex items-center justify-between">
  <h2 class="text-2xl font-heading">
    <a href="/" class="text-text-primary hover:text-accent transition-colors duration-normal">
      Site Title
    </a>
  </h2>
  <div class="flex items-center gap-6">
    <!-- Nav links -->
  </div>
</nav>
```

### Card Pattern

```astro
<article class="bg-surface border-l-3 border-accent p-card-padding rounded-md">
  <h3 class="font-heading text-2xl text-accent mb-2">
    <a href={url} class="hover:text-accent-hover transition-colors">
      {title}
    </a>
  </h3>
  <p class="text-text-secondary leading-relaxed">
    {description}
  </p>
  <time class="font-mono text-xs text-text-muted uppercase tracking-wide">
    {date}
  </time>
</article>
```

### Hero Section

```astro
<section class="py-section">
  <h1 class="font-heading text-5xl md:text-6xl leading-tight tracking-tight balance-text">
    Main Heading
    <span class="text-accent">Accent Part</span>
  </h1>
  <p class="text-text-secondary text-lg mt-6">
    Subheading text
  </p>
</section>
```

---

## Component Guidelines

### Text Hierarchy

```css
/* Display/Hero */
.text-display {
  font-family: var(--font-heading);
  font-size: var(--font-size-5xl);  /* 3rem */
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

/* H1 */
.text-h1 {
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);  /* 2.25rem */
  line-height: 1.2;
  letter-spacing: -0.02em;
}

/* H2 */
.text-h2 {
  font-family: var(--font-heading);
  font-size: var(--font-size-3xl);  /* 1.875rem */
  line-height: 1.2;
  letter-spacing: -0.02em;
}

/* Body */
.text-body {
  font-family: var(--font-body);
  font-size: var(--font-size-base);  /* 1rem */
  line-height: var(--leading-relaxed);  /* 1.75 */
}

/* Small/Meta */
.text-meta {
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}
```

### Interactive States

All interactive elements need three states:

```css
/* Default state */
.interactive {
  color: var(--color-accent);
  transition: color var(--duration-fast) var(--easing);
}

/* Hover state */
.interactive:hover {
  color: var(--color-accent-hover);
}

/* Focus state */
.interactive:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### Borders & Dividers

```astro
<!-- Subtle divider -->
<hr class="border-t border-border my-section" />

<!-- Accent border (cards, callouts) -->
<div class="border-l-3 border-accent">

<!-- Full border (inputs, buttons) -->
<div class="border border-border rounded-md">
```

---

## Responsive Design

### Breakpoints (Tailwind v4)

| Prefix | Min Width | Usage |
|--------|-----------|-------|
| `sm:` | 640px | Mobile landscape |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Large desktop |

### Mobile-First Pattern

```astro
<h1 class="text-3xl md:text-5xl lg:text-6xl">
  Responsive Heading
</h1>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Cards -->
</div>
```

### Content Width Strategy

- **Prose content:** Max 65-70ch for optimal reading
- **Mixed content:** Max 52-64rem
- **Full-width sections:** Edge-to-edge, content contained

---

## Accessibility Requirements

### Color Contrast

| Combination | Minimum Ratio |
|-------------|---------------|
| `text-primary` on `background` | 7:1 (AAA) |
| `text-secondary` on `background` | 4.5:1 (AA) |
| `accent` on `background` | 4.5:1 for text |

### Focus Indicators

Every interactive element must have visible focus states:

```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### Semantic HTML

- Use `<article>` for blog posts
- Use `<nav>` for navigation
- Use `<main>` for primary content
- Use `<aside>` for secondary content
- Use proper heading hierarchy (h1 > h2 > h3)

---

## Prose Styling

The `.prose` class handles rich text content. It's defined in `tokens.css`:

```astro
<div class="prose">
  <slot />  <!-- MDX content renders here -->
</div>
```

Prose automatically styles:
- Headings (h2-h4) with proper margins and sizes
- Paragraphs with comfortable line-height
- Links with accent color and underline
- Code blocks with surface-alt background
- Blockquotes with accent border
- Lists with proper spacing
- Tables with borders and padding

---

## Anti-Patterns

| Don't | Do |
|-------|-----|
| `color: #d4a574` | `color: var(--color-accent)` |
| `padding: 2rem` | `padding: var(--space-lg)` |
| `font-family: Inter` | `font-family: var(--font-body)` |
| `bg-gray-900` | `bg-background` |
| `text-amber-400` | `text-accent` |
| Magic numbers | Semantic tokens |

---

## File Locations

| Purpose | Path |
|---------|------|
| Token definitions | `design-system/tokens.css` |
| Theme values | `design-system/all-themes.css` |
| Schema docs | `design-system/SCHEMA.md` |
| Global styles | `src/styles/global.css` |
| Layouts | `src/layouts/*.astro` |
| Components | `src/components/*.astro` |
| Design docs | `DESIGN.md` |

---

## Creating New Components

1. **Identify token needs** - What colors, spacing, typography?
2. **Check existing patterns** - Reuse before creating
3. **Use semantic tokens** - Never hardcode values
4. **Include states** - Default, hover, focus, disabled
5. **Test both themes** - Light/dark mode if added
6. **Document usage** - Props, variants, examples

### Component Template

```astro
---
interface Props {
  variant?: 'default' | 'accent';
  class?: string;
}

const { variant = 'default', class: className } = Astro.props;

const variants = {
  default: 'bg-surface text-text-primary border-border',
  accent: 'bg-accent-subtle text-accent border-accent',
};
---

<div class:list={[
  'rounded-md border p-md transition-colors duration-normal',
  variants[variant],
  className
]}>
  <slot />
</div>
```

---

## Visual Verification

Use the screenshot skill to capture pages after changes:

```bash
# Start dev server
bun run dev --host 0.0.0.0 &

# Take screenshot (see screenshot skill for full procedure)
```

---

## Design Principles

1. **Clarity over decoration** - Every element serves a purpose
2. **Consistency through tokens** - Same decision, same token
3. **Accessibility by default** - Contrast, focus, semantics
4. **Theme-agnostic structure** - Layout works with any theme
5. **Mobile-first responsive** - Base styles for mobile, enhance up

---

*The tokens define what's possible. The design decides what's used.*
