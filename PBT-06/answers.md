# PHẦN A — ĐỌC HIỂU BOOTSTRAP 5

## Câu A1 — Grid System

### Đề bài

```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-3">Box 1</div>
        <div class="col-12 col-md-6 col-lg-3">Box 2</div>
        <div class="col-12 col-md-6 col-lg-3">Box 3</div>
        <div class="col-12 col-md-6 col-lg-3">Box 4</div>
    </div>
</div>
```

---

## Bootstrap Grid System

Bootstrap chia layout thành 12 cột.

* `col-12` → chiếm toàn bộ chiều ngang
* `col-6` → chiếm 1/2 hàng
* `col-3` → chiếm 1/4 hàng

---

## Layout ở từng kích thước

| Kích thước      | Số cột       | Layout                                                   |
| --------------- | ------------ | -------------------------------------------------------- |
| `< 768px`       | 1 box / hàng | Box 1 xuống dòng Box 2 xuống dòng Box 3 xuống dòng Box 4 |
| `768px - 991px` | 2 box / hàng | Box 1 Box 2 / Box 3 Box 4                                |
| `≥ 992px`       | 4 box / hàng | Box 1 Box 2 Box 3 Box 4 cùng 1 hàng                      |

---

## Vẽ layout

### 1. Màn hình nhỏ `< 768px`

```text
[ Box 1 ]

[ Box 2 ]

[ Box 3 ]

[ Box 4 ]
```

Vì:

```html
col-12
```

→ mỗi box chiếm toàn bộ chiều ngang.

---

### 2. Màn hình vừa `768px - 991px`

```text
[ Box 1 ][ Box 2 ]

[ Box 3 ][ Box 4 ]
```

Vì:

```html
col-md-6
```

→ mỗi box chiếm 6/12 cột = 1/2 hàng.

---

### 3. Màn hình lớn `≥ 992px`

```text
[ Box 1 ][ Box 2 ][ Box 3 ][ Box 4 ]
```

Vì:

```html
col-lg-3
```

→ mỗi box chiếm 3/12 cột = 1/4 hàng.

---

## Câu hỏi thêm

### 1. `col-md-6` nghĩa là gì?

* `md` = medium breakpoint
* Bootstrap quy định md bắt đầu từ 768px
* `6` nghĩa là chiếm 6/12 cột = 50% chiều ngang

=> Khi màn hình ≥ 768px thì element sẽ rộng bằng một nửa hàng.

---

### 2. Tại sao không cần viết `col-sm-12`?

Vì Bootstrap dùng Mobile First.

```html
col-12
```

đã áp dụng cho màn hình nhỏ mặc định nên không cần viết thêm:

```html
col-sm-12
```

---

# Câu A2 — Utilities & Components

## 1. Giải thích `d-none d-md-block`

```html
d-none d-md-block
```

| Class        | Ý nghĩa                           |
| ------------ | --------------------------------- |
| `d-none`     | Ẩn element                        |
| `d-md-block` | Từ md trở lên thì hiện dạng block |

### Element hiển thị khi nào?

| Kích thước màn hình | Trạng thái |
| ------------------- | ---------- |
| `< 768px`           | Ẩn         |
| `≥ 768px`           | Hiện       |

Ví dụ:

```html
<div class="d-none d-md-block">
    Hello
</div>
```

* Điện thoại → không thấy
* Tablet/laptop → thấy chữ Hello

---

## 2. Liệt kê 5 spacing utilities

### 1. `mt-3`

```html
mt-3
```

* `m` = margin
* `t` = top

→ tạo margin phía trên.

---

### 2. `mb-4`

```html
mb-4
```

→ tạo margin phía dưới.

---

### 3. `ms-2`

```html
ms-2
```

→ tạo margin bên trái.

---

### 4. `px-4`

```html
px-4
```

* `p` = padding
* `x` = left + right

→ tạo padding trái phải.

---

### 5. `py-5`

```html
py-5
```

→ tạo padding trên dưới.

