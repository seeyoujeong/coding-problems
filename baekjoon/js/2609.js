const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [a, b] = buf.split(" ").map(Number);

const calcGCD = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

const gcd = calcGCD(a, b);
const lcm = (a * b) / gcd;

console.log(`${gcd}\n${lcm}`);
