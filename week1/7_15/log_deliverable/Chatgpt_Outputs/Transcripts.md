'''Prompt 1 transcript:'''
Below is a complete small To-Do web app using **HTML + CSS + JavaScript** with:

* ✅ Add tasks
* ✅ Remove tasks
* ✅ Mark tasks as completed
* ✅ Filter (All / Active / Completed)
* ✅ Press **Enter** to add a task
* ✅ Saves tasks in **Local Storage** (persists after refresh)

### Project Structure

```
todo-app/
│── todo.html
│── style.css
└── script.js
```

---

## todo.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h1>To-Do List</h1>

    <div class="input-area">
        <input type="text" id="taskInput" placeholder="Enter a task...">
        <button id="addBtn">Add</button>
    </div>

    <div class="filters">
        <button class="filter active" data-filter="all">All</button>
        <button class="filter" data-filter="active">Active</button>
        <button class="filter" data-filter="completed">Completed</button>
    </div>

    <ul id="taskList"></ul>
</div>

<script src="script.js"></script>

</body>
</html>
```

---

## style.css

```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f4f4f4;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
}

.container{
    background:white;
    width:420px;
    padding:25px;
    border-radius:10px;
    box-shadow:0 5px 15px rgba(0,0,0,.2);
}

h1{
    text-align:center;
    margin-bottom:20px;
}

.input-area{
    display:flex;
    gap:10px;
}

input{
    flex:1;
    padding:10px;
    font-size:16px;
}

#addBtn{
    padding:10px 18px;
    cursor:pointer;
    background:#007bff;
    color:white;
    border:none;
    border-radius:5px;
}

#addBtn:hover{
    background:#0056b3;
}

.filters{
    display:flex;
    justify-content:center;
    gap:10px;
    margin:20px 0;
}

.filter{
    padding:8px 14px;
    cursor:pointer;
    border:none;
    background:#ddd;
    border-radius:5px;
}

.filter.active{
    background:#007bff;
    color:white;
}

ul{
    list-style:none;
}

li{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:12px;
    margin-bottom:10px;
    background:#f0f0f0;
    border-radius:6px;
}

.task-text{
    flex:1;
    cursor:pointer;
}

.completed{
    text-decoration:line-through;
    color:gray;
}

.delete{
    background:red;
    color:white;
    border:none;
    padding:6px 10px;
    border-radius:5px;
    cursor:pointer;
}

