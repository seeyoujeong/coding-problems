const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, inputs] = buf.split("\n");
const nums = inputs.split(" ").map(Number);

function isPrime(num) {
  if (num <= 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

let result = 0;

for (const num of nums) {
  if (isPrime(num)) {
    result++;
  }
}

console.log(result);
