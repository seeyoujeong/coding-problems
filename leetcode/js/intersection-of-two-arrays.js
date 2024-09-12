/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const result = new Set();
  const nums2Set = new Set(nums2);

  for (const num of nums1) {
    if (nums2Set.has(num)) {
      result.add(num);
    }
  }

  return [...result];
};
