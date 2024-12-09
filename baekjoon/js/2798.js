const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n").map((input) => input.split(" ").map(Number));
const [, m] = inputs[0];
const nums = inputs[1];

let result = 0;

const findNum = (idx, sum, count) => {
  if (count === 3) {
    if (sum <= m) {
      result = Math.max(result, sum);
    }

    return;
  }

  for (let i = idx; i < nums.length; i++) {
    findNum(i + 1, sum + nums[i], count + 1);
  }
};

findNum(0, 0, 0);

console.log(result);
