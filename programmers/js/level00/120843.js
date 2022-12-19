// 공 던지기
function solution(numbers, k) {
  return Array(k).fill(numbers).flat()[2 * (k - 1)];
}

// 다른 풀이
// function solution(numbers, k) {
//   return numbers[(--k * 2) % numbers.length];
// }