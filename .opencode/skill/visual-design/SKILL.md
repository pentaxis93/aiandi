---
name: visual-design
description: Iterative visual design workflow combining frontend-design aesthetics with screenshot preview feedback loops. Sol (design knowledge) meets Luna (visual perception) in cycles of creation, observation, and refinement until the work achieves its vision.
---

# Visual Design: The Iterative Art

> *The sculptor sees, strikes, sees again. The code is clay until observed.*

## Overview

**Visual Design is iterative synthesis.** Unlike The Art's single alchemical draft, visual work requires cycles of creation and perception. You cannot design blind - you must see what you've made, then respond to what you see.

This skill combines:
- **Sol** (`frontend-design` skill) - Structured aesthetic knowledge, bold choices, production patterns
- **Luna** (`screenshot-preview` skill) - The eye that sees reality, not imagination

The synthesis happens across iterations, not within a single act. Each cycle refines toward the vision.

## The Core Loop

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   ┌──────────┐     ┌──────────┐     ┌──────────┐   │
│   │  DESIGN  │────▶│  PREVIEW │────▶│ EVALUATE │   │
│   └──────────┘     └──────────┘     └──────────┘   │
│        ▲                                  │        │
│        │           ┌──────────┐           │        │
│        └───────────│  REFINE  │◀──────────┘        │
│                    └──────────┘                    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**DESIGN**: Write code holding Sol's aesthetic knowledge
**PREVIEW**: Capture screenshot to see reality (`bun run screenshot`)
**EVALUATE**: Compare vision to reality using the evaluation criteria
**REFINE**: Make targeted changes based on what you observed

Repeat until the work achieves its vision. Exit when iteration yields diminishing returns.

## When to Invoke

- Building any visual frontend (pages, components, layouts)
- When asked to "design" or "create" something visual
- After the user requests aesthetic improvements
- When frontend code needs to look good, not just function

## Phase 1: Commit to a Vision

Before any code, establish:

### The Vision Statement

Answer these explicitly:

| Question | Your Answer |
|----------|-------------|
| **Purpose** | What problem does this solve? Who uses it? |
| **Tone** | What extreme aesthetic? (brutalist, maximalist, refined, playful, etc.) |
| **Differentiation** | What ONE thing will someone remember? |
| **Constraints** | Framework, performance, accessibility requirements? |

**Report to user:**
```markdown
**Visual Design: Vision Established**

Purpose: [answer]
Tone: [answer]  
Differentiator: [answer]
Constraints: [answer]

Proceeding to first design iteration...
```

### Load Sol

Invoke the `frontend-design` skill to load aesthetic knowledge. Hold these principles:

- **Typography**: Distinctive fonts, not generic (no Inter, Arial, Roboto)
- **Color**: Dominant colors with sharp accents, not timid distributed palettes
- **Motion**: High-impact moments, scroll-triggered reveals, surprising hover states
- **Composition**: Asymmetry, overlap, grid-breaking, unexpected layouts
- **Atmosphere**: Gradients, textures, patterns, depth - not flat solid colors

## Phase 2: Design (Code Creation)

Write the implementation holding the vision and Sol simultaneously.

**During coding:**
- Make BOLD choices aligned with the vision
- Match complexity to aesthetic (maximalist = elaborate, minimal = precise)
- Use CSS variables for consistency
- Implement real functionality, not mockups

**Critical rule:** Do NOT evaluate during design. Create first, see second. The sculptor strikes before stepping back.

## Phase 3: Preview (Visual Capture)

After meaningful code changes, capture the current state:

```bash
bun run screenshot
```

This produces `preview.png` at the repo root.

**Read the screenshot using the Read tool** to see what exists, not what you imagine.

**When to capture:**
- After initial implementation complete
- After each significant visual change
- Before declaring any iteration "done"
- When uncertain if a change worked

**Never skip preview.** Coding without seeing is sculpture without eyes.

## Phase 4: Evaluate (Critical Analysis)

With the screenshot visible, evaluate against these criteria:

### Sol Criteria (Aesthetic Quality)

| Criterion | Questions to Ask |
|-----------|------------------|
| **Typography** | Are fonts distinctive? Is hierarchy clear? Is spacing refined? |
| **Color** | Is the palette cohesive? Are accents impactful? Does it match the tone? |
| **Motion** | (Cannot see in screenshot - note for browser testing) |
| **Composition** | Is layout interesting? Is there intentional asymmetry or density? |
| **Atmosphere** | Is there depth? Texture? Or flat and generic? |

### Vision Criteria (Intent Alignment)

| Criterion | Questions to Ask |
|-----------|------------------|
| **Purpose** | Does this serve the user's need? |
| **Tone** | Does it feel like the intended aesthetic? |
| **Differentiator** | Is the memorable element present and prominent? |
| **Craft** | Does this look designed or generated? |

### Detection Criteria (Common Failures)

Watch for these patterns that indicate more work needed:

| Failure Pattern | Signs |
|-----------------|-------|
| **Generic AI aesthetic** | Purple gradients, Inter font, predictable layouts |
| **Timid choices** | Everything equally weighted, nothing bold |
| **Unfinished edges** | Missing hover states, rough transitions, alignment issues |
| **Tone mismatch** | Code is "playful" but vision was "brutalist" |
| **Empty space** | Not intentional negative space, just unfilled areas |

