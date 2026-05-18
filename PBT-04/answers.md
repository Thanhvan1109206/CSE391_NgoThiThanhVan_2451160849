<<<<<<< HEAD
# PHẦN A — KIỂM TRA ĐỌC HIỂU

# Câu A1 (10đ) — 5 Loại Positioning

| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|---|---|---|---|---|
| `static` | Có | Theo normal flow mặc định | Có | Layout bình thường |
| `relative` | Có | So với vị trí ban đầu của chính nó | Có | Dịch nhẹ element, làm parent cho absolute |
| `absolute` | Không | Nearest positioned ancestor (parent gần nhất có position ≠ static) | Có | Badge, icon, overlay, popup nhỏ |
| `fixed` | Không | Viewport (màn hình trình duyệt) | Không | Navbar cố định, nút chat |
| `sticky` | Có | Parent + viewport khi scroll | Một phần | Sticky menu, sticky sidebar |

---

# Giải thích thêm

## Khi nào `absolute` tham chiếu `body`?

Khi KHÔNG có parent nào có:

```css
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

=> nó sẽ tham chiếu trang web (`body` hoặc viewport).

---

## Khi nào `absolute` tham chiếu parent?

Khi parent gần nhất có:

```css
position: relative;
```

=> `.child` sẽ nằm góc phải của `.box`.

---

# "Nearest positioned ancestor" là gì?

Là:

> Thằng cha gần nhất có `position` khác `static`.

`absolute` sẽ lấy nó làm mốc tọa độ.

---

# Câu A2 (10đ) — Flexbox vs Grid

## Trường hợp 1

```css
.container { display: flex; }
.item { flex: 1; }
```

Có 4 items.

### Kết quả

```text
| item | item | item | item |
```

---

## Trường hợp 2

```css
.container {
    display: flex;
    flex-wrap: wrap;
}

.item {
    width: 45%;
    margin: 2.5%;
}
```

Có 6 items.

### Kết quả

```text
| item | item |
| item | item |
| item | item |
```

---

## Trường hợp 3

```css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### Kết quả

```text
item          item          item
```

---

## Trường hợp 4

```css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    gap: 20px;
}
```

### Kết quả

```text
| 200px | flexible | 200px |
```

---

## Trường hợp 5

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
```

Có 7 items.

### Kết quả

```text
| item | item | item |
| item | item | item |
| item |
```

---

# Ghi nhớ nhanh

## Flexbox

- Layout 1 chiều
- Row hoặc column
- Dùng cho:
  - navbar
  - menu
  - card row

## Grid

- Layout 2 chiều
- Chia hàng + cột cùng lúc
- Dùng cho:
  - dashboard
  - gallery
  - layout trang web

---

# Câu C1 (10đ) — Flexbox vs Grid: Khi nào dùng gì?

| Tình huống | Nên dùng | Lý do |
|---|---|---|
| Navbar | Flexbox | Layout 1 chiều |
| Gallery Instagram | Grid | Layout lưới 2 chiều |
| Blog + sidebar | Flexbox | Chia ngang đơn giản |
| Footer 4 cột | Grid | Chia cột đều |
| Product card | Kết hợp | Grid ngoài + Flex trong |

---

# Câu C2 (10đ) — Debug Flexbox

# Lỗi 1 — Card không đều chiều cao

## Nguyên nhân

Nội dung card dài/ngắn khác nhau nên nút bị lệch.

## Cách sửa

```css
.card {
    display: flex;
    flex-direction: column;
}

.card .btn {
    margin-top: auto;
}
```

---

# Lỗi 2 — Không căn giữa được content

## Code sửa

```css
.hero {
    display: flex;

    justify-content: center;
    align-items: center;
}
```

---

# Lỗi 3 — Sidebar bị co lại

## Code sửa

```css
.sidebar {
    width: 250px;
    flex-shrink: 0;
}
```

---

# Tổng kết nhanh

| Lỗi | Cách sửa |
|---|---|
| Card không đều | `flex-direction: column` + `margin-top: auto` |
| Không căn giữa | `justify-content: center` + `align-items: center` |
| Sidebar bị co | `flex-shrink: 0` |
=======

>>>>>>> 37059c8d0c9072b705815816692bcce139513d89
