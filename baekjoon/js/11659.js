const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, numsInput, ...rangesInputs] = buf.split("\n");

const nums = numsInput.split(" ").map(Number);
const ranges = rangesInputs.map((range) =>
  range.split(" ").map((n) => Number(n) - 1)
);

const prefixSum = Array(nums.length).fill(0);
prefixSum[0] = nums[0];

for (let i = 1; i < nums.length; i++) {
  prefixSum[i] = prefixSum[i - 1] + nums[i];
}

const result = ranges.map(([i, j]) =>
  i === 0 ? prefixSum[j] : prefixSum[j] - prefixSum[i - 1]
);

console.log(result.join("\n"));
