/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  const countObj = {};
  const result = [];

  for (const num of nums) {
    countObj[num] = num in countObj ? countObj[num] + 1 : 1;

    if (countObj[num] > 1) {
      result.push(num);

      if (result.length === 2) break;
    }
  }

  return result;
};
