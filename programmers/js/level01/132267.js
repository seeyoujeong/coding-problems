// 콜라 문제
function solution(a, b, n) {
  let answer = 0;
  let bottle = n;

  while (bottle >= a) {
    const tmp = ~~(bottle / a) * b;
    bottle = tmp + (bottle % a);
    answer += tmp;
  }

  return answer;
}

// 다른 풀이
// function solution(a, b, n) {
//   return ~~((n - b) / (a - b)) * b;
// }