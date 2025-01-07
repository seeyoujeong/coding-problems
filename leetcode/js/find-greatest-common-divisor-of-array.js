/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  const getGCD = (a, b) => {
    while (b != 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }

    return a;
  };

  return getGCD(min, max);
};
