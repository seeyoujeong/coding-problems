/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    const binary = i.toString(2);
    const countBits = [...binary].filter((b) => b === "1").length;

    if (isPrime(countBits)) {
      result += 1;
    }
  }

  return result;
};

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
