const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [nk, ...inputs] = buf.split("\n");
let [, k] = nk.split(" ").map(Number);
const coinValues = inputs.map(Number);

let result = 0;

while (k > 0) {
  const idx = coinValues.findIndex((val) => k < val);
  const coin = idx === -1 ? coinValues.at(-1) : coinValues[idx - 1];

  result += Math.floor(k / coin);
  k %= coin;
}

console.log(result);
