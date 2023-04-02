// n^2 배열 자르기
function solution(n, left, right) {
  return Array(right - left + 1)
    .fill(0)
    .map((_, idx) => left + idx)
    .map((num) => Math.max(Math.floor(num / n), num % n) + 1);
}
