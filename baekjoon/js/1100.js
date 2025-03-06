const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const board = buf.split("\n").map((row) => [...row]);
let result = 0;

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (i % 2 === j % 2 && board[i][j] === "F") {
      result += 1;
    }
  }
}

console.log(result);
