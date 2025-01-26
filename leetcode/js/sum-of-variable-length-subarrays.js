/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const start = Math.max(0, i - nums[i]);
    result += nums.slice(start, i + 1).reduce((acc, cur) => acc + cur, 0);
  }

  return result;
};
