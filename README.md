# Ethical Vibe Coding — TECHIE 1121 (Cornell Tech, Summer 2026)

Welcome! This is **your** copy of the course repository. You'll use AI coding tools
to "vibe code" small web apps — and, just as importantly, pay attention to *how* you
build with AI: the prompts, the choices, and the ethics.

> **"Vibe coding"** = building software by describing what you want to an AI coding
> assistant in plain language, then steering, testing, and refining what it gives you.

## Start here

1. **Join the class on GitHub Classroom** (link is in the first activity below) so you
   get your own repo. Accepting gives you an independent copy — later changes we make
   to the course won't overwrite your work.
2. **Pick an AI coding tool.** We recommend **GitHub Copilot** — it's free for students
   (**13+**) via the [GitHub Student Developer Pack](https://education.github.com/pack/join),
   runs in VS Code or a Codespace, and its agent mode vibe-codes across your repo.
   **Codex** is a good second choice. A few tools (Claude Code, Cursor) are **18+** — fine
   if you're older. The repo is pre-configured for all of them; full table is in the first activity.
3. **Open the first activity:** [`week1/7_13/instructions.md`](week1/7_13/instructions.md)
   (or read it on the hosted course site your instructor shares). It walks you through
   setup and your first build.

## How the course works

Every activity lives in a dated folder like `week1/7_13/` with the same shape:

```text
week1/7_13/
├── code_deliverable/    # the app you build goes here (HTML/CSS/JS)
├── log_deliverable/     # history.md — your AI prompt log (the "Vibe-Trace")
└── vibe-report.md       # your short reflection (use vibe-report-template.md)
```

- **Build inside `code_deliverable/`.** Put your `index.html` and assets there.
- **The Vibe-Trace (this is graded).** Every time your AI tool changes files in a
  `code_deliverable/`, it logs the prompt to `log_deliverable/history.md`. The repo
  already contains the rule file for each tool, so this happens automatically for
  agent tools like GitHub Copilot (agent mode), Codex, Claude Code, and Cursor. **If you use a
  web-only or autocomplete tool (Copilot, v0, Replit), you must paste your prompts
  into `history.md` yourself.** Check that it's filling up as you work.
- **Write your `vibe-report.md`** using [`vibe-report-template.md`](vibe-report-template.md).
- **Group projects** live separately under [`projects/`](projects/).

## How to preview and submit

- **Preview locally:** open your `index.html` in a browser, or run a tiny web server
  in the repo folder — `python3 -m http.server 8000` — and visit `http://localhost:8000`.
- **Publish it live (GitHub Pages):** in your repo, go to **Settings → Pages** and set
  **Source = "GitHub Actions."** Then every push builds your site and gives you a live
  URL. Your apps in each `code_deliverable/` folder are reachable there.
- **Submitting = your repo.** There's no zip and no Canvas upload. Your GitHub repo
  *is* your submission — we grade from your commit history and your hosted page. Each
  folder has a `deadline.json`; your last commit before that time counts.

## Getting help

- Course readings and the syllabus are on the hosted course site (your instructor
  shares the link) — or see [`planning/`](planning/).
- Stuck on a tool or the setup? The first activity has an age-appropriate tool table
  and step-by-step setup.

---

<details>
<summary>For maintainers / instructors</summary>

This repo deploys to GitHub Pages via `.github/workflows/deploy.yml` (auto-detects and
builds React/Vite apps, otherwise serves static files; publishes the whole repo). The
committed `CNAME` is used only by the canonical `Cornell-Tech-Vibe-Coding-Summer-2026/class`
repo — the workflow strips it in student copies so their forks deploy to their own
`github.io/<repo>/` URL. See **[`MAINTAINING.md`](MAINTAINING.md)** for how the repo is
wired (readings single-source, the two repos, structural rules, the deliverable model,
and updating content mid-term).

</details>
