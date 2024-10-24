/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  let leftSum = 0;
  let rightSum = nums.reduce((acc, cur) => acc + cur, 0);

  return nums.map((num) => {
    rightSum -= num;
    const result = Math.abs(leftSum - rightSum);
    leftSum += num;
    return result;
  });
};
