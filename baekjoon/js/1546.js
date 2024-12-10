const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n");
const n = Number(inputs[0]);
const scores = inputs[1].split(" ").map(Number);
const max = Math.max(...scores);

console.log(scores.reduce((acc, cur) => acc + (cur / max) * 100, 0) / n);
