// [3차] n진수 게임
function solution(n, t, m, p) {
  var answer = '';
  let result = '';

  for (let i = 0; i < t * m; i++) {
    result += i.toString(n).toUpperCase();
  }

  for (let i = 0; i < t; i++) {
    answer += result[p - 1 + m * i];
  }

  return answer;
}