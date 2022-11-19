// 대소문자 바꾸기
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('');

let result = '';

input.forEach(char => {
  if (char === char.toUpperCase()) {
    result += char.toLowerCase();
  } else if (char === char.toLowerCase()) {
    result += char.toUpperCase();
  }
});

console.log(result);
