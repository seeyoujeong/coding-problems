/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let maxFreq = 0;
  const countNums = nums.reduce((acc, cur) => {
    acc[cur] = cur in acc ? acc[cur] + 1 : 1;
    maxFreq = Math.max(maxFreq, acc[cur]);

    return acc;
  }, {});

  let result = 0;

  for (const key in countNums) {
    if (countNums[key] === maxFreq) {
      result += maxFreq;
    }
  }

  return result;
};
