# PHẦN A — KIỂM TRA ĐỌC HIỂU

# Câu A1 — var / let / const

## Đoạn 1

```js
console.log(x);
var x = 5;
```

### Dự đoán output

```js
undefined
```

### Giải thích

`var` được hoisting lên đầu scope.

JavaScript hiểu như:

```js
var x;
console.log(x);
x = 5;
```

Biến tồn tại nhưng chưa có giá trị nên in ra:

```js
undefined
```

---

## Đoạn 2

```js
console.log(y);
let y = 10;
```

### Dự đoán output

```js
ReferenceError
```

### Giải thích

`let` cũng được hoisting nhưng nằm trong Temporal Dead Zone (TDZ).

Không thể dùng biến trước khi khai báo.

---

## Đoạn 3

```js
const z = 15;
z = 20;
console.log(z);
```

### Dự đoán output

```js
TypeError
```

### Giải thích

`const` không thể gán lại giá trị.

---

## Đoạn 4

```js
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```

### Dự đoán output

```js
[1, 2, 3, 4]
```

### Giải thích

`const` không cho phép gán lại biến,
nhưng vẫn có thể thay đổi nội dung object/array.

---

## Đoạn 5

```js
let a = 1;

{
    let a = 2;
    console.log("Trong block:", a);
}

console.log("Ngoài block:", a);
```

### Dự đoán output

```js
Trong block: 2
Ngoài block: 1
```

### Giải thích

`let` có block scope.

Biến bên trong block khác với biến bên ngoài.

---

# Kết luận

- `var` có function scope
- `let` và `const` có block scope
- `const` không thể gán lại
- `let` an toàn hơn `var`

---

# Câu A2 — Data Types & Coercion

## Dự đoán kết quả

```js
console.log(typeof null);
```

Output:

```js
object
```

---

```js
console.log(typeof undefined);
```

Output:

```js
undefined
```

---

```js
console.log(typeof NaN);
```

Output:

```js
number
```

---

```js
console.log("5" + 3);
```

Output:

```js
53
```

---

```js
console.log("5" - 3);
```

Output:

```js
2
```

---

```js
console.log("5" * "3");
```

Output:

```js
15
```

---

```js
console.log(true + true);
```

Output:

```js
2
```

---

```js
console.log([] + []);
```

Output:

```js

```

(chuỗi rỗng)

---

```js
console.log([] + {});
```

Output:

```js
[object Object]
```

---

```js
console.log({} + []);
```

Output:

```js
0
```

---

# Giải thích "5" + 3 và "5" - 3

## "5" + 3

Dấu `+` ưu tiên nối chuỗi.

JavaScript ép:

```js
3 → "3"
```

nên:

```js
"5" + "3" = "53"
```

---

## "5" - 3

Dấu `-` chỉ dùng cho toán học.

JavaScript ép:

```js
"5" → 5
```

nên:

```js
5 - 3 = 2
```

---

# Kết luận

JavaScript tự động ép kiểu dữ liệu (type coercion),
nên cần cẩn thận khi dùng toán tử.

---

# Câu A3 — So sánh == vs ===

## Dự đoán kết quả

```js
console.log(5 == "5");
```

Output:

```js
true
```

---

```js
console.log(5 === "5");
```

Output:

```js
false
```

---

```js
console.log(null == undefined);
```

Output:

```js
true
```

---

```js
console.log(null === undefined);
```

Output:

```js
false
```

---

```js
console.log(NaN == NaN);
```

Output:

```js
false
```

---

```js
console.log(0 == false);
```

Output:

```js
true
```

---

```js
console.log(0 === false);
```

Output:

```js
false
```

---

```js
console.log("" == false);
```

Output:

```js
true
```

---

# Giải thích

## ==

So sánh sau khi ép kiểu.

---

## ===

So sánh:
- giá trị
- kiểu dữ liệu

Không ép kiểu.

---

# Nên dùng gì?

Nên dùng:

```js
===
```

vì:
- an toàn hơn
- tránh bug do ép kiểu
- dễ debug hơn

---

# Kết luận

`===` là cách so sánh được khuyến khích trong JavaScript hiện đại.

---

# Câu A4 — Truthy & Falsy

# Tất cả giá trị Falsy trong JavaScript

```js
false
0
-0
0n
""
null
undefined
NaN
```

Mọi giá trị khác đều là Truthy.

---

# Dự đoán kết quả

```js
if ("0") console.log("A");
```

In:

```js
A
```

vì `"0"` là chuỗi không rỗng → truthy.

---

```js
if ("") console.log("B");
```

Không in.

vì chuỗi rỗng là falsy.

---

```js
if ([]) console.log("C");
```

In:

```js
C
```

Array rỗng vẫn là truthy.

---

```js
if ({}) console.log("D");
```

In:

```js
D
```

Object rỗng vẫn là truthy.

