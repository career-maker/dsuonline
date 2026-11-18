# Graph Report - dsu online  (2026-11-18)

## Corpus Check
- 128 files · ~83,764 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 56 file(s) not represented in the graph (top: .scss 53, (none) 2, .ico 1)

## Summary
- 747 nodes · 1861 edges · 48 communities (40 shown, 8 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d8b1a9a1`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ElectiveCombinator.tsx
- Page.tsx
- icons.tsx
- scrape.py
- ArrowLink
- package.json
- Kit.tsx
- compilerOptions
- international-learners/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- Faq.tsx
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
- site.ts
- ProgramAdvantage.tsx
- InnerPage.tsx
- Footer.tsx
- next
- CardSlider
- section-heads.ts
- programme-faq.ts
- layout.tsx
- FacultyArticles.tsx
- specViews
- [...slug]/page.tsx
- AdmissionSteps.tsx
- FactsDrawer.tsx
- Learning.tsx
- ProgramFaculty.tsx
- ProgramsBand.tsx
- ProgramLearning.tsx
- CardSlider.tsx
- ElectiveGrid.tsx
- SpecCore.tsx
- ProgramAbout.tsx
- FeeTabs.tsx
- learningCards

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
- `Update: common sections + specialization template` --references--> `FacultyGrid()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Kit.tsx
- `Latest change` --references--> `specEyebrow()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx

## Import Cycles
- None detected.

## Communities (48 total, 8 thin omitted)

### Community 0 - "ElectiveCombinator.tsx"
Cohesion: 0.24
Nodes (8): Benefit(), Elective, ElectiveCombinator(), ICON, EnquiryContext, useEnquiry(), architectCopy, DUAL_PROGRAMMES

### Community 1 - "Page.tsx"
Cohesion: 0.09
Nodes (23): FaqList(), LeaderGrid(), Tabs(), DataTable(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial (+15 more)

### Community 2 - "icons.tsx"
Cohesion: 0.22
Nodes (4): SideTabs(), base, P, PhoneIcon()

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "ArrowLink"
Cohesion: 0.08
Nodes (39): ContactForm(), empty, Phase, EnquireButton(), criteria(), iconOf(), ProgramEligibility(), ProgramHero() (+31 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (31): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+23 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.11
Nodes (23): Update: common sections + specialization template, CardGrid(), Checklist(), ContactRow(), CtaLink(), DocList(), FacultyShowcase(), highlight() (+15 more)

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

### Community 11 - "Faq.tsx"
Cohesion: 0.20
Nodes (8): Faq(), FaqStories(), Story(), FramedImage(), B, homeTestimonials, Testimonial, testimonials

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 16 - "ContentPage"
Cohesion: 0.12
Nodes (29): CertFlip(), slugify(), CtaBand(), InnerHero(), ClassApart(), LogoWall(), Pic(), Sec() (+21 more)

### Community 18 - "home.ts"
Cohesion: 0.12
Nodes (16): aboutPhotos, aboutCopy, aboutFeatures, aboutStats, articles, awards, BentoTile, blogs (+8 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "app/page.tsx"
Cohesion: 0.18
Nodes (12): Architecture, homeFaqs, HomePage(), About(), AboutBand(), Careers(), Hero(), slidePos (+4 more)

### Community 21 - "react"
Cohesion: 0.11
Nodes (20): react, Pic, ICON_BY_SLUG, ICONS, EMI_TENURES, EmiCalculator(), feeFor(), inr() (+12 more)

### Community 22 - "parse.ts"
Cohesion: 0.23
Nodes (11): cleanBlocks(), isNote(), isQuote(), asImg(), Img, parseFaq(), parseFaqByQuestionMarks(), parseQuotes() (+3 more)

### Community 23 - "site.ts"
Cohesion: 0.15
Nodes (14): react-dom, Header(), Hit, MenuIcon(), UserIcon(), announcements, footerColumns, mainNav (+6 more)

### Community 24 - "ProgramAdvantage.tsx"
Cohesion: 0.24
Nodes (9): Card(), Ico(), P, ProgramAdvantage(), advantageBanner, AdvantageCard, advantageCards, advantageLead (+1 more)

### Community 25 - "InnerPage.tsx"
Cohesion: 0.14
Nodes (25): Accordion(), Flow(), isInternal(), Pic(), Qa(), Crumb, InnerPage(), isFaq() (+17 more)

### Community 26 - "Footer.tsx"
Cohesion: 0.22
Nodes (11): BROCHURE, BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), Program (+3 more)

### Community 27 - "next"
Cohesion: 0.25
Nodes (5): next, swiper, Testimonials(), initialOf(), TestimonialShowcase()

### Community 28 - "CardSlider"
Cohesion: 0.26
Nodes (8): Latest change, body(), CareerShowcase(), Role, Item, ModuleCard(), ModuleCards(), CardSlider()

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 31 - "layout.tsx"
Cohesion: 0.18
Nodes (9): lenis, fontMain, metadata, RootLayout(), EnquiryModal(), EnquiryProvider(), Preloader(), SmoothScroll() (+1 more)

### Community 32 - "FacultyArticles.tsx"
Cohesion: 0.20
Nodes (14): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip(), toIsoDate(), ProgramsBand(), CardCarousel() (+6 more)

### Community 33 - "specViews"
Cohesion: 0.27
Nodes (11): CareerFlip(), FacultyGrid(), Head(), careers(), faculty(), isP(), specEyebrow(), specViews() (+3 more)

### Community 34 - "[...slug]/page.tsx"
Cohesion: 0.10
Nodes (32): nextConfig, bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve() (+24 more)

### Community 35 - "AdmissionSteps.tsx"
Cohesion: 0.28
Nodes (7): AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap()

### Community 36 - "FactsDrawer.tsx"
Cohesion: 0.40
Nodes (4): FactsDrawer(), OPEN_FACTS, rows, CloseIcon()

### Community 37 - "Learning.tsx"
Cohesion: 0.48
Nodes (4): Learning(), VideoTile(), PlayIcon(), bentoTiles

### Community 38 - "ProgramFaculty.tsx"
Cohesion: 0.47
Nodes (4): Card(), initials(), Item, ProgramFaculty()

### Community 39 - "ProgramsBand.tsx"
Cohesion: 0.15
Nodes (8): order, photos, Rect, Props, Rect, careerTabs, recruiters, iconSize

### Community 40 - "ProgramLearning.tsx"
Cohesion: 0.31
Nodes (7): ICON, iconOf(), LearnItem, PHOTO, photoOf(), ProgramLearning(), TabFace()

### Community 43 - "ElectiveGrid.tsx"
Cohesion: 0.50
Nodes (3): Card(), ElectiveGrid(), Item

### Community 46 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 47 - "learningCards"
Cohesion: 0.67
Nodes (3): LearningCards(), lsIcon(), learningCards()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 249 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `ElectiveCombinator.tsx`, `Page.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `Faq.tsx`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `site.ts`, `InnerPage.tsx`, `Footer.tsx`, `next`, `layout.tsx`, `FacultyArticles.tsx`, `[...slug]/page.tsx`, `AdmissionSteps.tsx`, `FactsDrawer.tsx`, `Learning.tsx`, `ProgramsBand.tsx`, `ProgramLearning.tsx`, `CardSlider.tsx`, `FeeTabs.tsx`?**
  _High betweenness centrality (0.187) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0855614973262032 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `Page.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `Faq.tsx`, `server.js`, `home.ts`, `app/page.tsx`, `react`, `site.ts`, `ProgramAdvantage.tsx`, `InnerPage.tsx`, `Footer.tsx`, `CardSlider`, `layout.tsx`, `FacultyArticles.tsx`, `[...slug]/page.tsx`, `ProgramFaculty.tsx`, `ProgramsBand.tsx`, `ProgramLearning.tsx`, `not-found.tsx`, `ElectiveGrid.tsx`, `ProgramAbout.tsx`?**
  _High betweenness centrality (0.152) - this node is a cross-community bridge._
- **Should `scrape.py` be split into smaller, more focused modules?**
  _Cohesion score 0.08456659619450317 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `ElectiveCombinator.tsx`, `FacultyArticles.tsx`, `[...slug]/page.tsx`, `Kit.tsx`, `ProgramsBand.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `Faq.tsx`, `ContentPage`, `home.ts`, `app/page.tsx`, `ProgramAdvantage.tsx`, `InnerPage.tsx`, `layout.tsx`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._