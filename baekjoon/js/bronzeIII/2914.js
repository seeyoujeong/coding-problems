// 저작권
const fs = require('fs');
const [a, i] = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);

console.log(a * (i - 1) + 1);