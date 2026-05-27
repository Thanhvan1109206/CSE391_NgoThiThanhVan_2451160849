# PHIẾU BÀI TẬP 09 — DOM MANIPULATION & EVENTS

---

# PHẦN A — KIỂM TRA ĐỌC HIỂU

# Câu A1 — DOM Tree

## DOM Tree

```text
div#app
│
├── header
│   ├── h1
│   │   └── "Todo App"
│   │
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        │
        └── li.todo-item.completed
            └── "Learn CSS"
```

---

## querySelector

### 1. Chọn thẻ h1

```js
document.querySelector("h1");
```

---

### 2. Chọn input trong form

```js
document.querySelector("#todoForm input");
```

---

### 3. Chọn tất cả .todo-item

```js
document.querySelectorAll(".todo-item");
```

---

### 4. Chọn link đang active

```js
document.querySelector(".active");
```

---

### 5. Chọn li đầu tiên trong #todoList

```js
document.querySelector("#todoList li");
```

---

### 6. Chọn tất cả a bên trong nav

```js
document.querySelectorAll("nav a");
```

---

# Câu A2 — innerHTML vs textContent

## 1. innerHTML

- Đọc hoặc ghi HTML bên trong element
- Có thể render HTML tags

Ví dụ:

```js
document.querySelector("#demo").innerHTML =
    "<b>Hello</b>";
```

Kết quả:
- chữ Hello in đậm

---

## 2. textContent

- Chỉ xử lý text
- Không render HTML tags
- An toàn hơn

Ví dụ:

```js
document.querySelector("#demo").textContent =
    "<b>Hello</b>";
```

Kết quả:
- hiển thị nguyên văn:
<b>Hello</b>

---

## Khi nào dùng?

### innerHTML
Dùng khi:
- cần render HTML động
- tạo card/list/template

---

### textContent
Dùng khi:
- hiển thị text user nhập
- tránh XSS
- update text đơn giản

---

# Câu hỏi bảo mật — XSS

## Vì sao innerHTML nguy hiểm?

Vì user có thể chèn:
- script
- event handler
- HTML độc hại

→ gây Cross-Site Scripting (XSS)

---

## Ví dụ nguy hiểm

```js
const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").innerHTML =
    userInput;
```

Nếu user nhập:

```html
<img src=x onerror="alert('Hacked!')">
```

→ JavaScript sẽ chạy.

---

## Cách sửa an toàn

```js
const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").textContent =
    userInput;
```

---

# Câu A3 — Event Bubbling

## Code

```js
document.querySelector("#outer")
.addEventListener("click", () => {
    console.log("OUTER");
});

document.querySelector("#inner")
.addEventListener("click", () => {
    console.log("INNER");
});

document.querySelector("#btn")
.addEventListener("click", (e) => {
    console.log("BUTTON");
});
```

---

## Khi click button

Event bubbling:
- button → inner → outer

Output:

```text
BUTTON
INNER
OUTER
```

---

## Nếu dùng stopPropagation()

```js
e.stopPropagation();
```

Output:

```text
BUTTON
```

Vì event không bubble lên parent nữa.

---

# PHẦN C — DEBUG & PHÂN TÍCH

# Câu C1 — Debug DOM Code

## Các lỗi trong code

### 1. Sai event name

❌ Sai:

```js
addEventListener("onclick")
```

✅ Đúng:

```js
addEventListener("click")
```

---

### 2. countDisplay là const nhưng gán lại

❌ Sai:

```js
countDisplay = count;
```

✅ Đúng:

```js
countDisplay.textContent = count;
```

---

### 3. innerHTML = null

❌ Không nên:

```js
historyList.innerHTML = null;
```

✅ Đúng:

```js
historyList.innerHTML = "";
```

---

### 4. item.remove thiếu ()

❌ Sai:

```js
item.remove;
```

✅ Đúng:

```js
item.remove();
```

---

### 5. localStorage trả về string

❌ Sai:

```js
count = localStorage.getItem("count");
```

✅ Đúng:

```js
count = Number(localStorage.getItem("count"));
```

---

### 6. Không load history từ localStorage

Thiếu:

```js
historyList.innerHTML =
    localStorage.getItem("history");
```

---

### 7. decrement không update history

Nút decrement không lưu history.

Cần thêm:

```js
const li = document.createElement("li");
li.textContent =
    "Count changed to " + count;

historyList.append(li);
```

---

## Code đã sửa

```js
const countDisplay =
    document.querySelector(".count");

const historyList =
    document.getElementById("history");

let count = 0;


// Increment

document.querySelector("#incrementBtn")
.addEventListener("click", function() {

    count++;

    countDisplay.textContent = count;

    const li = document.createElement("li");

    li.textContent =
        "Count changed to " + count;

    li.addEventListener("click", function() {
        deleteHistory(this);
    });

    historyList.append(li);
});


// Decrement

document.querySelector("#decrementBtn")
.addEventListener("click", function() {

    count--;

    countDisplay.textContent = count;

    const li = document.createElement("li");

    li.textContent =
        "Count changed to " + count;

    historyList.append(li);
});


// Reset

document.querySelector("#resetBtn")
.addEventListener("click", () => {

    count = 0;

    countDisplay.textContent = count;

    historyList.innerHTML = "";
});


// Delete history

function deleteHistory(element) {
    element.parentNode.removeChild(element);
}


// Clear all history

document.querySelector("#clearHistory")
.addEventListener("click", () => {

    const items =
        historyList.querySelectorAll("li");

    items.forEach(item => {
        item.remove();
    });
});


// Save localStorage

window.addEventListener("beforeunload", () => {

    localStorage.setItem("count", count);

    localStorage.setItem(
        "history",
        historyList.innerHTML
    );
});


// Load localStorage

window.addEventListener("load", () => {

    count = Number(
        localStorage.getItem("count")
    ) || 0;

    countDisplay.textContent = count;

    historyList.innerHTML =
        localStorage.getItem("history") || "";
});
```

---

# Câu C2 — Performance

## Vì sao bind event lên 1000 elements là BAD PRACTICE?

Ví dụ:

```js
items.forEach(item => {
    item.addEventListener("click", handler);
});
```

Vấn đề:

- Tốn RAM
- Tạo 1000 event listeners
- Browser xử lý chậm
- Khó maintain

---

# Event Delegation giải quyết thế nào?

Chỉ bind event lên parent:

```js
list.addEventListener("click", (e) => {

    if (e.target.matches("li")) {
        console.log(e.target.textContent);
    }
});
```

Ưu điểm:
- chỉ cần 1 listener
- tiết kiệm memory
- nhanh hơn
- support dynamic elements

---

# DocumentFragment

## Code gốc

```js
for (let i = 0; i < 1000; i++) {

    const div = document.createElement("div");

    div.textContent = `Item ${i}`;

    document.body.appendChild(div);
}
```

Vấn đề:
- appendChild 1000 lần
- browser reflow/repaint liên tục

---

# Refactor với DocumentFragment

```js
const fragment =
    document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {

    const div =
        document.createElement("div");

    div.textContent = `Item ${i}`;

    fragment.appendChild(div);
}

document.body.appendChild(fragment);
```

---

# Tại sao nhanh hơn?

Vì:
- DOM thật chỉ update 1 lần
- giảm reflow
- giảm repaint
- tối ưu performance
- browser render nhanh hơn