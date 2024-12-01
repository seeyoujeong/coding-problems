const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n");
const nums = inputs[1].split(" ").map(Number);

console.log(Math.min(...nums), Math.max(...nums));
