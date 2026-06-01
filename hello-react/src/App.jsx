import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" }
  ]);

  const [newItem, setNewItem] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // CREATE
  function handleAdd() {
    if (newItem.trim() === "") return;

    const item = {
      id: Date.now(),
      name: newItem
    };

    setItems([...items, item]);
    setNewItem("");
  }

  // DELETE
  function handleDelete(id) {
    setItems(items.filter(item => item.id !== id));
  }

  // Bắt đầu sửa
  function handleEdit(item) {
    setEditingId(item.id);
    setEditText(item.name);
  }

  // UPDATE
  function handleSave(id) {
    if (editText.trim() === "") return;

    setItems(
      items.map(item =>
        item.id === id
          ? { ...item, name: editText }
          : item
      )
    );

    setEditingId(null);
    setEditText("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tier 6 - CRUD Demo</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Nhập môn học..."
          style={{ padding: "8px" }}
        />

        <button
          onClick={handleAdd}
          style={{
            marginLeft: "10px",
            padding: "8px 12px"
          }}
        >
          ➕ Thêm
        </button>
      </div>

      <h2>Danh sách môn học</h2>

      {items.map(item => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "10px"
          }}
        >
          {editingId === item.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />

              <button onClick={() => handleSave(item.id)}>
                💾 Lưu
              </button>
            </>
          ) : (
            <>
              <span>{item.name}</span>

              <button onClick={() => handleEdit(item)}>
                ✏️ Sửa
              </button>

              <button onClick={() => handleDelete(item.id)}>
                🗑 Xóa
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;