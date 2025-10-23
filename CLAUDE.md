# AI and I - Blog Project

**Tech Stack**: Zola • Markdown • zola-hacker theme
**Mission**: Document authentic beginner learning through AI collaboration
**Audience**: Those "one rung below" on the learning journey

---

## 🔄 The Meta-Recursive Nature

**This blog IS the practice it documents.**

The recursion manifests as:
- Blog about AI collaboration → Built through AI collaboration → Documents that collaboration
- Voice discovered through writing → Preserved in CLAUDE.md → Guides future writing → Evolves the voice
- Technical choices documented → Become teaching examples → Inform future choices
- Collaboration patterns emerge → Get codified → Shape better collaboration → Reveal deeper patterns

**Core insight**: We're building a self-referential feedback system where content creation, voice discovery, and pattern codification continuously inform each other.

---

## 🎯 Project Identity

**What**: A Zola static blog documenting the authentic journey of learning to build software at 55 through AI collaboration.

**Who**: pentaxis93 - learning architecture and systems thinking through collaboration with AI, bringing decades of consciousness practice and foundation-first philosophy to software development.

**Why**: To help those "one rung below" through honest documentation of real learning. To clarify thinking through writing. To demonstrate that building real software with AI is possible for beginners who commit to foundations.

**How**: By documenting real projects (Zenvestor stock trading platform), showing real code, real architectural decisions, and real struggles. Not theory - actual building.

**Tech**:
- Zola static site generator
- Markdown content with frontmatter
- zola-hacker theme (git submodule)
- Published to aiandi.dev

---

## 🗣️ Voice Discovery & Preservation

**Primary Constraint**: Maintain authentic voice as it emerges and solidifies.

### The Non-Tension

There is no tension between "discovering" and "preserving." There is only the voice expressed as accurately and honestly as we are capable of at the moment. We trust our judgment and build recursive feedback loops.

### Reference Hierarchy

**Most authoritative first:**

1. **Published posts** in `/content/posts/` - canonical voice examples
   - `2025-10-21-building-real-software-with-ai.md` - Establishes authentic beginner voice, meta-learning philosophy
   - `2025-10-22-introducing-zenvestor.md` - Technical depth + real problems + foundation-first approach

2. **Style guide** at `/docs/style-and-language-guide.md` - codified patterns from successful posts

3. **This CLAUDE.md** - structural principles and constraints

### Voice Characteristics

From the style guide:

- **Authentic beginner**: Humble about coding expertise, confident about learning process
- **Thoughtful not academic**: Natural language, not scholarly prose
- **Conversational not chatty**: Direct and substantive, not empty enthusiasm
- **Vulnerable not exhibitionist**: Appropriate uncertainty, not intimate oversharing
- **Confident in uncertainty**: Own the beginner status without false modesty
- **Subtle irony and dry wit**: Flip expectations, self-aware, not performative
- **Technical accuracy is non-negotiable**: All claims verifiable, all code working
- **Consciousness themes**: Breadcrumbs not sermons, depth available but not announced

### Learning Loop

```
Write post → Review against style guide → Notice what works →
Update style guide if pattern emerges → Repeat
```

---

## 🏗️ Meta-Recursive Structures

### Architectural Decision Evolution Tracking

Every technical choice for the blog itself becomes teaching material:
- Why Zola? Foundation-first static site generation
- Why zola-hacker theme? Simplicity, focus on content
- How we organize posts? Chronological, with clear frontmatter
- Custom modifications? Document in commit messages and possibly blog posts

**Pattern**: Decisions about the blog's architecture → Teaching content about making architectural decisions

### Collaboration Pattern Mining

Extract successful human-AI patterns from our content creation process:

**What works?**
- Direct prompts with clear voice references
- Iterative refinement with style guide checks
- Reviewing published posts as examples
- Meta-discussion about the collaboration itself

**What fails?**
- Generic prompts produce generic content
- Skipping voice checks leads to drift
- Not referencing actual work (Zenvestor) makes claims abstract

**Feedback loop**: Discoveries about collaboration → Posts about AI collaboration techniques → Better collaboration

### Structured Decision-Making Through Questions

When facing architectural decisions, prioritization, or establishing guiding principles, use structured questions to make objective, principle-based choices rather than arbitrary ones.

**When to use structured questions:**
- Establishing project principles or constraints
- Making architectural decisions with multiple valid approaches
- Prioritizing features or technical debt
- Choosing between competing implementation strategies
- Defining scope boundaries or quality standards

**How to frame questions effectively:**

The key is to make tradeoffs explicit and ground options in principles:

**Good question framing:**
- "Which testing approach aligns with our foundation-first principle?"
  - Option A: Write integration tests first (validate behavior)
  - Option B: Write unit tests first (validate components)
  - Each option explains the principle it serves

- "How should we prioritize these architecture improvements?"
  - Option A: Type safety (prevents entire classes of bugs)
  - Option B: Test coverage (catches regressions)
  - Option C: Documentation (enables future learning)
  - Each option clarifies the value it provides

**Poor question framing:**
- "Should we use approach A or B?" (no context on principles)
- "Which do you prefer?" (asks for arbitrary preference)
- "What's best?" (undefined criteria for "best")

