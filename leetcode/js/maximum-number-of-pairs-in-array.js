/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let pairs = 0;
  let leftOver = 0;

  while (nums.length > 0) {
    const num = nums.shift();
    const idx = nums.indexOf(num);

    if (idx !== -1) {
      nums.splice(idx, 1);
      pairs++;
    } else {
      leftOver++;
    }
  }

  return [pairs, leftOver];
};
