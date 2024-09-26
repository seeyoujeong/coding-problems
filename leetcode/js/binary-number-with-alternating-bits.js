/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let prevBit = null;

  for (const bit of n.toString(2)) {
    if (prevBit === null) {
      prevBit = bit;
      continue;
    }

    if (prevBit === bit) {
      return false;
    }

    prevBit = bit;
  }

  return true;
};
