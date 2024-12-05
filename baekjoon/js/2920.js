const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split(" ").map(Number);
const ASC = "ascending";
const DES = "descending";
const MIX = "mixed";

let result = inputs[0] < inputs[1] ? ASC : DES;

for (let i = 2; i < inputs.length; i++) {
  if (inputs[i - 1] < inputs[i] && result === ASC) {
    continue;
  }

  if (inputs[i - 1] > inputs[i] && result === DES) {
    continue;
  }

  result = MIX;
  break;
}

console.log(result);
