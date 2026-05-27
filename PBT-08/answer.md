# PHIẾU BÀI TẬP 08
# JAVASCRIPT FUNCTIONS, ARRAYS & OBJECTS

---

# PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

## Câu A1 (5đ) — Function Declaration vs Expression vs Arrow

### 1. Function Declaration

```javascript
function tinhThueBaoHiem(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thuong: thue,
        thuc_nhan: luong - thue
    };
}
```

### 2. Function Expression

```javascript
const tinhThueBaoHiem2 = function(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thuong: thue,
        thuc_nhan: luong - thue
    };
};
```

### 3. Arrow Function

```javascript
const tinhThueBaoHiem3 = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thuong: thue,
        thuc_nhan: luong - thue
    };
};
```

---

## Hoisting khác nhau như thế nào?

### Function Declaration

Được hoisting toàn bộ nên có thể gọi trước khi khai báo.

```javascript
console.log(test1(5));

function test1(x) {
    return x * 2;
}
```

Kết quả:

```javascript
10
```

---

### Function Expression

Chỉ biến được hoisting, chưa được gán giá trị function.

```javascript
console.log(test2(5));

const test2 = function(x) {
    return x * 2;
};
```

Kết quả:

```javascript
ReferenceError
```

---

### Arrow Function

Hoạt động tương tự Function Expression.

```javascript
console.log(test3(5));

const test3 = (x) => x * 2;
```

Kết quả:

```javascript
ReferenceError
```

---

## Kết luận

- Function Declaration: hoisting toàn bộ function
- Function Expression: không hoisting function
- Arrow Function: không hoisting function

---

# Câu A2 (5đ) — Scope & Closure

## Đoạn 1

```javascript
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const c = counter();

console.log(c.increment());
console.log(c.increment());
console.log(c.increment());
console.log(c.decrement());
console.log(c.getCount());
```

### Output

```javascript
1
2
3
2
2
```

---

## Giải thích

Biến `count` nằm trong closure của hàm `counter()`.

Các function bên trong vẫn giữ được quyền truy cập vào `count`
ngay cả khi `counter()` đã chạy xong.

- increment() → tăng count lên 1
- decrement() → giảm count đi 1
- getCount() → trả về giá trị hiện tại

---

# Đoạn 2

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
```

## Output

```javascript
var: 3
var: 3
var: 3

