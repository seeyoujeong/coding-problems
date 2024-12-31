/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [[]];

  const getSubset = (sub, idx) => {
    for (let i = idx; i < nums.length; i++) {
      let temp = [...sub, nums[i]];
      result.push(temp);
      getSubset(temp, i + 1);
    }
  };

  getSubset([], 0);

  return result;
};
