# Graph Report - dsu online  (2026-11-04)

## Corpus Check
- 85 files · ~53,162 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .scss 26, (none) 2, .ico 1)

## Summary
- 497 nodes · 1283 edges · 18 communities (14 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `785edf89`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Page.tsx
- InnerPage.tsx
- icons.tsx
- scrape.py
- EnquiryModal.tsx
- package.json
- content.ts
- compilerOptions
- ArrowLink
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- react
- README.md
- AGENTS.md
- server.js
- CLAUDE.md

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 61 edges
2. `react` - 38 edges
3. `ArrowLink()` - 32 edges
4. `next` - 31 edges
5. `ChevronRight()` - 19 edges
6. `FramedImage()` - 17 edges
7. `Icon()` - 17 edges
8. `Flow()` - 16 edges
9. `compilerOptions` - 16 edges
10. `ChevronLeft()` - 13 edges

## Surprising Connections (you probably didn't know these)
- `Update 2026-10-28` --references--> `ArrowLink()`  [INFERRED]
  CHECKPOINT.md → src/components/ui/ArrowLink.tsx
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `Reveal()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Interactive.tsx
- `Update 2026-10-26 (latest)` --references--> `flat()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ReferPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ContentPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx

## Import Cycles
- None detected.

## Communities (18 total, 4 thin omitted)

### Community 0 - "Page.tsx"
Cohesion: 0.07
Nodes (73): cleanBlocks(), isNote(), isQuote(), slugify(), FaqList(), LeaderGrid(), Reveal(), Tabs() (+65 more)

### Community 1 - "InnerPage.tsx"
Cohesion: 0.10
Nodes (33): Accordion(), EnquireButton(), Flow(), isInternal(), Pic(), Qa(), Crumb, CtaBand() (+25 more)

### Community 2 - "icons.tsx"
Cohesion: 0.09
Nodes (19): lenis, metadata, roboto, RootLayout(), EnquiryProvider(), FactsDrawer(), OPEN_FACTS, rows (+11 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): Update 2026-10-26 (latest), api(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.14
Nodes (28): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+20 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (30): eslintConfig, dependencies, lenis, next, react, react-dom, sass, devDependencies (+22 more)

### Community 6 - "content.ts"
Cohesion: 0.09
Nodes (34): nextConfig, bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+26 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "ArrowLink"
Cohesion: 0.05
Nodes (62): Architecture, next, homeFaqs, HomePage(), About(), AboutBand(), aboutPhotos, Careers() (+54 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.18
Nodes (10): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-27 (QA-issue round, new account) (+2 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.15
Nodes (16): react, ElectiveCarousel(), ICON_BY_SLUG, ICONS, QuoteSlider(), StatNumber(), Blogs(), MONTHS (+8 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

## Knowledge Gaps
- **6 isolated node(s):** `react-dom`, `sass`, `@types/node`, `@types/react`, `@types/react-dom` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 170 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `ArrowLink` to `Page.tsx`, `InnerPage.tsx`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `content.ts`, `react`, `server.js`, `not-found.tsx`?**
  _High betweenness centrality (0.176) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `react-dom`, `sass`, `@types/node` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06846899794299148 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Page.tsx`, `InnerPage.tsx`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `content.ts`, `ArrowLink`?**
  _High betweenness centrality (0.154) - this node is a cross-community bridge._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10104529616724739 - nodes in this community are weakly interconnected._
- **Why does `Update 2026-10-26 (latest)` connect `scrape.py` to `Page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._