// 7의 개수
function solution(array) {
  var answer = 0;

  answer = array
    .map(value => String(value).split(''))
    .flat()
    .filter(value => value == 7)
    .length;

  return answer;
}

// 다른 풀이
// function solution(array) {
//   return array.join('').split('7').length - 1;
// }