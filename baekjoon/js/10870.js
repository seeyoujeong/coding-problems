const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const n = Number(buf);

const fibonacci = Array(n + 1).fill(0);
fibonacci[1] = 1;

for (let i = 2; i <= n; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci[n]);
