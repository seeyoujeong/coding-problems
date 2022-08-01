// 정수 제곱근 판별

function solution(n) {
  var answer = 0;

  if (Number.isInteger(Math.sqrt(n))) {
    answer = Math.pow(Math.sqrt(n) + 1, 2)
  } else {
    answer = -1;
  }

  return answer;
}