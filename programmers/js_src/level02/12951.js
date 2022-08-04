// JadenCase 문자열 만들기

function solution(s) {
  var answer = '';
  let regexp = /^\d/;

  answer = s.split(' ')
            .map(a => regexp.test(a) ? 
                 a.toLowerCase() : 
                 a.slice(0, 1).toUpperCase() + a.slice(1,).toLowerCase())
            .join(' ');

  return answer;
}

// 다른 풀이
// function solution(s) {
//   return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
// }