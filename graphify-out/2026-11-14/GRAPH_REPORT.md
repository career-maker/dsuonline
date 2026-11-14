# Graph Report - dsu online  (2026-11-13)

## Corpus Check
- 126 files · ~80,296 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 54 file(s) not represented in the graph (top: .scss 51, (none) 2, .ico 1)

## Summary
- 729 nodes · 1843 edges · 30 communities (24 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `48979d1d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ArrowLink
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
- EmiCalculator.tsx
- ElectiveCombinator.tsx
- parse.ts
- FeeTabs.tsx
- learningCards
- next
- specViews
- section-heads.ts
- ProgramFaq.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 85 edges
2. `react` - 61 edges
3. `ArrowLink()` - 50 edges
4. `next` - 45 edges
5. `ChevronRight()` - 22 edges
6. `Icon()` - 20 edges
7. `Flow()` - 16 edges
8. `ChevronLeft()` - 16 edges
9. `site` - 16 edges
10. `compilerOptions` - 16 edges

## Surprising Connections (you probably didn't know these)
- `Update 2026-10-26 (latest)` --references--> `flat()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Update 2026-10-28` --references--> `ArrowLink()`  [INFERRED]
  CHECKPOINT.md → src/components/ui/ArrowLink.tsx
- `Status` --references--> `faculty()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `Testimonials()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/Testimonials.tsx
- `Architecture` --references--> `WhyChoose()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/WhyChoose.tsx

## Import Cycles
- None detected.

## Communities (30 total, 6 thin omitted)

### Community 0 - "ArrowLink"
Cohesion: 0.05
Nodes (71): bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+63 more)

### Community 1 - "Page.tsx"
Cohesion: 0.08
Nodes (25): CertFlip(), Pic, FaqList(), LeaderGrid(), Tabs(), DataTable(), ADMISSION_PHOTOS, BANNERS (+17 more)

### Community 2 - "site.ts"
Cohesion: 0.06
Nodes (38): lenis, fontMain, metadata, RootLayout(), ProgramGuidance(), BrochureForm(), EnquiryContext, EnquiryProvider() (+30 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.13
Nodes (27): ContactForm(), empty, Phase, criteria(), iconOf(), ProgramEligibility(), empty, Phase (+19 more)

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
Nodes (37): gsap, img(), InternationalLearners(), metadata, tints, CallbackForm(), Phase, programmes (+29 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.14
Nodes (13): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Update 2026-10-26 (latest), Update 2026-10-27 (QA-issue round, new account) (+5 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.07
Nodes (40): react, ICON_BY_SLUG, ICONS, FacultyScroller(), Item, QuoteSlider(), avatar(), FacultyArticles() (+32 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 16 - "ContentPage"
Cohesion: 0.17
Nodes (23): Architecture, slugify(), ClassApart(), Head(), LogoWall(), Pic(), Sec(), Split() (+15 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.16
Nodes (14): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+6 more)

### Community 20 - "EmiCalculator.tsx"
Cohesion: 0.60
Nodes (3): emi(), EmiCalculator(), inr()

### Community 21 - "ElectiveCombinator.tsx"
Cohesion: 0.05
Nodes (39): swiper, AdmissionSteps(), heading(), ic, icons, Step, StepCard(), CareerItem (+31 more)

### Community 22 - "parse.ts"
Cohesion: 0.27
Nodes (9): cleanBlocks(), isNote(), isQuote(), asImg(), parseFaq(), parseFaqByQuestionMarks(), parseQuotes(), Quote (+1 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 24 - "learningCards"
Cohesion: 0.67
Nodes (3): LearningCards(), lsIcon(), learningCards()

### Community 27 - "next"
Cohesion: 0.06
Nodes (42): nextConfig, next, homeFaqs, HomePage(), About(), aboutPhotos, Careers(), Faq() (+34 more)

### Community 28 - "specViews"
Cohesion: 0.22
Nodes (13): Status, wrap(), CareerFlip(), CardGrid(), FacultyGrid(), RoleGrid(), careers(), faculty() (+5 more)

### Community 30 - "ProgramFaq.tsx"
Cohesion: 0.27
Nodes (6): Item(), ProgramFaq(), faqFor(), FaqInput, FaqItem, rupees()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 239 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `ArrowLink`, `Page.tsx`, `site.ts`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `curriculumData.ts`, `EmiCalculator.tsx`, `ElectiveCombinator.tsx`, `FeeTabs.tsx`, `next`, `ProgramFaq.tsx`?**
  _High betweenness centrality (0.189) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ArrowLink` be split into smaller, more focused modules?**
  _Cohesion score 0.05212716222533895 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `ArrowLink`, `Page.tsx`, `site.ts`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `react`, `server.js`, `ProgramAbout.tsx`, `ElectiveCombinator.tsx`, `not-found.tsx`?**
  _High betweenness centrality (0.148) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07807807807807808 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `site.ts`, `EnquiryModal.tsx`, `Kit.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `react`, `ContentPage`, `ElectiveCombinator.tsx`, `next`, `ProgramFaq.tsx`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._