---

```js
if (null) console.log("E");
```

Không in.

---

```js
if (0) console.log("F");
```

Không in.

---

```js
if (-1) console.log("G");
```

In:

```js
G
```

vì số khác 0 là truthy.

---

```js
if (" ") console.log("H");
```

In:

```js
H
```

vì chuỗi chứa dấu cách vẫn là chuỗi không rỗng.

---

# Kết luận

Trong JavaScript:
- array rỗng và object rỗng vẫn là truthy
- chỉ có một số ít giá trị là falsy

---

# Câu A5 — Template Literals

## Cách 1

### Code cũ

```js
var greeting = "Xin chào " + name + "! Bạn " + age + " tuổi.";
```

### Template Literal

```js
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```

---

## Cách 2

### Code cũ

```js
var url = "https://api.example.com/users/" + userId + "/orders?page=" + page;
```

### Template Literal

```js
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```

---

## Cách 3

### Code cũ

```js
var html = "<div class=\"card\">" +
    "<h2>" + title + "</h2>" +
    "<p>" + description + "</p>" +
    "<span>Giá: " + price + "đ</span>" +
    "</div>";
```

### Template Literal

```js
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```

---

# Ưu điểm của Template Literal

- dễ đọc hơn
- hỗ trợ xuống dòng
- không cần nối chuỗi bằng `+`
- dễ chèn biến bằng `${}`

---

# PHẦN C — SUY LUẬN

# Câu C1 — Debug JavaScript

## Lỗi 1 — Không kiểm tra kiểu dữ liệu

```js
tinhGiaGiamGia("100000", 20)
```

`"100000"` là string, không phải number.

---

## Lỗi 2 — Không kiểm tra kiểu dữ liệu của phần trăm giảm

Nếu nhập:
```js
"20"
```

hoặc:
```js
abc
```

chương trình sẽ sai logic.

---

## Lỗi 3 — Dùng dấu = thay vì ===

### Code lỗi

```js
if (giaSauGiam = 0)
```

Đây là phép gán, không phải phép so sánh.

---

## Lỗi 4 — Thiếu dấu ;

Ví dụ:

```js
return "Phần trăm giảm không hợp lệ"
```

---

## Lỗi 5 — Không kiểm tra giá trị âm

Nếu:

```js
giaBan = -1000
```

thì không hợp lệ.

---

## Lỗi 6 — Dùng var trong vòng lặp setTimeout

### Code lỗi

```js
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i)
    }, 1000)
}
```

---

# Lỗi "ẩn" liên quan đến var

Sau 1 giây sẽ in:

```js
Item 5
Item 5
Item 5
Item 5
Item 5
```

---

# Vì sao?

`var` có function scope.

Toàn bộ vòng lặp dùng chung một biến `i`.

Khi `setTimeout` chạy:
- vòng lặp đã kết thúc
- `i = 5`

---

# Cách sửa

Dùng:

```js
let
```

---

# Code đúng

```js
for (let i = 0; i < 5; i++) {

    setTimeout(function () {

        console.log("Item " + i);

    }, 1000);
}
```

---

# Kết luận

Các lỗi chính:
- ép kiểu dữ liệu
- dùng `=` thay vì `===`
- thiếu validate input
- dùng `var` trong async loop
- thiếu semicolon
- thiếu kiểm tra dữ liệu âm

---

# Câu C2 — Bài toán thực tế

# Ý tưởng chương trình

Chương trình:
- tính tổng món ăn
- áp dụng giảm giá
- tính VAT
- tính tip
- in hóa đơn

---

# Quy tắc giảm giá

| Điều kiện | Giảm giá |
|---|---|
| Tổng > 500k | 10% |
| Tổng > 1 triệu | 15% |
| Wednesday | +5% |

---

# VAT

```js
8%
```

---

# Tip

```js
5%
```

(có thể chọn)

---

# Ví dụ hóa đơn

```text
╔══════════════════════════════════════╗
║        HÓA ĐƠN NHÀ HÀNG              ║
╠══════════════════════════════════════╣
║ 1. Phở bò      x2    @65k = 130k     ║
║ 2. Trà đá      x3    @5k  = 15k      ║
║ 3. Bún chả     x1    @55k = 55k      ║
╠══════════════════════════════════════╣
║ Tổng cộng:              200.000đ     ║
║ Giảm giá (0%):           0đ          ║
║ VAT (8%):                16.000đ     ║
║ Tip (5%):                10.000đ     ║
╠══════════════════════════════════════╣
║ THANH TOÁN:              226.000đ    ║
╚══════════════════════════════════════╝
```

---

# Các kỹ thuật sử dụng

- Array
- Object
- Loop
- if / else
- Function
- String formatting
- Math calculations

---

# Kết luận

Đây là bài toán mô phỏng hệ thống tính tiền thực tế trong nhà hàng.