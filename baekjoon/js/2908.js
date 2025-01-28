const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [a, b] = buf.split(" ").map((v) => Number([...v].reverse().join("")));

const result = Math.max(a, b);

console.log(result);
