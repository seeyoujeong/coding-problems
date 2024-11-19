const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const [a, b] = input.split(" ").map(Number);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
