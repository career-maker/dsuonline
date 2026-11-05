# Graph Report - dsu online  (2026-11-05)

## Corpus Check
- 99 files · ~59,592 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 38 file(s) not represented in the graph (top: .scss 34, (none) 2, .ico 1)

## Summary
- 573 nodes · 1459 edges · 20 communities (16 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1ef88557`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- content.ts
- Page.tsx
- next
- scrape.py
- EnquiryModal.tsx
- package.json
- react
- compilerOptions
- InnerPage.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- Testimonial.tsx
- README.md
- AGENTS.md
- CLAUDE.md
- server.js
- AdmissionSteps.tsx
- app/page.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 70 edges
2. `react` - 46 edges
3. `next` - 35 edges
4. `ArrowLink()` - 32 edges
5. `ChevronRight()` - 22 edges
6. `Icon()` - 18 edges
7. `Flow()` - 16 edges
8. `ChevronLeft()` - 16 edges
9. `compilerOptions` - 16 edges
10. `FramedImage()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Update 2026-10-28` --references--> `ArrowLink()`  [INFERRED]
  CHECKPOINT.md → src/components/ui/ArrowLink.tsx
- `Status` --references--> `faculty()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ReferPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ContentPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `loadBlogPost()`  [INFERRED]
  CHECKPOINT.md → src/lib/content.ts

## Import Cycles
- None detected.

## Communities (20 total, 4 thin omitted)

### Community 0 - "content.ts"
Cohesion: 0.10
Nodes (31): nextConfig, bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+23 more)

### Community 1 - "Page.tsx"
Cohesion: 0.05
Nodes (85): Status, Update 2026-10-26 (latest), CareerFlip(), CareerItem, IndustryItem, cleanBlocks(), isNote(), isQuote() (+77 more)

### Community 2 - "next"
Cohesion: 0.06
Nodes (38): lenis, next, metadata, roboto, RootLayout(), BrochureForm(), EnquiryContext, EnquiryProvider() (+30 more)

### Community 3 - "scrape.py"
Cohesion: 0.09
Nodes (13): api(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail(), extract() (+5 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.17
Nodes (24): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+16 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (30): eslintConfig, dependencies, lenis, next, react, react-dom, sass, devDependencies (+22 more)

### Community 6 - "react"
Cohesion: 0.10
Nodes (24): react, ElectiveGrid(), Item, ICON_BY_SLUG, ICONS, emi(), EmiCalculator(), inr() (+16 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "InnerPage.tsx"
Cohesion: 0.09
Nodes (39): Accordion(), BlogPost(), ElectiveCombinator(), EnquireButton(), Flow(), isInternal(), Pic(), Qa() (+31 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.22
Nodes (8): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Update 2026-10-28, What this is

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "Testimonial.tsx"
Cohesion: 0.11
Nodes (21): Update 2026-10-27 (QA-issue round, new account), Reveal(), Testimonials(), Avatar(), AvatarFallback(), AvatarImage(), Card(), CardContent() (+13 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 20 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 21 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (5): AdmissionSteps(), heading(), ic, icons, Step

### Community 27 - "app/page.tsx"
Cohesion: 0.05
Nodes (52): Architecture, homeFaqs, HomePage(), Faq, StatNumber(), About(), AboutBand(), aboutPhotos (+44 more)

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 188 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `content.ts`, `Page.tsx`, `next`, `EnquiryModal.tsx`, `package.json`, `InnerPage.tsx`, `Testimonial.tsx`, `AdmissionSteps.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.164) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09878048780487805 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `content.ts`, `Page.tsx`, `EnquiryModal.tsx`, `package.json`, `react`, `InnerPage.tsx`, `Testimonial.tsx`, `server.js`, `AdmissionSteps.tsx`, `not-found.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.163) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05197594501718213 - nodes in this community are weakly interconnected._
- **Why does `Update 2026-10-26 (latest)` connect `Page.tsx` to `DSU Online — CHECKPOINT (read this first in any new session)`, `scrape.py`?**
  _High betweenness centrality (0.134) - this node is a cross-community bridge._