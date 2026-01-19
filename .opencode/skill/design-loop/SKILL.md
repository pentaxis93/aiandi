---
name: design-loop
description: "Iterative visual design refinement using vision capability. Implement, screenshot, see, refine, repeat. Use when crafting or improving visual design with eyes-on verification."
---

# Design Loop Skill

**Purpose:** Iteratively refine visual design by implementing changes, capturing screenshots, *actually looking* at them with vision, and making informed refinements. The loop continues until the design achieves the intended vision.

---

## The Loop

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   VISION ──────► IMPLEMENT ──────► CAPTURE              │
│     ▲                                  │                │
│     │                                  ▼                │
│     │                                SEE                │
│     │                                  │                │
│     │                                  ▼                │
│   REFINE ◄──────────────────────── ASSESS               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

1. **VISION** - Define or refine the aesthetic intention
2. **IMPLEMENT** - Write the code to realize that vision
3. **CAPTURE** - Screenshot the result
4. **SEE** - Actually look at the screenshot with vision capability
5. **ASSESS** - What works? What doesn't? What's missing?
6. **REFINE** - Adjust the vision or implementation, return to step 2

**The loop exits when:** The visual result matches the aesthetic intention, or the design achieves a quality that surprises even you.

---

## Why This Matters

Code is not design. CSS properties are not aesthetics. The only way to know if a design *works* is to **see it**.

Without vision:
- Guessing at spacing values
- Hoping colors work together
- Imagining what animations feel like
- Assuming typography reads well

With vision:
- *Seeing* that the spacing is too tight
- *Noticing* the accent color gets lost
- *Feeling* the animation is too fast
- *Reading* the text and sensing the rhythm

**Vision transforms design from speculation to craft.**

---

## Procedure

### Phase 1: Setup

Ensure the dev server is running:

```bash
bun run dev --host 0.0.0.0 &
sleep 5
```

Note the port (usually 4321 or 4322).

### Phase 2: The Loop

#### Step 1: Implement

Make changes to the code. Use semantic tokens (see web-design skill).

#### Step 2: Capture

Take a screenshot using Puppeteer:

```bash
cat << 'EOF' | bun run -
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });
await page.goto('http://localhost:4322/', { waitUntil: 'networkidle0' });

const path = `/tmp/design-loop-${Date.now()}.png`;
await page.screenshot({ path, fullPage: false });

await browser.close();
console.log(path);
EOF
```

#### Step 3: See

Read the screenshot with vision:

```
Read /tmp/design-loop-TIMESTAMP.png
```

**Actually look at it.** Not a glance - a studied examination.

#### Step 4: Assess

Ask yourself:

**Composition**
- Does the eye flow naturally?
- Is there clear hierarchy?
- Does negative space breathe or suffocate?
- Are elements aligned with intention (or accidentally)?

**Typography**
- Is the text readable at this size?
- Does the line length feel comfortable?
- Is there rhythm in the spacing?
- Do the fonts have character or feel generic?

**Color**
- Do the colors create the intended mood?
- Is there enough contrast?
- Does the accent color earn its attention?
- Is the palette cohesive or chaotic?

**Details**
- Are borders and shadows serving a purpose?
- Do interactive elements look interactive?
- Is there consistency in radii, spacing, weights?
- What feels unfinished?

**Gut Check**
- Is this distinctive or generic?
- Would someone remember this?
- Does it have a point of view?
- Am I proud of this?

#### Step 5: Refine

Based on what you see, decide:

- **Adjust implementation** - The vision is right, execution needs work
- **Evolve vision** - Seeing it revealed something new
- **Zoom in** - Focus on a specific element that needs attention
- **Zoom out** - Step back and assess overall composition

Return to Step 1.

### Phase 3: Completion

The loop completes when:
- The visual matches the intention
- The design achieves unexpected quality
- Further refinement yields diminishing returns

Clean up screenshots:
```bash
rm /tmp/design-loop-*.png
```

---

## Capture Variants

