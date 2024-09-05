/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n < 1) {
    return false;
  }

  while (n !== 1) {
    n /= 2;

    if (!Number.isInteger(n)) return false;
  }

  return true;
};

var isPowerOfTwo = function (n) {
  if (n === 0) return false;
  return Math.floor(Math.log2(n)) === Math.ceil(Math.log2(n));
};
