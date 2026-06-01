function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />

      <span
        style={{
          marginLeft: "10px",
          textDecoration: todo.done ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        style={{ marginLeft: "10px" }}
      >
        Xóa
      </button>
    </div>
  );
}

export default TodoItem;