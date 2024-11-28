const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [word, i] = buf.split("\n");

console.log(word[i - 1]);
