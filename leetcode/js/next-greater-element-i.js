/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  return nums1.map((num) => {
    let idx = nums2.indexOf(num);

    while (idx + 1 < nums2.length) {
      if (num < nums2[idx + 1]) {
        return nums2[idx + 1];
      }

      idx++;
    }

    return -1;
  });
};
