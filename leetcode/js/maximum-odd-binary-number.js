/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  let countOne = 0;
  let countZero = 0;

  for (const b of s) {
    if (b === "1") {
      countOne++;
    } else {
      countZero++;
    }
  }

  return "1".repeat(countOne - 1) + "0".repeat(countZero) + "1";
};
