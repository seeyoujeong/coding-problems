// 2016년
function solution(a, b) {
  var answer = '';
  var day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  answer = day[new Date(2016, a - 1, b).getDay()];

  return answer;
}