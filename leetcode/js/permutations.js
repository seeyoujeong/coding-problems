/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const visited = Array(nums.length).fill(false);

  const findPermutations = (arr) => {
    if (arr.length === nums.length) {
      result.push(arr);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        findPermutations([...arr, nums[i]]);
        visited[i] = false;
      }
    }
  };

  findPermutations([]);

  return result;
};
