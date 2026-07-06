## ✅ `README.md`

```markdown id="readme1"
# To-Do List App

A small, clean, and modular to-do list web application built with **HTML, CSS, and Vanilla JavaScript**.

## Features

- Add new tasks
- Delete tasks
- Mark tasks as completed
- Filter tasks:
  - All
  - Active
  - Completed
- Stores tasks in **localStorage** (persistent after refresh)
- Shows **creation date and time** for each task
- Press **Enter** to add tasks

## Project Structure

```

code_deliverable/
├── todo.html
├── style.css
└── script.js

```

## How to Run

1. Open `todo.html` in any modern web browser
2. Start adding tasks

No build tools or dependencies required.

## Data Storage

Tasks are stored in browser `localStorage` under the key:

```

tasks

````

Each task object looks like:

```js
{
text: "Example task",
completed: false,
createdAt: "7/6/2026, 3:45:00 PM"
}
````

## Notes

* This is a lightweight front-end project
* No backend required
* Fully client-side

`````


