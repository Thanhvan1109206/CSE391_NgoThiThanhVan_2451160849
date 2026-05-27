// shopping_cart.js

function createCart() {

    // Private data
    let items = [];
    let discount = 0;

    return {

        // Thêm sản phẩm
        addItem(product, quantity = 1) {

            const existingItem = items.find(
                item => item.id === product.id
            );

            if (existingItem) {
                existingItem.quantity += quantity;
            }
            else {
                items.push({
                    ...product,
                    quantity
                });
            }
        },

        // Xóa sản phẩm
        removeItem(productId) {

            items = items.filter(
                item => item.id !== productId
            );
        },

        // Cập nhật số lượng
        updateQuantity(productId, newQuantity) {

            const item = items.find(
                item => item.id === productId
            );

            if (item) {
                item.quantity = newQuantity;
            }

            // Nếu <= 0 thì xóa
            if (item && item.quantity <= 0) {
                this.removeItem(productId);
            }
        },

        // Lấy danh sách sản phẩm
        getItems() {
            return items;
        },

        // Tính tổng tiền
        getTotal() {

            let total = items.reduce((sum, item) => {
                return sum + (item.price * item.quantity);
            }, 0);

            total = total - (total * discount);

            return total;
        },

        // Mã giảm giá
        applyDiscount(code) {

            if (code === "SALE10") {
                discount = 0.1;
            }
            else if (code === "SALE20") {
                discount = 0.2;
            }
            else {
                alert("Mã giảm giá không hợp lệ!");
            }
        },

        // In console
        printCart() {

            console.log("=== GIỎ HÀNG ===");

            console.table(
                items.map(item => ({
                    "Sản phẩm": item.name,
                    "Số lượng": item.quantity,
                    "Đơn giá": item.price,
                    "Tổng": item.price * item.quantity
                }))
            );

            console.log(
                "Tổng cộng:",
                this.getTotal().toLocaleString("vi-VN") + "đ"
            );
        }
    };
}
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