const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [n, nums] = buf.split("\n");

let result = 0;

for (let i = 0; i < Number(n); i++) {
  result += Number(nums[i]);
}

console.log(result);
