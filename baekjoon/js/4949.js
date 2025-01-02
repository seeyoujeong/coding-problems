const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n");

const result = [];

for (const input of inputs) {
  if (input === ".") {
    break;
  }

  const stack = [];
  let isValid = true;

  for (const c of input) {
    if (c === "(" || c === "[") {
      stack.push(c);
    } else if (c === ")") {
      if (stack.length === 0 || stack.pop() !== "(") {
        isValid = false;
        break;
      }
    } else if (c === "]") {
      if (stack.length === 0 || stack.pop() !== "[") {
        isValid = false;
        break;
      }
    }
  }

  result.push(stack.length === 0 && isValid ? "yes" : "no");
}

console.log(result.join("\n"));
