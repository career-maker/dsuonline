# Graph Report - dsu online  (2026-11-19)

## Corpus Check
- 130 files · ~85,600 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 56 file(s) not represented in the graph (top: .scss 53, (none) 2, .ico 1)

## Summary
- 756 nodes · 1884 edges · 44 communities (37 shown, 7 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `70cf5d8b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- faculty
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
- specViews
- parse.ts
- ProgramAdvantage.tsx
- ArrowLink
- icons.tsx
- AdmissionSteps.tsx
- ElectiveCombinator.tsx
- Icon
- programme-faq.ts
- ProgramLearning.tsx
- FacultyArticles.tsx
- CardSlider.tsx
- Testimonial.tsx
- Hero.tsx
- ProgramAbout.tsx
- next
- section-heads.ts
- ProgramsBand.tsx
- Faq.tsx
- ElectiveGrid.tsx
- SpecCore.tsx
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

## Communities (44 total, 7 thin omitted)

### Community 0 - "faculty"
Cohesion: 0.40
Nodes (6): Update: common sections + specialization template, FacultyGrid(), StoryCards(), faculty(), ProgramFaculty(), TestimonialGrid()

### Community 1 - "Page.tsx"
Cohesion: 0.09
Nodes (23): FaqList(), LeaderGrid(), Tabs(), DataTable(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial (+15 more)

### Community 2 - "CardSlider"
Cohesion: 0.26
Nodes (8): Latest change, body(), CareerShowcase(), Role, Item, ModuleCard(), ModuleCards(), CardSlider()

### Community 3 - "scrape.py"
Cohesion: 0.07
Nodes (16): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+8 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.15
Nodes (26): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CallbackForm() (+18 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (31): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+23 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.12
Nodes (20): CardGrid(), Checklist(), ContactRow(), CtaLink(), DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS (+12 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.09
Nodes (34): gsap, heroUsps, img(), InternationalLearners(), metadata, tints, ContinentCards(), compare (+26 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.12
Nodes (15): 2026-10-30 inner-page photos, 2026-11-18 Dual specialisation, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status (+7 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.08
Nodes (24): react, Pic, ICON_BY_SLUG, ICONS, EMI_TENURES, EmiCalculator(), feeFor(), inr() (+16 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 16 - "ContentPage"
Cohesion: 0.16
Nodes (22): CertFlip(), slugify(), ClassApart(), LogoWall(), Pic(), Sec(), Split(), Body() (+14 more)

### Community 18 - "home.ts"
Cohesion: 0.10
Nodes (18): aboutPhotos, aboutCopy, aboutFeatures, aboutStats, articles, awards, BentoTile, blogs (+10 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "app/page.tsx"
Cohesion: 0.27
Nodes (9): Architecture, homeFaqs, HomePage(), About(), AboutBand(), Careers(), Hero(), Recognitions() (+1 more)

### Community 21 - "specViews"
Cohesion: 0.24
Nodes (12): CareerFlip(), Head(), LearningCards(), lsIcon(), careers(), isP(), learningCards(), specEyebrow() (+4 more)

### Community 22 - "parse.ts"
Cohesion: 0.24
Nodes (10): cleanBlocks(), isNote(), isQuote(), asImg(), Img, parseFaq(), parseFaqByQuestionMarks(), parseQuotes() (+2 more)

### Community 23 - "ProgramAdvantage.tsx"
Cohesion: 0.24
Nodes (9): Card(), Ico(), P, ProgramAdvantage(), advantageBanner, AdvantageCard, advantageCards, advantageLead (+1 more)

### Community 25 - "ArrowLink"
Cohesion: 0.05
Nodes (68): nextConfig, bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve() (+60 more)

### Community 26 - "icons.tsx"
Cohesion: 0.05
Nodes (43): lenis, react-dom, fontMain, metadata, RootLayout(), ProgramGuidance(), BROCHURE, BrochureForm() (+35 more)

### Community 27 - "AdmissionSteps.tsx"
Cohesion: 0.28
Nodes (7): AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap()

### Community 28 - "ElectiveCombinator.tsx"
Cohesion: 0.31
Nodes (6): Benefit(), Elective, ElectiveCombinator(), ICON, architectCopy, DUAL_PROGRAMMES

### Community 29 - "Icon"
Cohesion: 0.33
Nodes (5): Card(), initials(), Item, Icon(), iconSize

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 31 - "ProgramLearning.tsx"
Cohesion: 0.31
Nodes (7): ICON, iconOf(), LearnItem, PHOTO, photoOf(), ProgramLearning(), TabFace()

### Community 32 - "FacultyArticles.tsx"
Cohesion: 0.31
Nodes (8): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip(), toIsoDate(), realFaculty, useLoopCarousel()

### Community 33 - "CardSlider.tsx"
Cohesion: 0.29
Nodes (3): swiper, CareerItem, IndustryItem

### Community 34 - "Testimonial.tsx"
Cohesion: 0.18
Nodes (13): Avatar(), AvatarFallback(), AvatarImage(), Card(), CardContent(), CardFooter(), cx(), P (+5 more)

### Community 35 - "Hero.tsx"
Cohesion: 0.33
Nodes (4): first, slidePos, slideSize, heroSlides

### Community 37 - "next"
Cohesion: 0.29
Nodes (4): next, Testimonials(), initialOf(), TestimonialShowcase()

### Community 39 - "ProgramsBand.tsx"
Cohesion: 0.23
Nodes (9): order, photos, ProgramsBand(), Rect, CardCarousel(), Props, ChevronLeft(), ChevronRight() (+1 more)

### Community 40 - "Faq.tsx"
Cohesion: 0.23
Nodes (8): Faq(), Learning(), VideoTile(), FramedImage(), Props, Rect, PlayIcon(), bentoTiles

### Community 41 - "ElectiveGrid.tsx"
Cohesion: 0.50
Nodes (3): Card(), ElectiveGrid(), Item

### Community 46 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 253 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Page.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `ArrowLink`, `icons.tsx`, `AdmissionSteps.tsx`, `ElectiveCombinator.tsx`, `ProgramLearning.tsx`, `FacultyArticles.tsx`, `CardSlider.tsx`, `Testimonial.tsx`, `Hero.tsx`, `next`, `ProgramsBand.tsx`, `Faq.tsx`, `FeeTabs.tsx`?**
  _High betweenness centrality (0.182) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0855614973262032 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `Page.tsx`, `CardSlider`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `react`, `server.js`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `ProgramAdvantage.tsx`, `not-found.tsx`, `ArrowLink`, `icons.tsx`, `ElectiveCombinator.tsx`, `Icon`, `ProgramLearning.tsx`, `FacultyArticles.tsx`, `Testimonial.tsx`, `Hero.tsx`, `ProgramAbout.tsx`, `ProgramsBand.tsx`, `Faq.tsx`, `ElectiveGrid.tsx`?**
  _High betweenness centrality (0.156) - this node is a cross-community bridge._
- **Should `scrape.py` be split into smaller, more focused modules?**
  _Cohesion score 0.07265306122448979 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `FacultyArticles.tsx`, `Hero.tsx`, `EnquiryModal.tsx`, `Kit.tsx`, `ProgramsBand.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `Faq.tsx`, `react`, `home.ts`, `app/page.tsx`, `ProgramAdvantage.tsx`, `icons.tsx`, `ElectiveCombinator.tsx`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._