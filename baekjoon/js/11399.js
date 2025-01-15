const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, inputs] = buf.split("\n");
const times = inputs.split(" ").map(Number);

times.sort((a, b) => a - b);

let result = 0;
let acc = 0;

for (const time of times) {
  result += acc + time;
  acc += time;
}

console.log(result);
