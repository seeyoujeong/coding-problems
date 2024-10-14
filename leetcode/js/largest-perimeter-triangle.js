/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);

  let result = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    if (isValidTriangle(nums[i], nums[i + 1], nums[i + 2])) {
      result = nums[i] + nums[i + 1] + nums[i + 2];
      break;
    }
  }

  return result;
};

function isValidTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
