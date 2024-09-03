/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let result = "";

  while (columnNumber > 0) {
    const char = String.fromCodePoint(65 + ((columnNumber - 1) % 26));
    result = char + result;
    columnNumber = parseInt((columnNumber - 1) / 26, 10);
  }

  return result;
};
