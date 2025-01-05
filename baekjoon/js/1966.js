const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n");

const result = [];

for (let i = 0; i < inputs.length; i += 2) {
  const [, m] = inputs[i].split(" ").map(Number);
  const queue = inputs[i + 1].split(" ").map((val, idx) => [idx, Number(val)]);
  let count = 1;

  while (queue.length > 0) {
    const [curIdx, curVal] = queue.shift();

    if (queue.every(([_, val]) => curVal >= val)) {
      if (curIdx === m) {
        result.push(count);
        break;
      }

      count++;
    } else {
      queue.push([curIdx, curVal]);
    }
  }
}

console.log(result.join("\n"));
