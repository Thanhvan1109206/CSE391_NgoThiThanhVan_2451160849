import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tier 4 - useState</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      <input
        type="text"
        placeholder="Nhập tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Xin chào: {name}</p>

      <hr />

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Ẩn" : "Hiện"}
      </button>

      {isVisible && <p>Nội dung đang hiển thị</p>}
    </div>
  );
}

export default App;