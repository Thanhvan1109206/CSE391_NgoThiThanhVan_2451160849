// =========================
// VERSION 1: CLASSIC
// =========================

console.log("=== CLASSIC FIZZBUZZ ===");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

        console.log("FizzBuzz");

    }
    else if (i % 3 === 0) {

        console.log("Fizz");

    }
    else if (i % 5 === 0) {

        console.log("Buzz");

    }
    else {

        console.log(i);
    }
}

// =========================
// VERSION 2: CUSTOM
// =========================

console.log(" ");
console.log("=== CUSTOM FIZZBUZZ ===");

function customFizzBuzz(n, rules) {

    for (let i = 1; i <= n; i++) {

        let output = "";

        for (let j = 0; j < rules.length; j++) {

            let rule = rules[j];

            if (i % rule.divisor === 0) {

                output += rule.word;
            }
        }

        if (output === "") {

            output = i;
        }

        console.log(output);
    }
}

// Test
customFizzBuzz(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);