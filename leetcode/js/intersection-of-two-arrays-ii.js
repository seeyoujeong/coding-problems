/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const nums1Count = {};

  for (const num of nums1) {
    nums1Count[num] = num in nums1Count ? nums1Count[num] + 1 : 1;
  }

  const result = [];

  for (const num of nums2) {
    if (num in nums1Count && nums1Count[num] > 0) {
      result.push(num);
      nums1Count[num]--;
    }
  }

  return result;
};