.delete:hover{
    background:darkred;
}
```

---

## script.js

```javascript
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filter");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {

    taskList.innerHTML = "";

    let filteredTasks = tasks.filter(task => {

        if (currentFilter === "active") {
            return !task.completed;
        }

        if (currentFilter === "completed") {
            return task.completed;
        }

        return true;
    });

    filteredTasks.forEach((task, index) => {

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.className = "task-text";

        if (task.completed) {
            span.classList.add("completed");
        }

        span.textContent = task.text;

        span.addEventListener("click", () => {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";

        deleteBtn.addEventListener("click", () => {

            const originalIndex = tasks.indexOf(task);
            tasks.splice(originalIndex, 1);

            saveTasks();
            renderTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

function addTask() {

    const text = taskInput.value.trim();

    if (text === "") return;

    tasks.push({
        text: text,
        completed: false
    });

    taskInput.value = "";

    saveTasks();
    renderTasks();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        renderTasks();
    });

});

renderTasks();
```

### Features included

* ✔ Add new task
* ✔ Delete task
* ✔ Click a task to mark it completed/uncompleted
* ✔ Filter by **All**, **Active**, and **Completed**
* ✔ Tasks are stored in **localStorage**, so they remain after refreshing the page
* ✔ Simple, responsive interface suitable for a small web feature or assignment




'''Prompt 2 Transcript:'''
To satisfy the requirement **"Must have date and time of creation in the UI"**, modify your `script.js` and `style.css` so every task displays the timestamp when it was created.

### 1. Store the creation date/time

Replace the `tasks.push()` inside `addTask()` with:

```javascript
tasks.push({
    text: text,
    completed: false,
    createdAt: new Date().toLocaleString()
});
```

---

### 2. Display it in the UI

Replace the code that creates the task text:

```javascript
const span = document.createElement("span");
span.className = "task-text";

if (task.completed) {
    span.classList.add("completed");
}

span.textContent = task.text;
```

with:

```javascript
const span = document.createElement("div");
span.className = "task-text";

if (task.completed) {
    span.classList.add("completed");
}

span.innerHTML = `
    <strong>${task.text}</strong>
    <small>Created: ${task.createdAt}</small>
`;
```

---

### 3. Add styling

Append this to **style.css**:

```css
.task-text{
    flex:1;
    display:flex;
    flex-direction:column;
    cursor:pointer;
}

.task-text small{
    color:#666;
    font-size:12px;
    margin-top:4px;
}
```

---

### Result

Each task will appear like this:

```
Buy groceries
Created: 7/6/2026, 3:42:18 PM                         [Delete]
```

or (depending on the user's locale):

```
Finish assignment
Created: 06/07/2026, 15:42:18                        [Delete]
```

This meets the requirement that the **date and time of creation are visible in the UI** for every to-do item.




'''Prompt 3 Transcript:'''
Here are some refactoring ideas that improve the **readability and modularity** of the code without changing any features or the UI.

### 1. Create helper functions

Instead of putting all logic inside `renderTasks()`, split it up:

```javascript
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
}

function toggleTask(task) {
    task.completed = !task.completed;
    saveTasks();
    renderTasks();
}

function deleteTask(task) {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}
```

---

### 2. Separate filtering logic

Instead of:

```javascript
let filteredTasks = tasks.filter(task => {
    if (currentFilter === "active") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
});
```

Create:

```javascript
function getFilteredTasks() {
    switch (currentFilter) {
        case "active":
            return tasks.filter(task => !task.completed);

        case "completed":
            return tasks.filter(task => task.completed);

        default:
            return tasks;
    }
}
```

Then in `renderTasks()`:

```javascript
getFilteredTasks().forEach(createTaskElement);
```

---

### 3. Move task creation into its own function

Instead of building each `<li>` inside `renderTasks()`, create:

```javascript
function createTaskElement(task) {
    const li = document.createElement("li");

    const taskInfo = document.createElement("div");
    taskInfo.className = "task-text";

    if (task.completed) {
        taskInfo.classList.add("completed");
    }

    taskInfo.innerHTML = `
        <strong>${task.text}</strong>
        <small>Created: ${task.createdAt}</small>
    `;

    taskInfo.addEventListener("click", () => toggleTask(task));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(task));

    li.append(taskInfo, deleteBtn);

    return li;
}
```

Then `renderTasks()` becomes much cleaner:

```javascript
function renderTasks() {
    taskList.innerHTML = "";

    getFilteredTasks().forEach(task => {
        taskList.appendChild(createTaskElement(task));
    });
}
```

---

### 4. Make filter button handling reusable

Instead of embedding everything in the event listener:

```javascript
function setFilter(filter) {
    currentFilter = filter;

    filterButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.filter === filter
        );
    });

    renderTasks();
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        setFilter(button.dataset.filter);
    });
});
```

---

### 5. Add constants section

```javascript
const STORAGE_KEY = "tasks";

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filter");
```

Then:

```javascript
localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
```

---

### 6. Initialize in one place

Instead of having setup code at the bottom, use an initialization function:

```javascript
function initializeApp() {
    loadTasks();

    addBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            setFilter(button.dataset.filter);
        });
    });

    renderTasks();
}

initializeApp();
```

---

These changes don't alter the application's appearance or behavior. They simply make the code easier to read, test, and maintain by giving each function a single responsibility and reducing duplicated logic.





'''Prompt 3 Retry Transcript:'''
### `todo.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h1>To-Do List</h1>

    <div class="input-area">
        <input
            type="text"
            id="taskInput"
            placeholder="Enter a task..."
        >
        <button id="addBtn">Add</button>
    </div>

    <div class="filters">
        <button class="filter active" data-filter="all">All</button>
        <button class="filter" data-filter="active">Active</button>
        <button class="filter" data-filter="completed">Completed</button>
    </div>

    <ul id="taskList"></ul>
</div>

<script src="script.js"></script>

</body>
</html>
```

---

### `style.css`

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    width: 420px;
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .2);
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.input-area {
    display: flex;
    gap: 10px;
}

input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
}

#addBtn {
    padding: 10px 18px;
    border: none;
    border-radius: 5px;
    background: #007bff;
    color: white;
    cursor: pointer;
}

#addBtn:hover {
    background: #0056b3;
}

.filters {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
}

.filter {
    padding: 8px 14px;
    border: none;
    border-radius: 5px;
    background: #ddd;
    cursor: pointer;
}

.filter.active {
    background: #007bff;
    color: white;
}

ul {
    list-style: none;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f0f0f0;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 6px;
}

.task-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

.task-text small {
    margin-top: 4px;
    color: #666;
    font-size: 12px;
}

.completed {
    text-decoration: line-through;
    color: gray;
}

.delete {
    padding: 6px 10px;
    border: none;
    border-radius: 5px;
    background: red;
    color: white;
    cursor: pointer;
}

.delete:hover {
    background: darkred;
}
```

