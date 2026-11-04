# Graph Report - dsu online  (2026-11-04)

## Corpus Check
- 93 files · ~56,577 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 34 file(s) not represented in the graph (top: .scss 31, (none) 2, .ico 1)

## Summary
- 538 nodes · 1361 edges · 24 communities (20 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8b27cfb8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Page.tsx
- InnerPage.tsx
- icons.tsx
- scrape.py
- EnquiryModal.tsx
- package.json
- ElectiveGrid.tsx
- compilerOptions
- next
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- Testimonials.tsx
- README.md
- AGENTS.md
- content.ts
- CLAUDE.md
- react
- AdmissionSteps.tsx
- app/page.tsx
- Faq.tsx
- home.ts
- server.js

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 65 edges
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
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `Testimonials()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/Testimonials.tsx
- `Architecture` --references--> `WhyChoose()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/WhyChoose.tsx
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `loadBlogPost()`  [INFERRED]
  CHECKPOINT.md → src/lib/content.ts

## Import Cycles
- None detected.

## Communities (24 total, 4 thin omitted)

### Community 0 - "Page.tsx"
Cohesion: 0.05
Nodes (85): Architecture, CareerFlip(), CareerItem, IndustryItem, cleanBlocks(), isNote(), isQuote(), slugify() (+77 more)

### Community 1 - "InnerPage.tsx"
Cohesion: 0.08
Nodes (41): Accordion(), ElectiveCombinator(), EnquireButton(), Flow(), isInternal(), Pic(), Qa(), CtaBand() (+33 more)

### Community 2 - "icons.tsx"
Cohesion: 0.06
Nodes (35): lenis, metadata, roboto, RootLayout(), BrochureForm(), EnquiryProvider(), FactsDrawer(), OPEN_FACTS (+27 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): Update 2026-10-26 (latest), api(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.17
Nodes (24): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+16 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (30): eslintConfig, dependencies, lenis, next, react, react-dom, sass, devDependencies (+22 more)

### Community 6 - "ElectiveGrid.tsx"
Cohesion: 0.47
Nodes (4): ElectiveGrid(), Item, ICON_BY_SLUG, ICONS

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "next"
Cohesion: 0.17
Nodes (9): next, Careers(), WhyChoose(), Icon(), careerTabs, certifications, recruiters, whyItems (+1 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.17
Nodes (11): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-27 (QA-issue round, new account) (+3 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "Testimonials.tsx"
Cohesion: 0.17
Nodes (11): pages, slotClass, Testimonials(), CarouselControls(), TestimonialCard(), TestimonialGrid(), tickerItems, B (+3 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "content.ts"
Cohesion: 0.09
Nodes (33): nextConfig, bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+25 more)

### Community 18 - "react"
Cohesion: 0.20
Nodes (14): react, FacultyScroller(), QuoteCards(), QuoteSlider(), avatar(), FacultyArticles(), toIsoDate(), CardCarousel() (+6 more)

### Community 19 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (5): AdmissionSteps(), heading(), ic, icons, Step

### Community 20 - "app/page.tsx"
Cohesion: 0.19
Nodes (10): homeFaqs, HomePage(), About(), Hero(), slidePos, slideSize, ProgramsBand(), Recognitions() (+2 more)

### Community 21 - "Faq.tsx"
Cohesion: 0.23
Nodes (8): Faq(), Learning(), VideoTile(), FramedImage(), Props, Rect, PlayIcon(), bentoTiles

### Community 22 - "home.ts"
Cohesion: 0.19
Nodes (10): aboutPhotos, aboutCopy, aboutFeatures, aboutStats, BentoTile, blogs, faqs, homePrograms (+2 more)

### Community 23 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

## Knowledge Gaps
- **6 isolated node(s):** `react-dom`, `sass`, `@types/node`, `@types/react`, `@types/react-dom` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 186 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `Page.tsx`, `InnerPage.tsx`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `ElectiveGrid.tsx`, `Testimonials.tsx`, `content.ts`, `not-found.tsx`, `react`, `AdmissionSteps.tsx`, `app/page.tsx`, `Faq.tsx`, `server.js`?**
  _High betweenness centrality (0.175) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `react-dom`, `sass`, `@types/node` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.050087361677344205 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Page.tsx`, `InnerPage.tsx`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `ElectiveGrid.tsx`, `next`, `Testimonials.tsx`, `content.ts`, `AdmissionSteps.tsx`, `app/page.tsx`, `Faq.tsx`, `home.ts`?**
  _High betweenness centrality (0.166) - this node is a cross-community bridge._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0803633822501747 - nodes in this community are weakly interconnected._
- **Why does `Update 2026-10-26 (latest)` connect `scrape.py` to `Page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`?**
  _High betweenness centrality (0.141) - this node is a cross-community bridge._