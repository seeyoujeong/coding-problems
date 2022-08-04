// 피보나치 수

function solution(n) {
  var answer = 0;
  let d = Array(n).fill(0);
  
  d[0] = 0;
  d[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    d[i] = (d[i - 1] % 1234567) + (d[i - 2] % 1234567); 
  }
  
  answer = d[n] % 1234567;
  
  return answer;
}