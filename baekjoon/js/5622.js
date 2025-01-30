const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const dial = [
  3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10,
  10,
];

let result = 0;

for (let i = 0; i < buf.length; i++) {
  const b = buf.charCodeAt(i) - 65;

  result += dial[b];
}

console.log(result);
