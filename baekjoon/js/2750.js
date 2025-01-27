const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n").map(Number);

inputs.sort((a, b) => a - b);

console.log(inputs.join("\n"));
