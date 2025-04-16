/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
  const moved1 = Math.abs(x - z);
  const moved2 = Math.abs(y - z);

  return moved1 < moved2 ? 1 : moved1 === moved2 ? 0 : 2;
};
