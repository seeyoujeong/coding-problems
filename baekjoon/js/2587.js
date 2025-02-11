const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const nums = buf.split("\n").map(Number);

nums.sort((a, b) => a - b);

const avg = nums.reduce((acc, cur) => acc + cur, 0) / 5;
const mid = nums[2];

console.log(avg);
console.log(mid);
