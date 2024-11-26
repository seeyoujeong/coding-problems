const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, nums, v] = buf.split("\n");

const result = nums.split(" ").filter((num) => num === v).length;

console.log(result);
