/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let result = 0;
  let countL = 0;
  let countR = 0;

  for (const c of s) {
    if (c === "L") {
      countL++;
    } else if (c === "R") {
      countR++;
    }

    if (countL === countR) {
      result++;
      countL = 0;
      countR = 0;
    }
  }

  return result;
};
