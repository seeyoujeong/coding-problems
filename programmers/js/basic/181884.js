// n보다 커질 때까지 더하기
function solution(numbers, n) {
  return numbers.reduce((acc, cur) => (acc <= n ? acc + cur : acc), 0);
}
