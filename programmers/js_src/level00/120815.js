// 피자 나눠 먹기 (2)
function solution(n) {
  var answer = 0;
  const gcd = (a, b) => {
    while (b != 0) {
      let tmp = a;
      a = b;
      b = tmp % a;
    }
    return a;
  };

  answer = n / gcd(n, 6);

  return answer;
}