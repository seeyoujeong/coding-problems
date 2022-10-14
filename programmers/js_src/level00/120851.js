// 숨어있는 숫자의 덧셈 (1)
function solution(my_string) {
  var answer = 0;

  answer = my_string
    .match(/\d/g)
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);

  return answer;
}