---

### Bonus: `mb-auto`

```html
mb-auto
```

→ margin-bottom: auto

Thường dùng với flexbox để đẩy khoảng cách tự động.

---

## 3. Sự khác nhau giữa `.container`, `.container-fluid`, `.container-md`

| Class              | Đặc điểm                                          |
| ------------------ | ------------------------------------------------- |
| `.container`       | Có max-width theo breakpoint, không full màn hình |
| `.container-fluid` | Luôn full chiều ngang 100%                        |
| `.container-md`    | Mobile full width, từ md trở lên mới có max-width |

---

## Ví dụ

### `.container`

```html
<div class="container">
```

* Desktop không chiếm full màn hình
* Có khoảng trắng hai bên

---

### `.container-fluid`

```html
<div class="container-fluid">
```

* Luôn full màn hình

---

### `.container-md`

```html
<div class="container-md">
```

* Mobile → full width
* Từ md trở lên → giống `.container`

---

# Tóm tắt nhanh

| Class              | Ý nghĩa               |
| ------------------ | --------------------- |
| `col-12`           | full hàng             |
| `col-md-6`         | md trở lên chiếm 1/2  |
| `col-lg-3`         | lg trở lên chiếm 1/4  |
| `d-none`           | ẩn                    |
| `d-md-block`       | md trở lên hiện       |
| `mt-3`             | margin-top            |
| `px-4`             | padding trái phải     |
| `.container`       | fixed width           |
| `.container-fluid` | full width            |
| `.container-md`    | mobile full, md fixed |
# PHẦN C — PHÂN TÍCH

# Câu C1 — Tùy biến Bootstrap (10đ)

## 1. Đổi màu `$primary` từ xanh mặc định sang `#E63946`

Bootstrap sử dụng SASS variables để quản lý màu sắc.

Màu primary mặc định:

```scss id="4m0yx9"
$primary: #0d6efd;
```

Muốn đổi sang:

```scss id="f42ixs"
#E63946
```

thì cần customize Bootstrap bằng SASS.

---

## Quy trình thực hiện

### Bước 1 — Cài công cụ

Cần:

* Node.js
* npm
* sass

Cài sass:

```bash id="0xxkjx"
npm install -g sass
```

---

### Bước 2 — Tạo file SCSS

Ví dụ:

```text id="xg2n4q"
custom.scss
```

---

### Bước 3 — Override biến `$primary`

Trong file:

```scss id="t6aw4m"
custom.scss
```

viết:

```scss id="r6aqpb"
$primary: #E63946;

@import "bootstrap/scss/bootstrap";
```

Ý nghĩa:

* đổi biến `$primary`
* sau đó import Bootstrap để Bootstrap build lại toàn bộ màu theo biến mới

---

### Bước 4 — Compile SCSS thành CSS

Chạy:

```bash id="96e08n"
sass custom.scss custom.css
```

hoặc watch mode:

```bash id="5c7d8e"
sass --watch custom.scss:custom.css
```

---

### Bước 5 — Link file CSS vào HTML

```html id="l7d5e1"
<link rel="stylesheet" href="custom.css">
```

---

# 2. Tại sao KHÔNG nên override trực tiếp:

```css id="9jlwmw"
.btn-primary {
    background: red;
}
```

## Vì sao không nên?

### 1. Chỉ sửa được 1 component

Ví dụ:

```css id="mujx49"
.btn-primary
```

đổi màu nhưng:

* alert-primary
* bg-primary
* text-primary
* border-primary

vẫn dùng màu cũ.

=> giao diện không đồng bộ.

---

### 2. Dễ conflict CSS

Bootstrap có:

* hover
* active
* focus
* disabled

Nếu override thủ công phải sửa rất nhiều class:

```css id="l1wv50"
.btn-primary:hover
.btn-primary:focus
.btn-primary:active
```

=> khó bảo trì.

---

### 3. Khó maintain project lớn

Khi project lớn:

* nhiều component dùng primary color
* đổi tay từng class rất cực

