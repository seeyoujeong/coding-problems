const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const n = Number(buf);

const count = Array(n + 1).fill(0);
count[1] = 1;
count[2] = 2;

for (let i = 3; i <= n; i++) {
  count[i] = (count[i - 1] + count[i - 2]) % 10007;
}

const result = count[n];

console.log(result);
