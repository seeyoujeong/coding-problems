const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...strs] = buf.split("\n");

const result = [];

for (const str of strs) {
  result.push(str[0] + str.at(-1));
}

console.log(result.join("\n"));
