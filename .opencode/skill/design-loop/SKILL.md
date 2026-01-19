---
name: design-loop
description: "Iterative visual design refinement. Implement, capture, see with vision, assess, refine, repeat. The recursive loop where craft meets sight."
---

# Design Loop Skill

**Purpose:** Iteratively refine visual design by implementing changes, capturing screenshots, *actually looking* at them with vision, and making informed refinements. The loop continues until the design achieves the intended vision.

**Builds on:** **web-design** (aesthetic vision + tokens) and **screenshot** (capture procedure)

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

| Step | Action |
|------|--------|
| **VISION** | Define or refine the aesthetic intention (see **web-design** skill) |
| **IMPLEMENT** | Write code using semantic tokens |
| **CAPTURE** | Screenshot the result (see **screenshot** skill) |
| **SEE** | Actually look at the screenshot with vision capability |
| **ASSESS** | What works? What doesn't? What's missing? |
| **REFINE** | Adjust vision or implementation, return to IMPLEMENT |

**Exit when:** The visual matches the intention, or the design achieves a quality that surprises even you.

---

## Why This Matters

Code is not design. CSS properties are not aesthetics. The only way to know if a design *works* is to **see it**.

| Without Vision | With Vision |
|----------------|-------------|
| Guessing at spacing values | *Seeing* the spacing is too tight |
| Hoping colors work together | *Noticing* the accent color gets lost |
| Imagining animations | *Feeling* the animation is too fast |
| Assuming typography reads well | *Reading* the text and sensing rhythm |

**Vision transforms design from speculation to craft.**

---

## Procedure

### Setup

Ensure the dev server is running:

```bash
bun run dev --host 0.0.0.0 &
sleep 5
# Note the port from output (4321 or 4322)
```

### The Loop

#### 1. Implement

Make changes using semantic tokens. Reference **web-design** skill for:
- Token quick reference
- Layout patterns
- Component templates

#### 2. Capture

Take a screenshot:

```bash
cat << 'EOF' | bun run -
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });

const path = `/tmp/aiandi-${Date.now()}.png`;
await page.screenshot({ path, fullPage: false });

await browser.close();
console.log(path);
EOF
```

For more capture options, see **screenshot** skill.

#### 3. See

Read the screenshot:

```
Read /tmp/aiandi-TIMESTAMP.png
```

**Actually look at it.** Not a glance - a studied examination.

#### 4. Assess

**Composition**
- Does the eye flow naturally?
- Is there clear hierarchy?
- Does negative space breathe or suffocate?
- Are elements aligned with intention?

**Typography**
- Is the text readable at this size?
- Does the line length feel comfortable?
- Is there rhythm in the spacing?
- Do the fonts have character or feel generic?

**Color**
- Do the colors create the intended mood?
- Is there enough contrast?
- Does the accent color earn its attention?
- Is the palette cohesive?

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

#### 5. Refine

Based on what you see:

| Decision | When |
|----------|------|
| **Adjust implementation** | Vision is right, execution needs work |
| **Evolve vision** | Seeing it revealed something new |
| **Zoom in** | Focus on a specific element |
| **Zoom out** | Assess overall composition |

Return to step 1.

### Completion

The loop completes when:
- The visual matches the intention
- The design achieves unexpected quality
- Further refinement yields diminishing returns

Clean up:
```bash
rm /tmp/aiandi-*.png
```

---

## Common Issues Revealed by Vision

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

---

## Quick Tests

### The Squint Test

Squint at the screenshot (blur it mentally):
- **Clear shapes and hierarchy** = good structure
- **Muddy blob** = needs more contrast
- **One dominant element** = clear focal point
- **Everything equal** = no hierarchy

### The 5-Second Test

Look for 5 seconds, look away. What do you remember?
- **Specific elements** = those are working
- **Nothing specific** = lacks distinctiveness
- **Wrong things** = hierarchy is off

---

## Example Session

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
- See: Better hierarchy, but accent color doesn't pop
- Assess: Amber on dark gray needs more saturation
- Refine: Adjust accent color in theme

LOOP 3:
- Implement: Brighter accent color
- Capture: Screenshot
- See: Accent pops now, but feels disconnected
- Assess: Need to echo accent elsewhere for cohesion
- Refine: Add accent border to cards section

LOOP 4:
- Implement: Accent border on cards
- Capture: Screenshot
- See: Cohesive! Accent creates visual thread. Cards inviting.
- Assess: Ready. Clear hierarchy, distinctive color, rhythm.
- Complete: Clean up, commit changes.
```

---

## The Mindset

**You are not debugging. You are designing.**

Each loop is refinement toward aesthetic vision, not bug fixing. The screenshot is a canvas for evaluation, not a test result.

Trust your eyes. They see what code cannot express:
- Rhythm
- Balance
- Tension
- Harmony
- Character

**The code is the instrument. The screenshot is the music. Vision is the ear.**

---

## When to Use

- Creating new pages or components
- Refining existing designs
- Implementing theme changes
- Responsive design verification
- Before committing visual changes
- When something "feels off" but you can't articulate why

---

## Related Skills

| Skill | Provides |
|-------|----------|
| **web-design** | Aesthetic vision, token system, layout patterns, anti-patterns |
| **screenshot** | Capture procedure, viewport options, troubleshooting |

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
