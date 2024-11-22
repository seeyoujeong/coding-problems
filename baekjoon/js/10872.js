const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const n = Number(input);

let result = 1;

for (let i = 1; i <= n; i++) {
  result *= i;
}

console.log(result);
