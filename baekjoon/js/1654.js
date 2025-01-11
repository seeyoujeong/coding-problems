const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [kn, ...inputs] = buf.split("\n");
const [, n] = kn.split(" ").map(Number);
const lans = inputs.map(Number);

let left = 1;
let right = Math.max(...lans);

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const sum = lans.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

  if (sum >= n) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);
