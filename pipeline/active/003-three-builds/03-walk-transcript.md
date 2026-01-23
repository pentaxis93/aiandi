# Walk Transcript: Building the Same Project Three Times

**Slug:** three-builds
**Stage:** WALK (post-recording)
**Recorded:** 2026-01-19
**Duration:** ~15 minutes (partial - text conversation)

---

## Key Quotes

Direct quotes that capture something essential:

> "Iterating is not starting over, that's the way that McKinsey works and so I was trained that way and it's very comfortable to me to iterate. That's just how you get from good to great results."

> "Dart... I feel like it's a beautifully engineered spaceship to me."

> "I really want to build something where the maintenance burden won't necessarily scale with complexity. I'd like to build something that I can continue to iterate on and refine for years to come and always be able to maintain it."

> "With Redwood.js, what I loved about Redwood.js is the testing, the automatic unit testing. That really opened my eyes to a new way to see quality."

> "I've noticed with having agentic AI it's much easier to wrap stuff up little projects that in the past I probably would have just abandoned... it's become much easier to package work nicely and end up with an MVP finished product instead of abandonware."

---

## Insights Discovered

Things surfaced during the conversation that weren't in the research:

- **5th Ave. Gallery was never a gallery** - It's a domain bought from E.J. Gold (his former art site). The project was an online ashram with AI guru chatbots. Never published.
- **The name works regardless** - Whatever goes up becomes "a gallery of projects"
- **No shame narrative existed** - The walking guide assumed shame about rebuilding, but that's not the story. McKinsey training normalized iteration as the path to quality.
- **The real driver was mobile+web** - Framework changes weren't about framework quality but about solving multi-platform development
- **Maintainability is the deep lesson** - Years of projects falling apart during illness taught the value of sustainable architecture
- **AI agents changed the abandonment pattern** - Now trivial to wrap up small projects properly

---

## Emotional Beats

- **Energy/excitement:** Describing Dart as "a beautifully engineered spaceship" - genuine appreciation
- **Clarity:** The McKinsey explanation - this was practiced knowledge, not discovery
- **Reframe request:** "I hope I'm not building for my future sick self. I'd prefer to think of it as a positive lesson learned" - wants forward framing, not past-illness framing

---

## Story Elements

### Opening hook possibility
5th Ave. Gallery: a domain bought from artist E.J. Gold, intended as an online ashram, rebuilt across five frameworks, never actually a gallery - and that's fine.

### Core tension
Not "shame vs. acceptance of rebuilding" (that was assumed, not real).
Actually: **How do you build something that lasts when you've learned the hard way that projects fall apart?**

### Resolution
- Iteration is the path, not the problem (McKinsey training)
- The question isn't "which framework" but "what problem are you actually solving" (mobile+web)
- Maintainability that doesn't scale with complexity = sustainable creation
- AI agents now help finish things properly instead of abandoning them

---

## Questions Raised

- [ ] Should E.J. Gold get more context? Who is he, what was the original site?
- [ ] Is 5th Ave. Gallery still the right frame, or has the article shifted to something broader about iteration?

---

## Natural Language

Phrases and metaphors to carry forward:

- "a beautifully engineered spaceship" (Dart)
- "a gallery of projects" (reframing the name)
- "from good to great results" (iteration purpose)
- "maintenance burden won't scale with complexity"
- "MVP finished product instead of abandonware"
- "that's the way McKinsey works"

---

## Raw Transcript

<details>
<summary>Full cleaned transcript (click to expand)</summary>

5th Ave. Gallery is actually a domain that I purchased from E.J. Gold. It was a website about his work with art and art galleries some years ago. I bought it from him. And I had an idea to create an online ashram using that platform.

It was also an experiment for me, of course it was experimental, I was learning, I was teaching myself. I had a number of different features planned. The one that I got farthest with was AI guru chatbots. I had a rude Buddha chatbot. There were about eight chatbots total with different flavors of being gurus.

It never was a gallery. The name of the domain is 5thAvenueGallery.com. But I always thought that name could be repurposed because no matter what I put up there, it becomes a gallery of projects.

At first, I was just exploring. Just seeing what was out there, learning. Whatever I would read about, I'd explore a little bit. But the first really serious build that I did of 5th Ave. Gallery was the Next.js one. And I really liked Next.js, and I would have stayed with it. I was getting to really appreciate the beauty of TypeScript as well, although there's a lot of things that I didn't understand still.

