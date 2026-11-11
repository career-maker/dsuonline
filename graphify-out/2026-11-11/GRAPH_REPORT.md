# Graph Report - dsu online  (2026-11-11)

## Corpus Check
- 107 files · ~71,124 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 39 file(s) not represented in the graph (top: .scss 36, (none) 2, .ico 1)

## Summary
- 628 nodes · 1586 edges · 28 communities (23 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `96031bb7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- InnerPage.tsx
- Kit.tsx
- site.ts
- scrape.py
- ArrowLink
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
- Blogs.tsx
- server.js
- slugify
- EmiCalculator.tsx
- Counter
- next

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 72 edges
2. `react` - 53 edges
3. `next` - 37 edges
4. `ArrowLink()` - 36 edges
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

## Communities (28 total, 5 thin omitted)

### Community 0 - "InnerPage.tsx"
Cohesion: 0.07
Nodes (53): nextConfig, bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+45 more)

### Community 1 - "Kit.tsx"
Cohesion: 0.10
Nodes (22): CtaLink(), DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, LearningCards(), lsi, lsIcon() (+14 more)

### Community 2 - "site.ts"
Cohesion: 0.06
Nodes (38): react-dom, fontMain, metadata, RootLayout(), ElectiveCombinator(), BrochureForm(), EnquiryContext, EnquiryProvider() (+30 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (13): git(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail(), extract() (+5 more)

### Community 4 - "ArrowLink"
Cohesion: 0.12
Nodes (33): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CallbackForm() (+25 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (31): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+23 more)

### Community 6 - "Page.tsx"
Cohesion: 0.15
Nodes (16): LeaderGrid(), Tabs(), DataTable(), FacultyGrid(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial (+8 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.09
Nodes (32): gsap, img(), InternationalLearners(), metadata, ContinentCards(), compare, continents, formCountries (+24 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.14
Nodes (13): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-26 (latest) (+5 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.06
Nodes (43): react, Item, ICON_BY_SLUG, ICONS, FacultyScroller(), Item, FaqList(), icons (+35 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "ContentPage"
Cohesion: 0.15
Nodes (24): Architecture, ElectiveGrid(), Checklist(), ClassApart(), ContactRow(), LogoWall(), Pic(), Prose() (+16 more)

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

### Community 21 - "Blogs.tsx"
Cohesion: 0.26
Nodes (9): MONTHS, ord(), toSlide(), Arrow(), BlogSlider(), Slide, toIsoBlogDate(), useDragScroll() (+1 more)

### Community 22 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 23 - "slugify"
Cohesion: 0.25
Nodes (7): slugify(), Head(), Sec(), withEyebrow(), headFor(), SectionHead, sectionHeads

### Community 25 - "EmiCalculator.tsx"
Cohesion: 0.60
Nodes (3): emi(), EmiCalculator(), inr()

### Community 27 - "next"
Cohesion: 0.06
Nodes (43): next, homeFaqs, HomePage(), About(), aboutPhotos, Blogs(), Careers(), Faq() (+35 more)

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 202 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `InnerPage.tsx`, `Kit.tsx`, `site.ts`, `ArrowLink`, `package.json`, `Page.tsx`, `international-learners/page.tsx`, `specViews`, `FeeTabs.tsx`, `AdmissionSteps.tsx`, `Blogs.tsx`, `EmiCalculator.tsx`, `Counter`, `next`?**
  _High betweenness centrality (0.188) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07403846153846154 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `InnerPage.tsx`, `Kit.tsx`, `site.ts`, `ArrowLink`, `package.json`, `Page.tsx`, `international-learners/page.tsx`, `react`, `AdmissionSteps.tsx`, `Blogs.tsx`, `server.js`, `not-found.tsx`?**
  _High betweenness centrality (0.154) - this node is a cross-community bridge._
- **Should `Kit.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09846153846153846 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `InnerPage.tsx`, `Kit.tsx`, `site.ts`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `react`, `ContentPage`, `Blogs.tsx`, `next`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._