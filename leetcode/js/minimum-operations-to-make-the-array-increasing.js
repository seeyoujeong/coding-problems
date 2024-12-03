/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let result = 0;

  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i - 1] - nums[i] + 1;

    if (diff > 0) {
      nums[i] += diff;
      result += diff;
    }
  }

  return result;
};
