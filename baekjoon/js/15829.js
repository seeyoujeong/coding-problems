const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [l, str] = buf.split("\n");

let sum = 0;
let currentPower = 1;
const m = 1234567891;

for (let i = 0; i < l; i++) {
  const num = str.charCodeAt(i) - 96;
  sum = (sum + num * currentPower) % m;
  currentPower = (currentPower * 31) % m;
}

console.log(sum);
