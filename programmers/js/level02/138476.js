// 귤 고르기
function solution(k, tangerine) {
  let answer = 0;
  let sum = 0;
  const numOfSize = {};
  
  for (const size of tangerine) {
    numOfSize[size] = (numOfSize[size] || 0) + 1;
    
    if (numOfSize[size] >= k) {
      return 1;
    }
  }
  
  for (const num of Object.values(numOfSize).sort((a, b) => b - a)) {
    sum += num;
    answer++;
    
    if (sum >= k) {
      break;
    }
  }

  return answer;
}
