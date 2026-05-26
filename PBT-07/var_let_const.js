// ĐOẠN 1
console.log(x);
var x = 5;

// ĐOẠN 2
console.log(y);
let y = 10;

// ĐOẠN 3
const z = 15;
z = 20;
console.log(z);

// ĐOẠN 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// ĐOẠN 5
let a = 1;

{
    let a = 2;
    console.log("Trong block:", a);
}

console.log("Ngoài block:", a);