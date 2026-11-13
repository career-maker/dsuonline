# Graph Report - dsu online  (2026-11-13)

## Corpus Check
- 112 files · ~74,294 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 42 file(s) not represented in the graph (top: .scss 39, (none) 2, .ico 1)

## Summary
- 654 nodes · 1660 edges · 33 communities (29 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f784a7f0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- InnerPage.tsx
- Kit.tsx
- layout.tsx
- scrape.py
- EnquiryModal.tsx
- package.json
- ArrowLink
- compilerOptions
- international-learners/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- react
- README.md
- AGENTS.md
- Page.tsx
- CLAUDE.md
- ContentPage
- parse.ts
- specViews
- AdmissionSteps.tsx
- ProgramAdvantage.tsx
- next
- FeeTabs.tsx
- server.js
- withEyebrow
- home.ts
- app/page.tsx
- site.ts
- FacultyArticles.tsx
- CareerFlip.tsx
- EmiCalculator.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 74 edges
2. `react` - 55 edges
3. `ArrowLink()` - 40 edges
4. `next` - 39 edges
5. `ChevronRight()` - 22 edges
6. `Icon()` - 18 edges
7. `Flow()` - 16 edges
8. `ChevronLeft()` - 16 edges
9. `compilerOptions` - 16 edges
10. `FramedImage()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Update 2026-10-26 (latest)` --references--> `flat()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Status` --references--> `faculty()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Update 2026-10-28` --references--> `ArrowLink()`  [INFERRED]
  CHECKPOINT.md → src/components/ui/ArrowLink.tsx
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `Testimonials()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/Testimonials.tsx
- `Architecture` --references--> `WhyChoose()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/WhyChoose.tsx

## Import Cycles
- None detected.

## Communities (33 total, 4 thin omitted)

### Community 0 - "InnerPage.tsx"
Cohesion: 0.07
Nodes (57): nextConfig, bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+49 more)

### Community 1 - "Kit.tsx"
Cohesion: 0.10
Nodes (20): DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, LearningCards(), lsi, lsIcon(), OfficeCard() (+12 more)

### Community 2 - "layout.tsx"
Cohesion: 0.07
Nodes (31): lenis, fontMain, metadata, RootLayout(), ElectiveCombinator(), BrochureForm(), EnquiryContext, EnquiryProvider() (+23 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.16
Nodes (25): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+17 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "ArrowLink"
Cohesion: 0.16
Nodes (12): EnquireButton(), ProgramHero(), ProgramHeroProps, StatNumber(), slidePos, slideSize, ArrowLink(), Props (+4 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.09
Nodes (37): gsap, img(), InternationalLearners(), metadata, tints, CallbackForm(), Phase, programmes (+29 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.13
Nodes (14): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-26 (latest) (+6 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.06
Nodes (41): react, Item, ICON_BY_SLUG, ICONS, FacultyScroller(), Item, FaqList(), Faq (+33 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "Page.tsx"
Cohesion: 0.12
Nodes (21): LeaderGrid(), Tabs(), Checklist(), ContactRow(), CtaLink(), DataTable(), Prose(), ADMISSION_PHOTOS (+13 more)

### Community 16 - "ContentPage"
Cohesion: 0.15
Nodes (24): Architecture, slugify(), ElectiveGrid(), ClassApart(), Head(), LogoWall(), Pic(), Sec() (+16 more)

### Community 18 - "parse.ts"
Cohesion: 0.22
Nodes (11): cleanBlocks(), isNote(), isQuote(), asImg(), Img, parseFaq(), parseFaqByQuestionMarks(), parseQuotes() (+3 more)

### Community 19 - "specViews"
Cohesion: 0.36
Nodes (9): CardGrid(), FacultyGrid(), RoleGrid(), careers(), faculty(), isP(), specViews(), SubView() (+1 more)

### Community 20 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (6): AdmissionSteps(), heading(), ic, icons, Step, wrap()

### Community 21 - "ProgramAdvantage.tsx"
Cohesion: 0.18
Nodes (11): swiper, Card(), Ico(), P, ProgramAdvantage(), CardSlider(), advantageBanner, AdvantageCard (+3 more)

### Community 22 - "next"
Cohesion: 0.14
Nodes (9): next, order, photos, Rect, Props, Rect, careerTabs, recruiters (+1 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 24 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 26 - "withEyebrow"
Cohesion: 0.40
Nodes (4): withEyebrow(), headFor(), SectionHead, sectionHeads

### Community 27 - "home.ts"
Cohesion: 0.11
Nodes (16): aboutPhotos, aboutCopy, aboutFeatures, aboutStats, articles, awards, BentoTile, bentoTiles (+8 more)

### Community 28 - "app/page.tsx"
Cohesion: 0.28
Nodes (13): homeFaqs, HomePage(), About(), Careers(), Faq(), Hero(), Learning(), ProgramsBand() (+5 more)

### Community 29 - "site.ts"
Cohesion: 0.18
Nodes (9): tickerItems, announcements, footerColumns, mainNav, NavLink, showAnnouncement, showFacultyInsights, showHomeBlogs (+1 more)

### Community 30 - "FacultyArticles.tsx"
Cohesion: 0.33
Nodes (6): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, toIsoDate(), realFaculty

### Community 31 - "CareerFlip.tsx"
Cohesion: 0.40
Nodes (3): CareerFlip(), CareerItem, IndustryItem

### Community 32 - "EmiCalculator.tsx"
Cohesion: 0.60
Nodes (3): emi(), EmiCalculator(), inr()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 210 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `InnerPage.tsx`, `EmiCalculator.tsx`, `layout.tsx`, `Kit.tsx`, `EnquiryModal.tsx`, `package.json`, `ArrowLink`, `international-learners/page.tsx`, `Page.tsx`, `AdmissionSteps.tsx`, `ProgramAdvantage.tsx`, `next`, `FeeTabs.tsx`, `home.ts`, `app/page.tsx`, `FacultyArticles.tsx`, `CareerFlip.tsx`?**
  _High betweenness centrality (0.188) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06639839034205232 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `InnerPage.tsx`, `Kit.tsx`, `layout.tsx`, `EnquiryModal.tsx`, `package.json`, `ArrowLink`, `international-learners/page.tsx`, `react`, `Page.tsx`, `AdmissionSteps.tsx`, `ProgramAdvantage.tsx`, `server.js`, `not-found.tsx`, `home.ts`, `site.ts`, `FacultyArticles.tsx`?**
  _High betweenness centrality (0.156) - this node is a cross-community bridge._
- **Should `Kit.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10144927536231885 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `InnerPage.tsx`, `Kit.tsx`, `EnquiryModal.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `react`, `Page.tsx`, `ContentPage`, `ProgramAdvantage.tsx`, `next`, `home.ts`, `app/page.tsx`, `FacultyArticles.tsx`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._