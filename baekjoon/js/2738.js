// 행렬 덧셈
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [row, col] = input[0].split(' ').map(v => +v);
const makeMatrix = (arr) => arr.map(elem => elem.split(' ').map(v => +v)).flat();
const matrix1 = makeMatrix(input.slice(1, row + 1));
const matrix2 = makeMatrix(input.slice(row + 1));
const result = [];

for (let i = 0; i < matrix1.length; i++) {
  result.push(matrix1[i] + matrix2[i]);
}

for (let i = 0; i < row; i++) {
  console.log(result.slice(col * i, col * (i + 1)).join(' '));
}