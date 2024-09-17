/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let count = 1;

  while (n - count > 0) {
    n -= count;
    count++;
  }

  return n < count ? count - 1 : count;
};

var arrangeCoins = function (n) {
  let k = Math.floor(Math.sqrt(n * 2));

  if ((k * (k + 1)) / 2 > n) --k;

  return k;
};

var arrangeCoins = function (n) {
  let left = 0;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = (mid * (mid + 1)) / 2;

    if (sum === n) {
      return mid;
    }

    if (sum > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
};
