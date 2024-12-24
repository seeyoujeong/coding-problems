const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [a, b, v] = buf.split(" ").map(Number);

console.log(Math.ceil((v - a) / (a - b)) + 1);
