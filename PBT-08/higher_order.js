// higher_order.js

// ===============================
// 1. pipe() — Nối chuỗi functions
// ===============================

function pipe(...fns) {

    return function(value) {

        return fns.reduce((result, fn) => {
            return fn(result);
        }, value);

    };
}


const process = pipe(

    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x

);

console.log(process(5));



// ===============================
// 2. memoize() — Cache kết quả
// ===============================

function memoize(fn) {

    const cache = {};

    return function(n) {

        // Nếu có cache → trả về luôn
        if (cache[n]) {

            console.log("Lấy từ cache...");

            return cache[n];
        }

        // Nếu chưa có → tính toán
        const result = fn(n);

        cache[n] = result;

        return result;
    };
}


const expensiveCalc = memoize((n) => {

    console.log("Đang tính...");

    let result = 0;

    for (let i = 0; i < n; i++) {
        result += i;
    }

    return result;
});


console.log(expensiveCalc(1000000));

console.log(expensiveCalc(1000000));



// ===============================================
// 3. debounce() — Chờ user ngừng gõ mới thực hiện
// ===============================================

function debounce(fn, delay) {

    let timeoutId;

    return function(...args) {

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}


const search = debounce((query) => {

    console.log("Searching:", query);

}, 500);


// Test debounce

search("i");
search("ip");
search("iph");
search("iphone");

// Chỉ lần cuối chạy



// =====================================
// 4. retry() — Thử lại nếu lỗi
// =====================================

async function retry(fn, maxAttempts = 3) {

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {

        try {

            const result = await fn();

            console.log("Thành công lần", attempt);

            return result;

        }
        catch (error) {

            console.log(
                `Lần ${attempt} thất bại:`,
                error.message
            );

            if (attempt === maxAttempts) {
                throw new Error("Đã thử tối đa!");
            }
        }
    }
}


// Test retry

let count = 0;

retry(async () => {

    count++;

    console.log("Đang thử...");

    if (count < 3) {
        throw new Error("Lỗi server!");
    }

    return "API Success!";

})
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error.message);
});