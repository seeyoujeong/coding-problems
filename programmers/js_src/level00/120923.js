// 연속된 수의 합
function solution(num, total) {
  var answer = [];

  for (let i = total + num; ; i--) {
    if (answer.length === num) {
      const sum = answer.reduce((acc, cur) => acc + cur, 0);
      if (sum === total) {
        answer.sort((a, b) => a - b);
        break;
      } else {
        answer.shift();
        answer.push(i);
      }
    } else {
      answer.push(i);
    }
  }

  return answer;
}

// 다른 풀이
// function solution(num, total) {
//   var min = Math.ceil(total / num - Math.floor(num / 2));
//   var max = Math.floor(total / num + Math.floor(num / 2));

//   return new Array(max - min + 1).fill(0).map((_, i) => i + min);
// }