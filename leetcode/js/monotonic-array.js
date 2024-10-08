/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  if (nums.length === 1) {
    return true;
  }

  const isIncrease = nums[0] <= nums.at(-1);
  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (isIncrease && prev > nums[i]) {
      return false;
    } else if (!isIncrease && prev < nums[i]) {
      return false;
    }

    prev = nums[i];
  }

  return true;
};

var isMonotonic = function (nums) {
  let isIncrease = true;
  let isDecrease = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      isIncrease = false;
    }

    if (nums[i - 1] < nums[i]) {
      isDecrease = false;
    }
  }

  return isIncrease || isDecrease;
};
