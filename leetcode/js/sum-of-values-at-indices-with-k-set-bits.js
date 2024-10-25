/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  return nums
    .filter((_, idx) => count1Bit(idx) === k)
    .reduce((acc, cur) => acc + cur, 0);
};

function count1Bit(num) {
  return num.toString(2).replaceAll("0", "").length;
}

var sumIndicesWithKSetBits = function (nums, k) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    let idx = i;

    while (idx > 0) {
      count += idx & 1;
      idx >>= 1;
    }

    if (count === k) {
      result += nums[i];
    }
  }

  return result;
};
