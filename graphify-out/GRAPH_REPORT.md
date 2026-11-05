# Graph Report - dsu online  (2026-11-05)

## Corpus Check
- 94 files · ~57,260 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 34 file(s) not represented in the graph (top: .scss 31, (none) 2, .ico 1)

## Summary
- 544 nodes · 1378 edges · 25 communities (21 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b4d62b58`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ContentPage
- Page.tsx
- next
- scrape.py
- ArrowLink
- package.json
- compilerOptions
- Kit.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- react
- README.md
- AGENTS.md
- InnerPage.tsx
- CLAUDE.md
- parse.ts
- slugify
- AdmissionSteps.tsx
- PayOptions.tsx
- ElectiveGrid.tsx
- app/page.tsx
- DataTable
- CareerFlip.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 67 edges
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
- `Architecture` --references--> `AboutBand()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/About.tsx
- `Architecture` --references--> `WhyChoose()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/WhyChoose.tsx
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `loadBlogPost()`  [INFERRED]
  CHECKPOINT.md → src/lib/content.ts
- `Update 2026-10-26 (latest)` --references--> `img()`  [INFERRED]
  CHECKPOINT.md → tools/scrape.py

## Import Cycles
- None detected.

## Communities (25 total, 4 thin omitted)

### Community 0 - "ContentPage"
Cohesion: 0.18
Nodes (22): Architecture, LeaderGrid(), Checklist(), ClassApart(), ContactRow(), FacultyShowcase(), LogoWall(), Pic() (+14 more)

### Community 1 - "Page.tsx"
Cohesion: 0.13
Nodes (19): CardGrid(), FacultyGrid(), RoleGrid(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, careers(), contactSocial (+11 more)

### Community 2 - "next"
Cohesion: 0.05
Nodes (41): nextConfig, next, app, { createServer }, handle, next, metadata, roboto (+33 more)

### Community 3 - "scrape.py"
Cohesion: 0.09
Nodes (13): api(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail(), extract() (+5 more)

### Community 4 - "ArrowLink"
Cohesion: 0.13
Nodes (28): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+20 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (31): eslintConfig, dependencies, lenis, next, react, react-dom, sass, devDependencies (+23 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "Kit.tsx"
Cohesion: 0.13
Nodes (16): CtaLink(), DocList(), highlight(), HIGHLIGHTS, LearningCards(), lsi, lsIcon(), OfficeCard() (+8 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.20
Nodes (9): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-28 (+1 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.08
Nodes (31): Update 2026-10-27 (QA-issue round, new account), react, FacultyScroller(), FaqList(), Reveal(), StoryCards(), Faq, QuoteSlider() (+23 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "InnerPage.tsx"
Cohesion: 0.07
Nodes (56): bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved, Accordion() (+48 more)

### Community 16 - "parse.ts"
Cohesion: 0.24
Nodes (10): cleanBlocks(), isNote(), isQuote(), asImg(), Img, parseFaq(), parseFaqByQuestionMarks(), parseQuotes() (+2 more)

### Community 18 - "slugify"
Cohesion: 0.22
Nodes (8): slugify(), Head(), Sec(), LegalPage(), withEyebrow(), headFor(), SectionHead, sectionHeads

### Community 19 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (5): AdmissionSteps(), heading(), ic, icons, Step

### Community 20 - "PayOptions.tsx"
Cohesion: 0.25
Nodes (5): dash(), FeeTable(), icons, PayOptions(), stroke

### Community 21 - "ElectiveGrid.tsx"
Cohesion: 0.47
Nodes (4): ElectiveGrid(), Item, ICON_BY_SLUG, ICONS

### Community 22 - "app/page.tsx"
Cohesion: 0.06
Nodes (47): homeFaqs, HomePage(), StatNumber(), About(), AboutBand(), aboutPhotos, Careers(), avatar() (+39 more)

### Community 23 - "DataTable"
Cohesion: 0.40
Nodes (5): Update 2026-10-26 (latest), Tabs(), DataTable(), curriculum(), flat()

### Community 24 - "CareerFlip.tsx"
Cohesion: 0.40
Nodes (3): CareerFlip(), CareerItem, IndustryItem

## Knowledge Gaps
- **6 isolated node(s):** `react-dom`, `sass`, `@types/node`, `@types/react`, `@types/react-dom` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 187 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `Page.tsx`, `ArrowLink`, `package.json`, `not-found.tsx`, `Kit.tsx`, `react`, `InnerPage.tsx`, `AdmissionSteps.tsx`, `ElectiveGrid.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.173) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `react-dom`, `sass`, `@types/node` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1341991341991342 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Page.tsx`, `next`, `ArrowLink`, `package.json`, `Kit.tsx`, `InnerPage.tsx`, `AdmissionSteps.tsx`, `PayOptions.tsx`, `ElectiveGrid.tsx`, `app/page.tsx`, `CareerFlip.tsx`?**
  _High betweenness centrality (0.165) - this node is a cross-community bridge._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.05191146881287726 - nodes in this community are weakly interconnected._
- **Why does `Update 2026-10-26 (latest)` connect `DataTable` to `DSU Online — CHECKPOINT (read this first in any new session)`, `scrape.py`?**
  _High betweenness centrality (0.140) - this node is a cross-community bridge._