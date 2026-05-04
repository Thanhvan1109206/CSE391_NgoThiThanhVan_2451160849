# PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)
**Câu A1 (5đ) — Các loại đầu vào **

**1.** `type="text"` → Trường nhập một dòng văn bản cơ bản → Không có cơ chế kiểm tra tự động → Thường dùng để nhập họ tên khách hàng hoặc địa chỉ giao hàng.

**2.** `type="email"` → Trường nhập văn bản có kiểm tra định dạng email (phải chứa “@” và tên miền hợp lệ) → Có khả năng xác thực tự động → Dùng trong form đăng nhập hoặc đăng ký nhận thông tin khuyến mãi.

**3.** `type="password"` → Trường nhập văn bản nhưng nội dung được ẩn bằng ký tự đặc biệt (• hoặc *) → Không tự xác thực → Dùng để nhập mật khẩu, thường kết hợp với thuộc tính `minlength`.

**4.** `type="number"` → Trường nhập số có kèm nút tăng/giảm giá trị → Chỉ cho phép nhập số và có thể giới hạn bằng `min`, `max` → Dùng để chọn số lượng sản phẩm.

**5.** `type="tel"` → Trường nhập văn bản được tối ưu bàn phím số trên thiết bị di động → Không có xác thực mặc định → Thường dùng để nhập số điện thoại, có thể kết hợp `pattern` để kiểm tra.

**6.** `type="date"` → Hiển thị bộ chọn ngày dưới dạng lịch → Tự động kiểm tra định dạng ngày hợp lệ → Dùng để chọn ngày giao hàng hoặc nhập ngày sinh.

**7.** `type="checkbox"` → Ô vuông cho phép chọn hoặc bỏ chọn nhiều tùy chọn → Không có xác thực tự động → Dùng cho bộ lọc (màu sắc, kích thước) hoặc xác nhận đồng ý điều khoản.

**8.** `type="radio"` → Nút tròn chỉ cho phép chọn một lựa chọn trong cùng nhóm → Không tự xác thực → Dùng để chọn phương thức thanh toán (COD, chuyển khoản, ví điện tử).

**9.** `type="file"` → Nút cho phép chọn tệp từ thiết bị → Có thể kiểm tra loại tệp thông qua thuộc tính `accept` → Dùng để tải lên hình ảnh hoặc tài liệu (ví dụ: ảnh đánh giá sản phẩm).

**10.** `type="search"` → Tương tự ô nhập text nhưng có thêm nút xóa nhanh nội dung → Không tự xác thực → Thường dùng cho thanh tìm kiếm sản phẩm trên website.


## Câu A2 (5đ) — Thuộc tính xác thực
**Dự đoán**

* **TH1:** Không gửi được (báo lỗi). Do có thuộc tính `required`, trường này bắt buộc phải nhập dữ liệu. Nếu để trống, trình duyệt sẽ hiển thị thông báo như *“Please fill out this field”*.

* **TH2:** Không hợp lệ (báo lỗi). Với `type="email"`, dữ liệu phải đúng định dạng email (có ký tự “@”). Giá trị “abc” không đáp ứng nên bị từ chối.

* **TH3:** Không hợp lệ (báo lỗi). Thuộc tính `max="10"` quy định giá trị tối đa là 10. Nhập 15 vượt quá giới hạn nên trình duyệt yêu cầu nhập số ≤ 10.

* **TH4:** Không hợp lệ (báo lỗi). `pattern="[0-9]{10}"` yêu cầu đúng 10 chữ số. Giá trị “abc123” vừa chứa chữ cái, vừa không đủ 10 ký tự nên sai định dạng.

* **TH5:** Không hợp lệ (báo lỗi). `minlength="8"` yêu cầu ít nhất 8 ký tự. Chuỗi “123” quá ngắn nên không đạt yêu cầu.


**Xác thực**


TH1 đúng với dự đoán
 <img width="1169" height="668" alt="Screenshot 2026-05-04 164518" src="https://github.com/user-attachments/assets/13458256-2a71-4983-a4b0-cf47680d4967" />

TH2 đúng với dự đoán
<img width="1673" height="657" alt="Screenshot 2026-05-04 164651" src="https://github.com/user-attachments/assets/974cfdba-cf66-4e2c-abea-f9f6a9aed65d" />

TH3 đúng với dự đoán
<img width="1290" height="685" alt="Screenshot 2026-05-04 164738" src="https://github.com/user-attachments/assets/035e6071-5b0a-4e0d-944a-c2475e48d692" />

