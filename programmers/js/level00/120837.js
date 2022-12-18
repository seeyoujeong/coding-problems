// 개미 군단
function solution(hp) {
  const remainder5 = hp % 5;
  return parseInt(hp / 5) + parseInt(remainder5 / 3) + (remainder5 % 3);
}