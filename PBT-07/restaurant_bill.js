// =========================
// DANH SÁCH MÓN ĂN
// =========================

const foods = [
    {
        name: "Phở bò",
        price: 65000,
        quantity: 2
    },
    {
        name: "Trà đá",
        price: 5000,
        quantity: 3
    },
    {
        name: "Bún chả",
        price: 55000,
        quantity: 1
    }
];

// =========================
// CẤU HÌNH
// =========================

// Wednesday hay không
const isWednesday = true;

// Có tip hay không
const useTip = true;

// =========================
// TÍNH TỔNG TIỀN
// =========================

let subtotal = 0;

console.log("╔══════════════════════════════════════╗");
console.log("║        HÓA ĐƠN NHÀ HÀNG             ║");
console.log("╠══════════════════════════════════════╣");

// In danh sách món ăn
for (let i = 0; i < foods.length; i++) {

    let food = foods[i];

    let itemTotal = food.price * food.quantity;

    subtotal += itemTotal;

    console.log(
        `${i + 1}. ${food.name} x${food.quantity} @${food.price.toLocaleString()}đ = ${itemTotal.toLocaleString()}đ`
    );
}

console.log("╠══════════════════════════════════════╣");

// =========================
// GIẢM GIÁ
// =========================

let discountPercent = 0;

// Giảm theo tổng tiền
if (subtotal > 1000000) {

    discountPercent = 15;

}
else if (subtotal > 500000) {

    discountPercent = 10;
}

// Wednesday giảm thêm 5%
if (isWednesday) {

    discountPercent += 5;
}

// Tiền giảm
let discountAmount =
    subtotal * discountPercent / 100;

// Sau giảm giá
let afterDiscount =
    subtotal - discountAmount;

// =========================
// VAT
// =========================

let vat =
    afterDiscount * 0.08;

// =========================
// TIP
// =========================

let tip = 0;

if (useTip) {

    tip =
        afterDiscount * 0.05;
}

// =========================
// THANH TOÁN
// =========================

let finalTotal =
    afterDiscount + vat + tip;

// =========================
// IN HÓA ĐƠN
// =========================

console.log(
    `Tổng cộng: ${subtotal.toLocaleString()}đ`
);

console.log(
    `Giảm giá (${discountPercent}%): -${discountAmount.toLocaleString()}đ`
);

console.log(
    `VAT (8%): ${vat.toLocaleString()}đ`
);

console.log(
    `Tip (5%): ${tip.toLocaleString()}đ`
);

console.log("╠══════════════════════════════════════╣");

console.log(
    `THANH TOÁN: ${finalTotal.toLocaleString()}đ`
);

console.log("╚══════════════════════════════════════╝");