/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
  let result = 0;
  let leftSum = 0;
  let rightSum = nums.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    rightSum -= nums[i];

    const diff = leftSum - rightSum;

    if (diff % 2 === 0) {
      result++;
    }
  }

  return result;
};
