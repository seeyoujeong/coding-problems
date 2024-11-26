const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [nx, nums] = buf.split("\n").map((input) => input.split(" ").map(Number));
const [n, x] = nx;

const result = nums.filter((num) => num < x);

console.log(result.join(" "));
