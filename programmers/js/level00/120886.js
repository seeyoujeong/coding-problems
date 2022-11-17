// A로 B 만들기
function solution(before, after) {
  var answer = 0;
  before = before.split('').sort().join('');
  after = after.split('').sort().join('');

  answer = before === after ? 1 : 0;

  return answer;
}