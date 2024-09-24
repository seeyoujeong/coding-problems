/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const counts = Array(nums.length + 1).fill(0);

  for (const num of nums) {
    counts[num] += 1;
  }

  return [counts.indexOf(2), counts.slice(1).indexOf(0) + 1];
};
