// 대문자와 소문자
function solution(my_string) {
  var answer = '';

  my_string.split('').forEach(char => {
    if (char.codePointAt(0) > 90) {
      answer += char.toUpperCase();
    } else {
      answer += char.toLowerCase();
    }
  });

  return answer;
}

// 다른 풀이
// function solution(my_string) {
//   return my_string
//     .split('')
//     .map(n => n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase())
//     .join('');
// }