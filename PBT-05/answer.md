# Câu A1 (5đ) — Viewport & Mobile-First

## 1. Thẻ `<meta viewport>` chuẩn

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Giải thích từng thuộc tính

- `width=device-width`
  - Chiều rộng của trang sẽ bằng đúng chiều rộng thiết bị.
  - Ví dụ: iPhone rộng 390px thì viewport cũng là 390px.

- `initial-scale=1.0`
  - Mức zoom ban đầu khi mở trang.
  - `1.0` nghĩa là không zoom in hoặc zoom out.

---

## 2. Nếu thiếu thẻ viewport thì iPhone hiển thị thế nào?

Nếu thiếu thẻ viewport:

- iPhone sẽ giả lập trang web như desktop (~980px).
- Trình duyệt tự thu nhỏ toàn bộ trang để vừa màn hình điện thoại.
- Kết quả:
  - Chữ rất nhỏ
  - Nút bấm khó nhấn
  - Layout bị co lại
  - Responsive hoạt động sai

Ví dụ:
- Một website desktop rộng 1200px sẽ bị ép nhỏ để vừa màn hình điện thoại khoảng 390px.

---

## 3. Mobile-First vs Desktop-First

## Mobile-First

### Ý tưởng
- Viết CSS cho mobile trước.
- Sau đó dùng `min-width` để mở rộng cho tablet/desktop.

### Ví dụ

```css
/* Mobile */
.container {
    width: 100%;
    background: lightblue;
}

/* Tablet/Desktop */
@media (min-width: 768px) {
    .container {
        width: 750px;
        background: lightgreen;
    }
}
```

---

## Desktop-First

### Ý tưởng
- Viết CSS cho desktop trước.
- Sau đó dùng `max-width` để thu nhỏ cho mobile.

### Ví dụ

```css
/* Desktop */
.container {
    width: 1200px;
    background: lightgreen;
}

/* Mobile */
@media (max-width: 768px) {
    .container {
        width: 100%;
        background: lightblue;
    }
}
```

---

## Tại sao Mobile-First được khuyên dùng?

### Vì:

- Điện thoại hiện chiếm đa số người dùng.
- CSS nhẹ hơn cho mobile.
- Performance tốt hơn.
- Responsive dễ mở rộng hơn.
- Phù hợp cách hoạt động của media queries hiện đại.

---

# Câu A2 (5đ) — Breakpoints

| Breakpoint | Kích thước | Thiết bị đại diện | Ví dụ lưới sản phẩm |
|---|---|---|---|
| Extra Small | `<576px` | Điện thoại nhỏ | 1 cột |
| Small (sm) | `≥576px` | Điện thoại lớn | 2 cột |
| Medium (md) | `≥768px` | Tablet | 2–3 cột |
| Large (lg) | `≥992px` | Laptop | 3–4 cột |
| Extra Large (xl) | `≥1200px` | Desktop lớn | 4 cột |
| XXL | `≥1400px` | Màn hình rất lớn | 5–6 cột |

---

# Câu A3 (5đ) — Media Queries

## CSS

```css
.container {
    width: 100%;
    padding: 10px;
}

@media (min-width: 576px) {
    .container {
        width: 540px;
    }
}

@media (min-width: 768px) {
    .container {
        width: 720px;
    }
}

@media (min-width: 992px) {
    .container {
        width: 960px;
    }
}

@media (min-width: 1200px) {
    .container {
        width: 1140px;
    }
}
```

---

## Bảng kết quả

| Chiều rộng màn hình | `.container width` |
|---|---|
| 375px (iPhone SE) | 100% |
| 600px | 540px |
| 800px | 720px |
| 1000px | 960px |
| 1400px | 1140px |

---

## Giải thích

- `375px`
  - Không media query nào khớp
  - => width = `100%`

- `600px`
  - Khớp `min-width: 576px`
  - => width = `540px`

- `800px`
  - Khớp `768px`
  - => width = `720px`

- `1000px`
  - Khớp `992px`
  - => width = `960px`

