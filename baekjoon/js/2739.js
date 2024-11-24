const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const n = Number(buf);
const result = [];

for (let i = 1; i <= 9; i++) {
  result.push(`${n} * ${i} = ${n * i}`);
}

console.log(result.join("\n"));
