const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n");
const [n, m] = inputs[0].split(" ").map(Number);
const curMap = inputs.slice(1);

const whiteMap = Array.from({ length: 8 }, (_, i) =>
  i % 2 === 0 ? "WB".repeat(4) : "BW".repeat(4)
);
const blackMap = Array.from({ length: 8 }, (_, i) =>
  i % 2 === 0 ? "BW".repeat(4) : "WB".repeat(4)
);

let result = Infinity;

for (let i = 0; i <= n - 8; i++) {
  for (let j = 0; j <= m - 8; j++) {
    let countCompareWithWhite = 0;
    let countCompareWithBlack = 0;

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (curMap[x + i][y + j] !== whiteMap[x][y]) {
          countCompareWithWhite++;
        }

        if (curMap[x + i][y + j] !== blackMap[x][y]) {
          countCompareWithBlack++;
        }
      }
    }

    result = Math.min(result, countCompareWithWhite, countCompareWithBlack);
  }
}

console.log(result);
