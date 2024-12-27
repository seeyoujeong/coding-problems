const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const n = Number(buf);

let count = 1;
let num = 666;

while (true) {
  if (count === n) {
    console.log(num);
    break;
  }

  num++;

  if (String(num).includes("666")) {
    count++;
  }
}
