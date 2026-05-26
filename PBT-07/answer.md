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