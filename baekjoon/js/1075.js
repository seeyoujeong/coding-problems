const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [n, f] = buf.split("\n").map(Number);
const num = Math.floor(n / 100);

let result = 0;

for (let i = 0; i < 100; i++) {
  const cur = num * 100 + i;

  if (cur % f === 0) {
    result = i;
    break;
  }
}

console.log(String(result).padStart(2, "0"));
