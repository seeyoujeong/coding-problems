const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n");
const coords = inputs.map((input) => input.split(" ").map(Number));

coords.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }

  return a[1] - b[1];
});

const result = coords.map(([x, y]) => `${x} ${y}`);

console.log(result.join("\n"));
