// 문자열 정렬하기 (1)
function solution(my_string) {
  return my_string
    .replace(/[a-z]/g, '')
    .split('')
    .map(Number)
    .sort((a, b) => a - b);
}