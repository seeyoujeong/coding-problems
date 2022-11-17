// 숫자 찾기
function solution(num, k) {
  var answer = 0;
  const index = String(num).indexOf(String(k));
  
  answer = ~index ? index + 1 : -1;
  
  return answer;
}