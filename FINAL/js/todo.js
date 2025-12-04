const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "×";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {
        return;
    }
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

if (todoForm) {
    todoForm.addEventListener("submit", handleTodoSubmit);
}

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}