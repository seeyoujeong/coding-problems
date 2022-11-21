// 평균
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = +input[0];
const score = input[1].split(' ').map(v => +v).sort((a, b) => b - a);
const newScore = score.map(val => val / score[0] * 100);
const sum = newScore.reduce((acc, cur) => acc + cur, 0);

console.log(sum / num);