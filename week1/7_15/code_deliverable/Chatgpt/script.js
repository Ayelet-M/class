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