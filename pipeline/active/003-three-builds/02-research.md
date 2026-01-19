# Research: Building the Same Project Three Times (and Why That Wasn't Failure)

**Article type:** Evolution (biographical/methodological hybrid)  
**Research date:** 2026-01-16  
**Sources:** Author context (eterne), GitHub repositories, timeline

---

## Claims & Evidence

### Claim 1: Built the same gallery project multiple times across different frameworks

**Evidence:**
- **5th-avegallery-svelte** (created 2023-07-15, pushed until 2023-07-30)
  - Primary language: Svelte
  - First iteration during Svelte exploration phase
  - Source: https://github.com/pentaxis93/5th-avegallery-svelte

- **5th-avegallery-OLD** (created 2023-12-13, pushed until 2024-02-10)
  - Primary language: TypeScript
  - Second iteration - framework shift
  - Source: https://github.com/pentaxis93/5th-avegallery-OLD

- **5th-avegallery** (created 2024-02-15, pushed until 2024-10-17)
  - Primary language: TypeScript
  - Third/final iteration
  - Source: https://github.com/pentaxis93/5th-avegallery

**Pattern confirmed:** Author context states "5th-avegallery rebuilt 3 times" (author.md:110)

All three repositories are now archived.

### Claim 2: Framework journey followed a specific progression

**Timeline from author context (author.md:42-43, 54):**
```
2023 Q1-Q2: Framework Exploration (Next.js, React, RedwoodJS)
2023 Q3-Q4: Svelte Era (consolidation, iteration)
2024: Infrastructure focus, Dart emergence
```

**Framework sequence:** Next.js → React → RedwoodJS → Svelte → Flutter/Serverpod

