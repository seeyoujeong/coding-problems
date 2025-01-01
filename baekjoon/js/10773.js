const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n");

const stack = [];

for (const input of inputs) {
  const num = Number(input);

  if (num === 0) {
    stack.pop();
  } else {
    stack.push(num);
  }
}

const result = stack.reduce((acc, cur) => acc + cur, 0);

console.log(result);
