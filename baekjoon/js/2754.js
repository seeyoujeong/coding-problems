// 학점계산
const fs = require('fs');
const score = fs.readFileSync('/dev/stdin').toString().trim();

if (score === 'A+') {
  console.log('4.3');
} else if (score === 'A0') {
  console.log('4.0');
} else if (score === 'A-') {
  console.log('3.7');
} else if (score === 'B+') {
  console.log('3.3');
} else if (score === 'B0') {
  console.log('3.0');
} else if (score === 'B-') {
  console.log('2.7');
} else if (score === 'C+') {
  console.log('2.3');
} else if (score === 'C0') {
  console.log('2.0');
} else if (score === 'C-') {
  console.log('1.7');
} else if (score === 'D+') {
  console.log('1.3');
} else if (score === 'D0') {
  console.log('1.0');
} else if (score === 'D-') {
  console.log('0.7');
} else {
  console.log('0.0');
}