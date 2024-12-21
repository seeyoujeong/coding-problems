const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const n = Number(buf);

let result = 1;

while (1 + 6 * ((result * (result - 1)) / 2) < n) {
  result++;
}

console.log(result);
