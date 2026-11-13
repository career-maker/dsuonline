# Graph Report - dsu online  (2026-11-13)

## Corpus Check
- 113 files · ~74,694 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 43 file(s) not represented in the graph (top: .scss 40, (none) 2, .ico 1)

## Summary
- 658 nodes · 1666 edges · 32 communities (27 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `39543247`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- InnerPage.tsx
- Kit.tsx
- layout.tsx
- scrape.py
- EnquiryModal.tsx
- package.json
- Footer.tsx
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
- site
- FeeTabs.tsx
- server.js
- section-heads.ts
- next
- renderSeg
- site.ts
- ProgramAbout.tsx
- EmiCalculator.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 74 edges
2. `react` - 55 edges
3. `next` - 40 edges
4. `ArrowLink()` - 40 edges
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
- `Architecture` --references--> `ReferPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ContentPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx

## Import Cycles
- None detected.

## Communities (32 total, 5 thin omitted)

### Community 0 - "InnerPage.tsx"
Cohesion: 0.06
Nodes (60): Update 2026-10-27 (QA-issue round, new account), nextConfig, bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve() (+52 more)

### Community 1 - "Kit.tsx"
Cohesion: 0.10
Nodes (20): DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, LearningCards(), lsi, lsIcon(), OfficeCard() (+12 more)

### Community 2 - "layout.tsx"
Cohesion: 0.15
Nodes (11): lenis, fontMain, metadata, RootLayout(), FactsDrawer(), OPEN_FACTS, rows, Preloader() (+3 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.17
Nodes (23): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+15 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (31): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+23 more)

### Community 6 - "Footer.tsx"
Cohesion: 0.24
Nodes (10): BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), Program, programs (+2 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.09
Nodes (37): gsap, img(), InternationalLearners(), metadata, tints, CallbackForm(), Phase, programmes (+29 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.15
Nodes (12): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-26 (latest) (+4 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.07
Nodes (37): react, Item, ICON_BY_SLUG, ICONS, FacultyScroller(), Item, FaqList(), icons (+29 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "Page.tsx"
Cohesion: 0.14
Nodes (19): LeaderGrid(), Tabs(), DataTable(), FacultyGrid(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, certificates() (+11 more)

### Community 16 - "ContentPage"
Cohesion: 0.17
Nodes (18): slugify(), ElectiveGrid(), CtaBand(), Head(), Sec(), ContentPage(), isStepTitle(), LegalPage() (+10 more)

### Community 18 - "parse.ts"
Cohesion: 0.20
Nodes (12): cleanBlocks(), isNote(), isQuote(), asImg(), Faq, Img, parseFaq(), parseFaqByQuestionMarks() (+4 more)

### Community 19 - "specViews"
Cohesion: 0.24
Nodes (10): CareerFlip(), CareerItem, IndustryItem, CardGrid(), RoleGrid(), careers(), isP(), specViews() (+2 more)

### Community 20 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (6): AdmissionSteps(), heading(), ic, icons, Step, wrap()

### Community 21 - "ProgramAdvantage.tsx"
Cohesion: 0.18
Nodes (11): swiper, Card(), Ico(), P, ProgramAdvantage(), CardSlider(), advantageBanner, AdvantageCard (+3 more)

### Community 22 - "site"
Cohesion: 0.24
Nodes (7): ElectiveCombinator(), EnquiryContext, EnquiryProvider(), useEnquiry(), SideTabs(), PhoneIcon(), site

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 24 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 26 - "section-heads.ts"
Cohesion: 0.50
Nodes (3): headFor(), SectionHead, sectionHeads

### Community 27 - "next"
Cohesion: 0.05
Nodes (59): Architecture, next, homeFaqs, HomePage(), EnquireButton(), ProgramHero(), ProgramHeroProps, StatNumber() (+51 more)

### Community 28 - "renderSeg"
Cohesion: 0.22
Nodes (11): Checklist(), ClassApart(), ContactRow(), CtaLink(), LogoWall(), Pic(), Prose(), Split() (+3 more)

### Community 29 - "site.ts"
Cohesion: 0.15
Nodes (14): react-dom, Header(), Hit, MenuIcon(), UserIcon(), announcements, footerColumns, mainNav (+6 more)

### Community 32 - "EmiCalculator.tsx"
Cohesion: 0.60
Nodes (3): emi(), EmiCalculator(), inr()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 211 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `InnerPage.tsx`, `EmiCalculator.tsx`, `Kit.tsx`, `layout.tsx`, `EnquiryModal.tsx`, `package.json`, `Footer.tsx`, `international-learners/page.tsx`, `Page.tsx`, `specViews`, `AdmissionSteps.tsx`, `ProgramAdvantage.tsx`, `site`, `FeeTabs.tsx`, `next`, `site.ts`?**
  _High betweenness centrality (0.186) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.060350877192982454 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `InnerPage.tsx`, `Kit.tsx`, `layout.tsx`, `EnquiryModal.tsx`, `package.json`, `Footer.tsx`, `international-learners/page.tsx`, `react`, `Page.tsx`, `AdmissionSteps.tsx`, `ProgramAdvantage.tsx`, `site`, `server.js`, `not-found.tsx`, `site.ts`, `ProgramAbout.tsx`?**
  _High betweenness centrality (0.158) - this node is a cross-community bridge._
- **Should `Kit.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10144927536231885 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `next` to `InnerPage.tsx`, `Kit.tsx`, `EnquiryModal.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `ContentPage`, `ProgramAdvantage.tsx`, `renderSeg`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._