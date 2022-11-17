// 두 수 비교하기
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);
const [n, m] = input;

if (n > m) {
  console.log('>');
} else if (n < m) {
  console.log('<');
} else {
  console.log('==');
}