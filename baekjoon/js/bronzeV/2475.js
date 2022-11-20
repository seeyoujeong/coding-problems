// 검증수
const fs = require('fs');
const result = fs.readFileSync('/dev/stdin')
                 .toString()
                 .split(' ')
                 .map(v => v * v)
                 .reduce((acc, cur) => acc + cur, 0) % 10;

console.log(result);