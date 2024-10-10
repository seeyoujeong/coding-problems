/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let isIncreasing = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }

    if (isIncreasing) {
      if (arr[i] > arr[i + 1]) {
        if (i === 0) return false;
        isIncreasing = false;
      }
    } else {
      if (arr[i] < arr[i + 1]) {
        return false;
      }
    }
  }

  return !isIncreasing;
};
