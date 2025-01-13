/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let result = 0;

  for (const row of grid) {
    result += row.filter((n) => n < 0).length;
  }

  return result;
};
