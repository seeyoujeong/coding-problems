// 문자열 정렬하기 (1)
function solution(my_string) {
  var answer = [];

  answer = my_string
    .replace(/[a-z]/g, '')
    .split('')
    .map(Number)
    .sort((a, b) => a - b);

  return answer;
}