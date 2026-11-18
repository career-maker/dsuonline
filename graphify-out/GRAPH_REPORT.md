# Graph Report - dsu online  (2026-11-18)

## Corpus Check
- 128 files · ~83,921 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 55 file(s) not represented in the graph (top: .scss 52, (none) 2, .ico 1)

## Summary
- 749 nodes · 1855 edges · 44 communities (39 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5fc464cc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectiveCombinator.tsx
- Page.tsx
- EnquiryProvider.tsx
- scrape.py
- EnquiryModal.tsx
- package.json
- Kit.tsx
- compilerOptions
- international-learners/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- Testimonials.tsx
- README.md
- AGENTS.md
- server.js
- CLAUDE.md
- ContentPage
- home.ts
- curriculumData.ts
- app/page.tsx
- Testimonial.tsx
- parse.ts
- icons.tsx
- ProgramAdvantage.tsx
- ArrowLink
- Footer.tsx
- site.ts
- CardSlider
- src_components_inner_kit_module
- programme-faq.ts
- layout.tsx
- FacultyArticles.tsx
- specViews
- react
- AdmissionSteps.tsx
- CertFlip.tsx
- Learning.tsx
- next
- ProgramLearning.tsx
- CardSlider.tsx
- ElectiveGrid.tsx
- SpecCore.tsx
- FeeTabs.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 83 edges
2. `react` - 58 edges
3. `next` - 46 edges
4. `ArrowLink()` - 46 edges
5. `CardSlider()` - 22 edges
6. `Icon()` - 20 edges
7. `ChevronRight()` - 18 edges
8. `Flow()` - 16 edges
9. `compilerOptions` - 16 edges
10. `DSU Online — CHECKPOINT (read this first in any new session)` - 16 edges

## Surprising Connections (you probably didn't know these)
- `Update 2026-10-28` --references--> `ArrowLink()`  [INFERRED]
  CHECKPOINT.md → src/components/ui/ArrowLink.tsx
- `Update: common sections + specialization template` --references--> `StoryCards()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Kit.tsx
- `Update 2026-10-26 (latest)` --references--> `flat()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Latest change` --references--> `specEyebrow()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Status` --references--> `faculty()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx

## Import Cycles
- None detected.

## Communities (44 total, 5 thin omitted)

### Community 0 - "ElectiveCombinator.tsx"
Cohesion: 0.27
Nodes (7): Benefit(), Elective, ElectiveCombinator(), ICON, architectCopy, DUAL_PROGRAMMES, dualOn()

### Community 1 - "Page.tsx"
Cohesion: 0.08
Nodes (19): ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial, ELECTIVE_PHOTOS, isStepTitle(), P, programTestimonials() (+11 more)

### Community 2 - "EnquiryProvider.tsx"
Cohesion: 0.26
Nodes (7): ProgramGuidance(), EnquiryModal(), EnquiryContext, EnquiryProvider(), useEnquiry(), SideTabs(), PhoneIcon()

### Community 3 - "scrape.py"
Cohesion: 0.07
Nodes (16): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+8 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.17
Nodes (20): ContactForm(), empty, Phase, empty, Phase, V, CountryPicker(), Flag() (+12 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.12
Nodes (18): slugify(), DocList(), highlight(), HIGHLIGHTS, LearningCards(), lsi, lsIcon(), OfficeCard() (+10 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.09
Nodes (34): gsap, heroUsps, img(), InternationalLearners(), metadata, tints, ContinentCards(), compare (+26 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.09
Nodes (21): 2026-10-30 inner-page photos, 2026-11-18 Dual specialisation, Architecture, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally (+13 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "Testimonials.tsx"
Cohesion: 0.17
Nodes (9): PlayIcon(), initialOf(), TestimonialShowcase(), tickerItems, showAnnouncement, B, homeTestimonials, Testimonial (+1 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "server.js"
Cohesion: 0.16
Nodes (4): app, { createServer }, handle, next

### Community 16 - "ContentPage"
Cohesion: 0.16
Nodes (24): Status, Update 2026-10-26 (latest), Tabs(), CardGrid(), Checklist(), ClassApart(), ContactRow(), DataTable() (+16 more)

### Community 18 - "home.ts"
Cohesion: 0.10
Nodes (17): aboutPhotos, slidePos, slideSize, aboutCopy, aboutFeatures, aboutStats, articles, awards (+9 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.16
Nodes (14): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+6 more)

### Community 20 - "app/page.tsx"
Cohesion: 0.23
Nodes (14): homeFaqs, HomePage(), About(), AboutBand(), Careers(), Faq(), Hero(), Learning() (+6 more)

### Community 21 - "Testimonial.tsx"
Cohesion: 0.32
Nodes (9): Avatar(), AvatarFallback(), AvatarImage(), Card(), CardContent(), CardFooter(), cx(), P (+1 more)

### Community 22 - "parse.ts"
Cohesion: 0.17
Nodes (13): cleanBlocks(), isNote(), isQuote(), FaqList(), LeaderGrid(), asImg(), Faq, parseFaq() (+5 more)

### Community 23 - "icons.tsx"
Cohesion: 0.13
Nodes (12): FactsDrawer(), OPEN_FACTS, rows, Header(), Hit, base, CloseIcon(), MenuIcon() (+4 more)

### Community 24 - "ProgramAdvantage.tsx"
Cohesion: 0.24
Nodes (9): Card(), Ico(), P, ProgramAdvantage(), advantageBanner, AdvantageCard, advantageCards, advantageLead (+1 more)

### Community 25 - "ArrowLink"
Cohesion: 0.06
Nodes (67): nextConfig, bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve() (+59 more)

### Community 26 - "Footer.tsx"
Cohesion: 0.22
Nodes (11): BROCHURE, BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), Program (+3 more)

### Community 27 - "site.ts"
Cohesion: 0.14
Nodes (14): criteria(), iconOf(), ProgramEligibility(), CallbackForm(), Phase, programmes, formCountries, announcements (+6 more)

### Community 28 - "CardSlider"
Cohesion: 0.26
Nodes (8): Latest change, body(), CareerShowcase(), Role, Item, ModuleCard(), ModuleCards(), CardSlider()

### Community 29 - "src_components_inner_kit_module"
Cohesion: 0.25
Nodes (5): icons, PayOptions(), stroke, WhyItem, WhyTabs()

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 31 - "layout.tsx"
Cohesion: 0.21
Nodes (7): lenis, fontMain, metadata, RootLayout(), Preloader(), SmoothScroll(), TitleReveal()

### Community 32 - "FacultyArticles.tsx"
Cohesion: 0.18
Nodes (14): FacultyShowcase(), avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip(), toIsoDate(), CardCarousel() (+6 more)

### Community 33 - "specViews"
Cohesion: 0.52
Nodes (7): Head(), careers(), isP(), specEyebrow(), specViews(), SubView(), parsePairs()

### Community 34 - "react"
Cohesion: 0.10
Nodes (21): react, ICON_BY_SLUG, ICONS, EMI_TENURES, EmiCalculator(), feeFor(), inr(), PG (+13 more)

### Community 35 - "AdmissionSteps.tsx"
Cohesion: 0.28
Nodes (7): AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap()

### Community 39 - "next"
Cohesion: 0.14
Nodes (9): next, order, photos, Rect, Props, Rect, careerTabs, recruiters (+1 more)

### Community 40 - "ProgramLearning.tsx"
Cohesion: 0.31
Nodes (7): ICON, iconOf(), LearnItem, PHOTO, photoOf(), ProgramLearning(), TabFace()

### Community 41 - "CardSlider.tsx"
Cohesion: 0.25
Nodes (4): swiper, CareerFlip(), CareerItem, IndustryItem

### Community 43 - "ElectiveGrid.tsx"
Cohesion: 0.50
Nodes (3): Card(), ElectiveGrid(), Item

### Community 44 - "SpecCore.tsx"
Cohesion: 0.40
Nodes (3): SpecCore(), SPEC_EXTRAS, SpecExtra

### Community 46 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 251 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `ElectiveCombinator.tsx`, `Page.tsx`, `EnquiryProvider.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `Testimonials.tsx`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `Testimonial.tsx`, `parse.ts`, `icons.tsx`, `ArrowLink`, `Footer.tsx`, `site.ts`, `src_components_inner_kit_module`, `layout.tsx`, `FacultyArticles.tsx`, `AdmissionSteps.tsx`, `CertFlip.tsx`, `Learning.tsx`, `next`, `ProgramLearning.tsx`, `CardSlider.tsx`, `FeeTabs.tsx`?**
  _High betweenness centrality (0.181) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08374384236453201 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `Page.tsx`, `EnquiryProvider.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `Testimonials.tsx`, `server.js`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `Testimonial.tsx`, `icons.tsx`, `ProgramAdvantage.tsx`, `ArrowLink`, `Footer.tsx`, `CardSlider`, `src_components_inner_kit_module`, `layout.tsx`, `FacultyArticles.tsx`, `react`, `CertFlip.tsx`, `ProgramLearning.tsx`, `ElectiveGrid.tsx`?**
  _High betweenness centrality (0.152) - this node is a cross-community bridge._
- **Should `scrape.py` be split into smaller, more focused modules?**
  _Cohesion score 0.07265306122448979 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `ElectiveCombinator.tsx`, `FacultyArticles.tsx`, `EnquiryProvider.tsx`, `react`, `EnquiryModal.tsx`, `Kit.tsx`, `next`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `home.ts`, `app/page.tsx`, `ProgramAdvantage.tsx`, `site.ts`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._