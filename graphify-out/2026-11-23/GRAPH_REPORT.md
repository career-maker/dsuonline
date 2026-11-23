# Graph Report - dsu online  (2026-11-23)

## Corpus Check
- 133 files · ~86,987 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 57 file(s) not represented in the graph (top: .scss 54, (none) 2, .ico 1)

## Summary
- 770 nodes · 1916 edges · 39 communities (34 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fb8e8afa`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- EmiCalculator.tsx
- Page.tsx
- CardSlider
- scrape.py
- ArrowLink
- package.json
- Kit.tsx
- compilerOptions
- react
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- InnerPage.tsx
- README.md
- AGENTS.md
- server.js
- CLAUDE.md
- next
- home.ts
- curriculumData.ts
- app/page.tsx
- specViews
- parse.ts
- ProgramAdvantage.tsx
- content.ts
- site.ts
- Hero.tsx
- Icon
- programme-faq.ts
- FacultyArticles.tsx
- Testimonial.tsx
- ProgramAbout.tsx
- ContentPage
- icons.tsx
- Learning.tsx
- ProgramHero.tsx
- FeeTabs.tsx
- ProgramFaculty.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 83 edges
2. `react` - 59 edges
3. `next` - 50 edges
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

## Communities (39 total, 5 thin omitted)

### Community 0 - "EmiCalculator.tsx"
Cohesion: 0.36
Nodes (6): EMI_TENURES, EmiCalculator(), feeFor(), inr(), PG, ScratchCard()

### Community 1 - "Page.tsx"
Cohesion: 0.09
Nodes (32): FaqList(), LeaderGrid(), Tabs(), CardGrid(), Checklist(), ClassApart(), ContactRow(), DataTable() (+24 more)

### Community 2 - "CardSlider"
Cohesion: 0.12
Nodes (15): Latest change, body(), CareerShowcase(), Role, Card(), ElectiveGrid(), Item, Item (+7 more)

### Community 3 - "scrape.py"
Cohesion: 0.07
Nodes (16): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+8 more)

### Community 4 - "ArrowLink"
Cohesion: 0.08
Nodes (45): ContactForm(), empty, Phase, Benefit(), Elective, ElectiveCombinator(), ICON, EnquireButton() (+37 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (31): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+23 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.11
Nodes (20): CtaLink(), DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, LearningCards(), lsi, lsIcon() (+12 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "react"
Cohesion: 0.06
Nodes (44): gsap, react, heroUsps, img(), InternationalLearners(), metadata, tints, Pic (+36 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.12
Nodes (15): 2026-10-30 inner-page photos, 2026-11-18 Dual specialisation, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status (+7 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "InnerPage.tsx"
Cohesion: 0.15
Nodes (23): Accordion(), Flow(), isInternal(), Pic(), Qa(), Crumb, isFaq(), isStep() (+15 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 16 - "next"
Cohesion: 0.25
Nodes (5): next, Testimonials(), initialOf(), TestimonialShowcase(), tickerItems

### Community 18 - "home.ts"
Cohesion: 0.12
Nodes (14): aboutPhotos, aboutCopy, aboutFeatures, aboutStats, awards, BentoTile, blogs, careerTabs (+6 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "app/page.tsx"
Cohesion: 0.32
Nodes (10): homeFaqs, HomePage(), About(), Careers(), Faq(), Hero(), Learning(), ProgramsBand() (+2 more)

### Community 21 - "specViews"
Cohesion: 0.36
Nodes (9): CareerFlip(), Head(), careers(), isP(), specEyebrow(), specViews(), SubView(), parsePairs() (+1 more)

### Community 22 - "parse.ts"
Cohesion: 0.27
Nodes (9): cleanBlocks(), isNote(), isQuote(), asImg(), parseFaq(), parseFaqByQuestionMarks(), parseQuotes(), Quote (+1 more)

### Community 23 - "ProgramAdvantage.tsx"
Cohesion: 0.06
Nodes (29): swiper, AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap() (+21 more)

### Community 25 - "content.ts"
Cohesion: 0.07
Nodes (43): nextConfig, base, groups, metadata, SitemapPage(), sitemap(), bannerBlurb(), bannerDuration() (+35 more)

### Community 26 - "site.ts"
Cohesion: 0.06
Nodes (35): lenis, react-dom, fontMain, metadata, RootLayout(), BROCHURE, BrochureForm(), FactsDrawer() (+27 more)

### Community 27 - "Hero.tsx"
Cohesion: 0.33
Nodes (4): first, slidePos, slideSize, heroSlides

### Community 29 - "Icon"
Cohesion: 0.25
Nodes (7): Architecture, AboutBand(), WhyChoose(), Icon(), certifications, whyItems, iconSize

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 32 - "FacultyArticles.tsx"
Cohesion: 0.27
Nodes (9): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip(), toIsoDate(), realFaculty, articles (+1 more)

### Community 34 - "Testimonial.tsx"
Cohesion: 0.18
Nodes (13): Avatar(), AvatarFallback(), AvatarImage(), Card(), CardContent(), CardFooter(), cx(), P (+5 more)

### Community 38 - "ContentPage"
Cohesion: 0.14
Nodes (22): CertFlip(), slugify(), CtaBand(), InnerHero(), InnerPage(), Sec(), ContentPage(), isStepTitle() (+14 more)

### Community 39 - "icons.tsx"
Cohesion: 0.15
Nodes (10): order, photos, Rect, CardCarousel(), Props, base, ChevronLeft(), ChevronRight() (+2 more)

### Community 40 - "Learning.tsx"
Cohesion: 0.31
Nodes (5): VideoTile(), Props, Rect, PlayIcon(), bentoTiles

### Community 45 - "ProgramHero.tsx"
Cohesion: 0.33
Nodes (5): ProgramHero(), ProgramHeroProps, StatNumber(), Counter(), brochureHref()

### Community 46 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 47 - "ProgramFaculty.tsx"
Cohesion: 0.27
Nodes (8): Update: common sections + specialization template, FacultyGrid(), faculty(), Img, Card(), initials(), Item, ProgramFaculty()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 260 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `EmiCalculator.tsx`, `Page.tsx`, `ArrowLink`, `package.json`, `Kit.tsx`, `InnerPage.tsx`, `next`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `ProgramAdvantage.tsx`, `content.ts`, `site.ts`, `Hero.tsx`, `FacultyArticles.tsx`, `Testimonial.tsx`, `icons.tsx`, `Learning.tsx`, `ProgramHero.tsx`, `FeeTabs.tsx`?**
  _High betweenness centrality (0.181) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08717948717948718 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `Page.tsx`, `CardSlider`, `ArrowLink`, `package.json`, `Kit.tsx`, `react`, `InnerPage.tsx`, `server.js`, `home.ts`, `curriculumData.ts`, `ProgramAdvantage.tsx`, `not-found.tsx`, `content.ts`, `site.ts`, `Hero.tsx`, `Icon`, `FacultyArticles.tsx`, `Testimonial.tsx`, `ProgramAbout.tsx`, `icons.tsx`, `Learning.tsx`, `ProgramHero.tsx`, `ProgramFaculty.tsx`?**
  _High betweenness centrality (0.160) - this node is a cross-community bridge._
- **Should `CardSlider` be split into smaller, more focused modules?**
  _Cohesion score 0.11956521739130435 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `FacultyArticles.tsx`, `CardSlider`, `ContentPage`, `Kit.tsx`, `react`, `DSU Online — CHECKPOINT (read this first in any new session)`, `icons.tsx`, `InnerPage.tsx`, `ProgramHero.tsx`, `home.ts`, `app/page.tsx`, `ProgramAdvantage.tsx`, `content.ts`, `Hero.tsx`, `Icon`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._