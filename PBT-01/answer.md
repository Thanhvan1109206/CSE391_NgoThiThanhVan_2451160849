# PHẦN A — KIỂM TRA ĐỌC HIỂU

---

## Câu A1 (5đ) — HTTP & Browser

**Nguồn tham chiếu:**
01_introduction_html_universe.md — phần *Web hoạt động như thế nào*

### 1. Các bước khi truy cập website

Khi nhập https://shopee.vn và nhấn Enter, các bước xảy ra theo thứ tự:

1. **DNS Lookup:** Trình duyệt hỏi DNS để lấy địa chỉ IP của website
2. **TCP/TLS Handshake:** Thiết lập kết nối bảo mật (HTTPS)
3. **HTTP Request:** Trình duyệt gửi request (GET) đến server
4. **HTTP Response:** Server trả về dữ liệu (HTML, CSS, JS)
5. **Browser Rendering:** Trình duyệt phân tích và hiển thị trang web

---

### 2. Tab Network trong DevTools

Tab Network hiển thị:

* Danh sách các request (HTML, CSS, JS, ảnh…)
* Status Code (200, 404…)
* Thời gian load
* Kích thước file
* Loại tài nguyên

<img width="1918" height="960" alt="z7769065554076_8c35a9621f1eec0c839075e3e685372d" src="https://github.com/user-attachments/assets/97da4b62-10ec-472a-be76-d3c8c922a9a6" />

## Câu A2 (5đ) — Semantic HTML

**Nguồn tham chiếu:**
04_visible_part_html.md — phần *Semantic HTML*

### Tại sao SEO thấp?

Trang web dùng quá nhiều thẻ `<div>` nên không có ý nghĩa rõ ràng.
Điều này khiến Google khó hiểu cấu trúc nội dung → SEO kém.

---

### Các lỗi semantic:

* **Lỗi 1:** Dùng `<div class="header">`
  → Nên dùng `<header>` để Google hiểu đây là phần đầu trang

* **Lỗi 2:** Menu dùng `<div>`
  → Nên dùng `<nav>` + `<ul><li>`

* **Lỗi 3:** Dùng `<div class="product">`
  → Nên dùng `<article>` (nội dung độc lập)

* **Lỗi 4:** Dùng `<div class="title">`
  → Nên dùng `<h2>` để Google nhận diện tiêu đề

* **Lỗi 5:** Ảnh không có `alt`
  → Google không hiểu nội dung ảnh

* **Lỗi 6:** Không dùng `<figure>`
  → Thiếu ngữ nghĩa cho hình ảnh

---

### Code sau khi sửa:

```html
<header>
    <div class="logo">ShopTLU</div>

    <nav>
        <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/products">Sản phẩm</a></li>
        </ul>
    </nav>
</header>

<main>
    <article class="product">
        <h2>iPhone 16 Pro</h2>
        <p class="price">25.990.000đ</p>

        <figure>
            <img src="iphone.jpg" alt="iPhone 16 Pro">
        </figure>
    </article>
</main>

<footer>
    © 2026 ShopTLU
</footer>
```

---

## Câu A3 (5đ) — Block vs Inline

**Nguồn tham chiếu:**
04_visible_part_html.md — phần *Block vs Inline*

### Kết quả hiển thị:

```
Hộp 1
Text A Text B
Hộp 2
Text C Text D
Hộp 3
```

---

### Giải thích:

* `<div>` là phần tử block → luôn chiếm hết 1 dòng → các phần tử sau sẽ xuống dòng
* `<span>` và `<strong>` là inline → nằm cùng hàng

---

## Câu A4 (5đ) — Table

**Nguồn tham chiếu:**
05_table.md — phần *Cấu trúc bảng*

### Sự khác nhau:

* `<thead>`: chứa tiêu đề bảng
* `<tbody>`: chứa dữ liệu chính
* `<tfoot>`: chứa tổng kết

---

### Tại sao không dùng table để layout?

* SEO kém: Google khó hiểu cấu trúc
* Không responsive: hiển thị xấu trên mobile
* Khó bảo trì: code rối, khó sửa

---

# PHẦN B — THỰC HÀNH CODE

---

## Bài B3 (15đ) — Debug HTML

### Danh sách lỗi:

* Lỗi 1: Dòng 1 — Thiếu `<!DOCTYPE html>`
* Lỗi 2: Dòng 2 — Thiếu `lang="vi"`
* Lỗi 3: Dòng 3 — Thẻ `<title>` chưa đóng
* Lỗi 4: Dòng 4 — Sai `utf8` → `UTF-8`
* Lỗi 5: Dòng 6 — Thẻ `<h1>` đóng sai
* Lỗi 6: Dòng 10 — Thẻ `<a>` chưa đóng
* Lỗi 7: Dòng 17 — `<img>` thiếu dấu "" và alt
* Lỗi 8: Dòng 19 — Sai thứ tự đóng thẻ
* Lỗi 9: Bảng thiếu `<thead>` `<tbody>`
* Lỗi 10: Dùng `<td>` thay vì `<th>`
* Lỗi 11: Có 2 `<main>`
* Lỗi 12: `<p>` trong footer chưa đóng

---

## Bài B4 (15đ) — Phân tích website

### Semantic HTML sử dụng:

* `<header>` — phần đầu trang
* `<section>` — chia nội dung
* `<footer>` — cuối trang

---

### Semantic chưa đúng:

* Dùng `<div>` thay `<nav>`
* Dùng `<div>` thay `<aside>`

---

### Table:

* Nội dung: thông số sản phẩm
* Không dùng `<thead>`, `<tbody>`

---

### Form:

* action: `/tim-kiem`
* method: GET
* input: text, submit

---

### Screenshots:

![Elements](screenshots/elements.png)
![Table](screenshots/table.png)
![Form](screenshots/form.png)

---

# PHẦN C — SUY LUẬN

---

## Câu C1 (10đ)

```html
<header> <!-- phần đầu -->
    <nav> <!-- điều hướng -->
        <ul>
            <li>Trang chủ</li>
        </ul>
    </nav>
</header>

<main> <!-- nội dung chính -->

    <nav aria-label="breadcrumb"> <!-- breadcrumb -->
        <ol>
            <li>Trang chủ</li>
        </ol>
    </nav>

    <section>
        <article>
            <h2>Tên sản phẩm</h2>
        </article>
    </section>

    <section>
        <table>
            <thead></thead>
            <tbody></tbody>
        </table>
    </section>

</main>

<aside>
    Sản phẩm liên quan
</aside>

<footer>
    © 2026
</footer>
```

---

## Câu C2 (10đ)

Việc chỉ dùng `<div>` cho mọi thứ là không hợp lý.

Về SEO: Google không hiểu class nhưng hiểu các thẻ semantic như `<h1>`, `<article>`, nên dùng đúng thẻ sẽ giúp tăng thứ hạng tìm kiếm.

Về accessibility: Các thẻ như `<nav>`, `<main>` giúp screen reader hiểu cấu trúc trang tốt hơn.

Ví dụ: Nếu dùng `<h1>` cho tiêu đề sản phẩm, Google biết đây là nội dung chính. Nếu dùng `<div>` thì không có ý nghĩa đặc biệt.

Tuy nhiên, `<div>` vẫn phù hợp khi dùng cho layout hoặc styling.

---
