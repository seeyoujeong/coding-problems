/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);

  const [a, b, c, d] = [nums.at(-1), nums.at(-2), nums[0], nums[1]];

  return a * b - c * d;
};
