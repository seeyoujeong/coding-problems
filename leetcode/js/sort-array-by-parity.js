/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let j = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[j] % 2 === 1 && nums[i] % 2 === 0) {
      const temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    } else if (nums[j] % 2 === 0) {
      j++;
    }
  }

  return nums;
};

var sortArrayByParity = function (nums) {
  const even = [];
  const odd = [];

  for (const num of nums) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }

  return [...even, ...odd];
};