TypeScript has all the legacy of JavaScript, which evolved along a messy path. And all the caching in Next.js, and actually not just the caching. I found a lot of it very complex in ways that I was totally unprepared for. CS50 didn't tell us anything about web development, per se. And I realized what makes Next.js so complex is that it's dealing with the complexity of modern web apps. And this is why I eventually left Next.js as well, because I realized I probably shouldn't be building just web apps. I should be building apps that at least work on phones as well as web.

That's what made me switch to Dart and Flutter, because it seemed like the easiest and best way. And I really enjoy working in Dart. I feel like it's a beautifully engineered spaceship to me. Flutter is excellent. It really does enable multi-platform design.

Somewhere along the way, I explored Redwood.js. What I loved about Redwood.js is the testing, the automatic unit testing. That really opened my eyes to a new way to see quality. And I immediately gravitated toward that approach, because over the years, I've started so many projects. Mostly while I was sick, I started so many projects that I never could finish. When I'd have more energy in a certain period of time, I'd work and I'd get stuff done. I built websites. I built businesses, actually. But as I would get sick again, I'd kind of forget how to maintain it and lose track of it. I'd lose the day-to-day involvement. And those projects would fall apart and become unmaintainable.

So I really want to build something at this point where the maintenance burden won't necessarily scale with complexity. I'd like to build something that I can continue to iterate on and refine for years to come and always be able to maintain it. And that became even more important and more difficult with AI coding. The AI can just write so much code so the trick is to get it to generate that code in a way that is maintainable, where the maintenance burden isn't going to scale exponentially with the complexity of the code base.

I never had a problem with so-called starting over. Iterating is not starting over, that's the way that McKinsey works and so I was trained that way and it's very comfortable to me to iterate. That's just how you get from good to great results.

With Svelte I was interested in it because I had read that it has much simpler state management than React and I thought that might be interesting but it doesn't answer the fundamental question which was how to develop for mobile and web at the same time and Svelte didn't answer that so it wasn't really a serious option in the end.

I never ever thought of rebuilding as waste. That's the way McKinsey projects work. If we'd have a three-month project in McKinsey then what we would do usually is you'd have three checkpoints, one every month, and each time you do a complete iteration of the problem. It's not like you do a third of the work for the first one, no, you come in and you have a complete story. Some of the research won't be done, some of the analysis will be planned, but the story itself is still complete and then you iterate the whole thing and you iterate it again. So for me that's the way I was trained to do good work from the start.

The gallery project itself, it's not a gallery project first of all, it's called 5th Ave. Gallery. I bought this site from E.J. Gold and I'd like the site in some way to pay homage to him and his work and I've tried a few different ways of doing that and I don't really think I've found the way that both feels authentic to me and allows me to express - well let's just say I just don't think I've really found a way that felt authentic yet and I'm still working on what to do with that website but meanwhile I've been working on other projects as well.

How I evaluate frameworks now - I don't really evaluate frameworks but I have thought a lot about tech stack and architecture, what I should use for my projects. One thing that has really changed is now I'm really trying to do things in an AI agent-first way.

A developer who has three abandoned projects - it's probably better to finish stuff rather than abandon it even if you finish it in a very preliminary form. But I understand when the excitement of the new next thing is so great that you just can't bear to spend the time and energy on the old thing. I've noticed with having agentic AI it's much easier to wrap stuff up little projects that in the past I probably would have just abandoned because it's so much work for me to even do a simple thing like write a README.md. But now I can write a README and add an MIT license and stuff like that in just moments and so it's become much easier to package work nicely and end up with an MVP finished product instead of abandonware.

</details>

---

## Quality Gate Checklist

Before advancing to SYNTHESIS-PREP:

- [x] Transcript is clean and readable
- [x] Key quotes identified (5 captured)
- [x] Insights extracted
- [x] Emotional arc visible
- [x] Natural language captured
- [x] Story elements identified
- [ ] Material ready to inform SYNTHESIS-PREP

**Gate question:** Did you extract the heart of the story?

**Assessment:** Yes. The heart shifted from the assumed narrative (shame about rebuilding) to the actual narrative (iteration as trained practice, maintainability as hard-won wisdom, mobile+web as the real driver).

---

## Notes for Next Stage

**Article scope decision needed:**
- Original frame: "Building the Same Project Three Times" with shame→acceptance arc
- Actual story: Iteration as professional practice, maintainability as lesson learned, 5th Ave. Gallery as ongoing project

**E.J. Gold context:**
- Must be mentioned (per author request)
- Need brief context: who he is, what the original site was
- The tribute angle is unresolved - author still working on authentic approach

**Exclude:**
- AI gurus / problematic AI content (per author request)

---

*The walk surfaces what you know. The transcript preserves it. The extraction makes it usable.*
