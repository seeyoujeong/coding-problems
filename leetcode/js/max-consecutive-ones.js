/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let result = 0;
  let count = 0;

  for (const num of nums) {
    if (num === 0) {
      result = Math.max(result, count);
      count = 0;
    }

    count += num;
  }

  result = Math.max(result, count);

  return result;
};
