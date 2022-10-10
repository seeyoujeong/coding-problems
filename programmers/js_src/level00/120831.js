// 짝수의 합
function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      answer += i;
    }
  }

  return answer;
}

// 다른 풀이
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}