// 피보나치 수
function solution(n) {
  const d = [0, 1, ...Array(n - 1).fill(0)];
  const mod1234567 = (num) => num % 1234567;
  
  for (let i = 2; i <= n; i++) {
    d[i] = mod1234567(d[i - 1]) + mod1234567(d[i - 2]); 
  }
  
  return mod1234567(d[n]);
}
