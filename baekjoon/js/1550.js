const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const result = parseInt(buf, 16);

console.log(result);
