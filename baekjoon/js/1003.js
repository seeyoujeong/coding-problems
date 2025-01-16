const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n").map(Number);

const cache = Array(41)
  .fill(null)
  .map(() => [0, 0]);
cache[0] = [1, 0];
cache[1] = [0, 1];

for (let i = 2; i <= 40; i++) {
  cache[i][0] = cache[i - 1][0] + cache[i - 2][0];
  cache[i][1] = cache[i - 1][1] + cache[i - 2][1];
}

const result = inputs.map((num) => `${cache[num][0]} ${cache[num][1]}`);

console.log(result.join("\n"));
