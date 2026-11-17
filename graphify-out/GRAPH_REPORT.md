# Graph Report - dsu online  (2026-11-17)

## Corpus Check
- 122 files · ~79,980 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 52 file(s) not represented in the graph (top: .scss 49, (none) 2, .ico 1)

## Summary
- 717 nodes · 1787 edges · 41 communities (37 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 26 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `82060c88`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- InnerPage.tsx
- Page.tsx
- site
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
- next
- CLAUDE.md
- ContentPage
- home.ts
- curriculumData.ts
- ArrowLink
- ElectiveCombinator.tsx
- parse.ts
- FeeTabs.tsx
- Header.tsx
- Footer.tsx
- Blogs.tsx
- icons.tsx
- specViews
- section-heads.ts
- programme-faq.ts
- Icon
- layout.tsx
- Faq.tsx
- app/page.tsx
- FacultyArticles.tsx
- ProgramHero.tsx
- site.ts
- faculty
- EmiCalculator.tsx
- ProgramEligibility.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 81 edges
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
- `Architecture` --references--> `ReferPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ContentPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx

## Import Cycles
- None detected.

## Communities (41 total, 4 thin omitted)

### Community 0 - "InnerPage.tsx"
Cohesion: 0.08
Nodes (50): bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+42 more)

### Community 1 - "Page.tsx"
Cohesion: 0.09
Nodes (23): FaqList(), LeaderGrid(), Tabs(), DataTable(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial (+15 more)

### Community 2 - "site"
Cohesion: 0.29
Nodes (5): EnquiryContext, useEnquiry(), SideTabs(), PhoneIcon(), site

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.17
Nodes (23): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+15 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.11
Nodes (20): Checklist(), ContactRow(), CtaLink(), DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, lsi (+12 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "react"
Cohesion: 0.08
Nodes (40): gsap, react, img(), InternationalLearners(), metadata, tints, ICON_BY_SLUG, ICONS (+32 more)

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

### Community 14 - "next"
Cohesion: 0.09
Nodes (9): nextConfig, next, app, { createServer }, handle, next, Pic, halves() (+1 more)

### Community 16 - "ContentPage"
Cohesion: 0.14
Nodes (25): CertFlip(), slugify(), ClassApart(), Head(), LogoWall(), Pic(), Sec(), Split() (+17 more)

### Community 18 - "home.ts"
Cohesion: 0.14
Nodes (13): aboutPhotos, aboutCopy, aboutFeatures, aboutStats, BentoTile, blogs, certifications, faculty (+5 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "ArrowLink"
Cohesion: 0.21
Nodes (8): Hero(), slidePos, slideSize, ArrowLink(), Props, Variant, DotsIcon(), heroSlides

### Community 21 - "ElectiveCombinator.tsx"
Cohesion: 0.05
Nodes (39): swiper, AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap() (+31 more)

### Community 22 - "parse.ts"
Cohesion: 0.24
Nodes (10): cleanBlocks(), isNote(), isQuote(), asImg(), Img, parseFaq(), parseFaqByQuestionMarks(), parseQuotes() (+2 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 24 - "Header.tsx"
Cohesion: 0.19
Nodes (10): FactsDrawer(), OPEN_FACTS, rows, Header(), Hit, CloseIcon(), MenuIcon(), UserIcon() (+2 more)

### Community 25 - "Footer.tsx"
Cohesion: 0.25
Nodes (9): BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), Program, Specialization (+1 more)

### Community 26 - "Blogs.tsx"
Cohesion: 0.23
Nodes (11): Blogs(), MONTHS, ord(), toSlide(), Arrow(), BlogSlider(), Slide, toIsoBlogDate() (+3 more)

### Community 27 - "icons.tsx"
Cohesion: 0.13
Nodes (15): FacultyStrip(), order, photos, ProgramsBand(), Rect, CardCarousel(), Props, base (+7 more)

### Community 28 - "specViews"
Cohesion: 0.24
Nodes (12): CareerFlip(), CardGrid(), LearningCards(), lsIcon(), RoleGrid(), careers(), isP(), learningCards() (+4 more)

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 31 - "Icon"
Cohesion: 0.23
Nodes (7): Learning(), Testimonials(), VideoTile(), Icon(), bentoTiles, tickerItems, iconSize

### Community 32 - "layout.tsx"
Cohesion: 0.20
Nodes (8): lenis, fontMain, metadata, RootLayout(), EnquiryProvider(), Preloader(), SmoothScroll(), TitleReveal()

### Community 33 - "Faq.tsx"
Cohesion: 0.23
Nodes (7): Careers(), Faq(), FramedImage(), Props, Rect, careerTabs, recruiters

### Community 34 - "app/page.tsx"
Cohesion: 0.27
Nodes (8): Architecture, homeFaqs, HomePage(), About(), AboutBand(), Recognitions(), WhyChoose(), awards

### Community 35 - "FacultyArticles.tsx"
Cohesion: 0.25
Nodes (8): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, toIsoDate(), realFaculty, articles, showFacultyInsights

### Community 36 - "ProgramHero.tsx"
Cohesion: 0.36
Nodes (5): EnquireButton(), ProgramHero(), ProgramHeroProps, StatNumber(), Counter()

### Community 37 - "site.ts"
Cohesion: 0.29
Nodes (6): announcements, footerColumns, NavLink, showAnnouncement, showHomeBlogs, showHomeCareers

### Community 38 - "faculty"
Cohesion: 0.40
Nodes (5): Update: common sections + specialization template, FacultyGrid(), StoryCards(), faculty(), TestimonialGrid()

### Community 39 - "EmiCalculator.tsx"
Cohesion: 0.60
Nodes (3): emi(), EmiCalculator(), inr()

### Community 40 - "ProgramEligibility.tsx"
Cohesion: 0.60
Nodes (3): criteria(), iconOf(), ProgramEligibility()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 236 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `InnerPage.tsx`, `Page.tsx`, `site`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `Testimonial.tsx`, `next`, `home.ts`, `curriculumData.ts`, `ArrowLink`, `ElectiveCombinator.tsx`, `FeeTabs.tsx`, `Header.tsx`, `Footer.tsx`, `Blogs.tsx`, `icons.tsx`, `Icon`, `layout.tsx`, `Faq.tsx`, `app/page.tsx`, `FacultyArticles.tsx`, `ProgramHero.tsx`, `EmiCalculator.tsx`?**
  _High betweenness centrality (0.189) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0807909604519774 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `InnerPage.tsx`, `Page.tsx`, `site`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `react`, `Testimonial.tsx`, `home.ts`, `ArrowLink`, `ElectiveCombinator.tsx`, `Header.tsx`, `Footer.tsx`, `Blogs.tsx`, `icons.tsx`, `Icon`, `layout.tsx`, `Faq.tsx`, `app/page.tsx`, `FacultyArticles.tsx`, `ProgramHero.tsx`?**
  _High betweenness centrality (0.152) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08901515151515152 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `InnerPage.tsx`, `Faq.tsx`, `site`, `app/page.tsx`, `EnquiryModal.tsx`, `ProgramHero.tsx`, `Kit.tsx`, `FacultyArticles.tsx`, `react`, `DSU Online — CHECKPOINT (read this first in any new session)`, `ProgramEligibility.tsx`, `ContentPage`, `home.ts`, `ElectiveCombinator.tsx`, `Blogs.tsx`, `icons.tsx`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._