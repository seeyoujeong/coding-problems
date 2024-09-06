/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n === 1) return true;

  while (n > 0 && (n % 2 === 0 || n % 3 === 0 || n % 5 === 0)) {
    if (n === 2 || n === 3 || n === 5) {
      return true;
    }

    if (n % 2 === 0) {
      n /= 2;
    } else if (n % 3 === 0) {
      n /= 3;
    } else if (n % 5 === 0) {
      n /= 5;
    }
  }

  return false;
};

var isUgly = function (n) {
  if (n <= 0) return false;

  for (const factor of [2, 3, 5]) {
    while (n % factor === 0) {
      n /= factor;
    }
  }

  return n === 1;
};
