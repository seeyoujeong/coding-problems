const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n").map(Number);

const result = [];

for (const num of inputs) {
  let count = 0;

  const countSums = (sum, target) => {
    if (sum >= target) {
      count += sum === target ? 1 : 0;
      return;
    }

    for (const n of [1, 2, 3]) {
      countSums(sum + n, target);
    }
  };

  countSums(0, num);

  result.push(count);
}

console.log(result.join("\n"));
