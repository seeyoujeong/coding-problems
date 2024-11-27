/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  return nums.flatMap((num) => [...String(num)].map(Number));
};

var separateDigits = function (nums) {
  return nums.join("").split("").map(Number);
};
