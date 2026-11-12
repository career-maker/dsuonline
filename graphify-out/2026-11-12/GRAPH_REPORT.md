# Graph Report - dsu online  (2026-11-12)

## Corpus Check
- 108 files · ~71,738 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 39 file(s) not represented in the graph (top: .scss 36, (none) 2, .ico 1)

## Summary
- 631 nodes · 1599 edges · 34 communities (31 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `54df7a1e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- InnerPage.tsx
- Kit.tsx
- layout.tsx
- scrape.py
- ArrowLink
- package.json
- Page.tsx
- compilerOptions
- international-learners/page.tsx
- DSU Online — CHECKPOINT (read this first in any new session)
- Deploy to Server (dsuonline.intersmarthosting.in)
- icons.tsx
- README.md
- AGENTS.md
- ContentPage
- CLAUDE.md
- parse.ts
- specViews
- FeeTabs.tsx
- next
- Blogs.tsx
- app/page.tsx
- slugify
- react
- EmiCalculator.tsx
- About.tsx
- home.ts
- card.tsx
- Footer.tsx
- FacultyArticles.tsx
- site.ts
- ProgramsBand.tsx
- CareerFlip.tsx

## God Nodes (most connected - your core abstractions)
1. `ContentPage()` - 72 edges
2. `react` - 54 edges
3. `next` - 37 edges
4. `ArrowLink()` - 36 edges
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
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `Testimonials()`  [INFERRED]
  CHECKPOINT.md → src/components/sections/home/Testimonials.tsx
- `Update 2026-10-27 (QA-issue round, new account)` --references--> `loadBlogPost()`  [INFERRED]
  CHECKPOINT.md → src/lib/content.ts

## Import Cycles
- None detected.

## Communities (34 total, 3 thin omitted)

### Community 0 - "InnerPage.tsx"
Cohesion: 0.07
Nodes (57): bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve(), Resolved, Accordion() (+49 more)

### Community 1 - "Kit.tsx"
Cohesion: 0.11
Nodes (18): DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS, LearningCards(), lsi, lsIcon(), OfficeCard() (+10 more)

### Community 2 - "layout.tsx"
Cohesion: 0.08
Nodes (24): lenis, react-dom, fontMain, metadata, RootLayout(), ElectiveCombinator(), EnquiryContext, EnquiryProvider() (+16 more)

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (13): git(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail(), extract() (+5 more)

### Community 4 - "ArrowLink"
Cohesion: 0.12
Nodes (31): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CallbackForm() (+23 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (31): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+23 more)

### Community 6 - "Page.tsx"
Cohesion: 0.12
Nodes (21): LeaderGrid(), Tabs(), Checklist(), ContactRow(), CtaLink(), DataTable(), Prose(), ADMISSION_PHOTOS (+13 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.10
Nodes (33): img(), InternationalLearners(), metadata, tints, ContinentCards(), compare, continents, formCountries (+25 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.17
Nodes (11): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Status, Update 2026-10-26 (latest) (+3 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "icons.tsx"
Cohesion: 0.13
Nodes (13): CardCarousel(), Props, base, ChevronLeft(), ChevronRight(), P, PlayIcon(), CarouselControls() (+5 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "ContentPage"
Cohesion: 0.16
Nodes (22): Architecture, ElectiveGrid(), ClassApart(), LogoWall(), Pic(), Split(), StoryCards(), Body() (+14 more)

### Community 16 - "parse.ts"
Cohesion: 0.22
Nodes (11): cleanBlocks(), isNote(), isQuote(), asImg(), Img, parseFaq(), parseFaqByQuestionMarks(), parseQuotes() (+3 more)

### Community 18 - "specViews"
Cohesion: 0.36
Nodes (9): CardGrid(), FacultyGrid(), RoleGrid(), careers(), faculty(), isP(), specViews(), SubView() (+1 more)

### Community 19 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 20 - "next"
Cohesion: 0.07
Nodes (15): nextConfig, next, app, { createServer }, handle, next, AdmissionSteps(), heading() (+7 more)

### Community 21 - "Blogs.tsx"
Cohesion: 0.25
Nodes (10): Blogs(), MONTHS, ord(), toSlide(), Arrow(), BlogSlider(), Slide, toIsoBlogDate() (+2 more)

### Community 22 - "app/page.tsx"
Cohesion: 0.18
Nodes (15): homeFaqs, HomePage(), About(), Careers(), Faq(), Hero(), Learning(), ProgramsBand() (+7 more)

### Community 23 - "slugify"
Cohesion: 0.25
Nodes (7): slugify(), Head(), Sec(), withEyebrow(), headFor(), SectionHead, sectionHeads

### Community 24 - "react"
Cohesion: 0.18
Nodes (11): Update 2026-10-27 (QA-issue round, new account), react, FacultyScroller(), Item, FaqList(), Reveal(), Faq, icons (+3 more)

### Community 25 - "EmiCalculator.tsx"
Cohesion: 0.60
Nodes (3): emi(), EmiCalculator(), inr()

### Community 26 - "About.tsx"
Cohesion: 0.27
Nodes (6): StatNumber(), aboutPhotos, Counter(), aboutCopy, aboutFeatures, aboutStats

### Community 27 - "home.ts"
Cohesion: 0.10
Nodes (16): slidePos, slideSize, articles, awards, BentoTile, blogs, careerTabs, certifications (+8 more)

### Community 28 - "card.tsx"
Cohesion: 0.29
Nodes (9): Avatar(), AvatarFallback(), AvatarImage(), Card(), CardContent(), CardFooter(), cx(), P (+1 more)

### Community 29 - "Footer.tsx"
Cohesion: 0.35
Nodes (7): BrochureForm(), Footer(), FooterGroup(), subscribe(), ChevronDown(), DownloadIcon(), footerColumns

### Community 30 - "FacultyArticles.tsx"
Cohesion: 0.31
Nodes (8): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip(), toIsoDate(), Icon(), realFaculty

### Community 31 - "site.ts"
Cohesion: 0.20
Nodes (8): tickerItems, announcements, NavLink, showAnnouncement, showFacultyInsights, showHomeBlogs, showHomeCareers, homeTestimonials

### Community 32 - "ProgramsBand.tsx"
Cohesion: 0.29
Nodes (4): order, photos, Rect, iconSize

### Community 33 - "CareerFlip.tsx"
Cohesion: 0.40
Nodes (3): CareerFlip(), CareerItem, IndustryItem

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 203 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `InnerPage.tsx`, `Kit.tsx`, `layout.tsx`, `ArrowLink`, `package.json`, `Page.tsx`, `international-learners/page.tsx`, `icons.tsx`, `FeeTabs.tsx`, `next`, `Blogs.tsx`, `app/page.tsx`, `EmiCalculator.tsx`, `About.tsx`, `home.ts`, `card.tsx`, `Footer.tsx`, `FacultyArticles.tsx`, `ProgramsBand.tsx`, `CareerFlip.tsx`?**
  _High betweenness centrality (0.192) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0711849957374254 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `InnerPage.tsx`, `Kit.tsx`, `layout.tsx`, `ProgramsBand.tsx`, `ArrowLink`, `package.json`, `Page.tsx`, `international-learners/page.tsx`, `icons.tsx`, `Blogs.tsx`, `app/page.tsx`, `react`, `home.ts`, `card.tsx`, `Footer.tsx`, `FacultyArticles.tsx`, `site.ts`?**
  _High betweenness centrality (0.153) - this node is a cross-community bridge._
- **Should `Kit.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10822510822510822 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `InnerPage.tsx`, `Kit.tsx`, `layout.tsx`, `ProgramsBand.tsx`, `Page.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `ContentPage`, `Blogs.tsx`, `app/page.tsx`, `About.tsx`, `home.ts`, `FacultyArticles.tsx`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._