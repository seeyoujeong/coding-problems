/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let result = [];

  for (let i = 1; i < nums.length; i += 2) {
    const [freq, val] = [nums[i - 1], nums[i]];

    result = result.concat(Array(freq).fill(val));
  }

  return result;
};

var decompressRLElist = function (nums) {
  let result = [];

  for (let i = 1; i < nums.length; i += 2) {
    const [freq, val] = [nums[i - 1], nums[i]];

    result.push(...Array(freq).fill(val));
  }

  return result;
};
