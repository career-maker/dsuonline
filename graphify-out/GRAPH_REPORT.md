# Graph Report - dsu online  (2026-11-13)

## Corpus Check
- 125 files · ~79,970 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 53 file(s) not represented in the graph (top: .scss 50, (none) 2, .ico 1)

## Summary
- 726 nodes · 1829 edges · 34 communities (29 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0e4abb4d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- InnerPage.tsx
- Page.tsx
- layout.tsx
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
- next
- CLAUDE.md
- ContentPage
- Header.tsx
- curriculumData.ts
- EmiCalculator.tsx
- ElectiveCombinator.tsx
- parse.ts
- FeeTabs.tsx
- Footer.tsx
- useEnquiry
- renderSeg
- app/page.tsx
- specViews
- section-heads.ts
- ProgramFaq.tsx
- CareerFlip.tsx
- ProgramAbout.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 84 edges
2. `react` - 60 edges
3. `ArrowLink()` - 50 edges
4. `next` - 44 edges
5. `ChevronRight()` - 22 edges
6. `Icon()` - 18 edges
7. `Flow()` - 16 edges
8. `ChevronLeft()` - 16 edges
9. `site` - 16 edges
10. `compilerOptions` - 16 edges

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

## Communities (34 total, 5 thin omitted)

### Community 0 - "InnerPage.tsx"
Cohesion: 0.07
Nodes (59): bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+51 more)

### Community 1 - "Page.tsx"
Cohesion: 0.12
Nodes (17): LeaderGrid(), Tabs(), DataTable(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial, curriculum() (+9 more)

### Community 2 - "layout.tsx"
Cohesion: 0.20
Nodes (8): lenis, fontMain, metadata, RootLayout(), EnquiryProvider(), Preloader(), SmoothScroll(), TitleReveal()

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "ArrowLink"
Cohesion: 0.08
Nodes (41): ContactForm(), empty, Phase, EnquireButton(), criteria(), iconOf(), ProgramEligibility(), ProgramHero() (+33 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.11
Nodes (19): CtaLink(), DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, lsi, OfficeCard(), QuoteCards() (+11 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.09
Nodes (36): img(), InternationalLearners(), metadata, tints, CallbackForm(), Phase, programmes, ContinentCards() (+28 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.13
Nodes (14): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-26 (latest) (+6 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.06
Nodes (41): react, ICON_BY_SLUG, ICONS, FacultyScroller(), Item, FaqList(), icons, stroke (+33 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "next"
Cohesion: 0.13
Nodes (7): nextConfig, next, app, { createServer }, handle, next, Pic

### Community 16 - "ContentPage"
Cohesion: 0.17
Nodes (20): CertFlip(), slugify(), InnerHero(), FacultyGrid(), Head(), Sec(), certificates(), ContentPage() (+12 more)

### Community 18 - "Header.tsx"
Cohesion: 0.17
Nodes (11): react-dom, FactsDrawer(), OPEN_FACTS, rows, Header(), Hit, CloseIcon(), MenuIcon() (+3 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "EmiCalculator.tsx"
Cohesion: 0.60
Nodes (3): emi(), EmiCalculator(), inr()

### Community 21 - "ElectiveCombinator.tsx"
Cohesion: 0.06
Nodes (37): swiper, AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap() (+29 more)

### Community 22 - "parse.ts"
Cohesion: 0.20
Nodes (12): cleanBlocks(), isNote(), isQuote(), asImg(), Faq, Img, parseFaq(), parseFaqByQuestionMarks() (+4 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 24 - "Footer.tsx"
Cohesion: 0.25
Nodes (9): BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), Program, Specialization (+1 more)

### Community 25 - "useEnquiry"
Cohesion: 0.31
Nodes (5): ProgramGuidance(), EnquiryContext, useEnquiry(), SideTabs(), PhoneIcon()

### Community 26 - "renderSeg"
Cohesion: 0.24
Nodes (10): Checklist(), ClassApart(), ContactRow(), LogoWall(), Pic(), Prose(), Split(), Body() (+2 more)

### Community 27 - "app/page.tsx"
Cohesion: 0.06
Nodes (47): Architecture, homeFaqs, HomePage(), StatNumber(), About(), AboutBand(), aboutPhotos, Careers() (+39 more)

### Community 28 - "specViews"
Cohesion: 0.31
Nodes (10): CardGrid(), LearningCards(), lsIcon(), RoleGrid(), careers(), isP(), learningCards(), specViews() (+2 more)

### Community 29 - "section-heads.ts"
Cohesion: 0.50
Nodes (3): headFor(), SectionHead, sectionHeads

### Community 30 - "ProgramFaq.tsx"
Cohesion: 0.27
Nodes (6): Item(), ProgramFaq(), faqFor(), FaqInput, FaqItem, rupees()

### Community 32 - "CareerFlip.tsx"
Cohesion: 0.40
Nodes (3): CareerFlip(), CareerItem, IndustryItem

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 238 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `InnerPage.tsx`, `CareerFlip.tsx`, `Page.tsx`, `layout.tsx`, `ArrowLink`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `next`, `Header.tsx`, `curriculumData.ts`, `EmiCalculator.tsx`, `ElectiveCombinator.tsx`, `FeeTabs.tsx`, `Footer.tsx`, `useEnquiry`, `app/page.tsx`, `ProgramFaq.tsx`?**
  _High betweenness centrality (0.189) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06533646322378717 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `InnerPage.tsx`, `Page.tsx`, `layout.tsx`, `ProgramAbout.tsx`, `ArrowLink`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `react`, `Header.tsx`, `ElectiveCombinator.tsx`, `Footer.tsx`, `useEnquiry`, `app/page.tsx`, `not-found.tsx`?**
  _High betweenness centrality (0.149) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12121212121212122 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `InnerPage.tsx`, `Kit.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `react`, `ContentPage`, `ElectiveCombinator.tsx`, `useEnquiry`, `app/page.tsx`, `ProgramFaq.tsx`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._