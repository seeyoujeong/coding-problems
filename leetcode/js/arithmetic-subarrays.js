/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const result = [];

  for (let i = 0; i < l.length; i++) {
    let isValid = true;
    const sorted = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b);

    for (let j = 1; j < sorted.length; j++) {
      if (sorted[j] - sorted[j - 1] !== sorted[1] - sorted[0]) {
        isValid = false;
        break;
      }
    }

    result.push(isValid);
  }

  return result;
};
