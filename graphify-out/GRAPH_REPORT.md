# Graph Report - dsu online  (2026-11-13)

## Corpus Check
- 111 files · ~74,012 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 41 file(s) not represented in the graph (top: .scss 38, (none) 2, .ico 1)

## Summary
- 648 nodes · 1646 edges · 28 communities (23 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f59879e5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- InnerPage.tsx
- Kit.tsx
- icons.tsx
- scrape.py
- ArrowLink
- package.json
- Testimonial.tsx
- compilerOptions
- international-learners/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- react
- README.md
- AGENTS.md
- Page.tsx
- CLAUDE.md
- ContentPage
- parse.ts
- specViews
- AdmissionSteps.tsx
- ProgramAdvantage.tsx
- renderSeg
- FeeTabs.tsx
- server.js
- section-heads.ts
- next

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 74 edges
2. `react` - 54 edges
3. `next` - 39 edges
4. `ArrowLink()` - 38 edges
5. `ChevronRight()` - 22 edges
6. `Icon()` - 18 edges
7. `Flow()` - 16 edges
8. `ChevronLeft()` - 16 edges
9. `compilerOptions` - 16 edges
10. `FramedImage()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Update 2026-10-26 (latest)` --references--> `flat()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Status` --references--> `faculty()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Update 2026-10-28` --references--> `ArrowLink()`  [INFERRED]
  CHECKPOINT.md → src/components/ui/ArrowLink.tsx
- `Architecture` --references--> `ReferPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ContentPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx

## Import Cycles
- None detected.

## Communities (28 total, 5 thin omitted)

### Community 0 - "InnerPage.tsx"
Cohesion: 0.07
Nodes (53): nextConfig, bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+45 more)

### Community 1 - "Kit.tsx"
Cohesion: 0.12
Nodes (19): CtaLink(), DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, LearningCards(), lsi, lsIcon() (+11 more)

### Community 2 - "icons.tsx"
Cohesion: 0.06
Nodes (41): lenis, fontMain, metadata, RootLayout(), ElectiveCombinator(), BrochureForm(), EnquiryContext, EnquiryProvider() (+33 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "ArrowLink"
Cohesion: 0.10
Nodes (35): ContactForm(), empty, Phase, EnquireButton(), ProgramHero(), ProgramHeroProps, empty, Phase (+27 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "Testimonial.tsx"
Cohesion: 0.18
Nodes (13): Avatar(), AvatarFallback(), AvatarImage(), Card(), CardContent(), CardFooter(), cx(), P (+5 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.10
Nodes (34): img(), InternationalLearners(), metadata, tints, CallbackForm(), ContinentCards(), compare, continents (+26 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.13
Nodes (14): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-26 (latest) (+6 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.09
Nodes (25): react, CareerItem, IndustryItem, Item, ICON_BY_SLUG, ICONS, emi(), EmiCalculator() (+17 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "Page.tsx"
Cohesion: 0.10
Nodes (23): ElectiveGrid(), LeaderGrid(), Tabs(), DataTable(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial (+15 more)

### Community 16 - "ContentPage"
Cohesion: 0.28
Nodes (16): slugify(), CtaBand(), InnerHero(), InnerPage(), Head(), Sec(), certificates(), ContentPage() (+8 more)

### Community 18 - "parse.ts"
Cohesion: 0.19
Nodes (12): cleanBlocks(), isNote(), isQuote(), FaqList(), asImg(), Faq, Img, parseFaq() (+4 more)

### Community 19 - "specViews"
Cohesion: 0.24
Nodes (12): CareerFlip(), CardGrid(), FacultyGrid(), RoleGrid(), careers(), faculty(), isP(), specViews() (+4 more)

### Community 20 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (6): AdmissionSteps(), heading(), ic, icons, Step, wrap()

### Community 21 - "ProgramAdvantage.tsx"
Cohesion: 0.25
Nodes (8): Ico(), P, ProgramAdvantage(), advantageBanner, AdvantageCard, advantageCards, advantageLead, dualCopy

### Community 22 - "renderSeg"
Cohesion: 0.24
Nodes (10): Checklist(), ClassApart(), ContactRow(), LogoWall(), Pic(), Prose(), Split(), Body() (+2 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 24 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 27 - "next"
Cohesion: 0.05
Nodes (55): Architecture, next, homeFaqs, HomePage(), About(), AboutBand(), aboutPhotos, Careers() (+47 more)

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 208 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `InnerPage.tsx`, `Kit.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `Testimonial.tsx`, `international-learners/page.tsx`, `Page.tsx`, `parse.ts`, `AdmissionSteps.tsx`, `FeeTabs.tsx`, `next`?**
  _High betweenness centrality (0.184) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06584723441615452 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `InnerPage.tsx`, `Kit.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `Testimonial.tsx`, `international-learners/page.tsx`, `react`, `Page.tsx`, `AdmissionSteps.tsx`, `ProgramAdvantage.tsx`, `server.js`, `not-found.tsx`?**
  _High betweenness centrality (0.158) - this node is a cross-community bridge._
- **Should `Kit.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11688311688311688 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `InnerPage.tsx`, `Kit.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `ContentPage`, `next`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._