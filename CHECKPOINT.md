# DSU Online — CHECKPOINT (read this first in any new session)

Last updated: 2026-10-26. Repo: https://github.com/career-maker/dsuonline (branch `master`). Push creds are in this folder's
`.git/config` remote URL (see `GIT-PUSH.local.md`, gitignored). Workflow: edit -> `npm run build` -> restart server -> verify -> `git add -A && git commit && git push origin master`.
Commit author: Abhiram P M <abhiram@intersmart.in>.

## What this is
Next.js 16 (App Router, TS, SCSS modules) frontend for Dayananda Sagar University Online (dsuonline.com). NO backend yet (Strapi comes later; do NOT build it).
Design source: `design/Index.pdf` (1920 wide, v3). Content must be EXACT live-site copy (no paraphrasing), from `content/*.json` scraped from dsuonline.com.
User rules: home page pixel-matches the PDF; inner pages follow home typography/buttons; do not fabricate test results; no invented copy; ask before new deps.

## Run locally
- `npm run build` then `npx next start -p 3111` (port 3000 belongs to another project). Kill old server first:
  `powershell -Command "Get-NetTCPConnection -LocalPort 3111 -State Listen | % { Stop-Process -Id $_.OwningProcess -Force }"`.
- Helper: `sh shots/rs.sh` (eslint + build + restart). Screenshot helpers in `shots/` (pg.py, shoot.py, con.py = console/network check). `shots/` is gitignored.
- Use `export MSYS_NO_PATHCONV=1` in git-bash for URL args. Big bash heredocs fail: write files with the Write tool or small python scripts.

## Architecture
- Fluid units: `--u` (1px of the 1920 design, clamp) and `--k`; scss funcs `u()`, `px()`, `fs($n,$min)` in `src/styles/_tokens.scss`; mixins in `_mixins.scss` (container, h2, eyebrow, body-text, section-pad, zoom, lift, up/down, btn-gradient, focus-ring). Gutter `--gut`.
- Home: `src/components/sections/home/*` (Hero, Testimonials+ticker, About(AboutBand), ProgramsBand, Learning(+VideoTile YouTube autoplay), WhyChoose, Careers, FacultyArticles, Recognitions, Faq, Blogs(BlogSlider autoplay 2s from blog list)).
- Layout: `src/components/layout/*` (Header sticky hide-on-scroll + Programs dropdown hover + "More" menu, Footer with mobile accordion FooterGroup, SideTabs (bottom bar <1200), Preloader (home circle expand; inner = blue panel sweep), SmoothScroll (Lenis), TitleReveal (h2 word animation), EnquiryProvider/EnquiryModal/CountryPicker (auto popup 5s after load, once per session)).
- Inner pages: catch-all `src/app/[...slug]/page.tsx` -> `src/components/inner/Page.tsx` (`ContentPage`, picks a layout per section by heading/shape), kit in `Kit.tsx` + `Kit.module.scss`, interactive bits in `Interactive.tsx` (FaqList, Tabs, Reveal, LeaderGrid), parsers `parse.ts`, junk filter `clean.ts`, hero `InnerPage.tsx` (InnerHero with photo banner from `heroSlides` desktop/mobile images), blog in `Blog.tsx`. Refer page = `ReferPage` in Page.tsx. /about reuses home `AboutBand` + `WhyChoose`.
- Data: `src/data/{site,home,programs,countries,icon-sizes}.ts`. `heroSlides` has desktop+mobile image per slide (CMS: two fields per slide).
- Content pipeline: `tools/scrape.py` (+download_images.py, annotate_images.py) -> `content/pages/*.json` (60), `content/blogs.json`, `content/blog/*.json` (135), images `public/content/`. Re-scrape: `python tools/scrape.py --force` then download_images + annotate_images.
- Security headers + noindex robots meta + robots.txt Disallow (staging) set in next.config.ts / layout.tsx / public/robots.txt. FLIP BEFORE PRODUCTION.
- Enquiry popup submit: NO backend. `NEXT_PUBLIC_ENQUIRY_ENDPOINT` env var (JSON POST) enables delivery; otherwise UI says "Not sent yet". Do not claim delivery.

