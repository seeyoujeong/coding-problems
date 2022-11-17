// 콜라 문제
function solution(a, b, n) {
  var answer = 0;
  let bottle = n;

  while (bottle >= a) {
    const tmp = parseInt(bottle / a) * b;
    bottle = tmp + parseInt(bottle % a);
    answer += tmp;
  }

  return answer;
}