const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n");
const testCases = inputs.map((input) => input.split(" "));

const result = [];

for (const [r, s] of testCases) {
  let temp = "";

  for (const c of s) {
    temp += c.repeat(Number(r));
  }

  result.push(temp);
}

console.log(result.join("\n"));