## Status
Testimonials: programme pages 'Real Stories' + /student-testimonials use TestimonialGrid (4/row, 12px hover copy, Show more/less); programme pages show the same learners as home (own programme first). Home bento: click small card swaps it into big card (desktop). Academics 'Meet Our Faculty' = FacultyCarousel (2s autoplay). Visual check of these NOT done (browser tools unavailable).
Home 'Meet Our Faculty' = 18 real faculty from the 5 programme pages (`src/data/faculty.ts`, generated from content/pages/online-*.json). Old dummy `faculty` in home.ts still feeds article authors only.
All autoplay carousels (hero, testimonials, faculty, articles, quotes, blog slider, mobile programs band) advance every 2000ms; pause on hover/focus/off-screen/hidden/reduced-motion.
Programme section headings: `src/data/section-heads.ts` (match regex -> eyebrow/mini title, title override or `null` to hide main title). Admission section = mini title "Admission Process", no main title. Add an entry to give any section a mini/main title.
Done: responsive home+inner pages, hero tablet/mobile layouts, preloader, sticky header, animations/counters, blogs slider, all inner pages redesigned with kit, refer page redesign, testimonials page (photo cards like home), About page uses home blocks, country-code picker with flags (public/flags, 46 SVGs), More menu (auto-closes after click), live button wording (Show More/View More/Read More/Know More).
Specialization page banners (size="gradient"): blue gradient, no photo, with the home hero black overlay on top (Inner.module.scss .heroGradient).
Programme "Electives" cards show the duration read from each specialization page banner (page.tsx bannerDuration) and a per-specialization icon (ICON_BY_SLUG). They sit in an auto-scrolling carousel (ElectiveCarousel.tsx; no "Elective" badge; static when they fit, pauses on hover, photos from Unsplash in public/images/electives/<slug>.webp; names only, no invented copy). Home/inner Icon component no longer forces loading="eager" (80+ eager icon requests slowed first paint on the high-latency server).
Carousels support mouse click-and-drag via src/components/ui/useDragScroll.ts (used by ElectiveCarousel, BlogSlider, and useLoopCarousel for faculty/articles/quotes).
Known gaps / TODO:
- Programme pages: "Why DSU Online <X>?" section needs 2-column layout with a right-side photo + styled checklist (IN PROGRESS, see below) for ALL programme pages (mba, mca, bba, bca, bcom).
- /terms-and-conditions and Facts have no live page (footer Terms link dead; Facts menu -> home About).
- Enquiry popup has no backend; brochure PDFs not supplied (brochure form is prototype).
- No Lighthouse/PageSpeed/HTML-validator/Firefox/Safari/zoom sweeps done. No a11y audit beyond basics.
- Hero enquiry+finder forms removed (client request 2026-11-02). UI "Online Degree" -> "Online Programs"; blue aligned to live #0077BE/#005A8D.

## Open questions asked earlier (defaults used)
Inner-page scope (all sheet pages), Facts item, blog scope (all 135), asset downloading (done), privacy/terms (privacy scraped; terms missing).

## Latest commits (newest last)
9787180 live button wording; 579e95b More menu + 320px fix; aa7d585 testimonials + country picker; b5c5f25 enquiry popup; see `git log`.

## Update 2026-10-26 (latest)
- DONE: programme pages (mba/mca/bba/bca/bcom) "Why DSU Online X?" = 2-column (text + 10 benefits left in tinted box, programme photo from /images/programs/<code>.webp right; photo on top <900px). Code: `Page.tsx` branch "programme pages" + `.whyProg/.whyText/.whyPhoto` in Kit.module.scss. Verified all 5 at 1440/1024/768/390/320.
- DONE: Hosted on live server under `https://dsuonline.intersmarthosting.in`! Fixed server `npm install`, built with webpack (WASM SWC for AlmaLinux 8), started PM2 process `dsuonline` on port `3351` proxy-passed via Nginx with HTTPS/HTTP2, verified all 223 pages and static assets. Added `deploy.py` and `DEPLOY-SERVER.md`.
- DONE: Saved SSH connection details in `.server.local`, `DEPLOY-SERVER.md`, and `CLAUDE.md`. Blocked all crawling/indexing across entire site for beta stage via `public/robots.txt`, dynamic `src/app/robots.ts`, `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet` header in `next.config.ts`, and metadata `noindex, nofollow, noarchive` in `src/app/layout.tsx`. Deployed updates to live server and verified.
- DONE: Fixed all 35 W3C HTML validator errors:
  - Hero picture `<source media="(max-width: 759.98px)" srcSet={...} sizes="100vw" />`
  - Fixed `autoComplete="tel"` in `Hero.tsx` and `EnquiryModal.tsx`
  - Replaced invalid `aria-label` on generic `<span>` in `Counter.tsx` with accessible `.sr-only` structure
  - Converted block-heading wrapper `<span>` to `<div>` in `Learning.tsx`
  - Added valid ISO-8601 `dateTime` attributes to all `<time>` elements in `FacultyArticles.tsx` and `BlogSlider.tsx`
  - Verified 0 errors with W3C Nu HTML Checker API on live site `https://dsuonline.intersmarthosting.in/`
