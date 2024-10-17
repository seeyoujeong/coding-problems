/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    result += nums.slice(i + 1).filter((num) => num === nums[i]).length;
  }

  return result;
};

var numIdenticalPairs = function (nums) {
  let result = 0;
  const countObj = {};

  for (const num of nums) {
    if (num in countObj) {
      result += countObj[num];
      countObj[num]++;
    } else {
      countObj[num] = 1;
    }
  }

  return result;
};
