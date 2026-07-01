# Colophon & Responsible-AI-Use Disclosure

This course asks students to be transparent about *how* they build with AI — to keep a
"Vibe-Trace" of every prompt. It would be hypocritical not to hold the course itself to the
same standard. So here is an honest account of how these materials and this website were
made, and the values behind those choices.

## How this was built

The course materials (the `class` repo) and the 3D showcase site (the `website` repo) were
themselves **vibe-coded**, over roughly six months (Jan–Jul 2026), by the teaching team —
mostly Hauke Sandhaus, with Jonathan Segal. Reconstructed from the git history of both
repositories, the AI tools used were:

- **Claude** (via Claude Code) — Opus 4.7, Opus 4.8, and Sonnet 4.6. The bulk of the recent
  writing, restructuring, and site engineering (~50 commits carry a Claude co-author trailer).
- **GitHub Copilot** — earlier code assistance (`.github/copilot-instructions.md`; a co-authored commit).
- **Google Antigravity / Gemini Code Assist** — the course's "lab favorite" tool, configured
  and used during development (`.agent/rules/`, `GEMINI.md`).
- **Warp** — an agentic terminal, used occasionally on the site.

Commit co-author trailers let us attribute Claude precisely; the earlier Copilot and
Antigravity sessions were only partially recorded, so this reconstruction is honest but not
exhaustive — which is itself a lesson about how quickly provenance is lost when you don't log
it as you go. That is exactly why the class requires a Vibe-Trace.

## 3D scene & media

- **Meshy AI** — generated the Funko-Pop-style character figures.
- **Blender** — scene assembly (set up "with Claude Code and MCP," per the commit log).
- **React Three Fiber + @react-three/drei** (pmndrs) — the in-browser 3D; the environment
  lighting uses the `potsdamer_platz_1k` HDRI from the pmndrs/drei-assets set.
- **Google Fonts** — Inter, JetBrains Mono, Outfit.
- Course example projects credit their own assets inside their folders.

## Why we disclose — the values we teach, applied to ourselves

This disclosure isn't a footnote; it's the course's learning objectives turned on the course:

- **Transparency.** We keep the same Vibe-Trace we ask of students — the full commit history of
  both repos is public.
- **Honing human capability, not replacing it.** AI was a collaborator. Every design choice,
  edit, citation, and framing was reviewed and approved by a human, who is accountable for it.
- **Non-manipulation.** No dark patterns, no fabricated data or citations, no engagement traps —
  the site is a plain, honest reference (see the bright-patterns work in Week 2).
- **A trustworthy web.** Accessible, fast, honest content; readings link to real sources;
  nothing here is AI-generated filler passed off as fact.

## Accountability

Hauke Sandhaus, with Jonathan Segal and Wendy Ju, are responsible for everything here —
including any errors or hallucinations that slipped through. If you find one, tell us:
[hgs52@cornell.edu](mailto:hgs52@cornell.edu).
