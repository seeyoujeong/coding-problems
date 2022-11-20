// 파티가 끝나고 난 뒤
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [l, p] = input[0].split(' ').map(v => +v);
const participant = input[1].split(' ').map(v => +v);
const result = [];

participant.forEach(num => {
  result.push(num - l * p);
});

console.log(result.join(' '));