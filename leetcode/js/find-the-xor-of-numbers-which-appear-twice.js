/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
  const twiceNums = [];
  const count = {};

  nums.forEach((num) => {
    count[num] = num in count ? count[num] + 1 : 1;

    if (count[num] > 1) {
      twiceNums.push(num);
    }
  });

  return twiceNums.reduce((acc, cur) => acc ^ cur, 0);
};

var duplicateNumbersXOR = function (nums) {
  let result = 0;
  const set = new Set();

  nums.forEach((num) => {
    if (!set.has(num)) {
      set.add(num);
    } else {
      result ^= num;
    }
  });

  return result;
};
