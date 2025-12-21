# Structural Proposal: Commit Linking from Blog Posts

## Problem

Blog posts reference Zenvestor code and architecture decisions, but readers can't easily see the actual code being discussed.

Current state: Posts say "I implemented X" but don't link to specific commits/files.

## Proposed Solution

Add direct links from blog posts to GitHub commits and file references.

### Implementation Options

**Option 1: Manual Markdown Links**
```markdown
See the [actual implementation](https://github.com/pentaxis93/zenvestor/commit/abc123)
in Zenvestor.
```

Pros: Simple, works immediately, no tooling needed
Cons: Manual, can break if repo moves, verbose

**Option 2: Custom Zola Shortcode**
```markdown
{% commit repo="zenvestor" hash="abc123" %}
{% file repo="zenvestor" path="lib/features/stocks/bloc.dart" line="42" %}
```

Pros: Cleaner syntax, centralized URL management
Cons: Requires Zola shortcode implementation

**Option 3: Reference System**
```markdown
[^zen-stock-bloc]: zenvestor@abc123:lib/features/stocks/bloc.dart#L42
```

At bottom of post, generates proper GitHub links.

Pros: Clean in text, citation-style familiar
Cons: Need to implement reference resolver

## Benefits

1. **Technical accuracy** - Readers can verify claims
2. **Learning value** - See real code from real projects
3. **Foundation-first demonstration** - Show actual work, not just talk about it
4. **Authentic beginner** - "Here's what I actually built, not what I think I should have built"

## Example Usage

Post about Flutter testing patterns:

```markdown
After 6 hours of debugging, I discovered the [reactive mock pattern](zen@e4f5a6b).
The key was letting streams emit events naturally rather than using static mocks.

Here's the [actual test](zen@e4f5a6b:test/integration/theme_toggle_test.dart#L45-L67)
that finally worked.
```

Links directly to:
- Commit showing the breakthrough
- Specific test implementation with line numbers

## Technical Requirements

- Need to decide: manual vs. shortcode vs. reference system
- If shortcode: implement Zola template
- If reference: build link resolver
- Consider: permalink stability (commit hashes don't move)

## Open Questions

- How to handle when commits reference code that later changed?
- Should we link to specific commits (immutable) or current main (evolves)?
- Private repos (Zenvestor is public, but future projects might not be)?
- Mobile experience - GitHub on mobile isn't great

## Priority

Medium-high. Foundation-first principle says "show actual work" - links enable that.

## Related

Could extend to:
- ADR references (link to architecture decision records)
- Journal entries (if some become public)
- Test results (link to CI runs)
