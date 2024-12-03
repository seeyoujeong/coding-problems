const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n").map((input) => input.split(" ").map(Number));

const result = [];

for (const nums of inputs) {
  if (nums.every((num) => num === 0)) {
    break;
  }

  nums.sort((a, b) => a - b);

  const [a, b, c] = nums;

  if (a * a + b * b === c * c) {
    result.push("right");
  } else {
    result.push("wrong");
  }
}

console.log(result.join("\n"));
