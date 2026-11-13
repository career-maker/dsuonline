# Graph Report - dsu online  (2026-11-12)

## Corpus Check
- 109 files · ~73,229 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 40 file(s) not represented in the graph (top: .scss 37, (none) 2, .ico 1)

## Summary
- 637 nodes · 1625 edges · 19 communities (16 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5ac6a4d2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ArrowLink
- ProgramHero.tsx
- next
- scrape.py
- EnquiryModal.tsx
- package.json
- compilerOptions
- react
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- icons.tsx
- README.md
- AGENTS.md
- Page.tsx
- CLAUDE.md
- AdmissionSteps.tsx
- EmiCalculator.tsx
- app/page.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 73 edges
2. `react` - 54 edges
3. `next` - 38 edges
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

## Communities (19 total, 3 thin omitted)

### Community 0 - "ArrowLink"
Cohesion: 0.06
Nodes (67): bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved, Accordion() (+59 more)

### Community 1 - "ProgramHero.tsx"
Cohesion: 0.39
Nodes (4): ProgramHero(), ProgramHeroProps, StatNumber(), Counter()

### Community 2 - "next"
Cohesion: 0.06
Nodes (24): nextConfig, next, app, { createServer }, handle, next, fontMain, metadata (+16 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.07
Nodes (46): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, BrochureForm() (+38 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (33): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+25 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "react"
Cohesion: 0.08
Nodes (39): react, img(), InternationalLearners(), metadata, tints, CareerItem, IndustryItem, CallbackForm() (+31 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.13
Nodes (14): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-26 (latest) (+6 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "icons.tsx"
Cohesion: 0.07
Nodes (30): FacultyScroller(), Item, icons, stroke, QuoteSlider(), WhyItem, FacultyStrip(), Avatar() (+22 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "Page.tsx"
Cohesion: 0.05
Nodes (91): CareerFlip(), cleanBlocks(), isNote(), isQuote(), slugify(), ElectiveGrid(), dash(), FeeTable() (+83 more)

### Community 20 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (6): AdmissionSteps(), heading(), ic, icons, Step, wrap()

### Community 25 - "EmiCalculator.tsx"
Cohesion: 0.60
Nodes (3): emi(), EmiCalculator(), inr()

### Community 27 - "app/page.tsx"
Cohesion: 0.05
Nodes (53): Architecture, homeFaqs, HomePage(), About(), AboutBand(), aboutPhotos, Careers(), avatar() (+45 more)

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 206 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `ArrowLink`, `ProgramHero.tsx`, `next`, `EnquiryModal.tsx`, `package.json`, `icons.tsx`, `Page.tsx`, `AdmissionSteps.tsx`, `EmiCalculator.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.188) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ArrowLink` be split into smaller, more focused modules?**
  _Cohesion score 0.060240963855421686 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `ArrowLink`, `ProgramHero.tsx`, `EnquiryModal.tsx`, `package.json`, `react`, `icons.tsx`, `Page.tsx`, `AdmissionSteps.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.153) - this node is a cross-community bridge._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.05725490196078432 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `ProgramHero.tsx`, `EnquiryModal.tsx`, `react`, `DSU Online — CHECKPOINT (read this first in any new session)`, `Page.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._