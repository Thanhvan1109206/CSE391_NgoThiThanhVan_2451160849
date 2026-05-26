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

`var` được hoisting lên đầu chương trình.

JavaScript hiểu gần giống:

```js
var x;

console.log(x);

x = 5;
```

Biến tồn tại nhưng chưa có giá trị nên kết quả là:

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

`let` cũng được hoisting nhưng nằm trong vùng gọi là:

Temporal Dead Zone (TDZ)

Biến chưa được phép sử dụng trước khi khai báo nên sẽ báo lỗi:

```js
Cannot access 'y' before initialization
```

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

`const` không cho phép gán lại giá trị cho biến.

Dòng gây lỗi:

```js
z = 20;
```

Lỗi thường gặp:

```js
Assignment to constant variable
```

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

`const` không cho phép gán lại biến nhưng vẫn cho phép thay đổi nội dung của array hoặc object.

Ví dụ được phép:

```js
arr.push(4);
```

Ví dụ không được phép:

```js
arr = [1, 2];
```

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

Biến `a` bên trong block `{}` là biến khác với biến `a` bên ngoài.

Do đó:

- Trong block: `a = 2`
- Ngoài block: `a = 1`

---

# Kết luận

- `var` có hoisting và có thể truy cập trước khi khai báo với giá trị `undefined`
- `let` và `const` không được sử dụng trước khi khai báo
- `const` không cho phép gán lại biến nhưng có thể thay đổi nội dung object/array
- `let` có block scope nên biến trong block và ngoài block là khác nhau
---

# Câu A2 — Data Types & Coercion

## Dự đoán kết quả

```js
console.log(typeof null);
```

### Output

```js
"object"
```

### Giải thích

Đây là lỗi lịch sử của JavaScript.  
`null` thực chất không phải object nhưng `typeof null` vẫn trả về `"object"`.

---

```js
console.log(typeof undefined);
```

### Output

```js
"undefined"
```

### Giải thích

Biến chưa có giá trị sẽ có kiểu `undefined`.

---

```js
console.log(typeof NaN);
```

### Output

```js
"number"
```

### Giải thích

`NaN` nghĩa là:

```js
Not a Number
```

nhưng trong JavaScript nó vẫn thuộc kiểu `number`.

---

```js
console.log("5" + 3);
```

### Output

```js
"53"
```

### Giải thích

Khi dùng dấu `+` với string, JavaScript sẽ nối chuỗi.

Số `3` được chuyển thành string `"3"`.

Kết quả:

```js
"5" + "3"
```

→ `"53"`

---

```js
console.log("5" - 3);
```

### Output

```js
2
```

### Giải thích

Dấu `-` không dùng để nối chuỗi.

JavaScript sẽ ép `"5"` thành số `5`.

Kết quả:

```js
5 - 3
```

→ `2`

---

```js
console.log("5" * "3");
```

### Output

```js
15
```

### Giải thích

Dấu `*` yêu cầu phép toán số học nên JavaScript ép cả hai string thành number.

```js
5 * 3
```

→ `15`

---

```js
console.log(true + true);
```

### Output

```js
2
```

### Giải thích

Trong JavaScript:

```js
true = 1
false = 0
```

Do đó:

```js
1 + 1 = 2
```

---

```js
console.log([] + []);
```

### Output

```js
""
```

### Giải thích

Array rỗng chuyển thành chuỗi rỗng:

```js
"" + ""
```

→ `""`

---

```js
console.log([] + {});
```

### Output

```js
"[object Object]"
```

### Giải thích

- `[]` chuyển thành `""`
- `{}` chuyển thành `"[object Object]"`

Kết quả:

```js
"" + "[object Object]"
```

→ `"[object Object]"`

---

```js
console.log({} + []);
```

### Output

```js
0
```

hoặc:

```js
"[object Object]"
```

(tùy môi trường chạy)

### Giải thích

JavaScript có thể hiểu:

```js
{} 
+[]
```

là:

- `{}` = block code rỗng
- `+[]` = ép array rỗng thành số

