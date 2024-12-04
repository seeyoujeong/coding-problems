const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n");
const n = Number(inputs[0]);
const size = inputs[1].split(" ").map(Number);
const [t, p] = inputs[2].split(" ").map(Number);

const tCount = size.reduce((acc, cur) => acc + Math.ceil(cur / t), 0);
const pCount = [Math.floor(n / p), n % p];

console.log(`${tCount}\n${pCount.join(" ")}`);
