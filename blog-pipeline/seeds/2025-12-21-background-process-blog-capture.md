---
seed_date: 2025-12-21
source_project: aiandi
tags: [meta-learning, workflow, automation, background-process]
status: seed
---

# Background Processes for Continuous Idea Capture

## Initial Spark

We built a system for capturing blog ideas that mirrors how the private journal works - continuous accumulation during actual work, not separate brainstorming sessions.

The insight: ideas shouldn't be "generated" in dedicated sessions. They emerge naturally during real building. The system should capture them when they occur and let them accumulate depth over time.

## Context

Working in aiandi blog project, we noticed the private journal's elegance:
- Integrated checkpoints (bells after tool use)
- Evocative questions ("What did this reveal?") not commands
- Continuous capture during flow, not interrupting it
- Searchable accumulation across sessions
- Compaction resilience (hooks preserve and reload context)

Applied that pattern to blog content pipeline.

## Why Blog-Worthy

Shows several teachable patterns:
1. **Background processes** - continuous accumulation vs. periodic generation
2. **Workflow integration** - evocation not enforcement, part of flow not separate from it
3. **Compaction resilience** - using hooks to preserve context across boundaries
4. **Meta-recursion** - building the system generates content about building systems
5. **Foundation-first infrastructure** - build the pipeline before you need it

Someone one rung below would benefit from:
- Seeing how to design continuous capture systems
- Understanding evocation vs. enforcement in workflow design
- Learning about hook-based preservation strategies
- Recognizing meta-recursive opportunities

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

This seed itself demonstrates the system:
- Captured during the work of building the system
- Natural format (wrote what mattered, ignored rigid structure)
- Will accumulate depth if more insights emerge during usage
- Already has concrete code to reference
- Meta-recursive (seed about seed system)

The background process is working. This insight was captured in flow, not in separate "blogging time."