**Report evaluation:**
```markdown
**Visual Design: Evaluation (Iteration N)**

Vision alignment: [High/Medium/Low]
Aesthetic quality: [High/Medium/Low]

What's working:
- [observation]
- [observation]

New issues discovered:
- [issue]: [specific fix]
- [issue]: [specific fix]

Recurring issues (from previous iteration):
- [none / list any that persist]
```

**Track issues across iterations.** Each evaluation must distinguish NEW issues from RECURRING ones. This tracking determines convergence.

## Phase 5: Refine (Targeted Changes)

Based on evaluation, make SPECIFIC changes. Do not rewrite everything.

**Refinement principles:**
- Address the most impactful issue first
- Make one category of change at a time
- Preserve what's working
- If evaluation found major vision misalignment, consider fresh approach

**After refinement, return to Phase 3 (Preview).** The loop continues.

## Exit Conditions

Stop iterating when **convergence is reached** - the evaluation discovers no new issues.

### Convergence Detection

After each evaluation, classify the state:

| State | Condition | Action |
|-------|-----------|--------|
| **New issues found** | Evaluation reveals problems not seen before | Continue to Refine phase |
| **Only recurring issues** | Same issues as previous iteration, refinement didn't resolve them | Stop - these may be intractable or require different approach |
| **No issues found** | All criteria satisfied, nothing to refine | Stop - vision achieved |

**The loop terminates when iteration N discovers nothing that iteration N-1 didn't already reveal.**

This is convergence: the design has reached a stable state where further iteration yields no new insight. Whether that state is "perfect" or "good enough with known limitations" - either way, cycling provides no additional value.

### Minimum Iterations

Always complete at least **2 full iterations** before checking for convergence. The first iteration catches obvious issues; the second reveals issues created by first-round fixes. Convergence before iteration 2 is premature.

**Report completion:**
```markdown
**Visual Design: Converged**

Iterations: [N]
Convergence type: [No issues / Recurring issues only]

Final state:
- Vision alignment: [High/Medium/Low]
- Aesthetic quality: [High/Medium/Low]

Resolved through iteration:
- [issue that was fixed]
- [issue that was fixed]

Known limitations (if recurring issues):
- [issue that persisted, why it may be intractable]

Key aesthetic choices:
- [choice]
- [choice]
```

## The Philosophy

### Why Iteration, Not Single Draft?

The Art synthesizes text where the medium is imagination - words conjure images in minds. Visual design synthesizes pixels where the medium is perception - what you see IS the work. You cannot imagine a gradient into existence; you must render it and observe.

The sculptor analogy: Michelangelo didn't imagine David complete and strike once. He saw, struck, saw the new form, struck again. Each observation revealed the next action.

### Why Mandatory Screenshots?

Code is not design. Code is instructions for design. The browser renders; the screenshot captures; the eye evaluates. Without the screenshot step, you're adjusting instructions blindly, hoping the render matches imagination.

**Common failure mode:** Agent writes CSS, declares it "clean and modern," never sees the cramped text, clashing colors, broken layout that actually rendered.

### Why Separate Design from Evaluate?

Creation and criticism use different cognitive modes. Attempting both simultaneously produces timid work - every bold choice immediately questioned, every risk pre-emptively smoothed.

Design with full commitment to the vision. Then step back and evaluate with full honesty about reality. The tension between these phases drives refinement.

### Why Report at Each Phase?

Visibility creates accountability. Reporting forces explicit evaluation rather than vague "looks good." It also gives the user insight into the process and opportunities to redirect.

## Common Mistakes

| Mistake | Reality |
|---------|---------|
| "The CSS looks clean" | Code appearance ≠ rendered appearance. Screenshot. |
| "I'll check the screenshot later" | Design without perception is blind sculpture. |
| "Let me rewrite everything" | Refinement is targeted. Preserve what works. |
| "This is good enough" | Evaluate against criteria, not exhaustion. |
| "I'll add bold choices later" | Timid foundations don't become bold through iteration. |
| "The vision is flexible" | Flexible visions produce generic results. Commit. |

## Integration with Other Skills

**Invokes:**
- `frontend-design` (Sol) - Loaded in Phase 1 for aesthetic knowledge
- `screenshot-preview` (Luna) - Used in Phase 3 for visual capture

**May follow:**
- Project setup, component scaffolding
- User providing design requirements

**May precede:**
- Deployment, PR creation
- User review and feedback

## Quick Reference

```
1. VISION      - Purpose, Tone, Differentiator, Constraints
2. DESIGN      - Code holding Sol + Vision (no self-evaluation)
3. PREVIEW     - bun run screenshot → Read preview.png
4. EVALUATE    - Criteria check, distinguish NEW vs RECURRING issues
5. CONVERGED?  - No new issues? → Exit. New issues? → Continue.
6. REFINE      - Targeted changes for new issues only
7. LOOP        - Return to step 3 (minimum 2 iterations)
8. REPORT      - Convergence type, resolved issues, known limitations
```

---

*Sol knows the forms. Luna shows the reality.*
*The iteration is the refinement.*
*See what you've made, then make what you see.*
