// 문자열 뒤집기
function solution(my_string) {
  var answer = '';

  answer = my_string.split('').reverse().join('');

  return answer;
}