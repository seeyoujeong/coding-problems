// 소수
const fs = require('fs');
const [a, b, n] = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);
let tmp = a;
let result = 0;

for (let i = 0; i < n; i++) {
  tmp = (tmp % b) * 10;
  result = Math.trunc(tmp / b);
}

console.log(result);