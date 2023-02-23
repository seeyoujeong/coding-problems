// 두 개 뽑아서 더하기
function solution(numbers) {
  return [...new Set(numbers.reduce((acc, cur, idx, arr) => 
    [...acc, ...arr.slice(idx + 1).map(num => num + cur)], []))]
    .sort((a, b) => a - b);
}

// 다른 풀이
// function solution(numbers) {
//   const answer = [];
  
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       answer.push(numbers[i] + numbers[j]);
//     }
//   }
  
//   return [...new Set(answer)].sort((a, b) => a - b);
// }