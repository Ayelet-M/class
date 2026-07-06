The Daily Docket — To-Do List

A small, self-contained to-do list webpage styled like a library catalog
card: typewriter type, cut-tab filters, and a red ink "stamp" that appears
when an entry is marked done.

Features


Add — type in the "File a new entry…" field and press Enter or click
File.
Remove — the ✕ button on each entry.
Filter — tabs for All / Active / Done.
Clear done — removes every completed entry in one click.
Open counter — shows how many entries are still open.
Filed stamp — shows the date and time the page was loaded (top-right of
the header).


State lives in memory only for the current page session (no localStorage),
so the list resets on reload.

Project structure

code_deliverable/
  todo.html      — markup shell (structure only)
  todo.css       — all styling, grouped under labeled sections
  todo.js        — app behavior (state, rendering, event handlers, init)

log_deliverable/
  history.md     — dated log of every prompt/change made to code_deliverable/

Running it

Keep todo.html, todo.css, and todo.js in the same folder, then open
todo.html directly in a browser — no build step or server required.

Notes


The "Filed" timestamp reflects when the page was opened, not a fixed
build time, since this is a static file with no server to record that.