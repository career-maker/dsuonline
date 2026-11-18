# Graph Report - dsu online  (2026-11-18)

## Corpus Check
- 129 files · ~84,342 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 55 file(s) not represented in the graph (top: .scss 52, (none) 2, .ico 1)

## Summary
- 752 nodes · 1866 edges · 36 communities (31 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0a4efc7b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ProgramsBand.tsx
- Page.tsx
- ProgramAdvantage.tsx
- scrape.py
- ArrowLink
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
- AdmissionSteps.tsx
- ProgramLearning.tsx
- InnerPage.tsx
- layout.tsx
- site.ts
- CardSlider
- programme-faq.ts
- FacultyArticles.tsx
- specViews
- icons.tsx
- ProgramAbout.tsx
- next
- Icon
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
- `Architecture` --references--> `ReferPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ContentPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx

## Import Cycles
- None detected.

## Communities (36 total, 5 thin omitted)

### Community 0 - "ProgramsBand.tsx"
Cohesion: 0.18
Nodes (10): ProgramHero(), ProgramHeroProps, StatNumber(), order, photos, ProgramsBand(), Rect, Counter() (+2 more)

### Community 1 - "Page.tsx"
Cohesion: 0.08
Nodes (21): FaqList(), Tabs(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial, ELECTIVE_PHOTOS, P (+13 more)

### Community 2 - "ProgramAdvantage.tsx"
Cohesion: 0.25
Nodes (8): Card(), Ico(), P, advantageBanner, AdvantageCard, advantageCards, advantageLead, dualCopy

### Community 3 - "scrape.py"
Cohesion: 0.07
Nodes (16): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+8 more)

### Community 4 - "ArrowLink"
Cohesion: 0.11
Nodes (35): ContactForm(), empty, Phase, criteria(), iconOf(), ProgramEligibility(), empty, Phase (+27 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.09
Nodes (27): Update: common sections + specialization template, slugify(), DocList(), FacultyGrid(), FacultyShowcase(), highlight(), HIGHLIGHTS, LearningCards() (+19 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.09
Nodes (35): gsap, heroUsps, img(), InternationalLearners(), metadata, tints, ContinentCards(), compare (+27 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.12
Nodes (15): 2026-10-30 inner-page photos, 2026-11-18 Dual specialisation, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status (+7 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.09
Nodes (20): react, Pic, ICON_BY_SLUG, ICONS, EMI_TENURES, EmiCalculator(), feeFor(), inr() (+12 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 16 - "ContentPage"
Cohesion: 0.12
Nodes (31): CertFlip(), LeaderGrid(), CardGrid(), Checklist(), ClassApart(), ContactRow(), CtaLink(), DataTable() (+23 more)

### Community 18 - "home.ts"
Cohesion: 0.13
Nodes (14): aboutPhotos, aboutCopy, aboutFeatures, aboutStats, awards, BentoTile, blogs, careerTabs (+6 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "app/page.tsx"
Cohesion: 0.17
Nodes (13): Architecture, homeFaqs, HomePage(), About(), AboutBand(), Blogs(), Careers(), first (+5 more)

### Community 21 - "AdmissionSteps.tsx"
Cohesion: 0.28
Nodes (7): AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap()

### Community 22 - "ProgramLearning.tsx"
Cohesion: 0.31
Nodes (7): ICON, iconOf(), LearnItem, PHOTO, photoOf(), ProgramLearning(), TabFace()

### Community 25 - "InnerPage.tsx"
Cohesion: 0.06
Nodes (62): nextConfig, bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve() (+54 more)

### Community 26 - "layout.tsx"
Cohesion: 0.05
Nodes (40): lenis, fontMain, metadata, RootLayout(), Benefit(), Elective, ElectiveCombinator(), ICON (+32 more)

### Community 27 - "site.ts"
Cohesion: 0.18
Nodes (9): Testimonials(), tickerItems, announcements, footerColumns, NavLink, showAnnouncement, showFacultyInsights, showHomeBlogs (+1 more)

### Community 28 - "CardSlider"
Cohesion: 0.12
Nodes (14): swiper, CareerFlip(), CareerItem, IndustryItem, Card(), ElectiveGrid(), Item, careers() (+6 more)

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 32 - "FacultyArticles.tsx"
Cohesion: 0.27
Nodes (9): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip(), toIsoDate(), realFaculty, articles (+1 more)

### Community 33 - "specViews"
Cohesion: 0.19
Nodes (13): Latest change, body(), CareerShowcase(), Role, Head(), Item, ModuleCard(), ModuleCards() (+5 more)

### Community 34 - "icons.tsx"
Cohesion: 0.09
Nodes (24): VideoTile(), Avatar(), AvatarFallback(), AvatarImage(), Card(), CardContent(), CardFooter(), cx() (+16 more)

### Community 37 - "next"
Cohesion: 0.24
Nodes (4): next, certifications, whyItems, iconSize

### Community 39 - "Icon"
Cohesion: 0.27
Nodes (7): Faq(), Learning(), FramedImage(), Props, Rect, Icon(), bentoTiles

### Community 46 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 252 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `FacultyArticles.tsx`, `Page.tsx`, `ProgramsBand.tsx`, `icons.tsx`, `ArrowLink`, `package.json`, `Kit.tsx`, `Icon`, `international-learners/page.tsx`, `FeeTabs.tsx`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `AdmissionSteps.tsx`, `ProgramLearning.tsx`, `InnerPage.tsx`, `layout.tsx`, `CardSlider`?**
  _High betweenness centrality (0.180) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08143939393939394 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `ProgramsBand.tsx`, `Page.tsx`, `ProgramAdvantage.tsx`, `ArrowLink`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `react`, `server.js`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `ProgramLearning.tsx`, `not-found.tsx`, `InnerPage.tsx`, `layout.tsx`, `site.ts`, `CardSlider`, `FacultyArticles.tsx`, `specViews`, `icons.tsx`, `ProgramAbout.tsx`, `Icon`?**
  _High betweenness centrality (0.154) - this node is a cross-community bridge._
- **Should `scrape.py` be split into smaller, more focused modules?**
  _Cohesion score 0.07265306122448979 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `ProgramsBand.tsx`, `FacultyArticles.tsx`, `ProgramAdvantage.tsx`, `Kit.tsx`, `Icon`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `react`, `ContentPage`, `home.ts`, `app/page.tsx`, `InnerPage.tsx`, `layout.tsx`, `CardSlider`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._