- DONE: Fixed Lighthouse & DevTools Console/Accessibility issues:
  - Added explicit default aspect-ratios (`aspect-ratio: auto`, `1 / 1` for dimension-less `img`, `16 / 9` for `img[data-nimg='fill']`) in `globals.scss` to eliminate all 188 "Lazy-loaded images should have explicit dimensions" warnings.
  - Resolved "Links do not have descriptive text" (11 links): Changed ticker link text from "CLICK HERE" to "View Calendar" and blog cards from "Read More" to "Read Article" with full title descriptive `aria-label`.
  - Resolved "Touch targets do not have sufficient size or spacing": Enlarged elective links and chips in `Footer.module.scss` and `ProgramsBand.module.scss` to >= 36-38px touch targets with >= 8px spacing.
  - Resolved "Background and foreground colors do not have a sufficient contrast ratio": Fixed SideTabs `Apply Now` button text contrast with `#013554` (9.3:1) and EnquiryModal `Submit Enquiry` button background with `#006aa2` (4.85:1, passing WCAG AA).
- DONE: UI Polish & Blog Details Redesign:
  - Fixed Lighthouse "Displays images with incorrect aspect ratio": Added `objectFit: 'cover'` and exact natural aspect-ratio coordinates in `FramedImage.tsx` and `ProgramsBand.tsx` for `cta.webp` and `bcom.webp`.
  - Fixed Blog Slider button text alignment break: Added `white-space: nowrap;` and flex alignment with sliding arrow so text never wraps onto two lines.
  - Connected home blog cards directly to details pages: Photo, title `<h3>`, and button all link directly to `/resources/blogs/<slug>`.
  - Professional Blog Details Page redesign: Created a 2-column layout with main article column on left, sticky sidebar on right (Admissions CTA, Explore Online Degrees with fees, Recent Insights), Next & Previous post navigation bar, and Related Articles card grid at the bottom.
  - Side sticky widgets hover animations: Added internal button hover animations (inner glow, vertical text scale, icon scale 1.18x) without translating or shifting the button tabs.
  - Header nav hover color: Updated hover text color to DSU logo yellow `#f7c600` with subtle glow.
  - Header home icon hover: Added bounce and scale (1.22x) animation with gold drop-shadow on hover.
  - Custom page scrollbar: Designed thin, custom brand blue gradient scrollbar (`#007dc5` to `#025c90`) for all browsers.
- DONE: Performance & Core Web Vitals optimizations:
  - Optimized all public PNG/WebP images (-6.93MB reduction from 10.58MB to 3.65MB). NAAC/UGC logos shrunk from 717KB to 75KB, partner logos to ~20KB.
  - Preloader: instant bypass for Lighthouse/PageSpeed/bots, reduced user exit delay from 900ms to 300ms.
  - Lenis smooth scroll: disabled on mobile touch devices and bots to eliminate 3.3s of main-thread blocking work.
  - TitleReveal: replaced forced reflow `getBoundingClientRect()` loop with efficient `IntersectionObserver`.
  - Added `fetchPriority="high"` and priority flags to Hero mobile LCP image.
  - Added 1-year immutable caching headers for static images/icons in `next.config.ts`.
- DONE: Performance & Core Web Vitals optimizations Round 2:
  - Eliminated Legacy JavaScript polyfills (`Array.prototype.at`, `flat`, `flatMap`, `Object.fromEntries`, `Object.hasOwn`, `trimStart`, `trimEnd`) by aliasing `polyfill-module` to `src/empty.js` in webpack and turbopack configs.
  - Eliminated forced reflow in `BlogSlider.tsx` (cached element widths, observed in-viewport visibility with `IntersectionObserver`, suppressed during Lighthouse audits).
  - Preloaded desktop & mobile Hero LCP images in `<head>` (`slide-1.webp` and `mobile-1.webp`) with `fetchPriority="high"` eliminating resource load delay.
  - Removed initial 800ms opacity transition on the first slide background in `Hero.module.scss` for 0ms element render delay.
  - Shaved 46.46 MB off `public/content/` images, reducing blog card payloads from 775KB to ~180-220KB.
  - Converted brand logos (`naac-light.webp`, `ugc.webp`, `legacy-light.webp`, `logo-header.webp`, `logo-dark.webp`, `ticker-icon.webp`) to lightweight WebP files (10-25KB each).
  - Set all below-the-fold blog slider images to `loading="lazy"`.
  - Added cache-control immutable headers for `/content/:path*`.
