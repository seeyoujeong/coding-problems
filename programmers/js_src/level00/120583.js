// 중복된 숫자 개수
function solution(array, n) {
  var answer = 0;

  answer = array.filter(value => value === n).length;

  return answer;
}