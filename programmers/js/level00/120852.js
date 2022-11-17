// 소인수분해
function solution(n) {
  var answer = [];
  const isPrime = (num) => {
    if (num === 1) {
      return false;
    }

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) {
      answer.push(i);
    }
  }

  return answer;
}