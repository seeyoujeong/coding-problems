/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return nums;

  const result = [];
  let start = null;
  let end = null;

  for (const num of nums) {
    if (start === null) {
      start = num;
      end = num;
      continue;
    }

    if (end + 1 === num) {
      end = num;
    } else {
      if (start === end) {
        result.push(`${start}`);
      } else {
        result.push(`${start}->${end}`);
      }

      start = num;
      end = num;
    }
  }

  if (start === end) {
    result.push(`${start}`);
  } else {
    result.push(`${start}->${end}`);
  }

  return result;
};

var summaryRanges = function (nums) {
  const result = [];
  let start = nums[0];

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) continue;

    if (start === nums[i - 1]) {
      result.push(`${start}`);
    } else {
      result.push(`${start}->${nums[i - 1]}`);
    }

    start = nums[i];
  }

  return result;
};
