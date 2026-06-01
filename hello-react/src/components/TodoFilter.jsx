function TodoFilter({ filter, setFilter }) {
  return (
    <div style={{ margin: "15px 0" }}>
      <button onClick={() => setFilter("all")}>
        Tất cả
      </button>

      <button onClick={() => setFilter("active")}>
        Chưa xong
      </button>

      <button onClick={() => setFilter("completed")}>
        Hoàn thành
      </button>
    </div>
  );
}

export default TodoFilter;