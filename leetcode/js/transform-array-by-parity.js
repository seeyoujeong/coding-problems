/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] % 2 === 0 ? 0 : 1;
  }

  return nums.sort((a, b) => a - b);
};
