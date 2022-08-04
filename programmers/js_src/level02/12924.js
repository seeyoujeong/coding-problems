// 숫자의 표현

function solution(n) {
  var answer = 0;
  let num = n;

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      num -= j;

      if (num < 0) {
        num = n;
        break;
      }

      if (num == 0) {
        answer++;
        num = n;
        break;
      }
    }   
  }

  return answer;
}

// 다른 풀이
// function solution(num) {
//   var answer = 0;

// for(var i = 1; i <= num; i++) {
//   if (num % i == 0 && i % 2 == 1)
//     answer++
// }
//   return answer;
// }