---

## Vì sao nên dùng SASS variables?

Khi đổi:

```scss id="qvz3ot"
$primary: #E63946;
```

Bootstrap sẽ tự động cập nhật:

* button
* alert
* badge
* navbar
* background
* border
* link
* form states

=> toàn bộ hệ thống đồng bộ màu sắc.

---

# Kết luận

Dùng SASS variables:

* dễ maintain
* đồng bộ giao diện
* chuyên nghiệp hơn
* scalable cho project lớn

---

# Câu C2 — So sánh Bootstrap và CSS thuần (10đ)

## 1. CSS thuần để tạo responsive navbar + product card

### Navbar responsive

```css id="v0o5g3"
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: #333;
}

.nav-links {
    display: flex;
    gap: 20px;
}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
    }

    .nav-links {
        flex-direction: column;
    }
}
```

---

### Product card

```css id="jjqsv0"
.card {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
}

.card img {
    width: 100%;
}

.card button {
    background: blue;
    color: white;
    border: none;
    padding: 10px;
}
```

---

# Bootstrap version

Chỉ cần dùng class có sẵn:

```html id="2if2va"
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
```

```html id="6k8jlwm"
<div class="card" style="width: 18rem;">
```

=> gần như không cần tự viết CSS.

---

# 2. So sánh

| Tiêu chí             | CSS thuần           | Bootstrap               |
| -------------------- | ------------------- | ----------------------- |
| Số dòng CSS          | Nhiều               | Ít                      |
| Thời gian phát triển | Chậm hơn            | Nhanh hơn               |
| Responsive           | Tự viết media query | Có sẵn grid + utilities |
| Tùy biến             | Rất cao             | Bị framework giới hạn   |
| Dễ học               | Khó hơn             | Dễ hơn cho người mới    |
| Maintain project lớn | Khó hơn             | Dễ đồng bộ hơn          |

---

# 3. Khi nào NÊN dùng Bootstrap?

## Nên dùng khi:

* Deadline ngắn
* Làm admin dashboard
* Prototype nhanh
* Team frontend nhỏ
* Website CRUD / quản trị
* Muốn responsive nhanh

---

# 4. Khi nào KHÔNG NÊN dùng Bootstrap?

## Không nên dùng khi:

* Thiết kế quá custom
* Website cần UI độc đáo
* Landing page cần animation phức tạp
* Cần tối ưu performance cực cao
* Design system riêng

---

# Kết luận

Bootstrap phù hợp để:

* tăng tốc phát triển
* responsive nhanh
* code ít hơn

CSS thuần phù hợp khi:

* cần kiểm soát hoàn toàn giao diện
* cần custom UI chuyên sâu
* muốn tối ưu từng component

# PHẦN C — PHÂN TÍCH

# Câu C1 — Tùy biến Bootstrap (10đ)

## 1. Đổi màu `$primary` từ xanh mặc định sang `#E63946`

Bootstrap sử dụng SASS variables để quản lý màu sắc hệ thống.

Màu mặc định:

```scss id="s1m9zq"
$primary: #0d6efd;
```

Muốn đổi sang:

```scss id="uk3v7n"
#E63946
```

thì cần customize Bootstrap bằng SASS.

---

## Quy trình thực hiện

### Bước 1 — Cài công cụ

Cần:

* Node.js
* npm
* sass compiler

Cài sass:

```bash id="fr2w6j"
npm install -g sass
```

---

### Bước 2 — Tạo file SCSS

Ví dụ:

```text id="g7q4mt"
custom.scss
```

---

### Bước 3 — Override biến `$primary`

Trong file:

```scss id="g1p6yx"
custom.scss
```

viết:

```scss id="s5n0ef"
$primary: #E63946;

@import "bootstrap/scss/bootstrap";
```

Ý nghĩa:

* đổi biến `$primary`
* import Bootstrap để Bootstrap build lại toàn bộ màu mới

---

### Bước 4 — Compile SCSS thành CSS

