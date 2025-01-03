const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [n, ...inputs] = buf.split("\n").map(Number);

if (n === 0) {
  console.log(0);
  process.exit();
}

inputs.sort((a, b) => a - b);

const trimCount = Math.round(n * 0.15);

const nums = inputs.slice(trimCount, n - trimCount);

const sum = nums.reduce((acc, cur) => acc + cur, 0);

const result = Math.round(sum / nums.length);

console.log(result);
