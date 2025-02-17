const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const cost = Number(buf);
let change = 1000 - cost;

let result = 0;

for (const coin of [500, 100, 50, 10, 5, 1]) {
  result += Math.floor(change / coin);
  change = change % coin;
}

console.log(result);
