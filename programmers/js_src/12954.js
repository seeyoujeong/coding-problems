// x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  var answer = [];
  var num = x;

  for (let i = 0; i < n; i++) {
    answer.push(num);
    num += x;
  }

  return answer;
}

// 다른 풀이
// function solution(x, n) {
//   return Array(n).fill(x).map((v, i) => (i + 1) * v)
// }