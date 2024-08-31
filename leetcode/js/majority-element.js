/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let result = 0;
  const times = nums.length / 2;
  const count = {};

  for (const num of nums) {
    count[num] = num in count ? count[num] + 1 : 1;

    const prevNum = count[result] || 0;

    if (count[num] >= times && prevNum < count[num]) {
      result = num;
    }
  }

  return result;
};

var majorityElement = function (nums) {
  let result = 0;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      result = num;
    }

    count += result === num ? 1 : -1;
  }

  return result;
};
