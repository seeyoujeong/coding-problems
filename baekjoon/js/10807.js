// 개수 세기
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = +input[0];
const nums = input[1].split(' ').map(v => +v);
const findNum = +input[2];

console.log(nums.filter(num => num === findNum).length);