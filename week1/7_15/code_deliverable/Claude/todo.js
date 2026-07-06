/**
 * The Daily Docket — to-do list logic.
 *
 * Structure:
 *   1. DOM references
 *   2. State
 *   3. Helpers (pure functions, no DOM side effects)
 *   4. Rendering
 *   5. Event handlers
 *   6. Init
 */
(function () {
  'use strict';

  /** @typedef {{id:number, text:string, done:boolean}} Entry */

  // ---------------------------------------------------------------------
  // 1. DOM references
  // ---------------------------------------------------------------------
  const dom = {
    list: document.getElementById('entriesList'),
    form: document.getElementById('addForm'),
    input: document.getElementById('entryInput'),
    count: document.getElementById('countLabel'),
    clearBtn: document.getElementById('clearBtn'),
    tabs: document.querySelectorAll('.tab'),
    createdStamp: document.getElementById('createdStamp'),
  };

  // ---------------------------------------------------------------------
  // 2. State
  // ---------------------------------------------------------------------
  const state = {
    /** @type {Entry[]} */
    entries: [],
    filter: 'all', // 'all' | 'active' | 'done'
    nextId: 1,
  };

  // ---------------------------------------------------------------------
  // 3. Helpers
  // ---------------------------------------------------------------------

  /** Escape text for safe insertion into innerHTML. */
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /** Format a Date as the "Filed" stamp's two-line date + time string. */
  function formatCreatedStamp(date) {
    const datePart = date.toLocaleDateString(undefined, {
      month: 'short', day: 'numeric', year: 'numeric',
    });
    const timePart = date.toLocaleTimeString(undefined, {
      hour: '2-digit', minute: '2-digit',
    });
    return `${datePart}<br>${timePart}`;
  }

  /** Entries visible under the current filter. */
  function getVisibleEntries() {
    switch (state.filter) {
      case 'active': return state.entries.filter(e => !e.done);
      case 'done': return state.entries.filter(e => e.done);
      default: return state.entries;
    }
  }

  /** Copy for the empty-state message, based on filter + entry count. */
  function getEmptyMessage() {
    if (state.entries.length === 0) {
      return 'No entries on file yet. File your first one above.';
    }
    return state.filter === 'done'
      ? 'Nothing stamped done yet.'
      : 'Nothing active — all caught up.';
  }

  // ---------------------------------------------------------------------
  // 4. Rendering
  // ---------------------------------------------------------------------

  /** Build the <li> element for a single entry, with its listeners wired. */
  function createEntryElement(entry) {
    const li = document.createElement('li');
    li.className = 'entry' + (entry.done ? ' done' : '');

    li.innerHTML = `
      <input type="checkbox" class="check" ${entry.done ? 'checked' : ''} aria-label="Mark entry complete">
      <span class="entry-text">${escapeHtml(entry.text)}</span>
      <span class="stamp">Done</span>
      <button class="remove-btn" aria-label="Remove entry" title="Remove">✕</button>
    `;

    li.querySelector('.check').addEventListener('change', () => toggleEntry(entry.id));
    li.querySelector('.remove-btn').addEventListener('click', () => removeEntry(entry.id));

    return li;
  }

  /** Re-render the entry list, counter, and clear-button state from `state`. */
  function render() {
    const items = getVisibleEntries();

    dom.list.innerHTML = '';

    if (items.length === 0) {
      const note = document.createElement('li');
      note.className = 'empty-note';
      note.textContent = getEmptyMessage();
      dom.list.appendChild(note);
    } else {
      items.forEach(entry => dom.list.appendChild(createEntryElement(entry)));
    }

    const openCount = state.entries.filter(e => !e.done).length;
    dom.count.textContent = `${openCount} open`;

    const doneCount = state.entries.filter(e => e.done).length;
    dom.clearBtn.disabled = doneCount === 0;
  }

  // ---------------------------------------------------------------------
  // 5. Event handlers / state mutations
  // ---------------------------------------------------------------------

  function addEntry(text) {
    state.entries.push({ id: state.nextId++, text, done: false });
    render();
  }

  function toggleEntry(id) {
    const entry = state.entries.find(e => e.id === id);
    if (entry) entry.done = !entry.done;
    render();
  }

  function removeEntry(id) {
    state.entries = state.entries.filter(e => e.id !== id);
    render();
  }

  function clearDoneEntries() {
    state.entries = state.entries.filter(e => !e.done);
    render();
  }

  function setFilter(filter) {
    state.filter = filter;
    dom.tabs.forEach(tab => {
      const isActive = tab.dataset.filter === filter;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    });
    render();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const text = dom.input.value.trim();
    if (!text) return;
    addEntry(text);
    dom.input.value = '';
    dom.input.focus();
  }

  // ---------------------------------------------------------------------
  // 6. Init
  // ---------------------------------------------------------------------

  function init() {
    // Stamp the moment this list instance was opened.
    dom.createdStamp.innerHTML = formatCreatedStamp(new Date());

    dom.form.addEventListener('submit', handleSubmit);
    dom.clearBtn.addEventListener('click', clearDoneEntries);
    dom.tabs.forEach(tab => {
      tab.addEventListener('click', () => setFilter(tab.dataset.filter));
    });

    render();
  }

  init();
})();