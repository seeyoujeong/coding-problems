const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n").map((input) => input.split(" ").map(Number));

const result = [];

for (const [a, b] of inputs) {
  result.push(a + b);
}

console.log(result.join("\n"));
