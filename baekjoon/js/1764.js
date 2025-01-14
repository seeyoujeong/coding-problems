const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n");

const result = [];
const set = new Set();

for (const name of inputs) {
  if (set.has(name)) {
    result.push(name);
  }

  set.add(name);
}

result.sort();

console.log(result.length);
console.log(result.join("\n"));
