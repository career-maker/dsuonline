# Graph Report - dsu online  (2026-11-05)

## Corpus Check
- 93 files · ~57,107 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 34 file(s) not represented in the graph (top: .scss 31, (none) 2, .ico 1)

## Summary
- 541 nodes · 1372 edges · 18 communities (14 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `385df2c8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Page.tsx
- InnerPage.tsx
- next
- scrape.py
- EnquiryModal.tsx
- package.json
- compilerOptions
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- react
- README.md
- AGENTS.md
- content.ts
- CLAUDE.md
- AdmissionSteps.tsx
- ArrowLink

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
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `loadBlogPost()`  [INFERRED]
  CHECKPOINT.md → src/lib/content.ts

## Import Cycles
- None detected.

## Communities (18 total, 4 thin omitted)

### Community 0 - "Page.tsx"
Cohesion: 0.05
Nodes (90): CareerFlip(), CareerItem, IndustryItem, cleanBlocks(), isNote(), isQuote(), slugify(), ElectiveCombinator() (+82 more)

### Community 1 - "InnerPage.tsx"
Cohesion: 0.15
Nodes (22): Accordion(), Flow(), isInternal(), Pic(), Qa(), isFaq(), isStep(), SectionView() (+14 more)

### Community 2 - "next"
Cohesion: 0.06
Nodes (39): nextConfig, next, app, { createServer }, handle, next, metadata, roboto (+31 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): Update 2026-10-26 (latest), api(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.17
Nodes (23): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+15 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (31): eslintConfig, dependencies, lenis, next, react, react-dom, sass, devDependencies (+23 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.20
Nodes (9): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-28 (+1 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.07
Nodes (33): Update 2026-10-27 (QA-issue round, new account), react, Item, ICON_BY_SLUG, ICONS, FacultyScroller(), FaqList(), Reveal() (+25 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "content.ts"
Cohesion: 0.11
Nodes (31): bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved, BlogIndex() (+23 more)

### Community 19 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (5): AdmissionSteps(), heading(), ic, icons, Step

### Community 22 - "ArrowLink"
Cohesion: 0.05
Nodes (54): Architecture, homeFaqs, HomePage(), EnquireButton(), StatNumber(), EnquiryContext, useEnquiry(), About() (+46 more)

## Knowledge Gaps
- **6 isolated node(s):** `react-dom`, `sass`, `@types/node`, `@types/react`, `@types/react-dom` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 185 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `Page.tsx`, `InnerPage.tsx`, `EnquiryModal.tsx`, `package.json`, `not-found.tsx`, `react`, `content.ts`, `AdmissionSteps.tsx`, `ArrowLink`?**
  _High betweenness centrality (0.174) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `react-dom`, `sass`, `@types/node` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05120883304778222 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Page.tsx`, `InnerPage.tsx`, `next`, `EnquiryModal.tsx`, `package.json`, `content.ts`, `AdmissionSteps.tsx`, `ArrowLink`?**
  _High betweenness centrality (0.166) - this node is a cross-community bridge._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.05576923076923077 - nodes in this community are weakly interconnected._
- **Why does `Update 2026-10-26 (latest)` connect `scrape.py` to `Page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`?**
  _High betweenness centrality (0.141) - this node is a cross-community bridge._