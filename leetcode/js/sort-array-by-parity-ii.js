/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let i = 0;

  while (i < nums.length) {
    const isEvenIdx = i % 2 === 0;
    const isEvenNum = nums[i] % 2 === 0;

    if ((isEvenIdx && !isEvenNum) || (!isEvenIdx && isEvenNum)) {
      let j = i + 1;

      while (j < nums.length) {
        const isNextEvenNum = nums[j] % 2 === 0;

        if ((isEvenIdx && isNextEvenNum) || (!isEvenIdx && !isNextEvenNum)) {
          const temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
          break;
        }

        j++;
      }
    }

    i++;
  }

  return nums;
};

var sortArrayByParityII = function (nums) {
  let evenIdx = 0;
  let oddIdx = 1;

  while (evenIdx < nums.length && oddIdx < nums.length) {
    if (nums[evenIdx] % 2 !== 0 && nums[oddIdx] % 2 === 0) {
      [nums[evenIdx], nums[oddIdx]] = [nums[oddIdx], nums[evenIdx]];
    }

    if (nums[evenIdx] % 2 === 0) {
      evenIdx += 2;
    }

    if (nums[oddIdx] % 2 !== 0) {
      oddIdx += 2;
    }
  }

  return nums;
};
