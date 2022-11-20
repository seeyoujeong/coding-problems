// 과제 안 내신 분..?
const fs = require('fs');
const students = fs.readFileSync('/dev/stdin').toString().split('\n').map(v => +v);

for (let i = 1; i <= 30; i++) {
  if (!students.includes(i)) {
    console.log(i);
  }
}