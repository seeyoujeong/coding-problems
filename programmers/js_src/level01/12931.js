// 자릿수 더하기

function solution(n) {
  var answer = 0;

  answer = String(n).split('')
    .reduce((sum, current) => +sum + +current, 0);

  return answer;
}