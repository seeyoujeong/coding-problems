const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

console.log(buf.length);
