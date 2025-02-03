const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const noTodo = document.getElementById("notodo");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const div = event.target.parentElement;
  div.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(div.id));
  saveToDos();
  if (toDos.length === 0) {
    noTodo.classList.add("hidden");
  } else {
    noTodo.classList.remove("hidden");
  }
}

function toggleDisabled(checkbox) {
  checkbox.disabled = true; // 체크하면 비활성화
}

function paintToDo(newTodo) {
  const div = document.createElement("div");
  div.className = "field-row";
  div.id = newTodo.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `todo-${newTodo.id}`;
  checkbox.onclick = function () {
    toggleDisabled(checkbox);
  };

  const label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  div.appendChild(checkbox);
  div.appendChild(label);
  div.appendChild(button);
  toDoList.appendChild(div);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
  if (toDos.length === 0) {
    noTodo.classList.add("hidden");
  } else {
    noTodo.classList.remove("hidden");
  }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

if (toDos.length === 0) {
  noTodo.classList.add("hidden");
} else {
  noTodo.classList.remove("hidden");
}