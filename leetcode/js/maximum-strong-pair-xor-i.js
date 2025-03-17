/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
  let result = 0;

  for (const x of nums) {
    for (const y of nums) {
      if (Math.abs(x - y) <= Math.min(x, y)) {
        result = Math.max(result, x ^ y);
      }
    }
  }

  return result;
};