**Evidence of RedwoodJS exploration:**
- **botcadabra-redwood** (created 2023-06-19, pushed until 2023-06-22)
  - Primary language: TypeScript
  - RedwoodJS framework experiment (short-lived: 3 days active development)
  - Source: https://github.com/pentaxis93/botcadabra-redwood
  - Archived (framework evaluation didn't proceed)

### Claim 3: This was systematic evaluation, not indecision

**Evidence:**
- Author context explicitly states: "Framework hopping was systematic evaluation, not indecision" (author.md:112)
- Pattern fits documented learning style: "Learning Through Iteration" (author.md:108-112)
- Precedent: stockbook (Python) → zenvestor (Dart) with only 2 days between repos
- Philosophy: "Foundation First" - rebuild to understand deeply (author.md:100-106)

### Claim 4: Each framework revealed different strengths through use

**Evidence needed:** Direct quotes/reflections on what each framework taught
**Status:** Gap - requires WALK stage to extract tacit knowledge
**Questions for walk:**
- What did you discover about Next.js that docs didn't reveal?
- What made you move from React to RedwoodJS?
- Why did Svelte feel different? What clicked?
- What ultimately made Flutter/Dart win?
- When did you realize the rebuilding wasn't waste?

### Claim 5: Final choice was Flutter/Dart for specific reasons

**Evidence:**
- Current stack documented (author.md:56-60):
  - Frontend: Flutter (Dart)
  - Backend: Serverpod (Dart)
- Zenvestor flagship project: ~159k LOC Dart (author.md:67-72)
- Dart emergence visible in 2024 infrastructure phase
- bardotown project shows early Dart exploration

**Gap:** Specific reasons for Flutter/Dart choice need extraction during WALK

### Claim 6: Age/experience context matters (late-career beginner)

**Evidence:**
- Age 53 at CS50 completion (2022)
- Now age 56 (birthday Nov 1)
- Long gap: programmed in college → Linux admin → decades off → 2022 return
- Gallery projects span 2023-2024 (ages 54-55)
- Timeline context (timeline/overview.md:142-154):
  - Health recovered enough for intensive learning by 2022
  - Framework exploration happened post-recovery (2023-2024)

---

## Timeline

| Date | Event | Source |
|------|-------|--------|
| ~2022 | CS50 completion, return to coding | author.md:31-35, timeline/overview.md:144 |
| 2023 Q1-Q2 | Framework exploration begins (Next.js, React, RedwoodJS) | author.md:42 |
| 2023-06-19 | botcadabra-redwood created (RedwoodJS experiment) | GitHub API |
| 2023-06-22 | botcadabra-redwood last push (3 days, archived) | GitHub API |
| 2023-07-15 | 5th-avegallery-svelte created (first gallery iteration) | GitHub API |
| 2023-07-30 | 5th-avegallery-svelte last push | GitHub API |
| 2023 Q3-Q4 | Svelte Era - consolidation phase | author.md:43 |
| 2023-12-13 | 5th-avegallery-OLD created (second iteration) | GitHub API |
| 2024-02-10 | 5th-avegallery-OLD last push | GitHub API |
| 2024-02-15 | 5th-avegallery created (third/final iteration) | GitHub API |
| 2024 | Infrastructure focus, Dart emergence, NixOS | author.md:44 |
| 2024-10-17 | 5th-avegallery last push, archived | GitHub API |
| 2025+ | Zenvestor in Dart/Flutter (159k LOC) | author.md:67-72 |

**Duration:** ~15 months from first Svelte attempt to final archive (Jul 2023 - Oct 2024)

---

## Code Examples

**Status:** Repositories are archived. Code examples will need to be extracted if still accessible.

**Potential examples:**
- Component structure differences between frameworks
- Build configuration evolution
- State management approaches across iterations

**Note for WALK:** Ask about specific code patterns that revealed framework characteristics.

---

## Open Questions for WALK Stage

### Framework-Specific Learnings
1. What specific problem led you away from Next.js?
2. What did React reveal about component architecture that Next.js obscured?
3. Why try RedwoodJS? What was the promise vs. reality?
4. What made Svelte feel different from React? When did you notice?
5. What was the breaking point for each framework?

### Decision Process
6. How did you know when to give up and rebuild?
7. What criteria emerged for evaluating frameworks?
8. When did you realize this wasn't wasted effort?
9. What was the "aha moment" with Flutter/Dart?

### Teaching Extraction
10. What would you tell beginners who feel shame about abandoned projects?
11. How is this different from analysis paralysis?
12. What can't you learn from documentation?
13. When is rebuilding valuable vs. procrastination?

### Emotional Arc
14. Did you feel shame/frustration during the rebuilds?
15. When did the perspective shift from "failure" to "learning"?
16. What would you do differently knowing what you know now?

---

## Context Notes

### Author Learning Pattern
From author.md (lines 108-112):
- 5th-avegallery rebuilt 3 times (confirmed)
- stockbook → zenvestor transition: 2 days between repos (shows pattern of decisive rebuilds)
- "Foundation First" philosophy (lines 100-106)
- "Overkill" architecture for learning (Clean Architecture, DDD, TDD)

### Recovery Context
From timeline/overview.md (lines 121-154):
- Health recovered in early 2020s after chronic illness (2009-early 2020s)
- CS50 completion possible because of health recovery
- Framework exploration period (2023-2024) was post-recovery
- Focused learning indicated by low email volume (2022: 3,480 emails - lowest in decade)

### Current Outcome
- Zenvestor: 159k LOC Dart, production-grade (CI/CD, security scanning, ADRs)
- Full Dart/Flutter stack chosen after evaluation period
- Meta-level work: building AI collaboration tools (2025+)

---

## Material Status

| Category | Status | Notes |
|----------|--------|-------|
| Author context | ✓ Loaded | eterne/vault/03-resources/blog-context/ |
| Repository timeline | ✓ Complete | 3 gallery repos + 1 RedwoodJS experiment confirmed |
| Framework sequence | ✓ Verified | Next.js → React → RedwoodJS → Svelte → Flutter |
| Dates/chronology | ✓ Documented | Jul 2023 - Oct 2024 span |
| Code examples | ⚠ Archived | May need repo cloning for specific examples |
| Tacit knowledge | ✗ Gap | Requires WALK stage extraction |
| Decision rationale | ✗ Gap | Requires WALK stage extraction |
| Emotional arc | ✗ Gap | Requires WALK stage extraction |

---

## Research Quality Gate Check

**Gate question:** Do you have concrete examples for every claim?

| Claim | Evidence Status |
|-------|----------------|
| Built same project 3x | ✓ Complete (3 archived repos verified) |
| Framework progression | ✓ Complete (timeline + author context) |
| Systematic evaluation | ✓ Complete (author context + pattern) |
| Each framework revealed strengths | ⚠ Partial (framework list confirmed, specific learnings need WALK) |
| Flutter/Dart won for reasons | ⚠ Partial (outcome confirmed, reasons need WALK) |
| Age/beginner context | ✓ Complete (timeline verified) |

**Assessment:** RESEARCH phase substantially complete. Structural facts verified. Gaps are appropriate for WALK stage (tacit knowledge, decision rationale, emotional arc).

**Ready to proceed:** YES - WALK stage should extract the "why" and "how it felt" to complement the verified "what" and "when".

---

*Research complete. Timeline verified. Story ready for depth.*
