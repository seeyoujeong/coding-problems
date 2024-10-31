/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  const elemSum = sum(nums);
  const digitSum = sum(nums, (num) => sum(Array.from(String(num), Number)));

  return Math.abs(elemSum - digitSum);
};

function sum(nums, fn = (num) => num) {
  return nums.reduce((acc, cur) => acc + fn(cur), 0);
}

var differenceOfSum = function (nums) {
  const elemSum = nums.reduce((acc, cur) => acc + cur, 0);
  const digitSum = Array.from(nums.join(""), Number).reduce(
    (acc, cur) => acc + cur,
    0
  );

  return Math.abs(elemSum - digitSum);
};
