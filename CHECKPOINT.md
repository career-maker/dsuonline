# DSU Online - Checkpoint (2026-10-24, end of day 2)

## Status
- Phase B (foundation) and homepage (Phase C1) DONE.
- Inner pages NOT started. Links to them currently show the custom 404.

## Design source
`design/Index.pdf` (1920 x 10690 artboard, single page). Extracted:
- photos/logos -> `public/images/**`, icons -> `public/icons/*.png` (rendered from PDF, 4x), `src/data/icon-sizes.ts` (generated)
- raw extracts + `design/text-layout.txt` (every text line with x/y/size) kept in `design/`
- Fonts: PDF has Type3 (outlined) fonts, names unrecoverable. Matched by metrics to **Roboto** (300/400/500/700).
  Body copy: weight 400, letter-spacing -0.0175em; headings 700, -0.02em; eyebrow +0.08em uppercase; UI labels 0.
- Tokens in `src/styles/_tokens.scss`: red #DC2625, orange #F87016, ink #212121, body #495464, cream #FFFBEF, pink #FFF3F5, dark #190A0C.

## Stack / structure
Next.js 16.4.3 App Router, React 19, TypeScript, Sass modules (`sassOptions.loadPaths = src/styles`), npm.
`next.config.ts` keeps scaffold flags `cacheComponents` + `partialPrefetching`.
- `src/app/` layout, page, not-found, error
- `src/components/layout/` Header, Footer, SideTabs, EnquiryProvider(modal), BrochureForm
- `src/components/sections/home/` 12 homepage sections
- `src/components/ui/` icons (SVG), Icon (raster from design)
- `src/data/` site.ts, programs.ts (all 5 programmes + ~43 specializations, slugs from sheet), home.ts (copy), icon-sizes.ts

## Verified (actual runs)
- `npx tsc --noEmit` clean, `npm run lint` clean, `npm run build` OK (routes: /, /_not-found).
- Homepage at 1920: page height 10691 vs design 10690; section tops within 1px; side-by-side compared section by section.
- No horizontal overflow at 390, 768, 1024, 1280, 1440, 1600, 1700, 1800, 1850, 1920.
- Console: only 404s from prefetching not-yet-built inner pages.
- NOT done: real-browser testing at zoom levels, keyboard/screen-reader pass, Lighthouse, Firefox/Safari.

