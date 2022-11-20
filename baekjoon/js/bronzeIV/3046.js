// R2
const fs = require('fs');
const [r1, s] = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);

console.log(2 * s - r1);