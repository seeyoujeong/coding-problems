const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const n = Number(buf);

const cache = Array(46).fill(0);
cache[1] = 1;

for (let i = 2; i <= n; i++) {
  cache[i] = cache[i - 1] + cache[i - 2];
}

const result = cache[n];

console.log(result);
