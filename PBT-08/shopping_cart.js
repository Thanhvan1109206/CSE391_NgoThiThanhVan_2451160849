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
