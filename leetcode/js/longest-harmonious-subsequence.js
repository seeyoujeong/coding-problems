/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let result = 0;

  for (const num of nums) {
    if (nums.includes(num + 1)) {
      const count = nums.filter((n) => n === num || n === num + 1).length;
      result = Math.max(count, result);
    }
  }

  return result;
};

var findLHS = function (nums) {
  const numsMap = new Map();
  let result = 0;

  for (const num of nums) {
    numsMap.set(num, numsMap.has(num) ? numsMap.get(num) + 1 : 1);
  }

  for (const [key, val] of numsMap) {
    if (numsMap.has(key + 1)) {
      result = Math.max(numsMap.get(key) + numsMap.get(key + 1), result);
    }
  }

  return result;
};