```js
+[] = 0
```

nên kết quả có thể là:

```js
0
```

Trong một số môi trường khác, nó có thể nối chuỗi và ra:

```js
"[object Object]"
```

---

# Giải thích vì sao "5" + 3 và "5" - 3 khác nhau

## "5" + 3

Dấu `+` trong JavaScript vừa dùng để:
- cộng số
- nối chuỗi

Khi có string xuất hiện, JavaScript ưu tiên nối chuỗi.

```js
"5" + 3
```

→ `"53"`

---

## "5" - 3

Dấu `-` chỉ dùng cho phép toán số học.

JavaScript sẽ ép kiểu string `"5"` thành number `5`.

```js
5 - 3
```

→ `2`

---

# Kết luận

- JavaScript có cơ chế ép kiểu tự động (type coercion)
- Dấu `+` có thể dùng để nối chuỗi
- Các toán tử `-`, `*`, `/` thường ép dữ liệu về number
- Một số kết quả như `typeof null` là lỗi lịch sử của JavaScript
---

# Câu A3 — So sánh == vs ===

## Dự đoán kết quả

```js
console.log(5 == "5");
```

### Output

```js
true
```

### Giải thích

`==` chỉ so sánh giá trị.

JavaScript sẽ ép kiểu:

```js
"5" → 5
```

nên:

```js
5 == 5
```

→ `true`

---

```js
console.log(5 === "5");
```

### Output

```js
false
```

### Giải thích

`===` so sánh:
- giá trị
- và kiểu dữ liệu

Ở đây:

```js
5        → number
"5"      → string
```

Khác kiểu nên kết quả là:

```js
false
```

---

```js
console.log(null == undefined);
```

### Output

```js
true
```

### Giải thích

Trong JavaScript:

```js
null == undefined
```

được quy định đặc biệt là `true`.

---

```js
console.log(null === undefined);
```

### Output

```js
false
```

### Giải thích

`===` không ép kiểu.

```js
null        → null
undefined   → undefined
```

Khác kiểu dữ liệu nên kết quả là:

```js
false
```

---

```js
console.log(NaN == NaN);
```

### Output

```js
false
```

### Giải thích

`NaN` là giá trị đặc biệt.

Trong JavaScript:

```js
NaN !== NaN
```

Muốn kiểm tra NaN phải dùng:

```js
Number.isNaN(value)
```

---

```js
console.log(0 == false);
```

### Output

```js
true
```

### Giải thích

JavaScript ép kiểu:

```js
false → 0
```

nên:

```js
0 == 0
```

→ `true`

---

```js
console.log(0 === false);
```

### Output

```js
false
```

### Giải thích

```js
0         → number
false     → boolean
```

Khác kiểu dữ liệu nên:

```js
false
```

---

```js
console.log("" == false);
```

### Output

```js
true
```

### Giải thích

JavaScript ép kiểu:

```js
"" → 0
false → 0
```

nên:

```js
0 == 0
```

→ `true`

---

# Nên dùng == hay ===?

Nên dùng:

```js
===
```

---

# Vì sao?

`===`:
- an toàn hơn
- không ép kiểu tự động
- tránh bug khó phát hiện

Ví dụ:

```js
0 == false
```

→ `true`

Điều này dễ gây lỗi logic.

---

# Quy tắc thực tế

## Nên dùng

```js
===
```

và

```js
!==
```

---

## Hạn chế dùng

```js
==
```

và

```js
!=
```

trừ khi thật sự muốn ép kiểu.

---

# Kết luận

- `==` so sánh sau khi ép kiểu
- `===` so sánh cả giá trị và kiểu dữ liệu
- `===` giúp code rõ ràng và ít lỗi hơn
- Trong thực tế frontend/backend hiện đại nên ưu tiên dùng `===`
---

# Câu A4 — Truthy & Falsy

# Tất cả giá trị Falsy trong JavaScript

JavaScript có các giá trị Falsy sau:

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

Ngoài các giá trị trên, hầu hết các giá trị khác đều là Truthy.

