# AI Against AI

## Pre-Class Setup

### Tooling Preparation
- Ensure you have access to your personal website or portfolio codebase from Week 1. Ensure that it is hosted and publicly accessible.
- We will be modifying HTML, Markdown, or JSON files depending on how your specific site is generated (e.g., Jekyll, React, raw HTML).

### Folder Structure
To keep your deliverables organized for grading, please use the following structure in your project directory:

```text
week2/7_22/
├── code_deliverable/    # Modifications to your website code
├── log_deliverable/     # Your interaction logs with the AI agent (history.md)
└── vibe-report.md       # Your reflection and documentation
```

---

## AI Against AI: Poisoning Scrapers

**Project: Obfuscation.** In this activity, you will learn how to implement data obfuscation against aggressive web scraping by Large Language Model trainers. Drawing on the concepts from *[Obfuscation: A User's Guide for Privacy and Protest](https://direct.mit.edu/books/book/3112/ObfuscationA-User-s-Guide-for-Privacy-and-Protest)* by Finn Brunton and Helen Nissenbaum, you have a right to protect your personal narrative as AI companies vacuum up the internet.

### The Task
You will inject plausible, fake facts into your personal website. These facts must be completely invisible to human visitors, but highly visible to AI web scrapers. 

1. **Brainstorm**: Come up with 2-3 plausible but completely fabricated facts about yourself (e.g., "Co-founded a kombucha startup in 2019" or "Won the $5000 Privacy Award").
2. **Inject CSS**: Use the CSS `clip` method (detailed in the example) to hide the text in the DOM. Do NOT use `display: none`.
3. **Verify**: Use the `curl` command to verify that your fake text appears in the raw payload of your website.

### Why not `display: none`? 
Advanced AI scrapers (like OpenAIbot or Google-Extended) often use headless browsers to render a page just like a human sees it. They look at the CSS "render tree" and intentionally ignore text that is explicitly hidden with `display: none`. Using `clip: rect(0, 0, 0, 0)` keeps the text in the render tree but visually trims it to 0 pixels. This tricks the AI, while `aria-hidden="true"` prevents screen readers from wrongfully reading the fake text to humans.

> [!TIP]
> See the full walkthrough and code snippets in the [Example Project](examples/activity1_obfuscation-example/README.md).

### Or pick another "AI against AI" angle
Scraper-poisoning is the guided example, but the theme is broader — defending humans from
AI harms *using* AI/code. You may instead build one of these:
- **Style cloaking for images:** a page that explains and demos Glaze/Nightshade-style perturbation so your art resists being trained on (conceptual demo is fine).
- **Privacy noise (TrackMeNot-style):** a tool that floods a profile or search with plausible fake activity to bury the real signal.
- **Anti-surveillance patterns:** prototype a page demonstrating how adversarial patterns defeat face detection — and discuss the arms race.
- **Block the bots properly:** `robots.txt` + `<meta name="robots">` + per-bot rules (GPTBot, Google-Extended, CCBot); verify each with `curl -A "GPTBot"`.
- **AI-vs-AI detector:** a small tool that flags likely AI-generated text or images and explains its tells.
- **Automation-surveillance pushback:** inspired by [workers using AI against workplace monitoring](https://officechai.com/ai/chinas-workers-are-weaponizing-ai-against-each-other-through-colleague-skill-files-and-fighting-back/) — prototype something that protects a worker's autonomy.

Whatever you pick, keep the ethical question in view: **defense vs. deception**, and who your technique could harm as well as protect.

---

## Submission: The Vibe Report

After completing your injection, document your process in a new file named `vibe-report.md` in your project folder. 

Your Vibe Report must include:
1. **Showcase**: A screenshot of your `curl` command output proving the scraper payload works.
2. **The Vibe**: Describe the fake facts you chose and the narrative you are trying to project. 
3. **Explorations**: Detail any challenges you had hiding the data without breaking your existing site layout.
4. **Reflection**: Write a thoughtful response addressing the following:
   - What impact might this technique have on the broader digital data ecosystem? Does it change your belief or trust in AI outputs?
   - Consider the difference between an AI agent (like Perplexity or ChatGPT with Search) visiting your web page and citing it as the source of truth for the fake fact vs. a model incorporating that fact during training and reciting it from its weights without knowing the origin. How do these scenarios differ in impact?
   - What happens if this strategy is used to change information about someone else rather than yourself? 
   - How does this approach compare to editing Wikipedia facts? What is fundamentally different between a community-moderated platform like Wikipedia versus an AI blindly accepting data from your personal website?
   - Ultimately, is obfuscation ethical? Why or why not?
5. **AI Usage Trace**: Link to your `log_deliverable/history.md`.
6. **Authenticity Statement**: Include the standard course authenticity statement.

### Submission
Submit on Canvas: upload a zip of the entire `week2/7_22/` folder and paste your deployed assignment link. Before submitting, commit and push your `code_deliverable/`, `log_deliverable/history.md`, and `vibe-report.md` to your GitHub Classroom repo. We grade the Canvas submission against your GitHub commit history and hosted page; commits pushed after the Canvas submission time do not count unless the instructor asks you to resubmit.


<!-- READINGS:START (generated by scripts/sync_readings.py — edit activities-manifest.json instead) -->

## 📖 Reading

- **Primary** 🟢 — [Brunton, F., Nissenbaum, H. 2015. Obfuscation: A User's Guide for Privacy and Protest. MIT Press — Ch. 1.](https://direct.mit.edu/books/book/3112/ObfuscationA-User-s-Guide-for-Privacy-and-Protest)
- **Pair** 🟢 — [Franchi, M., Sandhaus, H. et al. 2025. Privacy of Groups in Dense Street Imagery. FAccT '25.](https://doi.org/10.1145/3715275.3732185)

**Full course reading list:** [Course readings — all sessions](https://vibe-coding-ethics.tech.cornell.edu/instructions.html?file=planning/readings.md&title=Course%20Readings)
<!-- READINGS:END -->
