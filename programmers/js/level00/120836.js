// 순서쌍의 개수
function solution(n) {
  let answer = 0;
  const sqrtN = Math.sqrt(n);
  
  for (let i = 1; i < sqrtN; i++) {
    if (n % i === 0) {
      answer += 2;
    }
  }
  
  return Number.isInteger(sqrtN) ? answer + 1 : answer;
}