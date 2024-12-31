const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();
let n = Number(buf);

let result = -1;

if (n >= 3 && n % 3 === 0) {
  result = n / 3;
}

let count5 = 0;
while (n >= 5) {
  n -= 5;
  count5++;

  if (n % 3 === 0) {
    result = count5 + n / 3;
  }
}

console.log(result);
