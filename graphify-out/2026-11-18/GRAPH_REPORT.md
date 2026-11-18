# Graph Report - dsu online  (2026-11-18)

## Corpus Check
- 126 files · ~82,423 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 55 file(s) not represented in the graph (top: .scss 52, (none) 2, .ico 1)

## Summary
- 742 nodes · 1844 edges · 46 communities (39 shown, 7 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `198b0591`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ArrowLink
- Page.tsx
- ProgramsBand.tsx
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
- icons.tsx
- ProgramAdvantage.tsx
- InnerPage.tsx
- Footer.tsx
- CardSlider
- section-heads.ts
- programme-faq.ts
- layout.tsx
- FacultyArticles.tsx
- specViews
- site.ts
- AdmissionSteps.tsx
- Interactive.tsx
- Icon
- ProgramFaculty.tsx
- next
- ProgramLearning.tsx
- CardSlider.tsx
- faculty
- ElectiveGrid.tsx
- SpecCore.tsx
- ProgramAbout.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 83 edges
2. `react` - 58 edges
3. `ArrowLink()` - 46 edges
4. `next` - 45 edges
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

## Communities (46 total, 7 thin omitted)

### Community 0 - "ArrowLink"
Cohesion: 0.10
Nodes (21): Benefit(), Elective, ElectiveCombinator(), ICON, EnquireButton(), criteria(), iconOf(), ProgramEligibility() (+13 more)

### Community 1 - "Page.tsx"
Cohesion: 0.11
Nodes (15): ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial, ELECTIVE_PHOTOS, P, Props, Seg (+7 more)

### Community 2 - "ProgramsBand.tsx"
Cohesion: 0.19
Nodes (11): order, photos, ProgramsBand(), Rect, CardCarousel(), Props, ChevronLeft(), ChevronRight() (+3 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.17
Nodes (23): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+15 more)

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
Nodes (22): CertFlip(), slugify(), ClassApart(), LogoWall(), Pic(), Sec(), Split(), Body() (+14 more)

### Community 18 - "home.ts"
Cohesion: 0.11
Nodes (17): aboutPhotos, slidePos, slideSize, aboutCopy, aboutFeatures, aboutStats, awards, BentoTile (+9 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "app/page.tsx"
Cohesion: 0.26
Nodes (9): homeFaqs, HomePage(), About(), Careers(), Faq(), Hero(), Recognitions(), Testimonials() (+1 more)

### Community 21 - "react"
Cohesion: 0.08
Nodes (20): react, Pic, ICON_BY_SLUG, ICONS, EMI_TENURES, EmiCalculator(), feeFor(), inr() (+12 more)

### Community 22 - "parse.ts"
Cohesion: 0.24
Nodes (10): cleanBlocks(), isNote(), isQuote(), asImg(), Img, parseFaq(), parseFaqByQuestionMarks(), parseQuotes() (+2 more)

### Community 23 - "icons.tsx"
Cohesion: 0.13
Nodes (13): react-dom, FactsDrawer(), OPEN_FACTS, rows, Header(), Hit, base, CloseIcon() (+5 more)

### Community 24 - "ProgramAdvantage.tsx"
Cohesion: 0.24
Nodes (9): Card(), Ico(), P, ProgramAdvantage(), advantageBanner, AdvantageCard, advantageCards, advantageLead (+1 more)

### Community 25 - "InnerPage.tsx"
Cohesion: 0.07
Nodes (58): nextConfig, bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve() (+50 more)

### Community 26 - "Footer.tsx"
Cohesion: 0.20
Nodes (12): BROCHURE, BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), Program (+4 more)

### Community 28 - "CardSlider"
Cohesion: 0.26
Nodes (8): Latest change, body(), CareerShowcase(), Role, Item, ModuleCard(), ModuleCards(), CardSlider()

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 31 - "layout.tsx"
Cohesion: 0.20
Nodes (8): lenis, fontMain, metadata, RootLayout(), EnquiryProvider(), Preloader(), SmoothScroll(), TitleReveal()

### Community 32 - "FacultyArticles.tsx"
Cohesion: 0.27
Nodes (9): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip(), toIsoDate(), realFaculty, articles (+1 more)

### Community 33 - "specViews"
Cohesion: 0.24
Nodes (12): CareerFlip(), Head(), LearningCards(), lsIcon(), careers(), isP(), learningCards(), specEyebrow() (+4 more)

### Community 34 - "site.ts"
Cohesion: 0.20
Nodes (9): SideTabs(), PhoneIcon(), announcements, NavLink, showAnnouncement, showFacultyInsights, showHomeBlogs, showHomeCareers (+1 more)

### Community 35 - "AdmissionSteps.tsx"
Cohesion: 0.28
Nodes (7): AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap()

### Community 36 - "Interactive.tsx"
Cohesion: 0.25
Nodes (8): FaqList(), LeaderGrid(), Tabs(), DataTable(), curriculum(), flat(), leaders(), Faq

### Community 37 - "Icon"
Cohesion: 0.31
Nodes (8): Architecture, AboutBand(), Learning(), VideoTile(), WhyChoose(), Icon(), PlayIcon(), bentoTiles

### Community 38 - "ProgramFaculty.tsx"
Cohesion: 0.47
Nodes (4): Card(), initials(), Item, ProgramFaculty()

### Community 39 - "next"
Cohesion: 0.16
Nodes (7): next, Props, Rect, careerTabs, recruiters, tickerItems, iconSize

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

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 247 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `ArrowLink`, `Page.tsx`, `ProgramsBand.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `Testimonial.tsx`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `icons.tsx`, `InnerPage.tsx`, `Footer.tsx`, `layout.tsx`, `FacultyArticles.tsx`, `AdmissionSteps.tsx`, `Interactive.tsx`, `Icon`, `next`, `ProgramLearning.tsx`, `CardSlider.tsx`?**
  _High betweenness centrality (0.186) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ArrowLink` be split into smaller, more focused modules?**
  _Cohesion score 0.10476190476190476 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `ArrowLink`, `Page.tsx`, `ProgramsBand.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `Testimonial.tsx`, `server.js`, `home.ts`, `app/page.tsx`, `react`, `icons.tsx`, `ProgramAdvantage.tsx`, `InnerPage.tsx`, `Footer.tsx`, `not-found.tsx`, `CardSlider`, `layout.tsx`, `FacultyArticles.tsx`, `site.ts`, `ProgramFaculty.tsx`, `ProgramLearning.tsx`, `ElectiveGrid.tsx`, `ProgramAbout.tsx`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10507246376811594 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `FacultyArticles.tsx`, `ProgramsBand.tsx`, `EnquiryModal.tsx`, `Icon`, `Kit.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `home.ts`, `app/page.tsx`, `react`, `ProgramAdvantage.tsx`, `InnerPage.tsx`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._