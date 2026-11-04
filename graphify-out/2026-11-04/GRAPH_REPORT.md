# Graph Report - dsu online  (2026-11-04)

## Corpus Check
- 92 files · ~56,034 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 34 file(s) not represented in the graph (top: .scss 31, (none) 2, .ico 1)

## Summary
- 532 nodes · 1343 edges · 17 communities (14 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cf007be2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Page.tsx
- InnerPage.tsx
- layout.tsx
- scrape.py
- EnquiryModal.tsx
- package.json
- next
- compilerOptions
- app/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- react
- README.md
- AGENTS.md
- CLAUDE.md
- BlogSlider.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 65 edges
2. `react` - 42 edges
3. `next` - 33 edges
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
- `Architecture` --references--> `WhyChoose()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/WhyChoose.tsx
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `loadBlogPost()`  [INFERRED]
  CHECKPOINT.md → src/lib/content.ts
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `Reveal()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Interactive.tsx

## Import Cycles
- None detected.

## Communities (17 total, 3 thin omitted)

### Community 0 - "Page.tsx"
Cohesion: 0.05
Nodes (87): Architecture, AdmissionSteps(), CareerFlip(), CareerItem, IndustryItem, cleanBlocks(), isNote(), isQuote() (+79 more)

### Community 1 - "InnerPage.tsx"
Cohesion: 0.07
Nodes (52): bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved, Accordion() (+44 more)

### Community 2 - "layout.tsx"
Cohesion: 0.08
Nodes (30): lenis, metadata, roboto, RootLayout(), BrochureForm(), EnquiryProvider(), FactsDrawer(), Footer() (+22 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): Update 2026-10-26 (latest), api(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.13
Nodes (27): ContactForm(), empty, Phase, icons, stroke, empty, Phase, ReferForm() (+19 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (30): eslintConfig, dependencies, lenis, next, react, react-dom, sass, devDependencies (+22 more)

### Community 6 - "next"
Cohesion: 0.07
Nodes (13): nextConfig, next, app, { createServer }, handle, next, ic, icons (+5 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "app/page.tsx"
Cohesion: 0.07
Nodes (39): homeFaqs, HomePage(), About(), aboutPhotos, Careers(), avatar(), FacultyArticles(), toIsoDate() (+31 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.20
Nodes (9): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-28 (+1 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.06
Nodes (35): Update 2026-10-27 (QA-issue round, new account), react, FaqList(), Reveal(), Faq, QuoteSlider(), OPEN_FACTS, rows (+27 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 19 - "BlogSlider.tsx"
Cohesion: 0.36
Nodes (7): Blogs(), MONTHS, ord(), Arrow(), BlogSlider(), Slide, toIsoBlogDate()

## Knowledge Gaps
- **6 isolated node(s):** `react-dom`, `sass`, `@types/node`, `@types/react`, `@types/react-dom` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 185 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `Page.tsx`, `InnerPage.tsx`, `layout.tsx`, `EnquiryModal.tsx`, `package.json`, `app/page.tsx`, `react`, `BlogSlider.tsx`?**
  _High betweenness centrality (0.176) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `react-dom`, `sass`, `@types/node` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.052525252525252523 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Page.tsx`, `InnerPage.tsx`, `layout.tsx`, `EnquiryModal.tsx`, `package.json`, `next`, `app/page.tsx`, `BlogSlider.tsx`?**
  _High betweenness centrality (0.166) - this node is a cross-community bridge._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07272727272727272 - nodes in this community are weakly interconnected._
- **Why does `Update 2026-10-26 (latest)` connect `scrape.py` to `Page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`?**
  _High betweenness centrality (0.143) - this node is a cross-community bridge._