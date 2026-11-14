# Graph Report - dsu online  (2026-11-14)

## Corpus Check
- 122 files · ~79,875 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 52 file(s) not represented in the graph (top: .scss 49, (none) 2, .ico 1)

## Summary
- 716 nodes · 1782 edges · 33 communities (28 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `255d5608`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- InnerPage.tsx
- Page.tsx
- site.ts
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
- server.js
- CLAUDE.md
- ContentPage
- ProgramAbout.tsx
- curriculumData.ts
- ArrowLink
- ProgramAdvantage.tsx
- parse.ts
- FeeTabs.tsx
- icons.tsx
- Footer.tsx
- Blogs.tsx
- next
- specViews
- withEyebrow
- programme-faq.ts
- layout.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 81 edges
2. `react` - 58 edges
3. `ArrowLink()` - 46 edges
4. `next` - 44 edges
5. `Icon()` - 20 edges
6. `ChevronRight()` - 18 edges
7. `Flow()` - 16 edges
8. `compilerOptions` - 16 edges
9. `CardSlider()` - 15 edges
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

## Communities (33 total, 5 thin omitted)

### Community 0 - "InnerPage.tsx"
Cohesion: 0.08
Nodes (51): nextConfig, bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve() (+43 more)

### Community 1 - "Page.tsx"
Cohesion: 0.11
Nodes (20): FaqList(), LeaderGrid(), Tabs(), DataTable(), FacultyGrid(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE (+12 more)

### Community 2 - "site.ts"
Cohesion: 0.16
Nodes (12): ProgramGuidance(), EnquiryContext, useEnquiry(), SideTabs(), PhoneIcon(), announcements, NavLink, showAnnouncement (+4 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.16
Nodes (23): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+15 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.13
Nodes (19): Checklist(), ContactRow(), CtaLink(), DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, lsi (+11 more)

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
Cohesion: 0.07
Nodes (25): react, Pic, ICON_BY_SLUG, ICONS, emi(), EmiCalculator(), inr(), icons (+17 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 16 - "ContentPage"
Cohesion: 0.15
Nodes (23): CertFlip(), slugify(), ClassApart(), Head(), LogoWall(), Pic(), Sec(), Split() (+15 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "ArrowLink"
Cohesion: 0.10
Nodes (20): Benefit(), Elective, ElectiveCombinator(), ICON, EnquireButton(), criteria(), iconOf(), ProgramEligibility() (+12 more)

### Community 21 - "ProgramAdvantage.tsx"
Cohesion: 0.06
Nodes (34): swiper, AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap() (+26 more)

### Community 22 - "parse.ts"
Cohesion: 0.24
Nodes (10): cleanBlocks(), isNote(), isQuote(), asImg(), Img, parseFaq(), parseFaqByQuestionMarks(), parseQuotes() (+2 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 24 - "icons.tsx"
Cohesion: 0.13
Nodes (12): FactsDrawer(), OPEN_FACTS, rows, Header(), Hit, base, CloseIcon(), MenuIcon() (+4 more)

### Community 25 - "Footer.tsx"
Cohesion: 0.22
Nodes (11): BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), Program, programs (+3 more)

### Community 26 - "Blogs.tsx"
Cohesion: 0.23
Nodes (11): Blogs(), MONTHS, ord(), toSlide(), Arrow(), BlogSlider(), Slide, toIsoBlogDate() (+3 more)

### Community 27 - "next"
Cohesion: 0.05
Nodes (57): Architecture, next, homeFaqs, HomePage(), About(), AboutBand(), aboutPhotos, Careers() (+49 more)

### Community 28 - "specViews"
Cohesion: 0.22
Nodes (13): CareerFlip(), CardGrid(), LearningCards(), lsIcon(), RoleGrid(), careers(), isP(), learningCards() (+5 more)

### Community 29 - "withEyebrow"
Cohesion: 0.40
Nodes (4): withEyebrow(), headFor(), SectionHead, sectionHeads

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 32 - "layout.tsx"
Cohesion: 0.20
Nodes (8): lenis, fontMain, metadata, RootLayout(), EnquiryProvider(), Preloader(), SmoothScroll(), TitleReveal()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 237 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `InnerPage.tsx`, `Page.tsx`, `site.ts`, `layout.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `curriculumData.ts`, `ArrowLink`, `ProgramAdvantage.tsx`, `FeeTabs.tsx`, `icons.tsx`, `Footer.tsx`, `Blogs.tsx`, `next`?**
  _High betweenness centrality (0.189) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07526881720430108 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `InnerPage.tsx`, `layout.tsx`, `Page.tsx`, `site.ts`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `react`, `server.js`, `ProgramAbout.tsx`, `ArrowLink`, `ProgramAdvantage.tsx`, `icons.tsx`, `Footer.tsx`, `Blogs.tsx`, `not-found.tsx`?**
  _High betweenness centrality (0.152) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10541310541310542 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `InnerPage.tsx`, `site.ts`, `EnquiryModal.tsx`, `Kit.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `ProgramAdvantage.tsx`, `Blogs.tsx`, `next`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._