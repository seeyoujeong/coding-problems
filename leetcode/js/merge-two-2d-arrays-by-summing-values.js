/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  const map = new Map(nums1);

  for (const [id, val] of nums2) {
    if (map.has(id)) {
      map.set(id, map.get(id) + val);
    } else {
      map.set(id, val);
    }
  }

  return [...map].sort((a, b) => a[0] - b[0]);
};
