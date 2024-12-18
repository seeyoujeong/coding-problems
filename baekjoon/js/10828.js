const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n");

let stack = [];
const commands = {
  push: (x) => {
    stack.push(x);
  },
  pop: () => {
    const val = stack.pop();

    return val ? val : -1;
  },
  size: () => stack.length,
  empty: () => (stack.length === 0 ? 1 : 0),
  top: () => (stack.length === 0 ? -1 : stack[stack.length - 1]),
};

const result = [];

for (const input of inputs) {
  const [command, num] = input.split(" ");

  if (command in commands) {
    const output = commands[command](num);

    if (output) {
      result.push(output);
    }
  }
}

console.log(result.join("\n"));
