/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
  let singleDigitsSum = 0;
  let doubleDigitsSum = 0;

  for (const num of nums) {
    if (num < 10) {
      singleDigitsSum += num;
    } else {
      doubleDigitsSum += num;
    }
  }

  return singleDigitsSum !== doubleDigitsSum;
};
