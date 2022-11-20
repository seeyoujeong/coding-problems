// 나머지
const fs = require('fs');
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);