/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sign = 1;
  const MIN = 2 ** 31 * -1;
  const MAX = 2 ** 31 - 1;

  if (x < 0) {
    x *= -1;
    sign = -1;
  }

  const reversed = [...String(x)].reverse().join("") * sign;

  if (reversed < MIN || reversed > MAX) {
    return 0;
  }

  return reversed;
};
