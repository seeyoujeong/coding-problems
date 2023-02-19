// 예산
function solution(d, budget) {
  let count = 0;
  let sum = 0;
  
  d.sort((a, b) => a - b);

  for (let amount of d) {
    sum += amount;
    
    if (sum > budget) {
      break;
    } else {
      count++;
    }
  }
  
  return count;
}

// 다른 풀이
// function solution(d, budget) {
//   return d
//     .sort((a, b) => a - b)
//     .reduce((acc, cur) => acc + ((budget -= cur) >= 0), 0);
// }

// function solution(d, budget) {
//   return d
//     .sort((a, b) => a - b)
//     .filter(x => budget - x >= 0 ? (budget -= x, true) : false)
//     .length;
// }