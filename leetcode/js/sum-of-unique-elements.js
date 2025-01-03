/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const countNums = nums.reduce((acc, cur) => {
    acc[cur] = cur in acc ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  let result = 0;

  for (const [k, v] of Object.entries(countNums)) {
    if (v === 1) {
      result += Number(k);
    }
  }

  return result;
};