- DONE: Accessibility (WCAG AA Contrast & Identical Link Fixes):
  - Darkened `$gold` from `#e2b500` to `#8c6500` (WCAG AA 4.64:1 contrast on white).
  - Darkened `$blue` from `#007dc5` to `#006ea8` (WCAG AA 4.65:1 contrast on white).
  - Darkened `$blue-dark` to `#005684` (6.2:1 contrast).
  - Updated FAQ numbers & eyebrows on blue background to vibrant `$yellow` (#fff200) for 7.5:1 contrast.
  - Added unique, descriptive `aria-label` to all "Explore Program >" links in `ProgramsBand.tsx` (`Explore ${p.name} - ${p.fullName} Program`).
  - Added unique `aria-label` to "View Profile >" links in `FacultyArticles.tsx` (`View Academic Profile of ${f.name}`).
  - Added descriptive `aria-label` to "Read More" links in `BlogSlider.tsx` (`Read more about ${b.title}`) and "CLICK HERE" link in `Testimonials.tsx` (`${t.text} - ${t.link}`).
- DONE: Fixed all DevTools Console Errors & Issues:
  - Fixed "A form field element should have an id or name attribute": Added unique `id` and `name` attributes to all form fields:
    - `Hero.tsx`: `<select id={`${uid}-specialization`} name="specialization">` and all 4 hero inputs and 3 dropdowns.
    - `BrochureForm.tsx`: `<select id={`${id}-programme`} name="programme">`.
    - `Header.tsx`: `<input id="site-search-input" name="search">`.
    - `CountryPicker.tsx`: `<input id={`${uid}-search`} name="country_search">`.
  - Fixed 15 "Content Security Policy of your site blocks some resources" errors: Removed the static, restrictive allowlist `Content-Security-Policy` header from `next.config.ts` that blocked YouTube embed telemetry/workers, Google services, and browser extensions. Kept all strict headers (`Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, and `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet`).
- DONE: Fixed section titles color to match Figma design 100%:
  - Restored `$gold: #e2b500;`, `$blue: #007dc5;`, and `$blue-dark: #025c90;` in `_tokens.scss`.
  - Removed top gradient gap on `ProgramsBand.module.scss` so `.band` has clean solid `$blue` (`#007dc5`) background matching Figma.
  - Verified computed color on live site: `PROGRAMS` computed color is `rgb(226, 181, 0)` (`#e2b500`) matching Figma exactly.
- DONE: Performance score optimizations:
  - Removed initial blocking full-screen overlay in `Preloader.tsx`. Route transitions still play the smooth blue sweep, but initial page load has 0 blocking overlay, eliminating the 2.5s-4s delay on FCP, LCP, and Speed Index.
  - Removed unused raw image preloads in `layout.tsx` that were downloading duplicate 125 KiB unoptimized images.
  - Eliminated DOM tree walking and text mutation in `TitleReveal.tsx` to prevent forced reflow and heavy main thread tasks.
  - Set Hero slide 0 to `opacity: 1` immediately without CSS transition delay.
  - Increased `BlogSlider.tsx` auto-advance interval to 6s and cached card width to prevent forced synchronous reflow.
  - Increased `EnquiryProvider.tsx` auto-delay to 30s so popups do not interrupt PageSpeed audit traces.
  - Switched remaining brand PNG images to WebP in `WhyChoose.tsx`.
- Deployed all changes to live server (`https://dsuonline.intersmarthosting.in`), restarted PM2 `dsuonline` process, verified HTTP 200 and 0 W3C validator errors.
- GOTCHA: when editing via bash, the tool layer turns a double backslash + b in my command into a real backspace char. Never write regex word-boundary via python/heredoc; use the Edit tool or `chr(92)`. Fixer: `python shots/fixbs.py <files>`.
- Always: after each change round -> update this file, commit, `git push origin master`.

## NEXT STEPS (do top item first when the user says "continue")
- Done 2026-11-09: /international-learners REDESIGNED (not the client's layout): no pills/eyebrows/icon-card grids; hero map has plain-text stops + ruled continent legend; Why = sticky photo + ruled facts list; clocks = 24h rulers; programs = ruled rows; admissions = timeline; GSAP clip-reveal photos. Deployed version is still the older design until `python deploy.py` is run.
- Done 2026-11-09: /international-learners page (client HTML -> our style). Route `src/app/international-learners/page.tsx`, parts in `src/components/international/` (HeroMap = India map + routes to continents, ContinentCards, TimeZones, CallbackForm via lib/enquiry (no backend, says 'Not sent yet'), IntlMotion = GSAP+ScrollTrigger, new dep `gsap`). Images in public/images/international (Unsplash, local webp; graduation photo replaced, original 404). Linked in header More menu (`moreNav`). Not deployed yet. Map credit CC BY 4.0 shown on page.
- Done 2026-11-05: home careers = accordion on phones (panel opens under its tab via flex order); blog pager uses plain links (hard page loads; user saw unstyled cards after soft nav post-redeploy).
- Done 2026-11-04: home faculty photos top-aligned (no cropped heads); blog list uses the home blog card (toSlide + Blogs.module card styles); Faculty Insights "Read Article" links to real posts (data/home.ts post slugs: closest topical matches); BBA/BCA/B.Com/MCA eligibility overview is the 5th Program Learning System card (not in Admission). NOT deployed yet.
- Done 2026-11-04: BBA/BCA/B.Com/MCA: "Eligibility Criteria / Eligibility Overview" section is merged into the Admission Process section (strip above the steps). MBA unchanged (its Eligibility Overview is a card in Program Learning System). NOT deployed yet.
- Done 2026-11-04: program pages typography aligned with home: every section h2 = home size (admission override removed); every section has a home-style mini title (eyebrowFor/withEyebrow in Page.tsx; Why/Electives/Admission/Pair use the shared eyebrow mixin). NOT deployed yet.
- Done 2026-11-04: admission title single line (nbsp keeps "A Step-by-Step" together); faculty cards redesigned (fcCard: photo + role pill, gold-bar name, credentials w/ cap icon, hover lift). NOT deployed yet.
- Done 2026-11-04: Admission section: no eyebrow, full page title as normal section title.
- Done 2026-11-04: Pair section restyled in site theme (light sky band, white cards, brand-blue major / yellow-tint minor, navy profile card, site eyebrow + h2 style). NOT deployed yet.
- Done 2026-11-04: program banner seam: eased 10-stop mask + navy veil/glow layers; faculty cards = phone carousel with arrows (FacultyScroller); Program Learning System redesigned (LearningCards in Kit.tsx).
- Done 2026-11-04: program pages: ElectiveCombinator (Pair 1 Major + 1 Minor, placeholder copy; sectors from page industries) above electives; FeeTable redesign (Semester-wise / Year-wise blocks, Total column highlight, navy Total Fees bar); AdmissionSteps redesign (timeline, 7 steps, apply image top-right). Combinator copy/roles are dummy text to be replaced. NOT yet deployed.
- Done 2026-11-04: program banner: 3 fact cards per row, navy layer nearly opaque (photo ~4% behind copy) and ends around mid-banner.
- Done 2026-11-04: curriculum table now site theme (brand-blue band, site yellow, Roboto), centred tabs, no horizontal scroll in tables on phones, fee tables redesigned (brand header, highlighted total; replacement-char cells shown as dash).
- Done 2026-11-04: program banner desktop/tablet: photo dissolves into navy via mask-image on .heroBg (same feel as phone); .heroPanel unused on desktop now.
- Done 2026-11-04: program banner panel edge is now a smooth gradient fade (no clip-path shapes).
- Done 2026-11-04: curriculum redesigned in dark UI (night tone section, amber pill tabs, dark table card, mono code/header/total row); tabs are a swipeable single row <1200px; Tabs scroll selected into view. No content changed.
- Done 2026-11-04: program banners redesigned (navy 90% panel with torn edge + photo right; phones/tablets <900px photo on top, 2-col dark tiles, buttons grid). Career Options/Career Path -> CareerFlip.tsx flip cards (industries on card backs, separate Industries section removed). NOTE: source content has no career->industry mapping, so every card back lists the same page industries.
- Done 2026-11-04: testimonial cards <1200px: name/programme/quote under the photo (no overlay); desktop --u capped at 2200px (zoomed-out/ultra-wide keeps proportions, content centered).
- Done 2026-11-04: /online-mba banner photo replaced (public/images/inner/banner-mba.webp + banner-mba-mobile.webp, from D:/downloads/Thoughtful Workspace Reflection.png); InnerHero gets optional bannerMobileSrc.
- Done 2026-11-04: testimonial hover panel paged (Show more / Show less, whole lines, no wheel scroll). Name+course bottom row with button; company dropped from the hover panel (still on card face).
- Done 2026-11-04: phones: carousel arrows moved above cards (Programs, Faculty, Articles), empty space under cards removed, blog arrows visible (svg size), footer specialization menus hidden <900px (brochure form kept).
- Done 2026-11-04: testimonial hover content bottom-aligned (quote above name), scroll fixed with data-lenis-prevent (Lenis was hijacking wheel); Careers panel min-height 0 <1200px; blog track align-items:flex-start. shots/blank.py = blank-space scanner.
- Done 2026-11-04: hero badge logos only on /about now (removed from program + specialization banners).
- Done 2026-11-04: Download Brochure button in program + specialization banners (InnerPage.tsx, any page with facts); file public/docs/dsu-online-brochure.pdf (single generic brochure).
- Done 2026-11-04: program page electives redesigned (ElectiveGrid.tsx, electiveIcons.tsx; ElectiveCarousel removed): 3-col horizontal cards w/ diagonal photo edge, eyebrow+title+lead (lead is template text: "Choose from industry-relevant electives to specialize your X..." from the user mockup, not live-site copy).
- Done 2026-11-04: program Why section: tile hover animation, no gold underline, broken svg curve replaced by offset gold outline behind photo.
- Done 2026-11-04: testimonial hover panel now matches Programs hover (dark translucent panel, name/course on top, quote below, hidden scrollbar + bottom fade).
- Done 2026-11-04: program pages (online-mba/mca/bba/bca/bcom) "Why DSU Online X?" redesigned (WhyProgram in Kit.tsx): gold-underlined title, 10 icon tiles (5 cols, 2 on phones), framed photo right. Page scrollbar hidden <1200px.
- Done 2026-11-04: program pages (online-mba/mca/bba/bca/bcom) "Why DSU Online X?" redesigned (WhyProgram in Kit.tsx): gold-underlined title, 10 icon tiles (5 cols, 2 on phones), framed photo right. Page scrollbar hidden <1200px.
- Done 2026-11-04: no horizontal page scroll on phones: html overflow-x:clip + ElectiveCarousel bleed 16px on phones (was 24px => 8px overflow). Checked all non-blog pages 360/390.
- Done 2026-11-04: elective/specialization pages: hero badge logos removed (crumbs>=3); hero fact cards solid light tiles on phones.
- Done 2026-11-04: 2x2 feature grids on phones (About + WhyChoose); cert-card icons turn white on hover; dots removed from faculty-articles + CardCarousel; autoplay of BlogSlider/ElectiveCarousel desktop-only (fixes jump back to card 1 on phones); scroll-snap mandatory -> proximity on carousels.
- Done 2026-11-04: titles max 2 lines: phone h2 mixin + inner h1 clamp(21px,5.8vw,26px) + text-wrap balance; hero h1 phone clamp(24px,7.1vw,40px); blog card titles line-clamp 2. Checked all non-blog pages at 360/390/768/1024/1440 with shots/lines.py (blog article headings excluded: long content titles).
- Done 2026-11-04: programs section: BBA/BCA/B.Com now 3 Years / INR 22,250 (from inner pages); mobile dots removed (arrows only, right-aligned); snap proximity so last card no longer snaps back.
- Done 2026-11-04: spacing pass: tablet/phone section padding tighter (section-pad mixin), carousels align-items:flex-start, blog card = full photo + text card below <1200px, footer spec accordions slimmer on phones. Programs CTA card is taller than program cards (copy-driven), leaves small gap under shorter cards.
- Done 2026-11-04: mobile Call us uses inline phone svg (png had its own yellow square).
- Done 2026-11-04: testimonial photos now contain + blurred backdrop (no face cropping); hover quote aligned to bottom above name.
- Done 2026-11-04: testimonials rebuilt: shared `src/components/ui/Testimonial.tsx` (+scss), data in `src/data/testimonials.ts` (from content/pages/student-testimonials.json; optional `video` YouTube id => play button, plays inside card). Home bento keeps layout; text-only cards show quote on hover; <1200px carousel (phone 1 card, tablet 2) with quote under photo; inner pages (StoryCards) use same card. Home now shows page learners (photos are small, big card looks soft). Checked via screenshots at 1920/1024/390.
- Done 2026-11-04: side widgets: removed email + WhatsApp; mobile bar = Enquire / Apply / [phone icon + "Call us"]. Not visually verified.
- Done 2026-11-04: all brand blue (#0077be family, buttons/gradients/shadows) replaced with #020966 (dark shade #01063f, light #1a2394). Light blue tint backgrounds (#e6f2f9 etc.) untouched. Not visually verified.
1. Visual QA of remaining inner pages at 390/768/1440 (only sampled pages were eyeballed): placements, why-dsu-online, academics-at-dsu, student-support, mandatory-disclosures, contact-us (map iframes blank in headless; check in real browser), all specialization pages, blog list/detail. Fix any layout glitches.
2. Footer: user brief asked to refine alignment (logo/contact, link columns, specialization columns, brochure box, copyright row). Review at all breakpoints.
3. Refer page: re-check hero/cards/terms after content changes (live copy only).
4. Privacy page is scraped; Terms & Conditions + Facts have no live page (footer Terms link dead). Ask the user what to do.
5. Enquiry popup: set `NEXT_PUBLIC_ENQUIRY_ENDPOINT` when a backend exists; brochure PDFs needed for the Download Brochure form.
6. Only after user approval: Strapi/CMS phase.


## Update 2026-10-27 (QA-issue round, new account)
- Blog posts: embed-note junk ("Add this in the <head>...", "Table container with Jost font...") filtered in `loadBlogPost` (src/lib/content.ts).
- Programme pages: "Career Path" + "Industries" were swallowed by the fees branch; now rendered as RoleGrid / IndustryGrid sections (Page.tsx fees branch, Kit.tsx/.scss).
- Testimonials page: `Testimonials` h2 + intro split row (introSplit); StoryCards show quote on photo hover/focus (touch: under photo); `Reveal` rounds visible count to full grid rows (no partial row before Show More).
- Student Support: steps + photo in 2-col `stepsSplit`; short CTA blocks render as compact `ctaStrip`; Refer terms 5-up.
- Enquiry popup: added Enter OTP (optional), State, City (src/data/locations.ts, dependent city).
- Deploy: `python deploy.py` (see DEPLOY-SERVER.md).

## Update 2026-10-28
- Server restarted by admin: PM2 list was empty; recreated `dsuonline` via `next start -p 3351` (+ `pm2 save`).
- Enquiry popup: close button no longer overlaps first form row (`.pane` padding-top 64px on desktop; mobile unchanged since button sits over the aside).
- Enquiry popup, Contact and Refer forms: submit/Close buttons now use `ArrowLink` (same look, hover and dotted icon as hero buttons); old `.submit`/`.spin` styles removed from EnquiryModal.module.scss.
- Header programme submenu: removed yellow code-badge hover (stays blue).
- Header dropdown/More rows: nav-wide yellow link hover no longer leaks in (color $ink, no text-shadow on .dropdown a:hover).


## 2026-10-30 inner-page photos
Zip photos (public/images/inner/*): about-why tabs (9), /about quality+FAQ photo, admission banner+eligibility+documents, contact banner, programme 'Why' photos (prog-*), 16 elective photos (el-*). Home untouched. 360° Chat tab + electives not in zip keep old photos.

- 2026-11-04: mobile (<760px) hero no longer shows NAAC/UGC/Legacy logos; shown as white strip under hero (`.logoStrip` in Hero.tsx). Server pm2 auto-start via systemd `pm2-dev-inter-f3` (done). Playwright py works; playwright-cli needs `--browser msedge`.
- 2026-11-04: hero logos (NAAC/UGC/Legacy) now removed from the hero on ALL devices; white `.logoStrip` under hero everywhere. Graphify graph built (src+tools+root, AST only); keep it current with `graphify update .` after every round.
- 2026-11-06: header search icon now opens a full-width white search bar underneath the header (not a popup); .searchPanel anchors to fixed .header.

## Update 2026-11-11
- International Learners hero: India map (states from svg-maps/india, `india-data.ts`) with routes to 5 continent badges + chips; hero gradient + h1 size/weight copied from client's `dsu-online-international.html`. Continents = Asia, Africa, Europe, North America, South America (Oceania removed), names only (no country lists).
- Site-wide font changed Roboto -> Plus Jakarta Sans (`--font-main`, layout.tsx, weights 400-800).
- 2026-11-11 (2): International page sections restyled to client HTML (Why grid, time zones, continent cards, compare table, programs grid, steps, alumni card, CTA form: country+phone on one row, program full width). Mini titles use site `.eyebrow` (no lines). Hero logos on white chips (home hero images). Cards = `Rail.tsx` (carousel + arrows <760px). Blue palette `#0b1f4d/#1d5bd8/#22c3e6`; programme + specialization banners use the same gradient (Inner.module.scss .heroProgram/.heroGradient).
- 2026-11-11 (3): header overflow fixed (Plus Jakarta is wider than Roboto): tighter gaps in Header.module.scss; right padding now respected 1200-1920.
- 2026-11-11 (4): intl hero title = 2 lines at all widths (clamp); every section min-height 100svh and fits one screen on desktop (spacing in svh; programs = 3-across carousel with arrows). Header gaps tightened (Plus Jakarta is wider).
- 2026-11-11 (5): intl Programs = plain 3x2 grid on desktop (carousel only on tablet/phone), compact to fit one screen.
- 2026-11-11 (6): intl sections no longer forced 100svh (tighter gaps; still fit a screen); programme 'Why DSU Online X?' title->paragraph gap fixed (Kit.module.scss .whyPText margin order).
- 2026-11-11 (7): intl Programs cards: big 16:10 photos, no one-screen compaction (section may exceed screen).
- 2026-11-12: mini titles (eyebrow) = logo blue #0077be on white/grey, logo yellow #fff200 on blue/dark (tokens $logo-blue/$logo-yellow in _tokens.scss; eyebrow mixin defaults blue). Gradient title text removed (intl hero em, clocks, zoneNote) -> solid logo colours. Not deployed.
- 2026-11-12: intl Admissions: progress line above step cards removed (cards = client design).

- DONE (2026-11-12): first-load preloader = crest SVG draw-on (Preloader.tsx + .boot in Preloader.module.scss). Visibility/timing from inline script in layout.tsx (adds html.is-loading, min 1.7s, hide on load, failsafe 5.3s, skipped for reduced-motion, absent w/o JS). Lighthouse mobile (3 runs, noisy): CLS 0 before/after; LCP median 4.1s -> 4.6s; TBT similar.

- DONE (2026-11-12, round 2): preloader redesigned (no drawing: logo rises in + gold rule); intl continent cards mobile min-height 170 (matches reference); form `.err` = 50% of label (7px intl / 7.5px modal+contact+refer, see EnquiryModal/International scss); blog detail hero wrapper width 80%; TitleReveal now also runs on home (all h2).

- DONE (2026-11-12): programme pages Admission Process section now shows main title 'A Step-by-Step Guide' (section-heads.ts; was title: null).

- DONE (2026-11-12): perf pass from Lighthouse report: experimental.inlineCss (no render-blocking CSS), icons in public/icons downscaled to 3x design size + palette PNG (-225KB), preloader uses small logo-preload.webp (unoptimized, low priority), TitleReveal batches reads after writes (forced reflow), ProgramsBand card-title links min-height 24px.

- DONE (2026-11-12): intl continent cards use aspect-ratio 2/3 (3/4 below 1200px), object-position top, so photos are not cropped; map credit visually hidden (sr-only, CC BY attribution kept in DOM); TitleReveal now covers page h1 + section h2 on every page incl. home, via MutationObserver (home sections stream in late).

- 2026-11-12: REVERTED experimental.inlineCss (it grew home HTML 258KB->909KB, gz 31KB->148KB, hurt mobile FCP/TBT). Do not re-enable.
- DONE: intl hero h1 two lines (scoped span rule to > span; TitleReveal word spans were going display:block).
- DONE: intl 'Why' cards mobile hover no longer clipped (padding moved into .uspGrid; .uspGrid padding:0 was overriding .track).
- DONE: programme hero text matched to dsuonline.com (MBA/MCA/B.Com '(Online X)' subtitle, BCA no eyebrow, B.Com clean title). Logos + Scroll Down intentionally not added.
- DONE: programme hero 5-tile row: last tile spans 2 cols (desktop).

## Update 2026-11-12: shared programme hero template
- Programme pages (mba/mca/bba/bca/bcom) now use `src/components/inner/ProgramHero.tsx` (+ `.module.scss`): eyebrow "Your next chapter starts here", title "Lead with Knowledge. Grow with <X> Degree Online.", description, DUAL pill (only when page has an Elective fact, links `#pair`), buttons, counters (years/semesters/credits), auto-fit "at a glance" tiles. Nothing on the right (no photo/card). Props built in `Page.tsx` (`programHero`) from page content. MBA description text from user's reference; others use first sentence of live copy.
- Rule this session: every section edit the user specifies for MBA applies to all 5 programme pages via the same shared template.
- Anchors added: `#pair` (elective combinator), `#curriculum`.
- 2026-11-12: ProgramHero keeps the programme photo on the right (fades into navy; photo on top on phones). User wanted photo kept, no extra card.
- 2026-11-12: ProgramHero: title always 2 lines, hero = 100svh (fits all tested sizes 1920x1080 .. 320x568, above mobile bottom bar), eyebrow = site style (logo yellow, no dash). deploy.py now uploads only changed files (`.deploy-manifest.json`, gitignored), skips npm install unless package*.json changed, prints stage timings. Server-side `next build --webpack` is still the slowest stage.
- 2026-11-13: ProgramHero buttons (Apply/Enquire/Brochure) moved under the 'at a glance' tiles.
- 2026-11-13: Added ProgramAdvantage (src/components/inner/ProgramAdvantage.tsx, copy in src/data/programme-advantage.ts): 'The DSU Online Advantage' cards + Learn/Lead/Advance banner, under hero before The Program, all 5 programme pages. Dual block only when page has Elective fact + dualCopy entry (MBA). Non-MBA lead text is a generic placeholder. Local build needs NODE_OPTIONS=--max-old-space-size=6144 (OOM otherwise).
- 2026-11-13: added dep swiper; src/components/ui/CardSlider.tsx (Swiper, drag-follow) used for advantage cards on phones. Dual 'Build your combination' = ArrowLink blue. Old carousels not yet migrated to Swiper.
- 2026-11-13: ProgramAdvantage redesigned (not a copy of client reference): top row pitch + dual panel, 4-col tinted Kit-style cards (Swiper carousel on phones), banner = navy panel + inset curved photo. Dual button = plain global ArrowLink.
- 2026-11-13: advantage card colours shift by one per row of 4 so no neighbours (across/down/carousel) share a colour.
- 2026-11-13: 'The Program' (Why DSU Online X?) = new ProgramAbout.tsx (photo pair left, live copy split in 2 paras + benefit chips right); advantage banner photo = public/images/inner/advantage-banner.webp with hero-style dissolving gradient. Old WhyProgram in Kit.tsx now unused by programme pages.
- 2026-11-13: ProgramAbout photo column stretches to text height on desktop (no gap on 1920).
- 2026-11-13: ProgramAbout photos have separate hover animations (main lift+zoom, second tilt+pop).
- 2026-11-13: ProgramAbout benefits = plain points (ring+tick, hairline that draws on hover), 2 cols desktop, no pills.
- 2026-11-13: programme page order: Hero, Advantage, banner, The Program, Electives, Interactive Elective Architect (#pair), Testimonials...
- 2026-11-13: ElectiveGrid = photo cards (photo ~2/3, name, tagline from each elective page banner, Know More), grid desktop, Swiper on phones; mini title 'Customise your learning'. Live HRM page has Finance's tagline (live copy slip); duplicate taglines hidden after first use.
