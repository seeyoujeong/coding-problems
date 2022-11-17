// 세균 증식
function solution(n, t) {
  var answer = n;

  for (let i = 1; i <= t; i++) {
    answer *= 2;
  }

  return answer;
}

// 다른 풀이
// function solution(n, t) {
//   return n*(2**(t));
// }