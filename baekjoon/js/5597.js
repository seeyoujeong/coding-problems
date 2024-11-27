const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const nums = buf.split("\n").map(Number);

const result = [];

for (let i = 1; i <= 30; i++) {
  if (!nums.includes(i)) {
    result.push(i);
  }
}

console.log(result.slice(0, 2).join("\n"));
