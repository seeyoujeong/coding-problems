/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let minIdx = 0;
  let i = 0;

  while (k > 0) {
    if (nums[i] < 0) {
      nums[i] = nums[i] * -1;
      minIdx = i;
      k--;
    } else {
      if (nums[minIdx] < nums[i]) {
        nums[minIdx] = nums[minIdx] * Math.pow(-1, k);
      } else {
        nums[i] = nums[i] * Math.pow(-1, k);
      }

      break;
    }

    i = i + 1 < nums.length ? i + 1 : i;
  }

  return nums.reduce((acc, cur) => acc + cur, 0);
};

var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] *= -1;
      k--;

      if (k === 0) {
        break;
      }
    }
  }

  if (k % 2 === 1) {
    nums[nums.length - 1] *= -1;
  }

  return nums.reduce((acc, cur) => acc + cur);
};
