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

Ví dụ:

```html
<div class="box">
    <div class="child"></div>
</div>
```

```css
.box {
    /* không có position */
}

.child {
    position: absolute;
    top: 0;
    right: 0;
}
```

=> `.child` sẽ chạy lên góc phải của trang.

---

## Khi nào `absolute` tham chiếu parent?

Khi parent gần nhất có:

```css
position: relative;
```

Ví dụ:

```css
.box {
    position: relative;
}

.child {
    position: absolute;
    top: 0;
    right: 0;
}
```

=> `.child` sẽ nằm góc phải của `.box`.

---

# "Nearest positioned ancestor" là gì?

Là:

> Thằng cha gần nhất có `position` khác `static`.

`absolute` sẽ lấy nó làm mốc tọa độ.

Ví dụ:

```html
<body>
    <div class="a">
        <div class="b">
            <div class="c"></div>
        </div>
    </div>
</body>
```

```css
.a {
    position: relative;
}

.b {
    position: static;
}

.c {
    position: absolute;
    top: 0;
    right: 0;
}
```

=> `.c` sẽ bám theo `.a`
vì `.b` vẫn là `static`.

---

# Câu A2 (10đ) — Flexbox vs Grid

---

## Trường hợp 1

```css
.container { display: flex; }
.item { flex: 1; }
```

Có 4 items.

### Kết quả:

- 1 hàng
- 4 cột bằng nhau

### Text layout:

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

### Phân tích:

Mỗi item:

```text
45% + 2.5% + 2.5% = 50%
```

=> mỗi hàng chứa 2 item.

6 items:

```text
6 / 2 = 3 hàng
```

### Kết quả:

- 3 hàng
- 2 cột

### Text layout:

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

Có 3 items.

### Kết quả:

- 1 hàng ngang
- Các item cách đều nhau
- Căn giữa theo chiều dọc

### Text layout:

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

Có 3 items.

### Phân tích:

Grid có:

- cột 1 = 200px
- cột 2 = co giãn (`1fr`)
- cột 3 = 200px

### Kết quả:

- 1 hàng
- 3 cột

### Text layout:

```text
| 200px | flexible | 200px |
```

Hoặc:

```text
| item | item | item |
```

(item giữa rộng hơn)

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

### Phân tích:

Mỗi hàng có:

```text
3 cột
```

7 items:

- hàng 1: 3 item
- hàng 2: 3 item
- hàng 3: còn 1 item

### Kết quả:

- 3 hàng
- item cuối nằm hàng 3 cột 1

### Text layout:

```text
| item | item | item |
| item | item | item |
| item |
```

---

# Ghi nhớ nhanh

## Flexbox

- Mạnh về layout 1 chiều
- Row hoặc column
- Thường dùng:
  - navbar
  - menu
  - card row

## Grid

- Mạnh về layout 2 chiều
- Chia hàng + cột cùng lúc
- Thường dùng:
  - dashboard
  - gallery
  - layout trang web

---

# Tổng kết Positioning

## `relative`

- vẫn còn chỗ trong flow
- dịch chuyển theo chính nó
- thường dùng làm parent cho absolute

## `absolute`

- mất khỏi flow
- bám theo parent có position gần nhất

## `fixed`

- bám viewport
- scroll vẫn đứng yên

## `sticky`

- ban đầu như relative
- scroll tới ngưỡng thì giống fixed
# Câu C1 (10đ) — Flexbox vs Grid: Khi nào dùng gì?

---

# 1. Navigation bar ngang (logo + menu + buttons)

## Nên dùng:

```text
Flexbox
```

## Vì sao?

Navbar là layout 1 chiều:

- các item nằm trên 1 hàng ngang
- cần căn giữa
- cần space-between

Flexbox làm rất tốt layout theo hàng/cột.

---

## Ví dụ bố cục

```text
| logo        menu menu        button |
```

---

# 2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)

## Nên dùng:

```text
Grid
```

## Vì sao?

Đây là layout 2 chiều:

- nhiều hàng
- nhiều cột
- cần các ô đều nhau

Grid mạnh hơn Flexbox cho dạng lưới.

---

## Ví dụ bố cục

```text
| img | img | img |
| img | img | img |
| img | img | img |
```

---

# 3. Layout blog: main content + sidebar

## Nên dùng:

```text
Flexbox
```

## Vì sao?

Layout chỉ chia theo chiều ngang:

- sidebar
- content

=> layout 1 chiều.

Flexbox đơn giản và phù hợp hơn.

---

## Ví dụ bố cục

```text
| sidebar | main content |
```

---

# 4. Footer với 4 cột thông tin

(Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)

## Nên dùng:

```text
Grid
```

## Vì sao?

Footer có nhiều cột đều nhau.

Grid giúp:

- chia cột dễ
- responsive dễ
- căn đều đẹp hơn

---

## Ví dụ bố cục

```text
| cột 1 | cột 2 | cột 3 | cột 4 |
```

---

# 5. Card sản phẩm

(ảnh trên, text giữa, nút dưới — nút luôn dính đáy)

## Nên dùng:

```text
Kết hợp cả hai
```

---

## Vì sao?

### Grid

