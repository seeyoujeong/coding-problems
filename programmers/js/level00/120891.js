// 369게임
function solution(order) {
  return String(order)
    .split('')
    .filter(num => num === '3' || num === '6' || num === '9')
    .length;
}

// 다른 풀이
// function solution(order) {
//   var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
//   return answer;
// }