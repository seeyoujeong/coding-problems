const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

let result = "";

for (const c of buf) {
  if (c.toLowerCase() === c) {
    result += c.toUpperCase();
  } else {
    result += c.toLowerCase();
  }
}

console.log(result);
