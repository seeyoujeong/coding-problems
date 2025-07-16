/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  const before = nums.filter((num) => pivot > num);
  const equal = nums.filter((num) => pivot === num);
  const after = nums.filter((num) => pivot < num);

  return [...before, ...equal, ...after];
};

var pivotArray = function (nums, pivot) {
  const result = Array(nums.length);
  const n = nums.length - 1;
  let left = 0;
  let right = n;

  for (let i = 0; i <= n; i++) {
    if (nums[i] < pivot) {
      result[left] = nums[i];
      left++;
    }

    if (nums[n - i] > pivot) {
      result[right] = nums[n - i];
      right--;
    }
  }

  while (left <= right) {
    result[left] = pivot;
    left++;
  }

  return result;
};
