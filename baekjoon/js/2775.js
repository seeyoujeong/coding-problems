const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [t, ...inputs] = buf.split("\n").map(Number);

const result = [];
const cache = {};
const countPeople = (k, n) => {
  if (k === 0) {
    return n;
  }

  if (n === 1) {
    return 1;
  }

  const key = `${k},${n}`;
  if (key in cache) {
    return cache[key];
  }

  cache[key] = countPeople(k, n - 1) + countPeople(k - 1, n);
  return cache[key];
};

for (let i = 0; i < t * 2; i += 2) {
  const k = inputs[i];
  const n = inputs[i + 1];

  result.push(countPeople(k, n));
}

console.log(result.join("\n"));
