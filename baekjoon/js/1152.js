const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const words = buf === "" ? [] : buf.split(" ");

console.log(words.length);
