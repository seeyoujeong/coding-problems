const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n").map(Number);

let max = 0;
let idx = 0;

for (let i = 0; i < inputs.length; i++) {
  if (max < inputs[i]) {
    max = inputs[i];
    idx = i;
  }
}

console.log(`${max}\n${idx + 1}`);
