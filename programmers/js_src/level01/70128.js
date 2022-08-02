// 내적

function solution(a, b) {
  var answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

// 다른 풀이
function solution(a, b) {
  return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}