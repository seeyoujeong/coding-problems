// 특정 문자 제거하기
function solution(my_string, letter) {
  return my_string.split(letter).join('');
}

// 다른 풀이
// function solution(my_string, letter) {
//   return my_string.replace(new RegExp(`${letter}`, 'g'), '');
// }

// function solution(my_string, letter) {
//   return my_string.replaceAll(letter, '');
// }