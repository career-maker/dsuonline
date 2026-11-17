# Graph Report - dsu online  (2026-11-17)

## Corpus Check
- 122 files · ~80,183 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 52 file(s) not represented in the graph (top: .scss 49, (none) 2, .ico 1)

## Summary
- 719 nodes · 1789 edges · 43 communities (37 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 26 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b80754d2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [...slug]/page.tsx
- Page.tsx
- next
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
- server.js
- CLAUDE.md
- ContentPage
- home.ts
- curriculumData.ts
- InnerPage.tsx
- ElectiveCombinator.tsx
- parse.ts
- FeeTabs.tsx
- ProgramAbout.tsx
- Footer.tsx
- ProgramsBand.tsx
- specViews
- section-heads.ts
- programme-faq.ts
- layout.tsx
- site.ts
- ArrowLink
- app/page.tsx
- FacultyArticles.tsx
- ProgramHero.tsx
- icons.tsx
- ProgramFaculty.tsx
- EnquiryProvider.tsx
- src_components_inner_kit_module
- FactsDrawer.tsx
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
- `Update 2026-10-28` --references--> `ArrowLink()`  [INFERRED]
  CHECKPOINT.md → src/components/ui/ArrowLink.tsx
- `Status` --references--> `faculty()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `AboutBand()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/About.tsx
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `Testimonials()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/Testimonials.tsx

## Import Cycles
- None detected.

## Communities (43 total, 6 thin omitted)

### Community 0 - "[...slug]/page.tsx"
Cohesion: 0.09
Nodes (35): nextConfig, bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve() (+27 more)

### Community 1 - "Page.tsx"
Cohesion: 0.09
Nodes (22): CertFlip(), Pic, LeaderGrid(), Tabs(), DataTable(), ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE (+14 more)

### Community 2 - "next"
Cohesion: 0.19
Nodes (7): next, WhyChoose(), Icon(), certifications, tickerItems, whyItems, iconSize

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.17
Nodes (23): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+15 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (33): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+25 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.12
Nodes (18): Checklist(), ContactRow(), CtaLink(), FacultyShowcase(), highlight(), HIGHLIGHTS, lsi, OfficeCard() (+10 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "react"
Cohesion: 0.07
Nodes (43): react, img(), InternationalLearners(), metadata, tints, ICON_BY_SLUG, ICONS, emi() (+35 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.14
Nodes (13): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest change, Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Update 2026-10-26 (latest) (+5 more)

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
Cohesion: 0.21
Nodes (21): Architecture, slugify(), CtaBand(), InnerHero(), ClassApart(), Head(), LogoWall(), Pic() (+13 more)

### Community 18 - "home.ts"
Cohesion: 0.12
Nodes (17): About(), AboutBand(), aboutCopy, aboutFeatures, aboutStats, articles, awards, BentoTile (+9 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.16
Nodes (14): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+6 more)

### Community 20 - "InnerPage.tsx"
Cohesion: 0.13
Nodes (27): Accordion(), Flow(), isInternal(), Pic(), Qa(), Crumb, InnerPage(), isFaq() (+19 more)

### Community 21 - "ElectiveCombinator.tsx"
Cohesion: 0.06
Nodes (35): AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap(), CareerFlip() (+27 more)

### Community 22 - "parse.ts"
Cohesion: 0.19
Nodes (12): cleanBlocks(), isNote(), isQuote(), FaqList(), asImg(), Faq, parseFaq(), parseFaqByQuestionMarks() (+4 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 26 - "Footer.tsx"
Cohesion: 0.23
Nodes (10): BROCHURE, BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), Program (+2 more)

### Community 27 - "ProgramsBand.tsx"
Cohesion: 0.25
Nodes (5): order, photos, Rect, Props, Rect

### Community 28 - "specViews"
Cohesion: 0.31
Nodes (10): CardGrid(), LearningCards(), lsIcon(), RoleGrid(), careers(), isP(), learningCards(), specViews() (+2 more)

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 31 - "layout.tsx"
Cohesion: 0.20
Nodes (8): lenis, fontMain, metadata, RootLayout(), EnquiryProvider(), Preloader(), SmoothScroll(), TitleReveal()

### Community 32 - "site.ts"
Cohesion: 0.15
Nodes (14): react-dom, Header(), Hit, MenuIcon(), UserIcon(), announcements, footerColumns, mainNav (+6 more)

### Community 33 - "ArrowLink"
Cohesion: 0.24
Nodes (7): Hero(), slidePos, slideSize, ArrowLink(), Props, Variant, DotsIcon()

### Community 34 - "app/page.tsx"
Cohesion: 0.21
Nodes (10): homeFaqs, HomePage(), Careers(), Faq(), Learning(), Recognitions(), Testimonials(), VideoTile() (+2 more)

### Community 35 - "FacultyArticles.tsx"
Cohesion: 0.31
Nodes (8): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip(), toIsoDate(), realFaculty, useLoopCarousel()

### Community 36 - "ProgramHero.tsx"
Cohesion: 0.33
Nodes (5): EnquireButton(), ProgramHero(), ProgramHeroProps, StatNumber(), Counter()

### Community 37 - "icons.tsx"
Cohesion: 0.17
Nodes (11): ProgramsBand(), CardCarousel(), Props, base, ChevronLeft(), ChevronRight(), P, PlayIcon() (+3 more)

### Community 38 - "ProgramFaculty.tsx"
Cohesion: 0.18
Nodes (12): Status, Update 2026-11-12: shared programme hero template, Update: common sections + specialization template, FacultyGrid(), StoryCards(), faculty(), Img, Card() (+4 more)

### Community 39 - "EnquiryProvider.tsx"
Cohesion: 0.31
Nodes (5): ProgramGuidance(), EnquiryContext, useEnquiry(), SideTabs(), PhoneIcon()

### Community 40 - "src_components_inner_kit_module"
Cohesion: 0.25
Nodes (5): icons, PayOptions(), stroke, WhyItem, WhyTabs()

### Community 41 - "FactsDrawer.tsx"
Cohesion: 0.40
Nodes (4): FactsDrawer(), OPEN_FACTS, rows, CloseIcon()

### Community 42 - "ProgramEligibility.tsx"
Cohesion: 0.60
Nodes (3): criteria(), iconOf(), ProgramEligibility()

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 238 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `[...slug]/page.tsx`, `Page.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `Testimonial.tsx`, `home.ts`, `curriculumData.ts`, `InnerPage.tsx`, `ElectiveCombinator.tsx`, `parse.ts`, `FeeTabs.tsx`, `Footer.tsx`, `ProgramsBand.tsx`, `layout.tsx`, `site.ts`, `ArrowLink`, `app/page.tsx`, `FacultyArticles.tsx`, `ProgramHero.tsx`, `icons.tsx`, `EnquiryProvider.tsx`, `src_components_inner_kit_module`, `FactsDrawer.tsx`?**
  _High betweenness centrality (0.190) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `[...slug]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09065679925994449 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `[...slug]/page.tsx`, `Page.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `react`, `Testimonial.tsx`, `server.js`, `home.ts`, `InnerPage.tsx`, `ElectiveCombinator.tsx`, `not-found.tsx`, `ProgramAbout.tsx`, `Footer.tsx`, `ProgramsBand.tsx`, `layout.tsx`, `site.ts`, `ArrowLink`, `app/page.tsx`, `FacultyArticles.tsx`, `ProgramHero.tsx`, `icons.tsx`, `ProgramFaculty.tsx`, `EnquiryProvider.tsx`, `src_components_inner_kit_module`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08505747126436781 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `[...slug]/page.tsx`, `app/page.tsx`, `FacultyArticles.tsx`, `EnquiryModal.tsx`, `ProgramHero.tsx`, `Kit.tsx`, `EnquiryProvider.tsx`, `react`, `DSU Online — CHECKPOINT (read this first in any new session)`, `ProgramEligibility.tsx`, `icons.tsx`, `ContentPage`, `home.ts`, `InnerPage.tsx`, `ElectiveCombinator.tsx`, `ProgramsBand.tsx`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._