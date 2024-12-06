const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n").map(Number);

const result = new Set();

for (const num of inputs) {
  result.add(num % 42);
}

console.log(result.size);
