/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const result = new Set();
  const set = new Set();

  for (const nums of [nums1, nums2, nums3]) {
    const numsSet = new Set(nums);

    for (const num of numsSet) {
      if (set.has(num)) {
        result.add(num);
      } else {
        set.add(num);
      }
    }
  }

  return [...result];
};
