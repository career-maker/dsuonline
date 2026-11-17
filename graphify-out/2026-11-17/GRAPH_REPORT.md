# Graph Report - dsu online  (2026-11-17)

## Corpus Check
- 126 files · ~82,264 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 55 file(s) not represented in the graph (top: .scss 52, (none) 2, .ico 1)

## Summary
- 737 nodes · 1835 edges · 37 communities (32 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 30 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2fb18513`
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
- home.ts
- curriculumData.ts
- app/page.tsx
- react
- parse.ts
- FeeTabs.tsx
- ProgramAdvantage.tsx
- ProgramAbout.tsx
- layout.tsx
- specViews
- slugify
- programme-faq.ts
- CardSlider
- FacultyArticles.tsx
- next
- Learning.tsx
- ProgramFaculty.tsx
- Faq.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 82 edges
2. `react` - 58 edges
3. `ArrowLink()` - 46 edges
4. `next` - 45 edges
5. `CardSlider()` - 21 edges
6. `Icon()` - 20 edges
7. `ChevronRight()` - 18 edges
8. `Flow()` - 16 edges
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

## Communities (37 total, 5 thin omitted)

### Community 0 - "ArrowLink"
Cohesion: 0.06
Nodes (65): nextConfig, bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve() (+57 more)

### Community 1 - "Page.tsx"
Cohesion: 0.11
Nodes (15): ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial, ELECTIVE_PHOTOS, P, Props, Seg (+7 more)

### Community 2 - "icons.tsx"
Cohesion: 0.13
Nodes (13): order, photos, ProgramsBand(), Rect, CardCarousel(), Props, base, ChevronLeft() (+5 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.07
Nodes (50): react-dom, ContactForm(), empty, Phase, empty, Phase, ReferForm(), V (+42 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.10
Nodes (25): Tabs(), CardGrid(), Checklist(), ContactRow(), CtaLink(), DataTable(), DocList(), FacultyShowcase() (+17 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.08
Nodes (38): gsap, heroUsps, img(), InternationalLearners(), metadata, tints, CallbackForm(), Phase (+30 more)

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
Nodes (21): CertFlip(), LeaderGrid(), ClassApart(), LogoWall(), Pic(), Split(), Body(), certificates() (+13 more)

### Community 18 - "home.ts"
Cohesion: 0.13
Nodes (14): aboutPhotos, aboutCopy, aboutFeatures, aboutStats, awards, BentoTile, blogs, certifications (+6 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "app/page.tsx"
Cohesion: 0.26
Nodes (11): Architecture, homeFaqs, HomePage(), About(), AboutBand(), Careers(), Hero(), Recognitions() (+3 more)

### Community 21 - "react"
Cohesion: 0.05
Nodes (36): react, swiper, AdmissionSteps(), heading(), ic, icons, Step, StepCard() (+28 more)

### Community 22 - "parse.ts"
Cohesion: 0.21
Nodes (11): cleanBlocks(), isNote(), isQuote(), FaqList(), asImg(), Faq, parseFaq(), parseFaqByQuestionMarks() (+3 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 24 - "ProgramAdvantage.tsx"
Cohesion: 0.25
Nodes (8): Card(), Ico(), P, advantageBanner, AdvantageCard, advantageCards, advantageLead, dualCopy

### Community 26 - "layout.tsx"
Cohesion: 0.09
Nodes (20): fontMain, metadata, RootLayout(), Benefit(), Elective, ElectiveCombinator(), ICON, ProgramGuidance() (+12 more)

### Community 28 - "specViews"
Cohesion: 0.16
Nodes (16): Latest change, CareerFlip(), body(), CareerShowcase(), Role, Head(), Item, ModuleCard() (+8 more)

### Community 29 - "slugify"
Cohesion: 0.29
Nodes (6): slugify(), Sec(), withEyebrow(), headFor(), SectionHead, sectionHeads

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 31 - "CardSlider"
Cohesion: 0.21
Nodes (8): Card(), ElectiveGrid(), Item, ProgramAdvantage(), SpecCore(), CardSlider(), SPEC_EXTRAS, SpecExtra

### Community 32 - "FacultyArticles.tsx"
Cohesion: 0.27
Nodes (9): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip(), toIsoDate(), realFaculty, articles (+1 more)

### Community 33 - "next"
Cohesion: 0.18
Nodes (5): next, slidePos, slideSize, tickerItems, iconSize

### Community 37 - "Learning.tsx"
Cohesion: 0.48
Nodes (4): Learning(), VideoTile(), PlayIcon(), bentoTiles

### Community 38 - "ProgramFaculty.tsx"
Cohesion: 0.21
Nodes (10): Update: common sections + specialization template, FacultyGrid(), StoryCards(), faculty(), Img, Card(), initials(), Item (+2 more)

### Community 39 - "Faq.tsx"
Cohesion: 0.24
Nodes (6): Faq(), FramedImage(), Props, Rect, careerTabs, recruiters

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 243 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `ArrowLink`, `Page.tsx`, `FacultyArticles.tsx`, `next`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `Faq.tsx`, `international-learners/page.tsx`, `icons.tsx`, `Learning.tsx`, `Testimonial.tsx`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `parse.ts`, `FeeTabs.tsx`, `layout.tsx`?**
  _High betweenness centrality (0.186) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ArrowLink` be split into smaller, more focused modules?**
  _Cohesion score 0.05663474692202462 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `ArrowLink`, `Page.tsx`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `Testimonial.tsx`, `server.js`, `home.ts`, `app/page.tsx`, `react`, `ProgramAdvantage.tsx`, `ProgramAbout.tsx`, `layout.tsx`, `not-found.tsx`, `specViews`, `CardSlider`, `FacultyArticles.tsx`, `ProgramFaculty.tsx`, `Faq.tsx`?**
  _High betweenness centrality (0.152) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10507246376811594 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `FacultyArticles.tsx`, `next`, `icons.tsx`, `EnquiryModal.tsx`, `Kit.tsx`, `Faq.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `home.ts`, `app/page.tsx`, `react`, `ProgramAdvantage.tsx`, `layout.tsx`, `CardSlider`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._