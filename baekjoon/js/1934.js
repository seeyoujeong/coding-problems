const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...lines] = buf.split("\n");

const testCases = lines.map((line) => line.split(" ").map(Number));

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = a % b;
    a = b;
    b = temp;
  }

  return a;
};

const result = testCases.map(([a, b]) => (a * b) / gcd(a, b));

console.log(result.join("\n"));
