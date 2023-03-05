// 이진 변환 반복하기
function solution(s) {
  const answer = [0, 0];
  
  while (s != 1) {
    const len = s.length;
    const removelen = s.split('0').join('').length;
    
    s = removelen.toString(2);
    
    answer[0]++;
    answer[1] += len - removelen;
  }
  
  return answer;
}

// 다른 풀이
// function solution(s) {
//   var answer = [0, 0];

//   while(s.length > 1) {
//     answer[0]++;
//     answer[1] += (s.match(/0/g) || []).length;
//     s = s.replace(/0/g, '').length.toString(2);
//   }

//   return answer;
// }