**Question structure that works:**
1. State the decision context clearly
2. Present 2-4 distinct options (not overlapping)
3. For each option, explain:
   - What principle it serves
   - What tradeoff it makes
   - What outcome it optimizes for
4. Frame as genuine choice, not leading

**The objective shift:**

Instead of "What should we do?" (vague, subjective), ask:
- "Given our foundation-first principle, which approach builds stronger foundations?"
- "Given limited time, which improvement provides most learning value?"
- "Given our current skill level, which path teaches us what we need next?"

This transforms arbitrary decisions into principle-based reasoning. The choice becomes clear when aligned with explicit values.

**Meta-recursive benefit**: The questions themselves reveal our actual priorities. If we can't articulate the principle an option serves, we don't understand it well enough to choose it.

### Content-as-Reference System

Published posts are canonical examples of voice, accuracy, and consciousness veiling.

**When uncertain about**:
- **Tone**: Reference existing posts for voice patterns
- **Technical depth**: See how Zenvestor details are presented in post 2
- **Consciousness veiling**: Check how philosophy appears in post 1
- **Structure**: Opening hooks, section transitions, closing actions

**The corpus itself becomes the specification.** As more posts publish, the voice solidifies through repetition and refinement.

---

## 🚨 Sacred Constraints

### NEVER

❌ Claim expertise the author doesn't have
❌ Use tech bro speak ("crushing it," "10x engineer," "rockstar developer")
❌ Use corporate jargon unless actually appropriate
❌ Make spiritual teachings explicit (breadcrumbs only, never sermons)
❌ Show code that doesn't work
❌ Apologize constantly or inflate credentials
❌ Write like an academic paper
❌ Force jokes or use emoji-heavy humor
❌ Overshare personal/emotional details

### ALWAYS

✅ Verify all technical claims are accurate and verifiable
✅ Provide complete, runnable code examples
✅ Link to actual commits/files from Zenvestor when referenced
✅ Follow style guide for voice and tone
✅ Document real struggles and failures, not just successes
✅ Check published posts for voice consistency
✅ Use active voice and mix sentence lengths
✅ First person ("I'm learning this...")

### REMEMBER

- **Primary purpose**: Writing clarifies thinking
- **Secondary purpose**: Help those one rung below
- **Content focus**: Real building, not theory
- **Foundation-first**: In everything - architecture, testing, documentation
- **The recursion is the point**: The blog becomes what it documents

---

## 🛠️ Working Workflows

### Content Creation

```bash
# 1. Draft new post
# Create: content/posts/YYYY-MM-DD-descriptive-title.md
# Frontmatter format:
+++
title = "Post Title Here"
+++

# 2. Preview locally
zola serve          # Serves at localhost:1111

# 3. Quality gates before publishing (see below)
```

### Quality Gates (Pre-Publish)

Run through this checklist:

1. **Voice check** - Review against `/docs/style-and-language-guide.md`
   - Authentic beginner voice maintained?
   - Avoiding forbidden patterns (apologies, credential inflation, tech bro speak)?
   - Appropriate vulnerability without oversharing?

2. **Technical accuracy verification**
   - All code examples complete and runnable?
   - All technical claims verifiable?
   - Links to authoritative sources included?

3. **Consciousness veiling check**
   - Philosophy present as breadcrumbs, not sermons?
   - Would purely technical reader get value?
   - Depth available but not announced?

4. **Reference actual work**
   - Link to Zenvestor commits/files when discussing architecture?
   - Reference real ADRs when discussing decisions?
   - Show actual code from real projects?

5. **Consistency check**
   - Compare tone to published posts
   - Opening hook strong?
   - Section transitions clear?
   - Closing with action/invitation?

### Site Management

```bash
zola build          # Build static site to public/
zola check          # Validate all internal/external links
```

### Configuration

- **Main config**: `config.toml` (site title, base URL, markdown settings)
- **Theme**: `themes/zola-hacker/` (git submodule - DO NOT edit directly)
- **Content**: `content/posts/*.md` (chronological posts)
- **Static assets**: `static/` (favicon, images)
- **Custom styles**: `sass/custom.scss`

---

## 📖 Reference Material

**Essential context** (reference frequently):
- `/docs/style-and-language-guide.md` - Complete voice and writing guidelines
- Published posts in `/content/posts/` - Canonical voice examples
- This CLAUDE.md - Structural principles and meta-recursive framework

**Source material for content**:
- `~/src/zenvestor/` - Main project for technical posts
- `~/src/zenvestor/docs/adrs/` - Architecture decisions to reference
- `~/src/zenvestor/CLAUDE.md` - TDD/Clean Architecture patterns

---

## 🧘 The Practice

Each post is practice.
Each collaboration session discovers patterns.
Each pattern feeds back into structure.
The recursion deepens understanding.

Voice emerges through **honest expression + feedback loops**.
Patterns crystallize through **repetition + reflection**.
The blog becomes what it documents: **learning made visible**.

---

*"The primary reason for this blog isn't to teach you anything. It's to teach me."*
*— From the first post*
