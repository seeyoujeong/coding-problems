/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const count = [...s].reduce((acc, cur) => {
    acc[cur] = cur in acc ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  let result = 0;
  let maxOdd = 0;

  for (const num of Object.values(count)) {
    if (num % 2 === 0) {
      result += num;
    } else {
      if (maxOdd > 0) {
        result += maxOdd < num ? maxOdd - 1 : num - 1;
      }

      maxOdd = Math.max(num, maxOdd);
    }
  }

  return result + maxOdd;
};
