/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const countNum = nums.reduce((acc, cur) => {
    acc[cur] = cur in acc ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  return Object.values(countNum).every((count) => count % 2 === 0);
};
