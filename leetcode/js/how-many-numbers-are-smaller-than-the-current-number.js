/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const result = [];

  for (const num of nums) {
    const count = nums.filter((n) => n < num).length;
    result.push(count);
  }

  return result;
};

var smallerNumbersThanCurrent = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const countMap = sorted.reduce((acc, cur, idx) => {
    if (!acc.has(cur)) {
      acc.set(cur, idx);
    }

    return acc;
  }, new Map());

  return nums.map((num) => countMap.get(num));
};
