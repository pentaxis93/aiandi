---
title: "AI Instructions Are a Supply Chain Problem"
pubDate: 2026-02-12
type: "essay"
status: "published"
tags: [ai-tools, architecture, developer-experience]
---

I had 23 skills and no idea which ones were active.

Skills, if you haven't encountered them yet, are markdown files that shape how AI coding assistants behave. You write instructions in a `SKILL.md` file, drop it in the right folder, and your AI assistant picks it up automatically. One skill might enforce conventional commits. Another might encode your team's API design conventions. A third might contain your personal writing voice.

The format is simple. A YAML frontmatter block with a name and description, then markdown instructions that the agent reads when it loads the skill:

```yaml
---
name: git-commit
description: Create conventional commits with scope and body
---

When creating commits, use the conventional commit format...
```

For three skills, this works fine. You know where they are, what they do, and which tool reads them. But I'm using two AI coding assistants (OpenCode and Claude Code), I have skills that should be available everywhere, skills that only apply to specific projects, and a growing collection that I keep tweaking. The question stopped being "how do I write a skill?" and became something I recognized from a completely different part of the stack.

## The Folder Problem

My first instinct was the obvious one. Organize the skills into directories and copy them where each tool expects to find them. OpenCode looks in `.opencode/skills/`. Claude Code looks in `.claude/skills/`. Both check a few more places. How hard could it be?

Here is how hard it could be. There are six discovery paths:

| Path | Scope | Tool |
|------|-------|------|
| `~/.claude/skills/` | Global | Both |
| `~/.config/opencode/skills/` | Global | OpenCode |
| `~/.agents/skills/` | Global | Both |
| `.claude/skills/` | Project | Both |
| `.opencode/skills/` | Project | OpenCode |
| `.agents/skills/` | Project | Both |

Six paths across two tools, two scopes. Copy a skill into one path and it works in Claude Code but not OpenCode. Copy it into three paths and now you have three copies to keep in sync. Update the original, forget to update a copy, and you're running stale instructions without knowing it. There's no manifest, no audit trail, and no way to ask "what's active right now?"

This feels like a files-in-folders problem until you try to solve it as one. You end up maintaining a mental map of what's where, which is another way of saying you don't maintain it at all.

## A Compatibility Surprise

Before designing anything, I did something that saved me a wrong turn. I read the documentation for both tools. Not the getting-started pages. The actual skill discovery specifications.

What I found: both OpenCode and Claude Code discover skills at `.claude/skills/<name>/SKILL.md`. The path was shared. More interesting: both tools parse YAML frontmatter for `name` and `description`, and both silently ignore fields they don't recognize.

Claude Code supports extension fields like `disable-model-invocation`, `allowed-tools`, and `context`. OpenCode has its own extensions: `license`, `compatibility`, `metadata`. Neither tool chokes on the other's fields. They just skip what they don't understand.

This means you can write one skill with the union of all frontmatter fields and both tools will happily load it:

```rust
/// SKILL.md frontmatter — union of all supported fields
pub struct Frontmatter {
    pub name: String,
    pub description: String,

    // Claude Code fields (ignored by OpenCode)
    pub disable_model_invocation: Option<bool>,
    pub allowed_tools: Option<String>,
    pub context: Option<String>,

    // OpenCode fields (ignored by Claude Code)
    pub license: Option<String>,
    pub compatibility: Option<String>,
    pub metadata: Option<HashMap<String, String>>,
}
```

The compatibility was already there. Hidden behind separate documentation that nobody reads side by side. Two engineering teams had, independently, made the same good decision: ignore what you don't understand. That one property made everything else possible.

## What Fell Out

With write-once compatibility established, the actual design problem became clear: not "how do I store skills" but "how do I manage what's active where?"

I kept coming back to three separate concerns that were tangled together in the folder-copying approach.

There's a storage question. Where do the skill definitions actually live, as a version-controlled source of truth?

There's an activation question. Which skills are enabled at which scope? Global across all projects? Only in this one project?

And there's a delivery question. How do enabled skills end up in the paths that each tool actually scans?

Three questions, each with different change frequencies. Skill content changes when you refine instructions. Activation changes when you start a new project or experiment with a new skill. Delivery only needs to run after an activation change. Tangling them together (by manually copying files into discovery paths) means every change to any concern forces you to touch all three.

Once I saw them as separate concerns, the architecture stopped being a decision and started being inevitable. That's a feeling I've learned to trust: when the design seems to assemble itself, you've probably found the right decomposition.

