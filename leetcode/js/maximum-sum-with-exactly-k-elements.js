/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  let result = 0;
  const max = Math.max(...nums);

  for (let i = 0; i < k; i++) {
    result += max + i;
  }

  return result;
};

var maximizeSum = function (nums, k) {
  return k * (Math.max(...nums) + (k - 1) / 2);
};
