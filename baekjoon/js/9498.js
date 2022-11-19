// 시험 성적
const fs = require('fs');
const score = +fs.readFileSync('/dev/stdin').toString();

if (100 >= score && score >= 90) {
  console.log('A');
} else if (89 >= score && score >= 80) {
  console.log('B');
} else if (79 >= score && score >= 70) {
  console.log('C');
} else if (69 >= score && score >= 60) {
  console.log('D');
} else {
  console.log('F')
}