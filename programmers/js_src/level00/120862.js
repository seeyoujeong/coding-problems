// 최댓값 만들기 (2)
function solution(numbers) {
  var answer = 0;
  const arr = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] * numbers[j]);
    }
  }

  answer = Math.max(...arr);

  return answer;
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