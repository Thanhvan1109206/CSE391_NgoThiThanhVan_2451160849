const todoForm = document.querySelector("#todoForm");

const todoInput = document.querySelector("#todoInput");

const todoList = document.querySelector("#todoList");

const countText = document.querySelector("#count");

const filterButtons =
    document.querySelectorAll(".filters button");

const clearCompletedBtn =
    document.querySelector("#clearCompleted");


// ===============================
// DATA
// ===============================

let todos =
    JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";


// ===============================
// SAVE LOCAL STORAGE
// ===============================

function saveTodos() {

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}


// ===============================
// UPDATE COUNT
// ===============================

function updateCount() {

    const activeTodos =
        todos.filter(todo => !todo.completed);

    countText.textContent =
        `${activeTodos.length} items left`;
}


// ===============================
// RENDER TODOS
// ===============================

function renderTodos() {

    todoList.innerHTML = "";

    let filteredTodos = todos;

    if (currentFilter === "active") {

        filteredTodos =
            todos.filter(todo => !todo.completed);
    }

    if (currentFilter === "completed") {

        filteredTodos =
            todos.filter(todo => todo.completed);
    }


    filteredTodos.forEach(todo => {

        const li = document.createElement("li");

        li.classList.add("todo-item");

        if (todo.completed) {
            li.classList.add("completed");
        }

        li.dataset.id = todo.id;


        // TEXT

        const span =
            document.createElement("span");

        span.classList.add("todo-text");

        span.textContent = todo.text;


        // DELETE BUTTON

        const deleteBtn =
            document.createElement("button");

        deleteBtn.classList.add("delete-btn");

        deleteBtn.textContent = "❌";


        li.appendChild(span);

        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });

    updateCount();

    saveTodos();
}


// ===============================
// ADD TODO
// ===============================

todoForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const text = todoInput.value.trim();

    if (text === "") return;

    todos.push({
        id: Date.now(),
        text,
        completed: false
    });

    todoInput.value = "";

    renderTodos();
});


// ===============================
// EVENT DELEGATION
// ===============================

todoList.addEventListener("click", (e) => {

    const li = e.target.closest(".todo-item");

    if (!li) return;

    const id = Number(li.dataset.id);

    const todo =
        todos.find(todo => todo.id === id);


    // DELETE

    if (e.target.classList.contains("delete-btn")) {

        todos = todos.filter(
            todo => todo.id !== id
        );

        renderTodos();
    }


    // TOGGLE COMPLETED

    if (e.target.classList.contains("todo-text")) {

        todo.completed = !todo.completed;

        renderTodos();
    }
});


// ===============================
// EDIT TODO
// ===============================

todoList.addEventListener("dblclick", (e) => {

    if (!e.target.classList.contains("todo-text")) {
        return;
    }

    const li =
        e.target.closest(".todo-item");

    const id = Number(li.dataset.id);

    const todo =
        todos.find(todo => todo.id === id);


    const input =
        document.createElement("input");

    input.type = "text";

    input.value = todo.text;

    input.classList.add("edit-input");


    li.replaceChild(input, e.target);

    input.focus();


    input.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            todo.text = input.value.trim();

            renderTodos();
        }
    });
});


// ===============================
// FILTER
// ===============================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter =
            button.dataset.filter;

        renderTodos();
    });
});


// ===============================
// CLEAR COMPLETED
// ===============================

clearCompletedBtn
.addEventListener("click", () => {

    todos = todos.filter(
        todo => !todo.completed
    );

    renderTodos();
});


// ===============================
// INIT
// ===============================

renderTodos();