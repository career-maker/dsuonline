# Graph Report - dsu online  (2026-11-04)

## Corpus Check
- 89 files · ~54,675 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 31 file(s) not represented in the graph (top: .scss 28, (none) 2, .ico 1)

## Summary
- 517 nodes · 1314 edges · 22 communities (19 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4be3d746`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Page.tsx
- InnerPage.tsx
- next
- scrape.py
- EnquiryModal.tsx
- package.json
- icons.tsx
- compilerOptions
- home.ts
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- Testimonials.tsx
- README.md
- AGENTS.md
- Footer.tsx
- CLAUDE.md
- app/page.tsx
- Icon
- react
- Learning.tsx
- FacultyArticles.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 61 edges
2. `react` - 40 edges
3. `next` - 32 edges
4. `ArrowLink()` - 32 edges
5. `ChevronRight()` - 19 edges
6. `Icon()` - 17 edges
7. `Flow()` - 16 edges
8. `compilerOptions` - 16 edges
9. `FramedImage()` - 15 edges
10. `ChevronLeft()` - 13 edges

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
Cohesion: 0.06
Nodes (81): CareerFlip(), cleanBlocks(), isNote(), isQuote(), slugify(), ElectiveGrid(), FaqList(), LeaderGrid() (+73 more)

### Community 1 - "InnerPage.tsx"
Cohesion: 0.08
Nodes (49): bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved, Accordion() (+41 more)

### Community 2 - "next"
Cohesion: 0.07
Nodes (18): nextConfig, lenis, next, app, { createServer }, handle, next, metadata (+10 more)

### Community 3 - "scrape.py"
Cohesion: 0.09
Nodes (13): api(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail(), extract() (+5 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.09
Nodes (38): ContactForm(), empty, Phase, EnquireButton(), empty, Phase, ReferForm(), V (+30 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (30): eslintConfig, dependencies, lenis, next, react, react-dom, sass, devDependencies (+22 more)

### Community 6 - "icons.tsx"
Cohesion: 0.13
Nodes (9): order, photos, Rect, ArrowLink(), Props, Variant, base, DotsIcon() (+1 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "home.ts"
Cohesion: 0.11
Nodes (16): aboutPhotos, slidePos, slideSize, aboutCopy, aboutFeatures, aboutStats, awards, BentoTile (+8 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.15
Nodes (12): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-26 (latest) (+4 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "Testimonials.tsx"
Cohesion: 0.14
Nodes (17): QuoteSlider(), pages, slotClass, Testimonials(), CardCarousel(), Props, ChevronLeft(), ChevronRight() (+9 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "Footer.tsx"
Cohesion: 0.25
Nodes (9): BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), Program, Specialization (+1 more)

### Community 16 - "app/page.tsx"
Cohesion: 0.31
Nodes (10): homeFaqs, HomePage(), About(), Careers(), Faq(), Hero(), Learning(), ProgramsBand() (+2 more)

### Community 18 - "Icon"
Cohesion: 0.25
Nodes (7): Architecture, AboutBand(), WhyChoose(), Icon(), certifications, whyItems, iconSize

### Community 19 - "react"
Cohesion: 0.12
Nodes (16): react, CareerItem, IndustryItem, Item, ICON_BY_SLUG, ICONS, StatNumber(), Blogs() (+8 more)

### Community 20 - "Learning.tsx"
Cohesion: 0.31
Nodes (5): VideoTile(), Props, Rect, PlayIcon(), bentoTiles

### Community 21 - "FacultyArticles.tsx"
Cohesion: 0.38
Nodes (5): avatar(), FacultyArticles(), toIsoDate(), articles, faculty

## Knowledge Gaps
- **6 isolated node(s):** `react-dom`, `sass`, `@types/node`, `@types/react`, `@types/react-dom` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 178 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `Page.tsx`, `InnerPage.tsx`, `EnquiryModal.tsx`, `package.json`, `icons.tsx`, `home.ts`, `Testimonials.tsx`, `Footer.tsx`, `app/page.tsx`, `Icon`, `react`, `Learning.tsx`, `FacultyArticles.tsx`?**
  _High betweenness centrality (0.177) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `react-dom`, `sass`, `@types/node` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05948399426660296 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Page.tsx`, `InnerPage.tsx`, `next`, `EnquiryModal.tsx`, `package.json`, `icons.tsx`, `home.ts`, `Testimonials.tsx`, `Footer.tsx`, `app/page.tsx`, `Learning.tsx`, `FacultyArticles.tsx`?**
  _High betweenness centrality (0.163) - this node is a cross-community bridge._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07890122735242548 - nodes in this community are weakly interconnected._
- **Why does `Update 2026-10-26 (latest)` connect `DSU Online — CHECKPOINT (read this first in any new session)` to `Page.tsx`, `scrape.py`?**
  _High betweenness centrality (0.146) - this node is a cross-community bridge._