/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);

  let result = Number.MIN_SAFE_INTEGER;

  result = Math.max(result, nums.at(-3) * nums.at(-2) * nums.at(-1));

  if (nums[0] < 0 && nums[1] < 0) {
    result = Math.max(result, nums[0] * nums[1] * nums.at(-1));
  }

  return result;
};
