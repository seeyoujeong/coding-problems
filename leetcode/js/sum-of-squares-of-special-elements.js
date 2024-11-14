/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
  return nums
    .filter((_, idx) => nums.length % (idx + 1) === 0)
    .reduce((acc, cur) => acc + cur ** 2, 0);
};
