# Graph Report - dsu online  (2026-11-13)

## Corpus Check
- 114 files · ~75,163 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 44 file(s) not represented in the graph (top: .scss 41, (none) 2, .ico 1)

## Summary
- 665 nodes · 1683 edges · 32 communities (28 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e9179e7c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- InnerPage.tsx
- Kit.tsx
- next
- scrape.py
- EnquiryModal.tsx
- package.json
- app/page.tsx
- compilerOptions
- international-learners/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- react
- README.md
- AGENTS.md
- Page.tsx
- CLAUDE.md
- ArrowLink
- parse.ts
- specViews
- AdmissionSteps.tsx
- ElectiveCombinator.tsx
- About.tsx
- FeeTabs.tsx
- FacultyArticles.tsx
- ProgramsBand.tsx
- Learning.tsx
- home.ts
- ContentPage
- Testimonials.tsx
- ProgramAbout.tsx
- PayOptions.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 73 edges
2. `react` - 55 edges
3. `ArrowLink()` - 42 edges
4. `next` - 40 edges
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

## Communities (32 total, 4 thin omitted)

### Community 0 - "InnerPage.tsx"
Cohesion: 0.06
Nodes (61): bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+53 more)

### Community 1 - "Kit.tsx"
Cohesion: 0.10
Nodes (24): CtaLink(), DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, LearningCards(), lsi, lsIcon() (+16 more)

### Community 2 - "next"
Cohesion: 0.07
Nodes (18): nextConfig, lenis, next, app, { createServer }, handle, next, fontMain (+10 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.06
Nodes (51): react-dom, ContactForm(), empty, Phase, empty, Phase, ReferForm(), V (+43 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "app/page.tsx"
Cohesion: 0.24
Nodes (11): homeFaqs, HomePage(), About(), Careers(), Faq(), Hero(), ProgramsBand(), Recognitions() (+3 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.09
Nodes (36): img(), InternationalLearners(), metadata, tints, CallbackForm(), Phase, programmes, ContinentCards() (+28 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.15
Nodes (12): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Update 2026-10-27 (QA-issue round, new account), Update 2026-10-28 (+4 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.07
Nodes (34): react, CareerItem, IndustryItem, ICON_BY_SLUG, ICONS, emi(), EmiCalculator(), inr() (+26 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "Page.tsx"
Cohesion: 0.12
Nodes (17): slugify(), Head(), Sec(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial, ELECTIVE_PHOTOS (+9 more)

### Community 16 - "ArrowLink"
Cohesion: 0.19
Nodes (10): EnquireButton(), ProgramHero(), ProgramHeroProps, slidePos, slideSize, ArrowLink(), Props, Variant (+2 more)

### Community 18 - "parse.ts"
Cohesion: 0.18
Nodes (13): cleanBlocks(), isNote(), isQuote(), FaqList(), asImg(), Faq, Img, parseFaq() (+5 more)

### Community 19 - "specViews"
Cohesion: 0.24
Nodes (12): Status, CareerFlip(), CardGrid(), FacultyGrid(), RoleGrid(), careers(), faculty(), isP() (+4 more)

### Community 20 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (6): AdmissionSteps(), heading(), ic, icons, Step, wrap()

### Community 21 - "ElectiveCombinator.tsx"
Cohesion: 0.11
Nodes (19): swiper, Benefit(), Elective, ElectiveCombinator(), ICON, Card(), ElectiveGrid(), Item (+11 more)

### Community 22 - "About.tsx"
Cohesion: 0.23
Nodes (8): Architecture, StatNumber(), AboutBand(), aboutPhotos, Counter(), aboutCopy, aboutFeatures, aboutStats

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 24 - "FacultyArticles.tsx"
Cohesion: 0.33
Nodes (7): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, toIsoDate(), Icon(), realFaculty

### Community 25 - "ProgramsBand.tsx"
Cohesion: 0.25
Nodes (5): order, photos, Rect, Props, Rect

### Community 26 - "Learning.tsx"
Cohesion: 0.48
Nodes (4): Learning(), VideoTile(), PlayIcon(), bentoTiles

### Community 27 - "home.ts"
Cohesion: 0.14
Nodes (13): articles, awards, BentoTile, blogs, careerTabs, certifications, faculty, faqs (+5 more)

### Community 28 - "ContentPage"
Cohesion: 0.16
Nodes (24): Update 2026-10-26 (latest), LeaderGrid(), Tabs(), Checklist(), ClassApart(), ContactRow(), DataTable(), LogoWall() (+16 more)

### Community 29 - "Testimonials.tsx"
Cohesion: 0.33
Nodes (3): tickerItems, iconSize, showAnnouncement

### Community 31 - "PayOptions.tsx"
Cohesion: 0.50
Nodes (3): icons, PayOptions(), stroke

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 216 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `InnerPage.tsx`, `Kit.tsx`, `next`, `EnquiryModal.tsx`, `package.json`, `app/page.tsx`, `international-learners/page.tsx`, `Page.tsx`, `ArrowLink`, `parse.ts`, `AdmissionSteps.tsx`, `ElectiveCombinator.tsx`, `About.tsx`, `FeeTabs.tsx`, `FacultyArticles.tsx`, `ProgramsBand.tsx`, `Learning.tsx`, `home.ts`, `PayOptions.tsx`?**
  _High betweenness centrality (0.189) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06442058496853018 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `InnerPage.tsx`, `Kit.tsx`, `EnquiryModal.tsx`, `package.json`, `app/page.tsx`, `international-learners/page.tsx`, `react`, `Page.tsx`, `ArrowLink`, `AdmissionSteps.tsx`, `ElectiveCombinator.tsx`, `FacultyArticles.tsx`, `ProgramsBand.tsx`, `home.ts`, `Testimonials.tsx`, `ProgramAbout.tsx`?**
  _High betweenness centrality (0.156) - this node is a cross-community bridge._
- **Should `Kit.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `InnerPage.tsx`, `Kit.tsx`, `EnquiryModal.tsx`, `app/page.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `ElectiveCombinator.tsx`, `About.tsx`, `FacultyArticles.tsx`, `ProgramsBand.tsx`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._