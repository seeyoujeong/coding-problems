const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [firstLine, ...lines] = buf.split("\n");
const [n] = firstLine.split(" ").map(Number);

const result = Array.from({ length: n }, (_, idx) => idx + 1);

for (const line of lines) {
  const nums = line.split(" ").map(Number);
  const [i, j] = [nums[0] - 1, nums[1] - 1];

  [result[i], result[j]] = [result[j], result[i]];
}

console.log(result.join(" "));
