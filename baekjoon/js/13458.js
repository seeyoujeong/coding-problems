const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const lines = buf.split("\n");
const n = Number(lines[0]);
const examinee = lines[1].split(" ").map(Number);
const [b, c] = lines[2].split(" ").map(Number);

const main = n;
const sub = examinee
  .map((v) => v - b)
  .filter((v) => v > 0)
  .map((v) => Math.ceil(v / c))
  .reduce((acc, cur) => acc + cur, 0);

console.log(main + sub);