Dùng để chia nhiều card ngoài layout tổng.

Ví dụ:

```text
| card | card | card |
```

---

### Flexbox

Dùng bên trong từng card:

```text
Ảnh
Tên sản phẩm
Mô tả
Nút mua
```

Flexbox giúp:

- sắp xếp theo chiều dọc
- đẩy nút xuống đáy bằng:

```css
margin-top: auto;
```

---

# Ví dụ bố cục

```text
| Card | Card | Card |

Trong mỗi card:

Ảnh
Text
Nút
```

---

# Tổng kết nhanh

| Tình huống | Nên dùng | Lý do |
|---|---|---|
| Navbar | Flexbox | Layout 1 chiều |
| Gallery Instagram | Grid | Layout lưới 2 chiều |
| Blog + sidebar | Flexbox | Chia ngang đơn giản |
| Footer 4 cột | Grid | Chia cột đều |
| Product card | Kết hợp | Grid ngoài + Flex trong |

---

# Ghi nhớ nhanh

## Flexbox

- Layout 1 chiều
- Row hoặc column
- Phù hợp:
  - navbar
  - menu
  - card content

---

## Grid

- Layout 2 chiều
- Hàng + cột cùng lúc
- Phù hợp:
  - gallery
  - dashboard
  - footer nhiều cột
# Câu C2 (10đ) — Debug Flexbox

---

# Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống

## Code gốc

```css
.card-container {
    display: flex;
    flex-wrap: wrap;
}

.card {
    width: 30%;
    margin: 1.5%;
}

.card img {
    width: 100%;
}

.card h3 {
    font-size: 18px;
}

.card .btn {
    padding: 10px;
}
```

---

# Nguyên nhân

Các card có nội dung dài/ngắn khác nhau:

- card nhiều text → cao hơn
- card ít text → thấp hơn

=> nút "Mua" không nằm cùng hàng.

---

# Cách sửa

Dùng Flexbox theo chiều dọc để:

- card cao bằng nhau
- nút luôn nằm cuối card

---

# Code sửa

```css
.card-container {
    display: flex;
    flex-wrap: wrap;
}

.card {
    width: 30%;
    margin: 1.5%;

    display: flex;
    flex-direction: column;
}

.card img {
    width: 100%;
}

.card h3 {
    font-size: 18px;
}

.card .btn {
    padding: 10px;
    margin-top: auto;
}
```

---

# Giải thích code sửa

## `display: flex`

Biến `.card` thành flex container.

---

## `flex-direction: column`

Sắp xếp nội dung theo chiều dọc:

```text
Ảnh
Tiêu đề
Mô tả
Nút
```

---

## `margin-top: auto`

Đẩy nút xuống cuối card.

=> tất cả nút sẽ thẳng hàng.

---

# Kết quả sau khi sửa

```text
| Card | Card | Card |
|  btn |  btn |  btn |
```

Nút "Mua" nằm đều nhau.

---

# Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc nhưng item vẫn dính góc trái trên

## Code gốc

```css
.hero {
    height: 100vh;
    display: flex;
}

.hero-content {
    text-align: center;
}
```

---

# Nguyên nhân

Flexbox mặc định:

```css
justify-content: flex-start;
align-items: stretch;
```

=> item nằm góc trái trên.

---

# Cách sửa

Căn giữa bằng:

- `justify-content`
- `align-items`

---

# Code sửa

```css
.hero {
    height: 100vh;
    display: flex;

    justify-content: center;
    align-items: center;
}

.hero-content {
    text-align: center;
}
```

---

# Giải thích code sửa

## `justify-content: center`

Căn giữa theo chiều ngang.

---

## `align-items: center`

Căn giữa theo chiều dọc.

---

# Kết quả sau khi sửa

```text
+----------------------+
|                      |
|      CONTENT         |
|                      |
+----------------------+
```

Content nằm chính giữa màn hình.

---

# Lỗi 3: Sidebar bị co lại khi content quá dài

## Code gốc

```css
.layout {
    display: flex;
}

.sidebar {
    width: 250px;
}

.content {
    flex: 1;
}
```

---

# Nguyên nhân

Flexbox mặc định:

```css
flex-shrink: 1;
```

=> sidebar được phép co nhỏ lại khi thiếu chỗ.

---

# Cách sửa

Không cho sidebar co lại.

---

# Code sửa

```css
.layout {
    display: flex;
}

.sidebar {
    width: 250px;
    flex-shrink: 0;
}

.content {
    flex: 1;
}
```

---

# Giải thích code sửa

## `flex-shrink: 0`

Ngăn sidebar bị co lại.

=> sidebar luôn giữ đúng:

```text
250px
```

---

# Kết quả sau khi sửa

```text
| sidebar 250px | content |
```

Sidebar không bị bóp méo nữa.

---

# Tổng kết nhanh

| Lỗi | Nguyên nhân | Cách sửa |
|---|---|---|
| Card không đều | Nội dung khác chiều cao | `flex-direction: column` + `margin-top: auto` |
| Không căn giữa | Thiếu justify-content + align-items | Dùng `center` |
| Sidebar bị co | `flex-shrink: 1` mặc định | `flex-shrink: 0` |
