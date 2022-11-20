// 큰 수 A + B
const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => BigInt(v));

console.log(String(a + b));