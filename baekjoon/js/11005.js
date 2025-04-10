const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [n, b] = buf.split(" ").map(Number);

const result = n.toString(b).toUpperCase();

console.log(result);