---

# Dự đoán kết quả

```js
if ("0") console.log("A");
```

### Kết quả

```js
A
```

### Giải thích

`"0"` là string không rỗng nên là Truthy.

---

```js
if ("") console.log("B");
```

### Kết quả

Không in gì.

### Giải thích

`""` là chuỗi rỗng nên là Falsy.

---

```js
if ([]) console.log("C");
```

### Kết quả

```js
C
```

### Giải thích

Array rỗng vẫn là Truthy trong JavaScript.

---

```js
if ({}) console.log("D");
```

### Kết quả

```js
D
```

### Giải thích

Object rỗng vẫn là Truthy.

---

```js
if (null) console.log("E");
```

### Kết quả

Không in gì.

### Giải thích

`null` là giá trị Falsy.

---

```js
if (0) console.log("F");
```

### Kết quả

Không in gì.

### Giải thích

`0` là giá trị Falsy.

---

```js
if (-1) console.log("G");
```

### Kết quả

```js
G
```

### Giải thích

Mọi số khác `0` đều là Truthy.

`-1` là Truthy.

---

```js
if (" ") console.log("H");
```

### Kết quả

```js
H
```

### Giải thích

`" "` là chuỗi có chứa ký tự space nên KHÔNG phải chuỗi rỗng.

Do đó nó là Truthy.

---

# Kết luận

## Falsy values:

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

---

## Truthy examples:

```js
"0"
[]
{}
-1
" "
```

---

# Lưu ý quan trọng

Nhiều người mới học thường nhầm:

```js
[]
{}
"0"
```

là Falsy.

Thực tế:
- array rỗng → Truthy
- object rỗng → Truthy
- string `"0"` → Truthy
---

# Câu C1 — Debug JavaScript

# Code gốc

```js
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    if (phanTramGiam < 0 || phanTramGiam > 100) {
        return "Phần trăm giảm không hợp lệ"
    }
    
    var giamGia = giaBan * phanTramGiam / 100
    let giaSauGiam = giaBan - giamGia
    
    if (giaSauGiam = 0) {
        console.log("Sản phẩm miễn phí!")
    }
    
    return giaSauGiam
}

// Test
const gia = tinhGiaGiamGia("100000", 20)
console.log("Giá sau giảm: " + gia + "đ")

const gia2 = tinhGiaGiamGia(50000, 110)
console.log("Giá: " + gia2)

for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i)
    }, 1000)
}
```

---

# Các lỗi trong chương trình

---

# Lỗi 1 — Không kiểm tra kiểu dữ liệu của giaBan

## Code lỗi

```js
const gia = tinhGiaGiamGia("100000", 20)
```

`"100000"` là string, không phải number.

JavaScript vẫn ép kiểu được nhưng dễ gây bug.

---

## Cách sửa

Kiểm tra kiểu dữ liệu:

```js
if (typeof giaBan !== "number") {
    return "Giá bán phải là số"
}
```

---

# Lỗi 2 — Không kiểm tra kiểu dữ liệu của phanTramGiam

Nếu nhập:

```js
"20"
```

hoặc:

```js
abc
```

chương trình có thể lỗi hoặc tính sai.

---

## Cách sửa

```js
if (typeof phanTramGiam !== "number") {
    return "Phần trăm giảm phải là số"
}
```

---

# Lỗi 3 — Dùng phép gán thay vì so sánh

## Code lỗi

```js
if (giaSauGiam = 0)
```

Dấu:

```js
=
```

là gán giá trị, KHÔNG phải so sánh.

---

## Hậu quả

```js
giaSauGiam = 0
```

sẽ:
- gán giá trị 0
- điều kiện trở thành false

làm mất giá trị thật của biến.

---

## Cách sửa

```js
if (giaSauGiam === 0)
```

---

# Lỗi 4 — Thiếu dấu chấm phẩy

Ví dụ:

```js
return "Phần trăm giảm không hợp lệ"
```

