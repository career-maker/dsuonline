# Graph Report - dsu online  (2026-11-04)

## Corpus Check
- 87 files · ~54,054 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 30 file(s) not represented in the graph (top: .scss 27, (none) 2, .ico 1)

## Summary
- 509 nodes · 1312 edges · 23 communities (19 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f552eaab`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Page.tsx
- InnerPage.tsx
- icons.tsx
- scrape.py
- ArrowLink
- package.json
- react
- compilerOptions
- app/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- Testimonials.tsx
- README.md
- AGENTS.md
- home.ts
- CLAUDE.md
- About.tsx
- BlogSlider.tsx
- Learning.tsx
- server.js
- Icon

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 62 edges
2. `react` - 39 edges
3. `next` - 32 edges
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

## Communities (23 total, 4 thin omitted)

### Community 0 - "Page.tsx"
Cohesion: 0.07
Nodes (80): Architecture, cleanBlocks(), isNote(), isQuote(), slugify(), CtaBand(), InnerHero(), InnerPage() (+72 more)

### Community 1 - "InnerPage.tsx"
Cohesion: 0.08
Nodes (47): nextConfig, bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+39 more)

### Community 2 - "icons.tsx"
Cohesion: 0.06
Nodes (41): next, metadata, roboto, RootLayout(), EnquireButton(), BrochureForm(), EnquiryContext, EnquiryProvider() (+33 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): Update 2026-10-26 (latest), api(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "ArrowLink"
Cohesion: 0.12
Nodes (31): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+23 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (31): eslintConfig, dependencies, lenis, next, react, react-dom, sass, devDependencies (+23 more)

### Community 6 - "react"
Cohesion: 0.21
Nodes (10): react, ElectiveCarousel(), ICON_BY_SLUG, ICONS, icons, stroke, QuoteSlider(), WhyItem (+2 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "app/page.tsx"
Cohesion: 0.22
Nodes (15): homeFaqs, HomePage(), About(), Careers(), avatar(), FacultyArticles(), toIsoDate(), Faq() (+7 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.17
Nodes (11): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-27 (QA-issue round, new account) (+3 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "Testimonials.tsx"
Cohesion: 0.14
Nodes (14): pages, slotClass, Testimonials(), CardCarousel(), Props, ChevronLeft(), CarouselControls(), TestimonialCard() (+6 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "home.ts"
Cohesion: 0.16
Nodes (10): awards, BentoTile, blogs, careerTabs, faculty, faqs, homePrograms, learnerVideos (+2 more)

### Community 18 - "About.tsx"
Cohesion: 0.27
Nodes (6): StatNumber(), aboutPhotos, Counter(), aboutCopy, aboutFeatures, aboutStats

### Community 19 - "BlogSlider.tsx"
Cohesion: 0.36
Nodes (7): Blogs(), MONTHS, ord(), Arrow(), BlogSlider(), Slide, toIsoBlogDate()

### Community 20 - "Learning.tsx"
Cohesion: 0.31
Nodes (5): VideoTile(), Props, Rect, PlayIcon(), bentoTiles

### Community 21 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 22 - "Icon"
Cohesion: 0.31
Nodes (5): WhyChoose(), Icon(), certifications, whyItems, iconSize

## Knowledge Gaps
- **6 isolated node(s):** `react-dom`, `sass`, `@types/node`, `@types/react`, `@types/react-dom` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 174 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `icons.tsx` to `Page.tsx`, `InnerPage.tsx`, `ArrowLink`, `package.json`, `react`, `app/page.tsx`, `Testimonials.tsx`, `home.ts`, `not-found.tsx`, `BlogSlider.tsx`, `Learning.tsx`, `server.js`, `Icon`?**
  _High betweenness centrality (0.178) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `react-dom`, `sass`, `@types/node` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06682705159048383 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Page.tsx`, `InnerPage.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `app/page.tsx`, `Testimonials.tsx`, `home.ts`, `About.tsx`, `BlogSlider.tsx`, `Learning.tsx`?**
  _High betweenness centrality (0.156) - this node is a cross-community bridge._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07539450613676213 - nodes in this community are weakly interconnected._
- **Why does `Update 2026-10-26 (latest)` connect `scrape.py` to `Page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`?**
  _High betweenness centrality (0.148) - this node is a cross-community bridge._