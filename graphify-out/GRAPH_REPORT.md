# Graph Report - dsu online  (2026-11-18)

## Corpus Check
- 126 files · ~82,477 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 55 file(s) not represented in the graph (top: .scss 52, (none) 2, .ico 1)

## Summary
- 740 nodes · 1842 edges · 36 communities (32 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `befd11c4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ArrowLink
- Page.tsx
- icons.tsx
- scrape.py
- EnquiryModal.tsx
- package.json
- Kit.tsx
- compilerOptions
- international-learners/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- Testimonial.tsx
- README.md
- AGENTS.md
- server.js
- CLAUDE.md
- ContentPage
- home.ts
- curriculumData.ts
- app/page.tsx
- react
- parse.ts
- FeeTabs.tsx
- ProgramAdvantage.tsx
- [...slug]/page.tsx
- ElectiveCombinator.tsx
- CardSlider
- slugify
- programme-faq.ts
- FacultyArticles.tsx
- next
- Icon
- ProgramFaculty.tsx
- Icon.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 83 edges
2. `react` - 58 edges
3. `ArrowLink()` - 46 edges
4. `next` - 45 edges
5. `CardSlider()` - 22 edges
6. `Icon()` - 20 edges
7. `ChevronRight()` - 18 edges
8. `Flow()` - 16 edges
9. `compilerOptions` - 16 edges
10. `DSU Online — CHECKPOINT (read this first in any new session)` - 16 edges

## Surprising Connections (you probably didn't know these)
- `Update 2026-10-28` --references--> `ArrowLink()`  [INFERRED]
  CHECKPOINT.md → src/components/ui/ArrowLink.tsx
- `Update: common sections + specialization template` --references--> `StoryCards()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Kit.tsx
- `Update 2026-10-26 (latest)` --references--> `flat()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Status` --references--> `faculty()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ReferPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx

## Import Cycles
- None detected.

## Communities (36 total, 4 thin omitted)

### Community 0 - "ArrowLink"
Cohesion: 0.07
Nodes (45): Accordion(), EnquireButton(), Flow(), isInternal(), Pic(), Qa(), Crumb, CtaBand() (+37 more)

### Community 1 - "Page.tsx"
Cohesion: 0.08
Nodes (21): ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial, ELECTIVE_PHOTOS, P, Props, Seg (+13 more)

### Community 2 - "icons.tsx"
Cohesion: 0.15
Nodes (11): order, photos, ProgramsBand(), Rect, CardCarousel(), Props, base, ChevronLeft() (+3 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.05
Nodes (55): lenis, react-dom, fontMain, metadata, RootLayout(), ContactForm(), empty, Phase (+47 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (31): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+23 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.11
Nodes (20): CtaLink(), DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, LearningCards(), lsi, lsIcon() (+12 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.08
Nodes (38): gsap, heroUsps, img(), InternationalLearners(), metadata, tints, CallbackForm(), Phase (+30 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.15
Nodes (12): 2026-10-30 inner-page photos, 2026-11-18 Dual specialisation, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Update 2026-10-27 (QA-issue round, new account) (+4 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "Testimonial.tsx"
Cohesion: 0.32
Nodes (9): Avatar(), AvatarFallback(), AvatarImage(), Card(), CardContent(), CardFooter(), cx(), P (+1 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 16 - "ContentPage"
Cohesion: 0.14
Nodes (26): Status, Update 2026-10-26 (latest), Tabs(), CardGrid(), Checklist(), ClassApart(), ContactRow(), DataTable() (+18 more)

### Community 18 - "home.ts"
Cohesion: 0.12
Nodes (15): aboutCopy, aboutFeatures, aboutStats, awards, BentoTile, bentoTiles, blogs, certifications (+7 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.16
Nodes (14): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+6 more)

### Community 20 - "app/page.tsx"
Cohesion: 0.35
Nodes (8): homeFaqs, HomePage(), About(), Careers(), Faq(), Hero(), Recognitions(), FramedImage()

### Community 21 - "react"
Cohesion: 0.06
Nodes (31): react, swiper, AdmissionSteps(), heading(), ic, icons, Step, StepCard() (+23 more)

### Community 22 - "parse.ts"
Cohesion: 0.19
Nodes (12): cleanBlocks(), isNote(), isQuote(), FaqList(), LeaderGrid(), asImg(), Faq, parseFaq() (+4 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 24 - "ProgramAdvantage.tsx"
Cohesion: 0.24
Nodes (9): Card(), Ico(), P, ProgramAdvantage(), advantageBanner, AdvantageCard, advantageCards, advantageLead (+1 more)

### Community 25 - "[...slug]/page.tsx"
Cohesion: 0.08
Nodes (41): nextConfig, bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve() (+33 more)

### Community 26 - "ElectiveCombinator.tsx"
Cohesion: 0.27
Nodes (7): Benefit(), Elective, ElectiveCombinator(), ICON, architectCopy, DUAL_PROGRAMMES, dualOn()

### Community 28 - "CardSlider"
Cohesion: 0.13
Nodes (20): Latest change, CareerFlip(), body(), CareerShowcase(), Role, Card(), ElectiveGrid(), Item (+12 more)

### Community 29 - "slugify"
Cohesion: 0.29
Nodes (6): slugify(), Sec(), withEyebrow(), headFor(), SectionHead, sectionHeads

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 32 - "FacultyArticles.tsx"
Cohesion: 0.27
Nodes (9): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip(), toIsoDate(), realFaculty, articles (+1 more)

### Community 33 - "next"
Cohesion: 0.17
Nodes (8): next, Testimonials(), initialOf(), TestimonialShowcase(), B, homeTestimonials, Testimonial, testimonials

### Community 37 - "Icon"
Cohesion: 0.36
Nodes (7): Architecture, AboutBand(), Learning(), VideoTile(), WhyChoose(), Icon(), PlayIcon()

### Community 38 - "ProgramFaculty.tsx"
Cohesion: 0.27
Nodes (8): Update 2026-11-12: shared programme hero template, Update: common sections + specialization template, FacultyGrid(), Img, Card(), initials(), Item, ProgramFaculty()

### Community 39 - "Icon.tsx"
Cohesion: 0.22
Nodes (5): Props, Rect, careerTabs, recruiters, iconSize

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 245 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `ArrowLink`, `Page.tsx`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `Testimonial.tsx`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `parse.ts`, `FeeTabs.tsx`, `[...slug]/page.tsx`, `ElectiveCombinator.tsx`, `FacultyArticles.tsx`, `next`, `Icon`, `Icon.tsx`?**
  _High betweenness centrality (0.185) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ArrowLink` be split into smaller, more focused modules?**
  _Cohesion score 0.07103825136612021 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `ArrowLink`, `Page.tsx`, `FacultyArticles.tsx`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `ProgramFaculty.tsx`, `international-learners/page.tsx`, `Icon.tsx`, `Testimonial.tsx`, `server.js`, `home.ts`, `react`, `ProgramAdvantage.tsx`, `[...slug]/page.tsx`, `not-found.tsx`, `CardSlider`?**
  _High betweenness centrality (0.152) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0766488413547237 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `FacultyArticles.tsx`, `icons.tsx`, `EnquiryModal.tsx`, `Icon`, `Kit.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `home.ts`, `app/page.tsx`, `react`, `ProgramAdvantage.tsx`, `[...slug]/page.tsx`, `ElectiveCombinator.tsx`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._