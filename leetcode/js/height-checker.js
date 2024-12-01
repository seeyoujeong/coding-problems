/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const expected = [...heights].sort((a, b) => a - b);

  return heights.filter((h, i) => h !== expected[i]).length;
};
