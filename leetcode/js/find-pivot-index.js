/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let result = -1;

  for (let i = 0; i < nums.length; i++) {
    const leftSum = nums.slice(0, i).reduce((acc, cur) => acc + cur, 0);
    const rightSum = nums.slice(i + 1).reduce((acc, cur) => acc + cur, 0);

    if (leftSum === rightSum) {
      result = i;
      break;
    }
  }

  return result;
};

var pivotIndex = function (nums) {
  let rightSum = nums.reduce((acc, cur) => acc + cur, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
};
