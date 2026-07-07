# MAINTAINING.md — how to update this repo

> **Audience: instructors / maintainers (and any agent acting as one).** This is
> *not* student-facing — students never need to read it, and an agent doing a
> student activity should ignore it (follow `AGENTS.md` instead). It documents how
> the course repo is wired so updates stay consistent.

## The golden rule: readings have ONE source

All course readings live in **`activities-manifest.json`** (per activity, with a
`role` and `url`). Everything else is generated or fetched from it — never edit
readings in more than one place.

To change a reading (add/remove/relink/re-rank):

1. Edit the `readings` array for that activity in **`activities-manifest.json`**.
   Roles: `primary` = the one **required** reading; `reference` / `pair` /
   `optional` = recommended/background. **Keep exactly one `primary` per activity.**
2. Run **`python3 scripts/sync_readings.py`**. This regenerates:
   - `planning/readings.md` (the full human-readable list), and
   - the `<!-- READINGS -->` block at the bottom of every `weekN/M_DD/instructions.md`.
3. The **website reads `activities-manifest.json` live**, and the activity site
   renders `instructions.md` + `readings.md` directly — so both update on deploy.
   Nothing else to touch.
4. `python3 scripts/sync_readings.py --check` fails (non-zero) if anything is out of
   sync — good for a pre-commit sanity check.

### The one thing that is NOT auto-synced
Readings referenced **inline in an activity's prose** (e.g. 7_14 name-drops *Why
Johnny Can't Prompt*; 7_22 links *Obfuscation*) are hand-written and must be updated
manually. The generated `<!-- READINGS -->` block is the only synced part.

### The curated website reading gallery
`../website/.../components/ReadingViews.jsx` has a **separate, curated** `READINGS`
list (with abstracts) plus a `REQUIRED` set. It is intentionally a highlights subset,
not a mirror. If you change which reading is `primary` for a session, update the
`REQUIRED` set there too so the ★ badges stay 1:1 with the manifest primaries. The
gallery links out to the full `readings.md` for completeness.

## The two repos

- **`class`** (this repo) → deploys to `vibe-coding-ethics.tech.cornell.edu`
  (GitHub Pages). Activities, projects, instructions reader, manifests.
- **`website`** (sibling `../website`, repo `Cornell-Tech-Vibe-Coding-Summer-2026/website`)
  → the 3D showcase at `cornell-tech-vibe-coding-summer-2026.github.io/website/`.
  Vite/React; build with `cd code_deliverable && npm run build`.

**Single-source syllabus:** the website fetches `planning/syllabus.md` from the class
site at runtime; its bundled `src/content/syllabus.md` is only an offline fallback —
re-sync it (copy the class file in, keeping the header comment) whenever the syllabus
changes, and rebuild.

## AI colophon

`COLOPHON.md` is the public provenance note for course materials. Keep it updated
when the primary generation/editing model changes. Student submissions still use
their own `log_deliverable/history.md` and report-template AI trace sections.

## Structural rules

- **Never rename the date folders** (`7_13`, `7_20`, …). They're load-bearing for
  Jonathan's deployment automation and the manifests.
- Activities live in `weekN/M_DD/`; **group** projects live in `projects/` — don't merge them.
- The instructions reader (`instructions.html`) resolves relative markdown links
  against each doc's folder, so links that are correct on GitHub also work in the
  reader. Keep links relative.
- **Examples are static** (`week1/7_13/examples/*`): they have no `package.json`, so
  the deploy serves their committed built output as-is. If you replace an example
  with a framework app, either pre-build it to static or re-add `package.json` and
  confirm it builds *and* uses relative asset paths.
- **Activity rubric:** one rubric applies to every activity
  (`planning/activity_rubric.md`). Only override it in an activity's `instructions.md`
  for a specific reason (e.g. a paired group activity where AI-use documentation is
  replaced by group-process notes).
- **Keep maintainer notes out of rendered files.** `planning/*.md` render publicly via
  the reader — don't put internal workflow notes in the syllabus, rubric, or activity
  briefs; they belong here.

## Deliverables / grading model

Individual activities: Canvas is the formal submission point. Students upload a zip of
the full assignment folder and paste the deployed link. GitHub Classroom remains the
source of truth for commit history, AI trace files, and the hosted page; grade the
commit state that matches the Canvas submission time.

Group projects: use the team repo and live link unless Canvas says otherwise for that
specific project.

## Student-fork deployment (GitHub Pages)

Two things must be right for a student's Classroom copy to publish:

- **CNAME.** The committed `CNAME` (`vibe-coding-ethics.tech.cornell.edu`) belongs only
  to this canonical repo. `deploy.yml` strips it in any repo whose `github.repository`
  isn't `Cornell-Tech-Vibe-Coding-Summer-2026/class`, so student forks publish to their
  own `https://<owner>.github.io/<repo>/`. If you rename the canonical repo, update that
  `if:` guard.
- **Pages source.** Each student repo must have **Settings → Pages → Source = "GitHub
  Actions"** — Classroom does not set this reliably. Enable it via the Classroom template,
  a `gh api` script, or tell students to flip it once (it's in the student README + the
  first activity). Until then their `deploy` job fails with an environment error.

Student apps themselves are subpath-safe (all asset paths are relative), so nothing else
needs changing for the `/<repo>/` hosting.

## Updating the GitHub Classroom starter copy

GitHub Classroom is not using `Cornell-Tech-Vibe-Coding-Summer-2026/class` directly on
the assignment screen. It created a private starter-copy repo:

```text
Cornell-Tech-Vibe-Coding-Summer-2026/cornell-tech-vibe-coding-summer-2026-class-repo-class
```

When the canonical repo changes, first commit and push the canonical repo:

```bash
git push origin main
```

Then copy the current files into the Classroom starter-copy repo and make a normal
commit there:

```bash
tmpdir=$(mktemp -d)
git clone git@github.com:Cornell-Tech-Vibe-Coding-Summer-2026/cornell-tech-vibe-coding-summer-2026-class-repo-class.git "$tmpdir"
rsync -a --delete ./ "$tmpdir"/ \
  --exclude ".git" \
  --exclude "node_modules" \
  --exclude "_site"
cd "$tmpdir"
git add -A
git commit -m "Sync starter from canonical class repo"
git push origin main
```

Prefer this copy-and-commit flow over force-pushing. It preserves the Classroom
starter-copy history, which gives already-accepted student forks a normal update path.

After pushing the starter copy, go back to GitHub Classroom and use **Sync assignments**
to send the starter-code update toward already-accepted student repos. Students may need
to merge the generated pull request or sync their fork. Repos accepted before the sync do
not update silently.

## Updating during the term

GitHub Classroom gives each student an **independent** copy at accept time; pushes
here do **not** reach existing clones. So: freeze the starter repo before students
accept, and route in-term content changes through the **website** (instructions and
readings render/fetch from the class site) rather than the student's local files.
