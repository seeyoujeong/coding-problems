// 약수
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = +input[0];

if (num === 1) {
  const divisor = +input[1];
  console.log(divisor * divisor);
} else {
  const divisor = input[1].split(' ').map(v => +v);
  divisor.sort((a, b) => a - b);
  console.log(divisor[0] * divisor.at(-1));
}