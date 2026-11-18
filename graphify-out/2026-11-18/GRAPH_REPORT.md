# Graph Report - dsu online  (2026-11-18)

## Corpus Check
- 130 files · ~85,496 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 56 file(s) not represented in the graph (top: .scss 53, (none) 2, .ico 1)

## Summary
- 756 nodes · 1875 edges · 38 communities (33 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f965e9fc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ProgramFaculty.tsx
- Page.tsx
- CardSlider
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
- home.ts
- curriculumData.ts
- app/page.tsx
- Footer.tsx
- parse.ts
- icons.tsx
- ArrowLink
- layout.tsx
- programme-faq.ts
- src_components_inner_kit_module
- FacultyArticles.tsx
- Testimonial.tsx
- Hero.tsx
- ProgramAbout.tsx
- next
- slugify
- ProgramsBand.tsx
- TestimonialShowcase.tsx
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

## Communities (38 total, 5 thin omitted)

### Community 0 - "ProgramFaculty.tsx"
Cohesion: 0.21
Nodes (10): Update: common sections + specialization template, FacultyGrid(), StoryCards(), faculty(), Img, Card(), initials(), Item (+2 more)

### Community 1 - "Page.tsx"
Cohesion: 0.11
Nodes (22): CareerFlip(), Head(), LearningCards(), lsIcon(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, careers() (+14 more)

### Community 2 - "CardSlider"
Cohesion: 0.05
Nodes (39): Latest change, swiper, AdmissionSteps(), heading(), ic, icons, Step, StepCard() (+31 more)

### Community 3 - "scrape.py"
Cohesion: 0.07
Nodes (16): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+8 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.08
Nodes (42): react-dom, ContactForm(), empty, Phase, criteria(), iconOf(), ProgramEligibility(), empty (+34 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (31): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+23 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.11
Nodes (23): Tabs(), CardGrid(), Checklist(), ContactRow(), CtaLink(), DataTable(), DocList(), FacultyShowcase() (+15 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.08
Nodes (38): gsap, heroUsps, img(), InternationalLearners(), metadata, tints, CallbackForm(), Phase (+30 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.12
Nodes (15): 2026-10-30 inner-page photos, 2026-11-18 Dual specialisation, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status (+7 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.09
Nodes (22): react, Pic, ICON_BY_SLUG, ICONS, EMI_TENURES, EmiCalculator(), feeFor(), inr() (+14 more)

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
Cohesion: 0.11
Nodes (17): Architecture, AboutBand(), aboutPhotos, aboutCopy, aboutFeatures, aboutStats, articles, awards (+9 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "app/page.tsx"
Cohesion: 0.28
Nodes (13): homeFaqs, HomePage(), About(), Careers(), Faq(), Hero(), Learning(), ProgramsBand() (+5 more)

### Community 21 - "Footer.tsx"
Cohesion: 0.32
Nodes (8): BROCHURE, BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), specializationHref()

### Community 22 - "parse.ts"
Cohesion: 0.21
Nodes (11): cleanBlocks(), isNote(), isQuote(), FaqList(), asImg(), Faq, parseFaq(), parseFaqByQuestionMarks() (+3 more)

### Community 23 - "icons.tsx"
Cohesion: 0.18
Nodes (5): Props, Variant, base, DotsIcon(), P

### Community 25 - "ArrowLink"
Cohesion: 0.06
Nodes (64): nextConfig, bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve() (+56 more)

### Community 26 - "layout.tsx"
Cohesion: 0.08
Nodes (23): lenis, fontMain, metadata, RootLayout(), Benefit(), Elective, ElectiveCombinator(), ICON (+15 more)

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 31 - "src_components_inner_kit_module"
Cohesion: 0.25
Nodes (5): icons, PayOptions(), stroke, WhyItem, WhyTabs()

### Community 32 - "FacultyArticles.tsx"
Cohesion: 0.21
Nodes (13): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip(), toIsoDate(), CardCarousel(), Props (+5 more)

### Community 34 - "Testimonial.tsx"
Cohesion: 0.18
Nodes (13): Avatar(), AvatarFallback(), AvatarImage(), Card(), CardContent(), CardFooter(), cx(), P (+5 more)

### Community 35 - "Hero.tsx"
Cohesion: 0.40
Nodes (3): first, slidePos, slideSize

### Community 37 - "next"
Cohesion: 0.19
Nodes (5): next, certifications, tickerItems, whyItems, iconSize

### Community 38 - "slugify"
Cohesion: 0.29
Nodes (6): slugify(), Sec(), withEyebrow(), headFor(), SectionHead, sectionHeads

### Community 39 - "ProgramsBand.tsx"
Cohesion: 0.25
Nodes (5): order, photos, Rect, Props, Rect

### Community 40 - "TestimonialShowcase.tsx"
Cohesion: 0.31
Nodes (5): VideoTile(), PlayIcon(), initialOf(), TestimonialShowcase(), bentoTiles

### Community 46 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 253 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Page.tsx`, `CardSlider`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `Footer.tsx`, `parse.ts`, `icons.tsx`, `ArrowLink`, `layout.tsx`, `src_components_inner_kit_module`, `FacultyArticles.tsx`, `Testimonial.tsx`, `Hero.tsx`, `ProgramsBand.tsx`, `TestimonialShowcase.tsx`, `FeeTabs.tsx`?**
  _High betweenness centrality (0.182) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11083743842364532 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `ProgramFaculty.tsx`, `Page.tsx`, `CardSlider`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `react`, `server.js`, `home.ts`, `curriculumData.ts`, `Footer.tsx`, `icons.tsx`, `not-found.tsx`, `ArrowLink`, `layout.tsx`, `src_components_inner_kit_module`, `FacultyArticles.tsx`, `Testimonial.tsx`, `Hero.tsx`, `ProgramAbout.tsx`, `ProgramsBand.tsx`, `TestimonialShowcase.tsx`?**
  _High betweenness centrality (0.156) - this node is a cross-community bridge._
- **Should `CardSlider` be split into smaller, more focused modules?**
  _Cohesion score 0.05143191116306254 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `FacultyArticles.tsx`, `CardSlider`, `Hero.tsx`, `EnquiryModal.tsx`, `Kit.tsx`, `ProgramsBand.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `react`, `home.ts`, `app/page.tsx`, `icons.tsx`, `layout.tsx`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._