TH4 đúng với dự đoán
<img width="1538" height="693" alt="Screenshot 2026-05-04 164829" src="https://github.com/user-attachments/assets/6302408e-3b6b-439d-9dda-6f3ea4aad585" />

TH5 đúng với dự đoán
<img width="1272" height="702" alt="Screenshot 2026-05-04 165128" src="https://github.com/user-attachments/assets/205dd642-a517-4b44-a449-9b3d029ea576" />


## Câu A3 (5đ) — Khả năng tiếp cận

### 1. Vì sao `<label for="email">` quan trọng với trình đọc màn hình?

* **Xác định nội dung ô nhập:** Trình đọc màn hình không thể nhìn thấy giao diện. Khi người dùng di chuyển đến một ô input không có `<label>`, nó chỉ đọc chung chung như “ô nhập văn bản”, khiến người dùng không biết cần nhập thông tin gì (email, họ tên hay mật khẩu).

* **Tạo liên kết rõ ràng:** Khi thuộc tính `for` của `<label>` trùng với `id` của `<input>`, trình đọc màn hình sẽ đọc đầy đủ ngữ cảnh, ví dụ: “Email, ô nhập văn bản”.

* **Mở rộng vùng thao tác:** Người dùng có thể nhấp vào chính phần chữ của label để đưa con trỏ vào ô input, giúp thao tác dễ dàng hơn, đặc biệt trên thiết bị nhỏ hoặc với người dùng gặp khó khăn khi điều khiển.


### 2. Khi nào nên dùng `<fieldset>` và `<legend>`?

* Nên dùng khi cần **nhóm các trường thông tin có liên quan**, giúp biểu mẫu rõ ràng và dễ hiểu hơn.

  * `<fieldset>`: khung bao quanh nhóm thông tin
  * `<legend>`: tiêu đề của nhóm đó

* **Ví dụ:**

```html
<fieldset>
    <legend>Thông tin giao hàng</legend>
    <label for="addr">Địa chỉ:</label>
    <input type="text" id="addr" name="addr">
    
    <label for="city">Thành phố:</label>
    <select id="city" name="city">
        <option value="hn">Hà Nội</option>
    </select>
</fieldset>
```

### 3. Khi nào dùng `aria-label`? Vì sao không nên dùng khi đã có `<label>`?

* **Trường hợp sử dụng:**
  Dùng `aria-label` khi cần cung cấp mô tả cho trình đọc màn hình nhưng không muốn hiển thị nội dung đó trên giao diện (ví dụ: các nút chỉ có icon như tìm kiếm hoặc giỏ hàng).

* **Không nên dùng cùng `<label>` vì:**
  Có thể gây trùng lặp hoặc không nhất quán khi trình đọc màn hình đọc nội dung, làm người dùng bị rối.

* **Nguyên tắc:**
  Ưu tiên dùng HTML chuẩn như `<label>` vì ổn định và dễ hiểu hơn.
  `aria-label` chỉ nên dùng khi không thể hiển thị văn bản trực tiếp trên giao diện.

## Câu A4 (5đ) — Media

### 1. Thuộc tính `loading="lazy"` trong thẻ `<img>`

* **Giải thích:** Đây là cơ chế “tải trì hoãn”. Thay vì tải toàn bộ hình ảnh ngay khi trang được mở, trình duyệt chỉ tải ảnh khi người dùng cuộn đến gần vị trí của chúng.

* **Lợi ích:**

  * **Tăng tốc độ tải trang:** Giảm dữ liệu cần tải ban đầu, giúp hiển thị nhanh hơn.
  * **Tiết kiệm băng thông:** Đặc biệt hữu ích với người dùng mạng di động vì không phải tải những ảnh chưa xem tới.

* **Khi không nên dùng:** Không áp dụng cho các hình ảnh ở phần đầu trang (above the fold) như logo hoặc banner chính, vì sẽ gây hiện tượng trễ hiển thị.


### 2. Thẻ `<video>` và định dạng

* **Vì sao dùng nhiều `<source>`?**
  Mỗi trình duyệt hỗ trợ các định dạng khác nhau. Việc cung cấp nhiều nguồn giúp trình duyệt tự chọn định dạng phù hợp nhất; nếu một định dạng không chạy, nó sẽ thử định dạng khác.

* **Một số định dạng phổ biến:**

  * **MP4 (.mp4):** Tương thích rộng rãi trên hầu hết thiết bị và trình duyệt.
  * **WebM (.webm):** Dung lượng nhẹ, chất lượng tốt, tối ưu cho web.
  * **Ogg (.ogv):** Mã nguồn mở, thường dùng làm phương án dự phòng.


### 3. Thuộc tính `alt` (Alternative Text)

