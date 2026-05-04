# Values in Vibe Coding (Light) — AI as Moral Assistant

> **Theme:** Use AI to be more rational and act more in line with your values — starting with your own AI use.

## Pre-Class Setup

### Tooling Preparation
- Bring your hosted Week 1 site or another simple web project you can edit.
- You may work in HTML, CSS, JavaScript, or any vibe coding tool from Week 1.
- Have rough numbers ready for your last week of AI use: which tools, roughly how many requests, and (if available) token counts. Most chat UIs let you scroll back through your history; vibe coding tools often have a "session" or "credits used" view.

### Folder Structure
```text
week2/7_20/
├── code_deliverable/        # your hosted footprint calculator
├── log_deliverable/         # AI usage logs (history.md etc.)
└── vibe-report.md           # reflection
```

---

## What we are arguing today

Every tool embeds values — efficiency, attention, scale, autonomy, sustainability, accessibility, sovereignty, frugality. Some of those values get *pushed* on you by the defaults; others you have to opt into. Vibe coding tools are no exception.

In a 15-minute opening discussion we will sketch:

- Which values do *the vibe coding tools you already use* push on you? (e.g., "ship fast", "don't worry about deps", "scale-first defaults")
- Which values would you rather they push on you?
- Which values can AI actually *help you act on* — not as a topic, but as a personal accountability tool?

We are deliberately **not** running the full Values at Play discovery canvas today. That's Week 3 Tuesday. Today is the lightweight version: name a few values, then act on one.

---

## The Task: Build a Vibe Coding Footprint Calculator

**Use AI to help yourself act more ethically about your AI use.**

Vibe code a small, hosted personal calculator that:

1. **Takes input about your last week of AI use.** At minimum: estimated number of requests / tokens / hours per tool. Pick a granularity that's honest, not aspirational.
2. **Translates that into CO₂, energy (Wh / kWh), and water (litres)** using *validated, cited* sources (see "Data sources you must use" below).
3. **Compares the footprint against a reference meal** — the canonical comparison is **tofu vs. beef** for the same calories or grams of protein, but you can pick any reference that makes the number *feel* like something. The goal is to translate an abstract number into an everyday lever.
4. **Cites every number on the page itself.** No numbers without sources visible to the user.

The artifact is small on purpose. The point is the *value clarification* you do while building it, not the polish.

### Precedent example

`week2/7_20/examples/protein-suffering-calculator/` — Hauke's "Protein Suffering Index" is the worked precedent for this kind of personal-quantification tool. Don't copy it. Read its hero copy, look at how it cites sources inline, and notice how the tool's *recommended action* is named explicitly (it argues something — it doesn't just present data).

The full source is at <https://github.com/HaukeCornell/ProteinPerSuffering>; the `RESEARCH.md` log is the model for how to document data gaps.

---

## Data sources you must use

Pick at least one source per row. These are the validated references — you can cite others, but don't replace these with blog estimates without explicit justification in your `vibe-report.md`.

### AI energy per request / token

| Source | What it gives you |
| --- | --- |
| Luccioni, Jernite, Strubell. **["Power Hungry Processing: Watts Driving the Cost of AI Deployment?"](https://dl.acm.org/doi/10.1145/3630106.3658542)** *FAccT '24*. | Per-task energy benchmarks across model sizes; methodology for measuring inference cost. ~5×10⁻⁵ to 1×10⁻⁴ kWh per inference depending on model size. |
| You, Owen et al. **["How much energy does ChatGPT use?"](https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use)** *Epoch AI Gradient Updates* (2025). | Modern revised estimate for GPT-4o-class models: **~0.3 Wh per query**, ~10× lower than the older 3 Wh figure that's still circulating. |
| Jegham et al. **["How Hungry is AI? Benchmarking Energy, Water, and Carbon Footprint of LLM Inference"](https://arxiv.org/abs/2505.09598)** (2025). | Breakdown of energy + water + carbon by model family at inference time. |

### AI water consumption

| Source | What it gives you |
| --- | --- |
| Li, Yang, Islam, Ren. **["Making AI Less 'Thirsty': Uncovering and Addressing the Secret Water Footprint of AI Models"](https://dl.acm.org/doi/10.1145/3724499)** *Communications of the ACM* (final 2025; arXiv [2304.03271](https://arxiv.org/abs/2304.03271)). | Direct + indirect water per inference. Headline: GPT-3 "drinks" ~500 ml per **10–50 medium-length responses** in US data centers. Figures vary 2–4× by region. |

### Reference meals (CO₂, water, land)

| Source | What it gives you |
| --- | --- |
| Poore & Nemecek. **["Reducing food's environmental impacts through producers and consumers"](https://www.science.org/doi/10.1126/science.aaq0216)** *Science* (2018). | The canonical food LCA meta-analysis: 38,700 farms, 119 countries, 40 products. |
| **[Our World in Data — Environmental Impacts of Food](https://ourworldindata.org/environmental-impacts-of-food)** | Per-kg, per-100g-protein, per-1000-kcal CO₂e, land, water. Built on Poore & Nemecek. Easy CSV downloads. |
| **[Our World in Data — FAQs on the environmental impacts of food](https://ourworldindata.org/faqs-environmental-impacts-food)** | Numbers like: beef ~9–105 kg CO₂e per 100 g protein; tofu ~3.5; peas ~0.8. Use these for your reference comparison. |

### Optional (for credibility / context)

- **[Hugging Face AI Energy Score](https://huggingface.co/spaces/AIEnergyScore/Leaderboard)** — community leaderboard with per-task numbers.
- **[ML CO2 Impact Calculator](https://mlco2.github.io/impact/)** — Lacoste et al., for training cost; less useful for inference but cite-worthy.

---

## What "good" looks like

- A hosted calculator at a public URL with a single, honest headline number for your week.
- Every figure has a source link, visible to the user (not just in your report).
- The reference comparison is concrete and surprising in *some* direction — bigger or smaller than you expected.
- Your `vibe-report.md` names the value the tool is arguing for ("eat tofu instead of beef" / "batch your prompts" / "switch from a frontier model to a smaller one when the task is simple") and is honest about whether seeing the numbers changed your behavior.

## What to avoid

- Made-up numbers. Use the sources or note clearly that you're estimating and why.
- Hiding the methodology. If a non-technical reader can't tell where a number came from, the tool fails on its own terms.
- Generic conclusions ("AI uses energy 😱"). The point is calibration, not alarm.

---

## Submission: Vibe Report

Use [`vibe-report-template.md`](vibe-report-template.md) (in this folder). Required sections:

1. **The Value You Argued For** — one sentence on what your calculator pushes the user (you) toward, and why.
2. **Data Sources Used** — link every source. Note any that you struggled to find, and what you fell back to.
3. **The Number** — your week's footprint, and the reference comparison.
4. **Did Knowing Change Anything?** — honest reflection on whether building/using this tool actually shifted your behavior, and which value tradeoff (if any) is now more salient to you.
5. **AI Usage Trace** — link `log_deliverable/history.md`.

Graded against the [In-Class Activity Rubric](../../planning/activity_rubric.md) (40% Completion, 30% AI-Use Documentation, 30% Reflection Quality).

### Deliverables
- `code_deliverable/` — hosted calculator (link in `code_deliverable/README.md` or as the deployed URL)
- `log_deliverable/` — prompts and tool transcripts
- `vibe-report.md`

### Canvas Submission
Upload a zip of `week2/7_20/` and paste the deployed URL into Canvas. The graded commit is the one at the time you submit the Canvas link; later commits won't count.

---

*Empathy is finite. Decision instruments are scalable. Today you are building a small one for yourself.*
