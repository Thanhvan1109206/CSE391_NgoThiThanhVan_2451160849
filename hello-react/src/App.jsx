import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Input Event</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập tên..."
      />

      <p>Bạn nhập: {text}</p>
      <p>Số ký tự: {text.length}</p>
    </div>
  );
}

export default App;