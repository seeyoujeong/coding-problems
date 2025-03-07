const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const table = ["000", "001", "010", "011", "100", "101", "110", "111"];

let binaryStr = "";

for (const c of buf) {
  const octal = Number(c);

  binaryStr += table[octal];
}

const result = binaryStr.replace(/^0+/, "") || "0";

console.log(result);
