# Review Post

Perform comprehensive critique of a blog post against the style guide and voice principles, then offer interactive selection of improvements to implement.

## Arguments
{ARGS} - Path to the post file to review (e.g., `content/posts/2025-10-21-i-dont-know-what-im-talking-about.md`)

---

## Process

### Phase 1: Comprehensive Review

1. **Read the materials**:
   - Read the post file specified in {ARGS}
   - Read `/home/pentaxis93/src/aiandi/docs/style-and-language-guide.md`
   - Read `/home/pentaxis93/src/aiandi/CLAUDE.md` for meta-recursive context

2. **Systematic evaluation across all dimensions**:

   **Title Evaluation:**
   - Clear focus (no colons, commit to one idea)
   - Engaging and memorable
   - Matches post content
   - Violates or follows guidelines

   **Voice Consistency:**
   - Authentic beginner voice maintained
   - Confidence in uncertainty balanced
   - Appropriate vulnerability (not exhibitionist)
   - Subtle irony/humor (not forced)
   - No forbidden patterns (apologies, tech bro speak, credential inflation)
   - Natural educated vocabulary (not academic prose)

   **I-Density Management:**
   - Count "I" occurrences per paragraph
   - Check for "I [verb]" pattern saturation
   - Assess sentence variety and construction
   - Note areas needing breathing room

   **Technical Accuracy:**
   - All code examples complete and runnable
   - All technical claims verifiable
   - Links to authoritative sources present
   - Real project references when mentioned

   **Consciousness Veiling:**
   - Philosophy present as breadcrumbs, not sermons
   - Would purely technical reader get value?
   - Depth available but not announced
   - No spiritual bypassing

   **Structural Clarity:**
   - Strong opening hook
   - Clear section transitions
   - Section titles scannable and clear
   - Closing with action/invitation
   - Appropriate use of lists vs. prose

   **Style Guide Adherence:**
   - Active voice priority
   - Sentence length variety
   - Contractions used naturally
   - First person appropriate
   - Specific attribution when possible
   - Punctuation strategy (em-dashes, italics, bold)
   - No watch-out patterns (over-explaining, tangent spirals)

3. **Generate overall assessment**:
   - Score each dimension (0-10)
   - Identify strengths (what works and why)
   - Identify improvement opportunities (what could be stronger)
   - Determine publication readiness (publish / needs revision / needs work)

### Phase 2: Build Recommendation Groups

Organize all improvement suggestions into logical groups:

**Group 1: Title & Opening**
- Title changes or refinements
- Opening hook improvements
- First paragraph adjustments

**Group 2: Voice & Tone**
- I-density reductions
- Awkward constructions to smooth
- Voice consistency improvements
- Forbidden pattern removals

**Group 3: Structure & Clarity**
- Section organization improvements
- Transition strengthening
- List formatting suggestions
- Closing enhancements

**Group 4: Technical & Accuracy**
- Code example improvements
- Technical claim verifications
- Link additions
- Reference corrections

**Group 5: Style Refinements**
- Sentence variety improvements
- Punctuation adjustments
- Word choice refinements
- Minor polish items

For each recommendation, provide:
- **Location**: Specific line reference or section
- **Current**: What's there now (quote exactly)
- **Suggested**: What to change it to
- **Reason**: Why this improves the post (reference style guide principle)

### Phase 3: Interactive Selection

Use the AskUserQuestion tool to present recommendations:

1. **Create one question per non-empty recommendation group**
2. **Question structure**:
   - `question`: "Which [GROUP NAME] improvements would you like to implement?"
   - `header`: Short label (e.g., "Title", "Voice", "Structure")
   - `multiSelect`: true (allow multiple selections)
   - `options`: Each recommendation as an option
     - `label`: Brief description (e.g., "Reduce I-density in opening")
     - `description`: The specific change with before/after or rationale

3. **Present all groups in a single AskUserQuestion call** (up to 4 groups max per call)

4. **If more than 4 groups**, make multiple AskUserQuestion calls sequentially

### Phase 4: Implementation

1. **For each selected recommendation**:
   - Apply the change using the Edit tool
   - Reference specific line numbers from the review
   - Preserve exact formatting and style
   - Make changes in order (top to bottom of file)

2. **Confirm completion**:
   - List all changes made
   - Note any recommendations not selected
   - Offer to re-review if desired

---

## Output Guidelines

**Phase 1 Output (Review Summary):**
```
## Post Review: [Post Title]

### Overall Assessment
- Voice Consistency: [score/10]
- Technical Accuracy: [score/10]
- Structural Clarity: [score/10]
- Style Adherence: [score/10]
- **Overall**: [Publish-ready / Needs revision / Needs work]

### Strengths
- [What works well and why]

### Improvement Opportunities
- [What could be stronger]
```

**Phase 2 Output:**
Present organized recommendation groups clearly before calling AskUserQuestion.

**Phase 3:**
Use AskUserQuestion tool—no text output needed, the tool handles presentation.

**Phase 4 Output (After Implementation):**
```
## Changes Applied

Applied [N] improvements:
1. [Description of change 1] - [file:line]
2. [Description of change 2] - [file:line]
...

Not applied:
- [Recommendations user declined]

The post has been updated. Would you like me to re-review it?
```

---

## Important Notes

- **Be specific**: Every recommendation must reference exact line numbers or quotes
- **Be selective**: Don't overwhelm with minor suggestions—focus on meaningful improvements
- **Be principled**: Ground every suggestion in the style guide, not personal preference
- **Be respectful**: The author's voice is paramount—suggest, don't dictate
- **Empty groups are fine**: If a dimension has no recommendations, don't create a group for it

---

## Example Question Structure

```
AskUserQuestion with questions:
[
  {
    question: "Which Title & Opening improvements would you like to implement?",
    header: "Title/Opening",
    multiSelect: true,
    options: [
      {
        label: "Reduce I-density in paragraph 1",
        description: "Change 'I invested two years...' to 'Two years of effort...' to create breathing room (I-density guideline)"
      },
      {
        label: "Strengthen opening hook",
        description: "Add specific detail about age to first sentence for more immediate engagement"
      }
    ]
  },
  {
    question: "Which Structure & Clarity improvements would you like to implement?",
    header: "Structure",
    multiSelect: true,
    options: [
      {
        label: "Add reader invitation to closing",
        description: "After 'Next time...' add engagement line inviting reader response (closing with action guideline)"
      },
      {
        label: "Convert comma list to bullets",
        description: "In 'Foundation First' section, convert line 47-48 to bulleted list for scannability"
      }
    ]
  }
]
```

---

## Success Criteria

A successful review:
1. Identifies real improvements grounded in the style guide
2. Presents recommendations clearly and allows informed choice
3. Implements selected changes accurately
4. Respects the author's voice and decisions
5. Makes the next post better through learned patterns
