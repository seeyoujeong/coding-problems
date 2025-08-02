/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const result = parseInt(s);
  const MIN = 2 ** 31 * -1;
  const MAX = 2 ** 31 - 1;

  if (Number.isNaN(result)) {
    return 0;
  }

  if (result < MIN) {
    return MIN;
  }

  if (result > MAX) {
    return MAX;
  }

  return result;
};
