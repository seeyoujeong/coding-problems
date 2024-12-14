const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n");
const nNums = new Set(inputs[1].split(" ").map(Number));
const mNums = inputs[3].split(" ").map(Number);

const result = mNums.map((num) => (nNums.has(num) ? 1 : 0));

console.log(result.join("\n"));