Chạy lệnh:

```bash id="a9x3tw"
sass custom.scss custom.css
```

Hoặc watch mode:

```bash id="h8m2vk"
sass --watch custom.scss:custom.css
```

---

### Bước 5 — Link CSS vào HTML

```html id="r2j7bf"
<link rel="stylesheet" href="custom.css">
```

---

# 2. Tại sao KHÔNG nên override trực tiếp:

```css id="v0d8kx"
.btn-primary {
    background: red;
}
```

## Vì sao không nên?

### 1. Chỉ sửa được một component

Ví dụ:

```css id="j6q1rc"
.btn-primary
```

đổi màu nhưng:

* alert-primary
* bg-primary
* text-primary
* border-primary

vẫn dùng màu cũ.

=> giao diện không đồng bộ.

---

### 2. Dễ conflict CSS

Bootstrap có nhiều state:

* hover
* active
* focus
* disabled

Nếu override thủ công phải sửa rất nhiều class:

```css id="q5l8an"
.btn-primary:hover
.btn-primary:focus
.btn-primary:active
```

=> khó maintain.

---

### 3. Khó bảo trì project lớn

Khi project có nhiều component:

* button
* navbar
* badge
* alert
* form

thì việc sửa từng class sẽ rất mất thời gian.

---

## Vì sao nên dùng SASS variables?

Khi đổi:

```scss id="x4z0mh"
$primary: #E63946;
```

Bootstrap sẽ tự động cập nhật toàn bộ hệ thống:

* button
* alert
* badge
* navbar
* text
* background
* border

=> giao diện đồng bộ và chuyên nghiệp hơn.

---

# Kết luận

Nên dùng SASS variables vì:

* dễ maintain
* đồng bộ giao diện
* scalable cho project lớn
* đúng cách customize Bootstrap

---

# Câu C2 — So sánh Bootstrap và CSS thuần (10đ)

## 1. CSS thuần tạo responsive navbar

```css id="m7k4we"
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #333;
    padding: 16px;
}

.nav-links {
    display: flex;
    gap: 20px;
}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
    }

    .nav-links {
        flex-direction: column;
    }
}
```

---

## 2. CSS thuần tạo product card

```css id="t9r6yh"
.card {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
}

.card img {
    width: 100%;
}

.card button {
    background: blue;
    color: white;
    border: none;
    padding: 10px;
}
```

---

# Bootstrap version

Chỉ cần dùng class có sẵn:

```html id="p8x2za"
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
```

```html id="o5y7vn"
<div class="card shadow">
```

=> gần như không cần viết CSS.

---

# So sánh

| Tiêu chí             | CSS thuần           | Bootstrap               |
| -------------------- | ------------------- | ----------------------- |
| Số dòng CSS          | Nhiều               | Ít                      |
| Thời gian phát triển | Chậm hơn            | Nhanh hơn               |
| Responsive           | Tự viết media query | Có sẵn grid + utilities |
| Tùy biến             | Rất cao             | Có giới hạn framework   |
| Dễ học               | Khó hơn             | Dễ hơn cho người mới    |
| Maintain project lớn | Khó hơn             | Dễ đồng bộ hơn          |

---

# Khi nào NÊN dùng Bootstrap?

## Nên dùng khi:

* Deadline ngắn
* Prototype nhanh
* Admin dashboard
* Website CRUD
* Team nhỏ
* Cần responsive nhanh

---

# Khi nào KHÔNG NÊN dùng Bootstrap?

## Không nên dùng khi:

* Website cần thiết kế độc đáo
* UI custom quá nhiều
* Landing page animation phức tạp
* Muốn tối ưu performance tối đa
* Có design system riêng

---

# Kết luận

Bootstrap giúp:

* tăng tốc phát triển
* responsive nhanh
* ít code CSS hơn

CSS thuần phù hợp khi:

* cần kiểm soát hoàn toàn giao diện
* cần custom UI chuyên sâu
* muốn tối ưu từng component
