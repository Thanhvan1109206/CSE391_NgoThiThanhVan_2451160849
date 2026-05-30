# ASYNC JAVASCRIPT & API INTEGRATION

## PHẦN A — KIỂM TRA ĐỌC HIỂU (15 điểm)

# Câu A1 (5đ) — Sync vs Async

## Thứ tự output

```javascript
console.log("1 - Start");

setTimeout(() => console.log("2 - Timeout 0ms"), 0);

Promise.resolve().then(() => console.log("3 - Promise"));

console.log("4 - End");

setTimeout(() => console.log("5 - Timeout 100ms"), 100);

Promise.resolve().then(() => {
    console.log("6 - Promise 2");
    setTimeout(() => console.log("7 - Nested timeout"), 0);
});
```

### Kết quả

```text
1 - Start
4 - End
3 - Promise
6 - Promise 2
2 - Timeout 0ms
7 - Nested timeout
5 - Timeout 100ms
```

## Giải thích

### Call Stack

JavaScript chạy code đồng bộ trước:

```javascript
console.log("1 - Start");
console.log("4 - End");
```

Output:

```text
1 - Start
4 - End
```

### Microtask Queue

Bao gồm:

```javascript
Promise.then()
Promise.catch()
Promise.finally()
```

Các Promise được đưa vào Microtask Queue:

```javascript
Promise.resolve().then(...)
```

Thực hiện:

```text
3 - Promise
6 - Promise 2
```

### Macrotask Queue

Bao gồm:

```javascript
setTimeout()
setInterval()
```

Sau khi Microtask chạy xong:

```text
2 - Timeout 0ms
7 - Nested timeout
```

Cuối cùng:

```text
5 - Timeout 100ms
```

### Kết luận

Event Loop luôn ưu tiên:

```text
Call Stack
↓
Microtask Queue
↓
Macrotask Queue
```

---

# Câu A2 (5đ) — Fetch API

## Code

```javascript
async function getData() {
    try {
        const response = await fetch("https://api.example.com/data");

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed:", error.message);
        return null;
    }
}
```

## await fetch(...) là gì?

```javascript
fetch(url)
```

trả về:

```javascript
Promise<Response>
```

Ví dụ:

```javascript
const promise = fetch(url);
```

Nếu không dùng await:

```javascript
console.log(promise);
```

sẽ nhận Promise chứ chưa có dữ liệu.

Dùng:

```javascript
const response = await fetch(url);
```

để chờ request hoàn thành.

---

## response.ok khi nào false?

```javascript
response.ok
```

sẽ là:

```javascript
true
```

nếu status nằm trong khoảng:

```text
200 - 299
```

Ngược lại:

```javascript
false
```

Ví dụ:

| Status | Ý nghĩa               |
| ------ | --------------------- |
| 404    | Not Found             |
| 429    | Too Many Requests     |
| 500    | Internal Server Error |

---

## response.json() tại sao cần await?

```javascript
const data = await response.json();
```

Vì:

```javascript
response.json()
```

cũng trả về Promise.

Trình duyệt cần thời gian để:

* đọc response body
* parse JSON thành object JavaScript

Ví dụ:

```javascript
const data = await response.json();
```

---

## try...catch bắt những lỗi gì?

### Bắt được

#### Network Error

```javascript
fetch("wrong-url")
```

hoặc mất mạng.

#### JSON Parse Error

```javascript
await response.json()
```

khi dữ liệu không phải JSON hợp lệ.

#### Lỗi do throw

```javascript
throw new Error("HTTP 404");
```

---

### Không tự động bắt 404 hoặc 500

Fetch vẫn resolve bình thường:

```javascript
response.status === 404
```

nên phải tự kiểm tra:

```javascript
if (!response.ok) {
    throw new Error(...);
}
```

---

# Câu A3 (5đ) — Promise States

## Sơ đồ Promise

```text
                 Pending
                 /     \
                /       \
               /         \
      Fulfilled         Rejected
```

### Pending

Promise đang xử lý.

### Fulfilled

Promise hoàn thành thành công.

### Rejected

Promise thất bại.

Ví dụ:

```javascript
const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});
```

---

## Callback Hell là gì?

Callback Hell là tình trạng callback lồng callback quá nhiều làm code khó đọc và khó bảo trì.

Ví dụ:

```javascript
getUser(userId, function(user) {
    getOrders(user.id, function(orders) {
        getOrderDetail(orders[0].id, function(detail) {
            getShipping(detail.id, function(shipping) {
                console.log(shipping);
            });
        });
    });
});
```

---

## Refactor bằng Async/Await

```javascript
async function loadData(userId) {
    try {
        const user = await getUser(userId);
        const orders = await getOrders(user.id);
        const detail = await getOrderDetail(orders[0].id);
        const shipping = await getShipping(detail.id);

        console.log(shipping);
    } catch (error) {
        console.error(error);
    }
}
```

Ưu điểm:

* Dễ đọc
* Dễ debug
* Xử lý lỗi tập trung

---

# PHẦN C — PHÂN TÍCH (20 điểm)

# Câu C1 (10đ) — Error Handling Strategy

## 1. Network Errors

Ví dụ:

* Mất Internet
* DNS lỗi
* Server không phản hồi

Xử lý:

