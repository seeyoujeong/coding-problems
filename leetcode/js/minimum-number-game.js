/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 1; i < nums.length; i += 2) {
    result.push(nums[i], nums[i - 1]);
  }

  return result;
};
