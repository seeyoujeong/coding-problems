// 9로 나눈 나머지
function solution(number) {
  return [...number].reduce((acc, cur) => acc + +cur, 0) % 9;
}
