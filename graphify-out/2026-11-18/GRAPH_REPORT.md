# Graph Report - dsu online  (2026-11-18)

## Corpus Check
- 129 files · ~84,156 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 55 file(s) not represented in the graph (top: .scss 52, (none) 2, .ico 1)

## Summary
- 751 nodes · 1865 edges · 40 communities (35 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `55dc3bfe`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ProgramHero.tsx
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
- EmiCalculator.tsx
- README.md
- AGENTS.md
- server.js
- CLAUDE.md
- ContentPage
- home.ts
- curriculumData.ts
- app/page.tsx
- FactsDrawer.tsx
- parse.ts
- Header.tsx
- InnerPage.tsx
- Footer.tsx
- site.ts
- CardSlider
- withEyebrow
- programme-faq.ts
- layout.tsx
- FacultyArticles.tsx
- specViews
- react
- Hero.tsx
- next
- Icon.tsx
- ProgramsBand.tsx
- FeeTabs.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 83 edges
2. `react` - 58 edges
3. `next` - 47 edges
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
- `Update: common sections + specialization template` --references--> `StoryCards()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Kit.tsx
- `Latest change` --references--> `specEyebrow()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx

## Import Cycles
- None detected.

## Communities (40 total, 5 thin omitted)

### Community 0 - "ProgramHero.tsx"
Cohesion: 0.33
Nodes (5): ProgramHero(), ProgramHeroProps, StatNumber(), Counter(), heroSlides

### Community 1 - "Page.tsx"
Cohesion: 0.09
Nodes (23): FaqList(), LeaderGrid(), Tabs(), DataTable(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial (+15 more)

### Community 2 - "icons.tsx"
Cohesion: 0.22
Nodes (4): SideTabs(), base, P, PhoneIcon()

### Community 3 - "scrape.py"
Cohesion: 0.07
Nodes (16): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+8 more)

### Community 4 - "ArrowLink"
Cohesion: 0.08
Nodes (44): ContactForm(), empty, Phase, Benefit(), Elective, ElectiveCombinator(), ICON, EnquireButton() (+36 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (33): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+25 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.11
Nodes (22): CardGrid(), Checklist(), ContactRow(), CtaLink(), DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS (+14 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.09
Nodes (35): gsap, heroUsps, img(), InternationalLearners(), metadata, tints, ContinentCards(), compare (+27 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.10
Nodes (20): 2026-10-30 inner-page photos, 2026-11-18 Dual specialisation, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status (+12 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "EmiCalculator.tsx"
Cohesion: 0.38
Nodes (5): EMI_TENURES, EmiCalculator(), feeFor(), inr(), PG

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 16 - "ContentPage"
Cohesion: 0.13
Nodes (27): Architecture, CertFlip(), slugify(), ClassApart(), LogoWall(), Pic(), Sec(), Split() (+19 more)

### Community 18 - "home.ts"
Cohesion: 0.11
Nodes (16): aboutPhotos, aboutCopy, aboutFeatures, aboutStats, awards, BentoTile, blogs, careerTabs (+8 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "app/page.tsx"
Cohesion: 0.32
Nodes (10): homeFaqs, HomePage(), About(), Careers(), Faq(), Hero(), Learning(), ProgramsBand() (+2 more)

### Community 21 - "FactsDrawer.tsx"
Cohesion: 0.40
Nodes (4): FactsDrawer(), OPEN_FACTS, rows, CloseIcon()

### Community 22 - "parse.ts"
Cohesion: 0.27
Nodes (9): cleanBlocks(), isNote(), isQuote(), asImg(), parseFaq(), parseFaqByQuestionMarks(), parseQuotes(), Quote (+1 more)

### Community 23 - "Header.tsx"
Cohesion: 0.32
Nodes (6): Header(), Hit, MenuIcon(), UserIcon(), mainNav, moreNav

### Community 25 - "InnerPage.tsx"
Cohesion: 0.07
Nodes (58): bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved (+50 more)

### Community 26 - "Footer.tsx"
Cohesion: 0.21
Nodes (11): BROCHURE, BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), Program (+3 more)

### Community 27 - "site.ts"
Cohesion: 0.17
Nodes (10): Update 2026-10-27 (QA-issue round, new account), Reveal(), Testimonials(), tickerItems, announcements, NavLink, showAnnouncement, showFacultyInsights (+2 more)

### Community 28 - "CardSlider"
Cohesion: 0.05
Nodes (38): Latest change, swiper, AdmissionSteps(), heading(), ic, icons, Step, StepCard() (+30 more)

### Community 29 - "withEyebrow"
Cohesion: 0.40
Nodes (4): withEyebrow(), headFor(), SectionHead, sectionHeads

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 31 - "layout.tsx"
Cohesion: 0.22
Nodes (7): fontMain, metadata, RootLayout(), EnquiryProvider(), Preloader(), SmoothScroll(), TitleReveal()

### Community 32 - "FacultyArticles.tsx"
Cohesion: 0.19
Nodes (14): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip(), toIsoDate(), CardCarousel(), Props (+6 more)

### Community 33 - "specViews"
Cohesion: 0.24
Nodes (12): CareerFlip(), Head(), LearningCards(), lsIcon(), careers(), isP(), learningCards(), specEyebrow() (+4 more)

### Community 34 - "react"
Cohesion: 0.09
Nodes (26): react, ICON_BY_SLUG, ICONS, MAP, P, Arrow(), BlogSlider(), toIsoBlogDate() (+18 more)

### Community 36 - "next"
Cohesion: 0.17
Nodes (5): nextConfig, next, Pic, halves(), ProgramAbout()

### Community 37 - "Icon.tsx"
Cohesion: 0.36
Nodes (3): VideoTile(), bentoTiles, iconSize

### Community 39 - "ProgramsBand.tsx"
Cohesion: 0.25
Nodes (5): order, photos, Rect, Props, Rect

### Community 46 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 251 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `ProgramHero.tsx`, `Page.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `EmiCalculator.tsx`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `FactsDrawer.tsx`, `Header.tsx`, `InnerPage.tsx`, `Footer.tsx`, `CardSlider`, `layout.tsx`, `FacultyArticles.tsx`, `Hero.tsx`, `next`, `Icon.tsx`, `ProgramsBand.tsx`, `FeeTabs.tsx`?**
  _High betweenness centrality (0.179) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0855614973262032 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `ProgramHero.tsx`, `Page.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `server.js`, `home.ts`, `curriculumData.ts`, `Header.tsx`, `not-found.tsx`, `InnerPage.tsx`, `Footer.tsx`, `site.ts`, `CardSlider`, `layout.tsx`, `FacultyArticles.tsx`, `react`, `Hero.tsx`, `Icon.tsx`, `ProgramsBand.tsx`?**
  _High betweenness centrality (0.154) - this node is a cross-community bridge._
- **Should `scrape.py` be split into smaller, more focused modules?**
  _Cohesion score 0.07265306122448979 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `ProgramHero.tsx`, `FacultyArticles.tsx`, `react`, `Hero.tsx`, `Kit.tsx`, `ProgramsBand.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `ContentPage`, `home.ts`, `app/page.tsx`, `InnerPage.tsx`, `CardSlider`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._