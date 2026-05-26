// Random số từ 1 đến 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Số lần đoán
let attempts = 0;

// Giới hạn lượt đoán
let maxAttempts = 7;

// Lưu các số đã đoán
let guessedNumbers = [];

// Game loop
while (attempts < maxAttempts) {

    let input = prompt("Nhập số từ 1 đến 100:");

    // Kiểm tra cancel
    if (input === null) {

        alert("Bạn đã thoát game!");
        break;
    }

    // Ép kiểu sang number
    let guess = Number(input);

    // Validate input
    if (
        isNaN(guess) ||
        guess < 1 ||
        guess > 100
    ) {

        alert("Vui lòng nhập số từ 1 đến 100!");
        continue;
    }

    // Kiểm tra đoán trùng
    if (guessedNumbers.includes(guess)) {

        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    // Lưu số đã đoán
    guessedNumbers.push(guess);

    // Tăng lượt đoán
    attempts++;

    // So sánh
    if (guess === randomNumber) {

        alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);

        break;

    }
    else if (guess < randomNumber) {

        alert("Cao hơn!");
    }
    else {

        alert("Thấp hơn!");
    }

    // Hết lượt
    if (attempts === maxAttempts) {

        alert(
            `Bạn đã hết lượt!\nĐáp án đúng là: ${randomNumber}`
        );
    }
}