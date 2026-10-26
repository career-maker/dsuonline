# Deploy to Server (dsuonline.intersmarthosting.in)

**To deploy or update to the live server: run `python deploy.py` from the project root.**

## SSH & Server Details (For Any AI Agent / Developer)
- **Host / IP:** `91.121.47.15`
- **Port:** `22`
- **SSH Username:** `dev-inter-f3`
- **SSH Password:** `Abhiram@123`
- **Domain:** `https://dsuonline.intersmarthosting.in`
- **Remote Project Directory:** `/home/dev-inter-f3/web/dsuonline.intersmarthosting.in/frontend`
- **Process Manager:** PM2 app `dsuonline`
- **Internal Port:** `3351` (`http://127.0.0.1:3351`)
- **Web Server:** Nginx (`/etc/nginx/sites-available/dsuonline.intersmarthosting.in.conf`) with Let's Encrypt SSL
- **Local Config:** `.server.local` (loaded automatically by `deploy.py`)

## Quick Deploy Command
```bash
python deploy.py
```
This script automatically:
1. Connects via SSH (`dev-inter-f3@91.121.47.15:22`) using paramiko
2. Packages clean project files (excluding node_modules, .git, .next, shots)
3. Uploads archive to the server
4. Runs `npm install` and `next build --webpack` (WASM SWC required for AlmaLinux 8)
5. Restarts PM2 app `dsuonline` on port `3351`
6. Verifies local and public HTTPS health status

## Crawling & Beta Stage (SEO)
- The site is in beta stage: crawling is blocked via:
  - `public/robots.txt` (`User-agent: * \n Disallow: /`)
  - `src/app/robots.ts` Next.js dynamic robots route
  - `next.config.ts` header: `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet`
  - `src/app/layout.tsx` metadata: `robots: { index: false, follow: false, noarchive: true, ... }`

## Notes
- Server runs AlmaLinux 8 (glibc 2.28). Next's Turbopack/native SWC compiler requires glibc 2.29+, so builds must use `next build --webpack` with WASM SWC fallback.
- Next.js runs on port `3351` managed by PM2 daemon (`dsuonline`).
- Nginx reverse-proxies `https://dsuonline.intersmarthosting.in` -> `http://127.0.0.1:3351` with HTTP/2, gzip, and caching for `/_next/static/`.
