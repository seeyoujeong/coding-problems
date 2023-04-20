// k진수에서 소수 개수 구하기
function solution(n, k) {
  return n
    .toString(k)
    .split("0")
    .filter((num) => isPrime(+num)).length;
}

function isPrime(num) {
  if (num === 1 || num === 0) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }
}
