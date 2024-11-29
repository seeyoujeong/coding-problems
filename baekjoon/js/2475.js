const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split(" ").map(Number);

const sum = inputs.reduce((acc, cur) => acc + cur ** 2, 0);

console.log(sum % 10);
