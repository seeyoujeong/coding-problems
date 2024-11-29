const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [a, b] = buf.split(" ").map(Number);

console.log((a + b) * (a - b));
