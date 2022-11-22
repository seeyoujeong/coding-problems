// 제로
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(v => +v);
const k = input[0];
const num = input.slice(1);
const tmp = [];

for (let i = 0; i < k; i++) {
  if (num[i] === 0) {
    tmp.pop();
    continue;
  }
  
  tmp.push(num[i]);
}

console.log(tmp.reduce((acc, cur) => acc + cur, 0));
