// H-Index
function solution(citations) {
  var answer = 0;
  let count = citations.length;
  
  while (count) {
    if (citations.filter(value => count <= value).length >= count) {
      answer = count;
      break;
    }
    
    count--;
  }
  
  return answer;
}

// 다른 풀이
// function solution(citations) {
//   var answer = 0;
//   citations = citations.sort((a, b) => b - a);
  
//   while (answer + 1 <= citations[answer]) {
//     answer++;
//   }
  
//   return answer;
// }