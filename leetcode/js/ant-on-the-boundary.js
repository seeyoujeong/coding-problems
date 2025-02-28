/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
  let result = 0;
  let steps = 0;

  for (const num of nums) {
    steps += num;

    if (steps === 0) {
      result++;
    }
  }

  return result;
};
