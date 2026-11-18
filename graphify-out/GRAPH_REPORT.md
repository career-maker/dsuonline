# Graph Report - dsu online  (2026-11-18)

## Corpus Check
- 130 files · ~84,527 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 56 file(s) not represented in the graph (top: .scss 53, (none) 2, .ico 1)

## Summary
- 755 nodes · 1873 edges · 44 communities (36 shown, 8 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `55cb670c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ProgramHero.tsx
- Page.tsx
- ProgramAdvantage.tsx
- scrape.py
- EnquiryModal.tsx
- package.json
- Kit.tsx
- compilerOptions
- react
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- EmiCalculator.tsx
- README.md
- AGENTS.md
- server.js
- CLAUDE.md
- ContentPage
- home.ts
- curriculumData.ts
- app/page.tsx
- Footer.tsx
- parse.ts
- Header.tsx
- InnerPage.tsx
- next
- site.ts
- CardSlider
- ElectiveCombinator.tsx
- programme-faq.ts
- src_components_inner_kit_module
- FacultyArticles.tsx
- specViews
- icons.tsx
- Hero.tsx
- ProgramAbout.tsx
- Icon.tsx
- withEyebrow
- ArrowLink
- Learning.tsx
- next.config.ts
- CertFlip.tsx
- FeeTabs.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 83 edges
2. `react` - 59 edges
3. `next` - 48 edges
4. `ArrowLink()` - 46 edges
5. `CardSlider()` - 22 edges
6. `Icon()` - 20 edges
7. `ChevronRight()` - 18 edges
8. `Flow()` - 16 edges
9. `compilerOptions` - 16 edges
10. `DSU Online — CHECKPOINT (read this first in any new session)` - 16 edges

## Surprising Connections (you probably didn't know these)
- `Update 2026-10-26 (latest)` --references--> `flat()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Status` --references--> `faculty()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Update 2026-10-28` --references--> `ArrowLink()`  [INFERRED]
  CHECKPOINT.md → src/components/ui/ArrowLink.tsx
- `Latest change` --references--> `specEyebrow()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ReferPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx

## Import Cycles
- None detected.

## Communities (44 total, 8 thin omitted)

### Community 0 - "ProgramHero.tsx"
Cohesion: 0.33
Nodes (5): ProgramHero(), ProgramHeroProps, StatNumber(), Counter(), brochureHref()

### Community 1 - "Page.tsx"
Cohesion: 0.11
Nodes (19): Tabs(), CardGrid(), Checklist(), ContactRow(), CtaLink(), DataTable(), Prose(), ADMISSION_PHOTOS (+11 more)

### Community 2 - "ProgramAdvantage.tsx"
Cohesion: 0.07
Nodes (25): swiper, AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap() (+17 more)

### Community 3 - "scrape.py"
Cohesion: 0.07
Nodes (16): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+8 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.14
Nodes (26): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CallbackForm() (+18 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.10
Nodes (23): Update: common sections + specialization template, DocList(), FacultyGrid(), FacultyShowcase(), highlight(), HIGHLIGHTS, lsi, OfficeCard() (+15 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "react"
Cohesion: 0.07
Nodes (42): gsap, react, heroUsps, img(), InternationalLearners(), metadata, tints, ICON_BY_SLUG (+34 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.12
Nodes (15): 2026-10-30 inner-page photos, 2026-11-18 Dual specialisation, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status (+7 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "EmiCalculator.tsx"
Cohesion: 0.38
Nodes (5): EMI_TENURES, EmiCalculator(), feeFor(), inr(), PG

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 16 - "ContentPage"
Cohesion: 0.14
Nodes (26): CertFlip(), slugify(), CtaBand(), LeaderGrid(), ClassApart(), LogoWall(), Pic(), Sec() (+18 more)

### Community 18 - "home.ts"
Cohesion: 0.12
Nodes (15): aboutPhotos, aboutCopy, aboutFeatures, aboutStats, articles, awards, BentoTile, blogs (+7 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "app/page.tsx"
Cohesion: 0.30
Nodes (13): Architecture, homeFaqs, HomePage(), About(), AboutBand(), Careers(), Hero(), Learning() (+5 more)

### Community 21 - "Footer.tsx"
Cohesion: 0.22
Nodes (11): BROCHURE, BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), Program (+3 more)

### Community 22 - "parse.ts"
Cohesion: 0.20
Nodes (12): cleanBlocks(), isNote(), isQuote(), FaqList(), asImg(), Faq, parseFaq(), parseFaqByQuestionMarks() (+4 more)

### Community 23 - "Header.tsx"
Cohesion: 0.19
Nodes (10): react-dom, FactsDrawer(), OPEN_FACTS, rows, Header(), Hit, CloseIcon(), MenuIcon() (+2 more)

### Community 25 - "InnerPage.tsx"
Cohesion: 0.06
Nodes (60): bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+52 more)

### Community 26 - "next"
Cohesion: 0.15
Nodes (10): next, fontMain, metadata, RootLayout(), NavProgress(), Preloader(), SideTabs(), SmoothScroll() (+2 more)

### Community 27 - "site.ts"
Cohesion: 0.16
Nodes (11): criteria(), iconOf(), ProgramEligibility(), announcements, footerColumns, mainNav, NavLink, showFacultyInsights (+3 more)

### Community 28 - "CardSlider"
Cohesion: 0.12
Nodes (15): Latest change, body(), CareerShowcase(), Role, Card(), ElectiveGrid(), Item, Item (+7 more)

### Community 29 - "ElectiveCombinator.tsx"
Cohesion: 0.24
Nodes (8): Benefit(), Elective, ElectiveCombinator(), ICON, EnquireButton(), useEnquiry(), architectCopy, DUAL_PROGRAMMES

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 31 - "src_components_inner_kit_module"
Cohesion: 0.25
Nodes (5): icons, PayOptions(), stroke, WhyItem, WhyTabs()

### Community 32 - "FacultyArticles.tsx"
Cohesion: 0.33
Nodes (6): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, toIsoDate(), realFaculty

### Community 33 - "specViews"
Cohesion: 0.24
Nodes (12): CareerFlip(), Head(), LearningCards(), lsIcon(), careers(), isP(), learningCards(), specEyebrow() (+4 more)

### Community 34 - "icons.tsx"
Cohesion: 0.09
Nodes (26): FacultyStrip(), Avatar(), AvatarFallback(), AvatarImage(), Card(), CardContent(), CardFooter(), cx() (+18 more)

### Community 35 - "Hero.tsx"
Cohesion: 0.33
Nodes (4): first, slidePos, slideSize, heroSlides

### Community 37 - "Icon.tsx"
Cohesion: 0.33
Nodes (3): careerTabs, recruiters, iconSize

### Community 38 - "withEyebrow"
Cohesion: 0.40
Nodes (4): withEyebrow(), headFor(), SectionHead, sectionHeads

### Community 39 - "ArrowLink"
Cohesion: 0.16
Nodes (11): Faq(), order, photos, Rect, ArrowLink(), Props, Variant, FramedImage() (+3 more)

### Community 46 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 253 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `ProgramHero.tsx`, `Page.tsx`, `ProgramAdvantage.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `EmiCalculator.tsx`, `home.ts`, `curriculumData.ts`, `Footer.tsx`, `parse.ts`, `Header.tsx`, `InnerPage.tsx`, `next`, `ElectiveCombinator.tsx`, `src_components_inner_kit_module`, `FacultyArticles.tsx`, `icons.tsx`, `Hero.tsx`, `Icon.tsx`, `ArrowLink`, `Learning.tsx`, `CertFlip.tsx`, `FeeTabs.tsx`?**
  _High betweenness centrality (0.181) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1076923076923077 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `ProgramHero.tsx`, `Page.tsx`, `ProgramAdvantage.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `react`, `server.js`, `home.ts`, `curriculumData.ts`, `Footer.tsx`, `Header.tsx`, `not-found.tsx`, `InnerPage.tsx`, `site.ts`, `CardSlider`, `ElectiveCombinator.tsx`, `src_components_inner_kit_module`, `FacultyArticles.tsx`, `icons.tsx`, `Hero.tsx`, `ProgramAbout.tsx`, `Icon.tsx`, `ArrowLink`, `next.config.ts`, `CertFlip.tsx`?**
  _High betweenness centrality (0.156) - this node is a cross-community bridge._
- **Should `ProgramAdvantage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06984126984126984 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `ProgramHero.tsx`, `Page.tsx`, `ProgramAdvantage.tsx`, `FacultyArticles.tsx`, `EnquiryModal.tsx`, `Hero.tsx`, `Kit.tsx`, `react`, `DSU Online — CHECKPOINT (read this first in any new session)`, `ContentPage`, `home.ts`, `app/page.tsx`, `InnerPage.tsx`, `site.ts`, `CardSlider`, `ElectiveCombinator.tsx`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._