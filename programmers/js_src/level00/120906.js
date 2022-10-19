// 자릿수 더하기
function solution(n) {
  var answer = 0;
  
  answer = String(n).split('').reduce((acc, cur) => +acc + +cur, 0);
  
  return answer;
}