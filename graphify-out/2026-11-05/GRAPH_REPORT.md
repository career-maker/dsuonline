# Graph Report - dsu online  (2026-11-05)

## Corpus Check
- 98 files · ~59,109 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 37 file(s) not represented in the graph (top: .scss 33, (none) 2, .ico 1)

## Summary
- 568 nodes · 1449 edges · 19 communities (15 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `647b55d8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- content.ts
- Page.tsx
- icons.tsx
- scrape.py
- EnquiryModal.tsx
- package.json
- react
- compilerOptions
- InnerPage.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- README.md
- AGENTS.md
- CLAUDE.md
- server.js
- AdmissionSteps.tsx
- next

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 69 edges
2. `react` - 45 edges
3. `next` - 35 edges
4. `ArrowLink()` - 32 edges
5. `ChevronRight()` - 22 edges
6. `Icon()` - 18 edges
7. `Flow()` - 16 edges
8. `ChevronLeft()` - 16 edges
9. `compilerOptions` - 16 edges
10. `FramedImage()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Status` --references--> `faculty()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Update 2026-10-28` --references--> `ArrowLink()`  [INFERRED]
  CHECKPOINT.md → src/components/ui/ArrowLink.tsx
- `Update 2026-10-26 (latest)` --references--> `flat()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `AboutBand()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/About.tsx
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `Testimonials()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/Testimonials.tsx

## Import Cycles
- None detected.

## Communities (19 total, 4 thin omitted)

### Community 0 - "content.ts"
Cohesion: 0.10
Nodes (28): nextConfig, bannerDuration(), generateMetadata(), generateStaticParams(), Params, resolve(), Resolved, Crumb (+20 more)

### Community 1 - "Page.tsx"
Cohesion: 0.05
Nodes (87): Architecture, CareerFlip(), cleanBlocks(), isNote(), isQuote(), slugify(), ElectiveGrid(), dash() (+79 more)

### Community 2 - "icons.tsx"
Cohesion: 0.06
Nodes (38): lenis, metadata, roboto, RootLayout(), BrochureForm(), EnquiryProvider(), FactsDrawer(), OPEN_FACTS (+30 more)

### Community 3 - "scrape.py"
Cohesion: 0.09
Nodes (13): api(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail(), extract() (+5 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.16
Nodes (25): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+17 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (30): eslintConfig, dependencies, lenis, next, react, react-dom, sass, devDependencies (+22 more)

### Community 6 - "react"
Cohesion: 0.07
Nodes (35): react, CareerItem, IndustryItem, Item, ICON_BY_SLUG, ICONS, FacultyScroller(), Item (+27 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "InnerPage.tsx"
Cohesion: 0.08
Nodes (45): InnerRoute(), Accordion(), BlogIndex(), BlogPost(), Chunk, ElectiveCombinator(), EnquireButton(), Flow() (+37 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.15
Nodes (12): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-26 (latest) (+4 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 20 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 21 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (5): AdmissionSteps(), heading(), ic, icons, Step

### Community 27 - "next"
Cohesion: 0.06
Nodes (49): next, homeFaqs, HomePage(), StatNumber(), About(), AboutBand(), aboutPhotos, Careers() (+41 more)

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 187 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `content.ts`, `Page.tsx`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `react`, `InnerPage.tsx`, `server.js`, `AdmissionSteps.tsx`, `not-found.tsx`?**
  _High betweenness centrality (0.165) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10317460317460317 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `content.ts`, `Page.tsx`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `InnerPage.tsx`, `AdmissionSteps.tsx`, `next`?**
  _High betweenness centrality (0.162) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.052360338074623786 - nodes in this community are weakly interconnected._
- **Why does `Update 2026-10-26 (latest)` connect `DSU Online — CHECKPOINT (read this first in any new session)` to `Page.tsx`, `scrape.py`?**
  _High betweenness centrality (0.135) - this node is a cross-community bridge._