- `1400px`
  - Khớp `1200px`
  - => width = `1140px`

---

# Câu A4 (5đ) — SCSS Basics

## 1. Variables

### Dùng để:
- Lưu giá trị dùng nhiều lần.

### Ví dụ

```scss
$primary-color: blue;
$padding-main: 20px;

.button {
    background: $primary-color;
    padding: $padding-main;
}
```

---

## 2. Nesting

### Dùng để:
- Viết CSS lồng nhau giống cấu trúc HTML.

### Ví dụ

```scss
nav {
    background: black;

    ul {
        display: flex;
    }

    li {
        list-style: none;
    }

    a {
        color: white;
    }
}
```

---

## 3. Mixins

### Dùng để:
- Tái sử dụng nhóm CSS.

### Ví dụ

```scss
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    @include flex-center;
}
```

---

## 4. `@extend` / Inheritance

### Dùng để:
- Kế thừa style từ class khác.

### Ví dụ

```scss
.button {
    padding: 10px;
    border-radius: 5px;
}

.primary-button {
    @extend .button;
    background: blue;
}
```

---

## Tại sao trình duyệt KHÔNG đọc được file `.scss`?

Vì:

- `.scss` không phải CSS chuẩn.
- Đây là ngôn ngữ mở rộng của CSS.
- Trình duyệt chỉ hiểu:
  - `.css`

---

## Cần bước gì để chuyển SCSS → CSS?

Cần dùng:

- SCSS Compiler / Sass Compiler

Ví dụ:

```bash
sass style.scss style.css
```

Hoặc dùng:
- VS Code Live Sass Compiler extension

Quá trình:
1. Viết file `.scss`
2. Compiler chuyển thành `.css`
3. HTML link tới file `.css`

Ví dụ:

```html
<link rel="stylesheet" href="style.css">
```
# Câu C1 (10đ) — Phân tích trang web thực

## Trang web chọn: YouTube

---

# 1. Kiểm tra trên 3 kích thước màn hình

## Mobile — 375px

### Đặc điểm

- Navigation chuyển thành dạng mobile.
- Sidebar đầy đủ bị ẩn.
- Xuất hiện menu hamburger ☰.
- Video hiển thị 1 cột.
- Thanh tìm kiếm thu gọn.
- Một số text bị rút ngắn.

### Responsive behavior

- Video card chiếm toàn bộ chiều ngang.
- Khoảng cách padding nhỏ hơn desktop.
- Font nhỏ hơn một chút.

---

## Tablet — 768px

### Đặc điểm

- Sidebar xuất hiện dạng icon nhỏ.
- Video hiển thị khoảng 2–3 cột.
- Thanh search lớn hơn mobile.
- Layout bắt đầu giống desktop.

### Responsive behavior

- Grid video mở rộng.
- Khoảng cách giữa video lớn hơn.
- Header vẫn giữ compact.

---

## Desktop — 1440px

### Đặc điểm

- Sidebar đầy đủ hiện ra.
- Video hiển thị nhiều cột (4–6 cột).
- Search bar dài hơn.
- Nhiều menu phụ xuất hiện.

### Responsive behavior

- Layout rộng toàn màn hình.
- Font size dễ đọc hơn.
- Khoảng trắng nhiều hơn.

---

# 2. Phân tích responsive

## Navigation thay đổi thế nào?

| Kích thước | Navigation |
|---|---|
| Mobile | Hamburger menu + icon |
| Tablet | Sidebar icon thu gọn |
| Desktop | Sidebar đầy đủ |

---

## Lưới content thay đổi mấy cột?

| Kích thước | Số cột video |
|---|---|
| Mobile | 1 cột |
| Tablet | 2–3 cột |
| Desktop | 4–6 cột |

---

## Elements nào bị ẩn trên mobile?

- Sidebar đầy đủ
- Một số menu text
- Một số nút chức năng nâng cao
- Danh mục mở rộng

---

## Font size có thay đổi không?

Có.

- Mobile:
  - Font nhỏ hơn để tiết kiệm không gian.

