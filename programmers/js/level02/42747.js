// H-Index
function solution(citations) {
  let hIndex = citations.length;
  
  while (citations.filter(num => hIndex <= num).length < hIndex) {
    hIndex--;
  }
  
  return hIndex;
}

// 다른 풀이
// function solution(citations) {
//   let answer = 0;
//   citations.sort((a, b) => b - a);
  
//   while (answer + 1 <= citations[answer]) {
//     answer++;
//   }
  
//   return answer;
// }