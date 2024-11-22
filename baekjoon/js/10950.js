const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const [t, ...testCases] = input.split("\n");
const results = [];

for (const testCase of testCases) {
  const [a, b] = testCase.split(" ").map(Number);

  results.push(a + b);
}

console.log(results.join("\n"));
