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

## Deliverables / grading model

Repo-only: the student/team GitHub Classroom repo **is** the submission (no zip, no
Canvas upload). Graded from commit history + the GitHub-Pages-hosted page; deadline =
last commit before each folder's `deadline.json`.

## Updating during the term

GitHub Classroom gives each student an **independent** copy at accept time; pushes
here do **not** reach existing clones. So: freeze the starter repo before students
accept, and route in-term content changes through the **website** (instructions and
readings render/fetch from the class site) rather than the student's local files.
