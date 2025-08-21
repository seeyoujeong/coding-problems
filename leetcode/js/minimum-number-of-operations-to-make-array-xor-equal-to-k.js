/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const xorSum = nums.reduce((acc, cur) => acc ^ cur, 0);
  const diff = xorSum ^ k;
  const bits = [...diff.toString(2)];

  let result = 0;

  for (const b of bits) {
    if (b === "1") {
      result++;
    }
  }

  return result;
};
