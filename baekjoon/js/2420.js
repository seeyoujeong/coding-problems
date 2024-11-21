const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const [n, m] = input.split(" ").map(Number);

console.log(Math.abs(n - m));
