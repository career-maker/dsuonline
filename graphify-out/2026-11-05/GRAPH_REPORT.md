# Graph Report - dsu online  (2026-11-05)

## Corpus Check
- 95 files · ~58,631 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 34 file(s) not represented in the graph (top: .scss 31, (none) 2, .ico 1)

## Summary
- 551 nodes · 1403 edges · 29 communities (24 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `753c076b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Learning.tsx
- Page.tsx
- layout.tsx
- scrape.py
- EnquiryModal.tsx
- package.json
- app/page.tsx
- compilerOptions
- Footer.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- testimonials.ts
- README.md
- AGENTS.md
- InnerPage.tsx
- CLAUDE.md
- Header.tsx
- src_components_inner_kit_module
- next
- EnquiryProvider.tsx
- AdmissionSteps.tsx
- AboutBand
- FacultyArticles.tsx
- Hero.tsx
- react
- home.ts
- FactsDrawer.tsx

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

## Communities (29 total, 5 thin omitted)

### Community 0 - "Learning.tsx"
Cohesion: 0.53
Nodes (3): VideoTile(), PlayIcon(), bentoTiles

### Community 1 - "Page.tsx"
Cohesion: 0.05
Nodes (90): Architecture, CareerFlip(), CareerItem, IndustryItem, cleanBlocks(), isNote(), isQuote(), slugify() (+82 more)

### Community 2 - "layout.tsx"
Cohesion: 0.19
Nodes (9): lenis, metadata, roboto, RootLayout(), EnquiryProvider(), FactsDrawer(), Preloader(), SmoothScroll() (+1 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): Update 2026-10-26 (latest), api(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.17
Nodes (23): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+15 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (30): eslintConfig, dependencies, lenis, next, react, react-dom, sass, devDependencies (+22 more)

### Community 6 - "app/page.tsx"
Cohesion: 0.16
Nodes (15): homeFaqs, HomePage(), About(), Careers(), Faq(), Hero(), Learning(), order (+7 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "Footer.tsx"
Cohesion: 0.25
Nodes (9): BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), Program, Specialization (+1 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.17
Nodes (11): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-27 (QA-issue round, new account) (+3 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "testimonials.ts"
Cohesion: 0.29
Nodes (4): B, homeTestimonials, Testimonial, testimonials

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "InnerPage.tsx"
Cohesion: 0.06
Nodes (67): bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved, Accordion() (+59 more)

### Community 16 - "Header.tsx"
Cohesion: 0.21
Nodes (11): Header(), Hit, CloseIcon(), MenuIcon(), UserIcon(), announcements, footerColumns, mainNav (+3 more)

### Community 18 - "src_components_inner_kit_module"
Cohesion: 0.22
Nodes (6): Item, ICON_BY_SLUG, ICONS, icons, stroke, WhyItem

### Community 19 - "next"
Cohesion: 0.17
Nodes (6): nextConfig, next, app, { createServer }, handle, next

### Community 20 - "EnquiryProvider.tsx"
Cohesion: 0.31
Nodes (5): ElectiveCombinator(), EnquiryContext, useEnquiry(), SideTabs(), PhoneIcon()

### Community 21 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (5): AdmissionSteps(), heading(), ic, icons, Step

### Community 23 - "AboutBand"
Cohesion: 0.60
Nodes (3): StatNumber(), AboutBand(), Counter()

### Community 24 - "FacultyArticles.tsx"
Cohesion: 0.29
Nodes (8): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, toIsoDate(), Icon(), realFaculty, articles

### Community 25 - "Hero.tsx"
Cohesion: 0.40
Nodes (3): slidePos, slideSize, heroSlides

### Community 26 - "react"
Cohesion: 0.14
Nodes (18): react, FacultyScroller(), Item, QuoteSlider(), FacultyStrip(), initialPages, slotClass, Testimonials() (+10 more)

### Community 27 - "home.ts"
Cohesion: 0.11
Nodes (17): aboutPhotos, aboutCopy, aboutFeatures, aboutStats, awards, BentoTile, blogs, careerTabs (+9 more)

## Knowledge Gaps
- **6 isolated node(s):** `react-dom`, `sass`, `@types/node`, `@types/react`, `@types/react-dom` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 188 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `Page.tsx`, `layout.tsx`, `EnquiryModal.tsx`, `package.json`, `app/page.tsx`, `Footer.tsx`, `InnerPage.tsx`, `Header.tsx`, `src_components_inner_kit_module`, `EnquiryProvider.tsx`, `AdmissionSteps.tsx`, `not-found.tsx`, `FacultyArticles.tsx`, `Hero.tsx`, `react`, `home.ts`?**
  _High betweenness centrality (0.168) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `react-dom`, `sass`, `@types/node` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05006662859318484 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Learning.tsx`, `Page.tsx`, `layout.tsx`, `EnquiryModal.tsx`, `package.json`, `app/page.tsx`, `Footer.tsx`, `InnerPage.tsx`, `Header.tsx`, `src_components_inner_kit_module`, `EnquiryProvider.tsx`, `AdmissionSteps.tsx`, `AboutBand`, `FacultyArticles.tsx`, `Hero.tsx`, `home.ts`, `FactsDrawer.tsx`?**
  _High betweenness centrality (0.157) - this node is a cross-community bridge._
- **Should `scrape.py` be split into smaller, more focused modules?**
  _Cohesion score 0.08484848484848485 - nodes in this community are weakly interconnected._
- **Why does `Update 2026-10-26 (latest)` connect `scrape.py` to `DSU Online — CHECKPOINT (read this first in any new session)`, `Page.tsx`?**
  _High betweenness centrality (0.138) - this node is a cross-community bridge._