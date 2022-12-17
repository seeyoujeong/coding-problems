// 문자 반복 출력하기
function solution(my_string, n) {
  return [...my_string].reduce((str, char) => str + char.repeat(n), '');
}