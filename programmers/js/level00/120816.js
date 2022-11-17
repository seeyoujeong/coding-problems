// 피자 나눠 먹기 (3)
function solution(slice, n) {
  var answer = 0;
  
  answer = Math.ceil(n / slice);
  
  return answer;
}