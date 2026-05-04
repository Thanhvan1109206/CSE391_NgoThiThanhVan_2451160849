#Phần A: KIỂM TRA ĐỌC HIỂU

##Câu A1 (5đ) — HTTP & Browser
Nguồn tham chiếu: 01_introduction_html_universe.md — phần Web hoạt động như thế nào 

1. Các bước khi truy cập https://shopee.vn

Khi nhập URL vào trình duyệt và nhấn Enter, quá trình sẽ diễn ra theo thứ tự:

Bước 1: DNS Lookup
Trình duyệt gửi yêu cầu đến DNS để tìm địa chỉ IP của domain shopee.vn.
Bước 2: Thiết lập kết nối (TCP/TLS)
Do dùng HTTPS nên trình duyệt sẽ “bắt tay” với server để thiết lập kết nối bảo mật.
Bước 3: Gửi HTTP Request
Trình duyệt gửi request (thường là GET) để yêu cầu dữ liệu trang.
Bước 4: Nhận HTTP Response
Server trả về response (thường là 200 OK) kèm HTML, CSS, JavaScript.
Bước 5: Render trang web
Trình duyệt xử lý:
Parse HTML
Áp CSS
Chạy JavaScript
Hiển thị giao diện hoàn chỉnh
2. Tab Network trong DevTools

Tab Network dùng để xem tất cả các tài nguyên mà website tải về.

Thông tin chính gồm:

Name: tên file

Status: mã trạng thái

Type: loại tài nguyên

Size: dung lượng

Time: thời gian load

Waterfall: tiến trình tải

<img width="1918" height="960" alt="z7769065554076_8c35a9621f1eec0c839075e3e685372d" src="https://github.com/user-attachments/assets/97da4b62-10ec-472a-be76-d3c8c922a9a6" />

##Câu A2: Semantic HTML
Câu A2 (5đ) — Semantic HTML

Nguồn tham chiếu:
04_visible_part_html.md — phần Semantic HTML / Các thẻ ngữ nghĩa

Tại sao trang này bị SEO thấp?

Trang web này sử dụng quá nhiều thẻ <div> cho mọi phần (header, menu, sản phẩm…), trong khi <div> không mang ý nghĩa nội dung.
Điều này khiến Google khó hiểu cấu trúc trang, không xác định được đâu là nội dung chính, đâu là tiêu đề → ảnh hưởng xấu đến SEO.

Các lỗi semantic:
Lỗi 1: Dùng <div class="header">
→ Nên dùng <header>
Lỗi 2: Menu dùng <div>
→ Nên dùng <nav> và <ul><li>
Lỗi 3: Dùng <div class="product">
→ Nên dùng <article>
Lỗi 4: Dùng <div class="title">
→ Nên dùng <h2>
Lỗi 5: Ảnh không có alt
→ Google không hiểu nội dung ảnh
Lỗi 6: Không dùng <figure>
→ Thiếu ngữ nghĩa cho hình ảnh

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

Kết luận 

Việc dùng đúng thẻ semantic giúp:

Google hiểu rõ cấu trúc nội dung → SEO tốt hơn
Code dễ đọc, dễ bảo trì
Hỗ trợ tốt cho accessibility
