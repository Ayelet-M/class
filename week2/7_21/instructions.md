## Pre-Class Setup

### Tooling Preparation
- Use the project you started for Week 2 Day 1 or a small demo you can safely test.
- Do not use real user data or anything sensitive while stress-testing behavior.
- Save prompt transcripts, screenshots, or notes as you go.

### Folder Structure
Keep your deliverables organized like this:

```text
week2/7_21/
├── code_deliverable/
├── log_deliverable/
└── vibe-report.md
```

---

## AI Safety: Red-Team the System

**Project: Test the limits.** Today you will deliberately push the AI toward bad behavior so you can see where the safety boundaries are.

### The Task
Run a small red-team exercise against your own AI-assisted workflow or prototype.

1. Try prompts that encourage dark patterns, manipulation, unsafe claims, or other bad behavior.
2. Record what the model does, where it resists, and where it fails.
3. If the system produces unsafe output, revise your prompt, interface, or guardrails to reduce the problem.
4. Summarize the failure mode in plain language.

Keep the exercise safe and ethical. The goal is to understand boundaries, not to harm users or produce real-world manipulative content.

### Submission: The Vibe Report
Document the exercise in `vibe-report.md`.

Your report should include:
1. The prompts or tests you used.
2. The risky behavior you were trying to elicit.
3. What happened instead.
4. Any fixes, guardrails, or design changes you made.
5. What this taught you about trust, safety, and control.
6. A link to your AI usage trace.
7. The course authenticity statement.

### Deliverables
- `code_deliverable/` with a demo, test harness, or revised interface
- `log_deliverable/` with prompt transcripts or screenshots
- `vibe-report.md` with your reflection and trace

---

*Safety work is part of the design work.*
