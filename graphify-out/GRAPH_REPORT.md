# Graph Report - dsu online  (2026-11-13)

## Corpus Check
- 117 files · ~76,962 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 46 file(s) not represented in the graph (top: .scss 43, (none) 2, .ico 1)

## Summary
- 685 nodes · 1719 edges · 30 communities (24 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `079218b0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ArrowLink
- Page.tsx
- icons.tsx
- scrape.py
- EnquiryModal.tsx
- package.json
- Kit.tsx
- compilerOptions
- international-learners/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- Testimonial.tsx
- README.md
- AGENTS.md
- server.js
- CLAUDE.md
- ContentPage
- curriculumData.ts
- react
- ElectiveCombinator.tsx
- parse.ts
- FeeTabs.tsx
- specViews
- AdmissionSteps.tsx
- ProgramAbout.tsx
- next
- learningCards
- section-heads.ts

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 76 edges
2. `react` - 57 edges
3. `ArrowLink()` - 42 edges
4. `next` - 41 edges
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

## Communities (30 total, 6 thin omitted)

### Community 0 - "ArrowLink"
Cohesion: 0.05
Nodes (68): nextConfig, bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve() (+60 more)

### Community 1 - "Page.tsx"
Cohesion: 0.11
Nodes (19): FaqList(), LeaderGrid(), Tabs(), DataTable(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial (+11 more)

### Community 2 - "icons.tsx"
Cohesion: 0.08
Nodes (25): lenis, react-dom, fontMain, metadata, RootLayout(), EnquiryContext, EnquiryProvider(), useEnquiry() (+17 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.10
Nodes (34): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, BrochureForm() (+26 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.10
Nodes (23): Checklist(), ContactRow(), CtaLink(), DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, lsi (+15 more)

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

### Community 11 - "Testimonial.tsx"
Cohesion: 0.18
Nodes (13): Avatar(), AvatarFallback(), AvatarImage(), Card(), CardContent(), CardFooter(), cx(), P (+5 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 16 - "ContentPage"
Cohesion: 0.16
Nodes (23): slugify(), ClassApart(), Head(), LogoWall(), Pic(), Sec(), Split(), Body() (+15 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "react"
Cohesion: 0.09
Nodes (24): react, CareerItem, IndustryItem, ICON_BY_SLUG, ICONS, emi(), EmiCalculator(), inr() (+16 more)

### Community 21 - "ElectiveCombinator.tsx"
Cohesion: 0.11
Nodes (19): swiper, Benefit(), Elective, ElectiveCombinator(), ICON, Card(), ElectiveGrid(), Item (+11 more)

### Community 22 - "parse.ts"
Cohesion: 0.24
Nodes (10): cleanBlocks(), isNote(), isQuote(), asImg(), Img, parseFaq(), parseFaqByQuestionMarks(), parseQuotes() (+2 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 24 - "specViews"
Cohesion: 0.27
Nodes (11): CareerFlip(), CardGrid(), FacultyGrid(), RoleGrid(), careers(), faculty(), isP(), specViews() (+3 more)

### Community 25 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (6): AdmissionSteps(), heading(), ic, icons, Step, wrap()

### Community 27 - "next"
Cohesion: 0.05
Nodes (59): Architecture, next, homeFaqs, HomePage(), About(), AboutBand(), aboutPhotos, Careers() (+51 more)

### Community 28 - "learningCards"
Cohesion: 0.67
Nodes (3): LearningCards(), lsIcon(), learningCards()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 224 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `ArrowLink`, `Page.tsx`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `Testimonial.tsx`, `curriculumData.ts`, `ElectiveCombinator.tsx`, `FeeTabs.tsx`, `AdmissionSteps.tsx`, `next`?**
  _High betweenness centrality (0.192) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ArrowLink` be split into smaller, more focused modules?**
  _Cohesion score 0.05303030303030303 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `ArrowLink`, `Page.tsx`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `Testimonial.tsx`, `server.js`, `not-found.tsx`, `react`, `ElectiveCombinator.tsx`, `AdmissionSteps.tsx`, `ProgramAbout.tsx`?**
  _High betweenness centrality (0.153) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11333333333333333 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `EnquiryModal.tsx`, `Kit.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `react`, `ElectiveCombinator.tsx`, `next`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._