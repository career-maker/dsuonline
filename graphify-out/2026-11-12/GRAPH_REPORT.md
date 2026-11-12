# Graph Report - dsu online  (2026-11-12)

## Corpus Check
- 109 files · ~72,847 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 40 file(s) not represented in the graph (top: .scss 37, (none) 2, .ico 1)

## Summary
- 635 nodes · 1616 edges · 27 communities (23 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cef6ab40`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- InnerPage.tsx
- Kit.tsx
- site.ts
- scrape.py
- EnquiryModal.tsx
- package.json
- Page.tsx
- compilerOptions
- international-learners/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- react
- README.md
- AGENTS.md
- ContentPage
- CLAUDE.md
- parse.ts
- specViews
- FeeTabs.tsx
- AdmissionSteps.tsx
- server.js
- slugify
- EmiCalculator.tsx
- ProgramHero.tsx
- ArrowLink

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 73 edges
2. `react` - 54 edges
3. `ArrowLink()` - 38 edges
4. `next` - 37 edges
5. `ChevronRight()` - 22 edges
6. `Icon()` - 18 edges
7. `Flow()` - 16 edges
8. `ChevronLeft()` - 16 edges
9. `compilerOptions` - 16 edges
10. `FramedImage()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Update 2026-10-28` --references--> `ArrowLink()`  [INFERRED]
  CHECKPOINT.md → src/components/ui/ArrowLink.tsx
- `Update 2026-10-26 (latest)` --references--> `flat()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Status` --references--> `faculty()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ReferPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ContentPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx

## Import Cycles
- None detected.

## Communities (27 total, 4 thin omitted)

### Community 0 - "InnerPage.tsx"
Cohesion: 0.06
Nodes (60): nextConfig, bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+52 more)

### Community 1 - "Kit.tsx"
Cohesion: 0.10
Nodes (22): CtaLink(), DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, LearningCards(), lsi, lsIcon() (+14 more)

### Community 2 - "site.ts"
Cohesion: 0.06
Nodes (39): lenis, fontMain, metadata, RootLayout(), ElectiveCombinator(), BrochureForm(), EnquiryContext, EnquiryProvider() (+31 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (13): git(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail(), extract() (+5 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.17
Nodes (24): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+16 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (31): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+23 more)

### Community 6 - "Page.tsx"
Cohesion: 0.11
Nodes (17): Status, FacultyGrid(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial, ELECTIVE_PHOTOS, faculty() (+9 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.09
Nodes (37): gsap, img(), InternationalLearners(), metadata, tints, CallbackForm(), Phase, programmes (+29 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.17
Nodes (11): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Update 2026-10-27 (QA-issue round, new account), Update 2026-10-28 (+3 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.07
Nodes (39): react, ElectiveGrid(), Item, ICON_BY_SLUG, ICONS, FacultyScroller(), Item, FaqList() (+31 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "ContentPage"
Cohesion: 0.15
Nodes (25): Update 2026-10-26 (latest), LeaderGrid(), Tabs(), Checklist(), ClassApart(), ContactRow(), DataTable(), LogoWall() (+17 more)

### Community 16 - "parse.ts"
Cohesion: 0.20
Nodes (12): cleanBlocks(), isNote(), isQuote(), asImg(), Faq, Img, parseFaq(), parseFaqByQuestionMarks() (+4 more)

### Community 18 - "specViews"
Cohesion: 0.24
Nodes (10): CareerFlip(), CareerItem, IndustryItem, CardGrid(), RoleGrid(), careers(), isP(), specViews() (+2 more)

### Community 19 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 20 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (6): AdmissionSteps(), heading(), ic, icons, Step, wrap()

### Community 21 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 23 - "slugify"
Cohesion: 0.25
Nodes (7): slugify(), Head(), Sec(), withEyebrow(), headFor(), SectionHead, sectionHeads

### Community 25 - "EmiCalculator.tsx"
Cohesion: 0.60
Nodes (3): emi(), EmiCalculator(), inr()

### Community 26 - "ProgramHero.tsx"
Cohesion: 0.33
Nodes (5): EnquireButton(), ProgramHero(), ProgramHeroProps, StatNumber(), Counter()

### Community 27 - "ArrowLink"
Cohesion: 0.06
Nodes (53): Architecture, next, homeFaqs, HomePage(), About(), AboutBand(), Careers(), avatar() (+45 more)

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 205 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `InnerPage.tsx`, `Kit.tsx`, `site.ts`, `EnquiryModal.tsx`, `package.json`, `Page.tsx`, `international-learners/page.tsx`, `specViews`, `FeeTabs.tsx`, `AdmissionSteps.tsx`, `EmiCalculator.tsx`, `ProgramHero.tsx`, `ArrowLink`?**
  _High betweenness centrality (0.190) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06368011847463902 - nodes in this community are weakly interconnected._
- **Why does `next` connect `ArrowLink` to `InnerPage.tsx`, `Kit.tsx`, `site.ts`, `EnquiryModal.tsx`, `package.json`, `Page.tsx`, `international-learners/page.tsx`, `react`, `AdmissionSteps.tsx`, `server.js`, `not-found.tsx`?**
  _High betweenness centrality (0.152) - this node is a cross-community bridge._
- **Should `Kit.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09846153846153846 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `InnerPage.tsx`, `Kit.tsx`, `EnquiryModal.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `react`, `ProgramHero.tsx`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._