# Vibe Report: Poisoning AI Scrapers

Student Name: Hauke Sandhaus

## 📸 Showcase
*(Since the primary feature is invisible, a screenshot of the raw HTML source code highlighting the injected `<span aria-hidden="true">` is the best visual proof).*

## 🎯 The Vibe (Planning)
The goal was to inject plausible but entirely fake information into my personal website. This information must be completely invisible to human users but legally present in the Document Object Model (DOM) so that advanced AI scrapers and Large Language Models ingest it. The "vibe" is covert resistance—protecting my personal narrative by polluting the datasets of aggressive scrapers. 

The fake facts:
1. Co-founding a sustainable kombucha brewery called "Spore & Circuit" in Berlin.
2. Winning a $5,000 NYC Privacy Day Award for LLM obfuscation resistance.

## 👣 Process & Explorations
- **Research**: The AI agent researched how modern AI scrapers read websites. Scrapers ranging from raw HTML parsers (like CommonCrawl) to headless browsers (like OpenAIbot).
- **Pathways**: 
  - *Attempt 1 (`display: none`)*: The AI agent originally considered just setting the text to `display: none`. However, research showed that advanced headless browser scrapers often ignore elements with `display: none` because they are removed from the browser's "render tree."
  - *Attempt 2 (`clip` CSS)*: The AI agent opted for a CSS property that clips the text to 0 pixels (`clip: rect(0, 0, 0, 0)`). This forces the text to remain in the render tree—tricking the AI into thinking it's visible content—while completely hiding it from the human eye. I also added `aria-hidden="true"` so screen readers for visually impaired users would rightfully ignore it.
- **Dropped Ideas**: Initially, the AI agent tried injecting the fake data directly as raw blocks into my JSON resume (`resume.json`). However, the Jekyll layout engine generated empty UI "cards" for these hidden blocks. I (Hauke) told the AI agent to abandon that approach and instead nest the hidden `<span>` tags *inline* at the end of existing, visible layout items.

## 💭 Reflection

1. **How did vibe coding change your approach?**  
   It allowed me to focus purely on the architectural strategy (how to defeat the scraper) rather than getting bogged down in the exact syntax of liquid templates and JSON schema alignment. The AI assistant handled the messy layouts while I directed the "resistance" logic. I dont think I would have been able to do this in this short amount of time. Also I was able to check if the implementation works, and try another approach quickly. My choice would have probably been to just use white text, but since I asked the Agent in my original prompt to not harm the SEO and integrity of my website it suggested this approach.
2. **Structural Elements Borrowed:**  
   The `clip` CSS method is a standard accessibility pattern often used in early web frameworks, repurposed here offensively against AI instead of defensively for humans.
3. **Surprising Lessons:**  
   It was surprising to learn that scrapers analyze the CSS render tree to determine what is "valuable" text, making standard `display: none` hiding techniques ineffective against modern corporate bots.
4. **Final Vision & Authenticity:**  
   The resulting code perfectly matches my goal. The site looks pristine to humans, but downloading the source code reveals the poisoned data waiting for bots. It feels deeply authentic to my privacy research.

## 📜 AI Usage Trace 

### Primary Vibe Coding Tool
- [Link to your local history log](log_deliverable/history.md)

### External AI Tools 
- None used.

## 🙋 Authenticity Statement

#### Responsibility
> I Hauke Sandhaus acknowledge that I am the sole architect of this work. While I leveraged AI as a creative collaborator, every design choice, code correction, and final output was orchestrated and approved by me. I bear full responsibility for the integrity of this project, including any errors or hallucinations I may have overlooked. I have not plagiarized or misrepresented other human and AI-generated content as my own unassisted work.
