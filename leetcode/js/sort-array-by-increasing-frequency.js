/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const countNums = nums.reduce((acc, cur) => {
    acc[cur] = cur in acc ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  nums.sort((a, b) =>
    countNums[a] === countNums[b] ? b - a : countNums[a] - countNums[b]
  );

  return nums;
};
