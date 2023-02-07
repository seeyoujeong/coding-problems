// 중복된 숫자 개수
function solution(array, n) {
  return array.filter(elem => elem === n).length;
}