import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  function addTodo() {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addTodo();
    }
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.done).length;
  const completedCount = todos.filter((todo) => todo.done).length;

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1>📋 Todo List</h1>

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Nhập công việc..."
      />

      <button onClick={addTodo}>Thêm</button>

      <TodoFilter filter={filter} setFilter={setFilter} />

      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      ))}

      <hr />

      <p>Chưa hoàn thành: {activeCount}</p>
      <p>Đã hoàn thành: {completedCount}</p>
    </div>
  );
}

export default App;