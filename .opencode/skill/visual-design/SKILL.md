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

### Project-Specific Context

Check for project constraints that affect design decisions. Look in:
- `DESIGN.md` - may contain existing design context
- `AGENTS.md` - may contain project-specific rules
- Ask the user if unclear

**Common context that changes everything:**
- **Image-light/no-image sites**: Typography and layout must carry all visual interest. No hero images to lean on. Decorative placeholders will look like missing content.
- **Content-heavy sites**: Reading experience trumps visual flair. Line length, contrast, and typography matter more than effects.
- **Portfolio/showcase sites**: Images are the content. Design should frame, not compete.
- **App-like interfaces**: Functionality and clarity over editorial aesthetics.

**Report to user:**
```markdown
**Visual Design: Vision Established**

Purpose: [answer]
Tone: [answer]  
Differentiator: [answer]
Constraints: [answer]
Project context: [any specific constraints discovered]

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

With the screenshot visible, evaluate against these criteria.

### THE CRITICAL DISCIPLINE: See What Is, Not What You Intended

**This is the hardest part of visual design and where agents most commonly fail.**

You wrote the code. You know what you *meant* to create. When you look at the screenshot, your brain will try to see your intention rather than the reality. You will pattern-match to your mental model and declare success prematurely.

**You must actively fight this tendency.**

Before evaluating against criteria, perform this exercise:

1. **Describe the screenshot as if you didn't write the code.** What would a stranger see? Not "the hero section with gradient orbs" but "a dark rectangle with some purple/teal coloring in the corner, containing white text"

2. **Look for what's actually there, not what should be there:**
   - Where are the actual boundaries and containers?
   - What is the actual spacing between elements (cramped? vast dead zones?)
   - What elements are actually visible vs. what you think you added?
   - Are there elements you DON'T recognize?

3. **Ask the brutal questions:**
   - "If I saw this site for the first time, would I think it's broken?"
   - "Does this look like a finished product or a work-in-progress?"
   - "What would a designer whose opinion I respect say about this?"
   - "Is this actually distinctive, or am I just proud of my code?"

4. **Identify the largest visual problem.** Not a list of small issues - what is the ONE thing most wrong with this screenshot? There is always something. If you can't find it, you're not looking hard enough.

### Spatial Analysis (Look First)

Before any aesthetic judgment, analyze the raw composition:

| Check | What to Look For |
|-------|------------------|
| **Containers** | Are elements trapped in unexpected boxes? Are boundaries where you intended? |
| **Dead zones** | Any large empty areas that serve no purpose? Accidental gaps? |
| **Clipping** | Are elements cut off, hidden, or overflowing unexpectedly? |
| **Alignment** | Do elements that should align actually align? |
| **Visual weight** | Is the page balanced or lopsided? Top-heavy? |
| **Orphans** | Any elements floating alone, disconnected from related content? |

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
| **Generic AI aesthetic** | Purple gradients, predictable card layouts, looks like every other AI-generated site |
| **Timid choices** | Everything equally weighted, nothing bold, "safe" decisions everywhere |
| **Unfinished edges** | Missing hover states, rough transitions, alignment issues |
| **Tone mismatch** | Code is "playful" but vision was "brutalist" |
| **Dead space** | Large empty areas that aren't intentional negative space |
| **Trapped elements** | Content boxed/contained when it should breathe or bleed |
| **Template feel** | Looks like a theme with content swapped in, not a custom design |
| **Placeholder artifacts** | Icons, images, or elements that read as "something should go here" |
| **Context mismatch** | Image placeholders on an image-light site; heavy visuals on a text-focused site; decoration fighting content |

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

### Why Screenshots Aren't Enough

Having a screenshot doesn't guarantee you'll see it clearly. The screenshot is necessary but not sufficient.

**The deeper failure mode:** Agent takes screenshot, looks at it, but sees their *intention* instead of the *reality*. They wrote code for "an expansive hero section" so they see an expansive hero section - even when the screenshot shows a cramped box with dead space around it.

The screenshot gives you access to reality. But you must actively choose to see reality over your mental model. This requires disciplined self-suspicion during evaluation. Assume your first impression ("looks good!") is wrong. Look for what's broken. Describe what a stranger would see, not what you meant to create.

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

### The Confirmation Trap (Critical)

The most dangerous failure mode is **evaluating your intention instead of your output.**

You write code intending to create "an expansive hero with ambient gradient orbs." You take a screenshot. You look at the screenshot and think "yes, there's my expansive hero with ambient gradient orbs" - but what's ACTUALLY there is a constrained box with clipped gradients and dead space below it.

**This happens because:**
- You know what you meant to create
- You see evidence of your intentions (some gradients, some text)
- Your brain fills in the gaps and declares success
- You move on without truly seeing the problems

**Signs you're in the confirmation trap:**
- Your evaluation mostly lists things "working" with few/minor issues
- Issues you find are small refinements, not structural problems  
- You reach "convergence" in 2-3 iterations
- You dismiss anomalies as external factors ("browser extension", "screenshot timing")
- Your critique uses the same words as your vision statement

**How to escape:**
- Describe the screenshot to yourself as if you're seeing someone else's work
- Actively look for the WORST thing about the design, not confirmation it's good
- Ask: "What would make me mass this design if I were reviewing a junior designer's work?"
- If you can't find significant problems, you're not looking hard enough - there are ALWAYS problems
- When in doubt, assume you're wrong and look again

## Living Design Documentation

**Document as you build, not after.** Create a `DESIGN.md` file at the project root that captures decisions in real-time. This document serves multiple purposes:

1. **Accelerates your own work** - Referring back to documented rationale prevents drift
2. **Enables handoff** - Future agents or developers can understand the "why"
3. **Forces clarity** - Writing decisions crystallizes thinking
4. **Tracks iteration** - The log section shows what was tried and learned

### DESIGN.md Structure

```markdown
# [Project] - Design System

