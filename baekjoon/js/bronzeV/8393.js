// 합
const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();
let result = 0;

for (let i = 1; i <= input; i++) {
  result += i;
}

console.log(result);