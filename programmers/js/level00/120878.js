// 유한소수 판별하기
function solution(a, b) {
  var answer = 0;
  const gcd = (a, b) => {
    while (b !== 0) {
      let tmp = a;
      a = b;
      b = tmp % a;
    }
    return a;
  };
  const finiteDecimal = (num) => {
    while (true) {
      if (num === 1) {
        return true;
      } else if (num % 2 === 0) {
        num /= 2;
      } else if (num % 5 === 0) {
        num /= 5;
      } else {
        return false;
      }
    }
  };
  const numerator = a / gcd(a, b);
  const denominator = b / gcd(a, b);
  const result = numerator / denominator;

  if (result === parseInt(result)) {
    answer = 1;
  } else if (finiteDecimal(denominator)) {
    answer = 1;
  } else {
    answer = 2;
  }

  return answer;
}

// 다른 풀이
// function solution(a, b) {
//   return Number((a / b).toFixed(10)) == a / b ? 1 : 2;
// }