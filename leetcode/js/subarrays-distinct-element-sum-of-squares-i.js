/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    const set = new Set();

    for (let j = i; j < nums.length; j++) {
      set.add(nums[j]);

      count += set.size ** 2;
    }

    result += count;
  }

  return result;
};
