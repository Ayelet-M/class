# Example: Protein Suffering Index

A vibe-coded interactive calculator that quantifies the **animal**, **human-worker**, and **planetary** cost of 13+ protein sources. Pick your weight + activity level, and the tool surfaces what your annual protein intake actually costs across three axes — so you can choose protein in line with your values.

This is included as the precedent example for the Week 2 Monday activity (build your own *AI-as-Moral-Assistant* calculator: a Vibe Coding Footprint Calculator that compares your last week of AI use against the footprint of your meals).

## Source

Built from [HaukeCornell/ProteinPerSuffering](https://github.com/HaukeCornell/ProteinPerSuffering) (Next.js + React + Tailwind + Chart.js, statically exported via `next export`). The static export was placed in `code_deliverable/` with one editorial change to make the calculator's *recommended action* explicit in the hero — see "Slight redesign" below.

The source repo also contains:
- A `RESEARCH.md` log documenting sentience proxies (neuron-count-weighted "Baby-Equivalent Days"), missing protein metrics, and pending research questions.
- Three CSVs of suffering-per-gram-protein data (animal, environmental, human).
- Earlier `one-shot*.html` iterations — useful as a record of how the project evolved from a single-file vibe-coded sketch to the current multi-component build.

## Slight redesign (compared to the source)

The hero on `app/page.tsx` was rewritten to make what the calculator *argues for* explicit:

| | Before | After |
| --- | --- | --- |
| H1 | "Quantifying the Sentient Cost of Human Protein." | "Choose protein that aligns with your values." |
| Subhead framing | clinical audit | recommended action + three axes spelled out |
| Above the fold | hero only | hero + 3 axis cards (animal · human · planetary) with citations inline |

The change is editorial, not functional — same data, same components, same methodology.

## What to look at when using this as inspiration

- **Data → behavior loop**: the calculator translates your inputs into a personal number you actually feel. The Week 2 Monday activity asks you to do the same for *your* AI usage.
- **Citations as design surface**: every data axis lists its sources (Tomasik 2018, IPCC, Poore-Nemecek 2018, OSHA, FAO DIAAS, etc.) right in the UI. Your sustainability calculator should cite its sources too.
- **The Methodology Deep-Dive button**: the calculator tells you exactly how it computes its numbers. That transparency is the difference between a tool and a vibe.
- **What's missing**: the source repo's `RESEARCH.md` documents the data gaps and judgment calls that didn't make it into the UI. Your own calculator's `vibe-report.md` should do the equivalent.
