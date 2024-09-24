/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let result = 1;
  let count = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      count++;
    } else {
      result = Math.max(result, count);
      count = 1;
    }
  }

  return Math.max(result, count);
};
