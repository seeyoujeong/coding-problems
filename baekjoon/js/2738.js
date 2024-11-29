const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n").map((input) => input.split(" ").map(Number));
const [n, m] = inputs[0];
const a = inputs.slice(1, n + 1);
const b = inputs.slice(n + 1);

const result = Array.from({ length: n }, () => Array(m).fill(0));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    result[i][j] = a[i][j] + b[i][j];
  }
}

console.log(result.map((row) => row.join(" ")).join("\n"));
