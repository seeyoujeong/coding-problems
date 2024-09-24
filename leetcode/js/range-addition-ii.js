/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let minRow = m;
  let minCol = n;

  for (const [r, c] of ops) {
    minRow = Math.min(minRow, r);
    minCol = Math.min(minCol, c);
  }

  return minRow * minCol;
};
