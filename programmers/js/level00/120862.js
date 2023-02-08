// 최댓값 만들기 (2)
function solution(numbers) {
  return numbers
    .map((num, idx) => numbers.slice(idx + 1).map(v => num * v))
    .flat()
    .sort((a, b) => b - a)[0];
}

// 다른 풀이
// function solution(numbers) {
//   return [
//     ...new Set(
//       numbers.reduce(
//         (acc, cur, idx) => [
//           ...acc,
//           ...numbers.slice(idx + 1).map((v) => cur * v),
//         ],
//         []
//       )
//     ),
//   ].sort((a, b) => b - a)[0];
// }

// function solution(numbers) {
//   numbers.sort((a, b) => a - b);
//   return Math.max(numbers[0] * numbers[1], numbers.at(-1) * numbers.at(-2));
// }