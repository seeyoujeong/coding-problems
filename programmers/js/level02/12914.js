// 멀리 뛰기
function solution(n) {
  if (n < 3) return n;
  
  let a = 1;
  let b = 2;
  let c = a + b;
  
  for (let i = 3; i < n; i++) {
    a = b;
    b = c % 1234567;
    c = a + b;
  }
  
  return c % 1234567;
}

// 다른 풀이
// function solution(n) {
//   if (n < 2) return 1;

//   const count = [0, 1, 2, ...Array(n - 2).fill(0)];
//   count.forEach((_, i) => {
//     if (i > 2) count[i] = (count[i - 2] + count[i - 1]) % 1234567;
//   });

//   return count[n];
// }