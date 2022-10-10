// 양꼬치
function solution(n, k) {
  var answer = 0;
  
  answer = 12000 * n + 2000 * k - 2000 * parseInt(n / 10);
  
  return answer;
}