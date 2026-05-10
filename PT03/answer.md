# PHIẾU BÀI TẬP 03  
CSS CORE — Selectors, Box Model, Inheritance & Cascade
---
# PHẦN A — KIỂM TRA ĐỌC HIỂU
# Câu A1 (5đ) — 3 Cách nhúng CSS
## 1. Inline CSS
### Ví dụ
```html
<p style="color: red;">Hello CSS</p>
```
### Ưu điểm
- Viết nhanh
- Độ ưu tiên cao
- Áp dụng trực tiếp cho 1 element
### Nhược điểm
- Khó bảo trì
- Làm code HTML bị rối
- Không tái sử dụng được
### Khi nên dùng
- Test nhanh giao diện
- Chỉnh tạm 1 phần tử riêng lẻ
---
## 2. Internal CSS
### Ví dụ
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: blue;
        }
    </style>
</head>
<body>
    <p>Hello CSS</p>
</body>
</html>
```
### Ưu điểm
- Quản lý CSS tập trung hơn inline
- Dễ chỉnh sửa trong 1 trang HTML
### Nhược điểm
- File HTML dài
- Không tái sử dụng cho nhiều trang
### Khi nên dùng
- Website nhỏ
- Trang demo hoặc bài tập thực hành
---
## 3. External CSS
### Ví dụ
### File HTML
```html
<link rel="stylesheet" href="style.css">
```
### File style.css
```css
p {
    color: green;
}
```
### Ưu điểm
- Dễ bảo trì
- Code sạch sẽ
- Tái sử dụng cho nhiều trang
- Phù hợp project lớn
### Nhược điểm
- Cần thêm file CSS riêng
- Sai đường dẫn sẽ không load CSS
### Khi nên dùng
- Website thật
- Project lớn
- Làm việc nhóm
---
## Câu hỏi thêm
### Nếu cùng 1 element có cả 3 cách CSS đồng thời áp dụng thì cách nào thắng?
Thứ tự ưu tiên:
Inline CSS > Internal CSS > External CSS
### Giải thích
Inline CSS có độ ưu tiên cao nhất vì style được gắn trực tiếp vào element HTML.
Ví dụ:
```html
<p style="color:red;">Hello</p>
```
Dù external CSS có:
```css
p {
    color: blue;
}
```
thì chữ vẫn màu đỏ.
---
# Câu A2 (8đ) — CSS Selectors
## 1. `h1`
→ Chọn:
ShopTLU
---
## 2. `.price`
→ Chọn:
25.990.000đ  
45.990.000đ
---
## 3. `#app header`
→ Chọn element:
```html
<header class="top-bar dark">
```
Chứa text:
ShopTLU Home Products About
---
## 4. `nav a:first-child`
→ Chọn:
Home
---
## 5. `.product.featured h2`
→ Chọn:
MacBook Pro
---
## 6. `article > p`
→ Chọn:
25.990.000đ  
Mô tả sản phẩm...  
45.990.000đ  
Mô tả sản phẩm...
---
## 7. `a[href="/"]`
→ Chọn:
Home
---
## 8. `.top-bar.dark h1`
→ Chọn:
ShopTLU
---
## File selectors_test.html
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Selectors Test</title>

    <style>
        h1 {
            color: red;
        }

        .price {
            color: blue;
        }

        #app header {
            border: 2px solid black;
        }

        nav a:first-child {
            background-color: yellow;
        }

        .product.featured h2 {
            color: green;
        }

        article > p {
            font-style: italic;
        }

        a[href="/"] {
            text-decoration: underline;
        }

        .top-bar.dark h1 {
            font-size: 40px;
        }
    </style>
</head>
<body>

<div id="app">
    <header class="top-bar dark">
        <h1>ShopTLU</h1>

        <nav>
            <a href="/" class="active">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
        </nav>
    </header>

    <main>
        <article class="product">
            <h2>iPhone 16</h2>
            <p class="price">25.990.000đ</p>
            <p>Mô tả sản phẩm...</p>
        </article>

        <article class="product featured">
            <h2>MacBook Pro</h2>
            <p class="price">45.990.000đ</p>
            <p>Mô tả sản phẩm...</p>
        </article>
    </main>
</div>

</body>
</html>
```
---
# Câu A3 (7đ) — Box Model
## Trường hợp 1: content-box
```css
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```
### Chiều rộng hiển thị
400 + 20 + 20 + 5 + 5 = 450px
→ Chiều rộng hiển thị = 450px
### Không gian chiếm trên trang
450 + 10 + 10 = 470px
→ Không gian chiếm trên trang = 470px
---
## Trường hợp 2: border-box
```css
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```
### Chiều rộng hiển thị
→ Chiều rộng hiển thị = 400px
### Kích thước content thực tế
400 - 20 - 20 - 5 - 5 = 350px
→ Kích thước content thực tế = 350px
### Không gian chiếm trên trang
400 + 10 + 10 = 420px
→ Không gian chiếm trên trang = 420px
---
## Trường hợp 3: Margin Collapse
```css
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
```
### Khoảng cách giữa box-a và box-b
→ Khoảng cách = 40px
### Giải thích tại sao KHÔNG PHẢI 65px
Do hiện tượng Margin Collapse.
Hai margin dọc chồng lên nhau nên browser chỉ lấy margin lớn hơn:
max(25px, 40px) = 40px
---
## Nâng cao
```css
.box-a { margin-bottom: -10px; }
.box-b { margin-top: 40px; }
```
### Khoảng cách
40 + (-10) = 30px
→ Khoảng cách = 30px
---
# Câu A4 (5đ) — Specificity
```css
p { color: black; }          /* Rule A */
.price { color: blue; }      /* Rule B */
#main-price { color: red; }  /* Rule C */
p.price { color: green; }    /* Rule D */
```
Element:
```html
<p class="price" id="main-price">
```
---
## Tính specificity score
### Rule A
```css
p
```
Specificity:
(0,0,1)
---
### Rule B
```css
.price
```
Specificity:
(0,1,0)
---
### Rule C
```css
#main-price
```
Specificity:
(1,0,0)
---
### Rule D
```css
p.price
```
Specificity:
(0,1,1)
---
## Element sẽ có màu gì?
→ Màu đỏ
Vì selector `#main-price` có độ ưu tiên cao nhất nên Rule C thắng.
---
## Nếu thêm inline style
```html
<p class="price" id="main-price" style="color: orange;">
```
→ Element có màu cam
Vì inline style ưu tiên cao hơn CSS thường.
---
## Nếu Rule A thêm !important
```css
p {
    color: black !important;
}
```
→ Element có màu đen
Vì `!important` ưu tiên cao hơn specificity thông thường nên Rule A thắng.
---