## Vision
- Aesthetic tone (one phrase)
- Differentiator (the memorable element)
- Core feeling (the emotional target)

## Design Tokens
Document each token category with:
- The values
- WHY those values (rationale)
- How they connect to the vision

### Colors
[palette with reasoning]

### Typography  
[fonts with role explanations]

### Spacing & Radius
[system with philosophy]

### Motion
[easing curves and animation principles]

## Component Patterns
For each major component:
- Structure (what it contains)
- Key design decisions
- Interaction states
- Connection to vision

## File Structure
Map of where things live

## Iteration Log
### Iteration N
- What was completed
- What was evaluated
- Issues found
- Decisions made

## Implementation Notes for Future Agents
- How to add new components consistently
- Common patterns to reuse
- Pitfalls to avoid
```

### When to Update DESIGN.md

- **Phase 1 (Vision)**: Create the file, write Vision section
- **Phase 2 (Design)**: Document tokens and patterns as you implement them
- **Phase 4 (Evaluate)**: Add to Iteration Log
- **Phase 5 (Refine)**: Update any decisions that changed

### The Documentation Mindset

Documentation written during design captures the *living rationale* - why this blue, why this font, why this animation curve. Documentation written after captures only the *what*, losing the reasoning that would help future agents make consistent decisions.

**Good design documentation answers:** "If I need to add a new component, what choices should I make to fit this system?"

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
                 → Create DESIGN.md with Vision section
2. DESIGN      - Code holding Sol + Vision (no self-evaluation)
                 → Document tokens and patterns in DESIGN.md as you build
3. PREVIEW     - bun run screenshot → Read preview.png
4. EVALUATE    - ***CRITICAL: See reality, not intention***
                 → First: Describe what a stranger would see
                 → Then: Find the WORST thing about the design
                 → Then: Criteria check, distinguish NEW vs RECURRING issues
                 → Add to Iteration Log in DESIGN.md
5. CONVERGED?  - No new issues? → Exit. New issues? → Continue.
6. REFINE      - Targeted changes for new issues only
                 → Update DESIGN.md if decisions change
7. LOOP        - Return to step 3 (minimum 2 iterations)
8. REPORT      - Convergence type, resolved issues, known limitations
```

### Pre-Evaluation Checklist

Before declaring anything "working" or moving toward convergence, answer these:

- [ ] Have I described the screenshot as if I didn't write the code?
- [ ] Have I identified the single biggest problem (there is always one)?
- [ ] Am I finding real structural issues, or just small tweaks?
- [ ] Would a critical designer approve this, or just nod politely?
- [ ] Does this actually look distinctive, or just "not broken"?
- [ ] Am I rushing to convergence because I'm tired of iterating?

---

*Sol knows the forms. Luna shows the reality.*
*The iteration is the refinement.*
*See what you've made, then make what you see.*
