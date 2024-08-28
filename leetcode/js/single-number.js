/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const count = {};

  for (const num of nums) {
    count[num] = num in count ? count[num] + 1 : 1;
  }

  const [key, val] = Object.entries(count).find(([_, v]) => v === 1);

  return Number(key);
};

var singleNumber = function (nums) {
  let result = 0;

  for (const num of nums) {
    result = result ^ num;
  }

  return result;
};
