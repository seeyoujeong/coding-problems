// 약수의 합
function solution(n) {
  return Array(n)
    .fill(0)
    .map((_, idx) => idx + 1)
    .filter(num => n % num === 0)
    .reduce((acc, cur) => acc + cur, 0);
}

// 다른 풀이
// function solution(n) {
//   var answer = 0;
//   let i;

//   for (i = 1; i <= Math.sqrt(n); i++){
//     if (!(n % i)) {
//       answer += (i + n / i);
//     }
//   }

//   i--;

//   return (i === n/i) ? answer-i : answer;
// }