/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  const nums = Array.from({ length: s.length + 1 }, (_, i) => i);
  const result = [];

  for (const flag of s) {
    if (flag === "I") {
      result.push(nums.shift());
    }

    if (flag === "D") {
      result.push(nums.pop());
    }
  }

  return result.concat(nums);
};

var diStringMatch = function (s) {
  const result = [];
  let left = 0;
  let right = s.length;

  for (const flag of s) {
    if (flag === "I") {
      result.push(left);
      left++;
    }

    if (flag === "D") {
      result.push(right);
      right--;
    }
  }

  result.push(left);

  return result;
};
