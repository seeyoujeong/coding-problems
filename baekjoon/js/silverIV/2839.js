// 설탕 배달
const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();
let flag = false;

if (input % 5 === 0) {
  console.log(input / 5);
  flag = true;
} else {
  for (let i = parseInt(input / 5); i >= 0; i--) {
    const tmp = input - 5 * i;

    if (tmp % 3 === 0) {
      console.log(tmp / 3 + i);
      flag = true;
      break;
    }
  }
}

if (!flag) {
  console.log(-1);
}

// 다른 풀이
// let bags = 0

// while (true) {
//   if (input % 5 === 0) {
//     console.log(input / 5 + bags);
//     break;
//   } else if (input < 0) {
//     console.log(-1);
//     break;
//   } else {
//     bags++;
//     input -= 3;
//   }
// }