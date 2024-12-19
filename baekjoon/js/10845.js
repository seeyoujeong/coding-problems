const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n");

const queue = [];

const commands = {
  push: (x) => {
    queue.push(x);
  },
  pop: () => {
    const val = queue.shift();

    return val !== undefined ? val : -1;
  },
  size: () => {
    return queue.length;
  },
  empty: () => {
    return queue.length === 0 ? 1 : 0;
  },
  front: () => {
    return queue.length === 0 ? -1 : queue[0];
  },
  back: () => {
    return queue.length === 0 ? -1 : queue[queue.length - 1];
  },
};

const result = [];

for (const input of inputs) {
  const [command, x] = input.split(" ");

  if (command in commands) {
    const val = commands[command](x);

    if (val !== undefined) {
      result.push(val);
    }
  }
}

console.log(result.join("\n"));