* **Vai trò:**
  Hiển thị nội dung thay thế khi ảnh không tải được, hỗ trợ trình đọc màn hình mô tả hình ảnh, đồng thời giúp công cụ tìm kiếm hiểu nội dung (SEO).

* **Cách viết hiệu quả:**

  * **Ảnh sản phẩm:** alt nên mô tả chi tiết (ví dụ: màu sắc, dung lượng, góc chụp).
  * **Ảnh trang trí:** để `alt=""` để trình đọc màn hình bỏ qua.
  * **Biểu đồ:** mô tả nội dung chính mà biểu đồ thể hiện (xu hướng, số liệu quan trọng).


## Câu A5 (5đ) — So sánh `<figure>` và `<img>`

* **Dùng `<img>` riêng khi:**
  Hình ảnh chỉ mang tính bổ trợ hoặc minh họa, không cần chú thích riêng. Nếu bỏ đi, nội dung chính vẫn dễ hiểu.

  * Ví dụ: logo trên header hoặc icon minh họa cho tính năng.

* **Dùng `<figure>` khi:**
  Hình ảnh là một phần nội dung độc lập và cần chú thích đi kèm (`<figcaption>`). Khối này có thể tách ra mà vẫn giữ nguyên ý nghĩa.

  * Ví dụ: ảnh chi tiết sản phẩm kèm mô tả, hoặc biểu đồ trong bài viết.


## PHẦN C — PHÂN TÍCH & SUY LUẬN (20 điểm)

### Câu C1 (10đ) — Gỡ lỗi

* **Lỗi 1:** Ô nhập “Tên” thiếu `<label>` và `id`.
  → Sửa: `<label for="name">Tên:</label> <input type="text" id="name" name="name" required>`

* **Lỗi 2:** Ô “Email” thiếu `<label>`, `required` và `name`.
  → Sửa: `<label for="email">Email:</label> <input type="email" id="email" name="email" required>`

* **Lỗi 3:** Ô “Mật khẩu” thiếu `<label>` và ràng buộc độ dài.
  → Sửa: `<label for="pw">Mật khẩu:</label> <input type="password" id="pw" name="password" minlength="8" required>`

* **Lỗi 4:** Ô “Nhập lại mật khẩu” thiếu `<label>` và định danh riêng.
  → Sửa: `<label for="re-pw">Nhập lại mật khẩu:</label> <input type="password" id="re-pw" name="re-password" required>`

* **Lỗi 5:** Ô “Phone” dùng sai kiểu dữ liệu.
  → Sửa: `<label for="tel">Phone:</label> <input type="tel" id="tel" name="phone" pattern="[0-9]{10}">`

* **Lỗi 6:** `<select>` thiếu `<label>` và `name`.
  → Sửa: `<label for="city">Thành phố:</label> <select id="city" name="city">...</select>`

* **Lỗi 7:** Checkbox không có input bên trong label.
  → Sửa: `<label><input type="checkbox" name="agree" required> Tôi đồng ý điều khoản</label>`

* **Lỗi 8:** Dùng `<input type="submit">` thay vì `<button>`.
  → Sửa: `<button type="submit">Gửi</button>`


### Câu C2 (10đ) — Xác thực & chiến lược

#### 1. Regex cho dữ liệu

* **CMND/CCCD (12 số):**
  `pattern="[0-9]{12}"` hoặc `\d{12}`

* **Số tài khoản (10–15 số):**
  `pattern="[0-9]{10,15}"`

#### 2. HTML5 validation có đủ an toàn?

* **Không đủ an toàn.**
  Đây chỉ là kiểm tra phía client nhằm hỗ trợ trải nghiệm người dùng. Người dùng có thể dễ dàng bỏ qua bằng cách chỉnh sửa mã hoặc gửi request trực tiếp.

#### 3. Những kiểm tra HTML5 không làm được

* So sánh giữa các trường (ví dụ: xác nhận mật khẩu).
* Kiểm tra dữ liệu theo thời gian thực với server (username tồn tại hay chưa).
* Xác thực theo điều kiện (ví dụ: số điện thoại phụ thuộc quốc gia).

#### 4. Rủi ro nếu chỉ kiểm tra phía frontend

* **Tấn công dữ liệu (Injection):**
  Hacker có thể gửi mã độc thay vì dữ liệu hợp lệ, gây nguy hiểm cho database.

* **Sai lệch dữ liệu và logic:**
  Dữ liệu không hợp lệ (số âm, ký tự sai) vẫn được xử lý, gây lỗi hệ thống hoặc thất thoát tài chính.

 
