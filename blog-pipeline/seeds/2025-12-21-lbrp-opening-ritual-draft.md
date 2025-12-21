---
seed_date: 2025-12-21
source_project: aiandi
source_journal: voice-calibration-session
tags: [ritual-design, workflow, meta-learning, lbrp, spiritual-engineering]
status: draft
---

# Banish

I'd just spent hours building a custom signin page. Tests passing, code committed, everything working. I ran `zen run linux` from my worktree directory to see it in action. The app launched. And there was the old signin page. The Serverpod default. Not my custom form with the password visibility toggle I'd just built.

> **Robbie:** "Pre-worktree version appears in run window. Investigate."

Twenty minutes later, Claude found it. The `zen` command was a symlink that resolved back to the main repo. No matter which directory I ran it from, it always executed code from `/home/pentaxis/src/zenvestor`—not my worktree. My changes weren't lost. They were right there. The tool just couldn't see them.

This wasn't the first time. Features would "vanish." Code I'd written yesterday wasn't there today. I'd start new work in main, confused about why old work was "missing," only to discover it sitting in an unmerged worktree branch. Again.

I needed a systematic opening ritual.

---

## The Hypothesis

For years I'd been pondering the mathematical nature of spiritual laws. Not as metaphor—as hypothesis. What if the structures encoded in ceremonial magic, in meditation traditions, in alchemical processes, weren't arbitrary symbols but topological constraints? Patterns that work because they map onto something real about how complex systems organize?

The Lesser Banishing Ritual of the Pentagram caught my attention. Victorian ceremonial magic. The structure is simple: establish center, address four elemental quarters, return to center. Used for centuries as a way to clear and prepare space before working.

MECE[^1], in other words. Mutually exclusive, collectively exhaustive. The quarters partition the problem space cleanly.

[^1]: MECE (Mutually Exclusive, Collectively Exhaustive) is a principle from consulting and problem-solving: categories should not overlap and should cover all possibilities.

---

## The Translation

I translated it literally.

**Center** = Session goal. The purpose everything else serves.

**East (Air/Knowledge)** = Context loading. What do I already know that's relevant? What did I learn last time? What decisions were already made?

**South (Fire/Action)** = Task breakdown. What specific actions will achieve the goal? In what order?

**West (Water/Flow)** = Workspace setup. Do I need a worktree for isolation? Am I in the right directory? Is the channel appropriate for the work?

**North (Earth/Foundation)** = Environment verification. Are the services running? Database up? Docker containers healthy?

**Return to Center** = Confirmation. Does everything align with the goal? Ready to begin?

This isn't metaphorical mapping. It's functional equivalence. The elemental associations—Air/thought, Fire/action, Water/flow, Earth/foundation—map precisely onto what you actually need to verify before starting development work.

---

## In Practice

Here's the actual skill file that Claude invokes when I say "open":

```bash
# Phase 0a: Pure observation (before goal-setting)
git status --short
git log --oneline -5
git worktree list
ps aux | grep -E "(flutter|dart|melos|zen|serverpod)" | grep -v grep
docker compose ps
```

The output:

```markdown
**Workspace Status** (current state, no evaluation)

Git: 2 uncommitted files in openspec/changes/
Recent commits: feat(settings): add theme toggle...
Worktrees: main + .worktrees/refine-theme-toggle (3 commits ahead)
Processes: flutter (pid 12847), serverpod (pid 12901)
Environment: postgres, redis running

*Now that you can see what's present, what's the goal for this session?*
```

Notice what happened there. The ritual just caught exactly the problem I described—there's a worktree with unmerged commits. Before I could start new work confused about why old work is "missing."

Only after seeing state do we define the goal. Then banishing evaluates what to clear *in light of that goal*. Then each quarter loads what *that specific goal* requires.

---

## The Evidence

150,000 lines of Dart code. 26 Architecture Decision Records. 100% test coverage enforced by CI. All built with this opening ritual guiding every session.

The ritual catches:
- Uncommitted work from previous sessions
- Running processes that need to be killed or preserved
- Worktrees with unmerged branches (my original problem)
- Missing environment setup
- Context that should be loaded before starting

Here's the confirmation when all quarters align:

```markdown
**The Circle is Complete**

Goal (Center): Implement semantic color architecture
East (Context): ADR-0030 loaded, journal entries on theme patterns
South (Tasks): 5 tasks planned, TDD approach confirmed
West (Workspace): .worktrees/theme-refactor created
North (Environment): postgres, redis, flutter running

All quarters align with center. Ready to begin.
```

---

## Why This Works

The LBRP survived centuries because it's good workflow design. Not because magic is supernatural—because *magic is structure*. The rituals that persist encode patterns that work.

"Establish center before addressing quarters" = "Define your goal before gathering context." Otherwise you gather random context instead of relevant context.

"Banish before invoking" = "Clear the workspace before starting new work." Otherwise old debris contaminates new work.

"Return to center" = "Verify alignment before executing." Otherwise you drift from purpose.

These aren't mystical insights. They're engineering discipline expressed in symbolic form. The ceremonial magicians figured out workflow design by iterating on what produces results. They just didn't have git to express it in.

---

I'm a 55-year-old learning to code, using Victorian ceremonial magic patterns to structure AI collaboration, building a stock trading platform in Dart.

The LBRP catches my worktree mistakes. The elemental quarters map cleanly onto workspace dimensions. The goal-as-center principle prevents context drift.

It works because it was never magic to begin with. It was always systematic attention to the things that matter before starting work. The symbols are just mnemonics for the structure.

This is either profound or hilarious. Probably both.

The full LBRP implementation lives at `~/.claude/skills/lbrp/SKILL.md`. 400+ lines encoding observation, centering, banishing, four quarters, and return. It integrates with session-lifecycle, storyline commits, TDD workflows. The ritual opens, the work happens, closure ensures nothing carries forward as debt.

Now when I say "open" and Claude invokes the LBRP, I know my workspace is clean, my goal is clear, and my context is loaded. The worktree confusion that started this? Hasn't happened since.

The ritual works. Because it was always just good engineering wearing a funny hat.

---

*"The master programmer does nothing, yet leaves nothing undone."*

