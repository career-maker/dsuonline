# Graph Report - dsu online  (2026-11-13)

## Corpus Check
- 119 files · ~77,766 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 48 file(s) not represented in the graph (top: .scss 45, (none) 2, .ico 1)

## Summary
- 700 nodes · 1754 edges · 27 communities (23 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0e8031df`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- InnerPage.tsx
- Page.tsx
- icons.tsx
- scrape.py
- ArrowLink
- package.json
- Kit.tsx
- compilerOptions
- international-learners/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- react
- README.md
- AGENTS.md
- Interactive.tsx
- CLAUDE.md
- ContentPage
- ProgramFaculty.tsx
- curriculumData.ts
- EmiCalculator.tsx
- ElectiveCombinator.tsx
- parse.ts
- FeeTabs.tsx
- next
- app/page.tsx
- section-heads.ts

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 78 edges
2. `react` - 58 edges
3. `next` - 43 edges
4. `ArrowLink()` - 42 edges
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

## Communities (27 total, 4 thin omitted)

### Community 0 - "InnerPage.tsx"
Cohesion: 0.07
Nodes (62): bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+54 more)

### Community 1 - "Page.tsx"
Cohesion: 0.13
Nodes (22): CareerFlip(), CardGrid(), FacultyGrid(), RoleGrid(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, careers() (+14 more)

### Community 2 - "icons.tsx"
Cohesion: 0.05
Nodes (43): lenis, react-dom, fontMain, metadata, RootLayout(), BrochureForm(), EnquiryContext, EnquiryProvider() (+35 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "ArrowLink"
Cohesion: 0.09
Nodes (37): ContactForm(), empty, Phase, EnquireButton(), ProgramHero(), ProgramHeroProps, empty, Phase (+29 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (31): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+23 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.10
Nodes (20): DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, LearningCards(), lsi, lsIcon(), OfficeCard() (+12 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.10
Nodes (33): gsap, img(), InternationalLearners(), metadata, tints, ContinentCards(), compare, continents (+25 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.13
Nodes (14): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-26 (latest) (+6 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.06
Nodes (43): react, CareerItem, IndustryItem, ICON_BY_SLUG, ICONS, FacultyScroller(), Item, icons (+35 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "Interactive.tsx"
Cohesion: 0.25
Nodes (8): FaqList(), LeaderGrid(), Tabs(), DataTable(), curriculum(), flat(), leaders(), Faq

### Community 16 - "ContentPage"
Cohesion: 0.14
Nodes (27): Architecture, slugify(), Checklist(), ClassApart(), ContactRow(), CtaLink(), Head(), LogoWall() (+19 more)

### Community 18 - "ProgramFaculty.tsx"
Cohesion: 0.38
Nodes (5): Img, Card(), initials(), Item, ProgramFaculty()

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "EmiCalculator.tsx"
Cohesion: 0.60
Nodes (3): emi(), EmiCalculator(), inr()

### Community 21 - "ElectiveCombinator.tsx"
Cohesion: 0.08
Nodes (26): swiper, Benefit(), Elective, ElectiveCombinator(), ICON, Card(), ElectiveGrid(), Item (+18 more)

### Community 22 - "parse.ts"
Cohesion: 0.27
Nodes (9): cleanBlocks(), isNote(), isQuote(), asImg(), parseFaq(), parseFaqByQuestionMarks(), parseQuotes(), Quote (+1 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 25 - "next"
Cohesion: 0.07
Nodes (14): nextConfig, next, app, { createServer }, handle, next, AdmissionSteps(), heading() (+6 more)

### Community 27 - "app/page.tsx"
Cohesion: 0.07
Nodes (39): homeFaqs, HomePage(), About(), aboutPhotos, Careers(), Faq(), Hero(), slidePos (+31 more)

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 230 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `InnerPage.tsx`, `Page.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `Interactive.tsx`, `curriculumData.ts`, `EmiCalculator.tsx`, `ElectiveCombinator.tsx`, `FeeTabs.tsx`, `next`, `app/page.tsx`?**
  _High betweenness centrality (0.190) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06558558558558558 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `InnerPage.tsx`, `Page.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `react`, `ProgramFaculty.tsx`, `ElectiveCombinator.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.158) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12615384615384614 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `InnerPage.tsx`, `icons.tsx`, `Kit.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `react`, `ContentPage`, `ElectiveCombinator.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._