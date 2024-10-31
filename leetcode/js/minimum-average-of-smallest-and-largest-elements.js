/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  nums.sort((a, b) => a - b);

  let start = 0;
  let end = nums.length - 1;
  const averages = [];

  while (start < end) {
    const sum = nums[start] + nums[end];
    averages.push(sum / 2);
    start++;
    end--;
  }

  return Math.min(...averages);
};
