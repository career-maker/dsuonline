# Graph Report - dsu online  (2026-11-09)

## Corpus Check
- 107 files · ~71,042 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 39 file(s) not represented in the graph (top: .scss 36, (none) 2, .ico 1)

## Summary
- 626 nodes · 1583 edges · 28 communities (23 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `718a4ee9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- InnerPage.tsx
- Page.tsx
- icons.tsx
- scrape.py
- ArrowLink
- package.json
- FacultyArticles.tsx
- compilerOptions
- international-learners/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- react
- README.md
- AGENTS.md
- app/page.tsx
- CLAUDE.md
- Testimonials.tsx
- next
- FeeTabs.tsx
- ProgramsBand.tsx
- Blogs.tsx
- server.js
- ElectiveGrid.tsx
- EmiCalculator.tsx
- Counter
- home.ts

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 72 edges
2. `react` - 53 edges
3. `next` - 37 edges
4. `ArrowLink()` - 36 edges
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
Cohesion: 0.08
Nodes (48): nextConfig, bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+40 more)

### Community 1 - "Page.tsx"
Cohesion: 0.06
Nodes (90): CareerFlip(), cleanBlocks(), isNote(), isQuote(), slugify(), ElectiveGrid(), CtaBand(), InnerHero() (+82 more)

### Community 2 - "icons.tsx"
Cohesion: 0.05
Nodes (42): lenis, metadata, roboto, RootLayout(), ElectiveCombinator(), EnquireButton(), BrochureForm(), EnquiryContext (+34 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (13): git(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail(), extract() (+5 more)

### Community 4 - "ArrowLink"
Cohesion: 0.12
Nodes (32): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CallbackForm() (+24 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (31): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+23 more)

### Community 6 - "FacultyArticles.tsx"
Cohesion: 0.17
Nodes (17): FacultyScroller(), Item, QuoteSlider(), avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip() (+9 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.09
Nodes (31): gsap, groups, img(), InternationalLearners(), metadata, ContinentCards(), compare, continents (+23 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.15
Nodes (12): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-26 (latest) (+4 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.07
Nodes (27): react, AdmissionSteps(), heading(), ic, icons, Step, wrap(), CareerItem (+19 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "app/page.tsx"
Cohesion: 0.25
Nodes (15): Architecture, homeFaqs, HomePage(), About(), AboutBand(), Careers(), Faq(), Hero() (+7 more)

### Community 16 - "Testimonials.tsx"
Cohesion: 0.23
Nodes (6): VideoTile(), PlayIcon(), initialOf(), TestimonialShowcase(), bentoTiles, tickerItems

### Community 18 - "next"
Cohesion: 0.18
Nodes (5): next, slidePos, slideSize, awards, heroSlides

### Community 19 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 20 - "ProgramsBand.tsx"
Cohesion: 0.25
Nodes (5): order, photos, Rect, Props, Rect

### Community 21 - "Blogs.tsx"
Cohesion: 0.25
Nodes (10): Blogs(), MONTHS, ord(), toSlide(), Arrow(), BlogSlider(), Slide, toIsoBlogDate() (+2 more)

### Community 22 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 23 - "ElectiveGrid.tsx"
Cohesion: 0.60
Nodes (3): Item, ICON_BY_SLUG, ICONS

### Community 25 - "EmiCalculator.tsx"
Cohesion: 0.60
Nodes (3): emi(), EmiCalculator(), inr()

### Community 27 - "home.ts"
Cohesion: 0.11
Nodes (16): aboutPhotos, aboutCopy, aboutFeatures, aboutStats, BentoTile, blogs, careerTabs, certifications (+8 more)

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 201 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `InnerPage.tsx`, `Page.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `FacultyArticles.tsx`, `international-learners/page.tsx`, `app/page.tsx`, `Testimonials.tsx`, `next`, `FeeTabs.tsx`, `ProgramsBand.tsx`, `Blogs.tsx`, `ElectiveGrid.tsx`, `EmiCalculator.tsx`, `Counter`, `home.ts`?**
  _High betweenness centrality (0.180) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07570621468926554 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `InnerPage.tsx`, `Page.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `FacultyArticles.tsx`, `international-learners/page.tsx`, `react`, `Testimonials.tsx`, `ProgramsBand.tsx`, `Blogs.tsx`, `server.js`, `ElectiveGrid.tsx`, `not-found.tsx`, `home.ts`?**
  _High betweenness centrality (0.158) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05586477015048444 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `InnerPage.tsx`, `Page.tsx`, `icons.tsx`, `FacultyArticles.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `app/page.tsx`, `next`, `ProgramsBand.tsx`, `Blogs.tsx`, `home.ts`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._