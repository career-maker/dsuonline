# Graph Report - dsu online  (2026-11-17)

## Corpus Check
- 124 files · ~81,465 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 53 file(s) not represented in the graph (top: .scss 50, (none) 2, .ico 1)

## Summary
- 727 nodes · 1808 edges · 32 communities (26 shown, 6 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `983520df`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ArrowLink
- Page.tsx
- learningCards
- scrape.py
- EnquiryModal.tsx
- package.json
- Kit.tsx
- compilerOptions
- react
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- Testimonial.tsx
- README.md
- AGENTS.md
- server.js
- CLAUDE.md
- ContentPage
- next
- curriculumData.ts
- EmiCalculator.tsx
- ElectiveCombinator.tsx
- parse.ts
- FeeTabs.tsx
- ProgramAbout.tsx
- icons.tsx
- specViews
- section-heads.ts
- programme-faq.ts
- Blogs.tsx
- faculty

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 82 edges
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
- `Latest change` --references--> `specEyebrow()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ReferPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx

## Import Cycles
- None detected.

## Communities (32 total, 6 thin omitted)

### Community 0 - "ArrowLink"
Cohesion: 0.06
Nodes (62): nextConfig, bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve() (+54 more)

### Community 1 - "Page.tsx"
Cohesion: 0.09
Nodes (18): ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial, ELECTIVE_PHOTOS, P, Props, Seg (+10 more)

### Community 2 - "learningCards"
Cohesion: 0.67
Nodes (3): LearningCards(), lsIcon(), learningCards()

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.16
Nodes (25): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+17 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.10
Nodes (23): Tabs(), Checklist(), ContactRow(), CtaLink(), DataTable(), DocList(), FacultyShowcase(), highlight() (+15 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "react"
Cohesion: 0.07
Nodes (42): gsap, react, heroUsps, img(), InternationalLearners(), metadata, tints, Pic (+34 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.12
Nodes (15): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest change, Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status (+7 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "Testimonial.tsx"
Cohesion: 0.13
Nodes (17): VideoTile(), Avatar(), AvatarFallback(), AvatarImage(), Card(), CardContent(), CardFooter(), cx() (+9 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 16 - "ContentPage"
Cohesion: 0.14
Nodes (26): CertFlip(), slugify(), LeaderGrid(), ClassApart(), LogoWall(), Pic(), Sec(), Split() (+18 more)

### Community 18 - "next"
Cohesion: 0.05
Nodes (57): Architecture, next, homeFaqs, HomePage(), About(), AboutBand(), aboutPhotos, Careers() (+49 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "EmiCalculator.tsx"
Cohesion: 0.60
Nodes (3): emi(), EmiCalculator(), inr()

### Community 21 - "ElectiveCombinator.tsx"
Cohesion: 0.05
Nodes (39): swiper, AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap() (+31 more)

### Community 22 - "parse.ts"
Cohesion: 0.19
Nodes (12): cleanBlocks(), isNote(), isQuote(), FaqList(), asImg(), Faq, Img, parseFaq() (+4 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 26 - "icons.tsx"
Cohesion: 0.05
Nodes (42): react-dom, fontMain, metadata, RootLayout(), ProgramGuidance(), BROCHURE, BrochureForm(), EnquiryContext (+34 more)

### Community 28 - "specViews"
Cohesion: 0.31
Nodes (11): CareerFlip(), CardGrid(), Head(), RoleGrid(), careers(), isP(), specEyebrow(), specViews() (+3 more)

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 35 - "Blogs.tsx"
Cohesion: 0.24
Nodes (10): Blogs(), MONTHS, ord(), toSlide(), Arrow(), BlogSlider(), Slide, toIsoBlogDate() (+2 more)

### Community 38 - "faculty"
Cohesion: 0.40
Nodes (5): Update: common sections + specialization template, FacultyGrid(), StoryCards(), faculty(), TestimonialGrid()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 239 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `ArrowLink`, `Page.tsx`, `Blogs.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `Testimonial.tsx`, `next`, `curriculumData.ts`, `EmiCalculator.tsx`, `ElectiveCombinator.tsx`, `parse.ts`, `FeeTabs.tsx`, `icons.tsx`?**
  _High betweenness centrality (0.188) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ArrowLink` be split into smaller, more focused modules?**
  _Cohesion score 0.05789009697325889 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `ArrowLink`, `Page.tsx`, `Blogs.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `react`, `Testimonial.tsx`, `server.js`, `ElectiveCombinator.tsx`, `not-found.tsx`, `ProgramAbout.tsx`, `icons.tsx`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0896551724137931 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `Blogs.tsx`, `EnquiryModal.tsx`, `Kit.tsx`, `react`, `DSU Online — CHECKPOINT (read this first in any new session)`, `next`, `ElectiveCombinator.tsx`, `icons.tsx`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._