let: 0
let: 1
let: 2
```

---

## Giải thích

### Với `var`

`var` có function scope nên cả vòng lặp dùng chung 1 biến `i`.

Sau khi vòng lặp kết thúc:

```javascript
i = 3
```

Khi `setTimeout` chạy thì tất cả đều đọc cùng giá trị `3`.

---

### Với `let`

`let` có block scope.

Mỗi lần lặp sẽ tạo ra 1 biến `j` riêng biệt:

- lần 1 → j = 0
- lần 2 → j = 1
- lần 3 → j = 2

Nên `setTimeout` in đúng từng giá trị.

---

# Câu A3 (5đ) — Array Methods

```javascript
const nums = [1,2,3,4,5,6,7,8,9,10];
```

## 1. Lấy các số chẵn

```javascript
const even = nums.filter(n => n % 2 === 0);
```

---

## 2. Nhân mỗi số với 3

```javascript
const triple = nums.map(n => n * 3);
```

---

## 3. Tính tổng tất cả

```javascript
const total = nums.reduce((sum, n) => sum + n, 0);
```

---

## 4. Tìm số đầu tiên > 7

```javascript
const first = nums.find(n => n > 7);
```

---

## 5. Kiểm tra có số > 10 không

```javascript
const check = nums.some(n => n > 10);
```

---

## 6. Kiểm tra tất cả đều > 0

```javascript
const allPositive = nums.every(n => n > 0);
```

---

## 7. Tạo mảng "Số X là [chẵn/lẻ]"

```javascript
const text = nums.map(
    n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`
);
```

---

## 8. Đảo ngược mảng (không mutate gốc)

```javascript
const reversed = [...nums].reverse();
```

---

# Câu A4 (5đ) — Object Destructuring & Spread

```javascript
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: {
        ram: 8,
        storage: 256,
        color: "Titan"
    }
};
```

---

## Destructuring

```javascript
const { name, price, specs: { ram, color } } = product;

console.log(name, price, ram, color);
```

### Output

```javascript
iPhone 16 25990000 8 Titan
```

---

```javascript
console.log(specs);
```

### Output

```javascript
ReferenceError: specs is not defined
```

### Giải thích

Vì destructuring chỉ lấy:

```javascript
ram
color
```

không tạo biến `specs`.

---

# Spread

```javascript
const updated = {
    ...product,
    price: 23990000,
    sale: true
};
```

---

```javascript
console.log(updated.price);
```

### Output

```javascript
23990000
```

---

```javascript
console.log(updated.sale);
```

### Output

```javascript
true
```

---

```javascript
console.log(product.price);
```

### Output

```javascript
25990000
```

### Giải thích

Object gốc không bị thay đổi.

Spread tạo object mới.

---

# Spread Gotcha

```javascript
const copy = { ...product };

copy.specs.ram = 16;

console.log(product.specs.ram);
```

### Output

```javascript
16
```

---

## Giải thích

Spread chỉ copy nông (shallow copy).

`specs` vẫn tham chiếu tới cùng object trong bộ nhớ.

Nên khi sửa:

```javascript
copy.specs.ram = 16
```

thì `product.specs.ram` cũng đổi theo.
# PHẦN C — SUY LUẬN

---

# Câu C1 — Refactor Code

## Refactor sử dụng:
- filter()
- map()
- sort()
- destructuring
- arrow functions

```js
const processOrders = (orders) =>
    orders
        .filter(({ status, total }) =>
            status === "completed" && total > 100000
        )
        .map(({ id, customer, total }) => {
            const discount = total * 0.1;

            return {
                id,
                customer,
                total,
                discount,
                finalTotal: total - discount
            };
        })
        .sort((a, b) =>
            b.finalTotal - a.finalTotal
        );
```

---

## Giải thích

### 1. filter()
Lọc:
- status = "completed"
- total > 100000

---

### 2. map()
Biến đổi dữ liệu:
- tính discount
- tính finalTotal
- trả về object mới

---

### 3. destructuring

```js
({ id, customer, total })
```

Giúp code ngắn gọn hơn.

---

### 4. sort()

```js
.sort((a, b) => b.finalTotal - a.finalTotal)
```

Sắp xếp giảm dần theo finalTotal.

---

# Câu C2 — Thiết kế API miniArray

```js
const miniArray = {

    // =========================
    // map()
    // =========================

    map(arr, fn) {

        const result = [];

        for (let i = 0; i < arr.length; i++) {
            result.push(
                fn(arr[i], i, arr)
            );
        }

        return result;
    },


    // =========================
    // filter()
    // =========================

    filter(arr, fn) {

        const result = [];

        for (let i = 0; i < arr.length; i++) {

            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }

        return result;
    },


    // =========================
    // reduce()
    // =========================

    reduce(arr, fn, initialValue) {

        let accumulator = initialValue;

        for (let i = 0; i < arr.length; i++) {

            accumulator = fn(
                accumulator,
                arr[i],
                i,
                arr
            );
        }

        return accumulator;
    }
};



// =========================
// TEST
// =========================

console.log(
    miniArray.map(
        [1, 2, 3],
        x => x * 2
    )
);
// → [2,4,6]


console.log(
    miniArray.filter(
        [1,2,3,4],
        x => x > 2
    )
);
// → [3,4]


console.log(
    miniArray.reduce(
        [1,2,3,4],
        (a,b) => a + b,
        0
    )
);
// → 10
```

---

# Giải thích

## 1. miniArray.map()

Duyệt từng phần tử:
- gọi callback fn()
- push kết quả vào mảng mới

---

## 2. miniArray.filter()

Duyệt từng phần tử:
- nếu callback trả về true
→ thêm vào result

---

## 3. miniArray.reduce()

Dùng accumulator:
- cộng dồn giá trị
- trả về kết quả cuối cùng

---

# Kiến thức sử dụng

- Higher-order functions
- Arrow functions
- Array methods
- Destructuring
- Callback functions
- Loop
- Functional programming
- Object manipulation