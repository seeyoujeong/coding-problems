/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  const answer1 = nums1.filter((num) => nums2.includes(num)).length;
  const answer2 = nums2.filter((num) => nums1.includes(num)).length;

  return [answer1, answer2];
};
