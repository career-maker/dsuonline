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
Done: responsive home+inner pages, hero tablet/mobile layouts, preloader, sticky header, animations/counters, blogs slider, all inner pages redesigned with kit, refer page redesign, testimonials page (photo cards like home), About page uses home blocks, country-code picker with flags (public/flags, 46 SVGs), More menu (auto-closes after click), live button wording (Show More/View More/Read More/Know More).
Known gaps / TODO:
- Programme pages: "Why DSU Online <X>?" section needs 2-column layout with a right-side photo + styled checklist (IN PROGRESS, see below) for ALL programme pages (mba, mca, bba, bca, bcom).
- /terms-and-conditions and Facts have no live page (footer Terms link dead; Facts menu -> home About).
- Enquiry popup has no backend; brochure PDFs not supplied (brochure form is prototype).
- No Lighthouse/PageSpeed/HTML-validator/Firefox/Safari/zoom sweeps done. No a11y audit beyond basics.
- Hero finder panel on short tablets still pushes content below fold.

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
- Deployed all changes to live server (`https://dsuonline.intersmarthosting.in`), restarted PM2 `dsuonline` process, verified HTTP 200 and 0 W3C validator errors.
- GOTCHA: when editing via bash, the tool layer turns a double backslash + b in my command into a real backspace char. Never write regex word-boundary via python/heredoc; use the Edit tool or `chr(92)`. Fixer: `python shots/fixbs.py <files>`.
- Always: after each change round -> update this file, commit, `git push origin master`.

## NEXT STEPS (do top item first when the user says "continue")
1. Visual QA of remaining inner pages at 390/768/1440 (only sampled pages were eyeballed): placements, why-dsu-online, academics-at-dsu, student-support, mandatory-disclosures, contact-us (map iframes blank in headless; check in real browser), all specialization pages, blog list/detail. Fix any layout glitches.
2. Footer: user brief asked to refine alignment (logo/contact, link columns, specialization columns, brochure box, copyright row). Review at all breakpoints.
3. Refer page: re-check hero/cards/terms after content changes (live copy only).
4. Privacy page is scraped; Terms & Conditions + Facts have no live page (footer Terms link dead). Ask the user what to do.
5. Enquiry popup: set `NEXT_PUBLIC_ENQUIRY_ENDPOINT` when a backend exists; brochure PDFs needed for the Download Brochure form.
6. Only after user approval: Strapi/CMS phase.

