// 유한소수 판별하기
function solution(a, b) {
  const FINITE_DECIMAL = 1;
  const INFINITE_DECIMAL = 2;
  const denominator = b / gcd(a, b);

  return isFiniteDecimal(denominator) ? FINITE_DECIMAL : INFINITE_DECIMAL;
}

function gcd(a, b) {
  while (b !== 0) {
    let tmp = a;
    a = b;
    b = tmp % a;
  }
  
  return a;
}

function isFiniteDecimal(num) {
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
}

// 다른 풀이
// function solution(a, b) {
//   return Number((a / b).toFixed(10)) == a / b ? 1 : 2;
// }