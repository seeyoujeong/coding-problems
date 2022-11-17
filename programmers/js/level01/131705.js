// 삼총사
function solution(number) {
  var answer = 0;

  answer = getCombinations(number, 3)
    .filter(arr => arr.reduce((acc, cur) => acc + cur, 0) === 0)
    .length;

  return answer;
}

function getCombinations(arr, num) {
  const results = [];

  if (num === 1) return arr.map(elem => [elem]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, num - 1);
    const attached = combinations.map(elem => [fixed, ...elem]);
    results.push(...attached);
  });

  return results;
}

// 다른 풀이
// function solution(number) {
//   let result = 0;

//   const combination = (current, start) => {
//     if (current.length === 3) {
//       result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
//       return;
//     }

//     for (let i = start; i < number.length; i++) {
//       combination([...current, number[i]], i + 1);
//     }
//   }
//   combination([], 0);
//   return result;
// }