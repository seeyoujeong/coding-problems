// 더 크게 합치기
function solution(a, b) {
  const ab = Number(`${a}${b}`);
  const ba = Number(`${b}${a}`);

  return Math.max(ab, ba);
}
