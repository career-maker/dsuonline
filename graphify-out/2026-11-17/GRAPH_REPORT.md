# Graph Report - dsu online  (2026-11-17)

## Corpus Check
- 125 files · ~81,645 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 54 file(s) not represented in the graph (top: .scss 51, (none) 2, .ico 1)

## Summary
- 730 nodes · 1812 edges · 42 communities (37 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bb748cf7`
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
- international-learners/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- react
- README.md
- AGENTS.md
- next
- CLAUDE.md
- ContentPage
- home.ts
- curriculumData.ts
- app/page.tsx
- ElectiveCombinator.tsx
- parse.ts
- FeeTabs.tsx
- site.ts
- ProgramAbout.tsx
- layout.tsx
- Footer.tsx
- specViews
- section-heads.ts
- programme-faq.ts
- site
- FacultyArticles.tsx
- ArrowLink.tsx
- Interactive.tsx
- Blogs.tsx
- ProgramHero.tsx
- Learning.tsx
- faculty
- Icon.tsx
- ProgramEligibility.tsx
- Testimonials.tsx

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
- `Update: common sections + specialization template` --references--> `ProgramFaculty()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/ProgramFaculty.tsx

## Import Cycles
- None detected.

## Communities (42 total, 5 thin omitted)

### Community 0 - "ArrowLink"
Cohesion: 0.08
Nodes (54): bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+46 more)

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
Nodes (24): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CallbackForm() (+16 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.11
Nodes (23): CardGrid(), Checklist(), ClassApart(), ContactRow(), CtaLink(), DocList(), FacultyShowcase(), highlight() (+15 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.09
Nodes (37): gsap, heroUsps, img(), InternationalLearners(), metadata, tints, Phase, programmes (+29 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.12
Nodes (15): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest change, Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status (+7 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.07
Nodes (31): react, Pic, ICON_BY_SLUG, ICONS, emi(), EmiCalculator(), inr(), FacultyStrip() (+23 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "next"
Cohesion: 0.12
Nodes (6): nextConfig, next, app, { createServer }, handle, next

### Community 16 - "ContentPage"
Cohesion: 0.16
Nodes (22): Architecture, CertFlip(), slugify(), Sec(), Split(), Body(), certificates(), ContentPage() (+14 more)

### Community 18 - "home.ts"
Cohesion: 0.13
Nodes (15): aboutPhotos, WhyChoose(), aboutCopy, aboutFeatures, aboutStats, articles, BentoTile, blogs (+7 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "app/page.tsx"
Cohesion: 0.18
Nodes (12): homeFaqs, HomePage(), About(), Careers(), Faq(), order, photos, ProgramsBand() (+4 more)

### Community 21 - "ElectiveCombinator.tsx"
Cohesion: 0.05
Nodes (39): swiper, AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap() (+31 more)

### Community 22 - "parse.ts"
Cohesion: 0.24
Nodes (10): cleanBlocks(), isNote(), isQuote(), asImg(), Img, parseFaq(), parseFaqByQuestionMarks(), parseQuotes() (+2 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 24 - "site.ts"
Cohesion: 0.17
Nodes (13): react-dom, Header(), Hit, CloseIcon(), MenuIcon(), UserIcon(), announcements, footerColumns (+5 more)

### Community 26 - "layout.tsx"
Cohesion: 0.16
Nodes (9): fontMain, metadata, RootLayout(), FactsDrawer(), OPEN_FACTS, rows, Preloader(), SmoothScroll() (+1 more)

### Community 27 - "Footer.tsx"
Cohesion: 0.23
Nodes (10): BROCHURE, BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), Program (+2 more)

### Community 28 - "specViews"
Cohesion: 0.24
Nodes (11): CareerFlip(), Head(), RoleGrid(), ModuleCards(), careers(), isP(), specEyebrow(), specViews() (+3 more)

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 31 - "site"
Cohesion: 0.27
Nodes (6): EnquiryContext, EnquiryProvider(), useEnquiry(), SideTabs(), PhoneIcon(), site

### Community 32 - "FacultyArticles.tsx"
Cohesion: 0.29
Nodes (8): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, toIsoDate(), Icon(), realFaculty, showFacultyInsights

### Community 33 - "ArrowLink.tsx"
Cohesion: 0.20
Nodes (6): Hero(), slidePos, slideSize, Props, Variant, DotsIcon()

### Community 34 - "Interactive.tsx"
Cohesion: 0.25
Nodes (8): FaqList(), LeaderGrid(), Tabs(), DataTable(), curriculum(), flat(), leaders(), Faq

### Community 35 - "Blogs.tsx"
Cohesion: 0.23
Nodes (11): Blogs(), MONTHS, ord(), toSlide(), Arrow(), BlogSlider(), Slide, toIsoBlogDate() (+3 more)

### Community 36 - "ProgramHero.tsx"
Cohesion: 0.33
Nodes (5): ProgramHero(), ProgramHeroProps, StatNumber(), Counter(), heroSlides

### Community 37 - "Learning.tsx"
Cohesion: 0.31
Nodes (5): Learning(), VideoTile(), Props, Rect, bentoTiles

### Community 38 - "faculty"
Cohesion: 0.40
Nodes (5): Update: common sections + specialization template, FacultyGrid(), StoryCards(), faculty(), TestimonialGrid()

### Community 39 - "Icon.tsx"
Cohesion: 0.33
Nodes (3): careerTabs, recruiters, iconSize

### Community 40 - "ProgramEligibility.tsx"
Cohesion: 0.60
Nodes (3): criteria(), iconOf(), ProgramEligibility()

### Community 41 - "Testimonials.tsx"
Cohesion: 0.40
Nodes (3): Testimonials(), tickerItems, showAnnouncement

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 240 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `ArrowLink`, `Page.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `ElectiveCombinator.tsx`, `FeeTabs.tsx`, `site.ts`, `layout.tsx`, `Footer.tsx`, `site`, `FacultyArticles.tsx`, `ArrowLink.tsx`, `Interactive.tsx`, `Blogs.tsx`, `ProgramHero.tsx`, `Learning.tsx`, `Icon.tsx`?**
  _High betweenness centrality (0.188) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ArrowLink` be split into smaller, more focused modules?**
  _Cohesion score 0.07932692307692307 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `ArrowLink`, `Page.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `react`, `home.ts`, `app/page.tsx`, `ElectiveCombinator.tsx`, `site.ts`, `ProgramAbout.tsx`, `layout.tsx`, `Footer.tsx`, `site`, `FacultyArticles.tsx`, `ArrowLink.tsx`, `Blogs.tsx`, `ProgramHero.tsx`, `Learning.tsx`, `Icon.tsx`, `Testimonials.tsx`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0896551724137931 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `FacultyArticles.tsx`, `ArrowLink.tsx`, `Blogs.tsx`, `EnquiryModal.tsx`, `ProgramHero.tsx`, `Kit.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `ProgramEligibility.tsx`, `ContentPage`, `home.ts`, `app/page.tsx`, `ElectiveCombinator.tsx`, `site`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._