- Desktop:
  - Font lớn hơn và khoảng cách rộng hơn.

---

# 3. Media Queries tìm được trong DevTools

## Ví dụ media query 1

```css
@media (max-width: 768px) {
    .sidebar {
        display: none;
    }
}
```

### Ý nghĩa

- Khi màn hình nhỏ hơn 768px:
  - Sidebar bị ẩn.

---

## Ví dụ media query 2

```css
@media (min-width: 1200px) {
    .video-grid {
        grid-template-columns: repeat(5, 1fr);
    }
}
```

### Ý nghĩa

- Desktop lớn:
  - Grid video hiển thị 5 cột.

---

# Phần screenshot cần tự làm

## Cách chụp:

1. Mở YouTube
2. Nhấn F12
3. Nhấn icon Toggle Device Toolbar
4. Chọn:
   - iPhone SE (375px)
   - iPad (768px)
   - Responsive 1440px
5. Chụp màn hình từng kích thước
6. Chèn vào file báo cáo

---

# Câu C2 (10đ) — Thiết kế Responsive Strategy

# 1. Wireframe Mobile (375px)

```text
[ LOGO ]
[ ☰ MENU ]
[ PHONE ]

[ HERO IMAGE ]

[ FOOD 1 ]
[ FOOD 2 ]
[ FOOD 3 ]
[ FOOD 4 ]
[ FOOD 5 ]
[ FOOD 6 ]

[ BOOKING FORM ]
- Date
- Time
- Guests
- Notes

[ GOOGLE MAP ]

[ FOOTER ]
```

## Phân tích Mobile

- Grid ảnh:
  - 1 cột
- Form:
  - Nằm dưới gallery
- Một số menu phụ:
  - Bị ẩn
- Header:
  - Thu gọn dạng hamburger

---

# 2. Wireframe Tablet (768px)

```text
[ LOGO ]     [ MENU ]     [ PHONE ]

[ HERO IMAGE ]

[ FOOD 1 ] [ FOOD 2 ]
[ FOOD 3 ] [ FOOD 4 ]
[ FOOD 5 ] [ FOOD 6 ]

[ BOOKING FORM ]

[ GOOGLE MAP ]

[ FOOTER ]
```

## Phân tích Tablet

- Grid ảnh:
  - 2 cột
- Form:
  - Nằm dưới gallery
- Google Maps:
  - Full width bên dưới

---

# 3. Wireframe Desktop (1440px)

```text
[ LOGO ]   [ NAVIGATION ]   [ PHONE ]

[ HERO IMAGE FULL WIDTH ]

[ FOOD 1 ][ FOOD 2 ][ FOOD 3 ]
[ FOOD 4 ][ FOOD 5 ][ FOOD 6 ]

---------------------------------
| BOOKING FORM | GOOGLE MAP    |
---------------------------------

[ FOOTER ]
```

## Phân tích Desktop

- Grid ảnh:
  - 3 cột
- Layout:
  - 2 cột ở phần dưới
- Form:
  - Bên trái
- Google Maps:
  - Bên phải
- Sidebar:
  - Không cần

---

# 4. CSS Skeleton (Mobile-First)

```css
/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* MOBILE FIRST */

body {
    font-family: Arial, sans-serif;
}

header {
    display: flex;
    justify-content: space-between;
    padding: 16px;
}

.hero {
    height: 300px;
    background: gray;
}

.gallery {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px;
}

.booking-map {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 16px;
}

.booking-form,
.map {
    background: #eee;
    padding: 20px;
}

footer {
    text-align: center;
    padding: 20px;
}

/* TABLET */

@media (min-width: 768px) {

    .gallery {
        grid-template-columns: repeat(2, 1fr);
    }

}

/* DESKTOP */

@media (min-width: 1200px) {

    .gallery {
        grid-template-columns: repeat(3, 1fr);
    }

    .booking-map {
        flex-direction: row;
    }

    .booking-form,
    .map {
        flex: 1;
    }

}
```