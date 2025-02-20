const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const lines = buf.split("\n");

const [, k] = lines[0].split(" ").map(Number);
const scores = lines[1].split(" ").map(Number);

scores.sort((a, b) => b - a);

const result = scores[k - 1];

console.log(result);
