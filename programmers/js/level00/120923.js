// 연속된 수의 합
function solution(num, total) {
  const answer = [];
  const start = Math.ceil(total / num - parseInt(num / 2));

  for (let i = 0; i < num; i++) {
    answer.push(start + i);
  }
  
  return answer;
}

// 다른 풀이
// function solution(num, total) {
//   const start = Math.ceil(total / num - parseInt(num / 2));
    
//   return Array(num).fill(0).map((_, i) => start + i);
// }