// 약수 구하기
function solution(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .filter(num => n % num === 0);
}