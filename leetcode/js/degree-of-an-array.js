/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let maxCount = 0;
  const countObj = nums.reduce((acc, cur) => {
    acc[cur] = cur in acc ? acc[cur] + 1 : 1;
    maxCount = Math.max(acc[cur], maxCount);
    return acc;
  }, {});

  const maxNums = Object.entries(countObj)
    .filter(([k, v]) => v === maxCount)
    .map(([k, v]) => Number(k));

  let result = Infinity;

  maxNums.forEach((num) => {
    const first = nums.indexOf(num);
    const last = nums.lastIndexOf(num);

    result = Math.min(result, last - first + 1);
  });

  return result;
};

function findShortestSubArray(nums) {
  let left = {};
  let right = {};
  let count = {};

  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];
    if (left[x] === undefined) left[x] = i;
    right[x] = i;
    count[x] = (count[x] || 0) + 1;
  }

  let ans = nums.length;
  let degree = Math.max(...Object.values(count));

  for (let x in count) {
    if (count[x] === degree) {
      ans = Math.min(ans, right[x] - left[x] + 1);
    }
  }

  return ans;
}
