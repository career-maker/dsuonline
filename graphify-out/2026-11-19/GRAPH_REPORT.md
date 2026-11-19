# Graph Report - dsu online  (2026-11-19)

## Corpus Check
- 133 files · ~86,751 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 57 file(s) not represented in the graph (top: .scss 54, (none) 2, .ico 1)

## Summary
- 772 nodes · 1920 edges · 48 communities (43 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `723a6742`
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
- icons.tsx
- README.md
- AGENTS.md
- server.js
- CLAUDE.md
- ContentPage
- home.ts
- curriculumData.ts
- app/page.tsx
- site.ts
- parse.ts
- ProgramAdvantage.tsx
- InnerPage.tsx
- layout.tsx
- AdmissionSteps.tsx
- ElectiveCombinator.tsx
- next
- programme-faq.ts
- ProgramLearning.tsx
- FacultyArticles.tsx
- CareerFlip.tsx
- Testimonial.tsx
- Footer.tsx
- ProgramAbout.tsx
- EnquiryProvider.tsx
- CtaBand
- ProgramsBand.tsx
- Faq.tsx
- ElectiveGrid.tsx
- CardSlider.tsx
- Interactive.tsx
- src_components_inner_kit_module
- ProgramHero.tsx
- FeeTabs.tsx
- faculty

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
- `Latest change` --references--> `specEyebrow()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ReferPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx

## Import Cycles
- None detected.

## Communities (48 total, 5 thin omitted)

### Community 0 - "EmiCalculator.tsx"
Cohesion: 0.36
Nodes (6): EMI_TENURES, EmiCalculator(), feeFor(), inr(), PG, ScratchCard()

### Community 1 - "Page.tsx"
Cohesion: 0.12
Nodes (19): CareerFlip(), Head(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, careers(), contactSocial, ELECTIVE_PHOTOS (+11 more)

### Community 2 - "CardSlider"
Cohesion: 0.26
Nodes (8): Latest change, body(), CareerShowcase(), Role, Item, ModuleCard(), ModuleCards(), CardSlider()

### Community 3 - "scrape.py"
Cohesion: 0.07
Nodes (16): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+8 more)

### Community 4 - "ArrowLink"
Cohesion: 0.10
Nodes (38): ContactForm(), empty, Phase, criteria(), iconOf(), ProgramEligibility(), empty, Phase (+30 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.11
Nodes (20): CtaLink(), DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, LearningCards(), lsi, lsIcon() (+12 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "react"
Cohesion: 0.08
Nodes (39): gsap, react, heroUsps, img(), InternationalLearners(), metadata, tints, Pic (+31 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.12
Nodes (15): 2026-10-30 inner-page photos, 2026-11-18 Dual specialisation, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status (+7 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "icons.tsx"
Cohesion: 0.15
Nodes (10): OPEN_FACTS, rows, Header(), Hit, base, CloseIcon(), DotsIcon(), MenuIcon() (+2 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 16 - "ContentPage"
Cohesion: 0.15
Nodes (22): CertFlip(), CardGrid(), Checklist(), ClassApart(), ContactRow(), LogoWall(), Pic(), Prose() (+14 more)

### Community 18 - "home.ts"
Cohesion: 0.11
Nodes (16): aboutPhotos, aboutCopy, aboutFeatures, aboutStats, articles, awards, BentoTile, blogs (+8 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.17
Nodes (13): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+5 more)

### Community 20 - "app/page.tsx"
Cohesion: 0.19
Nodes (13): Architecture, homeFaqs, HomePage(), About(), AboutBand(), Careers(), first, Hero() (+5 more)

### Community 21 - "site.ts"
Cohesion: 0.14
Nodes (14): groups, metadata, seen, SitemapPage(), specializationHref(), announcements, footerColumns, mainNav (+6 more)

### Community 22 - "parse.ts"
Cohesion: 0.23
Nodes (11): cleanBlocks(), isNote(), isQuote(), asImg(), Img, parseFaq(), parseFaqByQuestionMarks(), parseQuotes() (+3 more)

### Community 23 - "ProgramAdvantage.tsx"
Cohesion: 0.24
Nodes (9): Card(), Ico(), P, ProgramAdvantage(), advantageBanner, AdvantageCard, advantageCards, advantageLead (+1 more)

### Community 25 - "InnerPage.tsx"
Cohesion: 0.06
Nodes (56): nextConfig, base, sitemap(), bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute() (+48 more)

### Community 26 - "layout.tsx"
Cohesion: 0.16
Nodes (10): lenis, fontMain, metadata, RootLayout(), EnquiryProvider(), FactsDrawer(), NavProgress(), Preloader() (+2 more)

### Community 27 - "AdmissionSteps.tsx"
Cohesion: 0.28
Nodes (7): AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap()

### Community 28 - "ElectiveCombinator.tsx"
Cohesion: 0.31
Nodes (6): Benefit(), Elective, ElectiveCombinator(), ICON, architectCopy, DUAL_PROGRAMMES

### Community 29 - "next"
Cohesion: 0.16
Nodes (9): next, Card(), initials(), Item, Icon(), certifications, tickerItems, whyItems (+1 more)

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 31 - "ProgramLearning.tsx"
Cohesion: 0.31
Nodes (7): ICON, iconOf(), LearnItem, PHOTO, photoOf(), ProgramLearning(), TabFace()

### Community 32 - "FacultyArticles.tsx"
Cohesion: 0.29
Nodes (8): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip(), toIsoDate(), realFaculty, useLoopCarousel()

### Community 33 - "CareerFlip.tsx"
Cohesion: 0.24
Nodes (6): CareerItem, IndustryItem, bizRows, careerIndustries, industriesFor(), norm()

### Community 34 - "Testimonial.tsx"
Cohesion: 0.15
Nodes (16): Avatar(), AvatarFallback(), AvatarImage(), Card(), CardContent(), CardFooter(), cx(), P (+8 more)

### Community 35 - "Footer.tsx"
Cohesion: 0.23
Nodes (9): BROCHURE, BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), Program (+1 more)

### Community 37 - "EnquiryProvider.tsx"
Cohesion: 0.27
Nodes (6): EnquireButton(), ProgramGuidance(), EnquiryContext, useEnquiry(), SideTabs(), PhoneIcon()

### Community 38 - "CtaBand"
Cohesion: 0.19
Nodes (12): slugify(), CtaBand(), InnerPage(), Sec(), LegalPage(), ReferPage(), withEyebrow(), facts() (+4 more)

### Community 39 - "ProgramsBand.tsx"
Cohesion: 0.23
Nodes (9): order, photos, ProgramsBand(), Rect, CardCarousel(), Props, ChevronLeft(), ChevronRight() (+1 more)

### Community 40 - "Faq.tsx"
Cohesion: 0.24
Nodes (7): Faq(), Learning(), VideoTile(), FramedImage(), Props, Rect, bentoTiles

### Community 41 - "ElectiveGrid.tsx"
Cohesion: 0.50
Nodes (3): Card(), ElectiveGrid(), Item

### Community 42 - "CardSlider.tsx"
Cohesion: 0.29
Nodes (3): swiper, SPEC_EXTRAS, SpecExtra

### Community 43 - "Interactive.tsx"
Cohesion: 0.25
Nodes (8): FaqList(), LeaderGrid(), Tabs(), DataTable(), curriculum(), flat(), leaders(), Faq

### Community 44 - "src_components_inner_kit_module"
Cohesion: 0.25
Nodes (5): icons, PayOptions(), stroke, WhyItem, WhyTabs()

### Community 45 - "ProgramHero.tsx"
Cohesion: 0.39
Nodes (4): ProgramHero(), ProgramHeroProps, StatNumber(), Counter()

### Community 46 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 47 - "faculty"
Cohesion: 0.40
Nodes (6): Update: common sections + specialization template, FacultyGrid(), StoryCards(), faculty(), ProgramFaculty(), TestimonialGrid()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 262 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `EmiCalculator.tsx`, `Page.tsx`, `ArrowLink`, `package.json`, `Kit.tsx`, `icons.tsx`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `InnerPage.tsx`, `layout.tsx`, `AdmissionSteps.tsx`, `ElectiveCombinator.tsx`, `ProgramLearning.tsx`, `FacultyArticles.tsx`, `CareerFlip.tsx`, `Testimonial.tsx`, `Footer.tsx`, `EnquiryProvider.tsx`, `ProgramsBand.tsx`, `Faq.tsx`, `CardSlider.tsx`, `Interactive.tsx`, `src_components_inner_kit_module`, `ProgramHero.tsx`, `FeeTabs.tsx`?**
  _High betweenness centrality (0.180) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12307692307692308 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `Page.tsx`, `CardSlider`, `ArrowLink`, `package.json`, `Kit.tsx`, `react`, `icons.tsx`, `server.js`, `home.ts`, `curriculumData.ts`, `app/page.tsx`, `site.ts`, `ProgramAdvantage.tsx`, `not-found.tsx`, `InnerPage.tsx`, `layout.tsx`, `ElectiveCombinator.tsx`, `ProgramLearning.tsx`, `FacultyArticles.tsx`, `Testimonial.tsx`, `Footer.tsx`, `ProgramAbout.tsx`, `EnquiryProvider.tsx`, `ProgramsBand.tsx`, `Faq.tsx`, `ElectiveGrid.tsx`, `src_components_inner_kit_module`, `ProgramHero.tsx`?**
  _High betweenness centrality (0.162) - this node is a cross-community bridge._
- **Should `scrape.py` be split into smaller, more focused modules?**
  _Cohesion score 0.07265306122448979 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `FacultyArticles.tsx`, `EnquiryProvider.tsx`, `CtaBand`, `Kit.tsx`, `react`, `DSU Online — CHECKPOINT (read this first in any new session)`, `Faq.tsx`, `ProgramsBand.tsx`, `icons.tsx`, `ProgramHero.tsx`, `home.ts`, `app/page.tsx`, `ProgramAdvantage.tsx`, `InnerPage.tsx`, `ElectiveCombinator.tsx`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._