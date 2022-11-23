// 연속 부분 수열 합의 개수
function solution(elements) {
  var answer = 0;
  const len = elements.length;
  const result = new Set();
  
  elements.push(...elements);
  
  for (let i = 1; i <= len; i++) {       
    for (let j = 0; j < len; j++) {
      result.add(elements.slice(j, i + j).reduce((acc, cur) => acc + cur, 0));
    }
  }
  
  answer = result.size;
  
  return answer;
}