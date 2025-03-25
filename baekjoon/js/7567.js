const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

let result = 10;
let prev = buf[0];

for (let i = 1; i < buf.length; i++) {
  result += buf[i] === prev ? 5 : 10;
  prev = buf[i];
}

console.log(result);
