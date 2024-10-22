/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  let subsets = [[]];

  for (const num of nums) {
    const newSubsets = subsets.map((subset) => [...subset, num]);
    subsets = [...subsets, ...newSubsets];
  }

  const max = nums.reduce((acc, cur) => acc | cur, 0);

  return subsets.filter(
    (subset) => subset.reduce((acc, cur) => acc | cur, 0) === max
  ).length;
};

var countMaxOrSubsets = function (nums) {
  let result = 0;
  const maxOr = nums.reduce((acc, cur) => acc | cur, 0);
  const dfs = (idx, sum) => {
    if (sum === maxOr) {
      result++;
    }

    if (idx === nums.length) {
      return;
    }

    for (let i = idx; i < nums.length; i++) {
      dfs(i + 1, sum | nums[i]);
    }
  };

  dfs(0, 0);

  return result;
};
