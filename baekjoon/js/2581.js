const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [m, n] = buf.split("\n").map(Number);

const primes = [];

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

for (let i = m; i <= n; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

if (primes.length > 0) {
  console.log(primes.reduce((acc, cur) => acc + cur, 0));
  console.log(primes[0]);
} else {
  console.log(-1);
}
