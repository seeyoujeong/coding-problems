/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const minH = Math.min(height[left], height[right]);
    const amount = (right - left) * minH;
    result = Math.max(result, amount);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
};
