const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n");
const [, m] = inputs[0].split(" ").map(Number);
const trees = inputs[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...trees);

while (start + 1 < end) {
  const mid = Math.floor((end + start) / 2);
  const sum = trees.reduce((acc, cur) => acc + Math.max(cur - mid, 0), 0);

  if (sum >= m) {
    start = mid;
  } else {
    end = mid;
  }
}

console.log(start);
