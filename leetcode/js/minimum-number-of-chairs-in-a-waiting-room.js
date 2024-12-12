/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
  let result = 0;
  let count = 0;

  for (const state of s) {
    if (state === "E") {
      count++;
      result = Math.max(result, count);
    } else if (state === "L") {
      count--;
    }
  }

  return result;
};
