const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n");

const result = [];

for (const input of inputs) {
  let score = 0;
  let cur = 1;

  for (const r of input) {
    if (r === "O") {
      score += cur++;
    } else {
      cur = 1;
    }
  }

  result.push(score);
}

console.log(result.join("\n"));
