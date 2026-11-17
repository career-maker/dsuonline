# Graph Report - dsu online  (2026-11-17)

## Corpus Check
- 122 files · ~80,100 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 52 file(s) not represented in the graph (top: .scss 49, (none) 2, .ico 1)

## Summary
- 718 nodes · 1788 edges · 39 communities (33 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 26 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `84468fc4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- InnerPage.tsx
- Page.tsx
- Icon
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
- server.js
- CLAUDE.md
- ContentPage
- home.ts
- curriculumData.ts
- Interactive.tsx
- ProgramAdvantage.tsx
- parse.ts
- FeeTabs.tsx
- ProgramAbout.tsx
- Blogs.tsx
- ProgramsBand.tsx
- specViews
- section-heads.ts
- programme-faq.ts
- Learning.tsx
- icons.tsx
- Careers.tsx
- app/page.tsx
- FacultyArticles.tsx
- ArrowLink
- next
- ProgramFaculty.tsx

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
- `Architecture` --references--> `ReferPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx
- `Architecture` --references--> `ContentPage()`  [INFERRED]
  CHECKPOINT.md → src/components/inner/Page.tsx

## Import Cycles
- None detected.

## Communities (39 total, 6 thin omitted)

### Community 0 - "InnerPage.tsx"
Cohesion: 0.07
Nodes (55): nextConfig, bannerBlurb(), bannerDuration(), generateMetadata(), generateStaticParams(), InnerRoute(), Params, resolve() (+47 more)

### Community 1 - "Page.tsx"
Cohesion: 0.09
Nodes (17): CertFlip(), Pic, ADMISSION_PHOTOS, BANNERS, BANNERS_MOBILE, contactSocial, ELECTIVE_PHOTOS, P (+9 more)

### Community 2 - "Icon"
Cohesion: 0.25
Nodes (7): Architecture, AboutBand(), WhyChoose(), Icon(), certifications, whyItems, iconSize

### Community 3 - "scrape.py"
Cohesion: 0.08
Nodes (14): git(), lap(), local(), main(), optimize_image(), cfmail(), clean(), decode_mail() (+6 more)

### Community 4 - "EnquiryModal.tsx"
Cohesion: 0.13
Nodes (26): ContactForm(), empty, Phase, empty, Phase, ReferForm(), V, CountryPicker() (+18 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (32): eslintConfig, dependencies, gsap, lenis, next, react, react-dom, sass (+24 more)

### Community 6 - "Kit.tsx"
Cohesion: 0.11
Nodes (22): Checklist(), ClassApart(), ContactRow(), CtaLink(), DocList(), FacultyShowcase(), highlight(), HIGHLIGHTS (+14 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "international-learners/page.tsx"
Cohesion: 0.09
Nodes (37): gsap, img(), InternationalLearners(), metadata, tints, CallbackForm(), Phase, programmes (+29 more)

### Community 9 - "DSU Online — CHECKPOINT (read this first in any new session)"
Cohesion: 0.14
Nodes (13): 2026-10-30 inner-page photos, DSU Online — CHECKPOINT (read this first in any new session), Latest change, Latest commits (newest last), NEXT STEPS (do top item first when the user says "continue"), Open questions asked earlier (defaults used), Run locally, Update 2026-10-26 (latest) (+5 more)

### Community 10 - "Deploy to Server (dsuonline.intersmarthosting.in)"
Cohesion: 0.33
Nodes (5): Crawling & Beta Stage (SEO), Deploy to Server (dsuonline.intersmarthosting.in), Notes, Quick Deploy Command, SSH & Server Details (For Any AI Agent / Developer)

### Community 11 - "react"
Cohesion: 0.11
Nodes (19): react, ICON_BY_SLUG, ICONS, emi(), EmiCalculator(), inr(), Avatar(), AvatarFallback() (+11 more)

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 14 - "server.js"
Cohesion: 0.33
Nodes (4): app, { createServer }, handle, next

### Community 16 - "ContentPage"
Cohesion: 0.19
Nodes (17): Status, slugify(), Head(), Sec(), Split(), Body(), certificates(), ContentPage() (+9 more)

### Community 18 - "home.ts"
Cohesion: 0.11
Nodes (16): aboutPhotos, slidePos, slideSize, aboutCopy, aboutFeatures, aboutStats, awards, BentoTile (+8 more)

### Community 19 - "curriculumData.ts"
Cohesion: 0.16
Nodes (14): bad, buildCurriculum(), CurData, CurElective, CurRow, CurSem, fix(), LETTERS (+6 more)

### Community 20 - "Interactive.tsx"
Cohesion: 0.25
Nodes (8): FaqList(), LeaderGrid(), Tabs(), DataTable(), curriculum(), flat(), leaders(), Faq

### Community 21 - "ProgramAdvantage.tsx"
Cohesion: 0.07
Nodes (30): AdmissionSteps(), heading(), ic, icons, Step, StepCard(), wrap(), CareerFlip() (+22 more)

### Community 22 - "parse.ts"
Cohesion: 0.24
Nodes (10): cleanBlocks(), isNote(), isQuote(), asImg(), parseFaq(), parseFaqByQuestionMarks(), parseQuotes(), Quote (+2 more)

### Community 23 - "FeeTabs.tsx"
Cohesion: 0.43
Nodes (4): dash(), FeeTable(), feeTitle(), FeeTabs()

### Community 26 - "Blogs.tsx"
Cohesion: 0.24
Nodes (10): Blogs(), MONTHS, ord(), toSlide(), Arrow(), BlogSlider(), Slide, toIsoBlogDate() (+2 more)

### Community 27 - "ProgramsBand.tsx"
Cohesion: 0.40
Nodes (3): order, photos, Rect

### Community 28 - "specViews"
Cohesion: 0.31
Nodes (10): CardGrid(), LearningCards(), lsIcon(), RoleGrid(), careers(), isP(), learningCards(), specViews() (+2 more)

### Community 30 - "programme-faq.ts"
Cohesion: 0.40
Nodes (4): faqFor(), FaqInput, FaqItem, rupees()

### Community 31 - "Learning.tsx"
Cohesion: 0.53
Nodes (3): VideoTile(), PlayIcon(), bentoTiles

### Community 32 - "icons.tsx"
Cohesion: 0.06
Nodes (40): lenis, react-dom, fontMain, metadata, RootLayout(), ProgramGuidance(), BrochureForm(), EnquiryContext (+32 more)

### Community 33 - "Careers.tsx"
Cohesion: 0.29
Nodes (4): Props, Rect, careerTabs, recruiters

### Community 34 - "app/page.tsx"
Cohesion: 0.31
Nodes (10): homeFaqs, HomePage(), About(), Careers(), Faq(), Hero(), Learning(), ProgramsBand() (+2 more)

### Community 35 - "FacultyArticles.tsx"
Cohesion: 0.19
Nodes (14): avatar(), FacultyArticles(), FacultyCard(), FacultyCardData, FacultyStrip(), toIsoDate(), CardCarousel(), Props (+6 more)

### Community 36 - "ArrowLink"
Cohesion: 0.12
Nodes (17): Benefit(), Elective, ElectiveCombinator(), ICON, EnquireButton(), criteria(), iconOf(), ProgramEligibility() (+9 more)

### Community 37 - "next"
Cohesion: 0.25
Nodes (5): next, Testimonials(), initialOf(), TestimonialShowcase(), showAnnouncement

### Community 38 - "ProgramFaculty.tsx"
Cohesion: 0.21
Nodes (10): Update 2026-11-12: shared programme hero template, Update: common sections + specialization template, FacultyGrid(), StoryCards(), Img, Card(), initials(), Item (+2 more)

## Knowledge Gaps
- **5 isolated node(s):** `sass`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 237 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `InnerPage.tsx`, `Page.tsx`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `home.ts`, `curriculumData.ts`, `Interactive.tsx`, `ProgramAdvantage.tsx`, `FeeTabs.tsx`, `Blogs.tsx`, `ProgramsBand.tsx`, `Learning.tsx`, `icons.tsx`, `Careers.tsx`, `app/page.tsx`, `FacultyArticles.tsx`, `ArrowLink`, `next`?**
  _High betweenness centrality (0.188) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ContentPage()` (e.g. with `Architecture` and `isP()`) actually correct?**
  _`ContentPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `sass`, `@types/node`, `@types/react` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `InnerPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07327001356852103 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `InnerPage.tsx`, `Page.tsx`, `Icon`, `EnquiryModal.tsx`, `package.json`, `Kit.tsx`, `international-learners/page.tsx`, `react`, `server.js`, `home.ts`, `ProgramAdvantage.tsx`, `not-found.tsx`, `ProgramAbout.tsx`, `Blogs.tsx`, `ProgramsBand.tsx`, `icons.tsx`, `Careers.tsx`, `app/page.tsx`, `FacultyArticles.tsx`, `ArrowLink`, `ProgramFaculty.tsx`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **Should `Page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08831908831908832 - nodes in this community are weakly interconnected._
- **Why does `ArrowLink()` connect `ArrowLink` to `InnerPage.tsx`, `icons.tsx`, `Icon`, `FacultyArticles.tsx`, `EnquiryModal.tsx`, `app/page.tsx`, `Kit.tsx`, `international-learners/page.tsx`, `DSU Online — CHECKPOINT (read this first in any new session)`, `home.ts`, `ProgramAdvantage.tsx`, `Blogs.tsx`, `ProgramsBand.tsx`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._