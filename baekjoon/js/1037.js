const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, inputs] = buf.split("\n");

const nums = inputs
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const minNum = nums[0];
const maxNum = nums.at(-1);

const result = minNum * maxNum;

console.log(result);
