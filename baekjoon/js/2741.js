// N 찍기
const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();

let result = '';

for (let i = 1; i <= input; i++) {
  result += `${i}\n`;
}

console.log(result);