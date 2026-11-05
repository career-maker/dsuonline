# Graph Report - dsu online  (2026-11-05)

## Corpus Check
- 95 files · ~58,771 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 35 file(s) not represented in the graph (top: .scss 31, (none) 2, .ico 1)

## Summary
- 554 nodes · 1411 edges · 23 communities (20 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8da8f698`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ChevronRight
- Page.tsx
- icons.tsx
- scrape.py
- ArrowLink
- package.json
- app/page.tsx
- compilerOptions
- content.ts
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- About.tsx
- README.md
- AGENTS.md
- InnerPage.tsx
- CLAUDE.md
- FacultyArticles.tsx
- Learning.tsx
- Icon
- next
- react
- home.ts

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

## Communities (23 total, 3 thin omitted)

### Community 0 - "ChevronRight"
Cohesion: 0.18
Nodes (11): initialPages, slotClass, Testimonials(), ChevronRight(), CarouselControls(), TestimonialCard(), showAnnouncement, B (+3 more)

### Community 1 - "Page.tsx"
Cohesion: 0.05
Nodes (91): Architecture, CareerFlip(), cleanBlocks(), isNote(), isQuote(), slugify(), ElectiveGrid(), dash() (+83 more)

### Community 2 - "icons.tsx"
Cohesion: 0.05
Nodes (44): lenis, metadata, roboto, RootLayout(), ElectiveCombinator(), EnquireButton(), BrochureForm(), EnquiryContext (+36 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): Update 2026-10-26 (latest), api(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "ArrowLink"
Cohesion: 0.14
Nodes (28): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+20 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (30): eslintConfig, dependencies, lenis, next, react, react-dom, sass, devDependencies (+22 more)

### Community 6 - "app/page.tsx"
Cohesion: 0.27
Nodes (8): homeFaqs, HomePage(), Careers(), Faq(), ProgramsBand(), Recognitions(), FramedImage(), awards

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "content.ts"
Cohesion: 0.11
Nodes (32): bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved, BlogIndex() (+24 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.17
Nodes (11): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-27 (QA-issue round, new account) (+3 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "About.tsx"
Cohesion: 0.24
Nodes (8): StatNumber(), About(), AboutBand(), aboutPhotos, Counter(), aboutCopy, aboutFeatures, aboutStats

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "InnerPage.tsx"
Cohesion: 0.14
Nodes (25): Accordion(), Flow(), isInternal(), Pic(), Qa(), Crumb, InnerPage(), isFaq() (+17 more)

### Community 16 - "FacultyArticles.tsx"
Cohesion: 0.27
Nodes (8): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip(), toIsoDate(), realFaculty, articles

### Community 18 - "Learning.tsx"
Cohesion: 0.29
Nodes (6): Learning(), VideoTile(), Props, Rect, PlayIcon(), bentoTiles

### Community 19 - "Icon"
Cohesion: 0.31
Nodes (5): WhyChoose(), Icon(), certifications, whyItems, iconSize

### Community 21 - "next"
Cohesion: 0.08
Nodes (11): nextConfig, next, app, { createServer }, handle, next, AdmissionSteps(), heading() (+3 more)

### Community 26 - "react"
Cohesion: 0.12
Nodes (16): react, CareerItem, IndustryItem, Item, ICON_BY_SLUG, ICONS, FacultyScroller(), Item (+8 more)

### Community 27 - "home.ts"
Cohesion: 0.12
Nodes (14): Hero(), slidePos, slideSize, BentoTile, blogs, careerTabs, faculty, faqs (+6 more)

## Knowledge Gaps
- **6 isolated node(s):** `react-dom`, `sass`, `@types/node`, `@types/react`, `@types/react-dom` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 188 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `ChevronRight`, `Page.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `app/page.tsx`, `content.ts`, `InnerPage.tsx`, `FacultyArticles.tsx`, `Learning.tsx`, `Icon`, `react`, `home.ts`?**
  _High betweenness centrality (0.166) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `react-dom`, `sass`, `@types/node` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05139920045688178 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `ChevronRight`, `Page.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `app/page.tsx`, `content.ts`, `About.tsx`, `InnerPage.tsx`, `FacultyArticles.tsx`, `Learning.tsx`, `next`, `home.ts`?**
  _High betweenness centrality (0.155) - this node is a cross-community bridge._
- **Should `icons.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05153153153153153 - nodes in this community are weakly interconnected._
- **Why does `Update 2026-10-26 (latest)` connect `scrape.py` to `DSU Online — CHECKPOINT (read this first in any new session)`, `Page.tsx`?**
  _High betweenness centrality (0.138) - this node is a cross-community bridge._