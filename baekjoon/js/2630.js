const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n");

const isAllSame = (arr2x2, flag) => {
  return arr2x2.every((arr) => arr.every((n) => n === flag));
};

const divideArr = (arr2x2, startY, endY, startX, endX) => {
  const result = [];

  for (let i = startY; i <= endY; i++) {
    const row = [];

    for (let j = startX; j <= endX; j++) {
      row.push(arr2x2[i][j]);
    }

    result.push(row);
  }

  return result;
};

const paper = inputs.map((input) => input.split(" ").map(Number));
let white = 0;
let blue = 0;

const countPaper = (paper) => {
  if (isAllSame(paper, 0) || isAllSame(paper, 1)) {
    if (isAllSame(paper, 0)) {
      white++;
      return;
    } else {
      blue++;
      return;
    }
  }

  const halfLen = paper.length / 2;
  const area = [
    [0, 0],
    [0, halfLen],
    [halfLen, 0],
    [halfLen, halfLen],
  ];

  for (const [y, x] of area) {
    const subpaper = divideArr(paper, y, y + halfLen - 1, x, x + halfLen - 1);

    countPaper(subpaper);
  }
};

countPaper(paper);

console.log(white);
console.log(blue);
