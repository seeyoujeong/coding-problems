/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
  const sumOfDigitsArr = nums.map((num) =>
    Array.from(String(num), Number).reduce((acc, cur) => acc + cur, 0)
  );

  return Math.min(...sumOfDigitsArr);
};
