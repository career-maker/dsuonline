# Graph Report - dsu online  (2026-11-05)

## Corpus Check
- 96 files · ~58,265 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 34 file(s) not represented in the graph (top: .scss 31, (none) 2, .ico 1)

## Summary
- 550 nodes · 1403 edges · 23 communities (19 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `32c78d2f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ContentPage
- Page.tsx
- icons.tsx
- scrape.py
- EnquiryModal.tsx
- package.json
- InnerPage.tsx
- compilerOptions
- Kit.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- react
- README.md
- AGENTS.md
- ArrowLink
- CLAUDE.md
- parse.ts
- slugify
- next
- FeeTable.tsx
- app/page.tsx
- SubView

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 69 edges
2. `react` - 44 edges
3. `next` - 34 edges
4. `ArrowLink()` - 32 edges
5. `ChevronRight()` - 23 edges
6. `Icon()` - 17 edges
7. `ChevronLeft()` - 17 edges
8. `Flow()` - 16 edges
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

## Communities (23 total, 4 thin omitted)

### Community 0 - "ContentPage"
Cohesion: 0.17
Nodes (21): Status, LeaderGrid(), ClassApart(), FacultyGrid(), LogoWall(), Pic(), Split(), Body() (+13 more)

### Community 1 - "Page.tsx"
Cohesion: 0.12
Nodes (16): Update 2026-10-26 (latest), ElectiveCombinator(), Tabs(), DataTable(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial (+8 more)

### Community 2 - "icons.tsx"
Cohesion: 0.06
Nodes (38): lenis, metadata, roboto, RootLayout(), BrochureForm(), FactsDrawer(), OPEN_FACTS, rows (+30 more)

### Community 3 - "scrape.py"
Cohesion: 0.09
Nodes (13): api(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail(), extract() (+5 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.15
Nodes (24): ContactForm(), empty, Phase, empty, Phase, V, CountryPicker(), Flag() (+16 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (30): eslintConfig, dependencies, lenis, next, react, react-dom, sass, devDependencies (+22 more)

### Community 6 - "InnerPage.tsx"
Cohesion: 0.14
Nodes (27): Accordion(), Flow(), isInternal(), Pic(), Qa(), InnerPage(), isFaq(), isStep() (+19 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "Kit.tsx"
Cohesion: 0.12
Nodes (18): Checklist(), ContactRow(), CtaLink(), FacultyShowcase(), highlight(), HIGHLIGHTS, LearningCards(), lsi (+10 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.22
Nodes (8): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Update 2026-10-28, What this is

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.09
Nodes (28): Update 2026-10-27 (QA-issue round, new account), react, FacultyCarousel(), Item, FacultyScroller(), FaqList(), Reveal(), StoryCards() (+20 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "ArrowLink"
Cohesion: 0.08
Nodes (44): bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved, BlogIndex() (+36 more)

### Community 16 - "parse.ts"
Cohesion: 0.21
Nodes (12): cleanBlocks(), isNote(), isQuote(), asImg(), Faq, Img, parseFaq(), parseFaqByQuestionMarks() (+4 more)

### Community 18 - "slugify"
Cohesion: 0.25
Nodes (7): slugify(), Head(), Sec(), withEyebrow(), headFor(), SectionHead, sectionHeads

### Community 19 - "next"
Cohesion: 0.07
Nodes (15): nextConfig, next, app, { createServer }, handle, next, AdmissionSteps(), heading() (+7 more)

### Community 22 - "app/page.tsx"
Cohesion: 0.06
Nodes (45): Architecture, homeFaqs, HomePage(), StatNumber(), About(), AboutBand(), aboutPhotos, Careers() (+37 more)

### Community 23 - "SubView"
Cohesion: 0.18
Nodes (9): CareerFlip(), CareerItem, IndustryItem, CardGrid(), RoleGrid(), careers(), SubView(), parsePairs() (+1 more)

## Knowledge Gaps
- **6 isolated node(s):** `react-dom`, `sass`, `@types/node`, `@types/react`, `@types/react-dom` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 187 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `Page.tsx`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `InnerPage.tsx`, `Kit.tsx`, `react`, `ArrowLink`, `app/page.tsx`?**
  _High betweenness centrality (0.168) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `react-dom`, `sass`, `@types/node` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11904761904761904 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Page.tsx`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `InnerPage.tsx`, `Kit.tsx`, `ArrowLink`, `next`, `app/page.tsx`, `SubView`?**
  _High betweenness centrality (0.159) - this node is a cross-community bridge._
- **Should `icons.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.058653846153846154 - nodes in this community are weakly interconnected._
- **Why does `Update 2026-10-26 (latest)` connect `Page.tsx` to `DSU Online — CHECKPOINT (read this first in any new session)`, `scrape.py`?**
  _High betweenness centrality (0.139) - this node is a cross-community bridge._