const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n");
const [n, m] = inputs[0].split(" ").map(Number);

const pokemon = inputs.slice(1, n + 1).reduce((acc, cur, idx) => {
  acc.set(String(idx + 1), cur);
  acc.set(cur, String(idx + 1));

  return acc;
}, new Map());

const result = inputs.slice(n + 1, n + m + 1).map((val) => pokemon.get(val));

console.log(result.join("\n"));
