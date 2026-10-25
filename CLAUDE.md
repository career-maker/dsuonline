# DSU Online project: instructions for any Claude session

**Start of every session:** read `CHECKPOINT.md` in this folder, run `git log --oneline -15` and `git status`. When the user says "continue", resume from the
"NEXT STEPS" list in `CHECKPOINT.md` (top item first) without asking for context again. Respond tersely (caveman style is fine if the user's hooks enable it).

**Rules (from the user):**
- Next.js frontend only. Do NOT build the Strapi/backend. Do not invent content: inner-page text must be exact live-site copy (dsuonline.com, content in `content/*.json`).
- Keep typography, colours, buttons consistent with the home page; the home page matches `design/Index.pdf` (do not redesign it).
- Do not fabricate test/perf results; say what was and was not verified. Enquiry popup has no backend: never claim delivery.
- After every round of changes: update `CHECKPOINT.md` (Status + Next steps), then `git add -A && git commit && git push origin master`
  (credentials already in `.git/config`; never print the token). Commit as Abhiram P M <abhiram@intersmart.in>.
- Port 3111 is the local server (3000 is another project). Use `sh shots/rs.sh` to lint+build+restart; `shots/*.py` are screenshot/test helpers (gitignored).
- Tool gotcha: do not type a double-backslash followed by `b` in bash/python commands (becomes a backspace char). Use the Edit tool or `chr(92)`.
- This Next.js version has breaking changes; see `AGENTS.md` and `node_modules/next/dist/docs/` before using unfamiliar APIs.
