// 하샤드 수
function solution(x) {
  return !(x % [...x.toString()].map(Number).reduce((a, b) => a + b, 0));
}
