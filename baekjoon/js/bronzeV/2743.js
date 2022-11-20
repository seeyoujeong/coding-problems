// 단어 길이 재기
const fs = require('fs');
const len = fs.readFileSync('/dev/stdin').toString().trim().length;

console.log(len);