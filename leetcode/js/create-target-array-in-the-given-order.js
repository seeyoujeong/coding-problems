/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let result = [];

  for (let i = 0; i < index.length; i++) {
    const idx = index[i];

    if (i !== idx) {
      result = [...result.slice(0, idx), nums[i], ...result.slice(idx)];
    } else {
      result.push(nums[i]);
    }
  }

  return result;
};

var createTargetArray = function (nums, index) {
  let result = [];

  for (let i = 0; i < index.length; i++) {
    const idx = index[i];

    result.splice(idx, 0, nums[i]);
  }

  return result;
};
