const STORAGE_KEY = "simple-todo-list";
const FILTERS = {
  all: "all",
  active: "active",
  completed: "completed",
};

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const count = document.getElementById("task-count");
const filterButtons = Array.from(document.querySelectorAll(".filter"));

let todos = loadTodos();
let currentFilter = FILTERS.all;

function createTodo(taskText) {
  const now = Date.now();
  return {
    id: now,
    text: taskText,
    completed: false,
    createdAt: now,
  };
}

function loadTodos() {
  try {
    const storedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return storedTodos.map((todo, index) => ({
      ...todo,
      id: Number(todo.id) || Date.now() + index,
      createdAt: Number(todo.createdAt) || Date.now() + index,
    }));
  } catch (error) {
    console.warn("Unable to load todos from storage.", error);
    return [];
  }
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getFilteredTodos() {
  switch (currentFilter) {
    case FILTERS.active:
      return todos.filter((todo) => !todo.completed);
    case FILTERS.completed:
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
}

function formatCreatedAt(timestamp) {
  return new Date(timestamp).toLocaleString([], {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function updateTaskCount() {
  const remainingCount = todos.filter((todo) => !todo.completed).length;
  count.textContent = `${remainingCount} task${remainingCount === 1 ? "" : "s"} left`;
}

function updateFilterButtons() {
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === currentFilter);
  });
}

function createEmptyState() {
  const emptyState = document.createElement("li");
  emptyState.className = "empty-state";
  emptyState.textContent =
    currentFilter === FILTERS.all
      ? "No tasks yet. Add one above!"
      : `No ${currentFilter} tasks.`;
  return emptyState;
}

function createTodoItem(todo) {
  const item = document.createElement("li");
  item.className = `todo-item${todo.completed ? " completed" : ""}`;
  item.dataset.id = String(todo.id);

  const createdLabel = formatCreatedAt(todo.createdAt);
  item.innerHTML = `
    <label class="todo-main">
      <input type="checkbox" class="toggle" ${todo.completed ? "checked" : ""} />
      <span class="todo-text-wrap">
        <span class="todo-text">${escapeHtml(todo.text)}</span>
        <span class="todo-meta">Created ${createdLabel}</span>
      </span>
    </label>
    <button class="delete-btn" type="button" aria-label="Delete task">×</button>
  `;

  return item;
}

function renderTodos() {
  const filteredTodos = getFilteredTodos();
  list.innerHTML = "";

  if (filteredTodos.length === 0) {
    list.appendChild(createEmptyState());
    updateTaskCount();
    return;
  }

  filteredTodos.forEach((todo) => {
    list.appendChild(createTodoItem(todo));
  });

  updateTaskCount();
}

function addTodo(taskText) {
  todos = [createTodo(taskText), ...todos];

  saveTodos();
  renderTodos();
}

function toggleTodo(todoId) {
  todos = todos.map((todo) =>
    todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
  );

  saveTodos();
  renderTodos();
}

function removeTodo(todoId) {
  todos = todos.filter((todo) => todo.id !== todoId);
  saveTodos();
  renderTodos();
}

function setFilter(filter) {
  currentFilter = filter;
  updateFilterButtons();
  renderTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const taskText = input.value.trim();

  if (!taskText) return;

  addTodo(taskText);
  input.value = "";
}

function handleListChange(event) {
  const toggle = event.target.closest(".toggle");
  if (!toggle) return;

  const todoItem = toggle.closest(".todo-item");
  if (!todoItem) return;

  const todoId = Number(todoItem.dataset.id);
  toggleTodo(todoId);
}

function handleListClick(event) {
  const deleteButton = event.target.closest(".delete-btn");
  if (!deleteButton) return;

  const todoItem = deleteButton.closest(".todo-item");
  if (!todoItem) return;

  const todoId = Number(todoItem.dataset.id);
  removeTodo(todoId);
}

function attachEvents() {
  form.addEventListener("submit", handleSubmit);
  list.addEventListener("change", handleListChange);
  list.addEventListener("click", handleListClick);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setFilter(button.dataset.filter);
    });
  });
}

attachEvents();
updateFilterButtons();
renderTodos();
