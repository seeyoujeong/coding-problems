/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  const count = new Array(nums.length + 1).fill(0);
  const result = [];

  for (const num of nums) {
    if (result.length <= count[num]) {
      result.push([]);
    }

    result[count[num]].push(num);
    count[num]++;
  }

  return result;
};
