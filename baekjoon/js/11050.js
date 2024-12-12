const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [n, k] = buf.split(" ").map(Number);

const factorial = (num) => {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};

console.log(factorial(n) / (factorial(n - k) * factorial(k)));
