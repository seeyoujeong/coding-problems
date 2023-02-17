// 문자열 내 p와 y의 개수
function solution(s) {
  s = s.toLowerCase();
  
  return s.split('p').length === s.split('y').length ? true : false;
}

// 다른 풀이
// function solution(s) {
//   return s.match(/p/ig).length == s.match(/y/ig).length;
// }