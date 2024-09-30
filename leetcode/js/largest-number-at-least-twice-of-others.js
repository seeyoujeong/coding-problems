/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let maxIdx = 0;

  for (let i = 1; i < nums.length; i++) {
    maxIdx = nums[maxIdx] < nums[i] ? i : maxIdx;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i !== maxIdx && nums[maxIdx] < nums[i] * 2) {
      return -1;
    }
  }

  return maxIdx;
};
