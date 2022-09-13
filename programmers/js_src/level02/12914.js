// 멀리 뛰기
function solution(n) {
  var answer = 0;
  let a = 1;
  let b = 2;
  let c = a + b;
  
  if (n == 1) return 1;
  if (n == 2) return 2;
  
  for (let i = 3; i < n; i++) {
    a = b % 1234567;
    b = c % 1234567;
    c = a + b;
  }
  
  answer = c % 1234567;
  
  return answer;
}

// 다른 풀이
function solution(n) {
  if (n < 2) return 1;

  const count = [0, 1, 2, ...Array(n - 2).fill(0)];
  count.forEach((_, i) => {
    if (i > 2) count[i] = (count[i - 2] + count[i - 1]) % 1234567;
  });
  
  return count[n];
}