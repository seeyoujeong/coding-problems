const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [n, ...inputs] = buf.split("\n").map(Number);

inputs.sort((a, b) => a - b);

let maxCount = 0;
const countNum = inputs.reduce((acc, cur) => {
  acc.set(cur, acc.has(cur) ? acc.get(cur) + 1 : 1);
  maxCount = Math.max(maxCount, acc.get(cur));
  return acc;
}, new Map());

const modeList = [...countNum].filter(([, v]) => v === maxCount);

const min = Math.round(inputs.reduce((acc, cur) => acc + cur, 0) / n);
const median = inputs[Math.floor(n / 2)];
const mode = modeList.length > 1 ? modeList[1][0] : modeList[0][0];
const range = inputs.at(-1) - inputs[0];

console.log([min, median, mode, range].join("\n"));