---

### `script.js`

```javascript
const STORAGE_KEY = "tasks";

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filter");

let tasks = [];
let currentFilter = "all";

/* ---------- Storage ---------- */

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasks() {
    tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

/* ---------- Task Operations ---------- */

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    tasks.push({
        text: text,
        completed: false,
        createdAt: new Date().toLocaleString()
    });

    taskInput.value = "";

    saveTasks();
    renderTasks();
}

function toggleTask(task) {
    task.completed = !task.completed;

    saveTasks();
    renderTasks();
}

function deleteTask(task) {
    const index = tasks.indexOf(task);

    if (index !== -1) {
        tasks.splice(index, 1);
    }

    saveTasks();
    renderTasks();
}

/* ---------- Filtering ---------- */

function getFilteredTasks() {
    switch (currentFilter) {
        case "active":
            return tasks.filter(task => !task.completed);

        case "completed":
            return tasks.filter(task => task.completed);

        default:
            return tasks;
    }
}

function setFilter(filter) {
    currentFilter = filter;

    filterButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.filter === filter
        );
    });

    renderTasks();
}

/* ---------- Rendering ---------- */

function createTaskElement(task) {
    const li = document.createElement("li");

    const taskInfo = document.createElement("div");
    taskInfo.className = "task-text";

    if (task.completed) {
        taskInfo.classList.add("completed");
    }

    taskInfo.innerHTML = `
        <strong>${task.text}</strong>
        <small>Created: ${task.createdAt}</small>
    `;

    taskInfo.addEventListener("click", () => toggleTask(task));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => deleteTask(task));

    li.appendChild(taskInfo);
    li.appendChild(deleteBtn);

    return li;
}

function renderTasks() {
    taskList.innerHTML = "";

    getFilteredTasks().forEach(task => {
        taskList.appendChild(createTaskElement(task));
    });
}

/* ---------- Event Listeners ---------- */

function setupEventListeners() {
    addBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            setFilter(button.dataset.filter);
        });
    });
}

/* ---------- Initialize ---------- */

function initializeApp() {
    loadTasks();
    setupEventListeners();
    renderTasks();
}

initializeApp();
```

### Improvements made (without changing features or appearance)

* Broke the code into logical sections (Storage, Task Operations, Filtering, Rendering, Initialization).
* Created dedicated helper functions (`loadTasks`, `saveTasks`, `toggleTask`, `deleteTask`, `createTaskElement`, `setupEventListeners`, `initializeApp`).
* Removed duplicated logic.
* Used a `STORAGE_KEY` constant instead of hardcoding `"tasks"` multiple times.
* Improved variable and function naming for readability.
* Kept all existing functionality exactly the same:

  * ✅ Add task
  * ✅ Delete task
  * ✅ Mark complete/incomplete
  * ✅ Filter (All/Active/Completed)
  * ✅ Press **Enter** to add
  * ✅ LocalStorage persistence
  * ✅ Display creation date and time in the UI



'''Prompt 4 Transcript:'''
The issue is here:

```js
createdAt: 1999/1/1
```

That is **not a date object or timestamp** — it’s being evaluated as math:

* `1999 / 1 / 1` → `1999`

So every task ends up with a broken static value.

---

## ✅ Fix (correct way)

You should store an actual timestamp using `Date`.

### Replace this line:

```js
createdAt: 1999/1/1
```

### With ONE of these correct options:

---

### ✅ Option 1 (recommended — clean UI string)

```js
createdAt: new Date().toLocaleString()
```

Example output:

```
7/6/2026, 3:45:12 PM
```

---

### ✅ Option 2 (more precise — ISO format)

```js
createdAt: new Date().toISOString()
```

Example:

```
2026-07-06T19:45:12.123Z
```

---

## 🔧 Fixed `addTask()` (correct version)

```js
function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    tasks.push({
        text: text,
        completed: false,
        createdAt: new Date().toLocaleString()
    });

    taskInput.value = "";

    saveTasks();
    renderTasks();
}
```

---

## Why it happened

JavaScript interpreted:

```js
1999/1/1
```

as arithmetic, not a date.

---

If you want next upgrade, I can help you:

* sort tasks by newest first
* show “time ago” (like 2 min ago)
* edit tasks inline
* add due dates + reminders
