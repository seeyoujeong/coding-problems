// 없는 숫자 더하기
function solution(numbers) {
  return Array(10)
    .fill(0)
    .map((_, idx) => idx)
    .filter(num => !numbers.includes(num))
    .reduce((acc, cur) => acc + cur, 0);
}

// 다른 풀이
// function solution(numbers) {
//   return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }