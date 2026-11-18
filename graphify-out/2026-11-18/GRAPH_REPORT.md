# Graph Report - dsu online  (2026-11-18)

## Corpus Check
- 127 files · ~82,746 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 56 file(s) not represented in the graph (top: .scss 53, (none) 2, .ico 1)

## Summary
- 746 nodes · 1860 edges · 48 communities (44 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `52e69f6c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectiveCombinator.tsx
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
- Faq.tsx
- README.md
- AGENTS.md
- next
- CLAUDE.md
- ContentPage
- home.ts
- curriculumData.ts
- app/page.tsx
- react
- parse.ts
- site.ts
- ProgramAdvantage.tsx
- ArrowLink
- Footer.tsx
- Testimonials.tsx
- CardSlider
- slugify
- programme-faq.ts
- layout.tsx
- FacultyArticles.tsx
- specViews
- site
- AdmissionSteps.tsx
- Interactive.tsx
- Learning.tsx
- ProgramFaculty.tsx
- FramedImage
- ProgramLearning.tsx
- CardSlider.tsx
- faculty
- ElectiveGrid.tsx
- SpecCore.tsx
- Icon
- FeeTabs.tsx
- EmiCalculator.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 83 edges
2. `react` - 59 edges
3. `next` - 46 edges
4. `ArrowLink()` - 46 edges
5. `CardSlider()` - 24 edges
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
- `Update: common sections + specialization template` --references--> `ProgramFaculty()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/ProgramFaculty.tsx

## Import Cycles
- None detected.

## Communities (48 total, 4 thin omitted)

### Community 0 - "ElectiveCombinator.tsx"
Cohesion: 0.31
Nodes (6): Benefit(), Elective, ElectiveCombinator(), ICON, architectCopy, DUAL_PROGRAMMES

### Community 1 - "Page.tsx"
Cohesion: 0.11
Nodes (15): ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial, ELECTIVE_PHOTOS, P, Props, Seg (+7 more)

### Community 2 - "icons.tsx"
Cohesion: 0.15
Nodes (11): order, photos, ProgramsBand(), Rect, CardCarousel(), Props, base, ChevronLeft() (+3 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.17
Nodes (22): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+14 more)

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
Cohesion: 0.08
Nodes (38): gsap, heroUsps, img(), InternationalLearners(), metadata, tints, CallbackForm(), Phase (+30 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.12
Nodes (15): 2026-10-30 inner-page photos, 2026-11-18 Dual specialisation, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status (+7 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "Faq.tsx"
Cohesion: 0.21
Nodes (7): Faq(), FaqStories(), Story(), B, homeTestimonials, Testimonial, testimonials

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "next"
Cohesion: 0.09
Nodes (9): nextConfig, next, app, { createServer }, handle, next, Pic, halves() (+1 more)

### Community 16 - "ContentPage"
Cohesion: 0.17
Nodes (20): Architecture, CertFlip(), ClassApart(), LogoWall(), Pic(), Split(), Body(), certificates() (+12 more)

### Community 18 - "home.ts"
Cohesion: 0.15
Nodes (13): StatNumber(), aboutPhotos, Counter(), aboutCopy, aboutFeatures, aboutStats, BentoTile, blogs (+5 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "app/page.tsx"
Cohesion: 0.31
Nodes (7): homeFaqs, HomePage(), About(), Blogs(), Hero(), Recognitions(), awards

### Community 21 - "react"
Cohesion: 0.11
Nodes (23): react, ICON_BY_SLUG, ICONS, MAP, P, MONTHS, ord(), toSlide() (+15 more)

### Community 22 - "parse.ts"
Cohesion: 0.23
Nodes (11): cleanBlocks(), isNote(), isQuote(), asImg(), Img, parseFaq(), parseFaqByQuestionMarks(), parseQuotes() (+3 more)

### Community 23 - "site.ts"
Cohesion: 0.15
Nodes (15): react-dom, Header(), Hit, CloseIcon(), MenuIcon(), UserIcon(), specializationHref(), announcements (+7 more)

### Community 24 - "ProgramAdvantage.tsx"
Cohesion: 0.24
Nodes (9): Card(), Ico(), P, ProgramAdvantage(), advantageBanner, AdvantageCard, advantageCards, advantageLead (+1 more)

### Community 25 - "ArrowLink"
Cohesion: 0.06
Nodes (64): bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+56 more)

### Community 26 - "Footer.tsx"
Cohesion: 0.23
Nodes (10): BROCHURE, BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), Program (+2 more)

### Community 27 - "Testimonials.tsx"
Cohesion: 0.31
Nodes (5): Testimonials(), initialOf(), TestimonialShowcase(), tickerItems, showAnnouncement

### Community 28 - "CardSlider"
Cohesion: 0.26
Nodes (8): Latest change, body(), CareerShowcase(), Role, Item, ModuleCard(), ModuleCards(), CardSlider()

### Community 29 - "slugify"
Cohesion: 0.29
Nodes (6): slugify(), Sec(), withEyebrow(), headFor(), SectionHead, sectionHeads

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 31 - "layout.tsx"
Cohesion: 0.15
Nodes (10): lenis, fontMain, metadata, RootLayout(), FactsDrawer(), OPEN_FACTS, rows, Preloader() (+2 more)

### Community 32 - "FacultyArticles.tsx"
Cohesion: 0.27
Nodes (9): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip(), toIsoDate(), realFaculty, articles (+1 more)

### Community 33 - "specViews"
Cohesion: 0.24
Nodes (12): CareerFlip(), Head(), LearningCards(), lsIcon(), careers(), isP(), learningCards(), specEyebrow() (+4 more)

### Community 34 - "site"
Cohesion: 0.24
Nodes (8): ProgramGuidance(), EnquiryModal(), EnquiryContext, EnquiryProvider(), useEnquiry(), SideTabs(), PhoneIcon(), site

### Community 35 - "AdmissionSteps.tsx"
Cohesion: 0.28
Nodes (7): AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap()

### Community 36 - "Interactive.tsx"
Cohesion: 0.25
Nodes (8): FaqList(), LeaderGrid(), Tabs(), DataTable(), curriculum(), flat(), leaders(), Faq

### Community 37 - "Learning.tsx"
Cohesion: 0.48
Nodes (4): Learning(), VideoTile(), PlayIcon(), bentoTiles

### Community 38 - "ProgramFaculty.tsx"
Cohesion: 0.47
Nodes (4): Card(), initials(), Item, ProgramFaculty()

### Community 39 - "FramedImage"
Cohesion: 0.28
Nodes (6): Careers(), FramedImage(), Props, Rect, careerTabs, recruiters

### Community 40 - "ProgramLearning.tsx"
Cohesion: 0.31
Nodes (7): ICON, iconOf(), LearnItem, PHOTO, photoOf(), ProgramLearning(), TabFace()

### Community 41 - "CardSlider.tsx"
Cohesion: 0.29
Nodes (3): swiper, CareerItem, IndustryItem

### Community 42 - "faculty"
Cohesion: 0.40
Nodes (5): Update: common sections + specialization template, FacultyGrid(), StoryCards(), faculty(), TestimonialGrid()

### Community 43 - "ElectiveGrid.tsx"
Cohesion: 0.50
Nodes (3): Card(), ElectiveGrid(), Item

### Community 45 - "Icon"
Cohesion: 0.31
Nodes (5): WhyChoose(), Icon(), certifications, whyItems, iconSize

### Community 46 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 47 - "EmiCalculator.tsx"
Cohesion: 0.38
Nodes (5): EMI_TENURES, EmiCalculator(), feeFor(), inr(), PG

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 248 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `ElectiveCombinator.tsx`, `Page.tsx`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `Faq.tsx`, `next`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `site.ts`, `ArrowLink`, `Footer.tsx`, `Testimonials.tsx`, `layout.tsx`, `FacultyArticles.tsx`, `site`, `AdmissionSteps.tsx`, `Interactive.tsx`, `Learning.tsx`, `FramedImage`, `ProgramLearning.tsx`, `CardSlider.tsx`, `FeeTabs.tsx`, `EmiCalculator.tsx`?**
  _High betweenness centrality (0.187) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10507246376811594 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `Page.tsx`, `icons.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `Faq.tsx`, `app/page.tsx`, `react`, `site.ts`, `ProgramAdvantage.tsx`, `ArrowLink`, `Footer.tsx`, `Testimonials.tsx`, `CardSlider`, `layout.tsx`, `FacultyArticles.tsx`, `site`, `ProgramFaculty.tsx`, `FramedImage`, `ProgramLearning.tsx`, `ElectiveGrid.tsx`, `Icon`?**
  _High betweenness centrality (0.152) - this node is a cross-community bridge._
- **Should `icons.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `ElectiveCombinator.tsx`, `FacultyArticles.tsx`, `site`, `icons.tsx`, `EnquiryModal.tsx`, `Kit.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `Faq.tsx`, `ContentPage`, `home.ts`, `app/page.tsx`, `react`, `ProgramAdvantage.tsx`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._