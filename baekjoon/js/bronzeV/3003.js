// 킹, 퀸, 룩, 비숍, 나이트, 폰
const fs = require('fs');
const pieces = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);
const reqPieces = [1, 1, 2, 2, 2, 8];
const result = [];

pieces.forEach((piece, index) => {
  result.push(reqPieces[index] - piece);
});

console.log(result.join(' '));