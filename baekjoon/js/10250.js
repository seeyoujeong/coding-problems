const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n");

const result = [];

for (const input of inputs) {
  const [h, _, n] = input.split(" ").map(Number);

  const x = Math.ceil(n / h);
  const y = n % h;

  result.push(`${y || h}${String(x).padStart(2, "0")}`);
}

console.log(result.join("\n"));
