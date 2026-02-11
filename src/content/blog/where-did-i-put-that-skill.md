---
title: "Where Did I Put That Skill?"
pubDate: 2026-02-10
source_session: "ses_3b8df902affenL4q6QjMCOF4EP"
type: "essay"
status: "published"
tags: ["skills", "agents", "prompting", "tooling"]
---

I kept losing skills. Not forgetting how to do things. Losing the files that told my AI agents how to do things.

Skills are markdown documents. Each one encodes a specific capability: how to write a commit message, how to review a pull request, how to design a page layout. Each skill is a folder containing a `SKILL.md` with YAML frontmatter and markdown instructions:

```yaml
---
name: git-commit
description: >-
  Create conventional commits with scope and body.
---

Instructions the agent receives when it loads this skill.
```

When an agent loads a skill, that skill becomes its intelligence for the task at hand. The agent follows the skill exactly, and that precision is the whole point.

When skills first came out, I thought they were just a way to avoid repeating myself. I'd write one when I noticed the same instructions going to Claude for the third time, and it would live in whichever directory seemed right at the time. Global config, project folder, a symlink to somewhere else. The system worked because there were five skills and I remembered where they all were.

Then agents entered the picture, and skills went from "occasional convenience" to "literally everything." Every workflow I wanted an agent to execute needed a skill. The count climbed past ten, past twenty. And the filing system that had been "fine" quietly became a disaster.

## The Mess

The problem wasn't that skills were hard to write. The problem was finding them again.

Both OpenCode and Claude Code discover skills by scanning specific directories. Claude Code looks in `~/.claude/skills/` for personal skills and `.claude/skills/` inside each project. OpenCode scans all of those plus `~/.config/opencode/skills/`, `~/.agents/skills/`, `.opencode/skills/`, and `.agents/skills/` at both global and project level. Six directories, two scopes, and that's before you add enterprise policies or plugins.

I had skills spattered across global directories, project directories, and symlinks connecting them in ways I'd forget within a week. Some were duplicated. Some were orphaned. Some I knew existed but couldn't find.

The feeling was specific and infuriating: "I have a problem, and I know I built a terrific skill for it at some point in the past." Then twenty minutes of searching through directories, `find` commands, and half-remembered symlinks.

## What Didn't Work

My first instinct was to treat this as a placement problem. If skills are hard to find, put them all in one place. I moved everything to the global config directory.

That didn't help. Both tools still needed skills in their specific discovery paths. So I symlinked from the central location to each discovery path. Now I had one source of truth but had to manually track which symlinks pointed where. When I added a new skill, I had to remember to create symlinks in three global directories and potentially several project directories. I forgot within a week.

Next attempt: per-project skill directories, with symlinks back to a shared collection. This inverted the tracking problem without solving it. I still needed to know which level each skill lived at, and the answer kept changing as projects evolved.

Every ad hoc reorganization added another layer of "where did I put that?" on top of the original "where did I put that?"

## Asking Differently

The fix didn't come from a better organizational scheme. It came from a better prompt.

Every previous attempt, I'd gone to Claude with something like: "Help me reorganize my skills. I'm thinking maybe a central directory with symlinks, or maybe a manifest file that lists..." I was prescribing a solution inside the problem statement. The model would dutifully implement whatever approach I'd half-described, and the result would be roughly as good as my half-formed idea.

This time, I tried something I'd been practicing: declarative constraint prompting. Instead of describing a mess and prescribing a fix, I laid out the problem as constraints without imposing a solution:

```xml
<problem_statement>
  <goal>
    Design a skill management system for AI development tools
  </goal>
  <requirements>
    <scope>
      <level type="user">Global skills available across all projects</level>
      <level type="project">Project-specific skills</level>
    </scope>
    <capabilities>
      <capability>List available skills</capability>
      <capability>Enable/disable skills selectively</capability>
      <capability>Organize skills by category/function</capability>
    </capabilities>
    <constraints>
      <version_control>Skills must be git-manageable</version_control>
    </constraints>
  </requirements>
  <clean_slate_considerations>
    <principle>Separation of concerns: skill storage vs skill activation</principle>
    <principle>Declarative configuration over imperative management</principle>
    <principle>Convention over configuration where sensible</principle>
  </clean_slate_considerations>
</problem_statement>
```

