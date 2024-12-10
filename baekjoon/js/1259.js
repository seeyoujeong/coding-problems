const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n").map((input) => Number(input));

const result = [];

for (const num of inputs) {
  if (num === 0) {
    break;
  }

  const reversed = [...String(num)].reverse().join("");

  if (num === Number(reversed)) {
    result.push("yes");
  } else {
    result.push("no");
  }
}

console.log(result.join("\n"));
