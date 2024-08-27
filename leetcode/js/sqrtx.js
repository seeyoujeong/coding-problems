/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) {
    return x;
  }

  let left = 0;
  let right = Math.floor(x / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const pow = mid * mid;

    if (pow === x) {
      right = mid;
      break;
    } else if (pow < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};
