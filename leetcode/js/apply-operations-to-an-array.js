/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  const n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  const filtered = nums.filter((num) => num !== 0);
  const diff = n - filtered.length;

  for (let i = 0; i < diff; i++) {
    filtered.push(0);
  }

  return filtered;
};