```toml
# Storage: skills live in source directories
[sources]
skills = [
  "~/.config/loadout/skills",       # personal (highest priority)
  # "/path/to/team-skills/skills",  # team skills
]

# Activation: what's enabled where
[global]
targets = [
  "~/.claude/skills",
  "~/.config/opencode/skills",
  "~/.agents/skills",
]
skills = ["git-commit", "code-review"]

[projects."/home/user/my-app"]
skills = ["deploy-staging"]
inherit = true  # include global skills too
```

The config is declarative. It says what should be true, not how to make it true. A separate install command reads this config and creates symlinks from skill sources into every target path:

```mermaid
graph LR
    S["~/.config/loadout/skills/git-commit"] -->|symlink| C["~/.claude/skills/git-commit"]
    S -->|symlink| O["~/.config/opencode/skills/git-commit"]
    S -->|symlink| A["~/.agents/skills/git-commit"]
```

One source, multiple targets, all symlinks. Change the source and every tool sees the update immediately. Disable a skill in the config and the next install removes the links.

## The Marker File Detail

There is a subtlety I didn't anticipate. What happens when loadout tries to clean up symlinks in a target directory that it didn't create? You don't want to delete someone's manually placed skills just because they're in a directory loadout happens to manage.

The solution was a marker file. When loadout creates symlinks in a target directory, it also drops a `.managed-by-loadout` file. Before cleaning up, it checks for this marker. If it's not there, it leaves the directory alone:

```rust
const MARKER_FILE_NAME: &str = ".managed-by-loadout";

pub fn is_managed(target_dir: &Path) -> bool {
    target_dir.join(MARKER_FILE_NAME).exists()
}

pub fn clean_target(target_dir: &Path) -> Result<Vec<PathBuf>> {
    if !is_managed(target_dir) {
        return Ok(Vec::new());
    }
    // ... remove managed symlinks, then the marker
}
```

This is the kind of detail that doesn't show up in an architecture diagram. It shows up the first time something goes wrong and you realize you need a way to say "this is mine, I can touch it" vs. "this isn't mine, leave it alone." Ownership markers. Package managers have them. Dependency tools have them. Any system that reaches into shared directories and manipulates files needs them.

## Source Priority

There's another thing that fell out of treating this as a real supply chain: priority ordering. The source directories in the config aren't just a list. They're a priority list. First match wins.

```toml
[sources]
skills = [
  "~/.config/loadout/skills",       # personal overrides
  "/opt/team-skills/skills",        # team defaults
]
```

If both your personal directory and the team directory contain a skill called `code-review`, your personal version wins. This is the same resolution pattern that package managers use. It's the same reason `/usr/local/bin` comes before `/usr/bin` in your PATH. Local overrides system. Personal overrides team.

Think about your own setup for a moment. How many AI instruction files do you have? Where do they live? Could you tell me, right now, which ones are active?

## The Template That Fails on Purpose

One last detail. The repo ships with a template skill called `_template`. The name starts with an underscore, which deliberately violates the naming rules:

```
^[a-z0-9]+(-[a-z0-9]+)*$
```

Run validation and it fails:

```
Error: Invalid skill name '_template': must match pattern ^[a-z0-9]+(-[a-z0-9]+)*$
```

This is intentional. The template exists to be copied and renamed. If you forget to rename it and try to install it, validation catches it. The error IS the instruction. You don't need to read a guide explaining "remember to rename the template." You just try to use it, it fails, and the failure message tells you exactly what to do.

## What This Is Actually About

I started this project because I had too many skills and no way to manage them. What I built was a three-layer system that separates storage, activation, and delivery. It started as shell scripts and grew into a Rust CLI called loadout.

But the interesting part isn't the tool. The interesting part is what the problem reveals.

AI instructions are becoming operational knowledge. They're behavioral contracts that shape how agents work on your behalf. Right now, the ecosystem treats them as throwaway prompt fragments. Drop a file in a folder. Maybe version control it, maybe not. No dependency resolution, no activation layers, no way to compose, override, or audit.

This is where code was before package managers. Source files scattered across directories, manually copied between projects, no manifest, no lockfile, no supply chain. We've already solved this problem for code, for dependencies, for configuration. Operational knowledge for AI tools is next in line.

It turns out that `SKILL.md` files aren't just instructions. They're a supply chain. And supply chains, once you see them, demand the same lifecycle rigor as everything else you ship.

The tool is called [loadout](https://github.com/pentaxis93/loadout). But the pattern is bigger than any one tool. Wherever you're storing AI instructions right now, ask yourself whether they're getting the lifecycle treatment they deserve. If the answer involves the phrase "I just copy the file," you already know what happens next.
