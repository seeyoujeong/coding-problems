const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [n, ...sequence] = buf.split("\n").map(Number);

const result = [];
const stack = [];
let curIdx = 0;

for (let i = 1; i <= n; i++) {
  stack.push(i);
  result.push("+");

  while (stack.length > 0 && stack.at(-1) === sequence[curIdx]) {
    stack.pop();
    result.push("-");
    curIdx++;
  }
}

const output = stack.length === 0 ? result.join("\n") : "NO";

console.log(output);
