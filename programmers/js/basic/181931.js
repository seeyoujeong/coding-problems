// 등차수열의 특정한 항만 더하기
function solution(a, d, included) {
  return included.reduce(
    (acc, cur, idx) => (cur ? (acc += a + d * idx) : acc),
    0
  );
}
