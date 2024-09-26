/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let firstNum = Infinity;
  let secondNum = Infinity;

  for (const num of nums) {
    if (num > firstNum && num > secondNum) {
      return true;
    }

    if (num > firstNum) {
      secondNum = num;
    } else {
      firstNum = num;
    }
  }

  return false;
};
