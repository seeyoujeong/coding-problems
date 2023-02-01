// 대문자와 소문자
function solution(my_string) {
  return my_string
    .split('')
    .map(char => char.codePointAt(0) <= 90 ? 
      char.toLowerCase() : char.toUpperCase())
    .join('');
}