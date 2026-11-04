# Graph Report - dsu online  (2026-11-04)

## Corpus Check
- 93 files · ~56,902 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 34 file(s) not represented in the graph (top: .scss 31, (none) 2, .ico 1)

## Summary
- 540 nodes · 1365 edges · 22 communities (19 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `49896e4c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Page.tsx
- InnerPage.tsx
- layout.tsx
- scrape.py
- EnquiryModal.tsx
- package.json
- ProgramsBand.tsx
- compilerOptions
- Icon
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- ChevronRight
- README.md
- AGENTS.md
- react
- CLAUDE.md
- FacultyArticles.tsx
- next
- app/page.tsx
- icons.tsx
- home.ts

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 66 edges
2. `react` - 43 edges
3. `next` - 33 edges
4. `ArrowLink()` - 32 edges
5. `ChevronRight()` - 21 edges
6. `Icon()` - 17 edges
7. `Flow()` - 16 edges
8. `compilerOptions` - 16 edges
9. `FramedImage()` - 15 edges
10. `ChevronLeft()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Update 2026-10-28` --references--> `ArrowLink()`  [INFERRED]
  CHECKPOINT.md → src/components/ui/ArrowLink.tsx
- `Update 2026-10-26 (latest)` --references--> `flat()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ReferPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ContentPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `Testimonials()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/Testimonials.tsx

## Import Cycles
- None detected.

## Communities (22 total, 3 thin omitted)

### Community 0 - "Page.tsx"
Cohesion: 0.05
Nodes (87): CareerFlip(), cleanBlocks(), isNote(), isQuote(), slugify(), ElectiveGrid(), dash(), FeeTable() (+79 more)

### Community 1 - "InnerPage.tsx"
Cohesion: 0.07
Nodes (59): bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved, Accordion() (+51 more)

### Community 2 - "layout.tsx"
Cohesion: 0.06
Nodes (36): lenis, metadata, roboto, RootLayout(), ElectiveCombinator(), BrochureForm(), EnquiryContext, EnquiryProvider() (+28 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): Update 2026-10-26 (latest), api(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.17
Nodes (23): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+15 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (30): eslintConfig, dependencies, lenis, next, react, react-dom, sass, devDependencies (+22 more)

### Community 6 - "ProgramsBand.tsx"
Cohesion: 0.25
Nodes (5): order, photos, Rect, Props, Rect

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "Icon"
Cohesion: 0.25
Nodes (7): Architecture, AboutBand(), WhyChoose(), Icon(), certifications, whyItems, iconSize

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.17
Nodes (11): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-27 (QA-issue round, new account) (+3 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "ChevronRight"
Cohesion: 0.14
Nodes (16): FacultyScroller(), pages, slotClass, Testimonials(), CardCarousel(), Props, ChevronLeft(), ChevronRight() (+8 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "react"
Cohesion: 0.14
Nodes (15): react, CareerItem, IndustryItem, QuoteSlider(), StatNumber(), Blogs(), MONTHS, ord() (+7 more)

### Community 18 - "FacultyArticles.tsx"
Cohesion: 0.38
Nodes (5): avatar(), FacultyArticles(), toIsoDate(), articles, faculty

### Community 19 - "next"
Cohesion: 0.07
Nodes (14): nextConfig, next, app, { createServer }, handle, next, AdmissionSteps(), heading() (+6 more)

### Community 20 - "app/page.tsx"
Cohesion: 0.32
Nodes (10): homeFaqs, HomePage(), About(), Careers(), Faq(), Hero(), Learning(), ProgramsBand() (+2 more)

### Community 21 - "icons.tsx"
Cohesion: 0.21
Nodes (5): VideoTile(), base, P, PlayIcon(), bentoTiles

### Community 22 - "home.ts"
Cohesion: 0.13
Nodes (13): aboutPhotos, aboutCopy, aboutFeatures, aboutStats, awards, BentoTile, blogs, careerTabs (+5 more)

## Knowledge Gaps
- **6 isolated node(s):** `react-dom`, `sass`, `@types/node`, `@types/react`, `@types/react-dom` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 186 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `Page.tsx`, `InnerPage.tsx`, `layout.tsx`, `EnquiryModal.tsx`, `package.json`, `ProgramsBand.tsx`, `Icon`, `ChevronRight`, `react`, `FacultyArticles.tsx`, `home.ts`?**
  _High betweenness centrality (0.174) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `react-dom`, `sass`, `@types/node` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05232323232323232 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Page.tsx`, `InnerPage.tsx`, `layout.tsx`, `EnquiryModal.tsx`, `package.json`, `ProgramsBand.tsx`, `ChevronRight`, `FacultyArticles.tsx`, `next`, `app/page.tsx`, `icons.tsx`, `home.ts`?**
  _High betweenness centrality (0.166) - this node is a cross-community bridge._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06627175120325805 - nodes in this community are weakly interconnected._
- **Why does `Update 2026-10-26 (latest)` connect `scrape.py` to `Page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`?**
  _High betweenness centrality (0.141) - this node is a cross-community bridge._