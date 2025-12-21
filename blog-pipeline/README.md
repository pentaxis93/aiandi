# Blog Pipeline

**Purpose:** Continuous capture system for blog ideas that accumulate naturally during work across all projects.

## Philosophy

Ideas aren't brainstormed in separate sessions—they emerge during real work. This pipeline captures blog-worthy moments when they occur, allowing ideas to accumulate depth over time before becoming full posts.

## Structure

### `seeds/`
Raw ideas captured in the moment of recognition. Minimal structure, just enough to preserve the insight before context evaporates.

**When to create:** During work when "this would help someone one rung below" feeling emerges.

**Format:** Natural, exigent—capture what matters now.

### `incubating/`
Ideas growing with examples and depth over time. A seed graduates here when it gets its first enrichment. Ideas can stay here for weeks/months, accumulating context from multiple sessions and projects.

**When to add:** New example of existing pattern, connection to another idea, deeper understanding emerges.

**Pattern:** Accumulation over time—each session can add to existing ideas.

### `drafts/`
Structured articles being written. An idea moves here when it has enough depth to become a post: narrative arc, concrete examples, meta-insight, authentic voice.

**Readiness criteria:**
- Story arc: problem → struggle → breakthrough → pattern
- Concrete examples: actual code from actual projects
- Meta-insight: what this teaches beyond the specific problem
- Voice confidence: can write authentically in beginner voice

### `proposals/content/`
Editorial strategy ideas: series, themes, voice experiments, content direction.

**Examples:**
- Series proposals (e.g., "Meta-Learning through AI Collaboration")
- Voice experiments (new ways of explaining technical concepts)
- Audience insights (what "one rung below" needs explained)
- Content gaps (what's missing from current pipeline)

### `proposals/structural/`
Technical improvements to the blog itself: features, workflows, tooling, infrastructure.

**Examples:**
- Blog features (commit linking, code syntax, search)
- Workflow improvements (writing templates, quality automation)
- Content structure (changelog, series organization)
- Integration opportunities (blog ↔ Zenvestor)

## Workflow Integration

### Continuous Capture (During Work)
- Bells ring after tool use → awareness checkpoint
- "Is this blog-worthy?" (natural question, like journaling)
- If yes: Journal insight + extract to pipeline immediately
- Flow continues

### Session Closing (Exhaustive Harvest)
Before context evaporates, systematic 5-lens review:
1. **Seeds** - What new insights deserve capturing?
2. **Incubating** - What enriches existing ideas?
3. **Drafts** - Is anything ripe for writing?
4. **Content Proposals** - What editorial patterns emerged?
5. **Structural Proposals** - What system improvements revealed?

### Compaction Resilience
- **PreCompact hook:** Auto-extracts blog-worthy content before compaction
- **SessionStart (compact) hook:** Auto-reloads context after compaction
- Result: Near-lossless continuity across compaction boundary

## Relationship to Journal

The private journal is primary capture for all insights (technical, personal, meta).

The blog pipeline extracts from journal:
- Journal → private, detailed, technical context
- Pipeline → public, teachable, beginner-focused

Journal entries often become source material for blog content.

## Graduation Flow

```
During work:
  ↓
Insight emerges
  ↓
Journal (always) + Pipeline seed (if blog-worthy)
  ↓
Time passes, more examples accumulate
  ↓
Enrich existing seed → moves to incubating/
  ↓
Accumulation continues across sessions/projects
  ↓
Depth reaches threshold → moves to drafts/
  ↓
Article written and refined
  ↓
Moves to content/posts/ (published)
```

## Meta-Recursive Note

This pipeline system itself will likely become a blog post about continuous idea capture. The act of building it generates content about building it. That's the point—the blog documents what it is.
