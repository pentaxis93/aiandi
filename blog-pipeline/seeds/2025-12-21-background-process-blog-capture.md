---
seed_date: 2025-12-21
source_project: aiandi
tags: [meta-learning, workflow, automation, background-process]
status: seed
---

# Background Processes for Continuous Idea Capture

## Initial Spark

I needed a way to capture blog ideas without breaking flow during actual coding work. Kept thinking "I should write about this" then losing the insight by session end.

The journal system already solved this - it captures continuously during work, not in separate "reflection time." Could the same pattern work for blog ideas?

Turns out it can. I built a pipeline that lets ideas accumulate naturally: seeds when they first emerge, then enrichment over time as I encounter related examples across projects.

## Context

I've been using the private journal for weeks. It works because:
- Questions pop up naturally after each action ("What did this reveal?")
- I capture insights when they're fresh, not hours later
- Ideas accumulate across sessions and become searchable
- Hooks prevent context loss during compaction

That pattern felt right for blog ideas too - capture during work, let depth accumulate over time, don't force "brainstorming sessions."

So I built a parallel structure for aiandi: seeds (raw ideas) → incubating (accumulating examples) → drafts (ready to write) → posts (published).

## Why Blog-Worthy

This would have helped me a month ago when I was trying to "schedule blogging time" and getting nothing. The shift from periodic to continuous capture made blogging feel possible.

Someone one rung below might benefit from:
- Seeing that capture systems can integrate with work (not separate from it)
- Learning that hooks can preserve context across compaction (I didn't know this existed)
- Understanding how accumulation works (seeds get richer over weeks, not forced in one session)
- Recognizing meta-recursive opportunities (building the capture system became capturable content)

Also shows foundation-first thinking: build the infrastructure before you urgently need it. The pipeline exists now; ideas will accumulate naturally as I work on Zenvestor, chezmoi, or anything else.

## Technical Detail

**Structure created:**
```
/aiandi/blog-pipeline/
  ├── seeds/          (raw ideas captured in moment)
  ├── incubating/     (ideas accumulating depth over time)
  ├── drafts/         (structured articles being written)
  └── proposals/      (meta-improvements)
      ├── content/    (editorial strategy)
      └── structural/ (technical features)
```

**Hooks installed:**
- `PreCompact` - extracts blog-worthy content before compaction
- `SessionStart (compact matcher)` - reloads context after compaction

**Skill created:** `~/.claude/skills/blog-capture.md` (504 lines)
- User-level (works from any project)
- Contributes to single aiandi pipeline
- Three modes: continuous, closing, compaction

**Commits:** (will reference when published)
- Directory structure + README
- Hook scripts
- Skill document
- Settings.json configuration

## Potential Angles

**Technical deep-dive:**
- How PreCompact hooks work
- Hook-based context preservation
- Designing user-level skills that contribute to project-specific structure

**Meta-learning:**
- Background processes as learning infrastructure
- Continuous capture vs. periodic brainstorming
- Aligned self-evolution applied to content creation

**Beginner perspective:**
- "I built a system that captures ideas while I build other systems"
- Shows foundation-first thinking (build pipeline infrastructure early)
- Demonstrates meta-recursive awareness (system becomes its own content)

**Workflow design:**
- Evocation vs. enforcement (questions vs. commands)
- Integration vs. bolt-on (part of flow vs. interrupting flow)
- Natural checkpoints (bells, awareness, capture)

## Open Questions

- Too meta for target audience? (might need more concrete framing)
- Should focus on the hooks (technical) or the pattern (conceptual)?
- How much of the actual skill content to show vs. describe?
- Is this one post or multiple? (hooks, pipeline, workflow design)

## Meta-Observation

Here's what's interesting: this seed exists because the system worked. I was building the capture pipeline and thought "wait, I should capture this" - so I did, using the pipeline I'd just created.

That's the meta-recursion in action. Building a thing generates insights about building things. The blog documents learning through building, and documenting the blog is itself learning through building.

I'm still figuring out what makes a "good" blog post versus a mediocre one. But at least now I have a place to capture ideas when they emerge, and a structure for letting them develop over time. That's progress.
