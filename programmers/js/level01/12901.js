// 2016년
function solution(a, b) {
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return day[new Date(2016, a - 1, b).getDay()];
}

// 다른 풀이
// function solution(a, b) {
//   return new Date(2016, a - 1, b)
//     .toString()
//     .slice(0, 3)
//     .toUpperCase();
// }