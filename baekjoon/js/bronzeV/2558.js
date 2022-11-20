// A + B - 2
const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().split('\n').map(v => +v);

console.log(a + b);