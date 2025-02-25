const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...lines] = buf.split("\n");
const testCases = lines.map((line) => line.split(" ").map(Number));

const result = [];

for (const [a, b] of testCases) {
  const aUnits = a % 10;

  const cycle = [];
  let num = aUnits;

  while (!cycle.includes(num)) {
    cycle.push(num);
    num = (num * aUnits) % 10;
  }

  const idx = (b - 1) % cycle.length;
  const lastDigit = cycle[idx];

  result.push(lastDigit === 0 ? 10 : lastDigit);
}

console.log(result.join("\n"));
