/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums = [...new Set(nums)];
  nums.sort((a, b) => b - a);

  if (nums.length < 3) {
    return nums[0];
  }

  return nums[2];
};

var thirdMax = function (nums) {
  let first = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;
  let third = Number.MIN_SAFE_INTEGER;

  for (const num of nums) {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (second < num && num < first) {
      third = second;
      second = num;
    } else if (third < num && num < second) {
      third = num;
    }
  }

  if (
    first === second ||
    second === third ||
    third === Number.MIN_SAFE_INTEGER
  ) {
    return first;
  }

  return third;
};
