/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const set = new Set(nums);
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (!set.has(i)) return i;
  }

  return len;
};

var missingNumber = function (nums) {
  const len = nums.length;
  const oneToLenSum = (len * (len + 1)) / 2;
  const numsSum = nums.reduce((acc, cur) => acc + cur, 0);

  return oneToLenSum - numsSum;
};
