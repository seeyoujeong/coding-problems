const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, , ...inputs] = buf.split("\n");
const networks = inputs.map((input) => input.split(" ").map(Number));

const set = new Set([1]);
const stack = [1];

while (stack.length > 0) {
  const cur = stack.pop();

  for (const [c1, c2] of networks) {
    if (cur === c1 && !set.has(c2)) {
      stack.push(c2);
      set.add(c2);
    }

    if (cur === c2 && !set.has(c1)) {
      stack.push(c1);
      set.add(c1);
    }
  }
}

console.log(set.size - 1);
