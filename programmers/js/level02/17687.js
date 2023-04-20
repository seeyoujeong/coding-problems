// [3차] n진수 게임
function solution(n, t, m, p) {
  let answer = "";
  let result = "";

  for (let i = 0; result.length < t * m; i++) {
    result += i.toString(n);
  }

  for (let i = 0; i < t; i++) {
    answer += result[p - 1 + m * i];
  }

  return n > 10 ? answer.toUpperCase() : answer;
}
