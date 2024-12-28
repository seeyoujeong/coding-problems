const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();
const n = Number(buf);

let num = 1n;

for (let i = 1; i <= n; i++) {
  num *= BigInt(i);
}

let result = 0;

while (true) {
  if (num % 10n !== 0n) {
    break;
  }

  result++;
  num /= 10n;
}

console.log(result);
