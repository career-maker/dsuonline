# Deploy to Server (dsuonline.intersmarthosting.in)

**To deploy or update: run `python deploy.py` from the project root.**

| | |
|---|---|
| Server | `91.121.47.15`, SSH port 22, user `dev-inter-f3` |
| Live URL | https://dsuonline.intersmarthosting.in/ |
| Folder on server | `~/web/dsuonline.intersmarthosting.in/frontend` |
| Process | PM2 app `dsuonline`, Next.js on `127.0.0.1:3351` |
| Web Server | Nginx reverse proxy (`/etc/nginx/sites-available/dsuonline.intersmarthosting.in.conf`) with Let's Encrypt SSL |
| Credentials | Stored locally in `.server.local` (git-ignored) |

## Quick Commands
- **Deploy changes:**
  ```bash
  python deploy.py
  ```
- **Check PM2 logs on server:**
  ```bash
  python -c "from shots import remote_exec; ..." # or ssh dev-inter-f3@91.121.47.15 "pm2 logs dsuonline --lines 50 --nostream"
  ```
- **Check PM2 status:**
  ```bash
  pm2 status
  ```

## Notes
- Server runs AlmaLinux 8 (glibc 2.28). Next's Turbopack/native SWC compiler requires glibc 2.29+, so builds use `next build --webpack` with WASM SWC fallback.
- Next.js runs on port `3351` managed by PM2 daemon (`dsuonline`).
- Nginx reverse-proxies `https://dsuonline.intersmarthosting.in` -> `http://127.0.0.1:3351` with HTTP/2, gzip, and caching for `/_next/static/`.
