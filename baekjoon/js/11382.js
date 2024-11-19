const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const [a, b, c] = input.split(" ").map(Number);

console.log(a + b + c);
