/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
  let result = 0;

  for (const num2 of nums2) {
    for (const num1 of nums1) {
      if (num1 % (num2 * k) === 0) {
        result++;
      }
    }
  }

  return result;
};
