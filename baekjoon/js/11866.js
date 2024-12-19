const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [n, k] = buf.split(" ").map(Number);
const result = [];
const arr = Array.from({ length: n }, (_, i) => i + 1);
let cur = 0;

while (arr.length > 0) {
  const next = (cur + k - 1) % arr.length;
  const [num] = arr.splice(next, 1);
  result.push(num);
  cur = next;
}

console.log(`<${result.join(", ")}>`);
