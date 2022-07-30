// 문자열 내 p와 y의 개수

function solution(s){
  var answer = true;

  var countP = s.split('').filter(char => char.toLowerCase() == 'p');
  var countY = s.split('').filter(char => char.toLowerCase() == 'y');

  if (countP.length == countY.length) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}

// 다른 풀이
// function solution(s){
//   return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
// }

// function solution(s) {
//   return s.match(/p/ig).length == s.match(/y/ig).length;
// }