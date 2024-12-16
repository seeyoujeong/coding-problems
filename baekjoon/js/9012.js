const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n");

const result = [];

for (const ps of inputs) {
  let count = 0;

  for (const p of ps) {
    if (p === "(") {
      count++;
    } else {
      count--;
    }

    if (count < 0) {
      break;
    }
  }

  result.push(count === 0 ? "YES" : "NO");
}

console.log(result.join("\n"));
