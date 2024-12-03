const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [a, b, c] = buf.split("\n").map(Number);

const num = a * b * c;

const result = Array(10).fill(0);

for (const n of String(num)) {
  result[n]++;
}

console.log(result.join("\n"));