## Known deviations / decisions
- Design copy typos kept as designed: "Countires", "Stop Your Future", "Admission Open for 2025" in FAQ CTA.
- FAQ Q3 uses live-site wording ("BBA/B.Com/BCA/MBA/MCA") instead of design's "BBA IB.Com I BCA...".
- Programme cards: duration/fee from live site (MBA/MCA 2y 32,875; BBA/BCA/B.Com 3y 22,250); design shows 2y/32,875 on all.
- Career tabs 2-5 text from live site; testimonials names uppercased as rendered in design.
- Alumni card world-map background not reproduced (no extractable asset).
- Hero has 3 slides (design images 1068/700/858 reused, shared text); testimonial arrows page through 2 sets of 4 (2nd set text from design's hidden cards).
- Faculty + Blog arrows are `disabled` (single faculty / 3 posts) until CMS provides more.
- Enquire modal, brochure download = prototype behaviour (no backend). Search = client-side filter of programmes/pages.
- Side tab "Facts" links to /facts (sheet says "need to discuss").
- Footer Privacy/Terms links -> /privacy-policy, /terms-and-conditions (pages not in sheet; to be created or removed).

## Next steps
1. Inner pages (sheet "Menu" + "Programmes" tabs): About, Admission, Refer, Academics, Student Testimonials, Why DSU Online, Mandatory Disclosures, Contact, Placements, Student Support, Blog list + detail, 5 programme pages, ~43 specialization pages (dynamic route `/online-[prog]/[prog]-electives/[slug]`).
   Need: shared PageHero/inner layout following homepage design; copy exact text from dsuonline.com.
2. Remaining QA from checklist (zoom 75-150%, a11y, Lighthouse), SEO metadata per page, sitemap/robots when prod URL known.
3. Strapi phase (not started, needs approval).

## Open questions (still unanswered)
1. Inner pages: scrape all (~65) or main 18 + 5 programmes first?
2. Facts page: skip or placeholder?
3. Blog: homepage 3 + 1 detail, or all posts?
4. Real stats numbers confirmed (70+/100+/700+/35 LPA from design).
5. Privacy Policy / Terms pages: create from live site?

## Dev notes
- Port 3000 on this machine is used by another project (CDSIMER); use `npx next start -p 3111` for this one. Rebuild then restart the server (stale server returns 500 for CSS).
- Asset scripts live only in the Claude session scratchpad (not in repo); re-extract from the PDF if needed.


---
# Update - 2026-10-25 (session paused by user; resume with "continue")

## Goal now
User wants homepage padding / font size / alignment EXACTLY equal to design/Index.pdf before any inner pages.

## Done this session (pixel-exactness pass)
- Measurement tools saved in `design/tools/` (copy of session scratch scripts):
  - `textdiff.py` compares every PDF text line (baseline, x, size, width) to the live DOM -> `diff.json`; `rep.py 2.2` prints deviations.
  - `heat.py` pixel-diff hot spots; `cmp.py y0 y1 offset scale [x0 x1]` side-by-side (design top, mine bottom); `bounds.py` section tops; `q.py "<css>"` element rects; `over.py` overflow check; `shot.py <width>` full-page screenshot (reduced-motion); `restart.sh` rebuild+serve on port 3111 (edit paths: they point at the old scratchpad dir, copy `full.png` = PDF render at 1x via PyMuPDF).
  - Asset extraction scripts: extract.py, assets.py, icons2/3.py, final_assets.py, side*.py, white.py, logo2.py.
- Result: page height 10690 = design 10690. All 12 section tops within 1px. Text baselines mostly within +-2px (remaining: design's tilted hero programme cards, a few card staggers).
- Exact numbers applied: container 1731, nav gaps, header +3px, about columns/stat widths/feature icon boxes, programme cards (exact rects: 563x447, row gap 10, row1 x 95/688/1263 with MBA 4px higher, row2 x 95/679/1263), chips gap 18/8, why-choose panel rows, careers tabs, faculty/alumni, recognitions cards (398.4x159.2, gap 18.3), testimonials cards 637x288 gap 18, blog box inset 19, footer cards x/heights (560, B.Com 297 + brochure), footer text letter-spacing +0.0125em, body 400/-0.0175em.
- Hero badges: light NAAC/legacy PNG variants (`public/images/brand/*-light.png`), BBA photo flipped like design, why-bg x 35%.

## In progress / next (do these first)
1. **Use `src/components/ui/FramedImage.tsx` (already created, unused yet)** so images are drawn exactly like the design (offset + zoom inside clipped frame). Some design images are zoomed beyond CSS `cover`. Replace `<Image fill>` with `<FramedImage frame=[x,y,w,h] box=[x,y,w,h]>` (design px) inside `position:relative; overflow:hidden` parents for:
   - Learn tiles (frames: x=95+293*i, w267, h298; row1 y3432, row2 y3752). Boxes: Mobile (1171.18,3720.12,518.4,336.44); Assignments (-113.02,3678.17,557.03,371.81); Projects (288.27,3739.92,464.8,310.07); Forums (628.5,3752,372.58,297.99); Exams (975.39,3752.01,337.14,297.92); Recorded (1468.47,3751.72,447.1,297.99); Learn Your Way (1177.07,3432,446.98,297.99); Live (1468.07,3432,446.98,297.99).
   - Why bg: box (-10.33,4087.86,1949.14,805.74), frame (0,4178,1920,625).
   - Careers photo: box (1117,4915.06,718,403.88), frame (1117,4915,707,388).
   - Faculty photo: box (118,6100,251,358.7), frame (117,6100,252,270).
   - Testimonial featured: box (95,7109.94,418,743.11), frame (94,7185,419,594). Avatars (frame 69x69; featured at (125,7569), cards at (565,7378) etc.): Chinmaya box (547.43,7339.6,100.68,179.46).
   - Blogs: b1 box (-175.5,8141,1100.4,672); b2 (677.06,8141.1,567.29,671.68); b3 (1267,8057.44,559.41,839.12); frames (94|680|1266, 8140, 560, 673).
   - FAQ CTA: box (1014.5,9029,912,608), frame (1115,9029,711,608).
   - About photos: left box (-104.13,1466,961.27,541) frame (95,1466,562,541); right box (1333.02,1464.1,732.8,537.9) frame (1424,1464,400,538).
   Then rebuild, rerun `heat.py`, remove obsolete objectPosition fields.
2. Blog titles are now arrays with explicit line breaks (done); verify visually.
3. After images: re-run `textdiff.py` + `heat.py`, check hero (tilted cards ignored), strip icons x/y by pixel, header logo/search pixel boxes, buttons sizes (50px high, widths) via PDF drawing rects, then responsive re-check (390/768/1280/1440/1600) and `npm run build`.
4. Then inner pages (answers to open questions still pending).

## State of repo
`npx tsc --noEmit` and `npm run lint` clean at pause. Dev server was on port 3111 (stopped). Port 3000 belongs to another project.

---
# Update - v3 design (latest PDF, 1920x11761)
The user replaced the design twice more. **Latest source of truth = `design/Index.pdf` (v3)**; older ones kept as `design/Index.v1.pdf`, `Index.v2.pdf`.
v3 = blue (#0079C7-ish) + yellow-eyebrow theme: hero with enquiry form + programme finder panels, announcement ticker strip, "Hear From Our Learners" video-style testimonial grid, About, blue "Which Programme are you Looking for?" section, bento Learning grid, "Why Choose / Certifications" light-blue section, Careers, "Meet Our Faculty" cards, "Faculty Insights" article cards, Recognitions, blue FAQ, Blogs, light-blue footer.
Exact text positions: `design/text-layout-v3.txt`; drawings/image placements: `design/drawings-v3.json`, `design/images-v3.json` (from `design/tools/extract3.py`); raw images in `design/raw3/`.
Scaling system (zoom canvas, `html[data-canvas=desktop]`) and tooling (`design/tools`) from earlier still apply; v2 (crimson) code is being replaced section by section.


---
# Update - v3 homepage built (current)
- Design source = `design/Index.pdf` (v3, 1920x11761; blue #007DC5 + yellow/gold accents). Older PDFs: Index.v1/v2.pdf.
- **Zoom-to-fit system** (fixes "only fits at 67% browser zoom"): at viewport >= 1100px the whole page is the 1920px design canvas scaled with CSS `zoom` (script in `layout.tsx` head sets `data-canvas` + `--zoom`; sizes in `clamp(min, N*var(--vw), max)` resolve to design px). Below 1100px a normal fluid layout is used (breakpoints in `_mixins.scss` `down()` never fire above 1100).
- All 11 homepage sections rebuilt to v3 with absolute design geometry (px from the PDF); `FramedImage` reproduces each photo's exact crop. Mobile/tablet fallbacks are normal-flow.
- Verified: `tsc`, `eslint`, `next build` clean; no horizontal overflow at 390/768/1024/1099/1100/1440/1920; section tops identical to PDF (hero 0, ticker 970, testimonials 1066, about 1829, programs 2718, learning 3957, why 5020, careers 5708, faculty 6728, recog 8540, faq 8960, blogs 9786, footer 10825, total 11761); text-baseline diff (`design/tools/textdiff.py`) leaves only vertical side-tab labels, auto-scrolling ticker and merged-text artefacts.
- Design values kept as in PDF: all programmes 2 Years / INR 32,875; "Countires"/"Stop Your Future"/"2027" copy; FAQ Q3 "BBA IB.Com I BCA...".
- Prototype behaviours: enquiry + hero forms + brochure form do not submit anywhere; hero carousel has 2 slides; testimonial/faculty/article arrows disabled (single page of content).
- NEXT: inner pages (questions about scope still open), full QA (zoom levels in a real browser, a11y, Lighthouse), Strapi phase.

## Update: responsive rebuild + inner pages
- Homepage fully responsive (fluid `--u` unit, breakpoints xl1500/lg1200/md900/sm600); no horizontal overflow at 390/768/1024/1099/1440.
- Inner pages: 60 scraped pages (content/pages) + 135 blogs, rendered by `src/app/[...slug]/page.tsx` -> `src/components/inner/*`. 220 static routes.
- Scraper (tools/scrape.py) now decodes Cloudflare emails, keeps mandatory-disclosures PDF links, drops dev-note junk. Pipeline: scrape.py -> download_images.py -> annotate_images.py.
- Gaps: /terms-and-conditions 404 live (footer link dead), Facts page 404 live, forms are prototype, contact map iframes blank, no a11y/Lighthouse/zoom/Firefox testing done.
- Open questions to user still unanswered: inner-page scope, Facts item, blog scope, privacy/terms content.

---
# Update - 2026-10-25: homepage pixel pass vs design/Index.pdf (v3)
- Desktop (>= 1200px) is now a proportional scale of the 1920 artboard: `--u = 100cqw / 1920` (container units on `[data-u]` = header, main, footer, so the scrollbar is excluded); `@mixin container` = 1730u. Below 1200px the fluid layout is unchanged.
- Every homepage section, header, side tabs and footer got a `// ---------- desktop: exact geometry` block with PDF coordinates.
- Result at 1920: page height 11761 = design, all 13 section tops identical, 379 text lines matched within about +-1px (ticker is a moving marquee; a few 2-3px letter-spacing rounding cases left), mean pixel diff 4.6/255.
- Overlays sampled from the PDF: hero shade = `public/images/hero/shade.png` (design / raw photo ratio), learning/testimonial gradients, FAQ + blog photos have no gradient (3rd blog 20% black).
- Assets rendered from the PDF: side quick-action icons, footer social icons, footer Intersmart logo, India flag, John avatar.
- Design states reproduced as static: NAAC certification card blue, "Transform Your Career" card dark, hero chips/panels; testimonial/faculty/article arrows added (disabled until CMS).
- Design copy kept: "UNIVERSITY EXLPORE DSU" ring text, "todays", "Capgemini -  Manager", "Designed & Developed  By:".
- Tools: `design/tools/textdiff.py` + `inkdiff.py` (ink-extent per text line), `heat.py`, `region.py y0 y1` (design geometry dump). They read the dev server from `URL` (default 3112).
