## Pre-Class Setup

### Set up your AI tool and GitHub accounts

> [!IMPORTANT]
> **Under 18?** Antigravity and Claude Code require you to be **18+**. If you're younger, use **GitHub Copilot, Cursor, or Windsurf** instead (all 13+) — see the tool table below. Everything in this course works with any of these tools, so pick whatever fits your age and budget.

If you're 18+, our recommended tool is **Antigravity**: get a one-year free trial with your Cornell student email, download the Google Antigravity IDE, and set up its Chrome extension.

Sign up for github and fork this repository. 

Join the course GitHub Classroom for this assignment here: [https://classroom.github.com/a/8NQcxGyr](https://classroom.github.com/a/8NQcxGyr). Add yourself to the classroom before you begin the project.

**You can use any of the supported tools** — the repo is pre-configured so the required prompt-logging ("Vibe-Trace") works out of the box in each. When you clone the repo you already have the matching rule file for your tool:

| Tool | Config file (already in the repo) |
| :--- | :--- |
| Antigravity / Gemini Code Assist | `.agent/rules/vibe-trace.md`, `GEMINI.md` |
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/vibe-trace.mdc` |
| Windsurf | `.windsurf/rules/vibe-trace.md` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Codex / Amp / Jules / other agents | `AGENTS.md` |
| Replit Agent | `replit.md` |

All of these tell the AI the same thing: whenever it edits your `code_deliverable/`, log the prompt to `log_deliverable/history.md`. Web-only tools (v0, Rork, Bolt) can't read these files — if you use one, paste your prompt history into `log_deliverable/history.md` yourself. See [AGENTS.md](../../AGENTS.md) for the full rule.

### Folder Structure

To keep your deliverables organized and compatible with the course's automated tools, please use the following structure in your project directory:

```text
week1/7_13/
├── code_deliverable/    # Your website source code (HTML, CSS, JS)
├── log_deliverable/     # Your interaction logs (history.md)
└── vibe-report.md       # Your final documentation and reflection
```

> [!IMPORTANT]
> Ensure all your website assets (images, fonts, etc.) are saved within the `code_deliverable/` folder or referenced via URL.

---

## Vibe Off 

**Project: Your Digital Vibe.** Welcome to the course! Your first task is to create a personal "About Me" page.

### The Task
Create a website that tells us who you are. It must include:
- **Name**: Your actual name, preferred name, and pronounciation. Pronouns if needed. 
- **Photo**: How can we recognize you? A photo of yourself or visual description. 
- **Bio**: A brief introduction to yourself.
- **Hobbies**: What do you do for fun?
- **Professional Section**: Your skills, interests, or career goals.

Most importantly work on the website long enough to actually create something you are proud of. Something that truly and authentically reflects you. 

### Inspiration & "Stealing"
We encourage you to look for inspiration online. Check out sites like [Awwwards](https://www.awwwards.com) for award-winning designs. 
> [!TIP]
> In vibe coding, the line between "stealing" and "inspiration" is thin. You are encouraged to copy structures and layouts you like. We will discuss the ethics of attribution vs. structural borrowing in class.

## Host

Once your page is ready, you need to make it live:
- **Vanilla JS/Static Pages**: Use **GitHub Pages**. Go to your repository settings > Pages and enable it for the `main` branch.
- **Frameworks (React, Vue, etc.)**: Use **Vercel**. Connect your GitHub repository to Vercel for automatic deployment.

When you submit on Canvas, upload a zip of the entire `week1/7_13/` folder and copy and paste the link to your deployed version of the class page: [https://vibe-coding-ethics.tech.cornell.edu/week1/7_13/code_deliverable/](https://vibe-coding-ethics.tech.cornell.edu/week1/7_13/code_deliverable/).

The zip upload is the only file submission we need on Canvas. We will review the corresponding GitHub commit history for your work, and we will use the commit state that matches the time you submit the link.

If you submit late, only commits made up to the time you submit the Canvas link will count toward the graded submission. Any commits pushed after that submission time will not be included, even if they are in the zip you upload later.

---

## Submission: The Vibe Report

After completing your page, you must document your journey in a new file named `vibe-report.md` in your project folder. Use [vibe-report-template.md](vibe-report-template.md) as your starting point.

A complete Vibe Report includes:

### 1. 📸 Showcase
Screenshots, GIFs, or a short video walkthrough of your final site. This documents the final product in case the live link is inaccessible later.

### 2. 🎯 The Vibe (Planning)
Before you start coding, document your intent. What is the inspiration? What should the user feel? Use moodboards, sketches, or verbal descriptions to capture the intended "vibe."

### 3. 👣 Process & Explorations
Transparency is key. Document your research, the different pathways you explored, the ideas you dropped, and the "happy accidents" that shaped the final product.

### 4. 💭 Reflection
Answer the following prompts:
1. How did vibe coding change your approach to building a website compared to traditional coding, or website builders?
2. What "structural elements" did you borrow from elsewhere? Did you feel a need to attribute them?
3. What was the most surprising thing you learned about the AI tool's capabilities or limitations?
4. How closely does the final website match your original vision? Does it feel authentic to you? How do you see yourself in it?

### 5. 📜 AI Usage Trace
Link to your [local history log](log_deliverable/history.md) and any external AI tool histories (e.g., ChatGPT, Claude) used during the project.

### 6. 🙋 Authenticity Statement
You must include the Authenticity Statement from the template:
- **Responsibility**: Acknowledging that you are the sole architect and bear full responsibility.
- **Attribution**: Listing all human collaborators and inspirations.

---
*Your reflection and documentation matter more than the code. This class is about the process, not just the product.*


<!-- READINGS:START (generated by scripts/sync_readings.py — edit activities-manifest.json instead) -->

## 📖 Reading

- **Primary** 🟢 — Li, J. et al. 2026. Vibe coding in product teams: Reconfiguring AI-assisted workflows, prototyping, and collaboration. CHIWORK '26.
- **Optional** 🟢 — [Sandhaus, H., Gu, Q., Parreira, M.T., Ju, W. 2025. Co-Designing with Transformers: GenAI in Interactive System Design Education. DIS '25.](https://arxiv.org/abs/2410.14048)
- **Optional** 🟢 — Xia, Q. et al. 2026. "If you're very clever, no one knows you've used it": Social dynamics of GenAI literacy in the workplace. CHIWORK '26.

_Full course reading list: [readings.md](../../planning/readings.md)._
<!-- READINGS:END -->