JavaScript vẫn chạy được do ASI (Automatic Semicolon Insertion),
nhưng dễ gây lỗi khó debug.

---

## Cách sửa

```js
return "Phần trăm giảm không hợp lệ";
```

---

# Lỗi 5 — Dùng var trong vòng lặp setTimeout

## Code lỗi

```js
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i)
    }, 1000)
}
```

---

## Kết quả thực tế

Sau 1 giây sẽ in:

```js
Item 5
Item 5
Item 5
Item 5
Item 5
```

---

## Vì sao?

`var` có function scope.

Biến `i` chỉ có MỘT bản dùng chung cho toàn bộ vòng lặp.

Khi `setTimeout` chạy:
- vòng lặp đã kết thúc
- `i = 5`

nên tất cả đều in:

```js
Item 5
```

---

# Cách sửa

Dùng:

```js
let
```

vì `let` có block scope.

---

## Code đúng

```js
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}
```

---

## Kết quả đúng

```js
Item 0
Item 1
Item 2
Item 3
Item 4
```

---

# Lỗi 6 — Không kiểm tra giá trị âm của giaBan

Nếu:

```js
giaBan = -1000
```

thì vô lý vì giá sản phẩm không thể âm.

---

## Cách sửa

```js
if (giaBan < 0) {
    return "Giá bán không hợp lệ";
}
```

---

# Phiên bản code đã sửa

```js
function tinhGiaGiamGia(giaBan, phanTramGiam) {

    // Kiểm tra kiểu dữ liệu
    if (
        typeof giaBan !== "number" ||
        typeof phanTramGiam !== "number"
    ) {
        return "Input phải là số";
    }

    // Kiểm tra giá trị hợp lệ
    if (giaBan < 0) {
        return "Giá bán không hợp lệ";
    }

    if (phanTramGiam < 0 || phanTramGiam > 100) {
        return "Phần trăm giảm không hợp lệ";
    }

    // Tính giảm giá
    let giamGia = giaBan * phanTramGiam / 100;

    let giaSauGiam = giaBan - giamGia;

    // Kiểm tra miễn phí
    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }

    return giaSauGiam;
}

// Test
const gia = tinhGiaGiamGia(100000, 20);
console.log("Giá sau giảm:", gia + "đ");

const gia2 = tinhGiaGiamGia(50000, 110);
console.log("Giá:", gia2);

// setTimeout
for (let i = 0; i < 5; i++) {

    setTimeout(function () {

        console.log("Item " + i);

    }, 1000);
}
```

---

# Kết luận

Các lỗi chính gồm:
- ép kiểu dữ liệu
- dùng `=` thay vì `===`
- thiếu validate input
- dùng `var` trong async loop
- thiếu semicolon
- thiếu kiểm tra dữ liệu âm

Quan trọng nhất là lỗi `var` trong `setTimeout`,
đây là lỗi rất phổ biến khi học JavaScript bất đồng bộ.
Câu C2 (10đ) — Bài toán thực tế
Viết chương trình tính hóa đơn nhà hàng:

Input: Danh sách món ăn + giá + số lượng
Quy tắc:
- Tổng > 500k → giảm 10%
- Tổng > 1 triệu → giảm 15%  
- Ngày thứ 3 (Wednesday) → giảm thêm 5%
- VAT 8%
- Tip 5% (optional)

Output: Hóa đơn chi tiết dạng:
╔══════════════════════════════════════╗
║        HÓA ĐƠN NHÀ HÀNG           ║
╠══════════════════════════════════════╣
║ 1. Phở bò      x2    @65k  = 130k  ║
║ 2. Trà đá      x3    @5k   = 15k   ║
║ 3. Bún chả     x1    @55k  = 55k   ║
╠══════════════════════════════════════╣
║ Tổng cộng:              200.000đ    ║
║ Giảm giá (0%):           0đ         ║
║ VAT (8%):                16.000đ    ║
║ Tip (5%):                10.000đ    ║
╠══════════════════════════════════════╣
║ THANH TOÁN:              226.000đ   ║
╚══════════════════════════════════════╝