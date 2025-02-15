const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [n, b] = buf.split(" ");

const result = parseInt(n, Number(b));

console.log(result);
