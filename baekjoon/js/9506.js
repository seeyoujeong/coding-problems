const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const nums = buf.split("\n").map(Number);

const result = [];

for (let i = 0; i < nums.length - 1; i++) {
  const divisors = [];
  let sum = 0;

  for (let j = 1; j < nums[i]; j++) {
    if (nums[i] % j === 0) {
      divisors.push(j);
      sum += j;
    }
  }

  if (sum === nums[i]) {
    result.push(`${nums[i]} = ${divisors.join(" + ")}`);
  } else {
    result.push(`${nums[i]} is NOT perfect.`);
  }
}

console.log(result.join("\n"));
