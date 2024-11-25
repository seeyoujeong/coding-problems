const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [t, ...inputs] = buf.split("\n");
const nums = inputs.map((input) => input.split(" ").map(Number));

const result = [];

for (const [a, b] of nums) {
  result.push(a + b);
}

console.log(result.join("\n"));
