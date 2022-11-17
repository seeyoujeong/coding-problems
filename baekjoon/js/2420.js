// 사파리월드
const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);

console.log(Math.abs(n - m));