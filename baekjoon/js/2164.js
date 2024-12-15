const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const n = Number(buf);
let temp = 1;

while (temp * 2 < n) {
  temp *= 2;
}

console.log(n === 1 ? n : (n - temp) * 2);
