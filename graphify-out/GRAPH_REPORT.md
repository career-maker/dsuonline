# Graph Report - dsu online  (2026-11-13)

## Corpus Check
- 121 files · ~78,380 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 50 file(s) not represented in the graph (top: .scss 47, (none) 2, .ico 1)

## Summary
- 708 nodes · 1782 edges · 35 communities (30 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `62e14643`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [...slug]/page.tsx
- Page.tsx
- icons.tsx
- scrape.py
- ArrowLink.tsx
- package.json
- Kit.tsx
- compilerOptions
- international-learners/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- react
- README.md
- AGENTS.md
- ArrowLink
- CLAUDE.md
- ContentPage
- app/page.tsx
- curriculumData.ts
- EmiCalculator.tsx
- ElectiveCombinator.tsx
- parse.ts
- FeeTabs.tsx
- next
- AdmissionSteps.tsx
- Faq.tsx
- home.ts
- specViews
- slugify
- FacultyArticles.tsx
- Testimonials.tsx
- server.js
- Hero.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 80 edges
2. `react` - 58 edges
3. `ArrowLink()` - 46 edges
4. `next` - 44 edges
5. `ChevronRight()` - 22 edges
6. `Icon()` - 18 edges
7. `Flow()` - 16 edges
8. `ChevronLeft()` - 16 edges
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

## Communities (35 total, 5 thin omitted)

### Community 0 - "[...slug]/page.tsx"
Cohesion: 0.09
Nodes (35): nextConfig, bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve() (+27 more)

### Community 1 - "Page.tsx"
Cohesion: 0.11
Nodes (19): FaqList(), LeaderGrid(), Tabs(), DataTable(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial (+11 more)

### Community 2 - "icons.tsx"
Cohesion: 0.06
Nodes (40): lenis, fontMain, metadata, RootLayout(), ProgramGuidance(), BrochureForm(), EnquiryContext, EnquiryProvider() (+32 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "ArrowLink.tsx"
Cohesion: 0.12
Nodes (29): ContactForm(), empty, Phase, criteria(), iconOf(), ProgramEligibility(), empty, Phase (+21 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.10
Nodes (21): DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, LearningCards(), lsi, lsIcon(), OfficeCard() (+13 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.09
Nodes (37): gsap, img(), InternationalLearners(), metadata, tints, CallbackForm(), Phase, programmes (+29 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.13
Nodes (14): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-26 (latest) (+6 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.09
Nodes (30): react, CareerItem, IndustryItem, ICON_BY_SLUG, ICONS, Item, icons, stroke (+22 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "ArrowLink"
Cohesion: 0.10
Nodes (36): Accordion(), EnquireButton(), Flow(), isInternal(), Pic(), Qa(), CtaBand(), InnerHero() (+28 more)

### Community 16 - "ContentPage"
Cohesion: 0.16
Nodes (22): Checklist(), ClassApart(), ContactRow(), CtaLink(), LogoWall(), Pic(), Prose(), Split() (+14 more)

### Community 18 - "app/page.tsx"
Cohesion: 0.26
Nodes (12): Architecture, homeFaqs, HomePage(), About(), AboutBand(), Careers(), Hero(), ProgramsBand() (+4 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "EmiCalculator.tsx"
Cohesion: 0.60
Nodes (3): emi(), EmiCalculator(), inr()

### Community 21 - "ElectiveCombinator.tsx"
Cohesion: 0.08
Nodes (26): swiper, Benefit(), Elective, ElectiveCombinator(), ICON, Card(), ElectiveGrid(), Item (+18 more)

### Community 22 - "parse.ts"
Cohesion: 0.16
Nodes (14): cleanBlocks(), isNote(), isQuote(), asImg(), Img, parseFaq(), parseFaqByQuestionMarks(), parseQuotes() (+6 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 24 - "next"
Cohesion: 0.16
Nodes (7): next, order, photos, Rect, certifications, whyItems, iconSize

### Community 25 - "AdmissionSteps.tsx"
Cohesion: 0.29
Nodes (6): AdmissionSteps(), heading(), ic, icons, Step, wrap()

### Community 26 - "Faq.tsx"
Cohesion: 0.24
Nodes (7): Faq(), Learning(), VideoTile(), FramedImage(), Props, Rect, bentoTiles

### Community 27 - "home.ts"
Cohesion: 0.13
Nodes (14): aboutPhotos, aboutCopy, aboutFeatures, aboutStats, awards, BentoTile, blogs, careerTabs (+6 more)

### Community 28 - "specViews"
Cohesion: 0.24
Nodes (12): CareerFlip(), FacultyScroller(), CardGrid(), FacultyGrid(), RoleGrid(), careers(), faculty(), isP() (+4 more)

### Community 29 - "slugify"
Cohesion: 0.25
Nodes (7): slugify(), Head(), Sec(), withEyebrow(), headFor(), SectionHead, sectionHeads

### Community 30 - "FacultyArticles.tsx"
Cohesion: 0.25
Nodes (8): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, toIsoDate(), realFaculty, articles, showFacultyInsights

### Community 31 - "Testimonials.tsx"
Cohesion: 0.22
Nodes (5): tickerItems, showAnnouncement, B, homeTestimonials, testimonials

### Community 32 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 232 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `[...slug]/page.tsx`, `Page.tsx`, `icons.tsx`, `ArrowLink.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `ArrowLink`, `app/page.tsx`, `curriculumData.ts`, `EmiCalculator.tsx`, `ElectiveCombinator.tsx`, `FeeTabs.tsx`, `next`, `AdmissionSteps.tsx`, `Faq.tsx`, `home.ts`, `FacultyArticles.tsx`, `Hero.tsx`?**
  _High betweenness centrality (0.187) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `[...slug]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09393939393939393 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `[...slug]/page.tsx`, `Page.tsx`, `icons.tsx`, `ArrowLink.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `react`, `ArrowLink`, `app/page.tsx`, `ElectiveCombinator.tsx`, `parse.ts`, `AdmissionSteps.tsx`, `Faq.tsx`, `home.ts`, `FacultyArticles.tsx`, `Testimonials.tsx`, `server.js`, `not-found.tsx`, `Hero.tsx`?**
  _High betweenness centrality (0.156) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11076923076923077 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `[...slug]/page.tsx`, `icons.tsx`, `Hero.tsx`, `ArrowLink.tsx`, `Kit.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `ContentPage`, `app/page.tsx`, `ElectiveCombinator.tsx`, `next`, `Faq.tsx`, `home.ts`, `FacultyArticles.tsx`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._