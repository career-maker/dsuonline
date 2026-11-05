# Graph Report - dsu online  (2026-11-05)

## Corpus Check
- 95 files · ~57,902 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 34 file(s) not represented in the graph (top: .scss 31, (none) 2, .ico 1)

## Summary
- 546 nodes · 1380 edges · 25 communities (20 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `846eecb5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ContentPage
- Page.tsx
- icons.tsx
- scrape.py
- ArrowLink
- package.json
- compilerOptions
- Kit.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- ChevronRight
- README.md
- AGENTS.md
- InnerPage.tsx
- CLAUDE.md
- parse.ts
- slugify
- AdmissionSteps.tsx
- FeeTable.tsx
- react
- next
- Interactive.tsx
- server.js

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
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `Testimonials()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/Testimonials.tsx
- `Architecture` --references--> `WhyChoose()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/WhyChoose.tsx
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `loadBlogPost()`  [INFERRED]
  CHECKPOINT.md → src/lib/content.ts
- `Update 2026-10-26 (latest)` --references--> `img()`  [INFERRED]
  CHECKPOINT.md → tools/scrape.py

## Import Cycles
- None detected.

## Communities (25 total, 5 thin omitted)

### Community 0 - "ContentPage"
Cohesion: 0.17
Nodes (23): Architecture, Checklist(), ClassApart(), ContactRow(), FacultyShowcase(), LogoWall(), Pic(), Prose() (+15 more)

### Community 1 - "Page.tsx"
Cohesion: 0.11
Nodes (22): CareerFlip(), CareerItem, IndustryItem, CardGrid(), FacultyGrid(), RoleGrid(), ADMISSION_PHOTOS, BANNERS (+14 more)

### Community 2 - "icons.tsx"
Cohesion: 0.06
Nodes (39): lenis, metadata, roboto, RootLayout(), ElectiveCombinator(), BrochureForm(), EnquiryContext, EnquiryProvider() (+31 more)

### Community 3 - "scrape.py"
Cohesion: 0.09
Nodes (13): api(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail(), extract() (+5 more)

### Community 4 - "ArrowLink"
Cohesion: 0.14
Nodes (27): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+19 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (30): eslintConfig, dependencies, lenis, next, react, react-dom, sass, devDependencies (+22 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "Kit.tsx"
Cohesion: 0.13
Nodes (17): CtaLink(), DocList(), highlight(), HIGHLIGHTS, LearningCards(), lsi, lsIcon(), OfficeCard() (+9 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.17
Nodes (11): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-27 (QA-issue round, new account) (+3 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "ChevronRight"
Cohesion: 0.13
Nodes (17): FacultyScroller(), StoryCards(), pages, slotClass, Testimonials(), CardCarousel(), Props, ChevronLeft() (+9 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "InnerPage.tsx"
Cohesion: 0.07
Nodes (56): nextConfig, bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+48 more)

### Community 16 - "parse.ts"
Cohesion: 0.24
Nodes (10): cleanBlocks(), isNote(), isQuote(), asImg(), Img, parseFaq(), parseFaqByQuestionMarks(), parseQuotes() (+2 more)

### Community 18 - "slugify"
Cohesion: 0.25
Nodes (7): slugify(), Head(), Sec(), withEyebrow(), headFor(), SectionHead, sectionHeads

### Community 19 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (5): AdmissionSteps(), heading(), ic, icons, Step

### Community 21 - "react"
Cohesion: 0.13
Nodes (16): react, ElectiveGrid(), Item, ICON_BY_SLUG, ICONS, icons, PayOptions(), stroke (+8 more)

### Community 22 - "next"
Cohesion: 0.06
Nodes (46): next, homeFaqs, HomePage(), About(), aboutPhotos, Careers(), avatar(), FacultyArticles() (+38 more)

### Community 23 - "Interactive.tsx"
Cohesion: 0.22
Nodes (9): Update 2026-10-26 (latest), FaqList(), LeaderGrid(), Tabs(), DataTable(), curriculum(), flat(), leaders() (+1 more)

### Community 24 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

## Knowledge Gaps
- **6 isolated node(s):** `react-dom`, `sass`, `@types/node`, `@types/react`, `@types/react-dom` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 188 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `Page.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `not-found.tsx`, `Kit.tsx`, `ChevronRight`, `InnerPage.tsx`, `AdmissionSteps.tsx`, `react`, `server.js`?**
  _High betweenness centrality (0.173) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `react-dom`, `sass`, `@types/node` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10826210826210826 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Page.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `Kit.tsx`, `ChevronRight`, `InnerPage.tsx`, `AdmissionSteps.tsx`, `next`, `Interactive.tsx`?**
  _High betweenness centrality (0.165) - this node is a cross-community bridge._
- **Should `icons.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0567287784679089 - nodes in this community are weakly interconnected._
- **Why does `Update 2026-10-26 (latest)` connect `Interactive.tsx` to `DSU Online — CHECKPOINT (read this first in any new session)`, `scrape.py`?**
  _High betweenness centrality (0.140) - this node is a cross-community bridge._