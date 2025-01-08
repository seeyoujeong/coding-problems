const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

let word = buf;

const croatiaAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (const alphabet of croatiaAlphabet) {
  word = word.replaceAll(alphabet, ".");
}

const result = word.length;

console.log(result);
