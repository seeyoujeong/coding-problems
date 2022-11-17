// 분수의 덧셈
function solution(denum1, num1, denum2, num2) {
  var answer = [];
  let resultNum = num1 * num2;
  let resultDenum = denum1 * num2 + denum2 * num1;
  let resultGcd = gcd(resultNum, resultDenum);

  answer = [resultDenum / resultGcd, resultNum / resultGcd];

  return answer;
}

function gcd(a, b) {
  while (b != 0) {
    let temp = a;
    a = b;
    b = temp % b;
  }

  return a;
}