No symlinks mentioned. No directory layout suggested. Just what I needed and the principles that mattered.

The model snapped to an answer like a rubber band finding the shortest distance between two points. Three layers, clean separation, obvious in retrospect:

| Layer | Concern | How |
|-------|---------|-----|
| **Storage** | Skill definitions live in source directories | `~/.config/loadout/skills/` or any configured path |
| **Activation** | A TOML config declares what's enabled where | `loadout.toml` |
| **Delivery** | A script symlinks into discovery paths | `install.sh` |

The TOML config file. It never occurred to me. I'd been thinking about directory structures and symlink patterns, and the answer was a configuration file that separates "what exists" from "what's active." The skills don't move. A declarative config says which ones are turned on, and a script handles the wiring.

## What It Looks Like

The whole system landed as a small repo called [Loadout](https://github.com/pentaxis93/loadout):

```
~/.config/loadout/              YOUR CONFIG
├── loadout.toml                 what's enabled and where
└── skills/                      your skill definitions
    └── <name>/SKILL.md

loadout (repo)                  THE TOOL
├── scripts/
│   ├── install.sh               link into discovery paths
│   ├── validate.sh              check SKILL.md correctness
│   └── new.sh                   scaffold a new skill
├── schema/
│   └── skill-frontmatter.json   validates frontmatter
└── loadout.example.toml         annotated starter config
```

The config is minimal. Sources list where skills live (in priority order, so personal skills override team skills). Global targets list the discovery paths. Project overrides add per-project skills:

```toml
[sources]
skills = [
  "~/.config/loadout/skills",
  # "/path/to/team-skills/skills",
]

[global]
targets = [
  "~/.claude/skills",
  "~/.config/opencode/skills",
  "~/.agents/skills",
]
skills = ["git-commit", "code-review"]

[projects."/home/user/my-app"]
skills = ["deploy-staging"]
inherit = true   # also include global skills
```

Running `install.sh` reads the config, resolves each skill name against the source directories, and symlinks into every target path. Running `install.sh --clean` removes everything it placed. Running `install.sh --list` shows you what's where. The scripts are XDG-compliant and respect environment variables for alternative config locations.

The workflow for adding a skill becomes:

```bash
./scripts/new.sh git-commit "Create conventional commits"
$EDITOR ~/.config/loadout/skills/git-commit/SKILL.md
# add "git-commit" to loadout.toml
./scripts/install.sh
```

Four steps. No thinking about paths.

## The Actual Lesson

Every previous attempt, I walked into the conversation with half a solution already forming. "Maybe symlinks from a central directory..." "Maybe a manifest file that..." The model, being helpful, would build exactly what I described. And what I described was always a variation on the directory-juggling I was already doing, because that's the solution space I was stuck in.

Declarative prompting forced me to strip all of that away. No proposed directory layouts. No symlink strategies. Just the actual requirements, expressed as constraints. The model had room to find a shape I hadn't imagined.

## Why This Matters Beyond My Filing System

Skills are where the actual intelligence of an AI agent lives. The model provides general capability. The skill provides specific, repeatable, version-controlled capability. When I write a skill that teaches an agent how to review a pull request against specific architectural decisions, that skill IS the intelligence. It's what turns a general-purpose model into a purpose-built collaborator.

And for months, I was treating that intelligence like scratch paper. Scattered across directories, duplicated by accident, lost to forgotten symlinks. If you're not versioning the intelligence, you're letting the most important thing about AI collaboration be ephemeral.

Loadout is housekeeping. But the kind of housekeeping that determines whether you can find anything in your house.
