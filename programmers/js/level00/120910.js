// 세균 증식
function solution(n, t) {
  return Array(t).fill(2).reduce((acc, cur) => acc * cur, n);
}

// 다른 풀이
// function solution(n, t) {
//   return n * (2 ** t);
// }