/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const prefixProduct = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    prefixProduct[i] = nums[i - 1] * prefixProduct[i - 1];
  }

  const suffixProduct = Array(nums.length).fill(1);

  for (let i = nums.length - 2; i >= 0; i--) {
    suffixProduct[i] = nums[i + 1] * suffixProduct[i + 1];
  }

  return nums.map((_, idx) => prefixProduct[idx] * suffixProduct[idx]);
};
