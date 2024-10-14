/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums.map((num) => num ** 2).sort((a, b) => a - b);
};

var sortedSquares = function (nums) {
  const result = Array(nums.length);
  let start = 0;
  let end = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[start] ** 2 > nums[end] ** 2) {
      result[i] = nums[start] ** 2;
      start++;
    } else {
      result[i] = nums[end] ** 2;
      end--;
    }
  }

  return result;
};
