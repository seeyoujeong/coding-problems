const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [m, n] = buf.split("\n").map(Number);

const start = Math.ceil(Math.sqrt(m));
const end = Math.floor(Math.sqrt(n));

const nums = [];

for (let i = start; i <= end; i++) {
  const cur = i * i;

  if (m <= cur && cur <= n) {
    nums.push(cur);
  }
}

if (nums.length === 0) {
  console.log(-1);
} else {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  console.log(`${sum}\n${nums[0]}`);
}
