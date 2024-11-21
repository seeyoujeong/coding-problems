const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const n = Number(input);
const nums = Array.from({ length: n }, (_, i) => i + 1);

console.log(nums.join("\n"));
