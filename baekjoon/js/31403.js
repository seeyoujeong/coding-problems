const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [a, b, c] = buf.split("\n");

console.log(Number(a) + Number(b) - c);
console.log(a + b - c);