### Full Page
```javascript
await page.screenshot({ path, fullPage: true });
```

### Specific Viewport (Mobile)
```javascript
await page.setViewport({ width: 375, height: 667 });
```

### Specific Element
```javascript
const element = await page.$('.hero');
await element.screenshot({ path });
```

### Multiple Pages
```javascript
const pages = ['/', '/blog', '/about'];
for (const p of pages) {
  await page.goto(`http://localhost:4322${p}`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: `/tmp/design-${p.replace('/', '') || 'home'}-${Date.now()}.png` });
}
```

### With Interaction State
```javascript
await page.hover('.button');
await page.screenshot({ path });
```

---

## What to Look For

### Common Issues Revealed by Vision

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| Feels cramped | Spacing too tight | Increase padding, margins |
| Feels empty | Too much negative space | Tighten spacing or add content |
| No hierarchy | Similar sizes/weights | Increase contrast between levels |
| Eye wanders | No focal point | Strengthen the primary element |
| Feels generic | Safe choices | Commit to bolder direction |
| Colors clash | Wrong relationships | Adjust hues or reduce saturation |
| Text hard to read | Contrast or size | Increase contrast, adjust size |
| Unbalanced | Visual weight off | Redistribute elements |
| Unfinished | Missing details | Add borders, shadows, states |

### The Squint Test

Squint at the screenshot (or blur it mentally). What do you see?
- Clear shapes and hierarchy = good structure
- Muddy blob = needs more contrast
- One dominant element = clear focal point
- Everything equal = no hierarchy

### The 5-Second Test

Look at the screenshot for 5 seconds, look away. What do you remember?
- Specific elements = those are working
- Nothing specific = design lacks distinctiveness
- Wrong things = hierarchy is off

---

## Integration with Other Skills

### web-design skill
Provides the aesthetic vision and token system. Load it for:
- Choosing aesthetic direction
- Token quick reference
- Layout patterns
- Anti-patterns to avoid

### screenshot skill
Provides capture procedure details. Reference for:
- Full Puppeteer setup
- Viewport configurations
- Troubleshooting

---

## Example Loop Session

```
LOOP 1:
- Implement: Create hero section with large heading
- Capture: Screenshot home page
- See: Heading feels lost, not commanding enough
- Assess: Font weight too light, spacing below too tight
- Refine: Increase font weight, add more bottom margin

LOOP 2:
- Implement: Bold heading, generous spacing
- Capture: Screenshot
- See: Better hierarchy, but accent color on "between minds" doesn't pop
- Assess: Amber on dark gray needs more saturation or brightness
- Refine: Adjust accent color in theme

LOOP 3:
- Implement: Brighter accent color
- Capture: Screenshot
- See: Accent pops now, but feels disconnected from rest of page
- Assess: Need to echo the accent elsewhere to create cohesion
- Refine: Add accent to border element in cards section

LOOP 4:
- Implement: Accent border on cards
- Capture: Screenshot
- See: Cohesive! The accent creates a visual thread. Cards feel inviting.
- Assess: Ready. Design has clear hierarchy, distinctive color use, rhythm.
- Complete: Clean up, commit changes.
```

---

## The Mindset

**You are not debugging. You are designing.**

Each loop is not about fixing bugs - it's about refinement toward an aesthetic vision. The screenshot is not a test result - it's a canvas for evaluation.

Trust your eyes. They see things that code cannot express:
- Rhythm
- Balance
- Tension
- Harmony
- Character

**The code is the instrument. The screenshot is the music. Vision is the ear.**

---

## When to Use This Skill

- Creating new pages or components
- Refining existing designs
- Implementing theme changes
- Responsive design verification
- Before committing visual changes
- When something "feels off" but you can't articulate why

---

## The Standard

A design is complete when:
- It has a clear point of view
- Every element serves the whole
- The details reward close inspection
- You would be proud to show it

**If you haven't looked at it, you haven't designed it.**

---

*See what you build. Build what you see.*
