# Graph Report - dsu online  (2026-11-13)

## Corpus Check
- 115 files · ~75,631 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 45 file(s) not represented in the graph (top: .scss 42, (none) 2, .ico 1)

## Summary
- 668 nodes · 1690 edges · 26 communities (22 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5cd7862d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- InnerPage.tsx
- Page.tsx
- layout.tsx
- scrape.py
- EnquiryModal.tsx
- package.json
- app/page.tsx
- compilerOptions
- international-learners/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- icons.tsx
- README.md
- AGENTS.md
- server.js
- CLAUDE.md
- ArrowLink
- react
- ElectiveCombinator.tsx
- About.tsx
- FeeTabs.tsx
- FacultyArticles.tsx
- next
- home.ts

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 74 edges
2. `react` - 56 edges
3. `ArrowLink()` - 42 edges
4. `next` - 41 edges
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

## Communities (26 total, 4 thin omitted)

### Community 0 - "InnerPage.tsx"
Cohesion: 0.08
Nodes (50): nextConfig, bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve() (+42 more)

### Community 1 - "Page.tsx"
Cohesion: 0.05
Nodes (91): CareerFlip(), cleanBlocks(), isNote(), isQuote(), slugify(), InnerHero(), FaqList(), LeaderGrid() (+83 more)

### Community 2 - "layout.tsx"
Cohesion: 0.07
Nodes (32): lenis, react-dom, fontMain, metadata, RootLayout(), BrochureForm(), EnquiryContext, EnquiryProvider() (+24 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.16
Nodes (25): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+17 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "app/page.tsx"
Cohesion: 0.13
Nodes (16): Architecture, homeFaqs, HomePage(), Faq(), ProgramsBand(), Recognitions(), Testimonials(), WhyChoose() (+8 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.09
Nodes (37): gsap, img(), InternationalLearners(), metadata, tints, CallbackForm(), Phase, programmes (+29 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.13
Nodes (14): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-26 (latest) (+6 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "icons.tsx"
Cohesion: 0.08
Nodes (29): FacultyScroller(), Item, QuoteSlider(), FacultyStrip(), VideoTile(), Avatar(), AvatarFallback(), AvatarImage() (+21 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 16 - "ArrowLink"
Cohesion: 0.18
Nodes (11): EnquireButton(), ProgramHero(), ProgramHeroProps, Hero(), slidePos, slideSize, ArrowLink(), Props (+3 more)

### Community 20 - "react"
Cohesion: 0.07
Nodes (28): react, AdmissionSteps(), heading(), ic, icons, Step, wrap(), CareerItem (+20 more)

### Community 21 - "ElectiveCombinator.tsx"
Cohesion: 0.11
Nodes (18): Benefit(), Elective, ElectiveCombinator(), ICON, Card(), ElectiveGrid(), Item, Card() (+10 more)

### Community 22 - "About.tsx"
Cohesion: 0.20
Nodes (10): StatNumber(), About(), AboutBand(), aboutPhotos, Learning(), Counter(), FramedImage(), Props (+2 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 24 - "FacultyArticles.tsx"
Cohesion: 0.26
Nodes (9): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, toIsoDate(), Icon(), realFaculty, articles (+1 more)

### Community 25 - "next"
Cohesion: 0.22
Nodes (5): next, order, photos, Rect, iconSize

### Community 27 - "home.ts"
Cohesion: 0.12
Nodes (15): Careers(), aboutCopy, aboutFeatures, aboutStats, BentoTile, blogs, careerTabs, certifications (+7 more)

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 217 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `InnerPage.tsx`, `Page.tsx`, `layout.tsx`, `EnquiryModal.tsx`, `package.json`, `app/page.tsx`, `international-learners/page.tsx`, `icons.tsx`, `ArrowLink`, `ElectiveCombinator.tsx`, `About.tsx`, `FeeTabs.tsx`, `FacultyArticles.tsx`, `next`, `home.ts`?**
  _High betweenness centrality (0.189) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0750925436277102 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `InnerPage.tsx`, `Page.tsx`, `layout.tsx`, `EnquiryModal.tsx`, `package.json`, `app/page.tsx`, `international-learners/page.tsx`, `icons.tsx`, `server.js`, `ArrowLink`, `not-found.tsx`, `react`, `ElectiveCombinator.tsx`, `About.tsx`, `FacultyArticles.tsx`, `home.ts`?**
  _High betweenness centrality (0.157) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05054945054945055 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `InnerPage.tsx`, `Page.tsx`, `EnquiryModal.tsx`, `app/page.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `react`, `ElectiveCombinator.tsx`, `About.tsx`, `FacultyArticles.tsx`, `next`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._