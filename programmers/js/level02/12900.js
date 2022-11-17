// 2 x n 타일링
function solution(n) {
  var answer = 0;
  let a = 0;
  let b = 1;

  if (n <= 1) return n;

  for (let i = 2; i <= n + 1; i++) {
    answer = a + b;
    a = b % 1000000007;
    b = answer % 1000000007;
  } 

  return answer % 1000000007;
}

// 다른 풀이
// function solution(n) {
//   const arr = [0, 1, 2];
//   for (let i = 3; i <= n; i++) {
//     arr[i] = (arr[i - 2] + arr[i - 1]) % 1000000007;
//   }

//   return arr[n];
// }