```javascript
try {
    const response = await fetch(url);
} catch (error) {
    alert("Không thể kết nối Internet");
}
```

Ngoài ra:

* Hiển thị thông báo thân thiện
* Cho phép Retry
* Lưu dữ liệu cache nếu có

---

## 2. API Errors

### 404 Not Found

```javascript
if (response.status === 404) {
    throw new Error("Resource not found");
}
```

Thông báo:

```text
Dữ liệu không tồn tại.
```

---

### 500 Internal Server Error

```javascript
if (response.status === 500) {
    throw new Error("Server error");
}
```

Thông báo:

```text
Máy chủ đang gặp sự cố.
```

---

### 429 Too Many Requests

```javascript
if (response.status === 429) {
    throw new Error("Rate limit exceeded");
}
```

Thông báo:

```text
Bạn đang gửi quá nhiều yêu cầu.
Vui lòng thử lại sau.
```

---

## 3. Timeout > 10 giây

### fetchWithTimeout()

```javascript
async function fetchWithTimeout(url, ms = 10000) {

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request Timeout"));
        }, ms);
    });

    return Promise.race([
        fetch(url),
        timeoutPromise
    ]);
}
```

Sử dụng:

```javascript
try {
    const response = await fetchWithTimeout(
        "https://api.example.com",
        10000
    );
} catch(error) {
    console.error(error.message);
}
```

---

## 4. Retry Logic

### fetchWithRetry()

```javascript
async function fetchWithRetry(
    url,
    maxRetries = 3
) {

    let retries = 0;

    while (retries < maxRetries) {

        try {

            return await fetch(url);

        } catch(error) {

            retries++;

            console.log(
                `Retry ${retries}/${maxRetries}`
            );

            if (retries === maxRetries) {
                throw error;
            }
        }
    }
}
```

Sử dụng:

```javascript
try {
    const response =
        await fetchWithRetry(url, 3);
}
catch(error) {
    console.error(error);
}
```

---

## Chiến lược tổng thể

| Loại lỗi      | Cách xử lý                        |
| ------------- | --------------------------------- |
| Network Error | Retry + thông báo người dùng      |
| 404           | Hiển thị "không tìm thấy dữ liệu" |
| 429           | Chờ và thử lại                    |
| 500           | Báo lỗi hệ thống                  |
| Timeout       | Hủy request và thông báo          |
| Parse Error   | Ghi log và fallback               |

---

# Câu C2 (10đ) — Promise.all vs Promise.allSettled vs Promise.race vs Promise.any

| Method               | Khi nào Resolve             | Khi nào Reject        | Use Case                   |
| -------------------- | --------------------------- | --------------------- | -------------------------- |
| Promise.all()        | Tất cả thành công           | Chỉ cần 1 promise lỗi | Load dữ liệu đồng thời     |
| Promise.allSettled() | Tất cả hoàn thành           | Không reject          | Thống kê kết quả           |
| Promise.race()       | Promise đầu tiên hoàn thành | Promise đầu tiên lỗi  | Timeout                    |
| Promise.any()        | Promise đầu tiên thành công | Tất cả đều lỗi        | Dùng nhiều server dự phòng |

---

## Promise.all()

### Scenario

Trang Dashboard cần:

* User Info
* Orders
* Notifications

```javascript
const [user, orders, notifications] =
await Promise.all([
    fetch("/user").then(r => r.json()),
    fetch("/orders").then(r => r.json()),
    fetch("/notifications").then(r => r.json())
]);
```

Ưu điểm:

* Chạy song song
* Nhanh hơn chạy tuần tự

---

## Promise.allSettled()

### Scenario

Admin kiểm tra trạng thái nhiều API.

```javascript
const results =
await Promise.allSettled([
    fetch("/users"),
    fetch("/orders"),
    fetch("/products")
]);

console.log(results);
```

Nhận được:

```javascript
[
 { status: "fulfilled" },
 { status: "rejected" },
 { status: "fulfilled" }
]
```

Dù có lỗi vẫn nhận kết quả của tất cả API.

---

## Promise.race()

### Scenario

Giới hạn request tối đa 10 giây.

```javascript
await Promise.race([
    fetch("/products"),
    new Promise((_, reject) =>
        setTimeout(
            () => reject(new Error("Timeout")),
            10000
        )
    )
]);
```

Promise nào hoàn thành trước sẽ quyết định kết quả.

---

## Promise.any()

### Scenario

Ứng dụng có 3 server mirror.

```javascript
const data = await Promise.any([
    fetch("https://server1.com/data"),
    fetch("https://server2.com/data"),
    fetch("https://server3.com/data")
]);
```

Server nào phản hồi thành công đầu tiên sẽ được sử dụng.

Chỉ reject khi:

```text
TẤT CẢ promise đều thất bại
```

---

# KẾT LUẬN

* Event Loop ưu tiên Microtask trước Macrotask.
* Fetch trả về Promise<Response>.
* Async/Await giúp tránh Callback Hell.
* Error Handling cần xử lý Network Error, API Error, Timeout và Retry.
* Promise.all dùng khi cần tất cả thành công.
* Promise.allSettled dùng khi cần kết quả của mọi Promise.
* Promise.race thường dùng cho Timeout.
* Promise.any phù hợp với hệ thống dự phòng nhiều server.
