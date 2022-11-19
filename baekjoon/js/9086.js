// 문자열
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const testCaseNum = +input[0];

for (let i = 1; i <= testCaseNum; i++) {
  const str = input[i].trim();
  console.log(`${str[0]}${str[str.length - 1]}`);
}