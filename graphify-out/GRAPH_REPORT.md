# Graph Report - dsu online  (2026-11-05)

## Corpus Check
- 97 files · ~58,938 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 36 file(s) not represented in the graph (top: .scss 32, (none) 2, .ico 1)

## Summary
- 566 nodes · 1442 edges · 31 communities (24 shown, 7 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0d71ab34`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Page.tsx
- ContentPage
- icons.tsx
- scrape.py
- EnquiryModal.tsx
- package.json
- Testimonial.tsx
- compilerOptions
- InnerPage.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- home.ts
- README.md
- AGENTS.md
- parse.ts
- CLAUDE.md
- Interactive.tsx
- Icon.tsx
- next
- server.js
- AdmissionSteps.tsx
- ElectiveGrid.tsx
- Learning.tsx
- Hero.tsx
- react
- app/page.tsx
- FeeTable.tsx
- Counter
- section-heads.ts

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 69 edges
2. `react` - 45 edges
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
- `Architecture` --references--> `ReferPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ContentPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `Testimonials()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/Testimonials.tsx

## Import Cycles
- None detected.

## Communities (31 total, 7 thin omitted)

### Community 0 - "Page.tsx"
Cohesion: 0.10
Nodes (25): Status, CareerFlip(), CareerItem, IndustryItem, CardGrid(), FacultyGrid(), LearningCards(), lsIcon() (+17 more)

### Community 1 - "ContentPage"
Cohesion: 0.10
Nodes (35): slugify(), Checklist(), ClassApart(), ContactRow(), DocList(), FacultyShowcase(), Head(), highlight() (+27 more)

### Community 2 - "icons.tsx"
Cohesion: 0.05
Nodes (42): lenis, metadata, roboto, RootLayout(), ElectiveCombinator(), BrochureForm(), useEnquiry(), FactsDrawer() (+34 more)

### Community 3 - "scrape.py"
Cohesion: 0.09
Nodes (13): api(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail(), extract() (+5 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.14
Nodes (26): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+18 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (30): eslintConfig, dependencies, lenis, next, react, react-dom, sass, devDependencies (+22 more)

### Community 6 - "Testimonial.tsx"
Cohesion: 0.12
Nodes (20): StoryCards(), initialPages, slotClass, Avatar(), AvatarFallback(), AvatarImage(), Card(), CardContent() (+12 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "InnerPage.tsx"
Cohesion: 0.06
Nodes (69): nextConfig, bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+61 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.18
Nodes (10): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Update 2026-10-27 (QA-issue round, new account), Update 2026-10-28 (+2 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "home.ts"
Cohesion: 0.13
Nodes (13): aboutCopy, aboutFeatures, aboutStats, awards, BentoTile, blogs, careerTabs, faculty (+5 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "parse.ts"
Cohesion: 0.24
Nodes (10): cleanBlocks(), isNote(), isQuote(), asImg(), Img, parseFaq(), parseFaqByQuestionMarks(), parseQuotes() (+2 more)

### Community 16 - "Interactive.tsx"
Cohesion: 0.22
Nodes (9): Update 2026-10-26 (latest), FaqList(), LeaderGrid(), Tabs(), DataTable(), curriculum(), flat(), leaders() (+1 more)

### Community 18 - "Icon.tsx"
Cohesion: 0.33
Nodes (3): certifications, whyItems, iconSize

### Community 19 - "next"
Cohesion: 0.33
Nodes (3): next, WhyItem, WhyTabs()

### Community 20 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 21 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (5): AdmissionSteps(), heading(), ic, icons, Step

### Community 22 - "ElectiveGrid.tsx"
Cohesion: 0.47
Nodes (4): ElectiveGrid(), Item, ICON_BY_SLUG, ICONS

### Community 23 - "Learning.tsx"
Cohesion: 0.53
Nodes (3): VideoTile(), PlayIcon(), bentoTiles

### Community 25 - "Hero.tsx"
Cohesion: 0.40
Nodes (3): slidePos, slideSize, heroSlides

### Community 26 - "react"
Cohesion: 0.14
Nodes (19): react, FacultyScroller(), Item, icons, PayOptions(), stroke, QuoteSlider(), avatar() (+11 more)

### Community 27 - "app/page.tsx"
Cohesion: 0.17
Nodes (19): Architecture, homeFaqs, HomePage(), About(), AboutBand(), Careers(), FacultyArticles(), FacultyCard() (+11 more)

## Knowledge Gaps
- **6 isolated node(s):** `react-dom`, `sass`, `@types/node`, `@types/react`, `@types/react-dom` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 189 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Page.tsx`, `ContentPage`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `Testimonial.tsx`, `InnerPage.tsx`, `home.ts`, `Interactive.tsx`, `next`, `AdmissionSteps.tsx`, `ElectiveGrid.tsx`, `Learning.tsx`, `Hero.tsx`, `app/page.tsx`, `Counter`?**
  _High betweenness centrality (0.164) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `react-dom`, `sass`, `@types/node` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10098522167487685 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `Page.tsx`, `ContentPage`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `Testimonial.tsx`, `InnerPage.tsx`, `home.ts`, `Icon.tsx`, `server.js`, `AdmissionSteps.tsx`, `ElectiveGrid.tsx`, `not-found.tsx`, `Hero.tsx`, `react`, `app/page.tsx`?**
  _High betweenness centrality (0.162) - this node is a cross-community bridge._
- **Should `ContentPage` be split into smaller, more focused modules?**
  _Cohesion score 0.10241820768136557 - nodes in this community are weakly interconnected._
- **Why does `Update 2026-10-26 (latest)` connect `Interactive.tsx` to `DSU Online — CHECKPOINT (read this first in any new session)`, `scrape.py`?**
  _High betweenness centrality (0.135) - this node is a cross-community bridge._