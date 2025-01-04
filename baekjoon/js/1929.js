const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [m, n] = buf.split(" ").map(Number);

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const result = [];

for (let i = m; i <= n; i++) {
  if (isPrime(i)) {
    result.push(i);
  }
}

console.log(result.join("\n"));
