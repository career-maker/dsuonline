# Graph Report - dsu online  (2026-11-05)

## Corpus Check
- 95 files · ~58,664 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 35 file(s) not represented in the graph (top: .scss 31, (none) 2, .ico 1)

## Summary
- 552 nodes · 1406 edges · 26 communities (20 shown, 6 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `388e10a8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Kit.tsx
- Page.tsx
- icons.tsx
- scrape.py
- ArrowLink
- package.json
- parse.ts
- compilerOptions
- Blogs.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- SubView
- README.md
- AGENTS.md
- ContentPage
- CLAUDE.md
- renderSeg
- CareerFlip.tsx
- server.js
- FeeTable.tsx
- AdmissionSteps.tsx
- section-heads.ts
- react
- app/page.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 69 edges
2. `react` - 43 edges
3. `next` - 34 edges
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
- `Architecture` --references--> `AboutBand()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/About.tsx
- `Architecture` --references--> `WhyChoose()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/WhyChoose.tsx
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `loadBlogPost()`  [INFERRED]
  CHECKPOINT.md → src/lib/content.ts

## Import Cycles
- None detected.

## Communities (26 total, 6 thin omitted)

### Community 0 - "Kit.tsx"
Cohesion: 0.13
Nodes (16): CtaLink(), DocList(), highlight(), HIGHLIGHTS, LearningCards(), lsi, lsIcon(), OfficeCard() (+8 more)

### Community 1 - "Page.tsx"
Cohesion: 0.12
Nodes (22): LeaderGrid(), ClassApart(), Pic(), Split(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, Body() (+14 more)

### Community 2 - "icons.tsx"
Cohesion: 0.06
Nodes (39): lenis, metadata, roboto, RootLayout(), ElectiveCombinator(), BrochureForm(), EnquiryContext, EnquiryProvider() (+31 more)

### Community 3 - "scrape.py"
Cohesion: 0.09
Nodes (13): api(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail(), extract() (+5 more)

### Community 4 - "ArrowLink"
Cohesion: 0.14
Nodes (28): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+20 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (30): eslintConfig, dependencies, lenis, next, react, react-dom, sass, devDependencies (+22 more)

### Community 6 - "parse.ts"
Cohesion: 0.22
Nodes (11): cleanBlocks(), isNote(), isQuote(), asImg(), Faq, Img, parseFaq(), parseFaqByQuestionMarks() (+3 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "Blogs.tsx"
Cohesion: 0.29
Nodes (9): Blogs(), MONTHS, ord(), toSlide(), Arrow(), BlogSlider(), Slide, toIsoBlogDate() (+1 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.22
Nodes (8): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Update 2026-10-28, What this is

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "SubView"
Cohesion: 0.20
Nodes (11): Status, CardGrid(), FacultyGrid(), RoleGrid(), careers(), faculty(), isP(), learningCards() (+3 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "ContentPage"
Cohesion: 0.07
Nodes (61): Architecture, bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+53 more)

### Community 16 - "renderSeg"
Cohesion: 0.22
Nodes (9): Update 2026-10-26 (latest), Tabs(), Checklist(), ContactRow(), DataTable(), Prose(), curriculum(), flat() (+1 more)

### Community 18 - "CareerFlip.tsx"
Cohesion: 0.40
Nodes (3): CareerFlip(), CareerItem, IndustryItem

### Community 19 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 21 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (5): AdmissionSteps(), heading(), ic, icons, Step

### Community 26 - "react"
Cohesion: 0.06
Nodes (42): Update 2026-10-27 (QA-issue round, new account), nextConfig, next, react, ElectiveGrid(), Item, ICON_BY_SLUG, ICONS (+34 more)

### Community 27 - "app/page.tsx"
Cohesion: 0.06
Nodes (45): homeFaqs, HomePage(), StatNumber(), About(), AboutBand(), aboutPhotos, Careers(), Faq() (+37 more)

## Knowledge Gaps
- **6 isolated node(s):** `react-dom`, `sass`, `@types/node`, `@types/react`, `@types/react-dom` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 188 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `react` to `Kit.tsx`, `Page.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `Blogs.tsx`, `ContentPage`, `server.js`, `AdmissionSteps.tsx`, `not-found.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.167) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `react-dom`, `sass`, `@types/node` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Kit.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13450292397660818 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Kit.tsx`, `Page.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `Blogs.tsx`, `ContentPage`, `CareerFlip.tsx`, `AdmissionSteps.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.157) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12318840579710146 - nodes in this community are weakly interconnected._
- **Why does `Update 2026-10-26 (latest)` connect `renderSeg` to `DSU Online — CHECKPOINT (read this first in any new session)`, `scrape.py`?**
  _High betweenness centrality (0.138) - this node is a cross-community bridge._