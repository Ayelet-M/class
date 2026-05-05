# Example: Vibe Coding Offset Calculator

A single-file vibe-coded calculator that turns a week of AI use into three numbers (carbon, water, energy) and then translates the carbon number into **everyday-swap equivalents** — how many beef-to-veggie meal swaps, car-miles biked, shorter showers, etc., it would take to break even.

The point isn't to make students feel guilty about AI use. The point is **calibration**: most students will discover their typical AI week is offset by a single meal swap or a few bike miles — which means *the leverage is in the swaps, not in cutting AI*. That reframing is the value the tool argues for.

## Use

Open `code_deliverable/index.html` in a browser. Adjust the three inputs (chat queries, vibe coding hours, image generations) for a typical week. The footprint card and the eight offset cards update live.

Each offset card shows two numbers:

- **Top:** how many of that swap it would take to offset *one week* of your AI use.
- **Bottom (amber):** the inverse — "1 covers 37 weeks" or "2.5× per week" — so the cards stay legible whether your AI use is small or large.

## Provenance

Built as the second precedent example for the Week 2 Monday "AI as Moral Assistant" activity, alongside [`../protein-suffering-calculator/`](../protein-suffering-calculator/). Single-file HTML + Tailwind CDN + vanilla JS — deliberately the kind of artifact a student can vibe code in one session.

## Numbers and sources

All constants are visible in the `<script>` tag at the bottom of `index.html`. Methodology and citations are also rendered in a collapsed details section at the bottom of the rendered page.

**AI side (per unit):**
- Chat query: 0.3 Wh, ~40 ml water, ~0.15 g CO₂e — [Epoch AI 2025](https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use), [Li et al. CACM 2025](https://dl.acm.org/doi/10.1145/3724499)
- Vibe coding hour: ~50 Wh, ~2.5 L water, ~20 g CO₂e — extrapolated from [Luccioni et al. FAccT '24](https://dl.acm.org/doi/10.1145/3630106.3658542) (code generation 5–10× text classification)
- Image generation: ~1.5 Wh, ~50 ml water, ~0.6 g CO₂e — Luccioni 2024

**Offset side (per swap):**
- Beef → veggie meal: ~9 kg CO₂e — [Poore & Nemecek, *Science* 2018](https://www.science.org/doi/10.1126/science.aaq0216)
- Chicken → tofu meal: ~1.4 kg CO₂e — Poore & Nemecek via [Our World in Data](https://ourworldindata.org/environmental-impacts-of-food)
- Car mile → bike: ~380 g CO₂e — [EPA passenger vehicle](https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle) minus bike LCA
- 5-min shorter shower: ~500 g CO₂e — 9 L/min × 5 min × heating
- Cold-wash a load: ~1.5 kg CO₂e — hot vs. cold ΔE
- Bulb → LED (1 yr): ~22 kg CO₂e — 60 W → 9 W × 3 hr/day × 365 d
- Skip NYC–Boston flight: ~75 kg CO₂e — [ICAO calculator](https://www.icao.int/environmental-protection/Carbonoffset/Pages/default.aspx)
- Plant a tree (1 yr): ~25 kg CO₂e — USDA mature-tree annual sequestration

These are public-domain order-of-magnitude estimates that round generously. Per-query AI footprint varies 2–4× by region (water especially) and by model. Offsets vary 2–5× by route, vehicle, diet, climate, and heating fuel. Don't present these as exact in your own work — replace the constants with values defensible for your context.

## What students should take from it

- **Cite every number on the page itself** — the methodology section is part of the design surface, not an afterthought.
- **The offset framing inverts the usual narrative.** Instead of "AI is bad", it argues: "AI use is small relative to the things you already control; spend your moral attention where it matters." A different student making the same calculator could land on the opposite argument by changing the comparison set. That choice *is* the values work.
- **Single-file, no build step.** Tailwind via CDN, Inter from Google Fonts, vanilla JS. The whole thing is one HTML file you can paste into ChatGPT / Antigravity and iterate on.
