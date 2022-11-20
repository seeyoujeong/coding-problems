// 시그마
const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);

console.log((Math.abs(b - a) - 1 + 2) * (a + b) / 2);