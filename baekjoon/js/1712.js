const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [a, b, c] = buf.split(" ").map(Number);

const profit = c - b;

if (profit <= 0) {
  console.log(-1);
} else {
  console.log(Math.floor(a / profit) + 1);
}
