# Graph Report - dsu online  (2026-11-13)

## Corpus Check
- 121 files · ~78,381 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 50 file(s) not represented in the graph (top: .scss 47, (none) 2, .ico 1)

## Summary
- 709 nodes · 1786 edges · 35 communities (31 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3f6f6e49`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- InnerPage.tsx
- Page.tsx
- next
- scrape.py
- EnquiryModal.tsx
- package.json
- Kit.tsx
- compilerOptions
- international-learners/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- react
- README.md
- AGENTS.md
- About.tsx
- CLAUDE.md
- ContentPage
- app/page.tsx
- curriculumData.ts
- EmiCalculator.tsx
- ElectiveCombinator.tsx
- parse.ts
- FeeTabs.tsx
- Icon.tsx
- ArrowLink
- ProgramsBand.tsx
- home.ts
- specViews
- slugify
- FacultyArticles.tsx
- ProgramFaculty.tsx
- CareerFlip.tsx
- ProgramAbout.tsx
- Hero.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 80 edges
2. `react` - 58 edges
3. `ArrowLink()` - 46 edges
4. `next` - 43 edges
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

## Communities (35 total, 4 thin omitted)

### Community 0 - "InnerPage.tsx"
Cohesion: 0.06
Nodes (62): bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+54 more)

### Community 1 - "Page.tsx"
Cohesion: 0.13
Nodes (17): LeaderGrid(), Tabs(), DataTable(), FacultyGrid(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial (+9 more)

### Community 2 - "next"
Cohesion: 0.06
Nodes (29): nextConfig, lenis, next, react-dom, app, { createServer }, handle, next (+21 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.10
Nodes (34): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, BrochureForm() (+26 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (33): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+25 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.11
Nodes (19): CtaLink(), DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, lsi, OfficeCard(), QuoteCards() (+11 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.10
Nodes (34): img(), InternationalLearners(), metadata, tints, CallbackForm(), ContinentCards(), compare, continents (+26 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.13
Nodes (14): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-26 (latest) (+6 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.06
Nodes (37): react, ICON_BY_SLUG, ICONS, FacultyScroller(), Item, FaqList(), icons, stroke (+29 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "About.tsx"
Cohesion: 0.21
Nodes (7): ProgramHeroProps, StatNumber(), aboutPhotos, Counter(), aboutCopy, aboutFeatures, aboutStats

### Community 16 - "ContentPage"
Cohesion: 0.16
Nodes (22): Checklist(), ClassApart(), ContactRow(), LogoWall(), Pic(), Prose(), Split(), Body() (+14 more)

### Community 18 - "app/page.tsx"
Cohesion: 0.30
Nodes (13): Architecture, homeFaqs, HomePage(), About(), AboutBand(), Careers(), Hero(), Learning() (+5 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "EmiCalculator.tsx"
Cohesion: 0.60
Nodes (3): emi(), EmiCalculator(), inr()

### Community 21 - "ElectiveCombinator.tsx"
Cohesion: 0.07
Nodes (32): AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap(), Benefit() (+24 more)

### Community 22 - "parse.ts"
Cohesion: 0.22
Nodes (11): cleanBlocks(), isNote(), isQuote(), asImg(), Faq, parseFaq(), parseFaqByQuestionMarks(), parseQuotes() (+3 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 24 - "Icon.tsx"
Cohesion: 0.33
Nodes (4): VideoTile(), PlayIcon(), bentoTiles, iconSize

### Community 25 - "ArrowLink"
Cohesion: 0.13
Nodes (16): criteria(), iconOf(), ProgramEligibility(), ProgramGuidance(), Phase, programmes, ArrowLink(), Props (+8 more)

### Community 26 - "ProgramsBand.tsx"
Cohesion: 0.21
Nodes (7): Faq(), order, photos, Rect, FramedImage(), Props, Rect

### Community 27 - "home.ts"
Cohesion: 0.13
Nodes (13): articles, awards, BentoTile, blogs, careerTabs, certifications, faculty, faqs (+5 more)

### Community 28 - "specViews"
Cohesion: 0.31
Nodes (10): CardGrid(), LearningCards(), lsIcon(), RoleGrid(), careers(), isP(), learningCards(), specViews() (+2 more)

### Community 29 - "slugify"
Cohesion: 0.25
Nodes (7): slugify(), Head(), Sec(), withEyebrow(), headFor(), SectionHead, sectionHeads

### Community 30 - "FacultyArticles.tsx"
Cohesion: 0.33
Nodes (6): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, toIsoDate(), realFaculty

### Community 31 - "ProgramFaculty.tsx"
Cohesion: 0.38
Nodes (5): Img, Card(), initials(), Item, ProgramFaculty()

### Community 32 - "CareerFlip.tsx"
Cohesion: 0.40
Nodes (3): CareerFlip(), CareerItem, IndustryItem

### Community 34 - "Hero.tsx"
Cohesion: 0.40
Nodes (3): slidePos, slideSize, heroSlides

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 232 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `InnerPage.tsx`, `Page.tsx`, `next`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `About.tsx`, `curriculumData.ts`, `EmiCalculator.tsx`, `ElectiveCombinator.tsx`, `FeeTabs.tsx`, `Icon.tsx`, `ArrowLink`, `ProgramsBand.tsx`, `home.ts`, `FacultyArticles.tsx`, `CareerFlip.tsx`, `Hero.tsx`?**
  _High betweenness centrality (0.190) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06486486486486487 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `InnerPage.tsx`, `Page.tsx`, `ProgramAbout.tsx`, `Hero.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `react`, `About.tsx`, `ElectiveCombinator.tsx`, `Icon.tsx`, `ArrowLink`, `ProgramsBand.tsx`, `home.ts`, `FacultyArticles.tsx`, `ProgramFaculty.tsx`?**
  _High betweenness centrality (0.152) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12857142857142856 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `InnerPage.tsx`, `next`, `Hero.tsx`, `EnquiryModal.tsx`, `Kit.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `About.tsx`, `ContentPage`, `app/page.tsx`, `ElectiveCombinator.tsx`, `ProgramsBand.tsx`, `FacultyArticles.tsx`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._