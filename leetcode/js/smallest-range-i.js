/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  return min + k >= max - k ? 0 : max - k - min - k;
};
